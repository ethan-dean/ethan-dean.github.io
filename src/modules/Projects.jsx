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
      <div className="flex flex-col w-60">
        <p className="text-lg font-bold">{project.name}</p>
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
      <ul className="flex flex-wrap content-center justify-evenly w-screen">
        { projectCards }
      </ul>
    </div>
  )
}

export default Projects