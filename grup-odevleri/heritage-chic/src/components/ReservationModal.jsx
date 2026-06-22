import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ReservationModal() {
  const { isResOpen, toggleReservation, addReservation } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    area: "bahce"
  });
  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState(null);

  if (!isResOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation(formData);
    setCode(Math.floor(1000 + Math.random() * 9000));
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        guests: "2",
        date: "",
        time: "",
        area: "bahce"
      });
      toggleReservation();
    }, 3000);
  };

  return (
    <div className="modal-overlay" onClick={toggleReservation}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={toggleReservation}>
          <span className="material-symbols-outlined">close</span>
        </button>

        {!submitted ? (
          <>
            <h2 className="modal-title">Masa Rezervasyonu</h2>
            <p className="modal-desc">
              Berna & Aslı Cafe'de unutulmaz bir deneyim için masanızı şimdiden ayırtın.
            </p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Ad Soyad</label>
                <input 
                  className="form-input" 
                  type="text" 
                  required 
                  placeholder="Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Telefon Numarası</label>
                <input 
                  className="form-input" 
                  type="tel" 
                  required 
                  placeholder="0555 123 45 67"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Kişi Sayısı</label>
                  <select 
                    className="form-select"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Kişi</option>
                    <option value="2">2 Kişi</option>
                    <option value="3">3 Kişi</option>
                    <option value="4">4 Kişi</option>
                    <option value="5">5 Kişi</option>
                    <option value="6">6+ Kişi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Masa Alanı</label>
                  <select 
                    className="form-select"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  >
                    <option value="bahce">Bahçe Bölümü</option>
                    <option value="ic-mekan">İç Mekan Bistro</option>
                    <option value="pencere-kenari">Pencere Kenarı</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Tarih</label>
                  <input 
                    className="form-input" 
                    type="date" 
                    required 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Saat</label>
                  <input 
                    className="form-input" 
                    type="time" 
                    required 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  />
                </div>
              </div>
              <button className="checkout-btn" type="submit">
                Rezervasyonu Tamamla
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-6xl text-secondary mb-4 animate-bounce">
              check_circle
            </span>
            <h2 className="modal-title mb-2">Rezervasyon Alındı!</h2>
            <p className="modal-desc">
              Tebrikler, masanız ayrıldı. Rezervasyon numaranız: <strong>#BAC-{code}</strong>
            </p>
            <p className="text-sm text-on-surface-variant mt-6">
              Bu pencere otomatik olarak kapanacaktır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
