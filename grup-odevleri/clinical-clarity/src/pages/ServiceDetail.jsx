import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/clinicData";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  const service = services.find((s) => s.id === id) || services[0];

  const imageMap = {
    implant: "https://lh3.googleusercontent.com/aida-public/AB6AXuBM5hHbL_JQT-dOndOpKrhNm3jVxH1X3Sr4j1lLobwOeGPisj3CaU8sGqRkQq32vXNjucNbk8xBrMszSSoU8-rJo_aqC3jOoCEBGohefIEkFh2cK8gS-yDPx4irJHiDUY0yHUhjLCyElv-bcQpRaTrCt2HKWWqoKqLpa1X_2-A7TEZ43s6hgg_c-9tX3chSukUGYelTIWMa_0MIM2r7roA9fXw3n7yAOEfalEDFGPATY26Z5Ts2UOUoYxG43Ikjdeupymrzj6hBzJw",
    whitening: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_mOa7GQd0D_3FARQ0xYlxV73EF96DYHyOan4NZaBPW9T00sc8I7ny42g0U5nI_VL--v7kV9hAdXBY6rHs3f1PdEbpMED25MCLN0owRYhV1jbw3cuT94NFLtGhFLrgA19k9hJiTiVDbQ3AGy8FexK2Y-DwllVOkcyVPOtfs53lthEbUBJhJDL6HN3T4i8tGiOriosSRHfKo2lMA6w4plXufH0B-PfBsJwOtEU37sYQzoGAMzxYyjpfX_JvxtKYEGqajaqpIQi_R8g",
    routine: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR2hP016L7wDkacZgdzffwBpsxjRQQhSn70NenPV13y5nD6khZ0C1xof3G7pxTdT9d8OL61RaDBivs8xHbs5of_vKVe_WCMns1KZmxk8bVWY3jCkH-i1oQhtjV0MFdnT2f9fROIjNQJGOLWyBf1hpPprWnx2EEhK9BDhqDwbdwgzkYLX2gtrPsDYjXZwIXVhOE8xLtFkp5Fb4XGTNoEWACyXDW_yxJvhyJQKtDJSII50_O3B4phijX2enp7R909HYnDyn6QoY8nq0",
    orthodontics: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKP4YLkPQ7e4EGj7mtkP_eBYAgBsL7XD1d11EzNgfOSr5rFzhCvj6I5TDp-qjXVGFBqvsXiAdInu3e3RnYySquFgSMK_XPj0PMzjFbFTutVTDy51NIDYwW7TF9vtzziIwpaAU-P3XQOo0aWu1GqrCCtfqOGM37Pi1pXG7Ke7VtE8MNipS43JBQEsL_xGwTKtlxdXwfP_uihXmN2RNe-NOuZtidoh2qyq_YMwitiUS0KP-sSxOY4bNU8YNrAtgUF7WaF2zVW13Ni0",
    veneers: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8cK4-T4YGbqedPNEUVxUd8z7LYNeUosuCWKNe-N6HzmhKYTip-AWl8oAwLvjHaJfLQAbdvE7Vn_RQpNs32XUFjV07BqRcGjfthvNP2Sc3mpAzSca-K3JnhKq-zi2rP4odLkQ5tlZlut1BFTiYrWDEF7pcdDa9zNdfN4AHwura_zm9a_NxRVxm049xmZjoiFDUxBHCAZbfbS9SzlCQzUnB6-IaZcwomagslo_HfzkVggoou1vQZQN9lGgnvO7B2z5hC-kgoTDNm5A"
  };

  const heroImage = imageMap[service.id] || imageMap.implant;

  const faqs = [
    {
      q: "Tedavi süreci ağrılı mıdır?",
      a: "Tüm operasyonlarımız lokal anestezi altında yapıldığı için işlem sırasında herhangi bir ağrı hissetmezsiniz. Sonrasındaki hafif sızılar ise basit ağrı kesicilerle kolayca kontrol edilir."
    },
    {
      q: "İyileşme süreci ne kadar sürer?",
      a: "Tedavi türüne bağlı olarak iyileşme süresi değişir. Örneğin implant için kemikle kaynaşma 3-6 ay sürerken, lamine ve beyazlatma uygulamalarında iyileşme süresi yoktur ve sonuçlar anında görülür."
    },
    {
      q: "Hangi uzman hekim ilgileniyor?",
      a: "Klinik ekibimizde yer alan ve tedavi alanında uzmanlaşmış akademik kariyerli hekimlerimiz tüm süreç boyunca tedavinizle doğrudan ilgilenecektir."
    }
  ];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-surface">
      <section className="detail-hero">
        <div className="detail-hero-overlay" />
        <img
          className="detail-hero-img"
          src={heroImage}
          alt={service.title}
        />
        <div className="detail-hero-content">
          <div className="detail-hero-container">
            <span className="detail-hero-badge">Detaylı Hizmet Tanımı</span>
            <h1 className="detail-hero-title">{service.title}</h1>
            <p className="detail-hero-desc">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="detail-main">
        <section className="detail-intro-grid">
          <div className="detail-intro-card">
            <div className="detail-intro-header">
              <span className="detail-intro-icon">help_center</span>
              <h2 className="detail-intro-title">Hizmet Hakkında</h2>
            </div>
            <p className="detail-intro-desc">{service.details}</p>
          </div>

          <div className="detail-intro-card">
            <div className="detail-intro-header">
              <span className="detail-intro-icon">payments</span>
              <h2 className="detail-intro-title">Süre ve Fiyatlama</h2>
            </div>
            <p className="detail-intro-desc">
              Bu tedavi için öngörülen ortalama işlem süresi <strong>{service.duration}</strong> olup, başlangıç fiyat tarifesi <strong>{service.price}</strong> olarak belirlenmiştir.
            </p>
          </div>
        </section>

        <section className="detail-benefits-section">
          <div className="detail-benefits-header">
            <span className="detail-benefits-header-icon">verified</span>
            <h2 className="detail-benefits-header-title">Öne Çıkan Avantajlar</h2>
          </div>

          <div className="detail-benefits-grid">
            <div className="detail-benefit-item">
              <div className="detail-benefit-icon-box">
                <span className="detail-benefit-icon">sentiment_satisfied</span>
              </div>
              <h3 className="detail-benefit-title">Doğal ve Estetik</h3>
              <p className="detail-benefit-desc">
                Kendi dişlerinizden ayırt edilemeyecek doğallıkta estetik sonuçlar alırsınız.
              </p>
            </div>

            <div className="detail-benefit-item">
              <div className="detail-benefit-icon-box">
                <span className="detail-benefit-icon">all_inclusive</span>
              </div>
              <h3 className="detail-benefit-title">Kalıcı ve Uzun Ömürlü</h3>
              <p className="detail-benefit-desc">
                Doğru ağız bakımı ile bir ömür boyu güvenle ve konforla kullanabilirsiniz.
              </p>
            </div>

            <div className="detail-benefit-item">
              <div className="detail-benefit-icon-box">
                <span className="detail-benefit-icon">restaurant</span>
              </div>
              <h3 className="detail-benefit-title">Çiğneme Konforu</h3>
              <p className="detail-benefit-desc">
                Güçlü yapısı sayesinde tüm gıdaları rahatça tüketebilirsiniz.
              </p>
            </div>
          </div>
        </section>

        <section className="detail-steps-section">
          <h2 className="detail-steps-title">Tedavi Aşamaları</h2>
          <div className="detail-steps-list">
            {service.steps.map((step, index) => (
              <div key={index} className="detail-step-item">
                <div className="detail-step-badge">{index + 1}</div>
                <p className="detail-step-text">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-faq-section">
          <h2 className="detail-faq-title">Sıkça Sorulan Sorular</h2>
          <div className="detail-faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFaq(index)}
                className="accordion-item"
              >
                <div className="accordion-header">
                  <span className="accordion-title">{faq.q}</span>
                  <span
                    className={
                      activeFaq === index
                        ? "accordion-arrow rotate-180"
                        : "accordion-arrow"
                    }
                  >
                    expand_more
                  </span>
                </div>
                <div
                  className="accordion-content"
                  style={{
                    maxHeight: activeFaq === index ? "120px" : "0px"
                  }}
                >
                  <div className="accordion-content-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="floating-booking-container">
        <button
          onClick={() => navigate("/randevu")}
          className="floating-booking-btn"
        >
          <span className="floating-booking-icon">calendar_month</span>
          <span>Hemen Randevu Al</span>
        </button>
      </div>
    </div>
  );
}
