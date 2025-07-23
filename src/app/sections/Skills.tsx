"use client";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "HTML5", "CSS3", "JavaScript", "React", "C++", "R", "Python",
    "DSA", "OOPs", "OS", "DBMS", "SQL", "VSCode", "Git/GitHub"
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-[10vh] min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 mt-[20vh]"
    >
      

      <div
        className="transition duration-300 ease-in-out transform hover:scale-105
        min-h-[70vh] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] max-h-[100vh]
        mt-0 mb-4 bg-white text-black border border-white/30 rounded-[2rem]
        shadow-[0_6px_32px_#ffffff44] p-6 flex flex-col gap-6 overflow-x-hidden"
      >
        <motion.h2
  className="text-[6vh] sm:text-[8vh] md:text-[10vh] lg:text-[12vh] font-extrabold text-center text-pink-600 drop-shadow-[0_0_10px_rgba(255,105,180,0.7)]"
  animate={{
    scale: [1, 1.3, 1], // Pop in and out
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  }}
>
  Skills
</motion.h2>


        <motion.div
          className="text-[4vh] sm:text-[6vh] md:text-[8vh] lg:text-[10vh] grid grid-cols-2 gap-1 p-[1.5vh] w-fit mb-[5vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 
             text-black font-bold text-center text-lg sm:text-xl md:text-2xl
             w-[60vh] h-16 border border-white/30 rounded-[1rem]
             shadow-[0_6px_32px_#ffffff44]
             flex items-center justify-center 
             transition-transform duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
      {/* 🔥 Glowing line before Skills section */}
      <motion.hr
        className="mt-[20vh] border-t-2 border-pink-500/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,105,180,0.5)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
