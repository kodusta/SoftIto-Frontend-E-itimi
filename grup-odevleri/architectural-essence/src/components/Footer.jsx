import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <span className="footer-logo">ARC & LINE</span>
          <p className="footer-desc">
            Modern sığınaklar için zamansız tasarım. Sessiz ve duru anlara değer veren, kalıcı mimari.
          </p>
        </div>
        <div className="footer-nav-col">
          <span className="footer-nav-title">STÜDYO</span>
          <ul className="footer-nav-links">
            <li><Link to="/" className="footer-nav-link">ANASAYFA</Link></li>
            <li><Link to="/hakkimizda" className="footer-nav-link">HAKKIMIZDA</Link></li>
            <li><Link to="/hizmetlerimiz" className="footer-nav-link">HİZMETLERİMİZ</Link></li>
          </ul>
        </div>
        <div className="footer-nav-col">
          <span className="footer-nav-title">BAĞLANTI</span>
          <ul className="footer-nav-links">
            <li><Link to="/iletisim" className="footer-nav-link">İLETİŞİM</Link></li>
            <li><a href="#" className="footer-nav-link">YAZILAR</a></li>
            <li><a href="#" className="footer-nav-link">GİZLİLİK</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <span className="footer-nav-title">BÜLTENE KATILIN</span>
          <form onSubmit={handleSubmit} className="footer-form">
            <input type="email" placeholder="E-posta Adresiniz" className="footer-input" required />
            <button type="submit" className="footer-submit">KATIL</button>
          </form>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2024 ARC & LINE ARCHITECTURAL STUDIO. TASARIMDA KALICILIK.</p>
          <div className="footer-social-links">
            <a href="#" className="footer-social-link">INSTAGRAM</a>
            <a href="#" className="footer-social-link">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
