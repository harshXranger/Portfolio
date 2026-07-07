'use client'

import LoadingScreen from './ui/LoadingScreen'
import CustomCursor from './ui/CustomCursor'
import BackToTop from './ui/BackToTop'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <div className="noise relative">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
