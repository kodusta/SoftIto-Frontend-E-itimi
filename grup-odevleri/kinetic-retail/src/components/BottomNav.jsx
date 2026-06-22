import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useApp();

  const activeItemsCount = cart.filter(item => item.checked).reduce((sum, item) => sum + item.quantity, 0);

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link-active" : "nav-link";
  };

  const getIconStyle = (path) => {
    return location.pathname === path ? { fontVariationSettings: "'FILL' 1" } : {};
  };

  return (
    <nav className="bottom-nav">
      <button onClick={() => navigate('/')} className={getLinkClass('/')}>
        <span className="material-symbols-outlined" style={getIconStyle('/')}>home</span>
        <span className="nav-label">Ana Sayfa</span>
      </button>

      <button onClick={() => navigate('/categories')} className={getLinkClass('/categories')}>
        <span className="material-symbols-outlined" style={getIconStyle('/categories')}>grid_view</span>
        <span className="nav-label">Kategoriler</span>
      </button>

      <button onClick={() => navigate('/cart')} className={getLinkClass('/cart')}>
        <div className="relative">
          <span className="material-symbols-outlined" style={getIconStyle('/cart')}>shopping_cart</span>
          {activeItemsCount > 0 && (
            <span className="nav-cart-badge">{activeItemsCount}</span>
          )}
        </div>
        <span className="nav-label">Sepetim</span>
      </button>

      <button onClick={() => navigate('/about')} className={getLinkClass('/about')}>
        <span className="material-symbols-outlined" style={getIconStyle('/about')}>info</span>
        <span className="nav-label">Hakkımızda</span>
      </button>

      <button onClick={() => navigate('/contact')} className={getLinkClass('/contact')}>
        <span className="material-symbols-outlined" style={getIconStyle('/contact')}>person</span>
        <span className="nav-label">İletişim</span>
      </button>
    </nav>
  );
};

export default BottomNav;
