import { motion } from "framer-motion"
import SkillPill from "./SkillPill"
import { skillCategories } from "../tempData/skills"

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

function Skills() {
  return (
    <section id="skills" className="bg-zinc-950 px-6 md:px-20 py-24 md:py-32">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-red-500 text-xs tracking-[4px] uppercase mb-4"
      >
       Stack
      </motion.p>

      {/* FIXED: text-6xl on mobile was too big */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-display text-5xl sm:text-6xl md:text-8xl text-white
                   leading-none tracking-tighter mb-4"
      >
        SKILLS
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-zinc-600 text-xs tracking-widest uppercase mb-10 md:mb-16"
      >
        Technologies I've worked with in production
      </motion.p>

      {/* FIXED: gap-16 → gap-10 md:gap-16 */}
      <div className="flex flex-col gap-10 md:gap-16">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category label + animated line */}
            <div className="flex items-center gap-4 mb-5 md:mb-6">
              <span className="text-red-500 text-xs tracking-[3px] uppercase flex-shrink-0">
                {cat.category}
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="flex-1 h-px bg-zinc-800 origin-left"
              />
            </div>

            {/* Skill pills — flex-wrap handles mobile naturally */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {cat.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-zinc-700 text-xs tracking-widest uppercase mt-16 md:mt-20 text-center"
      >
        Always learning · Currently exploring AI integrations + Cloud-native patterns
      </motion.p>

    </section>
  )
}

export default Skills