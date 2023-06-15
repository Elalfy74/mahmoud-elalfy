'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

import { Burger, Logo } from '@/components';
import { useMode } from '@/store/mode';
import { cn } from '@/utils/cn';

const linkVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const logoVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'ween',
      delay: 0.5,
    },
  },
};

const links = [
  { name: 'Home', url: '#' },
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Testimonials', url: '#testimonials' },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'ween',
      duration: 0.5,
    },
  },
};

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeHeader, setActiveHeader] = useState(false);

  const { mode, toggleMode } = useMode();

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.scrollY >= 100) {
        setActiveHeader(true);
      } else {
        setActiveHeader(false);
      }
    });
  }, []);

  return (
    <header className={mode}>
      <div className='header'>
        <div className='container '>
          <div
            id='inner-header'
            className={cn(
              'flex items-center justify-between py-2 md:py-4',
              activeHeader &&
                'md:rounded-md md:shadow-md md:bg-white md:px-5 dark:md:bg-slate-800'
            )}
          >
            <motion.div
              variants={logoVariants}
              initial='hidden'
              animate='visible'
            >
              <Logo />
            </motion.div>
            <div className='flex items-center'>
              <nav className='items-center hidden md:flex'>
                <ul className='flex xl:mr-20 2xl:mr-20'>
                  {links.map((link, i) => (
                    <motion.li
                      variants={linkVariants}
                      initial='hidden'
                      animate='visible'
                      transition={{ type: 'ween', delay: i * 0.4 }}
                      key={link.name}
                      className='mr-8 font-bold cursor-pointer lg:mr-20 xl:text-xl text-main line dark:text-white'
                    >
                      <a href={link.url}>{link.name}</a>
                    </motion.li>
                  ))}
                </ul>
                <a
                  href='#contact'
                  className='mr-4 border btn border-main text-main hover:bg-main hover:text-white tr xl:text-lg dark:text-white dark:border-second dark:hover:bg-second dark:hover:text-slate-900'
                >
                  Contact
                </a>
              </nav>
              <div className='mr-4 md:hidden'>
                <Burger active={activeMenu} setActive={setActiveMenu} />
              </div>
              <div onClick={toggleMode}>
                {mode === 'light' ? (
                  <BsFillSunFill className='w-5 h-5 cursor-pointer text-main md:h-6 md:w-6' />
                ) : (
                  <BsFillMoonStarsFill className='w-5 h-5 cursor-pointer text-second md:h-6 md:w-6' />
                )}
              </div>
            </div>
          </div>
        </div>

        {activeMenu && (
          <motion.ul
            className='container bg-white opacity-90 dark:bg-slate-800 md:hidden'
            variants={menuVariants}
            initial='hidden'
            animate='visible'
          >
            {links.map((link) => (
              <li
                key={link.name}
                className='py-3 border-b cursor-pointer border-grey dark:border-slate-900 dark:text-slate-300 hover:text-main dark:hover:text-second tr'
                onClick={() => setActiveMenu(false)}
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
            <li
              className='py-3 border-b cursor-pointer border-grey dark:border-slate-900 dark:text-slate-300 hover:text-main dark:hover:text-second tr'
              onClick={() => setActiveMenu(false)}
            >
              <a href='#contact'>Contact</a>
            </li>
          </motion.ul>
        )}
      </div>
    </header>
  );
};
