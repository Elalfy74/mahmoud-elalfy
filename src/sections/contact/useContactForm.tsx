import { useState, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

export type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      reset();
    } catch (error) {}

    setIsLoading(false);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    formRef,
    isLoading,
  };
};

type Field = {
  name: keyof Inputs;
  title: string;
  type: 'text' | 'email';
};

export const inputs: Field[] = [
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

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Email is invalid').nonempty('Email is required'),
  subject: z.string().nonempty('Subject is required'),
  message: z.string().nonempty('Message is required'),
});
