import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <span className="footer-title">LuxeStay</span>
          <p className="footer-desc">
            Özenle seçilmiş lüks konaklama tesisleri ve kusursuz rezervasyon teknolojisiyle seyahat deneyiminizi zirveye taşıyoruz.
          </p>
          <div className="footer-social-row">
            <span className="material-symbols-outlined footer-social-icon">public</span>
            <span className="material-symbols-outlined footer-social-icon">mail</span>
            <span className="material-symbols-outlined footer-social-icon">phone</span>
          </div>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Hızlı Linkler</h5>
          <nav className="footer-nav">
            <Link className="footer-nav-link" to="/">Anasayfa</Link>
            <Link className="footer-nav-link" to="/about">Hakkımızda</Link>
            <Link className="footer-nav-link" to="/rooms">Oda Kategorileri</Link>
            <Link className="footer-nav-link" to="/contact">İletişim</Link>
          </nav>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Destinasyonlar</h5>
          <nav className="footer-nav">
            <a className="footer-nav-link" href="#">Avrupa Otelleri</a>
            <a className="footer-nav-link" href="#">Asya Pasifik</a>
            <a className="footer-nav-link" href="#">Amerika Kıtası</a>
            <a className="footer-nav-link" href="#">Orta Doğu</a>
            <a className="footer-nav-link" href="#">Tropikal Resortlar</a>
          </nav>
        </div>

        <div className="footer-col">
          <h5 className="footer-heading">Destek</h5>
          <nav className="footer-nav">
            <a className="footer-nav-link" href="#">Yardım Merkezi</a>
            <a className="footer-nav-link" href="#">İptal Seçenekleri</a>
            <a className="footer-nav-link" href="#">Seyahat Danışmanlığı</a>
            <a className="footer-nav-link" href="#">Gizlilik Politikası</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 LuxeStay Hospitality Group. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
