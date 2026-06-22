import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Failure from './pages/Failure';
import About from './pages/About';
import Contact from './pages/Contact';
import MyBookings from './pages/MyBookings';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app-layout">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/car/:id" element={<CarDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
              <Route path="/failure" element={<Failure />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
          </main>
          <BottomNav />
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
