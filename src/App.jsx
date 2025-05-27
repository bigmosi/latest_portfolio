import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Aos from 'aos'
import { useEffect } from "react"
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-sine'
    })
  },[])

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skill />
     <Services />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  )
}

export default App
