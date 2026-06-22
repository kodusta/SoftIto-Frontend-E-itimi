import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      alert('Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.');
    }, 500);
  };

  return (
    <main className="contact-layout">
      <div className="contact-grid">
        <div className="contact-form-card">
          <h2 className="contact-form-title">Mesaj Gönderin</h2>
          <p className="contact-form-desc">Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
          <form onSubmit={handleSubmit} className="space-y-md">
            <div className="form-field">
              <label className="form-label">Ad Soyad *</label>
              <input className="form-input" type="text" required />
            </div>
            <div className="form-field">
              <label className="form-label">E-posta Adresi *</label>
              <input className="form-input" type="email" required />
            </div>
            <div className="form-field">
              <label className="form-label">Konu</label>
              <input className="form-input" type="text" />
            </div>
            <div className="form-field">
              <label className="form-label">Mesajınız *</label>
              <textarea className="contact-textarea" required></textarea>
            </div>
            <button className="contact-submit-btn" type="submit">Mesajı Gönder</button>
          </form>
        </div>

        <div className="contact-info-card">
          <h2 className="contact-info-title">İletişim Bilgileri</h2>
          <p className="contact-info-desc">
            Destek ekibimiz sorularınızı yanıtlamak veya platformumuzla ilgili geri bildirimlerinizi almak için hazır.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="contact-method-icon-wrapper">
                <span className="material-symbols-outlined contact-method-icon">location_on</span>
              </div>
              <div className="contact-method-text-group">
                <span className="contact-method-label">Genel Merkez</span>
                <span className="contact-method-val">Barbaros Bulvarı No:123 Beşiktaş, İstanbul</span>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-method-icon-wrapper">
                <span className="material-symbols-outlined contact-method-icon">call</span>
              </div>
              <div className="contact-method-text-group">
                <span className="contact-method-label">Telefon</span>
                <span className="contact-method-val">+90 212 555 1234</span>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-method-icon-wrapper">
                <span className="material-symbols-outlined contact-method-icon">mail</span>
              </div>
              <div className="contact-method-text-group">
                <span className="contact-method-label">E-posta</span>
                <span className="contact-method-val">destek@edustream.com</span>
              </div>
            </div>
          </div>

          <div className="contact-map-wrapper">
            <iframe 
              title="Harita"
              className="contact-map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9712177309995!2d29.006240212046422!3d41.0427387712258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a23b378db1%3A0x6b80153ef69b3252!2sBarbaros%20Blv.%2C%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
