import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useReservation } from '../context/ReservationContext';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const { updateBooking } = useReservation();
  const navigate = useNavigate();

  const handleSelectService = (service) => {
    updateBooking({ service });
    navigate('/randevu');
  };

  const filteredServices = activeCategory === 'ALL'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const categories = ['ALL', 'HAIR', 'NAILS', 'SKIN CARE'];
  const categoryLabels = {
    'ALL': 'TÜMÜ',
    'HAIR': 'SAÇ TASARIM',
    'NAILS': 'TIRNAK SANATI',
    'SKIN CARE': 'CİLT BAKIMI'
  };

  return (
    <main className="page-main-services">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="hero-label">Hizmetlerimiz</span>
          <h2 className="about-hero-title">Aura & Gilded Menüsü</h2>
          <p className="hero-desc">Sizin için özenle küratörlüğü yapılmış bakım ritüelleri.</p>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-surface py-sm border-b border-outline-variant/30 overflow-x-auto">
        <div className="flex justify-center gap-sm px-margin-mobile">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'wizard-calendar-date-selected' : 'about-preview-btn'}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      <section className="py-lg px-base">
        {['HAIR', 'NAILS', 'SKIN CARE'].map((cat) => {
          const categoryServices = filteredServices.filter(s => s.category === cat);
          if (categoryServices.length === 0) return null;

          return (
            <div key={cat} className="services-category-box">
              <div className="flex justify-between items-baseline mb-md">
                <h3 className="services-category-title">{categoryLabels[cat]}</h3>
                <span className="hero-label">{cat} RİTÜELLERİ</span>
              </div>
              
              <div className="services-list-grid">
                {categoryServices.map((service) => (
                  <div key={service.id} className="service-menu-item">
                    <div className="service-menu-detail">
                      <Link to={`/hizmet/${service.id}`} className="service-menu-title hover:text-secondary transition-colors">
                        {service.name} <span className="material-symbols-outlined text-sm">info</span>
                      </Link>
                      <p className="service-menu-desc">{service.desc}</p>
                      <div className="service-menu-meta">
                        <span className="service-menu-duration">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          {service.duration} dk
                        </span>
                        <span className="service-menu-price">{service.price} TL</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSelectService(service)}
                      className="service-menu-btn"
                    >
                      Seç
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
