import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { Appear} from "../utils/motion";
import { fadeIn , fadeOut } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  showAll,

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover1 rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-5 gap-y-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Extraworks = () => {

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ?  projects.slice(3, projects.length ) : [];

  return (
   
    <div className={`max-w-7xl mx-auto relative z-0 pt-6  `}>
    <div className={` flex flex-wrap gap-7  `}>
        <AnimatePresence>
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.name}
            custom={index}
           variants={fadeOut("up", "spring", 0.1, 0.5) }
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>

      {/* { visibleProjects.map((project, index) => (
          <ProjectCard  key={project.name} {...project} index={index} showAll={showAll} />
        ))} */}

      <div className='flex justify-center'>
        <button
          className='mt-10 mb-20 font-bold text-lg z-10'
          onClick={() => setShowAll(!showAll)}
          variants={Appear("down", "spring", 0, 0.5)}
          initial="hidden"
          animate="show"
          exit="hide"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
   
  );
};

export default Extraworks;