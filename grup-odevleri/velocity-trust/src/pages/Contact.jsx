import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Genel Destek',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [activeOffice, setActiveOffice] = useState('London');

  const handleInputChange = (field, value) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }

    setStatus('processing');
    
    setTimeout(() => {
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: 'Genel Destek',
        message: ''
      });

      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-banner">
          <div className="contact-hero-bg"></div>
          <div className="contact-hero-content">
            <h2 className="contact-hero-title">Bizimle İletişime Geçin</h2>
            <p className="contact-hero-desc">Seyahat ihtiyaçlarınızda premium destek ekibimiz yardıma hazır. Bize dilediğiniz an ulaşabilirsiniz.</p>
          </div>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-form-card">
          <h3 className="contact-card-title">
            <span className="material-symbols-outlined text-primary">send</span>
            <span>Bize Mesaj Gönderin</span>
          </h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="input-group">
                <label className="form-label">Adınız Soyadınız</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Örn. Can Demir"
                  className="form-input"
                  disabled={status === 'processing'}
                />
              </div>
              <div className="input-group">
                <label className="form-label">E-posta Adresiniz</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Örn. can@example.com"
                  className="form-input"
                  disabled={status === 'processing'}
                />
              </div>
            </div>

            <div className="input-group">
              <label className="form-label">Konu</label>
              <select
                value={formState.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="form-select"
                disabled={status === 'processing'}
              >
                <option value="Genel Destek">Genel Destek</option>
                <option value="Kurumsal Kiralama">Kurumsal Kiralama</option>
                <option value="Teknik Yardım">Teknik Yardım</option>
                <option value="Faturalandırma">Faturalandırma</option>
              </select>
            </div>

            <div className="input-group">
              <label className="form-label">Mesajınız</label>
              <textarea
                value={formState.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Size nasıl yardımcı olabiliriz?"
                rows="5"
                className="form-textarea"
                disabled={status === 'processing'}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`form-submit-btn ${status === 'success' ? 'bg-success' : ''}`}
              disabled={status === 'processing' || status === 'success'}
            >
              {status === 'idle' && 'Mesajı Gönder'}
              {status === 'processing' && 'İşleniyor...'}
              {status === 'success' && 'Mesaj Gönderildi!'}
            </button>
          </form>
        </div>

        <div className="contact-info-sidebar">
          <div className="support-phone-card">
            <h4 className="support-title">Müşteri Destek</h4>
            <div className="support-info-list">
              <div className="support-info-item">
                <span className="material-symbols-outlined info-icon">call</span>
                <div>
                  <p className="info-label">7/24 Telefon Destek</p>
                  <p className="info-val">+1 (800) VELOCITY</p>
                </div>
              </div>
              <div className="support-info-item mt-6">
                <span className="material-symbols-outlined info-icon">mail</span>
                <div>
                  <p className="info-label">E-posta Adresi</p>
                  <p className="info-val">priority@velocity-rentals.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-connect-card">
            <h4 className="support-title">Sosyal Medya</h4>
            <div className="social-links-row">
              <a href="#" className="social-btn">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className="social-btn">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="social-btn">
                <span className="material-symbols-outlined">groups</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="map-header">
          <div>
            <h3 className="map-title">Küresel Merkez Ofislerimiz</h3>
            <p className="map-desc">Finans bölgelerinin kalbindeki merkezlerimizi ziyaret edebilirsiniz.</p>
          </div>
          <div className="map-tabs">
            <button
              onClick={() => setActiveOffice('NewYork')}
              className={`map-tab-btn ${activeOffice === 'NewYork' ? 'active' : ''}`}
            >
              New York
            </button>
            <button
              onClick={() => setActiveOffice('London')}
              className={`map-tab-btn ${activeOffice === 'London' ? 'active' : ''}`}
            >
              Londra
            </button>
            <button
              onClick={() => setActiveOffice('Tokyo')}
              className={`map-tab-btn ${activeOffice === 'Tokyo' ? 'active' : ''}`}
            >
              Tokyo
            </button>
          </div>
        </div>

        <div className="map-visual-grid">
          <div className="map-visual-box">
            <div className="map-visual-image"></div>
            <div className="map-details-card">
              <p className="map-card-tag">Merkez Ofis</p>
              {activeOffice === 'London' && (
                <div>
                  <h4 className="map-office-name">Canary Wharf, Londra</h4>
                  <p className="map-office-address">One Canada Square, Floor 42<br />E14 5AB, Birleşik Krallık</p>
                </div>
              )}
              {activeOffice === 'NewYork' && (
                <div>
                  <h4 className="map-office-name">Manhattan, New York</h4>
                  <p className="map-office-address">Wall Street, No 120, Floor 18<br />NY 10005, Amerika Birleşik Devletleri</p>
                </div>
              )}
              {activeOffice === 'Tokyo' && (
                <div>
                  <h4 className="map-office-name">Shinjuku, Tokyo</h4>
                  <p className="map-office-address">Nishi-Shinjuku 2-Chome, Floor 32<br />163-8001, Japonya</p>
                </div>
              )}
            </div>
          </div>

          <div className="map-extra-info">
            <div className="extra-info-card">
              <div className="extra-icon-box bg-red">
                <span className="material-symbols-outlined text-white">commute</span>
              </div>
              <h5 className="extra-card-title">Kolay Erişim</h5>
              <p className="extra-card-text">Metro, tren ve havalimanı transfer noktalarına yürüyüş mesafesinde konumlanmış ofisler.</p>
            </div>
            <div className="extra-info-card mt-6">
              <div className="extra-icon-box bg-navy">
                <span className="material-symbols-outlined text-white">calendar_today</span>
              </div>
              <h5 className="extra-card-title">Ziyaret Saatleri</h5>
              <p className="extra-card-text">Hafta içi: 09:00 – 18:00<br />Hafta sonu: 10:00 – 15:00 (Yerel Saat)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-cta-section">
        <h3 className="faq-title">Hızlı Çözüm Mü Arıyorsunuz?</h3>
        <p className="faq-desc">Kiralama, sigorta ve filo kuralları ile ilgili en sık sorulan soruların yanıtlarını rehberimizde bulabilirsiniz.</p>
        <a href="#" className="faq-link">
          <span>Sıkça Sorulan Soruları Gör</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </section>
    </div>
  );
};

export default Contact;
