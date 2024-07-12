import Navbar from "./modules/Navbar.jsx"
import About from "./modules/About.jsx"
import Projects from "./modules/Projects.jsx"
import Contact from "./modules/Contact.jsx"
import Footer from "./modules/Footer.jsx"

function App() {

  return (
    <div className="h-screen">
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* Navbar is last so that the mobile menu will be on top of all other elements. */}
      <Navbar />
    </div>
  )
}

export default App
