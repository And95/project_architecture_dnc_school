import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// COMPONENTS & PAGES
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import LoadingOverlay from './components/LoadingOverlay/LoadingOverlay'
import Projects from './pages/Projects'

// CONTEXTS
import { AppContext } from './contexts/AppContext'

// UTILS
import ScrollToTop from './utils/ScrollToTop'

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingOverlay />
  }
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App