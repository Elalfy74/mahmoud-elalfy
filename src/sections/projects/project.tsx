import { AiOutlineEye } from 'react-icons/ai';
import { BsCodeSlash } from 'react-icons/bs';

import { Tooltip, CircleLogo } from '@/components';
import Image from 'next/image';

export const Project = ({ project }: any) => {
  return (
    <div className='relative'>
      <div className='overflow-hidden overlay group rounded-xl after:absolute after:btn-bg after:h-1 after:w-full after:bottom-0'>
        <Image
          src={project.mainImage.asset.url}
          alt='project name'
          className='w-full max-w-full'
          height={400}
          width={400}
        />
        <div className='absolute hidden gap-5 -translate-x-1/2 -translate-y-1/2 group-hover:flex left-1/2 top-1/2'>
          <a href={project.previewLink} target='_blank'>
            <Tooltip title='Preview'>
              <CircleLogo size='xs'>
                <AiOutlineEye fontSize={22} color='black' />
              </CircleLogo>
            </Tooltip>
          </a>
          <a href={project.githubLink} target='_blank'>
            <Tooltip title='Code'>
              <CircleLogo size='xs'>
                <BsCodeSlash fontSize={22} color='black' />
              </CircleLogo>
            </Tooltip>
          </a>
        </div>
      </div>
      <ul className='absolute flex gap-2 -top-6 -right-4'>
        {project.tools.map((tool: any) => (
          <li key={tool.title}>
            <CircleLogo logo={tool.mainImage.asset.url} size='xs' />
          </li>
        ))}
      </ul>
      <p className='px-2 py-1 mx-auto text-gray-500 -translate-y-4 rounded-lg w-fit bg-bg_sec dark:bg-slate-700 dark:text-slate-200'>
        {project.type}
      </p>
      <h3 className='font-bold text-main dark:text-second'>{project.title}</h3>
      <p className='font-semibold'>{project.desc}</p>
    </div>
  );
};
