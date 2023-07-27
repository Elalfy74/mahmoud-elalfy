'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { CircleLogo, SocialBar, SkillsIcons } from '@/components';
import { DownloadButton } from './download-button';

export const Hero = () => {
  return (
    <section
      id='hero'
      className='h-screen pt-32 overflow-hidden background dark:bg-none md:pt-48'
    >
      <div className='container relative flex flex-col justify-between md:items-center md:flex-row'>
        {/* Details Section */}
        <motion.div
          className='mb-12 md:mb-0'
          variants={heroLeftVariants}
          initial='hidden'
          animate='visible'
        >
          <h1 className='mb-4 text-5xl font-extrabold linear lg:text-7xl dark:dark-linear'>
            Mahmoud <br />
            Elalfy
          </h1>
          <h3 className='mb-4 font-bold xl:text-lg dark:text-d_second'>
            Junior Full-Stack Developer
          </h3>
          <blockquote className='mb-6 text-sm font-bold capitalize lg:text-md text-main_light xl:text-lg dark:text-green-100'>
            “I develop websites that ignite your business”
          </blockquote>
          {/* buttons */}
          <div className='flex'>
            <a
              href='mailto: mahmoudelalfy13@gmail.com'
              className='mr-4 text-white btn-r btn-bg dark:dark-btn-bg xl:text-lg'
            >
              Hire Me
            </a>
            <DownloadButton href='/resume.pdf' />
          </div>
        </motion.div>
        {/*End Details Section */}
        <SocialBar />
        {/* Img Section */}
        <motion.div
          className='relative w-[300px] lg:w-[400px] xl:w-[450px] self-end md:self-auto'
          variants={heroRightVariants}
          initial='hidden'
          animate='visible'
        >
          <Image
            height={600}
            width={450}
            src='/hero.webp'
            alt='hero'
            className='relative z-[3]'
            priority
          />
          <div className='absolute top-1/4 lg:top-32 lg:-right-8 xl:top-32 right-4 z-[1]'>
            <Image
              height={600}
              width={450}
              src='/triangle.webp'
              alt='hero'
              priority
              className='lg:w-[90%]'
            />
          </div>
          {/* Start Skills */}
          <div className='rounded-full absolute w-44 h-44 top-20 -right-2 bg-second blur-[80px]'></div>
          <div className='absolute top-16'>
            <CircleLogo size='lg'>
              <SkillsIcons.react />
            </CircleLogo>
          </div>
          <div className='absolute top-0 right-0'>
            <CircleLogo size='md'>
              <SkillsIcons.nest />
            </CircleLogo>
          </div>
          <div className='absolute top-52 lg:top-[18rem] -left-16 lg:-left-20 z-[2]'>
            <CircleLogo size='sm'>
              <SkillsIcons.next />
            </CircleLogo>
          </div>
          {/* End Skills */}
        </motion.div>
      </div>
      {/* Social Media */}
    </section>
  );
};

const heroLeftVariants = {
  hidden: {
    x: '-50vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'ween',
      duration: 1,
      delay: 1.1,
    },
  },
};

const heroRightVariants = {
  ...heroLeftVariants,
  hidden: {
    x: '50vw',
    opacity: 0,
  },
};
