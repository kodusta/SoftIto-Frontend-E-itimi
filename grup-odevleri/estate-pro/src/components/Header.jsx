import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-group">
        <button className="header-menu-btn">
          <span className="material-symbols-outlined header-menu-icon">menu</span>
        </button>
        <span className="header-title">EstatePro</span>
      </div>
      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "header-nav-link-active" : "header-nav-link-inactive"}>Ana Sayfa</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "header-nav-link-active" : "header-nav-link-inactive"}>Hakkımızda</NavLink>
        <NavLink to="/listings" className={({ isActive }) => isActive ? "header-nav-link-active" : "header-nav-link-inactive"}>İlanlar</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "header-nav-link-active" : "header-nav-link-inactive"}>İletişim</NavLink>
      </nav>
      <div className="header-right-group">
        <div className="header-avatar-wrapper">
          <img className="header-avatar-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQXI93bsBsGFshtcCeYl0yJnfEeP8IoHJarijNfrPjGDydpH_VOXQ5CJWCplD05FdQiEelGUUqhGNv-2avMA5-99VYInPMRC4LJApvQ67KkIFZDJqzWVsHkhAtYtp7Mpu87TxbdsqBvBzaoItS-LvIZxnpFMXUEGugiDgHpcMIU27Im_rzpJfPXHiPfxkstF9KXxG6g-2GglTN0MGZXyEK2ZdTjhN-uLYO0LrBsySIewE2wKlD-RWCuPoF37diHXsqHFbrrKKnEm6" alt="Avatar" />
        </div>
      </div>
    </header>
  );
}
