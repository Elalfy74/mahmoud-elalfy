import { cn } from '@/utils/cn';
import Image from 'next/image';

interface Props {
  children?: React.ReactNode;
  size: keyof typeof sizes;
  logo?: string;
}

export const CircleLogo = ({ size, logo, children }: Props) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center rounded-full shadow-xl p-4',
        sizes[size],
        size === 'xs'
          ? 'md:p-3 bg-white dark:bg-d_main dark:bg-opacity-90'
          : 'dark:bg-d_second dark:bg-opacity-50'
      )}
    >
      {children}
      {logo && <Image src={logo} alt='logo' height={50} width={50} />}
    </div>
  );
};

const sizes = {
  xs: 'w-10 h-10 lg:w-12 lg:h-12',
  sm: 'w-16 h-16 lg:w-28 lg:h-28',
  md: 'w-20 h-20 lg:w-28 lg:h-28',
  lg: 'w-24 h-24 lg:w-36 lg:h-36',
};
