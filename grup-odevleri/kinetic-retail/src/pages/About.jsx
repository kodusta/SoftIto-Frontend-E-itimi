import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-14 pb-24">
      <section className="about-hero">
        <div className="about-hero-img-box">
          <img className="about-hero-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1m079iSSx-Y6rNUTBb1bxSlgch2GAQi_B-t1xVIZzXEiqa5NpK4yUtw9O4esbVlA3FiXeDAfhQhspUbePMH09YMNDXz5B9o_w9AsXsOTVp6XtYBCVIpj6noUv8zWAbIHrqBgqyB47uf-CLo6lDxqFY_5Y5jqWf29Zj-VfoJoVA6D-HsxA1Fb4IBPnZ3F8w0VkXycVAWzyR2O1jbhnO85oelZXJ3cZKi6hW1Gbzm-oAxYXK-FqUBdbBJuDa4ErHeE3OAekvFZkVV4" alt="Şirket Görseli" />
          <div className="about-hero-gradient"></div>
        </div>
        <div className="about-hero-text-box">
          <h1 className="about-hero-title">Hikayemiz</h1>
          <p className="about-hero-desc">2000 yılından beri dijital ticaretin geleceğine öncülük ediyoruz.</p>
        </div>
      </section>

      <section className="about-stats-section">
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <span className="about-stat-number">33M+</span>
            <span className="about-stat-label">Aktif Müşteri</span>
          </div>
          <div className="about-stat-card">
            <span className="about-stat-number">12M+</span>
            <span className="about-stat-label">Ürün Çeşidi</span>
          </div>
          <div className="about-promo-card-wide">
            <div>
              <span className="about-promo-title">Sürekli İnovasyon</span>
              <span className="about-promo-desc">Bölgedeki en büyük e-ticaret ekosistemine liderlik ediyoruz.</span>
            </div>
            <span className="about-promo-icon">rocket_launch</span>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <h2 className="about-section-title">Misyon &amp; Değerlerimiz</h2>
        <div className="about-mission-list">
          <div className="about-mission-card">
            <div className="about-mission-icon-box-primary">
              <span className="material-symbols-outlined about-mission-icon">diversity_1</span>
            </div>
            <div>
              <h3 className="about-mission-card-title">Alışverişi Demokratikleştirmek</h3>
              <p className="about-mission-card-desc">Konum ve bütçeden bağımsız olarak herkesin dünya standartlarında bir alışveriş deneyimine erişebilmesi gerektiğine inanıyoruz.</p>
            </div>
          </div>
          <div className="about-mission-card">
            <div className="about-mission-icon-box-tertiary">
              <span className="material-symbols-outlined about-mission-icon">eco</span>
            </div>
            <div>
              <h3 className="about-mission-card-title">Sürdürülebilir Gelecek</h3>
              <p className="about-mission-card-desc">Yeşil lojistik ve doğaya zarar vermeyen ambalajlama çözümlerini tedarik zincirimizin her aşamasına entegre ediyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-team-header">
          <h2 className="about-team-title">Ekibimiz</h2>
          <button className="about-team-view-btn">
            Tümünü Gör <span className="material-symbols-outlined about-team-view-icon">arrow_forward</span>
          </button>
        </div>
        <div className="about-team-scroll no-scrollbar">
          <div className="about-team-card">
            <div className="about-team-img-box">
              <img className="about-team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZVeHbSqgVYWL7QqoOKKnXi3jKtMEh3LOUVCeQlL4FWNLwBw36HMp44WPh_8ODEL1Y78P73Y6e6gC1-_utTR3IgkeQM2eWBAnPy9lsL8c1E16au6HemBkqUByNaVEW-HIdBTb3swzwMz2IDWDtJfztEDHAd_RoRnCLsW3idn6e3BNfXiTTkhf085ujx_4n0gkrA7oi_XanlsGHwK33c_GcrJEb6ljjWTQVeZUXhgnmILsBnocMVQZjz500wmG3sDnSKhz1ZAjPLQ" alt="Hanzade Doğan" />
            </div>
            <h4 className="about-team-name">Hanzade Doğan</h4>
            <span className="about-team-role">Kurucu</span>
          </div>

          <div className="about-team-card">
            <div className="about-team-img-box">
              <img className="about-team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBQ5IJI4ra6bh7Rgy1sUJo4NPTu3QvWywEhvoMbEQH2jS5VHd2gbnXBc_YQn5t9uKq2pJe7m3zequ4_MpbROTNDjPzIwj5qHioLn3akuzpmL5UBUFrqppxMRIVNPquk9SmawICckaA8meszYmrKIHAgNXDBaKZuScNdnexrgDEIllZJ3DQgWPjUTwG7LRQssssjulM7JZ1R4SmblseBUFmLPKt5WV9-wYFLeKcp_2YxvSh06vp39GAhm2F2CsZzIfMoi_gdNyP-ac" alt="Nilhan Onal" />
            </div>
            <h4 className="about-team-name">Nilhan Onal</h4>
            <span className="about-team-role">CEO</span>
          </div>

          <div className="about-team-card">
            <div className="about-team-img-box">
              <img className="about-team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1VZRyyMax7_ElkjVUhCv0V6r4S5KNDpvhnDcGkArCOH7fk_2ZiwhCJAbxG6ZN-zPhl-ZYXAgbNwd0pKdXCMBtse-zGoBFbMVkXU9OmSjxnLkzRwXBgHVplz_A2hz0NGAViWcOt9kdmxW-JE9p3wj7oIrIVaEJnmSXXkt1aBSIlo9FmtstvR6yLsamfoThKVQ_mHfdSiJjd6P-NrdGrKGa5kRtLN7qimshzd06mCXJrM3Q9hQzJzOlfi01MWbFLwvpIOU4Pn_0H4E" alt="Mert Arslan" />
            </div>
            <h4 className="about-team-name">Mert Arslan</h4>
            <span className="about-team-role">CTO</span>
          </div>
        </div>
      </section>

      <section className="about-join-section">
        <div className="about-join-card">
          <h2 className="about-join-title">Bize Katılmak İster misiniz?</h2>
          <p className="about-join-desc">Geleceğin dijital ticaret deneyimini bizimle birlikte inşa edecek yetenekler arıyoruz.</p>
          <button className="about-join-btn">Açık Pozisyonları İncele</button>
        </div>
      </section>
    </main>
  );
};

export default About;
