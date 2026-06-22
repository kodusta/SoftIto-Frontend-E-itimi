import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-title">Kinetic Retail</span>
          <p className="footer-desc">
            Hızlı, güvenilir ve modern alışveriş deneyimi sunan Türkiye'nin öncü e-ticaret platformu. En son teknoloji ürünleri en uygun fiyatlarla kapınızda.
          </p>
          <div className="footer-social-row">
            <span className="material-symbols-outlined footer-social-icon">public</span>
            <span className="material-symbols-outlined footer-social-icon">mail</span>
            <span className="material-symbols-outlined footer-social-icon">call</span>
          </div>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Hızlı Linkler</h5>
          <nav className="footer-nav">
            <Link className="footer-nav-link" to="/">Ana Sayfa</Link>
            <Link className="footer-nav-link" to="/categories">Kategoriler</Link>
            <Link className="footer-nav-link" to="/cart">Sepetim</Link>
            <Link className="footer-nav-link" to="/about">Hakkımızda</Link>
            <Link className="footer-nav-link" to="/contact">İletişim</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Kategoriler</h5>
          <nav className="footer-nav">
            <Link className="footer-nav-link" to="/categories">Elektronik</Link>
            <Link className="footer-nav-link" to="/categories">Giyim & Moda</Link>
            <Link className="footer-nav-link" to="/categories">Ev & Yaşam</Link>
            <Link className="footer-nav-link" to="/categories">Kozmetik</Link>
            <Link className="footer-nav-link" to="/categories">Spor & Outdoor</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Destek</h5>
          <nav className="footer-nav">
            <a className="footer-nav-link" href="#">Destek Merkezi</a>
            <a className="footer-nav-link" href="#">İade ve Değişim</a>
            <a className="footer-nav-link" href="#">Kargo Takip</a>
            <a className="footer-nav-link" href="#">Kullanım Koşulları</a>
            <a className="footer-nav-link" href="#">Gizlilik Sözleşmesi</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Kinetic Retail E-Ticaret A.Ş. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
