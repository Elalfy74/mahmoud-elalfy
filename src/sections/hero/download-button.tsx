import { BsDownload } from 'react-icons/bs';

export const DownloadButton = ({ href }: { href: string }) => {
  return (
    <a
      target='_blank'
      href={href}
      className='relative block w-40 overflow-hidden border btn-r border-main text-main xl:text-lg tr group hover:bg-main hover:text-white dark:border-second dark:text-second dark:hover:bg-second'
    >
      <div className='absolute w-full h-full -translate-x-1/2 -translate-y-1/2 center top-1/2 left-1/2 group-hover:-translate-y-20 tr'>
        Download CV
      </div>
      <span className='absolute -translate-x-1/2 translate-y-5 top-1/2 left-1/2 group-hover:-translate-y-1/2 tr'>
        <BsDownload className='text-white dark:text-slate-900' />
      </span>
    </a>
  );
};
