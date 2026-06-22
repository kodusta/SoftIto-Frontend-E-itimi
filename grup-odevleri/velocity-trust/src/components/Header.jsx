import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="site-header shadow-md">
      <div className="header-inner">
        <div className="header-logo-section">
          <button className="mobile-menu-btn" onClick={() => setIsDrawerOpen(true)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <Link to="/" className="logo-text">VELOCITY</Link>
        </div>

        <nav className="desktop-navbar">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Ana Sayfa</NavLink>
          <NavLink to="/cars" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Araçlar</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Hakkımızda</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>İletişim</NavLink>
          <NavLink to="/my-bookings" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Rezervasyonlarım</NavLink>
        </nav>

        <div className="header-profile-section">
          <span className="profile-name">Konuk Kullanıcı</span>
          <div className="profile-avatar">
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <aside className="drawer-sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <span className="logo-text text-primary">VELOCITY</span>
              <button className="drawer-close-btn" onClick={() => setIsDrawerOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="drawer-body">
              <div className="drawer-user-info">
                <div className="drawer-avatar">GU</div>
                <div>
                  <p className="drawer-username">Konuk Kullanıcı</p>
                  <p className="drawer-status">Premium Üye</p>
                </div>
              </div>
              <nav className="drawer-nav">
                <Link to="/" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                  <span className="material-symbols-outlined">home</span>
                  <span>Ana Sayfa</span>
                </Link>
                <Link to="/cars" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                  <span className="material-symbols-outlined">directions_car</span>
                  <span>Araçlar</span>
                </Link>
                <Link to="/about" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                  <span className="material-symbols-outlined">info</span>
                  <span>Hakkımızda</span>
                </Link>
                <Link to="/contact" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                  <span className="material-symbols-outlined">mail</span>
                  <span>İletişim</span>
                </Link>
                <Link to="/my-bookings" className="drawer-link" onClick={() => setIsDrawerOpen(false)}>
                  <span className="material-symbols-outlined">history</span>
                  <span>Rezervasyonlarım</span>
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
