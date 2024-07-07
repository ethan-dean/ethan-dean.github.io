import Render3D from "./Render3D/Render3D.jsx"

function About() {
  
  return (
    <div id="about" className="flex justify-evenly">
      <div>
        <p className="text-red-700">Hi my name is Ethan Dean.</p>
      </div>
      <div className="h-96 min-h-10">
        <Render3D />
      </div>
    </div>
  )
}

export default About