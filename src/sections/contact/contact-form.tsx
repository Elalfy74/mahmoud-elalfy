import { useRef, useState } from 'react';

// import { Spinner } from './';
// import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from 'react-hook-form';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
};

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // const onSubmit = async (values, { resetForm }) => {
  //   setIsLoading(true);
  //   try {
  //     await emailjs.sendForm(
  //       import.meta.env.VITE_SERVICE_ID,
  //       import.meta.env.VITE_TEMPLATE_ID,
  //       form.current,
  //       import.meta.env.VITE_PUBLIC_KEY
  //     );
  //     resetForm();
  //   } catch (error) {}
  //   setIsLoading(false);
  // };

  return (
    <form
      noValidate
      // ref={form}
      className='flex flex-col items-center w-full mx-auto '
    >
      {inputs.map((input) => (
        <div key={input.name} className='w-full mb-5'>
          <div className='flex items-center justify-between w-full '>
            <label className='w-12' htmlFor={input.name}>
              {input.title}
            </label>
            <input {...register(input.name)} />
            {errors[input.name] && <span> ERRoR</span>}
          </div>
        </div>
      ))}
      {/* <div className='w-full mb-5 '>
        <div className='flex items-center justify-between '>
          <label className='w-12' htmlFor='message'>
            Message
          </label>
          <Field name='message'>
            {({ field, meta }) => {
              const classes =
                meta.error && meta.touched
                  ? 'input border border-red-400 resize-none  h-40'
                  : 'input dark:border-none resize-none  h-40';
              return <textarea className={classes} id='message' {...field} />;
            }}
          </Field>
        </div>
        <ErrorMessage
          component='div'
          name='message'
          className='text-red-400 text-end'
        />
      </div> */}
      <button
        className='cursor-pointer self-end btn bg-main text-white w-[80%] dark:bg-second dark:text-slate-900 center
          dark:hover:bg-second_alt tr'
        type='submit'
        disabled={isLoading}
      >
        {/* {isLoading ? <Spinner /> : <span>Submit</span>} */}
      </button>
    </form>
  );
};

type Field = {
  name: keyof Inputs;
  title: string;
  type: 'text' | 'email';
};

const inputs: Field[] = [
  {
    name: 'name',
    title: 'Name',
    type: 'text',
  },
  {
    name: 'email',
    title: 'E-Mail',
    type: 'email',
  },
  {
    name: 'subject',
    title: 'Subject',
    type: 'text',
  },
];

// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Email is invalid').required('Email is required'),
//   subject: Yup.string().required('Subject is required'),
//   message: Yup.string().required('Message is required'),
// });
