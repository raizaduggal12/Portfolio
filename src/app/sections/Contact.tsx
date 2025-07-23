"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-[0vh] min-h-screen flex items-center justify-center bg-black text-white px-4 mt-[5vh]"
    >
      <div className="transition duration-300 ease-in-out transform hover:scale-105
 min-h-[70vh] w-[60%] sm:w-[50%] md:w-[45%] lg:w-[33%] max-h-[100vh] mt-[0px] mb-[10px] bg-white backdrop-blur-md border border-white/30 rounded-[2rem] shadow-[0_6px_32px_#ffffff44] p-6 flex flex-col gap-6 overflow-x-hidden px-[3vh]">
        
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
 Get In Touch
</motion.h2>

        <form className="space-y-6 text-black px-[2vh] text-[2.5vh] sm:text-[3vh]">
          <div>
            <label className="block text-[2vh] font-medium"></label>
            <input
              type="text"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 leading-[4vh] text-[2.5vh] placeholder:text-[2.2vh] caret-pink-600 mb-[3vh]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-[2vh] font-medium"></label>
            <input
              type="email"
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 leading-[4vh] text-[2.5vh] placeholder:text-[2.2vh] caret-pink-600 mb-[3vh]"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-[2vh] font-medium"></label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 leading-[4vh] text-[2.5vh] placeholder:text-[2.2vh] caret-pink-600 mb-[3vh]"
              placeholder="Type your message here..."
            ></textarea> <br />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition-colors text-[2.5vh] font-semibold leading-[5vh]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
