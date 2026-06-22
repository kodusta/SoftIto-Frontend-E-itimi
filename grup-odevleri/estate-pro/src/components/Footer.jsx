import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-about-col">
          <span className="footer-title">EstatePro</span>
          <p className="footer-desc">Gayrimenkulde modern yaklaşım ve profesyonel hizmetin adresi. Hayallerinizi birlikte inşa ediyoruz.</p>
          <div className="footer-socials">
            <span className="material-symbols-outlined footer-social-icon">face_nod</span>
            <span className="material-symbols-outlined footer-social-icon">alternate_email</span>
            <span className="material-symbols-outlined footer-social-icon">share</span>
          </div>
        </div>
        <div>
          <h5 className="footer-col-title">Bağlantılar</h5>
          <ul className="footer-links-list">
            <li><Link to="/listings" className="footer-link">İlanlar</Link></li>
            <li><a href="#" className="footer-link">Yatırım Rehberi</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><Link to="/contact" className="footer-link">Bize Ulaşın</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="footer-col-title">İletişim</h5>
          <ul className="footer-links-list">
            <li className="footer-contact-item"><span className="material-symbols-outlined footer-contact-icon">call</span> +90 212 123 45 67</li>
            <li className="footer-contact-item"><span className="material-symbols-outlined footer-contact-icon">mail</span> info@estatepro.com</li>
            <li className="footer-contact-item"><span className="material-symbols-outlined footer-contact-icon">location_on</span> Levent, İstanbul</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 EstatePro Real Estate. Tüm hakları saklıdır.</span>
        <div className="footer-bottom-links">
          <span>Gizlilik Politikası</span>
          <span>Kullanım Koşulları</span>
        </div>
      </div>
    </footer>
  );
}
