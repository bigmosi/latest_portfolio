import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
import Services from "./components/Services"
import Aos from 'aos'
import { useEffect } from "react"
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine',
      once: true
    })
  },[])

  return (
    <>
     <Navbar />
     <main>
       <Hero />
       <About />
       <Experience />
       <Skill />
       <Services />
       <Projects />
       <Contact />
     </main>
     <Footer />
    </>
  )
}

export default App
