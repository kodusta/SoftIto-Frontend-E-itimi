import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-brand-title">EduStream</span>
          <p className="footer-brand-desc">
            Geleceğin becerilerini bugünden kazanın. Uzman eğitmenler eşliğinde profesyonel sistem tasarımı, kodlama ve dijital pazarlama eğitimleri sunan modern bir gelişim platformudur.
          </p>
        </div>

        <div className="footer-links-group">
          <span className="footer-links-title">Platform</span>
          <ul className="footer-links-list">
            <li><Link className="footer-link-item" to="/">Ana Sayfa</Link></li>
            <li><Link className="footer-link-item" to="/kurslar">Kurslar</Link></li>
            <li><Link className="footer-link-item" to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link className="footer-link-item" to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <span className="footer-links-title">Destek</span>
          <ul className="footer-links-list">
            <li><Link className="footer-link-item" to="/iletisim">Yardım Merkezi</Link></li>
            <li><Link className="footer-link-item" to="/iletisim">Sıkça Sorulan Sorular</Link></li>
            <li><Link className="footer-link-item" to="/iletisim">Bizimle İletişime Geçin</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <span className="footer-links-title">Yasal</span>
          <ul className="footer-links-list">
            <li><span className="footer-link-item">Gizlilik Politikası</span></li>
            <li><span className="footer-link-item">Kullanım Koşulları</span></li>
            <li><span className="footer-link-item">Çerez Ayarları</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-bottom-text">© 2026 EduStream Inc. Tüm Hakları Saklıdır.</span>
        <ul className="footer-bottom-links">
          <li><span className="footer-link-item">Kullanım Şartları</span></li>
          <li><span className="footer-link-item">Gizlilik Bildirimi</span></li>
        </ul>
      </div>
    </footer>
  );
}
