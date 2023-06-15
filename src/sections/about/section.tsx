'use client';

import { motion } from 'framer-motion';

import { AboutMe } from './about-me';
import { sectionVariants } from '@/utils/variants';

export const About = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      id='about'
      className='container pb-8 my-8 md:pb-24 md:my-12 '
    >
      <h1 className='heading'>
        <span>About</span> <span>Me</span>
      </h1>
      <AboutMe />
    </motion.section>
  );
};
