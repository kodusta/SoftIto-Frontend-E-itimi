import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useLocation } from 'react-router-dom';
import { CartProvider, CartContext } from './context/CartContext';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import StatusSuccess from './pages/StatusSuccess';
import StatusFailure from './pages/StatusFailure';

const Layout = () => {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link-active" : "nav-link";
  };

  return (
    <div class="bg-background text-on-background font-body-md min-h-screen flex flex-col justify-between">
      <header class="nav-shell">
        <div class="nav-container">
          <Link class="nav-logo" to="/">BAUHAUS TARIM</Link>
          
          <nav class="nav-links">
            <Link class={getLinkClass('/')} to="/">Alışveriş</Link>
            <Link class={getLinkClass('/kategoriler')} to="/kategoriler">Kategoriler</Link>
            <Link class={getLinkClass('/urunler')} to="/urunler">Ürünler</Link>
            <Link class={getLinkClass('/hakkimizda')} to="/hakkimizda">Felsefe</Link>
            <Link class={getLinkClass('/iletisim')} to="/iletisim">İletişim</Link>
          </nav>

          <div class="nav-actions">
            <Link class="nav-icon-btn" to="/sepet" data-icon="shopping_cart">
              shopping_cart
              {cartCount > 0 && <span class="nav-icon-badge">{cartCount}</span>}
            </Link>
            <button class="nav-icon-btn md:hidden" onClick={toggleMobileMenu} data-icon="menu">
              menu
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div class="md:hidden border-t-2 border-on-background bg-background flex flex-col p-md gap-sm">
            <Link class={getLinkClass('/')} to="/" onClick={() => setMobileMenuOpen(false)}>Alışveriş</Link>
            <Link class={getLinkClass('/kategoriler')} to="/kategoriler" onClick={() => setMobileMenuOpen(false)}>Kategoriler</Link>
            <Link class={getLinkClass('/urunler')} to="/urunler" onClick={() => setMobileMenuOpen(false)}>Ürünler</Link>
            <Link class={getLinkClass('/hakkimizda')} to="/hakkimizda" onClick={() => setMobileMenuOpen(false)}>Felsefe</Link>
            <Link class={getLinkClass('/iletisim')} to="/iletisim" onClick={() => setMobileMenuOpen(false)}>İletişim</Link>
          </div>
        )}
      </header>

      <main class="flex-grow">
        <Outlet />
      </main>

      <footer class="footer-shell">
        <div class="footer-container">
          <div class="footer-brand-col">
            <div class="footer-logo">BAUHAUS<br />TARIM</div>
            <div class="footer-copy">© 2026 BAUHAUS TARIM. BIÇIM IŞLEVI TAKIP EDER.</div>
          </div>
          
          <div class="footer-links-col">
            <h4 class="footer-links-header">KURUMSAL</h4>
            <Link class="footer-link" to="/hakkimizda">Manifesto</Link>
            <Link class="footer-link" to="/iletisim">Lokasyonlar</Link>
            <a class="footer-link" href="#">Kullanım Şartları</a>
            <a class="footer-link" href="#">Gizlilik Politikası</a>
          </div>

          <div class="footer-links-col">
            <h4 class="footer-links-header">KATEGORİLER</h4>
            <Link class="footer-link" to="/urunler">Bahçe Aletleri</Link>
            <Link class="footer-link" to="/urunler">Organik Tohumlar</Link>
            <Link class="footer-link" to="/urunler">Geometrik Saksılar</Link>
            <Link class="footer-link" to="/urunler">Kompost & Toprak</Link>
          </div>
        </div>

        <div class="footer-bottom-bar">
          <div class="footer-icons">
            <span class="footer-icon-btn" data-icon="language">language</span>
            <span class="footer-icon-btn" data-icon="yard">yard</span>
            <span class="footer-icon-btn" data-icon="eco">eco</span>
          </div>
          <div class="footer-philosophy">
            Rasyonellik • Fonksiyonellik • Modernizm
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="urunler" element={<Products />} />
            <Route path="kategoriler" element={<Categories />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="iletisim" element={<Contact />} />
            <Route path="sepet" element={<Cart />} />
            <Route path="odeme" element={<Checkout />} />
            <Route path="siparis-basarili" element={<StatusSuccess />} />
            <Route path="siparis-basarisiz" element={<StatusFailure />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
