import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:simon@hoeflia.eu?subject=${formData.subject}&body=
    Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left
                    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col mt-32 space-y-10'>
        <h4 className='text-2xl font-semibold text-center lg:text-4xl'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Let's talk.</span>
        </h4>
      </div>

      <div className='space-y-10'>
        <div className='flex items-center space-x-5'>
          <EnvelopeIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
          <p className='text-1xl'>simon@hoeflia.eu</p>
        </div>
        <div className='flex items-center space-x-5'>
          <PhoneIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
          <p className='text-1xl'>+62 819 354 504 23</p>
        </div>
        <div className='flex items-center space-x-5'>
          <MapPinIcon className="h-7 w-7 text-[#F7AB0A] animate-pulse" />
          <p className='text-1xl'>97737 Gemuenden / Germany</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='space-y-2'>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput w-full px-4 py-2'
              type="text"
              // px-6 py-4
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput w-full px-4 py-2'
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput px-4 py-2'
            type="text"
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput px-4 py-2'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-lg'>
              {/* py-5 px-10 */}
            Submit
          </button>
        </form>

      </div>

    </div>
  );
}
