import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { tech } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I have work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-16">
        {tech.map((technology) => (
          <div className="w-28 h-28 transform transition-all hover:z-10 hover:scale-110" key={technology.name} style={{ minWidth: '100px', minHeight: '100px' }}>
            <img
              src={technology.icon}
              alt={technology.name}
              style={{
                width: '100%',
                height: '100%',
                filter: technology.name === 'solidity1' || technology.name === 'nextjs1' || technology.name === 'express1' ? 'invert(100%)' : 'none',
              }}
            />
          </div>
        ))}


      </div>
      {/* <div className='flex flex-row flex-wrap justify-center gap-10 mt-16 '>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
         
      ))}
    </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "");