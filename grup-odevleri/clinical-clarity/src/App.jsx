import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReservationProvider } from "./context/ReservationContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavigation from "./components/BottomNavigation";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Success from "./pages/Success";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ReservationProvider>
      <Router>
        <div className="bg-surface">
          <Header onMenuClick={() => setDrawerOpen(true)} />
          <NavigationDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
          
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/hizmet/:id" element={<ServiceDetail />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/randevu" element={<Booking />} />
              <Route path="/basarili" element={<Success />} />
              <Route path="/basarisiz" element={<ErrorPage />} />
            </Routes>
          </main>

          <Footer />
          <BottomNavigation />
        </div>
      </Router>
    </ReservationProvider>
  );
}
