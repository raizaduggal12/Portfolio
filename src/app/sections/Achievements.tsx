"use client";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const achievements = [
    {
      emoji: "🧮",
      text: "3rd Runner Up - Abacus & Mental Arithmetic Competition by Wholistic Brain Education, Punjab & Chandigarh (2014)",
      url: "https://drive.google.com/file/d/1bQtU1Kpxt439Y8jHPnBPIe7XwwdwfyRk/view?usp=drive_link",
    },
    {
      emoji: "🎨",
      text: "1st Prize in Painting - “Dream Bus” Art Competition by Tata Motors (2014) — ₹3,000 cash prize",
      url: "https://drive.google.com/file/d/1tXkty84wCRrmGIOigA1k4CGu3tMrlx8U/view?usp=sharing",
    },
    {
      emoji: "🏆",
      text: "JEE Main 2023 – 94.72 percentile",
    },
  ];

  return (
    <>
      <section
        id="achievements"
        className="scroll-mt-[5vh] min-h-screen flex items-center justify-center bg-black text-white px-4 mt-[5vh] "
      >
        <div
          className="transition duration-300 ease-in-out transform hover:scale-105
          min-h-[70vh] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] max-h-[100vh]
          bg-white backdrop-blur-md border border-white/30 rounded-[2rem]
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
  Achievements
</motion.h2>

          {/* OUTER GLASS BOX */}
          <div className="px-[3vh] min-h-[64vh] bg-pink-200 rounded-[2xl] p-4 shadow-inner">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 min-h-[50vh] text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {achievements.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-inherit"
                >
                  <div
                    className="pt-[5vh] backdrop-blur-md bg-white/10 border border-white/30 
                    shadow-[0_6px_15px_rgba(255,255,255,0.2)] rounded-[2rem] p-6 
                    flex flex-col items-center text-center hover:scale-105 
                    transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-[3vh] mb-3">{item.emoji}</span>
                    <span className="text-[3vh] font-medium text-white px-[10vh] pb-[2vh]">
                      {item.text}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔥 Glowing line before Skills section */}
      <motion.hr
        className="mt-[5vh] border-t-2 border-pink-500/30 w-[80%] mx-auto shadow-[0_0_15px_rgba(255,105,180,0.5)]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      />
    </>
  );
}
