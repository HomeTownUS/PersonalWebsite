import './index.css'
import Home from './components/ui/Home'
import About from './components/ui/About'
import Contact from './components/ui/Contact'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/NavigationBar'

function App() {
  return (
    <>
    <Navbar />
    <main className="flex-1 flex flex-col items-center container mx-auto p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<div className="flex-1 flex flex-col items-center text-center px-4 font-mono"><h1 className='mb-4 underline'>Projects Page</h1><p>This page is under construction. Please check back later.</p></div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  )
}

export default App
