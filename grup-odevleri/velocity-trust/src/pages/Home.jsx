import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Home = () => {
  const navigate = useNavigate();
  const { searchParams, setSearchParams } = useApp();

  const handleSearchChange = (field, value) => {
    setSearchParams(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFindVehicles = () => {
    navigate('/cars');
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-background-wrapper">
          <div className="hero-background-image"></div>
          <div className="hero-background-gradient"></div>
        </div>

        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-title">
              SEYAHATİN <span className="text-primary-container">GELECEĞİNİ</span> DİREKSİYONA GEÇİRİN.
            </h2>
            <p className="hero-subtitle">
              Lüks araçlar, kesintisiz rezervasyon ve benzersiz güvenilirlik. VELOCITY ile yolun keyfini çıkarın.
            </p>
            <div className="hero-actions">
              <Link to="/cars" className="hero-primary-btn">FİLOMUZU KEŞFEDİN</Link>
              <Link to="/about" className="hero-secondary-btn">DAHA FAZLA BİLGİ</Link>
            </div>
          </div>

          <div className="hero-search-widget">
            <div className="search-widget-header">
              <h3 className="search-widget-title">Yolculuğunuzu Planlayın</h3>
              <span className="search-widget-badge">
                <span className="material-symbols-outlined">bolt</span>
                <span>Anında Onay</span>
              </span>
            </div>

            <div className="search-widget-form">
              <div className="search-input-group">
                <label className="search-label">Alış Noktası</label>
                <div className="search-input-wrapper">
                  <span className="material-symbols-outlined">location_on</span>
                  <input
                    type="text"
                    value={searchParams.pickupLocation}
                    onChange={(e) => handleSearchChange('pickupLocation', e.target.value)}
                    placeholder="Şehir veya havalimanı girin"
                    className="search-text-input"
                  />
                </div>
              </div>

              <div className="search-grid-two">
                <div className="search-input-group">
                  <label className="search-label">Alış Tarihi</label>
                  <div className="search-input-wrapper">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <input
                      type="date"
                      value={searchParams.pickupDate}
                      onChange={(e) => handleSearchChange('pickupDate', e.target.value)}
                      className="search-date-input"
                    />
                  </div>
                </div>

                <div className="search-input-group">
                  <label className="search-label">İade Tarihi</label>
                  <div className="search-input-wrapper">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <input
                      type="date"
                      value={searchParams.returnDate}
                      onChange={(e) => handleSearchChange('returnDate', e.target.value)}
                      className="search-date-input"
                    />
                  </div>
                </div>
              </div>

              <div className="search-grid-two">
                <div className="search-input-group">
                  <label className="search-label">Alış Saati</label>
                  <select
                    value={searchParams.pickupTime}
                    onChange={(e) => handleSearchChange('pickupTime', e.target.value)}
                    className="search-select-input"
                  >
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>

                <div className="search-input-group">
                  <label className="search-label">İade Saati</label>
                  <select
                    value={searchParams.returnTime}
                    onChange={(e) => handleSearchChange('returnTime', e.target.value)}
                    className="search-select-input"
                  >
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
              </div>

              <button type="button" onClick={handleFindVehicles} className="search-submit-btn">
                UYGUN ARAÇLARI BUL
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="categories-header">
          <div className="categories-titles">
            <span className="section-tag">KATEGORİLER</span>
            <h2 className="section-title">Özel Koleksiyonlar</h2>
          </div>
          <Link to="/cars" className="view-all-link">
            <span>Tüm Filoyu İncele</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>

        <div className="categories-grid">
          <div className="category-card" onClick={handleFindVehicles}>
            <div className="category-img bg-suvs"></div>
            <div className="category-overlay"></div>
            <div className="category-content">
              <h4 className="category-name">Lüks SUV</h4>
              <p className="category-price">4.200 TL'den başlayan fiyatlarla</p>
            </div>
          </div>

          <div className="category-card" onClick={handleFindVehicles}>
            <div className="category-img bg-electric"></div>
            <div className="category-overlay"></div>
            <div className="category-content">
              <h4 className="category-name">Elektrikli Gelecek</h4>
              <p className="category-price">3.950 TL'den başlayan fiyatlarla</p>
            </div>
          </div>

          <div className="category-card" onClick={handleFindVehicles}>
            <div className="category-img bg-sedans"></div>
            <div className="category-overlay"></div>
            <div className="category-content">
              <h4 className="category-name">Business Elite</h4>
              <p className="category-price">3.800 TL'den başlayan fiyatlarla</p>
            </div>
          </div>

          <div className="category-card" onClick={handleFindVehicles}>
            <div className="category-img bg-sports"></div>
            <div className="category-overlay"></div>
            <div className="category-content">
              <h4 className="category-name">Egzotik Spor</h4>
              <p className="category-price">5.800 TL'den başlayan fiyatlarla</p>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-section">
        <div className="promo-grid">
          <div className="promo-large-card">
            <div className="promo-large-content">
              <span className="promo-badge">Sınırlı Teklif</span>
              <h2 className="promo-large-title">Haftalık Kiralamalarda %20 İndirim</h2>
              <p className="promo-large-desc">Bu yaz premium filomuzda 7 gün ve üzeri kiralamalarınızda özel indirimlerin tadını çıkarın.</p>
              <button onClick={handleFindVehicles} className="promo-large-btn">İNDİRİMİ AL</button>
            </div>
            <div className="promo-large-bg-image"></div>
          </div>

          <div className="promo-small-cards">
            <div className="promo-small-card bg-white">
              <div className="promo-small-header">
                <span className="promo-icon-red">loyalty</span>
                <span className="promo-small-tag">SADAKAT ÖDÜLLERİ</span>
              </div>
              <div>
                <h4 className="promo-small-title">Sürdükçe Kazanın</h4>
                <p className="promo-small-desc">Velocity Rewards'a katılın ve harcadığınız her 10 TL için 1 sadakat puanı kazanın.</p>
              </div>
            </div>

            <div className="promo-small-card bg-red">
              <div className="promo-small-header">
                <span className="promo-icon-white">verified_user</span>
                <span className="promo-small-tag-light">FULL SİGORTA</span>
              </div>
              <div>
                <h4 className="promo-small-title-light">Sıfır Muafiyet</h4>
                <p className="promo-small-desc-light">Yola gönül rahatlığıyla çıkın. Kapsamlı yol ve hasar güvencesi rezervasyonunuza dahildir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-title-group">
          <span className="section-tag">YORUMLAR</span>
          <h2 className="section-title">Sürücülerimiz Ne Diyor?</h2>
        </div>

        <div className="testimonials-list">
          <div className="testimonial-card">
            <div className="stars-group">
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
            </div>
            <p className="testimonial-quote">"Havalimanında kesintisiz teslimat ve aracın mükemmel temizliği tüm beklentilerimi aştı. VELOCITY artık iş seyahatlerimin tek adresi."</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-1"></div>
              <div>
                <h5 className="testimonial-username">Murat Kara</h5>
                <p className="testimonial-user-title">Yönetici Ortak, NexGen Teknoloji</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars-group">
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
            </div>
            <p className="testimonial-quote">"İnanılmaz hizmet! Mobil uygulamaları sayesinde kiralama süremi yoldayken uzatmak çok kolaydı. Tesla Model Y aile seyahatimiz için harikaydı."</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-2"></div>
              <div>
                <h5 className="testimonial-username">Aylin Yılmaz</h5>
                <p className="testimonial-user-title">Seyahat Fotoğrafçısı</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars-group">
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star</span>
              <span className="material-symbols-outlined star-filled">star_half</span>
            </div>
            <p className="testimonial-quote">"Verimli, hızlı ve son derece şeffaf fiyatlandırma yapıyorlar. Birçok acenteden araç kiraladım ancak bu düzeyde bir profesyonellik görmedim."</p>
            <div className="testimonial-user">
              <div className="testimonial-avatar avatar-3"></div>
              <div>
                <h5 className="testimonial-username">Can Demir</h5>
                <p className="testimonial-user-title">Pazarlama Direktörü</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
