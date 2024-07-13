import Render3D from "./Render3D/Render3D.jsx"

function About() {
  
  return (
    <div id="about" className="w-screen flex justify-evenly items-center flex-wrap mt-24 mb-12">
      <div className="w-72 md:w-[432px] mb-8">
        <p className="">Hello, my name is</p>
        <p className="text-4xl">Ethan Dean.</p>
        <p className="mb-2">I like to make things.</p>
        <p className="text-sm">
          I am a computer science student at UCF, looking to develop simple solutions to complex problems and I am always looking for opportunities to face new challenges.
        </p>
      </div>

      <div className="w-72 md:w-[432px] h-96">
        <Render3D />
      </div>
    </div>
  )
}

export default About