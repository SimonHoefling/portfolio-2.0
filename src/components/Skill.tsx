import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  imagePath: string;
};

export default function Skill({ directionLeft, imagePath }: Props) {
  return (
    <div className='group relative flex'>
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={imagePath}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24'
      />
    </div>
  );
}
