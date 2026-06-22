import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="main-content">
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h2 className="about-hero-title">BİZ FORGE'UZ</h2>
          <p className="about-hero-desc">
            Sadece bir spor salonu değil, sınırlarınızı zorlamak ve potansiyelinizi yeniden keşfetmek için tasarlanmış bir performans ekosistemi.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-grid">
          <div className="order-2 md:order-1">
            <div className="story-img-container">
              <img 
                className="story-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQkL2NAFKoDynk9VGJbZwF2wS1dI5b6A0eJPauP25vuItiozj98NeKfHyk785tSwPpu8ULd3fcQRjP1UWBthN8lXq-qRN7tz2E8GPIIi6nGKuNWY-g2Xq2e0HjohqZg5eA2L-0XPVxNH1ujUxUu-dE_xuv--IzxEPvMwRD4SLsINqD1--g64_vpxp0O4lL344Jc7qC03U4QjA7_YGYXRzDAiGQFIXioVJLUejLLpCpej1VhJofpcsI3KMA3C9iD8EJQc12hSm2pPk" 
                alt="Forge Elite Hikayesi" 
              />
              <div className="story-img-overlay" />
            </div>
          </div>
          <div className="story-content">
            <span className="story-köklerimiz">Köklerimiz</span>
            <h3 className="story-title">Hikayemiz</h3>
            <p className="story-paragraph">
              2014 yılında, fitness endüstrisinin standartlarına meydan okumak amacıyla yola çıktık. FORGE ELITE, her sporcunun hak ettiği profesyonel desteği ve en son teknolojiyi tek bir çatı altında birleştiriyor.
            </p>
            <p className="story-paragraph">
              Sıradan antrenmanlardan bıkanlar için, bilimsel veriye dayalı ve sonuç odaklı bir yaklaşım geliştirdik. Bugün, yüzlerce elit atletin ve kendini geliştirmek isteyen bireyin güvenli limanı olmanın gururunu yaşıyoruz.
            </p>
            <div className="story-stats">
              <div className="stat-item">
                <p className="stat-number">10+</p>
                <p className="stat-label">Yıl Deneyim</p>
              </div>
              <div className="stat-item">
                <p className="stat-number">500+</p>
                <p className="stat-label">Elit Üye</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities-section">
        <div className="facilities-container">
          <div className="facilities-header">
            <span className="facilities-kategori">Altyapımız</span>
            <h3 className="facilities-title">Donanımlarımız</h3>
          </div>
          <div className="facilities-grid">
            <div className="facility-card-double group">
              <div className="facility-flex">
                <div className="facility-content">
                  <span className="material-symbols-outlined facility-icon">monitoring</span>
                  <h4 className="facility-card-title">Bio-Feedback Laboratuvarı</h4>
                  <p className="facility-card-desc">
                    Gelişmiş sensör teknolojileri ile vücudunuzun antrenmana verdiği tepkiyi anlık olarak takip ediyoruz.
                  </p>
                  <ul className="facility-list">
                    <li className="facility-list-item">
                      <span className="material-symbols-outlined facility-list-icon">check_circle</span> 
                      Kalp Ritmi Analizi
                    </li>
                    <li className="facility-list-item">
                      <span className="material-symbols-outlined facility-list-icon">check_circle</span> 
                      Kas Aktivasyon Testleri
                    </li>
                  </ul>
                </div>
                <div className="facility-img-wrapper">
                  <img 
                    className="facility-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKbiTyZVrpLt590kZzjtbNYfA7dWMuakRWaRJHSwf-Gy2b_CkgqctbLa_6MPpZCRzO326N7uhAxfTKHr-2E-RaBgWgDW_-3SzhmMdeJTmLKon96bNBt43MrwBTVSuhgUKV6bp_ozdc5K6uUBATnq_8I-Tj0XMbqe-tYksoBmUFEoNwb1lArsdCf_ZhgLE0h8G_YS_JhizhG0uRzTxfZxljfUsOvmChYz9e5UHNAWUNXWHQQwtaP5PEQpAUsqfg0hF-guGi8NI4vFo" 
                    alt="Bio-Feedback Laboratuvarı" 
                  />
                </div>
              </div>
            </div>

            <div className="facility-card-single group">
              <div className="facility-content">
                <span className="material-symbols-outlined facility-icon">ac_unit</span>
                <h4 className="facility-card-title">Toparlanma Alanı</h4>
                <p className="facility-card-desc">
                  Kriyoterapi ve basınçlı terapi sistemleri ile hızlı toparlanma.
                </p>
              </div>
              <div className="facility-img-small">
                <img 
                  className="facility-img" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP6aBz2EMYHCYCoNSfP2jJ2FxdC9PsZPQccJ3Azh_7Y2OF_WLo1Hwxxwhqeb0UfT8nTS6W0WwIedc7-5I9f4-7ZQzOlHVPXO2tUN7zDFLZnGUnbcdR7GlOofv5Ui0Oomk_s8MvrvYIjZ3nVG6c1EBO8muJT6VeNoTaVHYqNxcsgwQ_KTCB7Ni9CEM33yxJTdZ_DkPO7TFw-Fg_-JTznQz8LmrCBtnDjGnY4siyui9SR2LGHJxSiTZSji8rDdKyqCasv1gNjMctir8" 
                  alt="Recovery Zone" 
                />
              </div>
            </div>

            <div className="facility-card-simple group">
              <div className="facility-content">
                <span className="material-symbols-outlined facility-icon">fitness_center</span>
                <h4 className="facility-card-title">Olimpik Platformlar</h4>
                <p className="facility-card-desc">
                  Eleiko ekipmanları ile donatılmış profesyonel ağırlık kaldırma alanları.
                </p>
              </div>
            </div>

            <div className="facility-card-double group">
              <div className="facility-flex">
                <div className="facility-content">
                  <span className="material-symbols-outlined facility-icon">restaurant_menu</span>
                  <h4 className="facility-card-title">Performans Bar</h4>
                  <p className="facility-card-desc">
                    Antrenman öncesi ve sonrası ihtiyacınız olan özel takviye ve beslenme çözümleri.
                  </p>
                </div>
                <div className="facility-img-sidebar">
                  <img 
                    className="facility-img" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAIVo1wbXn6JyGSVL4gcau-o3zmJUr3-HqEJz-oEIsf4bggMwgGimeRWhczTuaeJRXzfcCMQrU_kqPrB6VlgsvoEafd8IiBl4VTeBoB8Obm8Yf7nOh_9t6XBZHP18wk81Rne6W_a-43g9X9dB8fWGa0ko1XeWXaT08zEsKydI4fBYOlNSsBWl00pGZZTrS-3YROH4UaWIB93E80gCoUHMCkwlfL4rgJFKUindkM_28nMJQspQN9kf1f1nykgq7wkMpHuQEB7tvjxA" 
                    alt="Performans Bar" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trainers-section">
        <div className="trainers-header-wrapper">
          <div className="trainers-title-box">
            <span className="trainers-kategori">Ekibimiz</span>
            <h3 className="trainers-title">Master Eğitmenler</h3>
          </div>
          <p className="trainers-subtitle">
            Her biri kendi alanında uzman, milli sporcu geçmişine sahip sertifikalı profesyoneller.
          </p>
        </div>
        <div className="trainers-grid">
          <div className="trainer-card group">
            <div className="trainer-img-wrapper">
              <img 
                className="trainer-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYBfWMuOqOAr6DBk5gJoh3r5gLh3Ixq7DN-syF-Txc5simVfuMdn0O5L6QacKxqYX-NVApEzuJG9TruR39gPUEMHa4uN24RepzsX_-VwkGQL6hcuaJQ7Xyl4wvI2HToE6BYtLlLPAWVrVXLEKl7WAi4dGSCG0eo_qzNcG-LA7NVStkutj004ya1RlR1vjpNoLARJyo--yIcimElgI2Z9h9uf0OBPCq0ObH5eRst38GQfTUhJX1yY6oCFVu5tSFrsqj6PxfeL6EYSI" 
                alt="Can Demir" 
              />
              <div className="trainer-overlay" />
            </div>
            <div className="trainer-info-box">
              <h5 className="trainer-name">Can Demir</h5>
              <p className="trainer-role">Güç ve Kondisyon</p>
              <div className="trainer-socials">
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">share</span>
                </span>
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">alternate_email</span>
                </span>
              </div>
            </div>
          </div>

          <div className="trainer-card group">
            <div className="trainer-img-wrapper">
              <img 
                className="trainer-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe3uvTZjESJ25HEXeMQgOhbpeUgWLuwBNNHcD55liQATyD_nYYJqgoouKTTE4Aj7jeMyIiyOk8Uv8oxkgPzkN5V-kXQfp0dimg6Cq07a0WwvpHhtDwv3toLZ_rFAEtY0vTWLTkdFjfquTkn0urKrMTm0kdnBbmV1PhdpjAIPakb10ReMeHDLU930j5piyLJagXdX0gJFl0ekxscJL-a2tYTywKdhBufUEQO8OMSlOHThkjy4U0xoznQyDKH8zkCOtkgyVvdXHKZ_c" 
                alt="Selin Yılmaz" 
              />
              <div className="trainer-overlay" />
            </div>
            <div className="trainer-info-box">
              <h5 className="trainer-name">Selin Yılmaz</h5>
              <p className="trainer-role">Mobilite ve Yoga</p>
              <div className="trainer-socials">
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">share</span>
                </span>
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">alternate_email</span>
                </span>
              </div>
            </div>
          </div>

          <div className="trainer-card group">
            <div className="trainer-img-wrapper">
              <img 
                className="trainer-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeEOemAveW8nMv-HZHl_xDIQ07CaKj6sAoEAjmT4U5hwh-bU1N3ZuMGKVPV-YlMU6Xa5-6yLYpRS1ijIm8bGnAzbCoyCCv-y3eTfCcYyBNiotr0-CbvTiZBlSXQQ3YceCi7hWjtT0GXq28zS19k2g2Hmxgm8VhAkc1WWeMWwyix0Ss6V3QuH7agx-1Aob9EsqhZ-dZf5DV3Nlawsq8jThtM0pLgeDa3imvtBAI5DUWIt4TqywYGR0vip7tvUmNXqB9jJ_bc82Jc0k" 
                alt="Kerem Kaya" 
              />
              <div className="trainer-overlay" />
            </div>
            <div className="trainer-info-box">
              <h5 className="trainer-name">Kerem Kaya</h5>
              <p className="trainer-role">Fonksiyonel Antrenman</p>
              <div className="trainer-socials">
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">share</span>
                </span>
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">alternate_email</span>
                </span>
              </div>
            </div>
          </div>

          <div className="trainer-card group">
            <div className="trainer-img-wrapper">
              <img 
                className="trainer-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW6ds0uBXr39Sh-AN1lWS3RneCozpGLaK_5D9UNvm14ahD-i4QViG21YqdFfnGlkpm_a_K4p_yaka8WlUgKLyBeH1dlGVJyGxzWICARRtm3Q1p9CZ_TEiw0k_nYaWvOgYvk5rfQdrD1BMuqxiwSlEW5jV2MG4tLHVtLCb8ScdDGlip9NANAoAL7UNcwYLfhDDcotfoq8rxABfXyUZEUeVzHUNkV4C01bCY6tD5Ph8S0Ib5nYpLrUIloeaMopdNoPEZMkNQHZ5Rw0Q" 
                alt="Deniz Aras" 
              />
              <div className="trainer-overlay" />
            </div>
            <div className="trainer-info-box">
              <h5 className="trainer-name">Deniz Aras</h5>
              <p className="trainer-role">Spor Beslenme Uzmanı</p>
              <div className="trainer-socials">
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">share</span>
                </span>
                <span className="trainer-social-icon">
                  <span className="material-symbols-outlined">alternate_email</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-item">
            <span className="material-symbols-outlined trust-icon">verified_user</span>
            <span className="trust-text">Ereps Sertifikalı</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-icon">workspace_premium</span>
            <span className="trust-text">NSCA Üyesi</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-icon">health_and_safety</span>
            <span className="trust-text">ISO 9001 Sağlık</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-icon">military_tech</span>
            <span className="trust-text">Resmi Eleiko Ortağı</span>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="cta-banner">
          <div className="cta-banner-text">
            <h3 className="cta-banner-title">GÜCÜNÜ SERBEST BIRAK</h3>
            <p className="cta-banner-subtitle">İlk antrenmanını planlamak ve performans analizi yaptırmak için hemen başvur.</p>
          </div>
          <Link to="/booking" className="cta-banner-btn">RANDEVU AL</Link>
        </div>
      </section>
    </div>
  );
}
