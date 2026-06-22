import React from 'react';

export default function About() {
  return (
    <main className="page-main-about">
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="hero-label">Hakkımızda</span>
          <h2 className="about-hero-title">Aura & Gilded</h2>
          <p className="hero-desc">Dilek / Muhammet Güzellik Salonu Ayrıcalığı</p>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-content">
          <h3 className="about-story-title">Zarafetin ve Güzelliğin Hikayesi</h3>
          <p className="about-story-text">
            Aura & Gilded, modern ve seçkin bir atmosferde saç, cilt ve tırnak tasarım hizmetleri sunan, sektörün öncü güzellik merkezlerinden biridir. Kurucularımız Dilek ve Muhammet liderliğinde, her müşterimizin benzersiz yapısına ve karakterine uygun tasarımlar geliştiriyoruz.
          </p>
          <p className="about-story-subtext">
            Salonumuzda kullanılan tüm ürünler dünya çapında kabul görmüş, organik ve yüksek performanslı premium markalardan seçilir. Amacımız sadece saç kesimi veya cilt bakımı sunmak değil, ruhunuzu ve bedeninizi dinlendirebileceğiniz bir deneyim yaşatmaktır.
          </p>
        </div>
        <div className="about-story-images">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBqx_7mJcM08jcvhy14vn8cOqVeKNcKsUkjuIRXcpTwKiap9PTy4DBdUFppk-eB1Bl4Ac_0Y4sR2O03i2Kh6LAdik1oRsIhL6z_f-7N1a76YZTJMpgcBTX1fvPeTYXtMackL0hG4M5GDqzKXaevt0b3ERqMB_5yp2_mbkAtQLOEH1OksMQcRYSeOJemGKM0ct2X4SzYnAfybQptD_ZfnTWukvF9ueNPIBGK0uvsi0i2Z37Qn5VI9yYtlk-dbm961NppdE5qx9yh6-R"
            className="about-story-img-left"
            alt="Tırnak sanatı detayı"
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH7DH0OSCpTktnpbxUbaIxZ3-GvwiVWrWjRdUxMZzWBSc8MQDw2AQPJtauNRCBCNYwMxHRBAOGMjXVFs6SDhTlgLurCLs8Ma5XaW7jCCGnhcctzPlvf-B8ddtw_Wb4rqslKk4w_OQBSmqHfc0SF6k15ifYF9zz6K6womXD0HrQzCkARZFDy0rHlZJdjVoCkj_r_PeYfESMHwpSLWUlcBWnIt8-eMt3viG7YGtxsK55nMRNBrOgk7Mrse6Uv1IgfbVQ-5NVUtWsZadB"
            className="about-story-img-right"
            alt="Profesyonel saç tasarımı"
          />
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-mission-container">
          <h3 className="about-mission-quote">
            &ldquo;Güzellik, kendinize olan güveninizle başlar. Biz sadece bunu görünür kılmak için buradayız.&rdquo;
          </h3>
          <div className="about-stats">
            <div className="about-stat-item">
              <h4 className="about-stat-number">15+</h4>
              <span className="about-stat-label">Yıllık Deneyim</span>
            </div>
            <div className="about-stat-item">
              <h4 className="about-stat-number">10K+</h4>
              <span className="about-stat-label">Mutlu Müşteri</span>
            </div>
            <div className="about-stat-item">
              <h4 className="about-stat-number">3</h4>
              <span className="about-stat-label">Premium Şube</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
