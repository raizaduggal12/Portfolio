"use client";

import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HomeSection() {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-[0vh] pt-[3vh] min-h-screen flex items-center justify-center bg-black text-white px-4 mt-[5vh]"
      >
        <div className="w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] min-h-[75vh] mt-0 mb-[10px] 
        bg-white text-black border border-gray-200 rounded-[3rem] 
        shadow-[0_6px_32px_rgba(0,0,0,0.1)] flex flex-col items-center gap-1 overflow-hidden 
        pt-[5vh] px-[5vh] transition duration-300 ease-in-out transform hover:scale-105">

        

          {/* Profile Picture */}
          <motion.div
            className="mt-5 mb-6 rounded-[30px] border-[6px] border-pink-500 shadow-[0_0_60px_#ec4899] animate-pulse overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/photo.jpg"
              alt="Raiza Duggal"
              width={200}
              height={200}
              className="rounded-[2rem] object-cover"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-[6vh] sm:text-[8vh] md:text-[10vh] lg:text-[12vh] font-extrabold text-center text-white leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typewriter
              words={["Hi, I'm Raiza Duggal"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h1>

          {/* Subtext */}
          <motion.h2
            className="text-[4vh] sm:text-[5vh] md:text-[6vh] text-gray-300 leading-[1vh] pb-[0vh]"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Computer Science Undergraduate
          </motion.h2>

          <motion.h3
            className="text-[4vh] sm:text-[5vh] md:text-[6vh] text-lg sm:text-xl md:text-2xl text-gray-300 leading-[1vh] pt-[0vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8 }}
          >
            Thapar Institute of Engineering and Technology
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="text-[3.5vh] sm:text-[4.5vh] md:text-[5.5vh] text-base sm:text-lg md:text-xl font-medium text-pink-400 tracking-wide text-center leading-[1vh] pt-[0vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.2 }}
          >
            💻 Front-End Dev | 🎨 UI Lover |{" "}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="inline-block"
            >
              ⚛
            </motion.span>{" "}
            React Fan |{" "}
            <motion.span
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: 100, y: -100, opacity: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="inline-block"
            >
              🚀
            </motion.span>
            Always Learning
          </motion.p>

          {/* Social Icons */}
          <div className="w-full bg-white/100 backdrop-blur-md border border-white/30 rounded-[1rem] flex justify-center gap-[10vh] text-black">
            <motion.div
              className="text-[4vh] sm:text-[5vh] md:text-[6vh] mt-6 mb-4 flex gap-6 text-pink-500 text-3xl justify-center pt-[2vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              <a
                href="https://www.linkedin.com/in/raiza-duggal-068740323/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-700 px-[4vh] transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/raizaduggal12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-700 px-[4vh] transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/raiza.duggal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-700 px-[4vh] transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:raizaduggal1@gmail.com"
                className="hover:text-pink-700 px-[4vh] transition duration-300 ease-in-out transform hover:scale-125"
              >
                <MdEmail />
              </a>
            </motion.div>
          </div>


          
        </div>
      </section>

      {/* 💡 Glowing Horizontal Line Below Section */}
      <motion.hr
        className="mt-[10vh] border-t-2 border-white/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </>
  );
}
