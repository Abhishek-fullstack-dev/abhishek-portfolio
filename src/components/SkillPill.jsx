import { motion } from "framer-motion"
import { FaJava } from "react-icons/fa"
import {
  SiSpringboot, SiSpringsecurity, SiApachekafka,
  SiDocker, SiGithubactions, SiSonarqube, SiLinux,
  SiApachemaven, SiReact, SiTailwindcss, SiMysql,
  SiPostgresql, SiPostman, SiSwagger, SiAmazonwebservices
} from "react-icons/si"

// Icon map — name string → actual component
const iconMap = {
  FaJava:              <FaJava />,
  SiSpringboot:        <SiSpringboot />,
  SiSpringsecurity:    <SiSpringsecurity />,
  SiApachekafka:       <SiApachekafka />,
  SiDocker:            <SiDocker />,
  SiGithubactions:     <SiGithubactions />,
  SiSonarqube:         <SiSonarqube />,
  SiLinux:             <SiLinux />,
  SiApachemaven:       <SiApachemaven />,
  SiReact:             <SiReact />,
  SiTailwindcss:       <SiTailwindcss />,
  SiMysql:             <SiMysql />,
  SiPostgresql:        <SiPostgresql />,
  SiPostman:           <SiPostman />,
  SiSwagger:           <SiSwagger />,
  SiAmazonwebservices: <SiAmazonwebservices />,
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

function SkillPill({ skill }) {
  const icon = skill.icon ? iconMap[skill.icon] : null

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, borderColor: "rgb(239,68,68)" }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 border border-zinc-800
                 px-4 py-3 text-zinc-400 text-xs tracking-wide
                 hover:text-white transition-colors duration-300
                 cursor-default"
    >
      {icon && (
        <span className="text-red-500 text-sm flex-shrink-0">
          {icon}
        </span>
      )}
      {skill.name}
    </motion.div>
  )
}

export default SkillPill