import Image from 'next/image';

export const AboutMe = () => {
  return (
    <div className='flex flex-col justify-between lg:items-center lg:flex-row '>
      <div className='flex-1 order-2'>
        <Image
          className='border border-black w-80'
          src='/aboutme.jpg'
          width={600}
          height={600}
          alt='about picture'
        />
      </div>
      <div className='flex-1 mb-6 text-sm lg:order-3 lg:mb-0 md:text-base'>
        <p className='mb-2'>
          Hello I&apos;m <span className='highlight'>Mahmoud</span> a 23 years
          old software engineer specializing in Front-End Development. My
          interests in web development started from 2019 during this period I
          got few certifications and built serval projects.
        </p>

        <p className='mb-2'>
          I have Bachelor&apos;s degree in Computer Science and Engineering from
          Zagazig university, I graduated with a total GPA of 3.3
        </p>
        <p className='mb-2'>
          My Graduation Project was a{' '}
          <span className='highlight'>Smart Home With Virtual Assistant.</span>{' '}
          I was responsible for mobile App which can control the home devices
          and can use the virtual assistant to give commands and ask for news or
          information.
        </p>
        <p>
          I took <span className='highlight'>ITI</span> Summer Internship at
          Front-End Development and built website with Vue.js and Bootstrap.
        </p>
      </div>
    </div>
  );
};
