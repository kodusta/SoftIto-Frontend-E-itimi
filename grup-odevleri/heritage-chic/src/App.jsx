import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import StatusSuccess from './pages/StatusSuccess';
import StatusFailure from './pages/StatusFailure';
import Contact from './pages/Contact';

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toggleReservation } = useCart();
  const location = useLocation();

  const isStatusPage = location.pathname === '/siparis-basarili' || location.pathname === '/siparis-basarisiz';

  return (
    <div className="app-container">
      {!isStatusPage && (
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
      )}
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className={isStatusPage ? "" : "main-content"}>
        {children}
      </main>

      {!isStatusPage && (
        <Footer />
      )}

      <ReservationModal />

      {!isStatusPage && (
        <div className="fab-reservation">
          <button className="fab-btn group" onClick={toggleReservation}>
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="fab-tooltip">Masa Ayırt</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hikayemiz" element={<About />} />
            <Route path="/kategoriler" element={<Categories />} />
            <Route path="/kategori/:categoryId" element={<Products />} />
            <Route path="/sepetim" element={<Cart />} />
            <Route path="/odeme" element={<Checkout />} />
            <Route path="/siparis-basarili" element={<StatusSuccess />} />
            <Route path="/siparis-basarisiz" element={<StatusFailure />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}
