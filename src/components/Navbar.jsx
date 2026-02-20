function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    px-6 md:px-20 py-5 
                    flex justify-between items-center 
                    bg-black border-b border-zinc-800">

      
  <div className="flex flex-col leading-none">
  <span className="font-display text-xl text-white tracking-widest">AK</span>
  <span className="text-[8px] text-red-500 tracking-[3px] uppercase">Java Engineer</span>
</div>
      <div className="flex items-center gap-10">
        
        <ul className="flex gap-8 text-zinc-400 text-sm tracking-wide">
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#about" className="hover:text-red-500 transition">
      About
    </a>
           
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#projects" className="hover:text-red-500 transition">
      Projects
    </a>
          
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer">
            <a href="#skills" className="hover:text-red-500 transition">
      Skills
    </a>
           
          </li>
        </ul>

        <button className="bg-red-500 hover:bg-red-600 
                           text-white text-sm tracking-widest uppercase
                           px-6 py-2.5 
                           transition duration-300">
                            <a href="#contact" className="hover:text-red-500 transition">Hire Me</a>
          
        </button>

      </div>
    </nav>
  )
}

export default Navbar