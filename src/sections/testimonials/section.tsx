import { use } from 'react';
import { motion } from 'framer-motion';

import { itemVariants, sectionVariants } from '@/utils/variants';
import { Testimonial } from './testimonial';
import { getTestimonials } from './getTestimonials';
import Image from 'next/image';

const dataPromise = getTestimonials();

export const TestimonialsList = () => {
  const testimonials = use(dataPromise);

  return (
    <motion.section
      id='testimonials'
      className='relative overflow-hidden section'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h1 className='mb-20 heading'>
        <span>Testimonials</span>
      </motion.h1>
      <ul className='relative z-[3] container grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {testimonials.map((test: any, i: number) => (
          <motion.li
            key={test._id}
            className='min-h-[22rem]'
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Testimonial test={test} />
          </motion.li>
        ))}
      </ul>
      <div className='absolute hidden md:block top-40 -right-10 '>
        <Image src='/square.png' width={200} height={200} alt='square' />
      </div>
      <div className='absolute hidden md:block bottom-10 -left-20 '>
        <Image src='/square.png' width={200} height={200} alt='square' />
      </div>
    </motion.section>
  );
};
