import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when link clicked
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 
                      px-6 md:px-20 py-4 md:py-5
                      flex justify-between items-center 
                      bg-black border-b border-zinc-800
                      transition-shadow duration-300
                      ${scrolled ? "shadow-lg shadow-black/50" : ""}`}>

        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-xl text-white tracking-widest">AK</span>
          <span className="text-[8px] text-red-500 tracking-[3px] uppercase">
            Java Engineer
          </span>
        </a>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-zinc-400 text-sm tracking-wide">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-red-500 transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="bg-red-500 hover:bg-red-600 
                       text-white text-sm tracking-widest uppercase
                       px-6 py-2.5 transition duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger button — only on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 
                     w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen
              ? { rotate: 45, y: 8 }
              : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
          <motion.span
            animate={menuOpen
              ? { opacity: 0, x: -10 }
              : { opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={menuOpen
              ? { rotate: -45, y: -8 }
              : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="block h-0.5 w-6 bg-white origin-center"
          />
        </button>

      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[61px] left-0 w-full z-40
                       bg-black border-b border-zinc-800
                       flex flex-col px-6 py-6 gap-5
                       md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-zinc-400 hover:text-red-500 
                           text-sm tracking-widest uppercase
                           transition duration-300 py-1
                           border-b border-zinc-900"
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="bg-red-500 hover:bg-red-600 
                         text-white text-sm tracking-widest uppercase
                         px-6 py-3 text-center
                         transition duration-300 mt-2"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close menu when clicking outside */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar