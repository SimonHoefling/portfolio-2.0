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
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0}}
        src={imagePath}
        className='rounded-full border border-gray-500 object-cover w-24 h-24'
      />
    </div>
  );
}
