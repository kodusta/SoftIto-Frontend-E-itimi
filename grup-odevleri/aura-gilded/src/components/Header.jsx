import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getProgressWidth = () => {
    if (location.pathname === '/randevu') return '33.33%';
    if (location.pathname === '/odeme') return '66.66%';
    if (location.pathname === '/islem-durumu') return '100%';
    return '0%';
  };

  const showProgress = ['/randevu', '/odeme', '/islem-durumu'].includes(location.pathname);

  return (
    <>
      <header className="header-root">
        <div className="header-container">
          <button className="header-menu-btn" onClick={() => setIsOpen(true)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          
          <Link to="/" className="header-logo">
            AURA & GILDED
          </Link>
          
          <Link to="/randevu" className="header-action-btn">
            <span className="material-symbols-outlined">event_available</span>
          </Link>
        </div>
      </header>

      {showProgress && (
        <div className="progress-indicator-bar">
          <div className="progress-indicator-fill" style={{ width: getProgressWidth() }} />
        </div>
      )}

      {isOpen && (
        <div className="drawer-root">
          <div className="drawer-backdrop" onClick={() => setIsOpen(false)} />
          <div className="drawer-content">
            <div>
              <div className="drawer-header">
                <span className="header-logo">AURA & GILDED</span>
                <button className="header-action-btn" onClick={() => setIsOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="drawer-nav">
                <Link to="/" className="drawer-link" onClick={() => setIsOpen(false)}>
                  Ana Sayfa
                </Link>
                <Link to="/hizmetler" className="drawer-link" onClick={() => setIsOpen(false)}>
                  Hizmetlerimiz
                </Link>
                <Link to="/randevu" className="drawer-link" onClick={() => setIsOpen(false)}>
                  Randevu Al
                </Link>
                <Link to="/hakkimizda" className="drawer-link" onClick={() => setIsOpen(false)}>
                  Hakkımızda
                </Link>
                <Link to="/iletisim" className="drawer-link" onClick={() => setIsOpen(false)}>
                  İletişim
                </Link>
              </nav>
            </div>
            <div className="drawer-footer">
              <span className="hero-label">DİLEK / MUHAMMET</span>
              <p className="footer-copyright">Güzellik Salonu</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
