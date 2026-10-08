import { useEffect, useRef } from "react"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  const spotlight = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return
    const onMove = (e) => {
      if (spotlight.current) {
        spotlight.current.style.background =
          `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, var(--spotlight), transparent 80%)`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <a href="#content" className="skip-link">Skip to content</a>
      <div className="spotlight" ref={spotlight} aria-hidden="true" />
      <div className="layout">
        <Sidebar />
        <main id="content">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
