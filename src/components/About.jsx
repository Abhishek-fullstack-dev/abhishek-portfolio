import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="bg-zinc-950 px-6 md:px-20 py-24 md:py-32">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-red-500 text-xs tracking-[4px] uppercase mb-4"
      >
        About
      </motion.p>

      {/* Section title — FIXED: was too big on mobile */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-display text-5xl sm:text-6xl md:text-8xl text-white 
                   leading-none tracking-tighter mb-12 md:mb-16"
      >
        WHO I AM
      </motion.h2>

      {/* Two column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            I'm a Java Backend Engineer and 2025 B.Tech CS graduate 
            from LNCT University. I specialise in building distributed, 
            event-driven backend systems that scale.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            I've designed a 5-microservice healthcare platform handling 
            real-world concerns — stateless JWT auth, async Kafka messaging, 
            service discovery, and API Gateway routing. Not tutorials. 
            Real architecture decisions.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-10">
            I understand <span className="text-white">why</span> architecture 
            decisions matter — when Saga choreography beats orchestration, 
            when a Dead Letter Queue saves you, why Circuit Breakers exist. 
            Looking for a backend role where I contribute from day one.
          </p>

         <a href="/Abhishek_Kumar_Java_Backend_Resume.pdf"
  download
  target="_blank"
  rel="noreferrer"
  className="border border-white text-white text-sm 
             tracking-widest uppercase px-8 py-3 
             hover:bg-white hover:text-black 
             transition duration-300 inline-block"
>
  Download Resume →
</a>
        </motion.div>

        {/* RIGHT — Facts grid 
            FIXED: was grid-cols-2 always — cramped on mobile
            Now single column on small, 2 cols on sm+ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-zinc-800"
        >
          {[
            { label: "Degree",   value: "B.Tech CS",    sub: "LNCT University 2025" },
            { label: "Location", value: "Bengaluru",    sub: "Karnataka, India" },
            { label: "Projects", value: "2+ Live",      sub: "Microservices based" },
            { label: "Status",   value: "Open to Work", sub: "Backend roles" },
          ].map((fact, i) => (
            <div key={i} className="bg-zinc-950 p-5 sm:p-6">
              <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">
                {fact.label}
              </p>
              <p className="text-white font-bold text-sm sm:text-base mb-1">
                {fact.value}
              </p>
              <p className="text-zinc-500 text-xs">
                {fact.sub}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default About