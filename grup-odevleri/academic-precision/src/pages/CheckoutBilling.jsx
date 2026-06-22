import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutBilling() {
  const navigate = useNavigate();
  const { billingInfo, setBillingInfo, total } = useCart();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      billingInfo.name.trim() === '' ||
      billingInfo.surname.trim() === '' ||
      billingInfo.email.trim() === '' ||
      billingInfo.address.trim() === '' ||
      billingInfo.city.trim() === ''
    ) {
      alert('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }
    navigate('/odeme-bilgileri');
  };

  return (
    <main className="checkout-layout">
      <div className="checkout-card">
        <h2 className="checkout-title">Ödeme Adımı</h2>
        
        <div className="checkout-steps">
          <div className="checkout-step-active">
            <div className="checkout-step-number-active">1</div>
            <span>Fatura Bilgileri</span>
          </div>
          <div className="checkout-step-inactive">
            <div className="checkout-step-number-inactive">2</div>
            <span>Ödeme Bilgileri</span>
          </div>
          <div className="checkout-step-inactive">
            <div className="checkout-step-number-inactive">3</div>
            <span>Onay</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-lg">
          <div className="form-group-grid">
            <div className="form-field">
              <label className="form-label">Ad *</label>
              <input 
                className="form-input" 
                type="text" 
                name="name" 
                required 
                value={billingInfo.name} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-field">
              <label className="form-label">Soyad *</label>
              <input 
                className="form-input" 
                type="text" 
                name="surname" 
                required 
                value={billingInfo.surname} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          <div className="form-group-grid">
            <div className="form-field">
              <label className="form-label">E-posta Adresi *</label>
              <input 
                className="form-input" 
                type="email" 
                name="email" 
                required 
                value={billingInfo.email} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-field">
              <label className="form-label">Telefon Numarası</label>
              <input 
                className="form-input" 
                type="tel" 
                name="phone" 
                value={billingInfo.phone} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Fatura Adresi *</label>
            <input 
              className="form-input" 
              type="text" 
              name="address" 
              required 
              value={billingInfo.address} 
              onChange={handleInputChange} 
            />
          </div>

          <div className="form-group-grid">
            <div className="form-field">
              <label className="form-label">Şehir *</label>
              <input 
                className="form-input" 
                type="text" 
                name="city" 
                required 
                value={billingInfo.city} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-field">
              <label className="form-label">Posta Kodu</label>
              <input 
                className="form-input" 
                type="text" 
                name="zip" 
                value={billingInfo.zip} 
                onChange={handleInputChange} 
              />
            </div>
          </div>

          <div className="space-y-sm pt-sm">
            <label className="form-checkbox-label">
              <input className="form-checkbox" type="checkbox" defaultChecked />
              <span>Fatura adresim teslimat adresiyle aynı</span>
            </label>
            <label className="form-checkbox-label">
              <input className="form-checkbox" type="checkbox" defaultChecked />
              <span>Bir sonraki alışveriş için bilgilerimi kaydet</span>
            </label>
          </div>

          <div className="flex justify-between items-center text-body-lg font-bold border-t border-outline-variant/30 pt-md">
            <span>Ödenecek Tutar:</span>
            <span className="text-primary">
              {total.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
            </span>
          </div>

          <div className="checkout-actions">
            <button type="button" className="checkout-back-btn" onClick={() => navigate('/sepet')}>
              <span className="material-symbols-outlined">arrow_back</span>
              Sepete Dön
            </button>
            <button type="submit" className="checkout-next-btn">
              Ödeme Bilgilerine Geç
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
