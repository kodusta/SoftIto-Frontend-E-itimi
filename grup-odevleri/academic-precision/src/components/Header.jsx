import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-shell">
      <div className="header-logo-group">
        <button className="header-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <span className="header-logo-text" onClick={() => navigate('/')}>EduStream</span>
      </div>

      <div className="header-actions-group">
        <button className="header-action-btn" onClick={() => navigate('/kurslar')}>
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="header-action-btn" onClick={() => navigate('/sepet')}>
          <span className="material-symbols-outlined">shopping_cart</span>
          {cart.length > 0 && (
            <span className="bottom-nav-badge">{cart.length}</span>
          )}
        </button>
        <div className="header-avatar-wrapper" onClick={() => navigate('/profil')}>
          <img 
            className="header-avatar-img" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVGoV2iNkeXqAYamv6MWaPjxNPC9TsBN0gYFLEH2i-1yby-oJ1YboA_9nQTbt35e0D0_xdgEWIdn91orYEiL93l5VyWhzaa8YCiKx2i8qeypNLiu0fUyLlQU3q6Ap8DHKlF0g7AC6OhasSzV8Q-Sk1sxGzbUA759FJPTqCprABlf2iQ-DHxJAgdftM4x0zA1KyZRXET9ef1t4itqbFB9I5OBKTUn8OM5Yvf82BZhFj518zbEl2zneb-XOhiv5PBS6y2vwWLXrUaa27" 
            alt="Profil" 
          />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMenuOpen(false)}></div>
          <div className="relative w-64 max-w-xs bg-white h-full p-md space-y-md flex flex-col shadow-xl">
            <div className="flex justify-between items-center border-b border-outline-variant/30 pb-sm">
              <span className="font-bold text-primary text-headline-md">Menü</span>
              <button className="p-1 hover:bg-surface-container-high rounded-full" onClick={() => setMenuOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-col gap-sm">
              <Link className="px-md py-sm hover:bg-surface-container-low rounded-lg font-bold text-on-surface" to="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
              <Link className="px-md py-sm hover:bg-surface-container-low rounded-lg font-bold text-on-surface" to="/kurslar" onClick={() => setMenuOpen(false)}>Kurslar</Link>
              <Link className="px-md py-sm hover:bg-surface-container-low rounded-lg font-bold text-on-surface" to="/hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
              <Link className="px-md py-sm hover:bg-surface-container-low rounded-lg font-bold text-on-surface" to="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link>
              <Link className="px-md py-sm hover:bg-surface-container-low rounded-lg font-bold text-on-surface" to="/profil" onClick={() => setMenuOpen(false)}>Profilim</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
