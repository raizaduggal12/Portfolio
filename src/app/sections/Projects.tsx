"use client";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Amazon Clone Website ",
      description: "A fully responsive Amazon e-commerce clone using simple HTML and CSS, and local storage.",
      github: "https://github.com/raizaduggal12/Amazon-Clone",
    },
    {
      name: "Bank Management System ",
      description: "SQL-based banking system with account handling, transactions, and procedures.",
      github: "https://github.com/raizaduggal12/Bank-Management-System",
    },
    {
      name: "Sign Language Recognition ",
      description: "ML-based system using MediaPipe and Random Forest to detect hand signs from webcam input.",
      github: "https://github.com/raizaduggal12/Sign-Language-Recognition",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-[12vh]  min-h-screen flex flex-col items-center justify-center bg-black text-white pt-[1vh] mt-[20vh]"
    >
     

      <div
        className="transition duration-300 ease-in-out transform hover:scale-105
        min-h-[100vh] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] max-h-[100vh]
        mt-[0px] mb-[10px] bg-white backdrop-blur-md border border-white/30
        rounded-[2rem] shadow-[0_6px_32px_#ffffff44] p-6 flex flex-col gap-6 overflow-x-hidden"
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
  Projects
</motion.h2>


        <motion.div
          className="text-[3vh] sm:text-[5vh] md:text-[7vh] lg:text-[9vh] space-y-4 text-gray-800 text-sm sm:text-base px-[4vh] pb-[4vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block no-underline text-inherit"
            >
              <div
                className="p-4 bg-gray-100 border border-white/30 rounded-[3rem] shadow
                hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-1 px-[4vh]">
                  {project.name}
                </h3>
                <p className="text-gray-700 px-[4vh]">{project.description}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
       {/* 🔥 Glowing separator line */}
      <motion.hr
        className="mt-[20vh] border-t-2 border-pink-500/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,105,180,0.5)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
