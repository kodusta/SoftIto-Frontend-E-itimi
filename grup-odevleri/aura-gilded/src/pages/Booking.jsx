import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReservation } from '../context/ReservationContext';
import { servicesData } from '../data/services';
import { stylistsData } from '../data/stylists';

export default function Booking() {
  const { booking, updateBooking } = useReservation();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const getDays = () => {
    const days = [];
    const dateNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      days.push({
        fullDate: d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }),
        dayName: dateNames[d.getDay()],
        dayNum: d.getDate(),
        raw: d.toISOString().split('T')[0]
      });
    }
    return days;
  };

  const daysList = getDays();
  const timesList = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleNext = () => {
    if (step === 1 && booking.service) setStep(2);
    else if (step === 2 && booking.stylist) setStep(3);
    else if (step === 3 && booking.date && booking.time) navigate('/odeme');
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <main className="booking-layout">
      <div className="booking-flow">
        {step === 1 && (
          <div className="wizard-card">
            <h3 className="wizard-card-title">Hizmet Seçimi</h3>
            <span className="hero-label">ADIM 1 / 3: İSTEDİĞİNİZ BAKIMI SEÇİN</span>
            
            <div className="wizard-service-list">
              {servicesData.map((service) => {
                const isSelected = booking.service?.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => updateBooking({ service })}
                    className={isSelected ? 'wizard-service-item-selected' : 'wizard-service-item'}
                  >
                    <div>
                      <h4 className="wizard-service-name">{service.name}</h4>
                      <p className="wizard-service-desc">{service.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="wizard-service-price">{service.price} TL</span>
                      <p className="wizard-service-desc">{service.duration} dk</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="wizard-nav-box">
              <div />
              <button
                onClick={handleNext}
                disabled={!booking.service}
                className={booking.service ? 'wizard-next-btn' : 'wizard-next-btn-disabled'}
              >
                İleri <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="wizard-card">
            <h3 className="wizard-card-title">Uzman Seçimi</h3>
            <span className="hero-label">ADIM 2 / 3: HİZMETİ UYGULAYACAK UZMANI SEÇİN</span>

            <div className="wizard-stylist-grid">
              {stylistsData.map((stylist) => {
                const isSelected = booking.stylist?.id === stylist.id;
                return (
                  <div
                    key={stylist.id}
                    onClick={() => updateBooking({ stylist })}
                    className={isSelected ? 'wizard-stylist-card-selected' : 'wizard-stylist-card'}
                  >
                    <img
                      src={stylist.img}
                      className="wizard-stylist-avatar"
                      alt={stylist.name}
                    />
                    <h4 className="wizard-stylist-name">{stylist.name}</h4>
                    <span className="wizard-stylist-role">{stylist.role}</span>
                    <p className="wizard-service-desc">{stylist.exp}</p>
                  </div>
                );
              })}
            </div>

            <div className="wizard-nav-box">
              <button onClick={handlePrev} className="wizard-prev-btn">
                <span className="material-symbols-outlined">chevron_left</span> Geri
              </button>
              <button
                onClick={handleNext}
                disabled={!booking.stylist}
                className={booking.stylist ? 'wizard-next-btn' : 'wizard-next-btn-disabled'}
              >
                İleri <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="wizard-card">
            <h3 className="wizard-card-title">Tarih &amp; Saat Seçimi</h3>
            <span className="hero-label">ADIM 3 / 3: RANDEVU ZAMANINI BELİRLEYİN</span>

            <div className="wizard-calendar-grid">
              {daysList.map((day) => {
                const isSelected = booking.date === day.fullDate;
                return (
                  <div
                    key={day.raw}
                    onClick={() => updateBooking({ date: day.fullDate })}
                    className={isSelected ? 'wizard-calendar-date-selected' : 'wizard-calendar-date'}
                  >
                    <span className="wizard-calendar-day block">{day.dayName}</span>
                    <span className="font-bold text-lg">{day.dayNum}</span>
                  </div>
                );
              })}
            </div>

            {booking.date && (
              <div className="wizard-time-grid">
                {timesList.map((time) => {
                  const isSelected = booking.time === time;
                  return (
                    <div
                      key={time}
                      onClick={() => updateBooking({ time })}
                      className={isSelected ? 'wizard-time-chip-selected' : 'wizard-time-chip'}
                    >
                      {time}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="wizard-nav-box">
              <button onClick={handlePrev} className="wizard-prev-btn">
                <span className="material-symbols-outlined">chevron_left</span> Geri
              </button>
              <button
                onClick={handleNext}
                disabled={!booking.date || !booking.time}
                className={(booking.date && booking.time) ? 'wizard-next-btn' : 'wizard-next-btn-disabled'}
              >
                Ödemeye Geç <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="booking-sidebar">
        <h4 className="detail-sidebar-title">Randevu Özeti</h4>
        
        {booking.service ? (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Hizmet:</span>
            <span className="detail-sidebar-text">{booking.service.name}</span>
          </div>
        ) : (
          <p className="wizard-service-desc">Henüz hizmet seçilmedi.</p>
        )}

        {booking.stylist && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Uzman:</span>
            <span className="detail-sidebar-text">{booking.stylist.name}</span>
          </div>
        )}

        {booking.date && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Tarih:</span>
            <span className="detail-sidebar-text">{booking.date}</span>
          </div>
        )}

        {booking.time && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Saat:</span>
            <span className="detail-sidebar-text">{booking.time}</span>
          </div>
        )}

        {booking.service && (
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Toplam Tutar:</span>
            <span className="detail-sidebar-text text-secondary font-bold">{booking.service.price} TL</span>
          </div>
        )}
      </div>
    </main>
  );
}
