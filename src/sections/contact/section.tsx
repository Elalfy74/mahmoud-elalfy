import { motion } from 'framer-motion';

import { ContactForm } from './contact-form';
import { sectionVariants } from '@/utils/variants';
import Image from 'next/image';

export const Contact = () => {
  return (
    <motion.section
      id='contact'
      className='container mb-0 overflow-hidden section'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h1 className='heading'>
        <span>Contact</span>
      </h1>
      <div className='flex flex-col overflow-hidden lg:flex-row'>
        <motion.div
          className='flex-1 hidden overflow-hidden md:block'
          variants={leftVariants}
        >
          <Image
            width={600}
            height={600}
            className='scale-x-[-1] xl:w-[80%] mx-auto'
            src='/contact.gif'
            alt='contact-img'
          />
        </motion.div>
        <motion.div className='flex-1 overflow-hidden' variants={rightVariants}>
          <h3 className='mb-8 text-lg font-semibold text-center'>
            Don&apos;t Be Shy and <span className='highlight'>Contact Me</span>
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export const leftVariants = {
  hidden: {
    x: '-50vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'ween',
      duration: 0.8,
    },
  },
};
export const rightVariants = {
  hidden: {
    x: '50vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'ween',
      duration: 0.8,
    },
  },
};
