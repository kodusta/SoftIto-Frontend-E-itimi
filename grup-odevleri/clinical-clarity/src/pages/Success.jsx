import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReservation } from "../context/ReservationContext";

export default function Success() {
  const navigate = useNavigate();
  const { reservation, resetReservation } = useReservation();

  const doctor = reservation.doctor || {
    name: "Dr. Selin Yılmaz",
    title: "Kurucu / Estetik Diş Hekimi",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0R85Wa6OY2ffzEzpOPRDuhT25RRgTPGH701tqbdFTWZbCHjKClF5ed_1p8gX937-dNwlRCH52m1NGKXQZl4tQ37Vehs09d2XA0i9qKUWuULdlUHV4zB7Xi7uabpq9VX0lw7M1asShadzPb8crVXLEAWEiLIg97X1VjMgSmz6ONigrzzdjc3I5Ip8tJ5YWLURXrm99nY-C9SEix4_DwZBwXqBFdK2UUmo-7DF6KV6Xb0AxWTr9VsKWB7M1Qe4uQG7_sNVGrF9jMk"
  };

  const serviceName = reservation.service?.title || "Genel Kontrol";
  const appointmentDate = reservation.date || "15 Ekim 2023";
  const appointmentTime = reservation.time || "10:30";

  const handleFinish = () => {
    resetReservation();
    navigate("/");
  };

  return (
    <div className="bg-surface">
      <main className="confirm-main">
        <div className="confirm-bg-circle-1" />
        <div className="confirm-bg-circle-2" />

        <div className="confirm-card">
          <div className="confirm-header">
            <div className="confirm-icon-box-success">
              <span className="confirm-icon-success">check</span>
            </div>
            <h2 className="confirm-title-success">Randevunuz Alındı</h2>
            <p className="confirm-desc">
              Randevu kaydınız başarıyla oluşturulmuştur. Kayıt detayları aşağıda yer almaktadır.
            </p>
          </div>

          <div className="confirm-details-grid">
            <div className="confirm-doctor-card">
              <div className="confirm-doctor-avatar-wrap">
                <img
                  className="confirm-doctor-avatar"
                  src={doctor.avatar}
                  alt={doctor.name}
                />
              </div>
              <div className="confirm-doctor-info">
                <span className="confirm-detail-label">Hekiminiz</span>
                <h4 className="confirm-doctor-name">{doctor.name}</h4>
                <p className="confirm-doctor-title">{doctor.title}</p>
              </div>
            </div>

            <div className="confirm-datetime-row">
              <div className="confirm-datetime-card">
                <span className="confirm-datetime-icon">calendar_month</span>
                <span className="confirm-detail-label">Tarih</span>
                <span className="confirm-datetime-value">{appointmentDate}</span>
              </div>

              <div className="confirm-datetime-card">
                <span className="confirm-datetime-icon">schedule</span>
                <span className="confirm-detail-label">Saat</span>
                <span className="confirm-datetime-value">{appointmentTime}</span>
              </div>
            </div>

            <div className="confirm-location-card">
              <span className="confirm-location-icon">location_on</span>
              <div>
                <span className="confirm-detail-label">Klinik Konumu</span>
                <p className="confirm-doctor-title">
                  Büyükdere Cd. No:123, Levent, Şişli/İstanbul (Metro Çıkışı)
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="confirm-location-btn"
                >
                  Haritada Göster
                  <span className="confirm-location-btn-icon">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={handleFinish}
            className="confirm-action-btn-primary"
          >
            Ana Sayfaya Dön
          </button>

          <div className="confirm-support-footer">
            <p className="confirm-support-text">
              Sorularınız için bizimle iletişime geçin:{" "}
              <a href="tel:+902120000000" className="confirm-support-link">
                0212 000 00 00
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
