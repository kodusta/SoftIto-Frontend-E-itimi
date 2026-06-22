import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg-wrapper">
          <div className="about-hero-img"></div>
          <div className="about-hero-gradient"></div>
        </div>
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">Seyahati Modern Profesyoneller İçin Yeniden Tanımlıyoruz</h1>
            <p className="about-hero-desc">Hız, güvenilirlik ve hassasiyet. Sadece araç kiralamıyoruz; başarıya giden yolculuğunuzu destekliyoruz.</p>
            <div className="about-hero-actions">
              <Link to="/cars" className="about-hero-primary-btn">Filoyu Keşfedin</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-bento-grid">
        <div className="bento-layout">
          <div className="mission-card">
            <span className="card-tag">MİSYONUMUZ</span>
            <h2 className="card-heading">Her seyahati kesintisiz ve yüksek performanslı mobilite çözümleriyle güçlendiriyoruz.</h2>
            <p className="card-text">
              VELOCITY olarak seyahatin bir engel değil, bir değer olması gerektiğine inanıyoruz. İş liderlerine ve seçkin gezginlere en yüksek araç bakım standartlarını, dijital rezervasyon verimliliğini ve üst düzey müşteri hizmetlerini sunmaya kararlıyız.
            </p>
          </div>

          <div className="stats-layout">
            <div className="stats-card-red">
              <span className="stats-value">%99.8</span>
              <span className="stats-label">Güvenilirlik Oranı</span>
            </div>
            <div className="stats-card-navy">
              <span className="stats-value">120+</span>
              <span className="stats-label">Küresel Ofis</span>
            </div>
          </div>

          <div className="vision-card">
            <div>
              <span className="card-tag-light">VİZYONUMUZ</span>
              <h3 className="vision-heading">Seçkin araç kiralamada dünya standardı olmak.</h3>
              <p className="vision-desc">Dürüstlük ve yenilikçilik ilkeleriyle ulaşımın geleceğine yön veriyoruz.</p>
            </div>
            <div className="vision-icon-overlay">
              <span className="material-symbols-outlined vision-rocket">rocket_launch</span>
            </div>
          </div>

          <div className="history-timeline-card">
            <span className="card-tag">TARİHÇEMİZ</span>
            <div className="timeline-wrapper">
              <div className="timeline-segment">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2012 — İLK ADIM</span>
                <p className="timeline-desc">Zürih'te sadece beş lüks makam aracıyla kurulduk.</p>
              </div>
              <div className="timeline-segment">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2018 — KÜRESEL ULAŞIM</span>
                <p className="timeline-desc">Avrupa ve Orta Doğu genelinde 50. ofisimize ulaştık.</p>
              </div>
              <div className="timeline-segment">
                <div className="timeline-dot"></div>
                <span className="timeline-year">2026 — VELOCITY 2.0</span>
                <p className="timeline-desc">Tamamen elektrikli yönetici filomuz ve yapay zeka destekli asistanımızı devreye aldık.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section">
        <div className="why-us-container">
          <div className="why-us-header">
            <h2 className="why-us-title">VELOCITY Neden Lider?</h2>
            <p className="why-us-subtitle">Yoldaki tek odak noktanızın hedefleriniz olmasını sağlamak için geleneksel misafirperverliği modern teknolojiyle birleştiriyoruz.</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h4 className="why-us-item-title">Kusursuz Filo</h4>
              <p className="why-us-item-desc">Tüm araçlarımız her kiralama öncesinde 50 noktalı detaylı kontrolden ve kapsamlı hijyen işlemlerinden geçirilir.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h4 className="why-us-item-title">Anında Onay</h4>
              <p className="why-us-item-desc">Yapay zeka altyapılı rezervasyon motorumuz sayesinde onay işlemlerini 60 saniyeden kısa sürede tamamlıyoruz.</p>
            </div>
            <div className="why-us-item">
              <div className="why-us-icon-wrapper">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h4 className="why-us-item-title">Özel Konsiyerj</h4>
              <p className="why-us-item-desc">Dünyanın neresinde olursanız olun, 7/24 kesintisiz destek sağlayan uzman ekibimizle hizmetinizdeyiz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="leadership-header">
          <div className="leadership-titles">
            <span className="section-tag">LİDERLİK EKİBİMİZ</span>
            <h2 className="section-title">Mükemmelliğe Odaklı Kadro</h2>
            <p className="leadership-subtitle">Yöneticilerimiz otomotiv, teknoloji ve lüks hizmet sektörlerindeki zengin deneyimleriyle sektöre öncülük etmektedir.</p>
          </div>
        </div>
        <div className="leadership-grid">
          <div className="team-member-card">
            <div className="member-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxuTgSEzhwQ1cMcHROGgdYxwpSdvEHuuMRmYF_cx0T_1ApE5AIPXVt0SfadrRIVDWHkhFDvq4PhvpRXm6-XiOTcllhU6IJ0aBFYK26eouhhXHnNsZuQx3Ppdi1AEbEgW8AoXFkYio0rX1kP0oF4oL9qyeTnDV3hADS0ak3WZWcUB9FQ3tcc9w-_1OkSQmsnRorrRg5pcwm7WFud18YOTDE2Cx-WrG2JB7arCz5132rWA9HbZMRbWpJCupxV4AdrjrNnZnjmmoy0Ms" alt="Marcus Thorne" className="member-img" />
            </div>
            <h5 className="member-name">Marcus Thorne</h5>
            <p className="member-role">Kurucu ve CEO</p>
          </div>

          <div className="team-member-card">
            <div className="member-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFq35CZUwwK6sukBSgoU96viI5ny8EtcupLWvXBJ9G-mx_WJQ_riGn23UKoeQbJ0DZ52y7Ka3fZkYelvxbV6DFQqLrA1zhWvjA2CSgqVkKnSqQ3ahNfKxMWA8t09MgWkyWhUg2AzZ0TBhRNSSNDuZTdFz63j2za_KOk26PzSC5KFmbA0q-Nlii149Zl3KLjw_7wkVeNO8SgLgRWOfcE4L8OhyySJJ9s85L6y_WrNKoszx-tzNklzc8CV0NYsyq86A0pzAS3aGQjek" alt="Elena Rodriguez" className="member-img" />
            </div>
            <h5 className="member-name">Elena Rodriguez</h5>
            <p className="member-role">Operasyon Direktörü (COO)</p>
          </div>

          <div className="team-member-card">
            <div className="member-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2VDr1ksXU_6T-NHncjTq2rUTAQvHi--a_Elj__H497oY18WFLaD0wYr82BIkKxyaGI36VjaCjcdm3Pi8WqUgGS2LGbVgg2C4e2FwO9zfQGne0hQJtn9PqrSD9vGaFAfZtLY0vAnOq9Gs0o-mTCnSOCgLxm87UH4cmDt7q6a0Ta6o0ymw2RwI1eYqIBgFvNqt9llCf30IladNu6jV13IGZUXMdxOXeXeORXziLQ56rYsIiTCTJleWo9S7GDlOTaIS_V2Yg3Z8tKY" alt="David Chen" className="member-img" />
            </div>
            <h5 className="member-name">David Chen</h5>
            <p className="member-role">Teknoloji Direktörü (CTO)</p>
          </div>

          <div className="team-member-card">
            <div className="member-img-wrapper">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWkCnQXpsPrNCZC6PXpyAiPGNkqw9FClHEu9LEjmjKW_9jJZE14vhUK6v7Y_zjBCWezuDwphawib_-3y7PmTDWXvySaoW6xcE1aqq4LvTYmkMDk3m-mf-IB4lfneiXN4pxrHzU8lcp-OzCean7qrh7I73YYe22zG5A6y_MBi80I7iI4VLQd3WjtR3k7-ZzzcPAubHIAwVo6qgiXAFB58loJfkWR_wBPORNKrlmbxTIroWEN5edcp_dwvkhXJNv8mBdYa7ZrrATmc" alt="Sarah Jenkins" className="member-img" />
            </div>
            <h5 className="member-name">Sarah Jenkins</h5>
            <p className="member-role">Filo Operasyon Müdürü</p>
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-card">
          <h2 className="cta-title">VELOCITY deneyimini yaşamaya hazır mısınız?</h2>
          <p className="cta-desc">Seyahatlerinde ayrıcalık arayan binlerce profesyonelin arasına siz de katılın.</p>
          <div className="cta-actions">
            <Link to="/cars" className="cta-primary-btn">Hemen Araç Kiralayın</Link>
            <Link to="/contact" className="cta-secondary-btn">Kurumsal Çözümler</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
