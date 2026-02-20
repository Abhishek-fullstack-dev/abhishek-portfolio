import { motion } from "framer-motion"

import { contacts } from "../tempData/contactData"
function Contact() {
  return (
    <section id="contact" className="bg-black px-6 md:px-20 py-24 md:py-32">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT — Big text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-red-500 text-xs tracking-[4px] uppercase mb-4"
          >
            04 — Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-6xl md:text-8xl text-white
                       leading-none tracking-tighter mb-8"
          >
            LET'S<br />
            BUILD<br />
            <span className="text-red-500">TOGETHER</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-sm"
          >
            I'm actively looking for Java Backend opportunities 
            in Bengaluru or remote. If you're building something 
            interesting — let's talk.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:parvatiabhu620@gmail.com"
            className="inline-block bg-red-500 hover:bg-red-600 
                       text-white text-sm tracking-widest uppercase 
                       px-8 py-4 transition duration-300"
          >
            Send Me an Email →
          </motion.a>
        </div>

        {/* RIGHT — Contact links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 border border-zinc-800 
                         p-5 text-zinc-400 hover:border-red-500 
                         hover:text-white transition-all duration-300 group"
            >
              <span className="text-red-500 group-hover:scale-110 
                               transition-transform duration-300">
                {contact.icon}
              </span>
              <div>
                <p className="text-zinc-600 text-xs tracking-widest 
                               uppercase mb-1">
                  {contact.label}
                </p>
                <p className="text-sm">{contact.value}</p>
              </div>
              <span className="ml-auto text-zinc-700 group-hover:text-red-500 
                               transition-colors duration-300 text-lg">
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