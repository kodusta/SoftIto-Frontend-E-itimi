import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearchClick = () => {
    navigate('/categories');
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <button className="material-symbols-outlined header-icon-btn">menu</button>
        <h1 onClick={handleLogoClick} className="header-brand cursor-pointer">Kinetic Retail</h1>
      </div>
      <div className="header-right">
        <button onClick={handleSearchClick} className="material-symbols-outlined header-icon-btn">search</button>
      </div>
    </header>
  );
};

export default Header;
