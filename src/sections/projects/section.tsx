import { use } from 'react';
import { motion } from 'framer-motion';

import { sectionVariants } from '@/utils/variants';
import { Project } from './project';
import { getProjects } from './getProjects';

const dataPromise = getProjects();

export const ProjectsList = () => {
  const projects = use(dataPromise);

  return (
    <motion.section
      id='projects'
      className='overflow-hidden background section dark:bg-slate-800'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <h1 className='heading'>
        <span>Projects</span>
      </h1>
      <ul className='container grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: any, i: number) => (
          <motion.li
            key={project._id}
            // variants={projectVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{
              type: 'ween',
              duration: 1,
              delay: i * 0.3,
            }}
          >
            <Project project={project} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
