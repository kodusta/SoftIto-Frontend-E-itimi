import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPayment() {
  const navigate = useNavigate();
  const { paymentInfo, setPaymentInfo, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if (name === 'cardNumber') {
      value = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim().substring(0, 19);
    } else if (name === 'expiry') {
      value = value.replace(/\//g, '').replace(/(\d{2})/g, '$1/').trim();
      if (value.endsWith('/')) {
        value = value.slice(0, -1);
      }
      value = value.substring(0, 5);
    } else if (name === 'cvv') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (!agree) {
      alert('Lütfen satış sözleşmesini onaylayın.');
      return;
    }
    if (paymentInfo.cardNumber.trim().length < 19 || paymentInfo.expiry.trim().length < 5 || paymentInfo.cvv.trim().length < 3) {
      alert('Lütfen geçerli kart bilgileri giriniz.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const cleanCard = paymentInfo.cardNumber.replace(/\s/g, '');
      if (cleanCard.endsWith('0000') || paymentInfo.cvv === '000') {
        navigate('/basarisiz');
      } else {
        clearCart();
        navigate('/basarili');
      }
    }, 1500);
  };

  return (
    <main className="checkout-layout">
      <div className="checkout-card">
        <h2 className="checkout-title">Ödeme Adımı</h2>
        
        <div className="checkout-steps">
          <div className="checkout-step-inactive">
            <div className="checkout-step-number-inactive">1</div>
            <span>Fatura Bilgileri</span>
          </div>
          <div className="checkout-step-active">
            <div className="checkout-step-number-active">2</div>
            <span>Ödeme Bilgileri</span>
          </div>
          <div className="checkout-step-inactive">
            <div className="checkout-step-number-inactive">3</div>
            <span>Onay</span>
          </div>
        </div>

        <form onSubmit={handlePayment} className="space-y-lg">
          <div className="form-field">
            <label className="form-label">Kart Üzerindeki İsim *</label>
            <input 
              className="form-input" 
              type="text" 
              name="cardName" 
              required 
              placeholder="Ad Soyad" 
              value={paymentInfo.cardName} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-field">
            <label className="form-label">Kart Numarası *</label>
            <input 
              className="form-input" 
              type="text" 
              name="cardNumber" 
              required 
              placeholder="0000 0000 0000 0000" 
              value={paymentInfo.cardNumber} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group-grid">
            <div className="form-field">
              <label className="form-label">Son Kullanma Tarihi *</label>
              <input 
                className="form-input" 
                type="text" 
                name="expiry" 
                required 
                placeholder="AA/YY" 
                value={paymentInfo.expiry} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-field">
              <label className="form-label">CVC / CVV *</label>
              <input 
                className="form-input" 
                type="password" 
                name="cvv" 
                required 
                placeholder="***" 
                value={paymentInfo.cvv} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          <div className="p-md bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-sm">
            <span className="material-symbols-outlined text-secondary text-2xl select-none">verified_user</span>
            <p className="text-body-sm text-on-surface-variant">
              Tüm işlemler 256-bit SSL sertifikası ile korunmaktadır ve güvenlidir.
            </p>
          </div>

          <div className="pt-sm">
            <label className="form-checkbox-label">
              <input 
                className="form-checkbox" 
                type="checkbox" 
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)} 
              />
              <span>Satış sözleşmesini ve iade politikasını kabul ediyorum *</span>
            </label>
          </div>

          <div className="flex justify-between items-center text-body-lg font-bold border-t border-outline-variant/30 pt-md">
            <span>Ödenecek Tutar:</span>
            <span className="text-primary">
              {total.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
            </span>
          </div>

          <div className="checkout-actions">
            <button type="button" className="checkout-back-btn" onClick={() => navigate('/odeme-ozeti')}>
              <span className="material-symbols-outlined">arrow_back</span>
              Geri Git
            </button>
            <button 
              type="submit" 
              className="checkout-next-btn"
              disabled={loading}
            >
              {loading ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
