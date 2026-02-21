// ─── Projects.jsx ───────────────────────────────────────────────
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects } from "../tempData/projects"

function Projects() {
  return (
    <section id="projects" className="bg-black px-6 md:px-20 py-24 md:py-32">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-red-500 text-xs tracking-[4px] uppercase mb-4"
      >
       Work
      </motion.p>

      {/* FIXED: text-5xl mobile → text-8xl desktop */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-display text-5xl sm:text-6xl md:text-8xl text-white
                   leading-none tracking-tighter mb-4"
      >
        PROJECTS
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-zinc-600 text-xs tracking-widest uppercase mb-10 md:mb-16"
      >
        {/* FIXED: different hint for mobile vs desktop */}
        <span className="md:hidden">Tap each card to explore</span>
        <span className="hidden md:inline">Hover each card to explore</span>
      </motion.p>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>

    </section>
  )
}

export default Projects