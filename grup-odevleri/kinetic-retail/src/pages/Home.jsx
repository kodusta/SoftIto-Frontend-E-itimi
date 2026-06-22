import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Home = () => {
  const navigate = useNavigate();
  const { products, addToCart } = useApp();
  const [countdown, setCountdown] = useState({ hours: 8, minutes: 42, seconds: 19 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCountdown({
        hours: 23 - now.getHours(),
        minutes: 59 - now.getMinutes(),
        seconds: 59 - now.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.slice(0, 3);
  const recommendedProducts = products.slice(3, 7);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <main className="pt-14 pb-20">
      <div className="search-persistent-bar">
        <div className="search-input-container">
          <span className="material-symbols-outlined search-icon-spacing">search</span>
          <span className="search-placeholder-text">Ürün, marka veya kategori ara...</span>
        </div>
      </div>

      <section className="hero-carousel">
        <div className="hero-slider-track">
          <div className="hero-slide">
            <div className="hero-slide-bg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaOxSewA0JPuqSmRm6Yx6ir3Fg6b8cSEMaE8rN51EjazMkgbS8t9jcIWFqdbwTE9L_bibdoHW5eSOZmH9Jc9vVHWaVqL0hOj_XAyEYwlWmZAWGBbDfhFjWuXRSZQFQkOdTfOmaEIFt9fm7GXQTaYh1Dinp0L2FNcLQIG7mlwbA8COlkcdI4F2DXPi3qlbrXlE-VIW_NaxiyxsroA6C1WKHSV8u9d6E-2GpMofTCM47BwJpgc4e82bYDcm2kh8Dpeb2le9MXlm92b0')" }}></div>
          </div>
        </div>
        <div className="hero-dots-container">
          <div className="hero-dot-active"></div>
          <div className="hero-dot"></div>
          <div className="hero-dot"></div>
        </div>
      </section>

      <section className="categories-quick-list">
        <div className="categories-quick-track">
          <div onClick={() => navigate('/products?cat=electronics')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">devices</span>
            </div>
            <span className="quick-category-text">Elektronik</span>
          </div>

          <div onClick={() => navigate('/products?cat=fashion')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">apparel</span>
            </div>
            <span className="quick-category-text">Moda</span>
          </div>

          <div onClick={() => navigate('/products?cat=home')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">chair</span>
            </div>
            <span className="quick-category-text">Ev</span>
          </div>

          <div onClick={() => navigate('/products?cat=cosmetics')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">airware</span>
            </div>
            <span className="quick-category-text">Kozmetik</span>
          </div>

          <div onClick={() => navigate('/products?cat=sports')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">sports_soccer</span>
            </div>
            <span className="quick-category-text">Spor</span>
          </div>

          <div onClick={() => navigate('/products?cat=toys')} className="quick-category-card">
            <div className="quick-category-icon-box">
              <span className="material-symbols-outlined text-primary">toys</span>
            </div>
            <span className="quick-category-text">Oyuncak</span>
          </div>
        </div>
      </section>

      <section className="deals-section">
        <div className="deals-header">
          <div className="deals-title-box">
            <h2 className="deals-title">Günün Fırsatları</h2>
            <div className="deals-countdown">
              <span className="countdown-num">{formatNum(countdown.hours)}</span>:
              <span className="countdown-num">{formatNum(countdown.minutes)}</span>:
              <span className="countdown-num">{formatNum(countdown.seconds)}</span>
            </div>
          </div>
          <button onClick={() => navigate('/products')} className="deals-see-all-btn">
            Tümünü Gör <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="deals-scroll-row no-scrollbar">
          {dealProducts.map(p => (
            <div key={p.id} onClick={() => navigate(`/product/${p.id}`)} className="deal-card">
              <img className="deal-card-img" src={p.img} alt={p.name} />
              <p className="deal-card-title">{p.name}</p>
              <p className="deal-card-price">{p.price.toFixed(2)} TL</p>
              <div className="deal-progress-bar">
                <div className="deal-progress-fill" style={{ width: "65%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-section">
        <h2 className="recommended-title">Sizin İçin Seçtiklerimiz</h2>
        <div className="products-grid">
          {recommendedProducts.map(p => (
            <div key={p.id} className="product-card">
              <div onClick={() => navigate(`/product/${p.id}`)} className="product-img-box">
                <img className="product-img-element" src={p.img} alt={p.name} />
                <span className="product-badge-discount">Öne Çıkan</span>
              </div>
              <div className="product-info-box">
                <h3 onClick={() => navigate(`/product/${p.id}`)} className="product-title-text">{p.name}</h3>
                <div className="product-rating-row">
                  <span className="material-symbols-outlined product-rating-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="product-rating-text">{p.rating} ({p.reviews})</span>
                </div>
                <div className="product-action-wrapper">
                  <p className="product-price-text">{p.price.toLocaleString('tr-TR')} TL</p>
                  <button onClick={() => addToCart(p.id)} className="product-btn-add">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
