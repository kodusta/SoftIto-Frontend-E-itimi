import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Konut Mimarisi',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Talebiniz başarıyla gönderildi.');
    setFormData({
      name: '',
      email: '',
      projectType: 'Konut Mimarisi',
      message: ''
    });
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="contact-title-col">
          <h1 className="hero-title">Aralarındaki alanı tanımlayalım.</h1>
          <p className="hero-desc">
            Her anıtsal yapı bir sohbetle başlar. Sizi vizyonunuzu paylaşmaya ve mimari hassasiyetin insan sezgileriyle nasıl buluştuğunu keşfetmeye davet ediyoruz.
          </p>
        </div>
        <div className="contact-decor-col">
          <div className="contact-decor-line-h"></div>
          <div className="contact-decor-line-v"></div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="contact-info-col">
          <div>
            <h3 className="section-label">STÜDYO ADRESİ</h3>
            <address className="not-italic font-body-lg text-body-lg text-on-background leading-relaxed">
              88 Brutalist Plaza<br />
              Kat 12, Ofis A<br />
              New York, NY 10013
            </address>
          </div>
          <div>
            <h3 className="section-label">İLETİŞİM</h3>
            <p className="font-body-lg text-body-lg text-on-background">
              hello@arcline.studio<br />
              +1 (212) 555-0198
            </p>
          </div>
          <div>
            <h3 className="section-label">SOSYAL ARŞİV</h3>
            <div className="footer-nav-links">
              <a href="#" className="footer-nav-link">Instagram — @arcline_arch</a>
              <a href="#" className="footer-nav-link">LinkedIn — Arc & Line Studio</a>
              <a href="#" className="footer-nav-link">Vimeo — Proje Arşivi</a>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group-row">
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
            </div>
            <div className="form-group">
              <label className="form-label">PROJE TİPİ</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="form-select-underline"
              >
                <option value="Konut Mimarisi">Konut Mimarisi</option>
                <option value="Ticari Dönüşüm">Ticari Dönüşüm</option>
                <option value="Minimalist Kürasyon">Minimalist Kürasyon</option>
                <option value="Danışmanlık">Danışmanlık</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">MESAJINIZ</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea-underline"
                placeholder="Mekansal hedefinizi veya vizyonunuzu tanımlayın..."
                rows="4"
                required
              ></textarea>
            </div>
            <div className="pt-6">
              <button type="submit" className="form-submit-btn">
                TALEP GÖNDER
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="map-section">
        <div className="map-container">
          <div className="map-header">
            <h2 className="philosophy-title">Küresel Varlık.</h2>
            <span className="section-label">NY KURULUŞ / 2024</span>
          </div>
          <div className="map-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuhxVOYKCV2y6NZiZKhKXMNinphwyjl_zywu1yTc19awfcPC9mkPE1qHmf4i5dGkyC-DWn_KjGfht57NqBaK8tJlj3r-QqjOBgj73NQ_OHeMxg3jWqvIyEFw7Ho1Rcr9QboddFZ6DPrsR4QgXQNRNg8PZWY7MuKtSALe0wE-6Jbq-3pwxYAOdTgOT-Zr_ni9Qod4XOUN6ZYf3Tz2-e7XAM7vvI_jGqjjsCqaaOTFaBhSgsvQPD4wBe9qHIJrZdOj50X42s3t56WquQ" alt="New York Haritası" className="arch-image-zoom grayscale" />
            <div className="map-marker">
              <div className="map-marker-pin"></div>
              <div className="map-marker-card">
                <p className="section-label">ANA STÜDYO</p>
                <p className="font-body-md whitespace-nowrap">88 Brutalist Plaza, NY</p>
              </div>
            </div>
            <div className="map-overlay-card">
              <p className="philosophy-quote">
                "Stüdyomuz iş birliği için tasarlanmış açık bir alandır. Ziyaretçiler randevu ile kabul edilir."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="material-decor-section">
        <div className="material-decor-img-col">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHBGu7tH44OJS0X9P9j6-hzV9RcHLBx9n6DQwXWi0dbO43pL3SYM7Z_qZm6DGjauUbGoK2_c1u8NFS-eMAg7N-VXkvn3DMDXza7b0OwXUCvf4jBuJjggxnl6S2JX6qWL1CMZhuLcuH0AQ3wCjdhneZALWiC86Y5h69526qNlN_5t8wHBC4Eao588Og-V-0N15KHVDiXa093vv3MAuo1R36vrGbzeOyCJTQeswRBzLJM16SUpPh1jOXdPbeU6hLrxBNbGRoR8TEwM-k" alt="Malzemeler" className="arch-image-zoom" />
        </div>
        <div className="material-decor-text-col">
          <span className="material-symbols-outlined material-decor-icon">square_foot</span>
          <h3 className="material-decor-title">Her detayda hassasiyet.</h3>
          <p className="material-decor-desc">
            Felsefemiz hiçbir detayın önemsiz olmadığını söyler. İlk talepten nihai yapısal teslime kadar, Arc & Line mirasını tanımlayan bir mükemmellik standardını koruyoruz.
          </p>
        </div>
      </section>
    </main>
  );
}
