import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <main className="contact-main">
      <section className="contact-hero text-center">
        <h2 className="contact-hero-title">Bizimle İletişime Geçin</h2>
        <p className="contact-hero-desc">Her türlü soru, öneri ve talepleriniz için uzman ekibimiz size destek vermeye hazır.</p>
      </section>

      <section className="contact-form-section">
        <h3 className="contact-form-title">Mesaj Gönderin</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="fullname">Adınız Soyadınız</label>
            <input
              type="text"
              id="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-form-input"
              placeholder="Adınızı ve soyadınızı yazın"
              required
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="email-addr">E-posta Adresiniz</label>
            <input
              type="email"
              id="email-addr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-form-input"
              placeholder="ornek@posta.com"
              required
            />
          </div>
          <div className="contact-form-field">
            <label className="contact-form-label" htmlFor="user-msg">Mesajınız</label>
            <textarea
              id="user-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-form-textarea"
              placeholder="Size nasıl yardımcı olabiliriz?"
              rows="4"
              required
            ></textarea>
          </div>
          {status === 'sent' ? (
            <button type="button" className="contact-form-btn-submit-success border-none">
              <span className="material-symbols-outlined contact-form-btn-icon">check_circle</span>
              Mesajınız Gönderildi!
            </button>
          ) : (
            <button type="submit" disabled={status === 'sending'} className="contact-form-btn-submit">
              <span className="material-symbols-outlined contact-form-btn-icon">send</span>
              {status === 'sending' ? "Gönderiliyor..." : "Mesaj Gönder"}
            </button>
          )}
        </form>
      </section>

      <div className="contact-info-list">
        <a className="contact-info-card-link" href="tel:08502524000">
          <div className="contact-info-icon-box-primary">
            <span className="material-symbols-outlined contact-info-icon">call</span>
          </div>
          <div className="contact-info-text-box">
            <p className="contact-info-label">Müşteri Destek Hattı</p>
            <p className="contact-info-value">0850 252 40 00</p>
          </div>
        </a>

        <div className="contact-info-card">
          <div className="contact-info-icon-box-tertiary">
            <span className="material-symbols-outlined contact-info-icon">mail</span>
          </div>
          <div className="contact-info-text-box">
            <p className="contact-info-label">E-posta ile Destek</p>
            <p className="contact-info-value">destek@kineticretail.com</p>
          </div>
        </div>
      </div>

      <section className="contact-map-section">
        <div className="contact-map-header">
          <h3 className="contact-map-title">Genel Merkez Ofisimiz</h3>
          <button className="contact-map-view-btn">Tümünü Gör</button>
        </div>
        <div className="contact-map-card">
          <div className="contact-map-img" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwa2rxV0NpVfHTFyy2Bm9y6rKPlhMBP0Ir1zYDipt6NTd1ICQpYD3v1FcDh4ycJw2h-nQ1mFMfByndNWmhJ2OP7wHXRPo-dicWNjRScFt-KyP1F9KVYuxaFURiwfBckkgSV4scJVYhj7xGSTKFXpQnbLsU74o0Y9xXZQu-mGash0MCm6TOPXxIuq06UJYRCqWW2mx0dS8QIWggfUeLml8G_0Ou4syJ9unwak94fNWWRWpaNEZHvMHhygZptxJDI4e5pydBwPLpA_k')" }}></div>
          <div className="contact-map-overlay">
            <div className="contact-map-overlay-text-box">
              <p className="contact-map-overlay-title">İstanbul Ofisi</p>
              <p className="contact-map-overlay-desc">Levent, Büyükdere Cd. No:1</p>
            </div>
            <button className="contact-map-directions-btn">
              <span className="material-symbols-outlined">directions</span>
            </button>
          </div>
        </div>
      </section>

      <section className="contact-social-section">
        <p className="contact-social-label">Bizi Sosyal Medyada Takip Edin</p>
        <div className="contact-social-row">
          <a className="contact-social-link decoration-none" href="#">
            <span className="material-symbols-outlined contact-social-icon">public</span>
          </a>
          <a className="contact-social-link decoration-none" href="#">
            <span className="material-symbols-outlined contact-social-icon">camera_alt</span>
          </a>
          <a className="contact-social-link decoration-none" href="#">
            <span className="material-symbols-outlined contact-social-icon">video_library</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
