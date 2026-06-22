import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';
import CheckoutBilling from './pages/CheckoutBilling';
import CheckoutPayment from './pages/CheckoutPayment';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailure from './pages/PaymentFailure';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kurslar" element={<Courses />} />
          <Route path="/kurs/:courseId" element={<CourseDetail />} />
          <Route path="/sepet" element={<Cart />} />
          <Route path="/odeme-ozeti" element={<CheckoutBilling />} />
          <Route path="/odeme-bilgileri" element={<CheckoutPayment />} />
          <Route path="/basarili" element={<PaymentSuccess />} />
          <Route path="/basarisiz" element={<PaymentFailure />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
