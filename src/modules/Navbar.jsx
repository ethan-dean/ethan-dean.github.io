function Navbar() {

  return (
    <header className="fixed top-0 w-screen flex flex-nowrap justify-between align-middle p-6">
        <a href="#about">
          <img className="w-10 h-10" src="/icon.png" alt="Portfolio Icon" />
        </a>

        <div className="w-1/2 flex flex-nowrap justify-evenly p-0 m-0">
          <a className="text-blue-900 text-center p-0 m-0" href="#about">About</a>
          <a className="text-blue-900 text-center p-0 m-0" href="#projects">Projects</a>
          <a className="text-blue-900 text-center p-0 m-0" href="#contact">Contact</a>
          <a className="text-blue-900 text-center p-0 m-0" href="/resume.pdf">Resume</a>
          <a href="https://github.com/ethan-dean" type="blank_">
            <img className="w-10 h-10" src="/github.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/ethandean1" type="blank_">
            <img className="w-10 h-10" src="/linkedin.png"></img>
          </a>
        </div>
      </header>
  )
}

export default Navbar