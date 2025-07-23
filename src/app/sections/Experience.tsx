"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Development Intern – Vaidsys Technologies (Remote)",
      date: "July 2025 – Aug 2025",
      points: [
        "Building responsive web apps with HTML, CSS, JavaScript, and React",
        "Translated UI/UX wireframes into real front-end interfaces",
        "Implemented interactive features to improve user engagement",
        "Used Git/GitHub for source control and team collaboration",
      ],
      url: "https://drive.google.com/file/d/1ehNkhRRmuZBKGrbmFoiEiHt__CYoBfs3/view?usp=sharing",
    },
    {
      title: "LEAD Society – Member",
      date: "May 2024 – Jan 2025",
      points: [
        "Organized student-led initiatives and events",
        "Built teamwork, problem-solving, and communication skills",
      ],
      url: "https://drive.google.com/file/d/1dvD19HZQR0noS9DyPdVIAIqE4kySpVzR/view?usp=sharing",
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-[13vh] min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 mt-[20vh]"
    >
      <div
        className="transition duration-300 ease-in-out transform hover:scale-105
        min-h-[70vh] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] max-h-[100vh]
        mt-0 mb-10 bg-white backdrop-blur-md border border-white/30 rounded-[2rem]
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
  Experience
</motion.h2>


        <motion.div
          className="text-[2.5vh] sm:text-[4.5vh] md:text-[6.5vh] lg:text-[8.5vh] space-y-6 text-sm sm:text-base p-[6vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-[2rem] border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.2)] p-6 mb-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                <div className="flex justify-between items-center p-[2vh]">
                  <h3 className="text-[3vh] sm:text-xl font-semibold text-pink-700 mt-4">
                    {exp.title}
                  </h3>
                  <span className="text-lg sm:text-xl font-semibold text-pink-700 mt-4">
                    {exp.date}
                  </span>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-white px-[5vh]">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <motion.hr
        className="mt-[20vh] border-t-2 border-pink-500/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,105,180,0.5)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
