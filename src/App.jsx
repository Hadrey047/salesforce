

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Herosection from './pages/Herosection'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Herosection />} />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
