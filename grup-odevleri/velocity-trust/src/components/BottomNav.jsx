import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'}>
        <span className="material-symbols-outlined">home</span>
        <span className="bottom-label">Ana Sayfa</span>
      </NavLink>
      <NavLink to="/cars" className={({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'}>
        <span className="material-symbols-outlined">directions_car</span>
        <span className="bottom-label">Araçlar</span>
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'}>
        <span className="material-symbols-outlined">info</span>
        <span className="bottom-label">Hakkımızda</span>
      </NavLink>
      <NavLink to="/my-bookings" className={({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'}>
        <span className="material-symbols-outlined">history</span>
        <span className="bottom-label">Rezervasyonlar</span>
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'bottom-link active' : 'bottom-link'}>
        <span className="material-symbols-outlined">mail</span>
        <span className="bottom-label">İletişim</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
