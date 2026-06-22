import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const MyBookings = () => {
  const { bookings, cancelBooking } = useApp();
  const [cancelTargetId, setCancelTargetId] = useState(null);

  const openCancelConfirm = (id) => {
    setCancelTargetId(id);
  };

  const closeCancelConfirm = () => {
    setCancelTargetId(null);
  };

  const handleConfirmCancel = () => {
    cancelBooking(cancelTargetId);
    setCancelTargetId(null);
  };

  return (
    <div className="bookings-page">
      <div className="bookings-header">
        <h1 className="bookings-title">Rezervasyonlarım</h1>
        <p className="bookings-desc">Aktif ve geçmiş kiralama işlemlerinizi bu sayfadan takip edebilir ve yönetebilirsiniz.</p>
      </div>

      {bookings.length === 0 ? (
        <div className="empty-bookings-card">
          <span className="material-symbols-outlined empty-icon">calendar_today</span>
          <h3 className="empty-title">Aktif Rezervasyonunuz Bulunmuyor</h3>
          <p className="empty-desc">Henüz bir araç kiralamadınız. Hemen araçlarımızı inceleyip ilk rezervasyonunuzu yapabilirsiniz.</p>
          <Link to="/cars" className="empty-btn">Kiralık Araçları Gör</Link>
        </div>
      ) : (
        <div className="bookings-list-container">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-card-header">
                <div>
                  <span className="booking-ref-label">Rezervasyon Referansı</span>
                  <span className="booking-ref-value">{booking.id}</span>
                </div>
                <div>
                  {booking.status === 'Onaylandı' && <span className="status-badge-green">Onaylandı</span>}
                  {booking.status === 'Tamamlandı' && <span className="status-badge-gray">Tamamlandı</span>}
                  {booking.status === 'İptal Edildi' && <span className="status-badge-red">İptal Edildi</span>}
                </div>
              </div>

              <div className="booking-card-body">
                <div className="booking-car-info">
                  <div className="booking-car-img-box">
                    <img src={booking.car.image} alt={booking.car.name} className="booking-car-img" />
                  </div>
                  <div>
                    <h3 className="booking-car-name">{booking.car.name}</h3>
                    <p className="booking-car-desc">{booking.car.collection} • {booking.car.transmission} • {booking.car.fuel}</p>
                  </div>
                </div>

                <div className="booking-route-info">
                  <div className="route-segment">
                    <p className="route-segment-label">Alış Yeri ve Tarihi</p>
                    <p className="route-segment-value">{booking.pickupLocation}</p>
                    <p className="route-segment-date">{booking.pickupDate} saat {booking.pickupTime}</p>
                  </div>
                  <div className="route-segment mt-4">
                    <p className="route-segment-label">İade Yeri ve Tarihi</p>
                    <p className="route-segment-value">{booking.pickupLocation}</p>
                    <p className="route-segment-date">{booking.returnDate} saat {booking.returnTime}</p>
                  </div>
                </div>

                <div className="booking-billing-info">
                  <div className="billing-price-box">
                    <span className="billing-price-label">Toplam Tutar</span>
                    <span className="billing-price-val">{booking.totalPrice.toLocaleString('tr-TR')} TL</span>
                  </div>
                  {booking.status === 'Onaylandı' && (
                    <button
                      onClick={() => openCancelConfirm(booking.id)}
                      className="booking-cancel-btn"
                    >
                      Rezervasyonu İptal Et
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cancelTargetId && (
        <div className="cancel-modal-overlay">
          <div className="cancel-modal-box">
            <h3 className="modal-title">Rezervasyonu İptal Etmek İstiyor musunuz?</h3>
            <p className="modal-text">
              Bu rezervasyon iptal edilecektir. Kiralama saatine 48 saat kalana kadar yapılan iptaller ücretsizdir.
            </p>
            <div className="modal-actions">
              <button onClick={closeCancelConfirm} className="modal-btn-close">Vazgeç</button>
              <button onClick={handleConfirmCancel} className="modal-btn-confirm">İptal Et</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
