import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingState = location.state || {
    roomTitle: 'Presidential Okyanus Süiti',
    price: 450,
    nights: 3,
    dates: '24 Ekim - 27 Ekim 2024',
    guests: '2 Yetişkin, 0 Çocuk',
    total: 1432,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy',
    guestName: 'Ahmet Yılmaz',
    guestEmail: 'ahmet@example.com',
    guestPhone: '+90 (555) 000-0000',
    specialRequests: ''
  };

  const [cardInfo, setCardInfo] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'number') {
      value = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      let formatted = '';
      for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
      }
      value = formatted.substring(0, 19);
    } else if (name === 'expiry') {
      value = value.replace(/[^0-9]/gi, '');
      if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      value = value.substring(0, 5);
    } else if (name === 'cvv') {
      value = value.replace(/[^0-9]/gi, '').substring(0, 3);
    }
    setCardInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardInfo.name || !cardInfo.number || !cardInfo.expiry || !cardInfo.cvv) {
      alert('Lütfen tüm kart alanlarını doldurunuz.');
      return;
    }
    const cleanNumber = cardInfo.number.replace(/\s+/g, '');
    if (cleanNumber.startsWith('4000') || cleanNumber.startsWith('0000')) {
      navigate('/payment-failure', { state: bookingState });
    } else {
      navigate('/payment-success', { state: bookingState });
    }
  };

  return (
    <main className="checkout-main">
      <div className="progress-header">
        <h2 className="font-headline-xl text-midnight-navy">Ödeme Adımı</h2>
        <div className="progress-bar">
          <div className="progress-step-completed">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-label-md">Oda Seçimi</span>
          </div>
          <div className="progress-divider"></div>
          <div className="progress-step-completed">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-label-md">Misafir Bilgileri</span>
          </div>
          <div className="progress-divider"></div>
          <div className="progress-step-active">
            <div className="progress-step-num">3</div>
            <span className="font-label-md">Ödeme</span>
          </div>
        </div>
      </div>

      <div className="checkout-grid">
        <div className="checkout-left-pane">
          <section className="checkout-payment-box">
            <div className="checkout-payment-header">
              <h2 className="checkout-payment-title">
                <span className="material-symbols-outlined text-ocean-blue">credit_card</span>
                Ödeme Bilgileri
              </h2>
            </div>

            <div className="checkout-payment-header">
              <div className="card-preview">
                <div className="card-preview-header">
                  <div className="card-preview-logo">LuxeStay</div>
                </div>
                <div className="card-preview-number">
                  {cardInfo.number || '•••• •••• •••• ••••'}
                </div>
                <div className="card-preview-footer">
                  <div>
                    <span className="card-preview-label">Kart Sahibi</span>
                    <span className="card-preview-value">
                      {cardInfo.name || 'ALEXANDER STERLING'}
                    </span>
                  </div>
                  <div>
                    <span className="card-preview-label">Son Kul. Tar.</span>
                    <span className="card-preview-value">
                      {cardInfo.expiry || 'AA / YY'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handlePaymentSubmit} className="form-fields">
              <div className="form-input-group">
                <label className="form-label">Kart Sahibi Adı</label>
                <input 
                  className="form-input" 
                  placeholder="Kartın üzerindeki isim" 
                  type="text"
                  name="name"
                  value={cardInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-input-group">
                <label className="form-label">Kart Numarası</label>
                <div className="form-input-icon-wrapper">
                  <input 
                    className="form-input-with-icon" 
                    placeholder="0000 0000 0000 0000" 
                    type="text"
                    name="number"
                    value={cardInfo.number}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="material-symbols-outlined form-input-icon">payment</span>
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-input-group">
                  <label className="form-label">Son Kullanma Tarihi</label>
                  <input 
                    className="form-input" 
                    placeholder="AA / YY" 
                    type="text"
                    name="expiry"
                    value={cardInfo.expiry}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-input-group">
                  <label className="form-label">CVC / CVV</label>
                  <input 
                    className="form-input" 
                    placeholder="•••" 
                    type="password"
                    name="cvv"
                    value={cardInfo.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-input-group">
                <input className="checkbox-input" id="save-card" type="checkbox"/>
                <label className="font-body-sm text-slate-gray" htmlFor="save-card">
                  Gelecekteki rezervasyonlarım için bu kartı güvenli olarak kaydet.
                </label>
              </div>
            </form>
          </section>

          <div className="secure-badges-row">
            <div className="secure-badge-item">
              <span className="material-symbols-outlined text-ocean-blue">verified_user</span>
              <span className="font-label-md">SSL GÜVENLİ</span>
            </div>
            <div className="secure-badge-item">
              <span className="material-symbols-outlined text-ocean-blue">shield</span>
              <span className="font-label-md">PCI UYUMLU</span>
            </div>
            <div className="secure-badge-item">
              <span className="material-symbols-outlined text-ocean-blue">encrypted</span>
              <span className="font-label-md">256-BIT ŞİFRELEME</span>
            </div>
          </div>
        </div>

        <div className="checkout-right-pane">
          <div className="price-breakdown-box">
            <div className="price-breakdown-img-wrapper">
              <div 
                className="price-breakdown-img" 
                style={{ backgroundImage: `url('${bookingState.image}')` }}
              />
              <div className="price-breakdown-badge">
                Seçilen Oda
              </div>
            </div>
            <div className="price-breakdown-content">
              <div>
                <h3 className="price-breakdown-title">{bookingState.roomTitle}</h3>
                <p className="price-breakdown-location">
                  <span className="material-symbols-outlined">location_on</span>
                  Kuzey Atolü, Maldivler
                </p>
              </div>
              <hr className="price-breakdown-divider"/>
              <div className="price-breakdown-list">
                <div className="price-breakdown-item">
                  <span>{bookingState.nights} Gece (${bookingState.price} / gece)</span>
                  <span className="text-midnight-navy font-semibold">${bookingState.price * bookingState.nights}</span>
                </div>
                <div className="price-breakdown-item">
                  <span>Hizmet Bedeli</span>
                  <span className="text-midnight-navy font-semibold">$45.00</span>
                </div>
                <div className="price-breakdown-item">
                  <span>Vergiler & Harçlar (12%)</span>
                  <span className="text-midnight-navy font-semibold">$82.00</span>
                </div>
              </div>
              <hr className="price-breakdown-divider"/>
              <div className="price-breakdown-total-row">
                <div>
                  <span className="price-breakdown-total-label">Toplam Tutar</span>
                  <span className="price-breakdown-total-val">${bookingState.total}</span>
                </div>
                <span className="text-slate-gray font-bold">USD</span>
              </div>
              <button 
                onClick={handlePaymentSubmit}
                className="payment-submit-btn"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                Ödemeyi Güvenli Şekilde Yap
              </button>
              <div className="payment-helper-text">
                Giriş tarihinden 48 saat öncesine kadar ücretsiz iptal hakkı.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
