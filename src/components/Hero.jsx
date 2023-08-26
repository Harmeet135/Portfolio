import { motion } from "framer-motion";
// import Typed from "react-typed";
import { styles } from "../styles";
import about from "../assets/about.png";
import { useTypewriter , Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Full Stack Developer', 'Blockchain Developer'],
    loop: { },
    cursorStyle: '_',
    deleteSpeed: 50,
    typeSpeed: 70,
    // delaySpeed: 1000,
  });
  return (
    <section className={`relative w-full h-[78vh] xs:h-[87vh] mx-auto mb-4 lg:h-screen`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm  <span className='text-[#915EFF]'>Harmeet</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
           <span className='text-[#915EFF]'>{text}<Cursor /></span><br className='sm:block hidden' />
           <p>located in Delhi , India.</p> 
          </p>
      
        </div>
      </div>
      <div className="absolute bottom-0 w-[15rem] right-[1rem] lg:w-[33rem] xs:w-[22rem]">

        <img className="w-55" src={about} alt="" />
      </div>

      <div className='absolute xs:bottom-[-5.5rem] top-[35rem] z-50 bottom-32 w-full flex justify-center items-center lg:top-[45.5rem] '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;