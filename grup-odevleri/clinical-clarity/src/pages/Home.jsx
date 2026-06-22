import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="font-label-sm">İstanbul'un En Güvenilir Diş Kliniği</span>
          </div>
          <h1 className="hero-title">
            Gülüşünüzdeki <span className="text-primary">Mükemmeliyeti</span> Keşfedin
          </h1>
          <p className="hero-desc">
            Modern teknoloji ve uzman ekibimizle, diş sağlığınız için en hassas ve empatik bakımı sunuyoruz. Ertelemeyin, bugün randevu alın.
          </p>
          <div className="hero-ctas">
            <button
              onClick={() => navigate("/randevu")}
              className="hero-btn-primary"
            >
              Randevu Al
            </button>
            <button
              onClick={() => navigate("/hizmetler")}
              className="hero-btn-secondary"
            >
              Hizmetlerimiz
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm9x3Iwl390o_ov_JN6GkQWSpTts6U0YLPjg2txPjUOwgZOqGLgOF24s6oj3DJwPaLmIBh3NBbvcZzqqcU9jsuOA_2CDRArIQpEpKDzvo6zjDa4-4OhNA9hgEkGLvgdiFzKxikkjmlJnRm5Hfvp1yYiu6nYlvs3KVftJu--SOrYBNNxGc0yI79HfyqLVgsvSqqys651sThUe3H8A7vsGotpkzwSJaw6oTWPFuzw1gxHAR5c0Y2ORkm5nPiL1qC67xHibYCFQ0HyI"
              alt="Ayşenur & Eren DentalCare Clinic"
            />
          </div>
          <div className="hero-floating-badge">
            <div className="why-item-icon-box">
              <span className="why-item-icon">thumb_up</span>
            </div>
            <div>
              <p className="font-bold">15.000+</p>
              <p className="testimonial-author-title">Mutlu Hasta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Klinik Hizmetlerimiz</h2>
          <p className="testimonials-desc">
            Uzmanlığımızı ve teknolojiyi birleştirerek her yaş grubu için kapsamlı çözümler sunuyoruz.
          </p>
        </div>

        <div className="services-grid-container">
          <div className="bento-card-featured group">
            <div className="bento-card-featured-layout">
              <div className="bento-card-featured-info">
                <div>
                  <span className="bento-card-icon-primary">dentistry</span>
                  <h3 className="bento-card-title">Gelişmiş Diş İmplantları</h3>
                  <p className="bento-card-desc">
                    Eksik dişlerinizi, doğal dişe en yakın görünüm ve fonksiyonla kalıcı olarak geri kazanmanızı sağlıyoruz.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/hizmet/implant")}
                  className="bento-card-btn-primary"
                >
                  Detaylı Bilgi
                </button>
              </div>
              <div className="bento-card-featured-img-wrap">
                <img
                  className="bento-card-featured-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0slD9YMNwE9uInJpZ3WyMtGjudLa6z1IapEYOq4Cr2ShT13jtU-M8h3xbJEOR5ZXG6AIJVsxmghcMymSSrilShAzdwVazvE9Tu0V4SEaNLGmEuhPqp3PW_h7yDX9TotdG7Y5aCcnUimuPryIxN1TIAUZ6PSSmm5SI8GXWAKc8gyLVKFc9yP5A6-d_Mtyyf3lSPkDPjHv5x9A7R_Qs7F7JiH8U7zDnNnvWaiY9PsOVQIPnsmXETQuUd1ICFP4Jgr1KzUhLg5ZSlCA"
                  alt="Dental İmplant"
                />
              </div>
            </div>
          </div>

          <div className="bento-card-single group">
            <div>
              <span className="bento-card-icon-tertiary">health_and_safety</span>
              <h3 className="bento-card-title">Genel Bakım</h3>
              <p className="bento-card-desc">
                Rutin kontroller, temizlik ve önleyici tedaviler ile ağız sağlığınızı koruyoruz.
              </p>
            </div>
            <div className="bento-card-single-img-wrap">
              <img
                className="bento-card-single-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR2hP016L7wDkacZgdzffwBpsxjRQQhSn70NenPV13y5nD6khZ0C1xof3G7pxTdT9d8OL61RaDBivs8xHbs5of_vKVe_WCMns1KZmxk8bVWY3jCkH-i1oQhtjV0MFdnT2f9fROIjNQJGOLWyBf1hpPprWnx2EEhK9BDhqDwbdwgzkYLX2gtrPsDYjXZwIXVhOE8xLtFkp5Fb4XGTNoEWACyXDW_yxJvhyJQKtDJSII50_O3B4phijX2enp7R909HYnDyn6QoY8nq0"
                alt="Genel Bakım"
              />
            </div>
            <button
              onClick={() => navigate("/hizmet/routine")}
              className="bento-card-btn-outline"
            >
              İncele
            </button>
          </div>

          <div className="bento-card-single group">
            <div>
              <span className="bento-card-icon-primary">auto_fix_high</span>
              <h3 className="bento-card-title">Diş Beyazlatma</h3>
              <p className="bento-card-desc">
                Lazer teknolojisi ile dişlerinizi güvenle beyazlatın, ışıltılı bir gülüşe sahip olun.
              </p>
            </div>
            <div className="bento-card-single-img-wrap">
              <img
                className="bento-card-single-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mOa7GQd0D_3FARQ0xYlxV73EF96DYHyOan4NZaBPW9T00sc8I7ny42g0U5nI_VL--v7kV9hAdXBY6rHs3f1PdEbpMED25MCLN0owRYhV1jbw3cuT94NFLtGhFLrgA19k9hJiTiVDbQ3AGy8FexK2Y-DwllVOkcyVPOtfs53lthEbUBJhJDL6HN3T4i8tGiOriosSRHfKo2lMA6w4plXufH0B-PfBsJwOtEU37sYQzoGAMzxYyjpfX_JvxtKYEGqajaqpIQi_R8g"
                alt="Diş Beyazlatma"
              />
            </div>
            <button
              onClick={() => navigate("/hizmet/whitening")}
              className="bento-card-btn-outline"
            >
              İncele
            </button>
          </div>

          <div className="bento-card-featured group">
            <div className="bento-card-featured-layout">
              <div className="bento-card-featured-img-wrap">
                <img
                  className="bento-card-featured-img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoKP4YLkPQ7e4EGj7mtkP_eBYAgBsL7XD1d11EzNgfOSr5rFzhCvj6I5TDp-qjXVGFBqvsXiAdInu3e3RnYySquFgSMK_XPj0PMzjFbFTutVTDy51NIDYwW7TF9vtzziIwpaAU-P3XQOo0aWu1GqrCCtfqOGM37Pi1pXG7Ke7VtE8MNipS43JBQEsL_xGwTKtlxdXwfP_uihXmN2RNe-NOuZtidoh2qyq_YMwitiUS0KP-sSxOY4bNU8YNrAtgUF7WaF2zVW13Ni0"
                  alt="Ortodonti"
                />
              </div>
              <div className="bento-card-featured-info">
                <div>
                  <span className="bento-card-icon-tertiary">align_items_stretch</span>
                  <h3 className="bento-card-title">Ortodonti &amp; Şeffaf Plak</h3>
                  <p className="bento-card-desc">
                    Çapraşık dişlerinizi ve çene kapanış bozukluklarını şeffaf plaklar ve modern braketlerle hizalıyoruz.
                  </p>
                </div>
                <button
                  onClick={() => navigate("/hizmet/orthodontics")}
                  className="bento-card-btn-primary"
                >
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          </div>

          <div className="bento-card-wide group">
            <div className="bento-card-wide-info">
              <span className="bento-card-icon-tertiary">child_care</span>
              <h3 className="bento-card-title">Pedodonti Bölümü</h3>
              <p className="bento-card-desc">
                Çocuklarımızın diş hekimi kaygısını yenmesini sağlıyor, oyunlar eşliğinde tedavilerini gerçekleştiriyoruz.
              </p>
            </div>
            <button
              onClick={() => navigate("/hizmet/pedodontics")}
              className="bento-card-wide-btn"
            >
              Çocuk Bölümü
            </button>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-images">
          <img
            className="why-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG2cAicx9gNRromebL-O_-08qXPZ8KC-KGcWJo9U1zqSPa1vgjRTXvLjAYkXma-4OBNP1_byGpZKSWmypGdfGsZChRNqSVmTJn5W_m-_3XIR6TtT8xPMkEpIjYpHXd-Z0FxlxdvhFNd8RKcAblWJugnDiCbD6u7Y_3WpXEO6YxFCe7mRCmhmmfCgECFHFPmEKpxn3Dy59J2OttWLAlRmtbQ4H-lcVW3cF0tZ9gajM9qHgOhO0bWv2sB_yi3E0XISKFIFfT_W4sjcE"
            alt="Doktor"
          />
          <img
            className="why-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM5hHbL_JQT-dOndOpKrhNm3jVxH1X3Sr4j1lLobwOeGPisj3CaU8sGqRkQq32vXNjucNbk8xBrMszSSoU8-rJo_aqC3jOoCEBGohefIEkFh2cK8gS-yDPx4irJHiDUY0yHUhjLCyElv-bcQpRaTrCt2HKWWqoKqLpa1X_2-A7TEZ43s6hgg_c-9tX3chSukUGYelTIWMa_0MIM2r7roA9fXw3n7yAOEfalEDFGPATY26Z5Ts2UOUoYxG43Ikjdeupymrzj6hBzJw"
            alt="Tedavi"
          />
        </div>

        <div className="why-content">
          <h2 className="why-title">Neden DentalCare?</h2>
          <div className="why-list">
            <div className="why-item">
              <div className="why-item-icon-box">
                <span className="why-item-icon">verified</span>
              </div>
              <div className="why-item-text">
                <h4 className="why-item-title">Sertifikalı Uzman Kadro</h4>
                <p className="why-item-desc">
                  Alanında uzman hekimlerimiz ve profesyonel ekibimizle en güvenilir bakımı sunuyoruz.
                </p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-item-icon-box">
                <span className="why-item-icon">biotech</span>
              </div>
              <div className="why-item-text">
                <h4 className="why-item-title">Yüksek Medikal Teknoloji</h4>
                <p className="why-item-desc">
                  En yeni nesil 3D tomografi, lazer cihazları ve sterilizasyon standartları ile tedavi.
                </p>
              </div>
            </div>

            <div className="why-item">
              <div className="why-item-icon-box">
                <span className="why-item-icon">heart_check</span>
              </div>
              <div className="why-item-text">
                <h4 className="why-item-title">Hasta Odaklı Yaklaşım</h4>
                <p className="why-item-desc">
                  Sıcak, ağrısız ve kişiye özel tedavi planlamasıyla konforunuzu ön planda tutuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Hasta Yorumları</h2>
          <p className="testimonials-desc">
            Bizi tercih eden binlerce mutlu hastamızın deneyimleri.
          </p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div>
              <div className="testimonial-stars-container">
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
              </div>
              <p className="testimonial-text">
                "Kanal tedavisi için geldim ve inanılmaz memnun kaldım. Doktor beyin nezaketi ve eli çok hafifti, hiç acı hissetmedim."
              </p>
            </div>
            <div className="testimonial-author-box">
              <img
                className="testimonial-avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDejpzWZwfO5-wvjihs-6Q7smiTlZlYfLjTiA4_k3u-6LH6j2kaL-s8ZoKIzvp5MjbgZs8FsibEII_wfBsA9iCgX0DJuCC_cBpt5gSWbDxk-ylloJljvQ2tBt1FqbvEnMQoUe_ZST7VWo8sFz0uOSqjcV6zhU8yMbdgK56qQFVIRl9QWHvStKmAJ8i7Rh7zL1elPaqupf2Jo33t7p9TEUXDRKH0D-4eqmQgz8GWU7BktVVpu2t12gcPaoXFO_Ph3syudXjUFDZxlVI"
                alt="Ayşe Kara"
              />
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">Ayşe Kara</span>
                <span className="testimonial-author-title">Yazılım Mühendisi</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div>
              <div className="testimonial-stars-container">
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
              </div>
              <p className="testimonial-text">
                "Şeffaf plak tedavim 10 ayda tamamlandı. Ekibin güleryüzlülüğü ve profesyonelliği her ziyaretimde harika hissettirdi."
              </p>
            </div>
            <div className="testimonial-author-box">
              <img
                className="testimonial-avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbunfDqFRvA6-f35XgeAPM2NA0QLaxWpwy5KU3PV0K07NhHoWPanojisaxBdWq_6WAI6RMOI0LTR0Vn9suHXErV0gWZNbgnq84_YojPIBf41G24jP7t008YDFrvP_sfDwHVH40zq1UPv22WWLj2SlFlBib-EBI_BdidXhNYo9ah-9qCgv0Htrf2CWhpW34t7ZW5xOR_F-tjyzPyWwZVhfIxxtRfNws45jyU0yPtrI9TjVuUQrKn7tJ3im0aRq34QkOizUJCkKrtJY"
                alt="Murat Y."
              />
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">Murat Yılmaz</span>
                <span className="testimonial-author-title">Grafik Tasarımcı</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div>
              <div className="testimonial-stars-container">
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
                <span className="testimonial-star-icon">star</span>
              </div>
              <p className="testimonial-text">
                "İmplant ameliyatımdan çok korkuyordum ancak Kerem Bey süreci çok net anlattı. Ameliyat çok başarılı geçti, teşekkürler!"
              </p>
            </div>
            <div className="testimonial-author-box">
              <img
                className="testimonial-avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr6v6czocteVLVhNkr2hgHfoM0TE8ZV_l9qtuMBbAeYLVA8aQ9qIYbMUuBigJBcbNXVEgrkpEWTDQrLhMzeB1YGxwEWncCq00Ou_KKUbp49j56NQhiYm2QDkPINfbwUqvIxpDZ5xDSNEuMFFC1hvWwJd018_wF9oqqTShcd0VmM3AyQ_j198u3UfLWdJ0wlIK4y10_f_aJyvGsmVt0aKfo4yZAZViBYuTqGOqCK643Xdl1Xs8432oh8kqUk4xwvddNIxEvVmtfuRQ"
                alt="Elif Şahin"
              />
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">Elif Şahin</span>
                <span className="testimonial-author-title">Öğretmen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section-wrapper">
        <div className="cta-box">
          <span className="cta-bg-icon">dentistry</span>
          <div className="cta-content">
            <h2 className="cta-title">Sağlıklı Bir Gülüş İçin İlk Adımı Atın</h2>
            <p className="cta-desc">
              Hemen online randevunuzu oluşturun, hekimlerimizle tanışın ve gülüşünüzü tazeleyin.
            </p>
            <div className="cta-buttons">
              <button
                onClick={() => navigate("/randevu")}
                className="cta-btn-light"
              >
                Hemen Randevu Al
              </button>
              <button
                onClick={() => navigate("/iletisim")}
                className="cta-btn-outline"
              >
                Bizimle İletişime Geçin
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
