import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
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
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetlerimiz" element={<Services />} />
        <Route path="/hizmet/:serviceId" element={<ServiceDetail />} />
        <Route path="/randevu" element={<Booking />} />
        <Route path="/odeme" element={<Payment />} />
        <Route path="/durum" element={<Status />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
