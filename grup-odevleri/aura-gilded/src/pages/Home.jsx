import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="page-main-about">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">Güzelliğin Sanatı</span>
          <h2 className="hero-title">İmza Tarzınızı Keşfedin</h2>
          <p className="hero-desc">
            Hassasiyetin ve tutkunun buluştuğu lüks güzellik sığınağımızda kendinizi yeniden keşfedin.
          </p>
          <div className="wizard-time-grid">
            <Link to="/randevu" className="hero-cta-btn">
              Randevu Al <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link to="/hizmetler" className="about-preview-btn">
              Hizmetleri İncele
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrDOY5x-Xqz9V22uUAMGRKRE-sd93kkYVfYsHM3r6zeMOO6b5mjve20OewwpGMoJ8xVrFb7OFu4BPYIR_ikvNHrSjvo1pmgoK7s2AJ651sky_5VawFXrBMHxAxbagXtWPLO6NuyR3KWbeBLaEU833UEaJDL061whWGMhtHYD9RMHzkFvnNYANq5OjPJjGpwxXGxS-TV6WbU_U2xWclXVNDFKZ2FXDZwnfVKvYKa1afPbImlWTpycMmzaBeiJG6bxoJ_0ybUuisQdQD"
            className="hero-image"
            alt="Güzellik salonu saç tasarımı"
          />
          <div className="hero-image-overlay" />
        </div>
      </section>

      <section className="services-section">
        <div className="section-header">
          <span className="section-label">Hizmetlerimiz</span>
          <h3 className="section-title">Uzman Dokunuşlar</h3>
          <p className="section-desc">
            Saç, tırnak ve cilt bakımında en üstün kaliteyi deneyimleyin.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card-large">
            <div className="bento-card-header">
              <div>
                <span className="bento-card-icon material-symbols-outlined">content_cut</span>
                <h4 className="bento-card-title">Özel Saç Kesimi</h4>
                <p className="bento-card-desc">
                  Yüz şeklinize ve saç yapınıza özel, modern kesim tasarımları.
                </p>
              </div>
              <span className="bento-card-price">120 TL</span>
            </div>
            <div className="bento-card-footer">
              <span className="bento-card-duration">45 Dakika</span>
              <Link to="/randevu" className="bento-card-action">
                Randevu Al <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="bento-card-small">
            <div className="bento-card-header">
              <div>
                <span className="bento-card-icon material-symbols-outlined">palette</span>
                <h4 className="bento-card-title">Lüks Balyaj</h4>
                <p className="bento-card-desc">
                  Doğal ve göz alıcı renk geçişleriyle saçınıza ışıltı katın.
                </p>
              </div>
              <span className="bento-card-price">280 TL</span>
            </div>
            <div className="bento-card-footer">
              <span className="bento-card-duration">120 Dakika</span>
              <Link to="/randevu" className="bento-card-action">
                Randevu Al <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="bento-card-small">
            <div className="bento-card-header">
              <div>
                <span className="bento-card-icon material-symbols-outlined">wind_power</span>
                <h4 className="bento-card-title">İpek Fön</h4>
                <p className="bento-card-desc">
                  Saçınıza ipeksi yumuşaklık ve pürüzsüz parlaklık kazandıran fön bakımı.
                </p>
              </div>
              <span className="bento-card-price">95 TL</span>
            </div>
            <div className="bento-card-footer">
              <span className="bento-card-duration">30 Dakika</span>
              <Link to="/randevu" className="bento-card-action">
                Randevu Al <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="bento-card-large">
            <div className="bento-card-header">
              <div>
                <span className="bento-card-icon material-symbols-outlined">spa</span>
                <h4 className="bento-card-title">Canlandırıcı Bakımlar</h4>
                <p className="bento-card-desc">
                  Doğal iksirler ile saç sağlığınızı ve parlaklığını yeniden kazanın.
                </p>
              </div>
              <span className="bento-card-price">200 TL</span>
            </div>
            <div className="bento-card-footer">
              <span className="bento-card-duration">60 Dakika</span>
              <Link to="/randevu" className="bento-card-action">
                Randevu Al <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stylist-section">
        <div className="stylist-container">
          <div className="section-header">
            <span className="section-label">Sanatçılarımız</span>
            <h3 className="section-title">Uzman Kadromuz</h3>
            <p className="section-desc">
              Güzelliğinizi emanet edeceğiniz deneyimli ekibimizle tanışın.
            </p>
          </div>

          <div className="stylist-grid">
            <div className="stylist-card">
              <div className="stylist-image-box">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPMCTiUwd-nHCKz6IVLCvw5QsYWCpox-iXgfg1dwYTD8817ippr7RKHVL8q3j0n9MethcMu2nc7dn-n6XRguoLq3Zud1j-EZ2nleNuCIzmVFgyEQ0kHE9e2Qfvz-Ui0DwDxkdwG-PhrNU30kRZhh39YNGlNQCJIE1E6jDVK2t4N5xyaqNBH5sEl9bjQIdKSnhGcJKpewF9-cNkgpmqXRhIny3B2UkrD76y_OXxsB1DFlaMNzjsSYz9aoIvyNdLN6xaDlJjYyj8rLnz"
                  className="stylist-image"
                  alt="Julian Thorne"
                />
              </div>
              <div className="stylist-info">
                <span className="stylist-role">Kreatif Direktör</span>
                <h4 className="stylist-name">Julian Thorne</h4>
                <p className="stylist-specialty">Saç Tasarım & Kesim Uzmanı</p>
              </div>
            </div>

            <div className="stylist-card">
              <div className="stylist-image-box">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfcXJi3WcRDOwklWtqootYaw9KkF9_b1uq6pGHpK6meTlqag60ofVsTsQW5JBqQ3SjaCwhosxRVRLRrn_q18D-24Xy6iPdnWxqytw6sFRqVKTFxse-PIp18Dwl4k4tpWUizl547--NqjtFNfYC3utFVcvyVQUDDSANq29rSRWseVyCK-YPWTrc8XhqYev9mAHCx6vSjD6EbmCmLoaK1FWBlcSGMjK8D-loUbB7d1uDccwuQMUo9CS-nnapqnRQcUHefxne0iu9pf5a"
                  className="stylist-image"
                  alt="Elena Rossi"
                />
              </div>
              <div className="stylist-info">
                <span className="stylist-role">Renk Uzmanı</span>
                <h4 className="stylist-name">Elena Rossi</h4>
                <p className="stylist-specialty">Renklendirme & Balyaj Uzmanı</p>
              </div>
            </div>

            <div className="stylist-card">
              <div className="stylist-image-box">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbbneVRSTH6u7UQ6tPClxjcjHiXirlShdsH0l-nrB11g9y9j8d8buGcD5CapCV_FvfrK52LHpq89-VI70Y2ofylJlH7Vqyx4FLXQP9Hy-inTb1LAuhXCdaQdWl7WM7tA8I_p9wa7T0rUNaK49qv3BWQmzm7IvoBcCMbBdbQNKtGqRVj1-w28J-1nvHbbLSq7BhkPNKtsCcivdhHG3XF1gpYwlKf2eaq-IVAVopWMURRotagLlm9muyZmMEPAF93qL4xL11eVIotFJX"
                  className="stylist-image"
                  alt="Marcus Vane"
                />
              </div>
              <div className="stylist-info">
                <span className="stylist-role">Baş Stilist</span>
                <h4 className="stylist-name">Marcus Vane</h4>
                <p className="stylist-specialty">Saç Kesim & Cilt Bakımı Uzmanı</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview-section">
        <div className="about-preview-content">
          <span className="hero-label">Hakkımızda</span>
          <h3 className="about-preview-title">Aura & Gilded Deneyimi</h3>
          <p className="about-preview-desc">
            Dilek & Muhammet Güzellik Salonu bünyesinde hizmet veren Aura & Gilded, kurulduğu günden bu yana şıklığı ve zarafeti bir araya getiren bir güzellik durağı olmuştur. Profesyonel kadromuz ve üstün kaliteli ürünlerimizle kendinizi ayrıcalıklı hissedeceksiniz.
          </p>
          <Link to="/hakkimizda" className="about-preview-btn">
            Hikayemizi Okuyun
          </Link>
        </div>
        <div className="about-preview-image-box">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA-eG_hZKlcni5XWbSH9i9X0iVwK-6t7hRSRxbziy-Tb8iKABvJPWkE6uqjwEkQfkmkAtxXBzUl3Zz5jQUrEXvLPFCVcoRYUVXmT4-kqgMNZVOYseQAuizb6jxp0wTVtbgCi-j9icYP2-AwsfzkvUlBVBCsw7wpXDTH2fAp3C1WyE-s39UOIF_ld_pf5hxzgLIxa4JuFXAq748QnIWPXpeYHy9EALlCackHd_3lKMSH3DoXv2KthC4ud9gpGBoEkqNLW6FmVHaZDCm"
            className="about-preview-image-left"
            alt="Salon iç görünüm 1"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnGZE3_y41R5jFLQRa9oRR9ThiUlvkdQKKvXDgoa88Z_63m4Qg-Jev2C3Ol_eoUtO_0HDUW_-NyIZgQfqAQlB0NvVqDW_4D6-Aa9BJMkQv8zHOvJtes0S6ucFCUDxwojAC6TAA5frFrUiAo1BAEXUmuI_NFBRFgjV9zAYydaNHuBeypxVQlnmHOA5u-eaVT15tG7M_0cUtHHamvdJq_ll3SDekWLRsjjo-hflweGAM1LsQHkrBt5_1c6zBgh21-JR8MU-OgF1UkFA3"
            className="about-preview-image-right"
            alt="Salon iç görünüm 2"
          />
        </div>
      </section>
    </main>
  );
}
