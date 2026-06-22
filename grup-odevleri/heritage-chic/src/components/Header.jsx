import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header({ onMenuClick }) {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const getLinkClass = (path) => {
    return location.pathname === path ? "header-nav-link-active" : "header-nav-link";
  };

  return (
    <header className={isScrolled ? "bistro-header" : "bistro-header"}>
      <div className="header-wrap">
        <div className="icon-btn" onClick={onMenuClick}>
          <span className="material-symbols-outlined">menu</span>
        </div>
        
        <div className="header-logo" onClick={() => navigate('/')}>
          Berna & Aslı Cafe
        </div>

        <div className="header-actions">
          <nav className="header-nav">
            <Link className={getLinkClass('/')} to="/">Anasayfa</Link>
            <Link className={getLinkClass('/hikayemiz')} to="/hikayemiz">Hikayemiz</Link>
            <Link className={getLinkClass('/kategoriler')} to="/kategoriler">Menü</Link>
            <Link className={getLinkClass('/iletisim')} to="/iletisim">İletişim</Link>
          </nav>
          
          <div className="badge-container" onClick={() => navigate('/sepetim')}>
            <span className="material-symbols-outlined">shopping_bag</span>
            {totalItems > 0 && (
              <span className="cart-badge">{totalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
