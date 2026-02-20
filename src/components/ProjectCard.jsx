import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import CountUp from "./CountUp"

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border border-zinc-800 p-8 md:p-12
                 transition-all duration-500 group overflow-hidden"
      style={{
        boxShadow: hovered
          ? "0 0 40px rgba(239,68,68,0.15), 0 0 80px rgba(239,68,68,0.05)"
          : "none",
        borderColor: hovered ? "rgb(239,68,68)" : "",
      }}
    >

      {/* Sliding bar — left edge */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-1
                   bg-red-500 origin-top"
      />

      {/* Sliding bar — bottom edge */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-px
                   bg-red-500 origin-left"
      />

      {/* Top row: Number + Title + Links */}
      <div className="flex flex-col md:flex-row md:items-start
                      justify-between gap-8 mb-8">

        <div className="flex gap-8 items-start">

          {/* Animated number */}
          <div className="font-display text-[80px] md:text-[100px]
                          leading-none transition-colors duration-500
                          text-zinc-800 group-hover:text-red-500">
            <CountUp target={index + 1} />
          </div>

          <div className="pt-2">
            {/* Tag + date */}
            <p className="text-red-500 text-xs tracking-[3px] uppercase mb-3">
              {project.tag} · {project.date}
            </p>

            {/* Title */}
            <h3 className="font-display text-4xl md:text-6xl text-white
                           tracking-tight leading-none mb-4">
              {project.title}
            </h3>

            {/* Tech chips — always visible */}
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="border border-zinc-800 px-3 py-1 text-xs
                             text-zinc-500 transition-all duration-300
                             group-hover:border-zinc-600 group-hover:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 flex-shrink-0 pt-2">
          {project.github ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-zinc-700
                         px-5 py-2.5 text-xs text-zinc-400 tracking-widest
                         uppercase hover:border-white hover:text-white
                         transition duration-300"
            >
              <FaGithub size={14} /> GitHub
            </motion.a>
          ) : (
            <span className="flex items-center border border-zinc-800
                             px-5 py-2.5 text-xs text-zinc-700
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
              className="flex items-center gap-2 bg-red-500 px-5 py-2.5
                         text-xs text-white tracking-widest uppercase
                         hover:bg-red-600 transition duration-300"
            >
              <FaExternalLinkAlt size={12} /> Live
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover reveals: Description + Highlights */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          height: hovered ? "auto" : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="border-t border-zinc-800 pt-8">

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: hovered ? 1 : 0,
                  x: hovered ? 0 : -10,
                }}
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

      {/* Collapsed hint */}
      <motion.p
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="text-zinc-700 text-xs tracking-widest uppercase mt-6"
      >
        Hover to explore →
      </motion.p>

    </motion.div>
  )
}

export default ProjectCard