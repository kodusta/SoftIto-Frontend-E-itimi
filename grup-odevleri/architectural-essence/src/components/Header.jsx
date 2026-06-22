import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? 'nav-link-active' : 'nav-link';
  };

  return (
    <header className="nav-bar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="material-symbols-outlined nav-logo-icon">architecture</span>
          <span className="nav-logo-text">ARC & LINE</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={getLinkClass('/')}>ANASAYFA</Link>
          <Link to="/hakkimizda" className={getLinkClass('/hakkimizda')}>HAKKIMIZDA</Link>
          <Link to="/hizmetlerimiz" className={getLinkClass('/hizmetlerimiz')}>HİZMETLERİMİZ</Link>
          <Link to="/iletisim" className={getLinkClass('/iletisim')}>İLETİŞİM</Link>
        </nav>
        <Link to="/randevu" className="nav-cta-btn">
          RANDEVU AL
        </Link>
      </div>
    </header>
  );
}
