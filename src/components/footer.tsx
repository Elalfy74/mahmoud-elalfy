import { SocialList } from './social-bar';

export const Footer = () => {
  return (
    <footer className='pt-16 text-center bg-main dark:bg-slate-800 '>
      <div className='container'>
        <div className='flex justify-center mb-6 lg:hidden'>
          <SocialList />
        </div>
        <hr className='mx-auto dark:border-slate-500' />
      </div>
      <p className='py-5 text-white  dark:text-second'>
        &copy; Designed & built by Mahmoud Elalfy
      </p>
    </footer>
  );
};
