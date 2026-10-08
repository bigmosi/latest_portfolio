import { useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CaseStudy from "./pages/CaseStudy"

const Home = () => (
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
)

const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

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
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
