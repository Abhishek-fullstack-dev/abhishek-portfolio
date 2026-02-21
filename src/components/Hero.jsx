import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="min-h-screen bg-black flex flex-col 
                        justify-center px-6 md:px-20 pt-20 
                        relative overflow-hidden">

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        <span className="text-zinc-500 text-xs tracking-widest uppercase">
          Available for work · Bengaluru
        </span>
      </motion.div>

      {/* Name — FIXED: was 80px on mobile, now scales properly */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display text-5xl sm:text-7xl md:text-[120px] lg:text-[140px]
                   leading-none tracking-tighter text-white mb-4"
      >
        ABHISHEK<br />
        <span className="text-red-500">KUMAR</span>
      </motion.h1>

      {/* Tag line — FIXED: wraps properly on small screens */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-10"
      >
        <p className="inline-block 
                      bg-zinc-800/70 
                      text-zinc-400 
                      text-xs sm:text-sm md:text-base
                      tracking-[2px] md:tracking-[3px]
                      px-4 sm:px-6 py-3
                      rounded-xl
                      backdrop-blur-sm
                      leading-relaxed">
          JAVA BACKEND ENGINEER · SPRING BOOT · KAFKA · AWS
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex gap-3 sm:gap-4 flex-wrap"
      >
        <a
          href="#projects"
          className="border border-white text-white text-xs sm:text-sm 
                     tracking-widest uppercase px-6 sm:px-8 py-3 
                     hover:bg-white hover:text-black 
                     transition duration-300 rounded-sm"
        >
          View Projects
        </a>
        <a
          href="mailto:parvatiabhu620@gmail.com"
          className="bg-red-500 text-white text-xs sm:text-sm 
                     tracking-widest uppercase px-6 sm:px-8 py-3 
                     hover:bg-red-600 transition duration-300 rounded-sm"
        >
          Hire Me
        </a>
      </motion.div>

      {/* Background JAVA text — decorative */}
      <div className="absolute right-0 bottom-0 
                      font-display text-[120px] sm:text-[200px] leading-none 
                      text-white opacity-[0.03] 
                      select-none pointer-events-none">
        JAVA
      </div>

    </section>
  )
}

export default Hero