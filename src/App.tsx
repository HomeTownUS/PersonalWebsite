import './index.css'
import Home from './components/ui/Home'
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
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    </>
  )
}

export default App
