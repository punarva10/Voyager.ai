import { motion } from "framer-motion";

import { styles } from "../styles";
import { BeachCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#15d4e6]' />
          <div className='w-1 sm:h-80 h-40 bg-[#15d4e6]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-purple`}>
            Hi, I am <span className='text-[#15d4e6]'>Jugaad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-blue-100`}>
            Your Personal, Hyper-local<br className='sm:block hidden' />
            Travel Bestie
          </p>
        </div>
      </div>

      <BeachCanvas />


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#FFFFFF] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#FFFFFF] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;