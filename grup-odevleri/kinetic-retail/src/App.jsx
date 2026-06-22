import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Failure from './pages/Failure';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app-layout">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/success" element={<Success />} />
              <Route path="/failure" element={<Failure />} />
            </Routes>
          </div>
          <BottomNav />
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
