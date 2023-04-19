import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Projects({}: Props) {
  const projects = [
    {
      title: "Give-Hope",
      description: "GiveHope is a web application that serves as a platform for charities to list their organizations, and for users to donate to causes that they are passionate about. The website is available as a responsive desktop and PWA version.",
      backendStack: "Backend: Ruby",
      frontendStack: "Frontend: HTML, CSS, Ruby on Rails, Bootstrap, JavaScript",
      image: "/givehope-mockup.png",
      link: "https://give-hope.herokuapp.com/"
    },
    {
      title: "Airbnb Clone",
      description: "I created an Airbnb clone website using React and Next.js, with a user-friendly interface thatx mimics Airbnb's functionality. The website is a frontend-only clone, and I paid close attention to the design of the interface to make it easy for visitors to browse and filter through listings.",
      backendStack: "",
      frontendStack: "Frontend: React, Next.js, Tailwind CSS",
      image: "/airbnb-mockup.png",
      link: "https://my-airbnb-clone-simon-dev.vercel.app/"
    },
    {
      title: "Earn-Train",
      description: "Earn-Train is a website where companies list small tasks, and users complete them for money. Users can browse tasks based on their interests. Earn-Train provides an easy way for outsourcing small tasks and earning money. (The website is currently only available as a PWA version)",
      backendStack: "Backend: Ruby",
      frontendStack: "Frontend: HTML, CSS, Ruby on Rails, Bootstrap, JavaScript",
      image: "/earntrain-mockup.png",
      link: "https://earn-train.osc-fr1.scalingo.io/"
    }
  ];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    className='h-screen relative flex overfow-hidden flex-col text-center
              md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='w-full relative flex overflow-x-scroll overflow-y-hidden snap-x
                     snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-10 md:p-44 h-screen'>
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
            width={500}
            height={500} />
            <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
              <Link href={project.link} className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>{project.title}</span>
              </Link>
              <p className='text-sm text-center md:text-left lg:text-xl'>{project.description}</p>
              <p className='text-sm text-center md:text-left'>{project.backendStack}</p>
              <p className='text-sm text-center md:text-left'>{project.frontendStack}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  );
}
