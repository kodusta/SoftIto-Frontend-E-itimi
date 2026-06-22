import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservationProvider } from './context/ReservationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Status from './pages/Status';
import Contact from './pages/Contact';

export default function App() {
  return (
    <ReservationProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/hizmet/:id" element={<ServiceDetail />} />
              <Route path="/randevu" element={<Booking />} />
              <Route path="/odeme" element={<Payment />} />
              <Route path="/islem-durumu" element={<Status />} />
              <Route path="/iletisim" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ReservationProvider>
  );
}
