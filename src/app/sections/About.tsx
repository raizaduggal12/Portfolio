"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[10vh] min-h-screen flex flex-col items-center justify-center bg-black text-white pt-[2vh] my-20 mt-[20vh]"
    >
      <div
        className="transition duration-300 ease-in-out transform hover:scale-105
        min-h-[95vh] w-[60%] sm:w-[80%] md:w-[70%] lg:w-[60%]
        bg-white backdrop-blur-md border border-white/30 rounded-[2rem]
        shadow-[0_6px_32px_#ffffff44] flex flex-col gap-8 m-[1vh]"
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
  About Me
</motion.h2>


        <motion.p
          className="text-[3vh] sm:text-[5vh] md:text-[7vh] lg:text-[9vh] text-gray-800 text-xl sm:text-2xl leading-[relaxed] px-[6vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          I am a passionate Front-End Developer with a strong foundation in building modern,
          responsive web applications using HTML, CSS, JavaScript, and frameworks like React.
          I love crafting clean user interfaces and enhancing user experience.
          Currently expanding my skill set by diving into Backend Development and SQL
          to become a more well-rounded full-stack developer.
          Eager to learn, build, and grow with every line of code.
        </motion.p>

        <motion.h3
          className="text-[5.5vh] sm:text-[7.5vh] md:text-[9.5vh] lg:text-[11.5vh] font-semibold text-pink-500 px-[6vh] leading-[1vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          Education
        </motion.h3>

        <ul className="text-[3vh] sm:text-[5vh] md:text-[7vh] lg:text-[9vh] list-disc px-[6vh] text-gray-800 text-lg sm:text-xl space-y-4">
          <li>
            <strong>THAPAR INSTITUTE OF ENGINEERING AND TECHNOLOGY</strong><br />
            B.Tech, Computer Engineering (Graduation: July 2027) — CGPA: 9.20 <br />
          </li>
          <li>
            <strong>MONTGOMERY GURU NANAK PUBLIC SCHOOL, JALANDHAR</strong><br />
            12th Grade (CBSE), March 2023 — 92.6%<br />
          </li>
          <li>
            <strong>MONTGOMERY GURU NANAK PUBLIC SCHOOL, JALANDHAR</strong><br />
            10th Grade (CBSE), March 2021 — 97.4% <br />
          </li>
        </ul>
      </div>

      {/* 🔥 Glowing separator line after the About section */}
      <motion.hr
        className="mt-[20vh] border-t-2 border-pink-500/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,105,180,0.5)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
