'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { skillsAndTools } from './data';
import { sectionVariants } from '@/utils/variants';
import { Skill } from './skill';

export const SkillsList = () => {
  const [currentSkills, setCurrentSkills] = useState<'skill' | 'tool'>('skill');

  const filteredSkills = skillsAndTools.filter(
    (skill) => skill.type === currentSkills
  );

  const skillState =
    currentSkills === 'skill' ? 'skill_btn_active' : 'skill_btn_inactive';

  const toolState =
    currentSkills === 'tool' ? 'skill_btn_active' : 'skill_btn_inactive';

  return (
    <section id='skills' className='relative overflow-hidden'>
      <motion.div
        className='container overflow-hidden section '
        variants={sectionVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <h1 className='heading'>
          <span>Skills</span> <span>And</span> <span>Tools</span>
        </h1>
        <div className='flex-col gap-10 overflow-hidden center md:flex-row md:gap-28'>
          {/* Start Buttons */}
          <div className='flex md:flex-col'>
            <button
              className={`${skillState} mr-4 md:mr-0 md:mb-12 skill_btn
          `}
              onClick={() => setCurrentSkills('skill')}
            >
              Skills
            </button>
            <button
              className={`${toolState} skill_btn `}
              onClick={() => setCurrentSkills('tool')}
            >
              Tools
            </button>
          </div>
          {/* End Buttons */}
          {/* Start Skills */}
          <ul className='min-h-[330px] grid grid-cols-3 md:grid-cols-4 gap-10 p-10 border border-grey dark:border-second rounded-lg'>
            {filteredSkills.map((skill, i) => (
              <li key={skill.name}>
                <Skill name={skill.name}>
                  <skill.icon />
                </Skill>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <div className='absolute hidden md:block top-20 -left-10 '>
        <Image src='/square.png' width={200} height={200} alt='square' />
      </div>
      <div className='absolute hidden md:block bottom-10 -right-20'>
        <Image src='/square.png' width={200} height={200} alt='square' />
      </div>
    </section>
  );
};
