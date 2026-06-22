import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentFailure() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingState = location.state || {
    roomTitle: 'Presidential Okyanus Süiti',
    dates: '24 Ekim - 27 Ekim 2024',
    total: 1432,
    nights: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy'
  };

  return (
    <main className="success-main">
      <div className="success-bg-wrapper"></div>
      <div className="max-w-xl relative">
        <div className="bg-snow-white border border-outline-variant rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 flex flex-col items-center text-center">
            <div className="failure-shake-box">
              <span className="material-symbols-outlined failure-icon" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            
            <h1 className="font-headline-xl text-midnight-navy">Ödeme Başarısız</h1>

            <div className="failure-reason-box">
              <p className="failure-reason-label">Hata Nedeni</p>
              <p className="failure-reason-title">Seçilen hesapta yetersiz bakiye bulunmaktadır.</p>
              <p className="failure-reason-desc">
                <span className="font-bold text-midnight-navy">${bookingState.total}</span> tutarındaki rezervasyon işleminiz bankanız tarafından reddedildi.
              </p>
            </div>

            <div className="failure-actions-row">
              <button 
                onClick={() => navigate('/payment', { state: bookingState })}
                className="failure-btn-primary"
              >
                <span className="material-symbols-outlined">refresh</span>
                Tekrar Dene
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="failure-btn-secondary"
              >
                <span className="material-symbols-outlined">contact_support</span>
                Destek Al
              </button>
            </div>

            <button 
              onClick={() => navigate('/booking', { state: bookingState })}
              className="failure-change-btn"
            >
              Bilgileri Güncelle
            </button>
          </div>
        </div>

        <div className="failure-bento-grid">
          <div className="failure-bento-card">
            <div className="failure-bento-img-wrapper">
              <img className="price-breakdown-img" src={bookingState.image} alt={bookingState.roomTitle} />
            </div>
            <div>
              <p className="text-on-surface-variant text-body-sm">{bookingState.roomTitle}</p>
              <p className="text-midnight-navy text-body-sm">{bookingState.nights} Gece Konaklama</p>
            </div>
          </div>
          <div className="failure-bento-card">
            <div className="failure-bento-icon-wrapper">
              <span className="material-symbols-outlined text-midnight-navy">confirmation_number</span>
            </div>
            <div>
              <p className="text-on-surface-variant text-body-sm">İşlem ID</p>
              <p className="text-midnight-navy text-body-sm">#LS-8829-XJ21</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
