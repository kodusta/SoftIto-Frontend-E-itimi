import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <footer className="footer-root">
        <h2 className="footer-title">AURA & GILDED</h2>
        <div className="footer-nav">
          <Link to="/" className="footer-link">Ana Sayfa</Link>
          <Link to="/hizmetler" className="footer-link">Hizmetlerimiz</Link>
          <Link to="/randevu" className="footer-link">Randevu Al</Link>
          <Link to="/hakkimizda" className="footer-link">Hakkımızda</Link>
          <Link to="/iletisim" className="footer-link">İletişim</Link>
        </div>
        <p className="footer-copyright">
          © 2026 DİLEK & MUHAMMET GÜZELLİK SALONU. TÜM HAKLARI SAKLIDAR.
        </p>
      </footer>

      <nav className="bottom-nav-root">
        <Link to="/" className={isActive('/') ? 'bottom-nav-btn-active' : 'bottom-nav-btn'}>
          <span className="material-symbols-outlined">home</span>
          <span className="footer-copyright">Ana Sayfa</span>
        </Link>
        <Link to="/hizmetler" className={isActive('/hizmetler') ? 'bottom-nav-btn-active' : 'bottom-nav-btn'}>
          <span className="material-symbols-outlined">spa</span>
          <span className="footer-copyright">Hizmetler</span>
        </Link>
        <Link to="/randevu" className={isActive('/randevu') || isActive('/odeme') ? 'bottom-nav-btn-active' : 'bottom-nav-btn'}>
          <span className="material-symbols-outlined">event_available</span>
          <span className="footer-copyright">Randevu</span>
        </Link>
        <Link to="/iletisim" className={isActive('/iletisim') ? 'bottom-nav-btn-active' : 'bottom-nav-btn'}>
          <span className="material-symbols-outlined">contact_support</span>
          <span className="footer-copyright">İletişim</span>
        </Link>
      </nav>
    </>
  );
}
