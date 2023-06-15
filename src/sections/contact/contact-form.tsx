import { Spinner } from '@/components';
import { inputs, useContactForm } from './useContactForm';

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, formRef, errors, isLoading } =
    useContactForm();

  return (
    <form
      noValidate
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center w-full mx-auto '
    >
      {inputs.map((input) => (
        <div key={input.name} className='w-full mb-5'>
          <div className='flex items-center justify-between w-full '>
            <label className='w-12' htmlFor={input.name}>
              {input.title}
            </label>
            <input
              {...register(input.name)}
              type={input.type}
              className='block p-2 ml-2 w-[80%] h-12 rounded border
              border-gray-400 focus:outline-none 
              dark:bg-slate-800 
              dark:text-white dark:border-none'
            />
          </div>
          {errors[input.name] && (
            <div className='text-red-400 text-end'>
              {errors[input.name]?.message}
            </div>
          )}
        </div>
      ))}
      <div className='w-full mb-5 '>
        <div className='flex items-center justify-between '>
          <label className='w-12' htmlFor='message'>
            Message
          </label>
          <textarea
            className='block resize-none h-40 p-2 ml-2 w-[80%] rounded border border-gray-400 focus:outline-none dark:bg-slate-800 dark:text-white'
            id='message'
            {...register('message')}
          />
        </div>
        {errors['message'] && (
          <div className='text-red-400 text-end'>
            {errors['message']?.message}
          </div>
        )}
      </div>
      <button
        className='cursor-pointer self-end px-3 py-2 rounded-lg bg-main text-white w-[80%] dark:bg-second dark:text-slate-900 center
          dark:hover:bg-second_alt tr'
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? <Spinner /> : <span>Submit</span>}
      </button>
    </form>
  );
};
