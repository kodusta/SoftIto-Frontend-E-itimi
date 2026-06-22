import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';

export default function Status() {
  const { booking, resetBooking } = useReservation();
  const navigate = useNavigate();

  useEffect(() => {
    if (booking.status !== 'success') {
      navigate('/randevu');
    }
  }, [booking.status, navigate]);

  const handleNewBooking = () => {
    resetBooking();
    navigate('/randevu');
  };

  return (
    <main className="status-layout">
      <div className="status-animation-box">
        <div className="status-animation-bg" />
        <div className="status-animation-core">
          <span className="material-symbols-outlined text-[64px] text-secondary">check_circle</span>
        </div>
      </div>

      <h2 className="status-title">Randevunuz Onaylandı!</h2>
      <p className="status-desc">
        Rezervasyonunuz ve ödemeniz başarıyla tamamlandı. Randevu bilgileriniz aşağıda yer almaktadır.
      </p>

      <div className="status-card">
        {booking.service && (
          <div className="status-card-row">
            <span className="detail-sidebar-text font-semibold">Hizmet:</span>
            <span className="detail-sidebar-text">{booking.service.name}</span>
          </div>
        )}
        {booking.stylist && (
          <div className="status-card-row">
            <span className="detail-sidebar-text font-semibold">Uzman:</span>
            <span className="detail-sidebar-text">{booking.stylist.name}</span>
          </div>
        )}
        <div className="status-card-row">
          <span className="detail-sidebar-text font-semibold">Tarih:</span>
          <span className="detail-sidebar-text">{booking.date}</span>
        </div>
        <div className="status-card-row">
          <span className="detail-sidebar-text font-semibold">Saat:</span>
          <span className="detail-sidebar-text">{booking.time}</span>
        </div>
        {booking.service && (
          <div className="status-card-row">
            <span className="detail-sidebar-text font-semibold">Ödenen Tutar:</span>
            <span className="detail-sidebar-text text-secondary font-bold">{booking.service.price} TL</span>
          </div>
        )}
      </div>

      <div className="status-btn-box">
        <button onClick={handleNewBooking} className="status-btn-primary">
          Yeni Randevu Al
        </button>
        <Link to="/" onClick={resetBooking} className="status-btn-secondary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}
