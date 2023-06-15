'use client';

import { motion } from 'framer-motion';

import { ContactForm } from './contact-form';
import { sectionVariants } from '@/utils/variants';
import Image from 'next/image';

export const Contact = () => {
  return (
    <motion.section
      id='contact'
      className='container overflow-hidden section '
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h1 className='heading'>
        <span>Contact</span>
      </h1>
      <motion.div
        className='flex flex-col overflow-hidden lg:flex-row'
        variants={sectionVariants}
      >
        <div className='flex-1 hidden overflow-hidden md:block '>
          <Image
            width={600}
            height={600}
            className='scale-x-[-1] xl:w-[80%] mx-auto'
            src='/contact.gif'
            alt='contact-img'
          />
        </div>
        <div className='flex-1 overflow-hidden'>
          <h3 className='mb-8 text-lg font-semibold text-center'>
            Don&apos;t Be Shy and <span className='highlight'>Contact Me</span>
          </h3>
          <ContactForm />
        </div>
      </motion.div>
    </motion.section>
  );
};
