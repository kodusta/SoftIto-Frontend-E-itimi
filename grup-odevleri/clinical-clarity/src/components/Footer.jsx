import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">dentistry</span>
            <span>DentalCare</span>
          </div>
          <p className="footer-text">Hassasiyet ve Empatiyle Ağız ve Diş Sağlığı Portalı</p>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">
            Ana Sayfa
          </Link>
          <Link to="/hizmetler" className="footer-link">
            Hizmetler
          </Link>
          <Link to="/hakkimizda" className="footer-link">
            Ekibimiz
          </Link>
          <Link to="/iletisim" className="footer-link">
            İletişim
          </Link>
        </div>

        <div>
          <button onClick={() => navigate("/randevu")} className="footer-btn">
            Hemen Randevu Al
          </button>
        </div>
      </div>
    </footer>
  );
}
