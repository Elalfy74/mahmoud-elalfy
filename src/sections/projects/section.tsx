import { use } from 'react';
import { motion } from 'framer-motion';

import { itemVariants, sectionVariants } from '@/utils/variants';
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
        {projects.map((project) => (
          <motion.li
            key={project._id}
            variants={itemVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Project project={project} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
