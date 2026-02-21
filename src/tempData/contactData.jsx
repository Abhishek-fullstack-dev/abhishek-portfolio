import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const contacts = [
  {
    label: "Email",
    value: "parvatiabhu620@gmail.com",
    href: "mailto:parvatiabhu620@gmail.com",
    icon: <HiMail size={18} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhishek-kumar-380446233",
    href: "https://linkedin.com/in/abhishek-kumar-380446233",
    icon: <FaLinkedin size={16} />,
  },
  {
    label: "GitHub",
    value: "github.com/Abhishek-fullstack-dev",
    href: "https://github.com/Abhishek-fullstack-dev",
    icon: <FaGithub size={16} />,
  },
]
export default contacts;