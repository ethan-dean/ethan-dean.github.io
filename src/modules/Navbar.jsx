function Navbar() {

  return (
    <header className="bg-gray-200 opacity-[0.98] fixed top-0 w-screen flex flex-nowrap justify-between align-middle p-2  border-b border-gray-600">
        <a href="#about">
          <img className="w-12 h-12" src="/icon.png" alt="Portfolio Icon" />
        </a>

        {/* Nav Bar Desktop */}
        <div className="hidden md:flex">
          <a className="flex items-center text-black no-underline mr-3" href="#about">About</a>
          <a className="flex items-center text-black no-underline mr-3" href="#projects">Projects</a>
          <a className="flex items-center text-black no-underline mr-3" href="#contact">Contact</a>
          <a className="flex items-center text-black no-underline mr-2" href="/resume.pdf">Resume</a>
          <a className="flex items-center mr-1" href="https://github.com/ethan-dean" type="blank_">
            <img className="w-10 h-10 p-1 flex items-center" src="/github.png"></img>
          </a>
          <a className="flex items-center" href="https://www.linkedin.com/in/ethandean1" type="blank_">
            <img className="w-10 h-10 p-1" src="/linkedin.png"></img>
          </a>
        </div>

        {/* Nav Mobile */}
        <div className="flex md:hidden flex-col justify-between h-18 p-3">
          <input type="checkbox" className="fixed z-10 top-4 right-5 w-8 h-8 opacity-0 peer" />

          <span className="w-8 h-1 bg-black rounded-sm transition-all peer-checked:rotate-45 peer-checked:translate-y-[10px]" />
          <span className="w-8 h-1 bg-black rounded-sm transition-all peer-checked:scale-x-0" />
          <span className="w-8 h-1 bg-black rounded-sm transition-all peer-checked:-rotate-45 peer-checked:-translate-y-[10px]" />

          <ul className="bg-gray-200 fixed z-50 top-[65px] -right-56 h-screen w-56 p-4 pl-6 transition-all peer-checked:-translate-x-56">
            <li><a className="flex text-xl font-semibold items-center text-black no-underline pb-1" href="#About">About</a></li>
            <li><a className="flex text-xl font-semibold items-center text-black no-underline pb-1" href="#Projects">Projects</a></li>
            <li><a className="flex text-xl font-semibold items-center text-black no-underline pb-1" href="#Contact">Contact</a></li>
            <li><a className="flex text-xl font-semibold items-center text-black no-underline pb-1" href="/resume.pdf">Resume</a></li>
            <li>
              <a className="flex items-center mr-1 pb-1" href="https://github.com/ethan-dean" type="blank_">
                <img className="w-10 h-10 p-1 flex items-center" src="/github.png"></img>
              </a>
            </li>
            <li>
              <a className="flex items-center mr" href="https://www.linkedin.com/in/ethandean1" type="blank_">
                <img className="w-10 h-10 p-1" src="/linkedin.png"></img>
              </a>
            </li>
          </ul>
        </div>
      </header>
  )
}

export default Navbar