import Render3D from "./Render3D/Render3D.jsx"

function About() {
  
  return (
    <div id="about" className="w-screen flex justify-evenly items-center flex-wrap m-auto relative top-24">
      <div className="w-72 md:w-96 mb-8">
        <p className="">Hello, my name is</p>
        <p className="text-4xl">Ethan Dean.</p>
        <p className="mb-2">I enjoy making things.</p>
        <p className="text-sm">
          I am a computer science student at UCF, looking to develop simple solutions to complex problems and I am always looking for opportunities to face new challenges.
        </p>
      </div>

      <div className="w-96 h-96">
        <Render3D />
      </div>
    </div>
  )
}

export default About