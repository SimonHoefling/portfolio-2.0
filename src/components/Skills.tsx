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
                xl:px-10 min-h-screen pt-safe pb-safe justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={true} imagePath="HTML5.png" />
        <Skill directionLeft={true} imagePath="CSS3.png" />
        <Skill directionLeft={true} imagePath="Git.png" />
        <Skill directionLeft={true} imagePath="GitHub.png" />
        <Skill directionLeft={false} imagePath="React.jpeg" />
        <Skill directionLeft={false} imagePath="Bootstrap.avif" />
        <Skill directionLeft={false} imagePath="Tailwind.png" />
        <Skill directionLeft={false} imagePath="Figma.jpeg" />
        <Skill directionLeft={true} imagePath="Rails.png" />
        <Skill directionLeft={true} imagePath="ruby.avif" />
        <Skill directionLeft={true} imagePath="Heroku.png" />
        <Skill directionLeft={true} imagePath="JavaScript.png" />
        <Skill directionLeft={false} imagePath="SQL.jpeg" />
        <Skill directionLeft={false} imagePath="SASS.jpeg" />
        <Skill directionLeft={false} imagePath="Slack.png" />
        <Skill directionLeft={false} imagePath="NextJS.png" />
      </div>
    </motion.div>
  );
}
