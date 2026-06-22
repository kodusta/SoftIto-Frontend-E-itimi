import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-info">
          <span className="font-display-lg text-headline-sm text-primary">Berna & Aslı Cafe</span>
          <p className="font-body-md text-on-surface-variant text-center md:text-left">
            © 2026 BERNA & ASLI CAFE. TÜM HAKLARI SAKLIDIR.
          </p>
        </div>
        <div className="footer-nav">
          <a className="footer-nav-link" href="#">Gizlilik Politikası</a>
          <a className="footer-nav-link" href="#">Kullanım Şartları</a>
          <a className="footer-nav-link" href="#">Kariyer</a>
          <a className="footer-nav-link" href="#">Basın</a>
        </div>
      </div>
    </footer>
  );
}
