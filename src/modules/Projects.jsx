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
    <a key={index} href={project.link} className="flex flex-wrap justify-center w-[432px] mb-6 *:text-black *:hover:text-blue-700 hover:cursor-pointer">
      <div className="flex flex-col w-72 md:w-60 mb-2">
        <p className="text-lg font-bold text-inherit">{project.name}</p>
        <p className="font-light">{project.description}</p>
      </div>
      <div className="grid grid-cols-2 w-48">
        {project.stack.map((sw, index) => 
          <p key={index} className="font-semibold text-inherit">{sw}</p> 
        )}
      </div>
    </a>
  )
  
  return (
    <>
      <div id="projects" className="scroll-mt-24">
        {/* Title uses two spacers to match the structure of cards, so that
            the title is always left justified above the first card */}
        <div className="w-screen xl:w-[1280px] xl:mx-auto flex flex-wrap justify-evenly">
          <div className="flex flex-wrap justify-center w-[432px]">
            <p className="w-72 md:w-60 text-2xl mb-3">Projects</p>
            <p className="w-48 h-0 invisible">Spacer</p>
          </div>
          <p className="w-[432px] h-0 invisible">Spacer</p>
        </div>
        <div className="w-screen xl:w-[1280px] xl:mx-auto flex flex-wrap justify-evenly content-center mb-12">
          { projectCards }
        </div>
      </div>
    </>
  )
}

export default Projects