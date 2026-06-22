import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingState = location.state || {
    roomTitle: 'Presidential Okyanus Süiti',
    price: 450,
    nights: 3,
    dates: '24 Ekim - 27 Ekim 2024',
    guests: '2 Yetişkin, 0 Çocuk',
    total: 1432,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy'
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Lütfen zorunlu alanları doldurunuz.');
      return;
    }
    navigate('/payment', {
      state: {
        ...bookingState,
        guestName: `${formData.firstName} ${formData.lastName}`,
        guestEmail: formData.email,
        guestPhone: formData.phone,
        specialRequests: formData.specialRequests
      }
    });
  };

  return (
    <main className="rooms-main">
      <div className="progress-header">
        <h2 className="font-headline-xl text-midnight-navy">Rezervasyonunuzu Tamamlayın</h2>
        <div className="progress-bar">
          <div className="progress-step-completed">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-label-md">Oda Seçimi</span>
          </div>
          <div className="progress-divider"></div>
          <div className="progress-step-active">
            <div className="progress-step-num">2</div>
            <span className="font-label-md">Misafir Bilgileri</span>
          </div>
          <div className="progress-divider"></div>
          <div className="progress-step-inactive">
            <div className="progress-step-num-inactive">3</div>
            <span className="font-label-md">Ödeme</span>
          </div>
        </div>
      </div>

      <div className="detail-grid-layout">
        <div className="detail-main-pane">
          <section className="form-section">
            <div className="form-section-title-row">
              <span className="material-symbols-outlined text-ocean-blue">person</span>
              <h3 className="form-section-title">Misafir Bilgileri</h3>
            </div>
            <form className="form-fields">
              <div className="form-row-2">
                <div className="form-input-group">
                  <label className="form-label">Adınız *</label>
                  <input 
                    className="form-input" 
                    placeholder="Örn. Ahmet" 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-input-group">
                  <label className="form-label">Soyadınız *</label>
                  <input 
                    className="form-input" 
                    placeholder="Örn. Yılmaz" 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-input-group">
                  <label className="form-label">E-posta Adresi *</label>
                  <div className="form-input-icon-wrapper">
                    <span className="material-symbols-outlined form-input-icon">mail</span>
                    <input 
                      className="form-input-with-icon" 
                      placeholder="ahmet@example.com" 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-input-group">
                  <label className="form-label">Telefon Numarası *</label>
                  <div className="form-input-icon-wrapper">
                    <span className="material-symbols-outlined form-input-icon">phone</span>
                    <input 
                      className="form-input-with-icon" 
                      placeholder="+90 (555) 000-0000" 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-input-group">
                <label className="form-label">Özel İstekler (İsteğe Bağlı)</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Sessiz oda, yüksek kat, alerji durumları vb..." 
                  rows="4"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </form>
          </section>

          <section className="form-section">
            <div className="form-section-title-row">
              <span className="material-symbols-outlined text-ocean-blue">calendar_today</span>
              <h3 className="form-section-title">Konaklama Özeti</h3>
            </div>
            <div className="stay-summary-grid">
              <div className="stay-summary-card">
                <span className="font-label-md">GİRİŞ</span>
                <span className="font-headline-md">{bookingState.dates.split('-')[0] || bookingState.dates}</span>
                <span className="text-body-sm">Saat 15:00 sonrası</span>
              </div>
              <div className="stay-summary-card">
                <span className="font-label-md">ÇIKIŞ</span>
                <span className="font-headline-md">{bookingState.dates.split('-')[1] || bookingState.dates}</span>
                <span className="text-body-sm">Saat 11:00 öncesi</span>
              </div>
              <div className="stay-summary-card-highlight">
                <span className="font-label-md">TOPLAM SÜRE</span>
                <span className="font-headline-md">{bookingState.nights} Gece</span>
                <span className="text-body-sm">{bookingState.nights + 1} Gün Konaklama</span>
              </div>
            </div>
          </section>

          <div className="form-actions-row">
            <button className="btn-back" type="button" onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined">arrow_back</span>
              Geri Dön
            </button>
            <button className="btn-continue" type="button" onClick={handleContinue}>
              Ödemeye İlerle
            </button>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="booking-sidebar-card">
            <div className="booking-sidebar-img-wrapper">
              <img className="booking-sidebar-img" src={bookingState.image} alt={bookingState.roomTitle} />
              <div className="booking-sidebar-badge">
                En İyi Değer
              </div>
            </div>
            <div className="booking-sidebar-content">
              <div>
                <h4 className="font-headline-md">{bookingState.roomTitle}</h4>
                <div className="booking-sidebar-rating">
                  <span className="booking-sidebar-stars" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="booking-sidebar-stars" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="booking-sidebar-stars" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="booking-sidebar-stars" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="booking-sidebar-stars" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-snow-white font-body-sm">(4.9/5)</span>
                </div>
              </div>
              <div className="booking-sidebar-content">
                <div className="booking-sidebar-row">
                  <span className="text-snow-white">${bookingState.price} x {bookingState.nights} gece</span>
                  <span>${bookingState.price * bookingState.nights}</span>
                </div>
                <div className="booking-sidebar-row">
                  <span className="text-snow-white">Hizmet Bedeli</span>
                  <span>$45.00</span>
                </div>
                <div className="booking-sidebar-row">
                  <span className="text-snow-white">Vergiler & Harçlar</span>
                  <span>$82.00</span>
                </div>
              </div>
              <div>
                <div>
                  <span className="booking-sidebar-label">Toplam Tutar</span>
                  <span className="booking-sidebar-total">${bookingState.total}</span>
                </div>
              </div>
              <div className="booking-sidebar-guarantee">
                <div className="booking-sidebar-rating">
                  <span className="material-symbols-outlined">verified_user</span>
                  <span className="font-body-sm">LuxeStay Fiyat Garantisi</span>
                </div>
                <div className="booking-sidebar-rating">
                  <span className="material-symbols-outlined">event_busy</span>
                  <span className="font-body-sm">Ücretsiz İptal İmkanı</span>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-sidebar-footer">
            <p className="font-body-sm">
              Yardıma mı ihtiyacınız var? Arayın: <span className="text-ocean-blue">+1-800-LUXE-STAY</span>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
