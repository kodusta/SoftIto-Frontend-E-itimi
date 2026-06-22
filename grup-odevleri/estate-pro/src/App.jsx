import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import ListingDetail from './pages/ListingDetail';
import Booking from './pages/Booking';
import Status from './pages/Status';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/status" element={<Status />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
