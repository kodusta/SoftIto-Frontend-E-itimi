import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingState = location.state || {
    roomTitle: 'Presidential Okyanus Süiti',
    dates: '24 Ekim - 27 Ekim 2024',
    total: 1432,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy'
  };

  return (
    <main className="w-full">
      <div className="success-main">
        <div className="success-bg-wrapper"></div>
        <div className="success-container">
          <div className="success-icon-wrapper">
            <svg className="success-icon-svg" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <polyline className="animate-check" points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 className="success-title">Rezervasyonunuz Başarılı!</h1>
          <p className="success-desc">
            Bavullarınızı hazırlayın! <span className="text-midnight-navy font-bold">{bookingState.roomTitle}</span> odasındaki konaklamanız onaylandı. Detayları e-posta adresinize gönderdik.
          </p>

          <div className="success-ref-box">
            <div className="success-ref-item">
              <p className="success-ref-label">Rezervasyon Kodu</p>
              <p className="success-ref-value">LS-9428-XT70</p>
            </div>
            <div className="success-ref-item">
              <p className="success-ref-label">Tarihler</p>
              <p className="success-date-val">{bookingState.dates}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => alert('Rezervasyon fişiniz indiriliyor...')}
                className="success-action-btn"
                title="Fişi İndir"
              >
                <span className="material-symbols-outlined">download</span>
              </button>
              <button 
                onClick={() => window.print()}
                className="success-action-btn"
                title="Yazdır"
              >
                <span className="material-symbols-outlined">print</span>
              </button>
            </div>
          </div>

          <div className="success-btn-row">
            <button className="success-btn-primary" onClick={() => navigate('/rooms')}>
              <span className="material-symbols-outlined">event_available</span>
              Rezervasyonlarıma Git
            </button>
            <button className="success-btn-secondary" onClick={() => navigate('/')}>
              <span className="material-symbols-outlined">home</span>
              Anasayfaya Dön
            </button>
          </div>

          <div className="success-footer">
            <p className="success-footer-text">Yardıma mı ihtiyacınız var?</p>
            <div className="success-footer-links">
              <a className="success-footer-link" href="mailto:concierge@luxestay.com">
                <span className="material-symbols-outlined">mail</span>
                Müşteri Hizmetleri
              </a>
              <a className="success-footer-link" href="tel:+1800LUXESTAY">
                <span className="material-symbols-outlined">phone</span>
                7/24 Destek Hattı
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="success-prep-section">
        <div className="max-w-container-max mx-auto">
          <div className="success-prep-grid">
            <div className="success-prep-img-wrapper group">
              <div 
                className="success-prep-img" 
                style={{ backgroundImage: `url('${bookingState.image}')` }}
              />
              <div className="success-prep-img-overlay"></div>
              <div className="success-prep-img-text">
                <h3 className="success-prep-img-title">{bookingState.roomTitle}</h3>
                <p className="font-body-sm opacity-90">Kuzey Atolü, Maldivler</p>
              </div>
            </div>
            <div className="md:col-span-5 space-y-6">
              <h2 className="font-headline-lg text-midnight-navy">Konaklamanıza Hazırlanın</h2>
              <p className="font-body-md text-slate-gray">
                Seyahatiniz için en ince detayları şimdiden planladık. Havaalanı transferlerinizi ve akşam yemeklerinizi organize etmek için aşağıdaki hizmetlerimizi inceleyebilirsiniz.
              </p>
              <div className="space-y-4">
                <div 
                  onClick={() => alert('Havaalanı transfer kaydınız alındı.')}
                  className="success-prep-card"
                >
                  <div className="success-prep-card-icon">
                    <span className="material-symbols-outlined">directions_car</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-midnight-navy">Havaalanı Transferi</h4>
                    <p className="font-body-sm text-slate-gray">Özel araçla havalimanından otele doğrudan ulaşım sağlayın.</p>
                  </div>
                </div>
                <div 
                  onClick={() => alert('Restoran rezervasyonu için yer müsaitlik kontrolü yapılıyor.')}
                  className="success-prep-card"
                >
                  <div className="success-prep-card-icon">
                    <span className="material-symbols-outlined">restaurant</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-midnight-navy">Restoran Rezervasyonu</h4>
                    <p className="font-body-sm text-slate-gray">Michelin yıldızlı restoranlarımızda akşam yemeği için yerinizi ayırtın.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
