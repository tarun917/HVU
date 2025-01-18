// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Organisation from './pages/Organisation'
import About from './pages/About'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    // MIN-HEIGHT + FLEX + COL
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* MAIN CONTENT: give it flex-grow */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App