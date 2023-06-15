'use client';

import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/utils/variants';

const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/Elalfy74',
    icon: <FiGithub />,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/mahmoud-elalfy-79b894209/',
    icon: <FiLinkedin />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/Mahmoudelalfy74',
    icon: <FiTwitter />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/mahmoud_kamal_elalfy/',
    icon: <FiInstagram />,
  },
];

export const SocialList = () => (
  <ul className='flex flex-row gap-6 lg:flex-col lg:gap-0'>
    {socialLinks.map((link) => (
      <li className='mb-[10px]' key={link.name}>
        <a
          href={link.url}
          target='_blank'
          className='text-lg text-gray-400 cursor-pointer lg:text-2xl dark:text-slate-500 hover:text-main dark:hover:text-second tr'
        >
          {link.icon}
        </a>
      </li>
    ))}
  </ul>
);

export const SocialBar = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial='hidden'
      animate='visible'
      className='hidden lg:block z-[1000] fixed bottom-24 after:absolute after:-bottom-28 after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-24 after:bg-slate-500'
    >
      <SocialList />
    </motion.div>
  );
};
