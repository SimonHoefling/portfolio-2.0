import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      title: "Give-Hope",
      description: "This is the description for Project 1.",
      image: "/givehope-mockup.png"
    },
    {
      title: "Airbnb Clone",
      description: "This is the description for Project 2.",
      image: "/airbnb-mockup.png"
    },
    {
      title: "Earn-Train",
      description: "This is the description for Project 3.",
      image: "/earntrain-mockup.png"
    }
  ];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    className='h-screen relative flex overfow-hidden flex-col text-left
              md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='w-full relative flex overflow-x-scroll overflow-y-hidden snap-x
                     snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            src={project.image}
            alt='Project image'
            width={550}
            height={550} />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  {project.title}
                </span>
              </h4>
              <p className='text-lg text-center md:text-left'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  );
}
