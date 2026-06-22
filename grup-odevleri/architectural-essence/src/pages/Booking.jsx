import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('15 Temmuz 2026');
  const [selectedTime, setSelectedTime] = useState('11:00 — 12:00');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Konut Tasarımı',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(prev => prev + 1);
    } else {
      navigate('/odeme', {
        state: {
          booking: {
            date: selectedDate,
            time: selectedTime,
            ...formData,
            deposit: 2500
          }
        }
      });
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const calendarDays = [
    { day: 29, current: false }, { day: 30, current: false }, { day: 1, current: true }, { day: 2, current: true },
    { day: 3, current: true }, { day: 4, current: false }, { day: 5, current: false }, { day: 6, current: true },
    { day: 7, current: true }, { day: 8, current: true }, { day: 9, current: true }, { day: 10, current: true },
    { day: 11, current: false }, { day: 12, current: false }, { day: 13, current: true }, { day: 14, current: true },
    { day: 15, current: true }, { day: 16, current: true }, { day: 17, current: true }, { day: 18, current: false },
    { day: 19, current: false }, { day: 20, current: true }, { day: 21, current: true }, { day: 22, current: true },
    { day: 23, current: true }, { day: 24, current: true }, { day: 25, current: false }, { day: 26, current: false },
    { day: 27, current: true }, { day: 28, current: true }, { day: 29, current: true }, { day: 30, current: true },
    { day: 31, current: true }, { day: 1, current: false }, { day: 2, current: false }
  ];

  const timeSlots = [
    '09:00 — 10:00',
    '11:00 — 12:00',
    '14:00 — 15:00',
    '16:00 — 17:00'
  ];

  return (
    <main className="hero-section">
      <div className="booking-intro-col">
        <h1 className="booking-intro-title">Mekanınızı Tanımlayın.</h1>
        <p className="booking-intro-desc">
          İlk görüşme, vizyonunuzu ve projenizin mekansal ihtiyaçlarını keşfettiğimiz 60 dakikalık bir oturumdur.
        </p>
        <div className="booking-benefit-list">
          <div className="booking-benefit-item">
            <div className="booking-benefit-line"></div>
            <span className="booking-benefit-text">60 DAKİKA SEANS</span>
          </div>
          <div className="booking-benefit-item">
            <div className="booking-benefit-line"></div>
            <span className="booking-benefit-text">VİDEO KONFERANS</span>
          </div>
          <div className="booking-benefit-item">
            <div className="booking-benefit-line"></div>
            <span className="booking-benefit-text">ÖZEL PORTFOLYO İNCELEME</span>
          </div>
        </div>
        <div className="booking-image-wrapper">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnGho-i75i6TVsma7vEa3iDxpok50uzbbPJEwwMH92g2kbsGq-KuYauxakm8BHjXQdE3e_ZgG8lILdiw1I2sGECrO64C3x_f9hObZBjcAbswyjNANeDpLioa5OUxY5m4AZFMnlCmLTMEr_xdttQOmNYIQd85ZO3EfFWLdPcqUP5NqFwqJkOAEyTrIpWMvbzY_cQu-FYyrX53m1bC2Zeezhq5UkGOboEJT6-SKN1Yt_QxAZOWgqOa9bh9BsuUO_1yVtSD8GU_-oTBBW" alt="Stüdyo" className="arch-image-zoom grayscale" />
        </div>
      </div>

      <div className="booking-panel-col">
        <div className="step-indicator-row">
          <div className="step-indicator-node">
            <span className={step >= 1 ? 'step-indicator-label' : 'step-indicator-label-inactive'}>01 TARİH</span>
            <div className={step >= 1 ? 'step-indicator-dot-active' : 'step-indicator-dot-inactive'}></div>
          </div>
          <div className="step-indicator-line"></div>
          <div className="step-indicator-node">
            <span className={step >= 2 ? 'step-indicator-label' : 'step-indicator-label-inactive'}>02 SAAT</span>
            <div className={step >= 2 ? 'step-indicator-dot-active' : 'step-indicator-dot-inactive'}></div>
          </div>
          <div className="step-indicator-line"></div>
          <div className="step-indicator-node">
            <span className={step >= 3 ? 'step-indicator-label' : 'step-indicator-label-inactive'}>03 DETAYLAR</span>
            <div className={step >= 3 ? 'step-indicator-dot-active' : 'step-indicator-dot-inactive'}></div>
          </div>
        </div>

        {step === 1 && (
          <div>
            <div className="calendar-month-row">
              <h3 className="team-name">Temmuz 2026</h3>
              <div className="footer-social-links">
                <button className="calendar-nav-btn">
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="calendar-nav-btn">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="calendar-header-grid">
              <div>Pzt</div><div>Sal</div><div>Çar</div><div>Per</div><div>Cum</div><div>Cmt</div><div>Paz</div>
            </div>
            <div className="calendar-days-grid">
              {calendarDays.map((item, idx) => {
                const dateString = `${item.day} Temmuz 2026`;
                if (!item.current) {
                  return <div key={idx} className="calendar-day-empty">{item.day}</div>;
                }
                const isSelected = selectedDate === dateString;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDate(dateString)}
                    className={isSelected ? 'calendar-day-selected' : 'calendar-day-active'}
                  >
                    {item.day}
                  </div>
                );
              })}
            </div>
            <div className="booking-review-box">
              <button className="nav-cta-btn-alt" onClick={handleNextStep}>
                SAAT SEÇİMİNE GEÇ
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="team-name mb-4">Seçilen Tarih: {selectedDate}</h3>
            <span className="time-grid-label">MÜSAİT SAAT DİLİMLERİ</span>
            <div className="time-grid">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={isSelected ? 'time-slot-btn-selected' : 'time-slot-btn'}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            <div className="booking-review-box">
              <button className="nav-cta-btn-alt" onClick={handlePrevStep}>GERİ</button>
              <button className="nav-cta-btn" onClick={handleNextStep}>DETAYLARA GEÇ</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="contact-form">
            <h3 className="team-name mb-8">İletişim & Proje Detayları</h3>
            <div className="form-group">
              <label className="form-label">ADINIZ SOYADINIZ</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input-underline"
                placeholder="Örn: Julian Vayne"
                required
              />
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label className="form-label">E-POSTA ADRESİNİZ</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input-underline"
                  placeholder="hello@domain.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">TELEFON NUMARANIZ</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input-underline"
                  placeholder="+90 (555) 000 0000"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">PROJE TİPİ</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="form-select-underline"
              >
                <option value="Konut Tasarımı">Konut Tasarımı</option>
                <option value="Ticari Mimari">Ticari Mimari</option>
                <option value="İç Mimari Curation">İç Mimari Curation</option>
                <option value="Diğer / Danışmanlık">Diğer / Danışmanlık</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">MESAJINIZ / PROJE AÇIKLAMASI</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea-underline"
                placeholder="Projenizle ilgili kısa bir brifing verin..."
                rows="4"
                required
              ></textarea>
            </div>
            <div className="booking-review-box">
              <button type="button" className="nav-cta-btn-alt" onClick={handlePrevStep}>GERİ</button>
              <button type="submit" className="nav-cta-btn">ÖDEMEYE GEÇ</button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
