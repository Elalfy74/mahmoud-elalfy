import Image from 'next/image';

export const Testimonial = ({ test }: any) => {
  return (
    <div className='text-center flex flex-col items-center rounded-lg bg-bg_third min-h-[18rem] px-7 pb-3 lg:px-9 dark:bg-slate-800'>
      <Image
        width={80}
        height={80}
        className='-translate-y-8 rounded-full '
        src={test.author_avatar.asset.url}
        alt='person'
      />
      <h3 className='text-xl font-semibold text-main dark:text-second'>
        {test.author_name}
      </h3>
      <p className='mb-4 text-gray-400'>{test.author_major}</p>
      <p>{test.body}</p>
    </div>
  );
};
