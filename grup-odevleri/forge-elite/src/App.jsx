import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
