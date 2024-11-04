import { useEffect, useState } from 'react'
import { Home } from './pages/home/Home'
import { Skills } from './pages/skills/Skills'
import { Contact } from './pages/contact/Contact'
import { Projects } from './pages/projects/Projects'
import { ProjectDetails } from './components/project/ProjectDetails'
import { About } from './pages/about/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  useEffect(() => {
    document.title = 'Portfolio | Lester López'
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:slug' element={<ProjectDetails />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
