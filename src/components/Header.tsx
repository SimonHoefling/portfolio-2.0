import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DocumentIcon } from '@heroicons/react/24/outline';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
      initial={{ x: -500, opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1}}
      transition={{ duration: 1.5 }}
      className='flex flex-row items-center'>
        {/* Social icons */}
        <SocialIcon url="https://www.linkedin.com/in/simon-hoefling-209a53264/"
        fgColor='gray'
        bgColor='transparent'
        />
        <SocialIcon url="https://github.com/SimonHoefling"
        fgColor='gray'
        bgColor='transparent'
        />
      </motion.div>


      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        {/* <DocumentIcon className="h-6 w-6 text-gray-500" /> */}
        <Link
          className='uppercase text-sm text-gray-400'
          href="/SIMON HOEFLING - Resume.pdf"
          target="_blank">
          Open CV
        </Link>
      </motion.div>
    </header>
  )
}
