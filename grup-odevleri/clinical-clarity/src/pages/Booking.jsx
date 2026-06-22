import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";
import { services, doctors } from "../data/clinicData";

export default function Booking() {
  const navigate = useNavigate();
  const { reservation, updateService, updateDoctor, updateDateTime, updatePatient, updatePayment } = useReservation();
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState("Ekim 2023");

  const handleServiceSelect = (serviceId) => {
    const selected = services.find((s) => s.id === serviceId);
    updateService(selected);
  };

  const handleDoctorSelect = (doctorId) => {
    const selected = doctors.find((d) => d.id === doctorId);
    updateDoctor(selected);
  };

  const handleDateSelect = (day) => {
    const fullDate = `${day} ${currentMonth}`;
    updateDateTime(fullDate, reservation.time);
  };

  const handleTimeSelect = (time) => {
    updateDateTime(reservation.date, time);
  };

  const handlePatientChange = (field, value) => {
    updatePatient({ [field]: value });
  };

  const handlePaymentChange = (field, value) => {
    updatePayment({ [field]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && !reservation.service) {
      alert("Lütfen bir hizmet seçin.");
      return;
    }
    if (step === 2 && !reservation.doctor) {
      alert("Lütfen bir hekim seçin.");
      return;
    }
    if (step === 3 && (!reservation.date || !reservation.time)) {
      alert("Lütfen tarih ve saat seçin.");
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      if (!reservation.patient.name || !reservation.patient.email || !reservation.patient.phone) {
        alert("Lütfen tüm kişisel bilgilerinizi doldurun.");
        return;
      }
      if (!reservation.payment.cardName || !reservation.payment.cardNumber || !reservation.payment.cardExpiry || !reservation.payment.cardCvc) {
        alert("Lütfen tüm ödeme alanlarını doldurun.");
        return;
      }

      if (reservation.payment.cardNumber.includes("4000")) {
        navigate("/basarisiz");
      } else {
        navigate("/basarili");
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const timeSlotsMorning = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
  const timeSlotsAfternoon = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

  return (
    <div className="bg-surface">
      <main className="booking-main">
        <div className="booking-progress-bar">
          <div className="booking-progress-dots">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={
                  s <= step
                    ? "booking-progress-dot booking-progress-dot-active"
                    : "booking-progress-dot booking-progress-dot-inactive"
                }
              />
            ))}
          </div>
          <span className="booking-progress-label">Adım {step}/4</span>
        </div>

        <div className="booking-form-box">
          {step === 1 && (
            <div>
              <h2 className="booking-step-title">Hangi hizmeti alacaksınız?</h2>
              <p className="booking-step-desc">İhtiyacınız olan tedaviyi seçin.</p>
              <div className="booking-cards-list">
                {services.map((s) => (
                  <label key={s.id} className="booking-card-label">
                    <input
                      type="radio"
                      name="service"
                      checked={reservation.service?.id === s.id}
                      onChange={() => handleServiceSelect(s.id)}
                      className="booking-card-radio peer"
                    />
                    <div className="booking-card-inner">
                      <div className="booking-card-icon-box">
                        <span className="booking-card-icon">{s.icon}</span>
                      </div>
                      <div className="booking-card-text">
                        <span className="booking-card-title">{s.title}</span>
                        <span className="booking-card-desc">{s.description}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="booking-step-title">Hekiminizi seçin</h2>
              <p className="booking-step-desc">Size yardımcı olacak uzmanı belirleyin.</p>
              <div className="booking-cards-list">
                {doctors.map((d) => (
                  <label key={d.id} className="booking-card-label">
                    <input
                      type="radio"
                      name="doctor"
                      checked={reservation.doctor?.id === d.id}
                      onChange={() => handleDoctorSelect(d.id)}
                      className="booking-card-radio peer"
                    />
                    <div className="booking-card-inner">
                      <img
                        className="booking-doctor-avatar"
                        src={d.avatar}
                        alt={d.name}
                      />
                      <div className="booking-card-text">
                        <span className="booking-card-title">{d.name}</span>
                        <span className="booking-card-desc">{d.title}</span>
                      </div>
                      <span className="booking-doctor-check">check_circle</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="booking-step-title">Randevu Zamanı</h2>
              <p className="booking-step-desc">Size en uygun tarihi ve saati seçin.</p>
              <div className="calendar-box">
                <div className="calendar-header">
                  <button className="calendar-arrow-btn">
                    <span className="calendar-arrow-icon">chevron_left</span>
                  </button>
                  <span className="calendar-header-title">{currentMonth}</span>
                  <button className="calendar-arrow-btn">
                    <span className="calendar-arrow-icon">chevron_right</span>
                  </button>
                </div>

                <div className="calendar-grid">
                  <div className="calendar-day-header">Pzt</div>
                  <div className="calendar-day-header">Sal</div>
                  <div className="calendar-day-header">Çar</div>
                  <div className="calendar-day-header">Per</div>
                  <div className="calendar-day-header">Cum</div>
                  <div className="calendar-day-header">Cmt</div>
                  <div className="calendar-day-header">Paz</div>

                  {days.map((day) => {
                    const isSelected = reservation.date === `${day} ${currentMonth}`;
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        className={
                          isSelected
                            ? "calendar-day-btn-active"
                            : "calendar-day-btn"
                        }
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="time-slots-container">
                <h3 className="time-slots-header">SABAH</h3>
                <div className="time-slots-grid">
                  {timeSlotsMorning.map((t) => {
                    const isSelected = reservation.time === t;
                    const isDisabled = t === "10:00" || t === "11:30";
                    return isDisabled ? (
                      <div key={t} className="time-slot-inner-disabled">
                        {t}
                      </div>
                    ) : (
                      <label key={t} className="time-slot-label">
                        <input
                          type="radio"
                          name="time"
                          checked={isSelected}
                          onChange={() => handleTimeSelect(t)}
                          className="time-slot-radio peer"
                        />
                        <div className="time-slot-inner">{t}</div>
                      </label>
                    );
                  })}
                </div>

                <h3 className="time-slots-header">ÖĞLEDEN SONRA</h3>
                <div className="time-slots-grid">
                  {timeSlotsAfternoon.map((t) => {
                    const isSelected = reservation.time === t;
                    return (
                      <label key={t} className="time-slot-label">
                        <input
                          type="radio"
                          name="time"
                          checked={isSelected}
                          onChange={() => handleTimeSelect(t)}
                          className="time-slot-radio peer"
                        />
                        <div className="time-slot-inner">{t}</div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="booking-step-title">Bilgilerinizi Girin</h2>
              <p className="booking-step-desc">İletişim ve ödeme bilgilerinizi tamamlayarak onaylayın.</p>
              <div className="patient-form-grid">
                <div className="form-field">
                  <label className="form-label">Adınız Soyadınız</label>
                  <input
                    required
                    type="text"
                    value={reservation.patient.name}
                    onChange={(e) => handlePatientChange("name", e.target.value)}
                    placeholder="Örn. Selahaddin Çiftçi"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">E-posta Adresiniz</label>
                  <input
                    required
                    type="email"
                    value={reservation.patient.email}
                    onChange={(e) => handlePatientChange("email", e.target.value)}
                    placeholder="ahmet@email.com"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Telefon Numarası</label>
                  <input
                    required
                    type="tel"
                    value={reservation.patient.phone}
                    onChange={(e) => handlePatientChange("phone", e.target.value)}
                    placeholder="0500 000 00 00"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">Varsa Notunuz</label>
                  <textarea
                    rows="2"
                    value={reservation.patient.notes}
                    onChange={(e) => handlePatientChange("notes", e.target.value)}
                    placeholder="Kronik rahatsızlık veya hassasiyet durumu..."
                    className="form-textarea"
                  />
                </div>

                <div className="payment-form-box">
                  <h3 className="form-label pt-2">Güvenceli Kart Ödemesi</h3>

                  <div className="payment-card-visual">
                    <div className="payment-card-chip" />
                    <div className="payment-card-number">
                      {reservation.payment.cardNumber || "•••• •••• •••• ••••"}
                    </div>
                    <div className="payment-card-footer">
                      <div className="payment-card-holder">
                        <span className="payment-card-label">KART SAHİBİ</span>
                        <span className="payment-card-val">
                          {reservation.payment.cardName || "İSİM SOYİSİM"}
                        </span>
                      </div>
                      <div className="payment-card-holder">
                        <span className="payment-card-label">GEÇERLİLİK</span>
                        <span className="payment-card-val">
                          {reservation.payment.cardExpiry || "AA/YY"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Kart Üzerindeki İsim</label>
                    <input
                      required
                      type="text"
                      value={reservation.payment.cardName}
                      onChange={(e) => handlePaymentChange("cardName", e.target.value)}
                      placeholder="İsim Soyisim"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Kart Numarası</label>
                    <input
                      required
                      type="text"
                      maxLength="19"
                      value={reservation.payment.cardNumber}
                      onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
                      placeholder="4000 1234 5678 9010"
                      className="form-input"
                    />
                  </div>

                  <div className="contact-form-row">
                    <div className="form-field">
                      <label className="form-label">Son Kullanma (AA/YY)</label>
                      <input
                        required
                        type="text"
                        maxLength="5"
                        value={reservation.payment.cardExpiry}
                        onChange={(e) => handlePaymentChange("cardExpiry", e.target.value)}
                        placeholder="12/28"
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">CVC / CVV</label>
                      <input
                        required
                        type="text"
                        maxLength="3"
                        value={reservation.payment.cardCvc}
                        onChange={(e) => handlePaymentChange("cardCvc", e.target.value)}
                        placeholder="321"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="booking-action-footer">
        <div className="booking-action-container">
          <button
            type="button"
            onClick={handlePrev}
            className={step === 1 ? "booking-btn-prev hidden" : "booking-btn-prev"}
          >
            Geri
          </button>
          <button
            type="button"
            onClick={handleNext}
            className={step === 4 ? "booking-btn-confirm" : "booking-btn-next"}
          >
            {step === 4 ? "Randevuyu Onayla" : "Devam Et"}
          </button>
        </div>
      </footer>
    </div>
  );
}
