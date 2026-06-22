import React, { useState } from 'react';

const BRANCHES = [
  {
    name: "Caddebostan Şubesi (Merkez)",
    address: "Bağdat Caddesi No: 284, Kadıköy / İstanbul",
    phone: "0216 384 45 67"
  },
  {
    name: "Moda Şubesi",
    address: "Moda Caddesi No: 92, Kadıköy / İstanbul",
    phone: "0216 418 12 34"
  },
  {
    name: "Suadiye Şubesi",
    address: "Plaj Yolu Sokak No: 12, Suadiye / İstanbul",
    phone: "0216 362 90 88"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      <section className="contact-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM')` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">İletişim & Şubeler</h1>
          <p className="hero-desc">Berna & Aslı Cafe noktalarında sizleri ağırlamaktan mutluluk duyarız.</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-grid">
          <div className="contact-info-col">
            <div>
              <h2 className="contact-section-title">Şubelerimiz</h2>
              <div className="contact-list">
                {BRANCHES.map((b, idx) => (
                  <div className="contact-branch group" key={idx}>
                    <h3 className="branch-name">{b.name}</h3>
                    <div className="branch-detail">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span>{b.address}</span>
                    </div>
                    <div className="branch-detail mt-1">
                      <span className="material-symbols-outlined text-sm">phone</span>
                      <span>{b.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hours-box">
              <h3 className="hours-title">Çalışma Saatleri</h3>
              <div className="hours-row">
                <span>Hafta İçi (Pzt - Cuma)</span>
                <span className="hours-val">08:00 - 22:00</span>
              </div>
              <div className="hours-row">
                <span>Hafta Sonu (Cmt - Pzr)</span>
                <span className="hours-val">09:00 - 23:00</span>
              </div>
            </div>

            <div>
              <h2 className="contact-section-title">Sosyal Medya</h2>
              <div className="contact-socials">
                <a className="social-circle" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="social-circle" href="#">
                  <span className="material-symbols-outlined">camera_alt</span>
                </a>
                <a className="social-circle" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            <div className="form-container">
              {!sent ? (
                <>
                  <h2 className="form-title">Bize Mesaj Gönderin</h2>
                  <p className="form-desc">Soru, görüş ve önerileriniz için aşağıdaki formu doldurabilirsiniz.</p>
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Adınız Soyadınız</label>
                        <input
                          className="form-input"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-Posta Adresiniz</label>
                        <input
                          className="form-input"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Konu</label>
                      <input
                        className="form-input"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Mesajınız</label>
                      <textarea
                        className="form-textarea"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>
                    
                    <button className="checkout-btn" type="submit">
                      Mesajı Gönder
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-6xl text-secondary mb-4 animate-bounce">
                    check_circle
                  </span>
                  <h2 className="form-title mb-2">Mesajınız İletildi!</h2>
                  <p className="form-desc">
                    Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede size dönüş sağlayacağız.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div 
          className="map-placeholder" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM')` }}
        ></div>
        <div className="map-overlay">
          <h3 className="hours-title">Caddebostan Merkez</h3>
          <p className="font-body-md text-on-surface-variant text-sm mb-4">
            Bağdat Caddesi No: 284, Kadıköy / İstanbul
          </p>
          <a className="gallery-link" href="https://maps.google.com" target="_blank" rel="noreferrer">
            Yol Tarifi Al
          </a>
        </div>
      </section>
    </div>
  );
}
