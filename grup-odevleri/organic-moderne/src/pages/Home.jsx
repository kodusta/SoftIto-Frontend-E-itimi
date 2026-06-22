import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const { products, addToCart } = useContext(CartContext);
  const featuredProducts = products.slice(0, 3);

  return (
    <div class="bauhaus-grid">
      <section class="hero-section">
        <div class="hero-grid">
          <div class="hero-text-col">
            <span class="hero-tag">KURULUŞ 1919 — WEIMAR & TOPRAK</span>
            <h1 class="hero-title">
              BİÇİM DOĞAYI<br /><span class="text-primary">TAKİP EDER</span>
            </h1>
            <p class="hero-desc">
              Mimari hassasiyet ile toprak verimliliğinin evliliği. Modern yaşam alanları ve organik bahçeler için tasarlanmış temel araçlar ve tohumlar.
            </p>
            <div class="hero-btn-group">
              <Link class="btn-primary" to="/urunler">
                Koleksiyonu İncele
              </Link>
              <Link class="btn-secondary" to="/hakkimizda">
                Hikayemiz
              </Link>
            </div>
          </div>
          
          <div class="hero-visual-col">
            <div class="hero-composition">
              <div class="comp-diamond"></div>
              <div class="comp-square"></div>
              <div class="comp-circle"></div>
              <div class="comp-accent"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-canvas">
        <div class="product-grid-section">
          <div class="section-header">
            <h2 class="section-title">Temel İhtiyaçlar</h2>
            <Link class="section-link" to="/urunler">Tümünü Gör</Link>
          </div>

          <div class="product-grid">
            {featuredProducts.map((product) => (
              <div class="product-card" key={product.id}>
                <div class="product-img-wrapper">
                  <img class="product-img" src={product.image} alt={product.name} />
                  <div class="product-badge">Yeni</div>
                </div>
                <div class="product-content">
                  <div class="product-info-block">
                    <div class="product-header-row">
                      <h3 class="product-title">{product.name}</h3>
                      <span class="product-price">{product.price} TL</span>
                    </div>
                    <p class="product-desc">{product.desc}</p>
                  </div>
                  <button class="product-btn" onClick={() => addToCart(product)}>
                    Sepete Ekle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="legacy-section">
        <div class="legacy-grid">
          <div class="legacy-content">
            <h2 class="hero-title text-background">BAUHAUS MİRASI</h2>
            <p class="legacy-desc">
              1919 yılında kurulan Bauhaus, sanat ve endüstri arasındaki sınırları yıkarak tasarımı kökten değiştirdi. Biz bu meşaleyi toprak ve bahçecilikle buluşturuyoruz.
            </p>
            <p class="legacy-desc">
              Ürünlerimiz sadece araç değildir; onlar yapısal dürüstlüğün ifadeleridir. Her çizgi bir amaca hizmet eder. Her tohum, sürdürülebilirlik için seçilmiştir.
            </p>
            <ul class="legacy-list">
              <li class="legacy-item">
                <div class="legacy-square"></div>
                <span class="legacy-label">Süslemeye Karşı Rasyonalite</span>
              </li>
              <li class="legacy-item">
                <div class="legacy-square"></div>
                <span class="legacy-label">Doğal Malzeme Dürüstlüğü</span>
              </li>
              <li class="legacy-item">
                <div class="legacy-square"></div>
                <span class="legacy-label">Herkes İçin Ekolojik Tasarım</span>
              </li>
            </ul>
            <Link class="legacy-link" to="/hakkimizda">Arşivi Oku</Link>
          </div>
          <div class="legacy-image-wrapper">
            <div class="legacy-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800')" }}></div>
          </div>
        </div>
      </section>

      <section class="newsletter-section">
        <div class="newsletter-container">
          <div>
            <h3 class="newsletter-title">Kolektife Katılın</h3>
            <p class="newsletter-desc">Özel sürümler, ekolojik ipuçları ve yeni ürün duyuruları için abone olun.</p>
          </div>
          <form class="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Kolektife kaydınız yapıldı.'); }}>
            <input class="newsletter-input" placeholder="E-POSTA ADRESİNİZ" type="email" required />
            <button class="newsletter-btn" type="submit">Abone Ol</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
