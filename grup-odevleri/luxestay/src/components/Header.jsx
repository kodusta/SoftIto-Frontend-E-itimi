import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link-inactive';
  };

  return (
    <header className="header-bar">
      <div className="nav-container">
        <div className="logo-area">
          <button className="mobile-drawer-toggle" onClick={toggleMenu}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link to="/" className="logo-text">
            LuxeStay
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className={getLinkClass('/')}>
            Anasayfa
          </Link>
          <Link to="/rooms" className={getLinkClass('/rooms')}>
            Odalar
          </Link>
          <Link to="/about" className={getLinkClass('/about')}>
            Hakkımızda
          </Link>
          <Link to="/contact" className={getLinkClass('/contact')}>
            İletişim
          </Link>
        </nav>

        <div className="logo-area">
          <Link to="/rooms" className="btn-signin">
            Rezervasyon Yap
          </Link>
        </div>
      </div>

      <div className={isOpen ? 'mobile-drawer-open' : 'mobile-drawer-closed'}>
        <button className="text-snow-white self-end mb-4" onClick={toggleMenu}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <Link to="/" className={getLinkClass('/')} onClick={toggleMenu}>
          Anasayfa
        </Link>
        <Link to="/rooms" className={getLinkClass('/rooms')} onClick={toggleMenu}>
          Odalar
        </Link>
        <Link to="/about" className={getLinkClass('/about')} onClick={toggleMenu}>
          Hakkımızda
        </Link>
        <Link to="/contact" className={getLinkClass('/contact')} onClick={toggleMenu}>
          İletişim
        </Link>
        <Link to="/rooms" className="btn-signin text-center" onClick={toggleMenu}>
          Rezervasyon Yap
        </Link>
      </div>
    </header>
  );
}
