import React, { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Genel Bilgi",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormState({ name: "", email: "", subject: "Genel Bilgi", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="bg-surface">
      <main className="contact-main">
        <section className="contact-hero">
          <h2 className="contact-hero-title">İletişime Geçin</h2>
          <p className="contact-hero-desc">
            Modern diş hekimliği anlayışımız ve uzman kadromuzla, hayalinizdeki gülüş için size bir adım kadar yakınız.
          </p>
        </section>

        <div className="contact-bento-grid">
          <div className="contact-map-container">
            <img
              className="contact-map-img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCrSLEPG3118MkPz7gfYBmAguia2OW3ejY5-AU9EljWIClI_z_aimLmkSetRjVJHa5M-gw00ktV1l61vtr1ECTl-yHHbusNT1bqz-gZm2Beb2luOhr4i2r7E2l1j2Ve7R1pfaKy4RlkC_BmExCDOpDrJstAVytzcNUbCq6KVOis199MfiC7q1maOV-jPpQPp8ZAjXlXn36as2nEeLjsfS4Cu-h_iTVbpmaBwpvx8WNi-uGSceGv2kkvuYlPDhC_QJeTfFkaWiisPw"
              alt="İstanbul Levent Haritası"
            />
            <div className="contact-map-overlay">
              <div className="contact-map-card">
                <span className="contact-map-icon">location_on</span>
                <h3 className="contact-map-title">Konumumuz</h3>
                <p className="contact-map-desc">Levent, Büyükdere Cd. No:123, 34394 Şişli/İstanbul</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-map-btn"
                >
                  Yol Tarifi Al
                  <span className="contact-map-btn-icon">open_in_new</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="contact-quick-card">
              <div className="contact-quick-header">
                <span className="contact-quick-icon">call</span>
                <h3 className="contact-quick-title">Doğrudan Arayın</h3>
              </div>
              <a href="tel:+902120000000" className="contact-phone-link">
                +90 (212) 000 00 00
              </a>
              <p className="contact-quick-desc">Acil durumlar için 7/24 operatörümüz mevcuttur.</p>
            </div>

            <div className="contact-quick-card">
              <div className="contact-quick-header">
                <span className="contact-quick-icon text-green-500">chat</span>
                <h3 className="contact-quick-title">WhatsApp Hattı</h3>
              </div>
              <a
                href="https://wa.me/905000000000"
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-btn"
              >
                <span>MESAJ GÖNDER</span>
                <span className="contact-whatsapp-btn-icon">send</span>
              </a>
            </div>
          </div>

          <div className="contact-form-card">
            <h3 className="contact-form-title">Bize Yazın</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="form-field">
                  <label className="form-label">Adınız Soyadınız</label>
                  <input
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Örn. Ahmet Yılmaz"
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">E-posta Adresiniz</label>
                  <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ahmet@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">Konu</label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="form-input"
                >
                  <option>Genel Bilgi</option>
                  <option>Randevu Talebi</option>
                  <option>Tedavi Hizmetleri</option>
                  <option>Fiyat Teklifi</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">Mesajınız</label>
                <textarea
                  required
                  rows="4"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="contact-form-btn"
              >
                {loading ? "GÖNDERİLİYOR..." : success ? "BAŞARIYLA GÖNDERİLDİ" : "GÖNDER"}
              </button>
            </form>
          </div>

          <div className="contact-info-sidebar">
            <div className="contact-hours-card">
              <div className="contact-hours-header">
                <span className="contact-hours-icon">schedule</span>
                <h3 className="contact-hours-title">Çalışma Saatleri</h3>
              </div>
              <div className="contact-hours-list">
                <div className="contact-hours-row">
                  <span className="contact-hours-day">Pazartesi - Cuma</span>
                  <span className="contact-hours-time">09:00 - 19:00</span>
                </div>
                <div className="contact-hours-row">
                  <span className="contact-hours-day">Cumartesi</span>
                  <span className="contact-hours-time">10:00 - 17:00</span>
                </div>
                <div className="contact-hours-row-last">
                  <span className="contact-hours-day">Pazar</span>
                  <span className="contact-hours-time">Sadece Acil</span>
                </div>
              </div>
              <div className="contact-hours-note-box">
                <p className="contact-hours-note">
                  "Acil durumlar için nöbetçi hekimimizle her zaman iletişime geçebilirsiniz."
                </p>
              </div>
            </div>

            <div className="contact-newsletter-card">
              <h4 className="contact-newsletter-title">E-Bülten</h4>
              <p className="contact-newsletter-desc">Ağız ve diş sağlığı ipuçlarından haberdar olun.</p>
              <div className="contact-newsletter-form">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="contact-newsletter-input"
                />
                <button className="contact-newsletter-btn">Kayıt</button>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-trust-logos">
          <span className="contact-trust-logo">ISO 9001</span>
          <span className="contact-trust-logo">TDB ONAYLI</span>
          <span className="contact-trust-logo">HEALTH TOURISM</span>
          <span className="contact-trust-logo">SKS AKREDİTE</span>
        </div>
      </main>
    </div>
  );
}
