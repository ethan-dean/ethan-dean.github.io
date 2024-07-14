import Render3D from "./Render3D/Render3D.jsx"

function About() {
  
  return (
    <div id="about" className="w-screen xl:w-[1280px] xl:mx-auto flex justify-evenly items-center flex-wrap mt-24 mb-12 scroll-mt-24">
      <div className="w-72 laptop:w-[432px] mb-8">
        <p className="text-base sm:text-2xl">Hello, my name is</p>
        <p className="text-4xl sm:text-6xl">Ethan Dean.</p>
        <p className="text-base sm:text-2xl mb-2">I like to make things.</p>
        <p className="text-sm sm:text-lg">
          I am a computer science student at UCF, looking to develop simple solutions to complex problems and I am always looking for opportunities to face new challenges.
        </p>
      </div>

      <div className="w-72 laptop:w-[432px] h-96">
        <Render3D />
      </div>
    </div>
  )
}

export default About