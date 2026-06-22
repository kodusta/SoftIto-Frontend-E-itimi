import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "drawer-link-active" : "drawer-link";
  };

  return (
    <>
      <div 
        className={isOpen ? "drawer-overlay overlay-open" : "drawer-overlay overlay-closed"} 
        onClick={onClose}
      ></div>
      <aside className={isOpen ? "drawer-aside translate-x-0" : "drawer-aside -translate-x-full"}>
        <div className="drawer-header">
          <h2 className="drawer-title">Kafe Menü</h2>
          <button className="icon-btn" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <Link className={getLinkClass('/')} to="/" onClick={onClose}>
            <span className="material-symbols-outlined">home</span>
            <span>Anasayfa</span>
          </Link>
          <Link className={getLinkClass('/hikayemiz')} to="/hikayemiz" onClick={onClose}>
            <span className="material-symbols-outlined">history_edu</span>
            <span>Hikayemiz</span>
          </Link>
          <Link className={getLinkClass('/kategoriler')} to="/kategoriler" onClick={onClose}>
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span>Menü</span>
          </Link>
          <Link className={getLinkClass('/iletisim')} to="/iletisim" onClick={onClose}>
            <span className="material-symbols-outlined">location_on</span>
            <span>İletişim</span>
          </Link>
          <Link className={getLinkClass('/sepetim')} to="/sepetim" onClick={onClose}>
            <span className="material-symbols-outlined">shopping_bag</span>
            <span>Sepetim</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
