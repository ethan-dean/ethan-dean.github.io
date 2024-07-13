import { useState, useEffect } from "react"

function Projects() {

  const [ projectData, setProjectData ] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/projectData.json') // Assuming data.json is in public folder
        const jsonData = await response.json()
        console.log(jsonData)
        setProjectData(jsonData.projects)
      } catch (e) {
        console.error('Error reading projectData.json: ', e)
      }
    }

    fetchData()
  }, [])

  
  const projectCards = projectData.map((project, index) =>
    <li key={index} className="flex flex-wrap justify-center w-[432px] mb-6">
      <div className="flex flex-col w-72 md:w-60 mb-2">
        <a href={project.link}><p className="text-lg text-black font-bold">{project.name}</p></a>
        <p className="font-light">{project.description}</p>
      </div>
      <div className="grid grid-cols-2 w-48">
        {project.stack.map((sw, index) => 
          <p key={index} className="font-semibold text-gray-900">{sw}</p> 
        )}
      </div>
    </li>
  )
  
  return (
    <div id="projects" className="">
      {/* Title uses two spacers to match the structure of cards, so that
          the title is always left justified above the first card */}
      <div className="flex flex-wrap justify-evenly w-screen">
        <div className="flex flex-wrap justify-evenly">
          <p className="w-72 md:w-60 text-2xl mb-3">Projects</p>
          <p className="w-48 h-0 invisible">Spacer</p>
        </div>
        <p className="w-[432px] h-0 invisible">Spacer</p>
      </div>
      <ul className="flex flex-wrap content-center justify-evenly w-screen mb-12">
        { projectCards }
      </ul>
    </div>
  )
}

export default Projects