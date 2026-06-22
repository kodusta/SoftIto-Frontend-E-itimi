import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavigationDrawer({ isOpen, onClose }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div
        className={
          isOpen
            ? "mobile-drawer-overlay opacity-100"
            : "mobile-drawer-overlay opacity-0 pointer-events-none"
        }
        onClick={onClose}
      />
      <aside
        className={
          isOpen
            ? "mobile-drawer-root translate-x-0"
            : "mobile-drawer-root -translate-x-full"
        }
      >
        <div className="mobile-drawer-brand">
          <div className="mobile-drawer-logo-box">
            <span className="mobile-drawer-logo-icon">dentistry</span>
          </div>
          <div>
            <h2 className="mobile-drawer-logo-text">DentalCare</h2>
            <p className="mobile-drawer-logo-tagline">Hassasiyet &amp; Empati</p>
          </div>
        </div>

        <nav className="mobile-drawer-nav">
          <Link
            to="/"
            onClick={onClose}
            className={isActive("/") ? "mobile-drawer-link-active" : "mobile-drawer-link"}
          >
            <span className="mobile-drawer-link-icon">home</span>
            <span>Ana Sayfa</span>
          </Link>
          <Link
            to="/hizmetler"
            onClick={onClose}
            className={isActive("/hizmetler") ? "mobile-drawer-link-active" : "mobile-drawer-link"}
          >
            <span className="mobile-drawer-link-icon">medical_services</span>
            <span>Hizmetlerimiz</span>
          </Link>
          <Link
            to="/randevu"
            onClick={onClose}
            className={isActive("/randevu") ? "mobile-drawer-link-active" : "mobile-drawer-link"}
          >
            <span className="mobile-drawer-link-icon">calendar_add_on</span>
            <span>Randevu Al</span>
          </Link>
          <Link
            to="/hakkimizda"
            onClick={onClose}
            className={isActive("/hakkimizda") ? "mobile-drawer-link-active" : "mobile-drawer-link"}
          >
            <span className="mobile-drawer-link-icon">group</span>
            <span>Ekibimiz</span>
          </Link>
          <Link
            to="/iletisim"
            onClick={onClose}
            className={isActive("/iletisim") ? "mobile-drawer-link-active" : "mobile-drawer-link"}
          >
            <span className="mobile-drawer-link-icon">location_on</span>
            <span>İletişim</span>
          </Link>
        </nav>

        <button onClick={onClose} className="mobile-drawer-close-btn">
          <span className="material-symbols-outlined">close</span>
        </button>
      </aside>
    </>
  );
}
