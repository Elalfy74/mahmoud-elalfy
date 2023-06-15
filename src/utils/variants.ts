import type { Variants } from 'framer-motion';

export const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const itemVariants: Variants = {
  ...sectionVariants,
  visible: {
    ...sectionVariants.visible,
    transition: {
      duration: 1,
    },
  },
};
