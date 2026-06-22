import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={scrolled ? "header-root header-scrolled" : "header-root"}>
      <div onClick={() => navigate("/")} className="header-logo-container">
        <span className="header-logo-icon">dentistry</span>
        <span className="header-logo-text">DentalCare</span>
      </div>

      <nav className="header-nav">
        <Link
          to="/"
          className={isActive("/") ? "header-link-active" : "header-link"}
        >
          Ana Sayfa
        </Link>
        <Link
          to="/hizmetler"
          className={isActive("/hizmetler") ? "header-link-active" : "header-link"}
        >
          Hizmetler
        </Link>
        <Link
          to="/hakkimizda"
          className={isActive("/hakkimizda") ? "header-link-active" : "header-link"}
        >
          Ekibimiz
        </Link>
        <Link
          to="/iletisim"
          className={isActive("/iletisim") ? "header-link-active" : "header-link"}
        >
          İletişim
        </Link>
      </nav>

      <div className="header-actions">
        <Link to="/iletisim" className="header-emergency-btn">
          emergency_share
        </Link>
        <button onClick={onMenuClick} className="header-menu-btn">
          menu
        </button>
        <button
          onClick={() => navigate("/randevu")}
          className="hero-btn-primary hidden md:block"
        >
          Randevu Al
        </button>
      </div>
    </header>
  );
}
