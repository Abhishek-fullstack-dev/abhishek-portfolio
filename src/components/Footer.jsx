function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 
                       px-6 md:px-20 py-8
                       flex flex-col md:flex-row justify-between 
                       items-center gap-3 md:gap-4 text-center md:text-left">
      <span className="font-display text-lg sm:text-xl text-white tracking-widest">
        ABHISHEK KUMAR
      </span>
      <span className="text-zinc-600 text-xs tracking-widest uppercase">
        © 2026 · Java Backend Engineer · Open to Work
      </span>
      <span className="text-zinc-700 text-xs tracking-widest uppercase">
        Built with React + Tailwind
      </span>
    </footer>
  )
}

export default Footer