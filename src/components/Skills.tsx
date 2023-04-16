import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';


type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
                xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={true} imagePath="HTML5.png" />
        <Skill directionLeft={true} imagePath="CSS3.svg" />
        <Skill directionLeft={false} imagePath="Git.jpg" />
        <Skill directionLeft={false} imagePath="GitHub.png" />
        <Skill directionLeft={true} imagePath="React.svg" />
        <Skill directionLeft={true} imagePath="Bootstrap.avif" />
        <Skill directionLeft={false} imagePath="Tailwind.png" />
        <Skill directionLeft={false} imagePath="Figma.png" />
        <Skill directionLeft={true} imagePath="Rails.png" />
        <Skill directionLeft={true} imagePath="ruby.avif" />
        <Skill directionLeft={false} imagePath="Heroku.png" />
        <Skill directionLeft={false} imagePath="JavaScript.png" />
        <Skill directionLeft={true} imagePath="SQL.SVG" />
      </div>
    </motion.div>
  );
}
