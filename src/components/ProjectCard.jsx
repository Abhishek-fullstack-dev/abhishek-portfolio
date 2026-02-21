// ─── ProjectCard.jsx ────────────────────────────────────────────
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import CountUp from "./CountUp"

function ProjectCard({ project, index }) {
  // FIXED: "hovered" renamed to "expanded" 
  // Works for BOTH hover (desktop) AND tap (mobile)
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}

      // Desktop: hover to expand
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}

      // Mobile: tap to toggle expand
      onClick={() => setExpanded((prev) => !prev)}

      className="relative border border-zinc-800 p-6 md:p-8 lg:p-12
                 transition-all duration-500 group overflow-hidden
                 cursor-pointer"
      style={{
        boxShadow: expanded
          ? "0 0 40px rgba(239,68,68,0.15), 0 0 80px rgba(239,68,68,0.05)"
          : "none",
        borderColor: expanded ? "rgb(239,68,68)" : "",
      }}
    >

      {/* Sliding bar — left edge */}
      <motion.div
        animate={{ scaleY: expanded ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-1
                   bg-red-500 origin-top"
      />

      {/* Sliding bar — bottom edge */}
      <motion.div
        animate={{ scaleX: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-px
                   bg-red-500 origin-left"
      />

      {/* Top row: Number + Title + Links
          FIXED: on mobile stack vertically, on desktop side by side */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start
                      md:justify-between md:gap-8 mb-6 md:mb-8">

        <div className="flex gap-4 md:gap-8 items-start">

          {/* Animated number — FIXED: smaller on mobile */}
          <div className="font-display text-[60px] sm:text-[80px] md:text-[100px]
                          leading-none transition-colors duration-500
                          text-zinc-800 group-hover:text-red-500 flex-shrink-0"
               style={{ color: expanded ? "rgb(239,68,68)" : "" }}>
            <CountUp target={index + 1} />
          </div>

          <div className="pt-1 md:pt-2 min-w-0">
            {/* Tag + date */}
            <p className="text-red-500 text-xs tracking-[3px] uppercase mb-2 md:mb-3">
              {project.tag} · {project.date}
            </p>

            {/* Title — FIXED: text-3xl mobile → text-6xl desktop */}
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                           text-white tracking-tight leading-none mb-3 md:mb-4">
              {project.title}
            </h3>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="border border-zinc-800 px-2 md:px-3 py-1 
                             text-xs text-zinc-500 transition-all duration-300
                             group-hover:border-zinc-600 group-hover:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links — FIXED: stop click propagating to card toggle */}
        <div
          className="flex gap-3 flex-shrink-0 md:pt-2"
          onClick={(e) => e.stopPropagation()}
        >
          {project.github ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-zinc-700
                         px-4 md:px-5 py-2.5 text-xs text-zinc-400 
                         tracking-widest uppercase hover:border-white 
                         hover:text-white transition duration-300"
            >
              <FaGithub size={14} /> GitHub
            </motion.a>
          ) : (
            <span className="flex items-center border border-zinc-800
                             px-4 md:px-5 py-2.5 text-xs text-zinc-700
                             tracking-widest uppercase cursor-not-allowed">
              In Progress
            </span>
          )}

          {project.live && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-red-500 px-4 md:px-5 
                         py-2.5 text-xs text-white tracking-widest uppercase
                         hover:bg-red-600 transition duration-300"
            >
              <FaExternalLinkAlt size={12} /> Live
            </motion.a>
          )}
        </div>
      </div>

      {/* Expanded content: Description + Highlights
          FIXED: AnimatePresence handles mount/unmount cleanly */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 pt-6 md:pt-8">

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed 
                             mb-6 md:mb-8 max-w-3xl">
                {project.description}
              </p>

              {/* Highlights grid
                  FIXED: always 1 col on mobile, 2 cols on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-500 mt-0.5 flex-shrink-0">▸</span>
                    <span className="text-zinc-400 text-xs leading-relaxed">
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed hint — different text mobile vs desktop */}
      <motion.p
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="text-zinc-700 text-xs tracking-widest uppercase mt-5 md:mt-6"
      >
        <span className="md:hidden">Tap to explore →</span>
        <span className="hidden md:inline">Hover to explore →</span>
      </motion.p>

    </motion.div>
  )
}

export default ProjectCard