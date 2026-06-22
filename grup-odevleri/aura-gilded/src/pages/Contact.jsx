import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: 'Özel Kesim', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', service: 'Özel Kesim', message: '' });
    }, 3000);
  };

  return (
    <main className="page-main-about">
      <section className="contact-hero">
        <span className="hero-label">İletişim</span>
        <h2 className="contact-hero-title">Bizimle İletişime Geçin</h2>
      </section>

      <div className="contact-grid">
        <div className="contact-form-card">
          <h3 className="contact-form-title">Mesaj Gönderin</h3>
          
          {submitted ? (
            <div className="wizard-service-item-selected">
              <p className="wizard-service-name text-secondary">Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="payment-form-row">
                <div>
                  <label className="input-label">Adınız Soyadınız</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="input-label">E-Posta Adresiniz</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="input-label">İlgilendiğiniz Hizmet</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="input-field"
                >
                  <option value="Özel Kesim">Özel Kesim</option>
                  <option value="Lüks Balyaj">Lüks Balyaj</option>
                  <option value="İpek Fön">İpek Fön</option>
                  <option value="Jel Protez Tırnak">Jel Protez Tırnak</option>
                  <option value="Oksi-Hydra Cilt Bakımı">Oksi-Hydra Cilt Bakımı</option>
                </select>
              </div>

              <div>
                <label className="input-label">Mesajınız</label>
                <textarea
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="input-field"
                  placeholder="Sorularınızı veya taleplerinizi yazın..."
                />
              </div>

              <button type="submit" className="payment-btn">
                GÖNDER
              </button>
            </form>
          )}
        </div>

        <div className="contact-info-col">
          <div className="contact-info-card">
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-item-icon">location_on</span>
              <div>
                <h4 className="contact-info-item-label">Salon Adresi</h4>
                <p className="contact-info-item-value">Nispetiye Mah. Aytar Cad. No:12, Beşiktaş, İstanbul</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-item-icon">call</span>
              <div>
                <h4 className="contact-info-item-label">Telefon</h4>
                <p className="contact-info-item-value">+90 (212) 555 34 21</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="material-symbols-outlined contact-info-item-icon">mail</span>
              <div>
                <h4 className="contact-info-item-label">E-Posta</h4>
                <p className="contact-info-item-value">info@auragilded.com</p>
              </div>
            </div>
          </div>

          <div className="contact-hours-card">
            <h4 className="contact-hours-title">Çalışma Saatleri</h4>
            <ul className="contact-hours-list">
              <li className="contact-hours-row">
                <span>Pazartesi - Cuma</span>
                <span>09:00 - 20:00</span>
              </li>
              <li className="contact-hours-row">
                <span>Cumartesi</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="contact-hours-row-highlight">
                <span>Pazar</span>
                <span>Kapalı</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contact-map-section">
        <div className="contact-map-container">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-eG_hZKlcni5XWbSH9i9X0iVwK-6t7hRSRxbziy-Tb8iKABvJPWkE6uqjwEkQfkmkAtxXBzUl3Zz5jQUrEXvLPFCVcoRYUVXmT4-kqgMNZVOYseQAuizb6jxp0wTVtbgCi-j9icYP2-AwsfzkvUlBVBCsw7wpXDTH2fAp3C1WyE-s39UOIF_ld_pf5hxzgLIxa4JuFXAq748QnIWPXpeYHy9EALlCackHd_3lKMSH3DoXv2KthC4ud9gpGBoEkqNLW6FmVHaZDCm"
            className="contact-map-img"
            alt="Harita konumu"
          />
          <div className="contact-map-badge">
            <h4 className="contact-map-badge-title">Aura &amp; Gilded</h4>
            <p className="contact-map-badge-desc">Premium Güzellik Deneyimi Burada Başlar.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
