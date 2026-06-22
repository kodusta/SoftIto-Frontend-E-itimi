import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get("propertyId");
  const property = properties.find((p) => p.id === parseInt(propertyId)) || properties[0];

  const [activeDay, setActiveDay] = useState(11);
  const [activeTime, setActiveTime] = useState("10:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      navigate("/status?success=false");
    } else {
      const refCode = "EP-" + Math.floor(100000 + Math.random() * 900000);
      navigate(`/status?success=true&ref=${refCode}&propertyId=${property.id}`);
    }
  };

  const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <main className="booking-main">
      <div className="booking-grid">
        <div className="booking-aside">
          <div className="booking-summary-card">
            <div className="booking-summary-img-wrapper">
              <img className="booking-summary-img" src={property.images[0]} alt={property.title} />
              <span className="booking-summary-badge">TURDA</span>
            </div>
            <h2 className="booking-summary-title">{property.title}</h2>
            <p className="booking-summary-specs">{property.location} • {property.beds} • {property.size}</p>
            <div className="booking-summary-price">{property.formattedPrice}</div>
            <hr className="booking-summary-divider" />
            <div className="booking-agent-row">
              <div className="booking-agent-avatar">
                <img className="booking-agent-avatar-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2SehTYiPPf7btX5VaHBNxvkPbrrVTFfncT4AN-aovxOPyGPRlMXzF8RSS3IFs_AopOImsRWLi1PLagieShTMXr1_mbj5EGXA1DGeZfX-HA_ZqlJf1mtqJP-CnCpoPMUR6tn1FDpSlyQ5AtK9rNBkuT-KhW-i79MAeWW-vtU3d66CiPYRXH5O86l-2zdb5dkiasbVu3ExZOb48Kdtni4OmHHzfRAAtDhrL3tMMfydfqO7oRGiSOR-WLlv52cG9pfrzqIc8AduDqMbs" alt="Canan Yılmaz" />
              </div>
              <div className="booking-agent-info">
                <p className="booking-agent-name">Canan Yılmaz</p>
                <p className="booking-agent-role">Kıdemli Danışman</p>
              </div>
            </div>
          </div>
          <div className="booking-info-box">
            <div className="booking-info-header">
              <span className="material-symbols-outlined booking-info-icon">info</span>
              <h3 className="booking-info-title">Randevu Bilgisi</h3>
            </div>
            <p className="booking-info-desc">Seçtiğiniz tarih ve saat için danışmanımız sizinle iletişime geçerek randevuyu teyit edecektir. Tur yaklaşık 45 dakika sürmektedir.</p>
          </div>
        </div>

        <div className="booking-form-col">
          <section className="booking-section">
            <div className="booking-section-header">
              <span className="material-symbols-outlined booking-section-icon">calendar_month</span>
              <h2 className="booking-section-title">Tarih ve Saat Seçimi</h2>
            </div>
            <div className="booking-calendar-row">
              <div className="booking-calendar-col">
                <div className="calendar-header-row">
                  <span className="calendar-title">Ekim 2023</span>
                  <div className="calendar-nav">
                    <button type="button" className="calendar-nav-btn">
                      <span className="material-symbols-outlined calendar-nav-icon">chevron_left</span>
                    </button>
                    <button type="button" className="calendar-nav-btn">
                      <span className="material-symbols-outlined calendar-nav-icon">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="calendar-grid">
                  <div className="calendar-weekday">Pt</div>
                  <div className="calendar-weekday">Sa</div>
                  <div className="calendar-weekday">Ça</div>
                  <div className="calendar-weekday">Pe</div>
                  <div className="calendar-weekday">Cu</div>
                  <div className="calendar-weekday">Ct</div>
                  <div className="calendar-weekday">Pz</div>
                  
                  <span className="calendar-day-disabled">25</span>
                  <span className="calendar-day-disabled">26</span>
                  <span className="calendar-day-disabled">27</span>
                  <span className="calendar-day-disabled">28</span>
                  <span className="calendar-day-disabled">29</span>
                  <span className="calendar-day-disabled">30</span>

                  {days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      className={activeDay === day ? "calendar-day-active" : "calendar-day-hover"}
                      onClick={() => setActiveDay(day)}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div className="booking-time-col">
                <label className="time-label">Müsait Saatler</label>
                <div className="time-grid">
                  {times.map((time) => {
                    const isDisabled = time === "12:00";
                    return (
                      <button
                        key={time}
                        type="button"
                        disabled={isDisabled}
                        className={isDisabled ? "time-chip-disabled" : (activeTime === time ? "time-chip-active" : "time-chip")}
                        onClick={() => setActiveTime(time)}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className="booking-section">
            <div className="booking-section-header">
              <span className="material-symbols-outlined booking-section-icon">person</span>
              <h2 className="booking-section-title">Kişisel Bilgiler</h2>
            </div>
            <form onSubmit={handleSubmit} className="personal-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Ad Soyad</label>
                  <input
                    className="form-input"
                    id="name"
                    placeholder="Örn. Ahmet Yılmaz"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Telefon Numarası</label>
                  <input
                    className="form-input"
                    id="phone"
                    placeholder="05XX XXX XX XX"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="notes">Notlar (Opsiyonel)</label>
                <textarea
                  className="form-textarea"
                  id="notes"
                  placeholder="Eklemek istediğiniz özel bir not var mı?"
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
              <div className="booking-action-group">
                <button type="submit" className="booking-submit-btn">
                  <span>Randevuyu Onayla</span>
                  <span className="material-symbols-outlined booking-submit-btn-icon">arrow_forward</span>
                </button>
                <p className="booking-disclaimer">
                  "Onayla" butonuna basarak <a className="booking-disclaimer-link" href="#">Kullanım Koşullarını</a> kabul etmiş olursunuz.
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
