import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Rezervasyon Talebi',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Lütfen zorunlu alanları doldurunuz.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Rezervasyon Talebi',
        message: ''
      });
      alert('Mesajınız başarıyla gönderildi!');
    }, 1000);
  };

  return (
    <main>
      <section className="contact-hero">
        <div 
          className="price-breakdown-img absolute inset-0" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK2_-bmPk5Nhe0HrEzZiVG59XOoGqSuWawwf9FI40IcRJ0Yq_mrR7dLrS77IKeR4CihlD0aky4Vjz2REVtoQicaBvT2zfenftP9y8MBD1pheSPjLij1bI69S94rz35F7RU688Y4qdQ8OHESUguBDFpbL0yyDHhgWeKkUNvSKb3W5vBDEDMcz9Im1sGiE2SoiiMWTRswUGQqP8dh0RftNySGgNZU4_qdSsNkaELow9dOhGbMrD_mbtDZiqEAOOHfs_bcyQ4ZV5jxw4I')` }}
        />
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className="max-w-2xl">
            <h2 className="font-headline-xl text-snow-white">Size Nasıl Yardımcı Olabiliriz?</h2>
            <p className="font-body-lg text-snow-white">LuxeStay ekibi, seyahatinizin kusursuz geçmesi için 7/24 hizmetinizdedir.</p>
          </div>
        </div>
      </section>

      <section className="contact-main-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <div className="contact-form-box">
            <h3 className="font-headline-lg text-midnight-navy">Bize Yazın</h3>
            <p className="font-body-md text-slate-gray">Aşağıdaki formu doldurarak ekibimize mesaj gönderebilirsiniz. En geç 24 saat içinde dönüş yapılacaktır.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-row-2">
                <div className="form-input-group">
                  <label className="form-label">Adınız Soyadınız *</label>
                  <input 
                    className="form-input" 
                    placeholder="John Doe" 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-input-group">
                  <label className="form-label">E-posta Adresiniz *</label>
                  <input 
                    className="form-input" 
                    placeholder="john@example.com" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-input-group">
                <label className="form-label">Konu</label>
                <select 
                  className="form-input"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="Rezervasyon Talebi">Rezervasyon Talebi</option>
                  <option value="Özel Etkinlik Organizasyonu">Özel Etkinlik Organizasyonu</option>
                  <option value="Özel İstekler">Özel İstekler</option>
                  <option value="Geri Bildirim & Şikayet">Geri Bildirim & Şikayet</option>
                </select>
              </div>
              <div className="form-input-group">
                <label className="form-label">Mesajınız *</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Size nasıl yardımcı olabiliriz?" 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button 
                className="bg-ocean-blue text-snow-white font-label-md py-4 px-10 rounded-lg hover:bg-primary-container transition-all active:scale-95 shadow-sm cursor-pointer" 
                type="submit"
                disabled={submitted}
              >
                {submitted ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-gutter">
            <div className="contact-info-box">
              <h3 className="font-headline-md text-headline-md mb-6">Doğrudan İletişim</h3>
              <div className="space-y-6">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="material-symbols-outlined text-ocean-blue">call</span>
                  </div>
                  <div>
                    <p className="font-label-md text-snow-white">Telefon</p>
                    <p className="font-body-lg font-semibold">+1 (800) LUXE-STAY</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="material-symbols-outlined text-ocean-blue">mail</span>
                  </div>
                  <div>
                    <p className="font-label-md text-snow-white">E-posta</p>
                    <p className="font-body-lg font-semibold">concierge@luxestay.com</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <span className="material-symbols-outlined text-ocean-blue">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-md text-snow-white">Merkez Ofis</p>
                    <p className="font-body-lg font-semibold">742 Evergreen Terrace, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-map-wrapper group">
              <img className="contact-map-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRUFERuqtHiWp9PXSggic23W22gQ5D_Wjbom-J-Q6UsVSen9RgGUXX8fIAJhfyHwzpTL0XbyTUMW90RnxdAikRbfIJpYETU_9Yk3Dc0mdl7W9ve3wHD3ctuVuQO35c2_NhYAHBMs4UrXMHHYx0AxtiWQsqjSieq3HP053h4ysbJRTgTZkuDGZ2aoP7ZKiV45NysH4cT7VbwiGHgKWGv8X-kWgDZP1DW4oJCkWfar5TIXWNQfpRJuZcCzObGOBoxPS7BCF3AOiiOoPe" alt="Harita" />
              <div className="contact-map-overlay">
                <div>
                  <p className="font-label-md text-midnight-navy font-bold">LuxeStay Ofisi</p>
                  <p className="font-body-sm text-slate-gray">Misafirlerimiz için 24/7 açık</p>
                </div>
                <button 
                  onClick={() => alert('Yol tarifi simülasyonu başlatıldı.')}
                  className="contact-map-btn"
                >
                  <span className="material-symbols-outlined block">directions</span>
                </button>
              </div>
            </div>

            <div className="contact-social-grid">
              <a className="contact-social-btn" href="#">
                <span className="material-symbols-outlined text-ocean-blue">public</span>
                <span className="font-label-md">Facebook</span>
              </a>
              <a className="contact-social-btn" href="#">
                <span className="material-symbols-outlined text-ocean-blue">photo_camera</span>
                <span className="font-label-md">Instagram</span>
              </a>
              <a className="contact-social-btn" href="#">
                <span className="material-symbols-outlined text-ocean-blue">share</span>
                <span className="font-label-md">Twitter</span>
              </a>
              <a className="contact-social-btn" href="#">
                <span className="material-symbols-outlined text-ocean-blue">business</span>
                <span className="font-label-md">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <div className="max-w-xl mx-auto space-y-6">
            <h3 className="font-headline-lg text-midnight-navy">Gelişmelerden Haberdar Olun</h3>
            <p className="font-body-md text-slate-gray">Özel indirimler, yeni destinasyonlar ve üyelere özel fırsatlar için bültenimize kaydolun.</p>
            <div className="contact-newsletter-row">
              <input 
                className="contact-newsletter-input" 
                placeholder="E-posta adresiniz" 
                type="email"
              />
              <button 
                onClick={() => alert('Bültene başarıyla kaydoldunuz!')}
                className="contact-newsletter-btn"
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
