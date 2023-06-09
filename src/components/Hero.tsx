import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';


type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, the name is Simon Hoefling',
      'Guy-who-loves-coffee.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className='h-screen pt-safe pb-safe flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="/Hero_Profile_Image.jpg"
        alt="My Image"
        width={100}
        height={100}
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
        <h1 className='text-xl md:text-3xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>

      </div>
    </div>
  );
}
