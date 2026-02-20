import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "framer-motion"

function CountUp({ target }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, target, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    })
    return controls.stop
  }, [inView, target])

  return (
    <span ref={ref}>
      {String(display).padStart(2, "0")}
    </span>
  )
}

export default CountUp