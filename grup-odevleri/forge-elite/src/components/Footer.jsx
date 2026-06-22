import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="logo-text">
          FORGE ELITE
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">
            Gizlilik Politikası
          </a>
          <a href="#" className="footer-link">
            Kullanım Koşulları
          </a>
          <a href="#" className="footer-link">
            SSS
          </a>
          <a href="#" className="footer-link">
            Kariyer
          </a>
        </div>
        <div className="social-icons">
          <a href="#" className="social-icon-btn">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a href="#" className="social-icon-btn">
            <span className="material-symbols-outlined">share</span>
          </a>
          <a href="#" className="social-icon-btn">
            <span className="material-symbols-outlined">podcasts</span>
          </a>
        </div>
        <p className="copyright-text">
          © 2024 FORGE ELITE PERFORMANCE. TÜM HAKLARI SAKLIDIR.
        </p>
      </div>
    </footer>
  );
}
