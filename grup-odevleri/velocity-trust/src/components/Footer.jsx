import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-section">
          <h2 className="footer-logo">VELOCITY</h2>
          <p className="footer-desc">Premium araç kiralama hizmetinde lider. En son teknoloji ve üstün müşteri memnuniyeti odağıyla seyahatlerinizi konforlu hale getiriyoruz.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="social-icon">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="social-icon">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-link-group">
            <h6 className="footer-group-title">Şirket</h6>
            <nav className="footer-nav">
              <Link to="/about" className="footer-link">Hakkımızda</Link>
              <Link to="/cars" className="footer-link">Filomuz</Link>
              <a href="#" className="footer-link">Kariyer</a>
            </nav>
          </div>

          <div className="footer-link-group">
            <h6 className="footer-group-title">Yasal</h6>
            <nav className="footer-nav">
              <a href="#" className="footer-link-underline">Gizlilik Politikası</a>
              <a href="#" className="footer-link">Kullanım Şartları</a>
              <a href="#" className="footer-link">Sıkça Sorulan Sorular</a>
              <Link to="/contact" className="footer-link">Destek</Link>
            </nav>
          </div>

          <div className="footer-newsletter-group">
            <h6 className="footer-group-title">Bülten</h6>
            <div className="newsletter-input-wrapper">
              <input type="email" placeholder="E-posta adresiniz" className="newsletter-input" />
              <button className="newsletter-submit-btn">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <p className="footer-copyright">© 2026 VELOCITY Araç Kiralama. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
