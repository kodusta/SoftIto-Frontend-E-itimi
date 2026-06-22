import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav-root">
      <Link
        to="/"
        className={isActive("/") ? "bottom-nav-btn-active" : "bottom-nav-btn"}
      >
        <span className="bottom-nav-icon">home</span>
        <span className="bottom-nav-text">Ana Sayfa</span>
      </Link>
      <Link
        to="/hizmetler"
        className={isActive("/hizmetler") ? "bottom-nav-btn-active" : "bottom-nav-btn"}
      >
        <span className="bottom-nav-icon">medical_services</span>
        <span className="bottom-nav-text">Hizmetler</span>
      </Link>
      <Link
        to="/randevu"
        className={isActive("/randevu") ? "bottom-nav-btn-active" : "bottom-nav-btn"}
      >
        <span className="bottom-nav-icon">calendar_add_on</span>
        <span className="bottom-nav-text">Randevu</span>
      </Link>
      <Link
        to="/hakkimizda"
        className={isActive("/hakkimizda") ? "bottom-nav-btn-active" : "bottom-nav-btn"}
      >
        <span className="bottom-nav-icon">group</span>
        <span className="bottom-nav-text">Ekip</span>
      </Link>
      <Link
        to="/iletisim"
        className={isActive("/iletisim") ? "bottom-nav-btn-active" : "bottom-nav-btn"}
      >
        <span className="bottom-nav-icon">location_on</span>
        <span className="bottom-nav-text">İletişim</span>
      </Link>
    </nav>
  );
}
