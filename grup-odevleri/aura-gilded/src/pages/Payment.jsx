import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';

export default function Payment() {
  const { booking, updateCustomer, updatePayment, updateBooking } = useReservation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateBooking({ status: 'success' });
      navigate('/islem-durumu');
    }, 2000);
  };

  const isFormValid = () => {
    return (
      booking.customer.name.trim() &&
      booking.customer.email.trim() &&
      booking.customer.phone.trim() &&
      booking.payment.cardName.trim() &&
      booking.payment.cardNumber.replace(/\s/g, '').length === 16 &&
      booking.payment.expiry.trim() &&
      booking.payment.cvc.trim().length === 3 &&
      accepted
    );
  };

  const handleCardNumberChange = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      updatePayment({ cardNumber: parts.join(' ') });
    } else {
      updatePayment({ cardNumber: v });
    }
  };

  const handleExpiryChange = (value) => {
    let clean = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (clean.length > 2) {
      clean = clean.substring(0, 2) + '/' + clean.substring(2, 4);
    }
    updatePayment({ expiry: clean });
  };

  return (
    <main className="payment-layout">
      <div className="payment-form-box">
        <h3 className="payment-form-title">İletişim ve Ödeme Bilgileri</h3>
        <span className="hero-label">GÜVENLİ 2D/3D CHECKOUT SİSTEMİ</span>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-form-row">
            <div>
              <label className="input-label">Adınız Soyadınız</label>
              <input
                type="text"
                required
                value={booking.customer.name}
                onChange={(e) => updateCustomer({ name: e.target.value })}
                className="input-field"
                placeholder="Örn: Ahmet Yılmaz"
              />
            </div>
            <div>
              <label className="input-label">Telefon Numarası</label>
              <input
                type="tel"
                required
                value={booking.customer.phone}
                onChange={(e) => updateCustomer({ phone: e.target.value })}
                className="input-field"
                placeholder="Örn: 0555 123 4567"
              />
            </div>
          </div>

          <div>
            <label className="input-label">E-Posta Adresi</label>
            <input
              type="email"
              required
              value={booking.customer.email}
              onChange={(e) => updateCustomer({ email: e.target.value })}
              className="input-field"
              placeholder="Örn: ahmet@mail.com"
            />
          </div>

          <div>
            <label className="input-label">Özel İstekler / Notlar</label>
            <input
              type="text"
              value={booking.customer.notes}
              onChange={(e) => updateCustomer({ notes: e.target.value })}
              className="input-field"
              placeholder="Eklemek istediğiniz notlar..."
            />
          </div>

          <div className="payment-form-row">
            <div>
              <label className="input-label">Kart Sahibi</label>
              <input
                type="text"
                required
                value={booking.payment.cardName}
                onChange={(e) => updatePayment({ cardName: e.target.value })}
                className="input-field"
                placeholder="Örn: AHMET YILMAZ"
              />
            </div>
            <div>
              <label className="input-label">Kart Numarası</label>
              <input
                type="text"
                required
                maxLength="19"
                value={booking.payment.cardNumber}
                onChange={(e) => handleCardNumberChange(e.target.value)}
                className="input-field"
                placeholder="0000 0000 0000 0000"
              />
            </div>
          </div>

          <div className="payment-form-row">
            <div>
              <label className="input-label">Son Kullanma (AA/YY)</label>
              <input
                type="text"
                required
                maxLength="5"
                value={booking.payment.expiry}
                onChange={(e) => handleExpiryChange(e.target.value)}
                className="input-field"
                placeholder="AA/YY"
              />
            </div>
            <div>
              <label className="input-label">CVC</label>
              <input
                type="password"
                required
                maxLength="3"
                value={booking.payment.cvc}
                onChange={(e) => updatePayment({ cvc: e.target.value })}
                className="input-field"
                placeholder="***"
              />
            </div>
          </div>

          <div className="payment-checkbox-box">
            <input
              type="checkbox"
              id="accept"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="payment-checkbox"
            />
            <label htmlFor="accept" className="payment-checkbox-text">
              Randevu iptal politikası ve Kullanıcı Sözleşmesi şartlarını kabul ediyorum.
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid() || loading}
            className={isFormValid() && !loading ? 'payment-btn' : 'payment-btn-disabled'}
          >
            {loading ? (
              <span>İşleniyor...</span>
            ) : (
              <span>Öde ve Randevuyu Onayla ({booking.service?.price} TL)</span>
            )}
          </button>
        </form>
      </div>

      <div className="booking-sidebar">
        <h4 className="detail-sidebar-title">Sipariş Özeti</h4>
        {booking.service && (
          <>
            <div className="detail-sidebar-item">
              <span className="detail-sidebar-text font-semibold">Seçilen Hizmet:</span>
              <span className="detail-sidebar-text">{booking.service.name}</span>
            </div>
            <div className="detail-sidebar-item">
              <span className="detail-sidebar-text font-semibold">Tutar:</span>
              <span className="detail-sidebar-text">{booking.service.price} TL</span>
            </div>
          </>
        )}
        {booking.stylist && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Stilist:</span>
            <span className="detail-sidebar-text">{booking.stylist.name}</span>
          </div>
        )}
        {booking.date && booking.time && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Randevu Zamanı:</span>
            <span className="detail-sidebar-text">{booking.date} - {booking.time}</span>
          </div>
        )}
      </div>
    </main>
  );
}
