import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div class="bauhaus-grid">
      <header class="contact-header">
        <h1 class="contact-title">BİRLİKTE YENİ BİR <span class="text-primary">DENGE</span> KURALIM</h1>
        <p class="contact-desc">
          Bauhaus Tarım ekolojik danışmanlık, atölyeler ve kurumsal topluluk projeleri için bizimle iletişime geçin.
        </p>
      </header>

      <section class="contact-grid-section">
        <aside class="contact-info-col">
          <div class="space-y-xl">
            <div>
              <span class="hero-tag">GENEL MERKEZ</span>
              <h2 class="contact-info-address">WEIMAR BAHÇE</h2>
              <div class="contact-info-details">
                <p>Am Horn 61, 99425</p>
                <p>Weimar / Almanya</p>
              </div>
            </div>
            
            <div class="contact-info-block">
              <span class="contact-info-title">YAZIŞMA</span>
              <div class="contact-info-details">
                <p>iletisim@bauhaustarim.com</p>
                <p>+49 3643 580</p>
              </div>
            </div>

            <div class="contact-info-block">
              <span class="contact-info-title">ÇALIŞMA SAATLERİ</span>
              <div class="contact-info-details">
                <p>PAZARTESİ - CUMA: 09:00 - 18:00</p>
                <p>CUMARTESİ: 10:00 - 15:00</p>
              </div>
            </div>
          </div>
        </aside>

        <article class="contact-form-col">
          <div class="contact-form-wrapper">
            <h2 class="contact-form-title">İLETİŞİM FORMU</h2>
            {submitted ? (
              <div class="border-2 border-primary p-md bg-surface-container-low mb-lg">
                <h3 class="about-detail-title text-primary">Mesajınız İletildi</h3>
                <p class="about-detail-desc">Ekolojik rasyonellik çerçevesinde en kısa sürede geri dönüş yapacağız.</p>
              </div>
            ) : null}
            
            <form class="contact-form" onSubmit={handleSubmit}>
              <div class="form-group">
                <label class="form-label" htmlFor="name">Adınız Soyadınız *</label>
                <input 
                  class="form-input" 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="AD SOYAD"
                />
              </div>

              <div class="form-group">
                <label class="form-label" htmlFor="email">E-posta Adresiniz *</label>
                <input 
                  class="form-input" 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="EMAIL"
                />
              </div>

              <div class="form-group">
                <label class="form-label" htmlFor="subject">Konu</label>
                <input 
                  class="form-input" 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="KONU"
                />
              </div>

              <div class="form-group">
                <label class="form-label" htmlFor="message">Mesajınız *</label>
                <textarea 
                  class="form-input min-h-[100px]" 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="MESAJINIZ"
                />
              </div>

              <button class="btn-primary w-full" type="submit">Gönder</button>
            </form>
          </div>
        </article>
      </section>

      <section class="contact-map-section">
        <div class="contact-map-marker top-1/3 left-1/2">
          <div class="contact-map-marker-dot"></div>
        </div>
        <img class="contact-map-img" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Harita" />
      </section>

      <section class="contact-bento-grid">
        <div class="contact-bento-card">
          <span class="contact-bento-tag">DESSAU LABORATUVAR</span>
          <p class="contact-bento-text">Biyo-dinamik kompost geliştirme ve toprak test merkezi.</p>
          <div class="contact-bento-bar"></div>
        </div>
        <div class="contact-bento-card contact-bento-card-bg1">
          <span class="contact-bento-tag-bg1">BERLİN FİDANLIK</span>
          <p class="contact-bento-text-bg1">Ata tohumlarının aklimatizasyon ve yetiştirme serası.</p>
          <div class="contact-bento-bar-bg1"></div>
        </div>
        <div class="contact-bento-card contact-bento-card-bg2">
          <span class="contact-bento-tag-bg2">TOKYO SHOWROOM</span>
          <p class="contact-bento-text-bg2">Modernist tarım aletleri ve saksı tasarım galerisi.</p>
          <div class="contact-bento-bar-bg2"></div>
        </div>
        <div class="contact-bento-card-edge">
          <span class="contact-bento-tag-edge">NEW YORK DAĞITIM</span>
          <p class="contact-bento-text-edge">Doğu yakası kentsel tarım ve lojistik koordinasyon ofisi.</p>
          <div class="contact-bento-bar-edge"></div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
