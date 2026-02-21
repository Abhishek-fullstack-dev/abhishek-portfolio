import { motion } from "framer-motion"

import contacts from "../tempData/contactData"
function Contact() {
  return (
    <section
      id="contact"
      className="bg-black px-6 md:px-20 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT SIDE */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs tracking-[4px] uppercase mb-4"
          >
           Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl md:text-8xl
                       leading-none tracking-tighter text-white mb-6 md:mb-8"
          >
            LET'S <br />
            BUILD <br />
            <span className="text-red-500">TOGETHER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm leading-relaxed max-w-md mb-8"
          >
            I'm actively looking for Java Backend opportunities
            in Bengaluru or remote. If you're building something
            interesting — let’s connect.
          </motion.p>

          <motion.a
            href="mailto:parvatiabhu620@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-red-500 hover:bg-red-600
                       text-white text-xs sm:text-sm tracking-widest uppercase
                       px-6 sm:px-8 py-3 sm:py-4 transition duration-300"
          >
            Send Me an Email →
          </motion.a>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border border-zinc-800
                         p-4 sm:p-5 text-zinc-400 hover:border-red-500
                         hover:text-white transition-all duration-300
                         min-w-0 group"
            >
              <span className="text-red-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </span>

              <div className="flex-1 min-w-0">
                <p className="text-zinc-600 text-xs tracking-widest uppercase mb-1">
                  {contact.label}
                </p>
                <p className="text-xs sm:text-sm truncate">
                  {contact.value}
                </p>
              </div>

              <span className="ml-auto text-zinc-700 group-hover:text-red-500 transition-colors duration-300 text-lg shrink-0">
                →
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Contact