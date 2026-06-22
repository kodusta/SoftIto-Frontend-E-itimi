import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={isScrolled ? "nav-bar py-2" : "nav-bar h-20"}>
        <div className="nav-container">
          <div className="nav-left">
            <button className="nav-menu-toggle" onClick={() => setIsDrawerOpen(true)}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            <Link className="nav-logo" to="/">CREATIVE_CORE</Link>
          </div>
          <nav className="nav-menu">
            <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"} to="/#vision">Vizyon</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"} to="/services">Hizmetlerimiz</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"} to="/about">Hakkımızda</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"} to="/#process">Süreç</NavLink>
            <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link-inactive"} to="/contact">İletişim</NavLink>
          </nav>
          <Link className="nav-btn" to="/quote">Teklif Al</Link>
        </div>
      </header>

      {isDrawerOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}></div>
          <aside className="drawer-container">
            <div className="drawer-header">
              <span className="drawer-title">Menü</span>
              <button className="drawer-close" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="drawer-nav">
              <NavLink className={({ isActive }) => isActive ? "drawer-link-active" : "drawer-link-inactive"} to="/#vision" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">visibility</span> Vizyon
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "drawer-link-active" : "drawer-link-inactive"} to="/services" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">bolt</span> Hizmetlerimiz
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "drawer-link-active" : "drawer-link-inactive"} to="/about" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">groups</span> Hakkımızda
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? "drawer-link-active" : "drawer-link-inactive"} to="/#process" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">terminal</span> Süreç
              </NavLink>
              <NavLink className="drawer-link-last" to="/contact" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">mail</span> İletişim
              </NavLink>
            </nav>
          </aside>
        </>
      )}
    </>
  )
}
