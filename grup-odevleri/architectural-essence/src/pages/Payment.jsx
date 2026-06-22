import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const booking = state?.booking || {
    date: '15 Temmuz 2026',
    time: '11:00 — 12:00',
    name: 'Misafir Kullanıcı',
    email: 'guest@domain.com',
    phone: '+90 (555) 000 0000',
    projectType: 'Konut Tasarımı',
    deposit: 2500
  };

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentData.agreeTerms) {
      alert('Devam etmek için depozito şartlarını kabul etmelisiniz.');
      return;
    }
    navigate('/durum', {
      state: {
        success: true,
        booking
      }
    });
  };

  return (
    <main className="hero-section">
      <div className="payment-form-col">
        <div className="payment-step-header">
          <span className="payment-step-badge">GÜVENLİ ÖDEME</span>
          <span className="payment-step-title">DEPOZİTO HESABI</span>
        </div>

        <form onSubmit={handleSubmit} className="payment-box">
          <div className="payment-header-row">
            <div className="payment-header-left">
              <span className="material-symbols-outlined payment-lock-icon">lock</span>
              <span className="payment-header-title">KREDİ KARTIYLA ÖDEME</span>
            </div>
            <div className="payment-card-logos">
              <div className="payment-card-logo-placeholder"></div>
              <div className="payment-card-logo-placeholder"></div>
            </div>
          </div>

          <div className="form-group">
            <label className="payment-input-label">KART ÜZERİNDEKİ İSİM</label>
            <input
              type="text"
              name="cardName"
              value={paymentData.cardName}
              onChange={handleInputChange}
              className="input-underline w-full"
              placeholder="Ad Soyad"
              required
            />
          </div>

          <div className="form-group">
            <label className="payment-input-label">KART NUMARASI</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentData.cardNumber}
              onChange={handleInputChange}
              className="input-underline w-full"
              placeholder="0000 0000 0000 0000"
              maxLength="19"
              required
            />
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label className="payment-input-label">SON KULLANMA TARİHİ</label>
              <input
                type="text"
                name="cardExpiry"
                value={paymentData.cardExpiry}
                onChange={handleInputChange}
                className="input-underline w-full"
                placeholder="AA / YY"
                maxLength="5"
                required
              />
            </div>
            <div className="form-group">
              <label className="payment-input-label">CVC / CVV</label>
              <input
                type="password"
                name="cardCvc"
                value={paymentData.cardCvc}
                onChange={handleInputChange}
                className="input-underline w-full"
                placeholder="***"
                maxLength="3"
                required
              />
            </div>
          </div>

          <div className="payment-checkbox-wrapper">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={paymentData.agreeTerms}
              onChange={handleInputChange}
              className="payment-checkbox"
              required
            />
            <span className="payment-checkbox-text">
              2.500,00 $ tutarındaki geri iade edilmeyen depozito bedelini onaylıyorum. Bu ödeme, mimari etüt çalışmaları ve planlama seansı hazırlığı için tahsil edilmektedir.
            </span>
          </div>

          <button type="submit" className="payment-submit-btn">
            ÖDEMEYİ TAMAMLA (2.500,00 $)
          </button>

          <div className="payment-security-badges">
            <div className="payment-security-badge">
              <span className="material-symbols-outlined payment-security-badge-icon">verified_user</span>
              <span className="payment-security-badge-text">256-BIT SSL</span>
            </div>
            <div className="payment-security-badge">
              <span className="material-symbols-outlined payment-security-badge-icon">shield</span>
              <span className="payment-security-badge-text">PCI-DSS</span>
            </div>
          </div>
        </form>
      </div>

      <div className="summary-aside">
        <div className="summary-aside-box">
          <h3 className="summary-aside-title">Özet Bilgiler</h3>
          <div className="summary-aside-list">
            <div className="summary-aside-item">
              <div>
                <span className="summary-aside-item-title">HİZMET DİLİMİ</span>
                <p className="summary-aside-item-desc">{booking.projectType}</p>
              </div>
            </div>
            <div className="summary-aside-item">
              <div>
                <span className="summary-aside-item-title">TARİH & SAAT</span>
                <p className="summary-aside-item-desc">{booking.date} @ {booking.time}</p>
              </div>
            </div>
            <div className="summary-aside-item">
              <div>
                <span className="summary-aside-item-title">MÜŞTERİ</span>
                <p className="summary-aside-item-desc">{booking.name}</p>
              </div>
            </div>
          </div>

          <div className="summary-aside-divider-box">
            <div className="summary-aside-divider-row">
              <span>Hizmet Bedeli</span>
              <span>2.500,00 $</span>
            </div>
            <div className="summary-aside-divider-row">
              <span>İşlem Ücreti</span>
              <span>0,00 $</span>
            </div>
            <div className="summary-aside-total-row">
              <span className="summary-aside-total-label">TOPLAM</span>
              <span className="summary-aside-total-value">2.500,00 $</span>
            </div>
          </div>

          <div className="summary-aside-image-box">
            <div className="summary-aside-image-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6oho-hFl-nqkK9Wsd0-ivtsOc3S_hw_dW_eqqVgD7DHUunBhT5RqF3e4otJHaZKpdaJJJrHgJ31uC-FuRLAPXMY9nl-764XZgIipXveDbtnb7zIvrwkDF60Z0WNNliDvAEoEkCYfMbvWhf85-Nx8otWY66hH54eVn0BkNVNheDvNQjClL6PED9cNpRXlEe_fWpmXVg_0nYzNx7m0_yZ-hyFQi4urrnYpAASlLG-bdsAzGLXb8SCfg4lCh8ONysOvpapB2y5q44rW" alt="Proje Atmosferi" className="summary-aside-image" />
              <div className="summary-aside-image-overlay"></div>
            </div>
            <p className="summary-aside-quote">
              "Kalıcı mimari, ilk doğru kararla başlar."
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
