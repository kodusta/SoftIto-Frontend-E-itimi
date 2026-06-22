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
      <nav className="nav-container">
        <div className="header-left">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link to="/" className="logo-text">
            FORGE ELITE
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className={getLinkClass('/')}>
            Anasayfa
          </Link>
          <Link to="/about" className={getLinkClass('/about')}>
            Hakkımızda
          </Link>
          <Link to="/services" className={getLinkClass('/services')}>
            Hizmetlerimiz
          </Link>
          <Link to="/contact" className={getLinkClass('/contact')}>
            İletişim
          </Link>
        </div>

        <Link to="/booking" className="btn-join">
          RANDEVU AL
        </Link>
      </nav>

      <div className={isOpen ? 'mobile-drawer-open' : 'mobile-drawer-closed'}>
        <Link to="/" className={getLinkClass('/')} onClick={toggleMenu}>
          Anasayfa
        </Link>
        <Link to="/about" className={getLinkClass('/about')} onClick={toggleMenu}>
          Hakkımızda
        </Link>
        <Link to="/services" className={getLinkClass('/services')} onClick={toggleMenu}>
          Hizmetlerimiz
        </Link>
        <Link to="/contact" className={getLinkClass('/contact')} onClick={toggleMenu}>
          İletişim
        </Link>
        <Link to="/booking" className="btn-join" onClick={toggleMenu}>
          RANDEVU AL
        </Link>
      </div>
    </header>
  );
}
