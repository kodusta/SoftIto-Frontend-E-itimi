import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Quote from './pages/Quote'
import Status from './pages/Status'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background text-on-background font-body-md selection:bg-secondary selection:text-white min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/status" element={<Status />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
