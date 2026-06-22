import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="main-content">
      <section className="hero-section">
        <div className="hero-bg-container">
          <div 
            className="hero-bg-image" 
            style={{ 
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdyaXSv4DZ9Ze3Pgk-379Eved8rrpD9yCjlvHHumjCujPhFRyUNYIUx8e2vbSPUd3ypmlsaZmL5Xb-NoWuysvsw9nNYG2GttGh5IQPPHItjQ71irF7knP1YSZGP6RQ08SFN_pVWJ6dE8a1ocd0bpLkhBaWuH3Lbo9sAlQTunVkiemQIrGx2hwDhuzUhS8_wj6ZZQCRceC-vuj8eMPodNYc0lioy-ZxTlyKBWZoTdfE_dY9VcC_nr6w2uMQe4c0qGKXDYRHQKHWpTU')` 
            }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-content">
            <span className="hero-tagline">PERFORMANSINI YÜKSELT</span>
            <h1 className="hero-title text-gradient">
              LIMITLERINI<br />ZORLA
            </h1>
            <p className="hero-description">
              Modern ekipmanlar ve uzman eğitmenlerle fiziksel sınırlarını aşmaya hazır mısın? Forge Elite ile potansiyelini keşfet.
            </p>
            <div className="hero-buttons">
              <Link to="/booking" className="hero-btn-primary">
                Hemen Başla
              </Link>
              <Link to="/services" className="hero-btn-secondary">
                Programları İncele
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="section-header-container">
          <div>
            <h2 className="section-title">Hizmetlerimiz</h2>
            <p className="section-subtitle">Size özel çözümlerle hedeflerinize ulaşın.</p>
          </div>
          <Link to="/services" className="section-link">TÜMÜNÜ GÖR</Link>
        </div>

        <div className="bento-grid">
          <div className="bento-card-large">
            <div 
              className="bento-bg-image" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAupjmKH8Pvq4GFZ2A_iUjoVNktvITllZIdPKhhMpvNM5SXg1h1JapeSEpt7Ts2QXfOojP62l7bhZfUoL1V-qxqdNOHwzG_3d3RDXQJmlfLy73V6IcLh94oAZyYHktmhG5k_28rc7IZJbQk3vnN2I8h5hrNeJomZRoAIlNV7a199EE-F32p32Pv0MgtWDDF7rjv-dadJpCESA51pVg9pK44gYCmacwxOGyks2y1rejNBEB5omwFiQKF0WCcaIDJO85nr2PRX3eg1Gc')` }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-badge">POPÜLER</span>
              <h3 className="bento-card-title">Personal Training</h3>
              <p className="bento-card-desc">Birebir takip ve sana özel hazırlanmış antrenman programları.</p>
            </div>
          </div>

          <div className="bento-card-wrapper">
            <div 
              className="bento-bg-image" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA80XwnsAFOxj1mUNuIH_dNp6i5_BnBqwKW7hU2Vablyf9R0fGEydJI1NSyAA_VEDSzPKJ509L3gSIcVUnQE1rpzlFVYrcA9bH9dHjSE5FsikJTgrCLDtwlOuW9g2ZJJg0iHSwZ9-XV-XvIXLakJZoIvsbfpCsSYXTV_coeSzqylQAW5yO_P0U8CKVAoSYL2T63KPJstnvkgnPeYB-3bzDcymzN42Z-0Yg-sqMLPo7frCCRJbgBLYR1JmnOc-inmNuoDinDin6QyoM')` }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <h3 className="bento-card-title">Grup Dersleri</h3>
              <p className="bento-card-desc">Motivasyonu yüksek, dinamik ve eğlenceli grup antrenmanları.</p>
            </div>
          </div>

          <div className="bento-card-wrapper">
            <div 
              className="bento-bg-image" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuY1P4PGY97mUQ-qvVpI64wGEhOv-tdoJGa-71LtuNR7F2RrAkFr-pOk2nrIDW3Io4C0QerPHCKoXNE9WIuaLhNhxmwzPEmZBA-KgY1XTVVZh900Aytnuq1S0CSt5Gp6RTkt8UtUEA6tFxe9i9ZwTNiWkiMEZziYwko-28sM9xuYagTpDFI4xafXI5_TJXKSaUgcM4rmnbRX6OXEmGVNaQjqrQNJrHnEGrGCSH5oE2oXvFNxl9SjfpZgCm98cBclBGfV3k6cL4hxs')` }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <h3 className="bento-card-title">Crossfit</h3>
              <p className="bento-card-desc">Dayanıklılık ve güç sınırlarını test eden yüksek yoğunluklu programlar.</p>
            </div>
          </div>

          <div className="bento-card-large">
            <div 
              className="bento-bg-image" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKJy42bpadB02ROsQLxgxWWH04Soa9NG9_2NrRRjkJXZhne_XBIgO1HUbflZJMZv9R2ZJqW0J9NFVbJuA90B9QAbCeZKKs5O6tXkr8z2sI7BPdMFbUtC519eCsEjd0YxZNnNRWM4nNM4UW2GBhf1fH1ZZfawXgkM2sysuQ03luHHsrIl-k-YokotYeav4mkPx9t-EtL9sEmBOygPZ7Z9irI4dnhIM7bfjmDIUQnV9fq0oZN5VH0XQTcIhT5JIw78NSH-WcjMc7-WE')` }}
            />
            <div className="bento-overlay" />
            <div className="bento-content">
              <h3 className="bento-card-title">Beslenme Danışmanlığı</h3>
              <p className="bento-card-desc">Hedefine giden yolda bilimsel temelli beslenme planları.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="why-us-container">
          <div className="why-us-header">
            <h2 className="section-title">Neden Forge Elite?</h2>
            <p className="why-us-subtitle">Farkımız detaylarda ve profesyonel yaklaşımımızda saklı.</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined why-us-icon">fitness_center</span>
              </div>
              <h4 className="why-us-card-title">Modern Ekipman</h4>
              <p className="why-us-card-desc">Dünyanın en iyi markalarından oluşan, en yeni teknolojiye sahip fitness ekipmanları.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined why-us-icon">military_tech</span>
              </div>
              <h4 className="why-us-card-title">Uzman Eğitmenler</h4>
              <p className="why-us-card-desc">Uluslararası sertifikalı, profesyonel spor geçmişine sahip tecrübeli kadro.</p>
            </div>
            <div className="why-us-card">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined why-us-icon">schedule</span>
              </div>
              <h4 className="why-us-card-title">7/24 Erişim</h4>
              <p className="why-us-card-desc">Zaman kısıtlaması olmadan, dilediğin an antrenman yapma özgürlüğü.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">Üye Yorumları</h2>
        <div 
          ref={scrollRef}
          className="testimonials-track"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="testimonial-card">
            <div>
              <div className="star-rating">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="testimonial-text">"Forge Elite sadece bir spor salonu değil, bir yaşam biçimi. Buradaki enerji ve profesyonellik başka hiçbir yerde yok."</p>
            </div>
            <div className="testimonial-author-container">
              <div className="author-img-wrapper">
                <img 
                  className="author-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC5jIHYos7Kols-u8UcBl75SwDxEeo6I67zD0AWeoc-luYLqw_eeEUqL1ySaee6egR8azb6pHD-mI6XN-mWSapoKlvdIn_HkE9_bLRSX0iv4NXMbABWW7IuTR3iUs32iSm0n6-PdNLncOOu8PKa45dZDcNu_gyejWvVnDGreG9tMr8MbKBxMpy77KarWSrI2qVjAZNka0XERPpsY020Nsdc-O0Nwo0FjmCL7iRe1nkK7tTnfwfXtezeeDxzM2bG1sV7um5GRhVeXM" 
                  alt="Caner Yılmaz" 
                />
              </div>
              <div>
                <p className="author-info">Caner Yılmaz</p>
                <p className="author-role">Premium Üye</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div>
              <div className="star-rating">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="testimonial-text">"Eğitmenlerin ilgisi ve tesisin kalitesi beni her geçen gün daha da motive ediyor. Kesinlikle tavsiye ederim."</p>
            </div>
            <div className="testimonial-author-container">
              <div className="author-img-wrapper">
                <img 
                  className="author-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPBSgcZNXcAcbT1AUGTbqRumT6a80WcVtwgJ0x9pCjuOdhpMElR3xzcF8lEDWFCNqTeg_U33suyz8cL7xhMpWNJcHP7V2024QteJl8lhzcUtOYapec_o6FVs5KC3avODAlsqGwHE1l_bKLw4PIuJBIpQy3_fgjw3aSpNSO5TnOa0b-1z26DzCgwJOzrmp2Skuzu-_2AxldVtlxClo00_9094YMeUgCt8GZa32qaPqPCi3Y7EjOUbOiWAEC3x_PHV8_Zkv_3D8QNqY" 
                  alt="Elif Demir" 
                />
              </div>
              <div>
                <p className="author-info">Elif Demir</p>
                <p className="author-role">Crossfit Sporcusu</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div>
              <div className="star-rating">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="testimonial-text">"Sakatlık sonrası PT desteği ile eski formuma kavuştum. Forge ekibine profesyonel yaklaşımları için teşekkürler."</p>
            </div>
            <div className="testimonial-author-container">
              <div className="author-img-wrapper">
                <img 
                  className="author-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyLZYiILblkqf7-r85VcvpBHsoNa3AUAOvq0pRUqQJkgBFsgmC5sxP3eJBCjS85YdPPEDh68_dLIJY7cenMUVfwJlZOKLMR_J_088AhJ4_WRmrQSNPbiShgBahokt71uYOH_nRd-DhvqsdFH9BWMkZ2myt2lfZMN-CYZOqAZclIPzA6-4VzIWO3JX5FwYc_aEanrOqdzZFp13LcFln-8tF_7a3UzPy3S1982CoZUy9j88w8ddEDwd49Gxkligli7GUEC8Gs3Bp41k" 
                  alt="Murat Aksoy" 
                />
              </div>
              <div>
                <p className="author-info">Murat Aksoy</p>
                <p className="author-role">PT Üyesi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-glow-overlay">
            <div className="radial-gradient-bg" />
          </div>
          <div className="cta-content">
            <h2 className="cta-title">DEĞİŞİM BUGÜN BAŞLIYOR</h2>
            <p className="cta-subtitle">
              Üye ol, sınırlarını zorla ve hayal ettiğin performansa bizimle ulaş. İlk antrenmanını hemen rezerve et.
            </p>
            <Link to="/booking" className="cta-btn">
              ÜCRETSİZ DENEME RANDEVUSU
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
