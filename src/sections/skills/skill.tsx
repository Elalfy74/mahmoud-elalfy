import { Tooltip } from '@/components';

interface Props {
  name: string;
  children: React.ReactNode;
}

export const Skill = ({ name, children }: Props) => {
  return (
    <Tooltip title={name}>
      <div className='w-16 p-2 rounded-lg shadow-lg cursor-pointer xl:w-24 h-14 xl:h-20 center dark:bg-d_main'>
        {children}
      </div>
    </Tooltip>
  );
};
