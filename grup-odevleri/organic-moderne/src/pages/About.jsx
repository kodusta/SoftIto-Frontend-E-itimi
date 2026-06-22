import React from 'react';

const About = () => {
  return (
    <div class="bauhaus-grid">
      <section class="about-manifesto-grid">
        <div class="about-manifesto-text">
          <span class="hero-tag">MANTIK VE EKOLOJİ</span>
          <h1 class="hero-title">
            BİÇİM DOĞAL İŞLEVİ<br /><span class="text-primary">TAKİP EDER</span>
          </h1>
          <p class="hero-desc">
            Organik bahçecilik ve modern tarımda gereksiz süslemelerden kaçınıyoruz. Her araç, her tohum ve her saksı; doğanın kendi ritmi ve işleviyle tam bir uyum içinde olmak üzere tasarlanmıştır.
          </p>
        </div>
        <div class="about-manifesto-visual flex items-center justify-center p-xl">
          <div class="about-manifesto-badge">
            "Sadece işlevsel olan güzeldir. Süsleme bir suçtur; doğada süs yoktur, sadece kusursuz bir optimizasyon vardır."
          </div>
        </div>
      </section>

      <section class="about-detail-grid">
        <div class="about-detail-side">
          <span class="hero-tag">İLKELELERİMİZ</span>
          <h2 class="section-title">TASARIM DİSİPLİNİ</h2>
        </div>
        
        <div class="about-detail-body-col">
          <div class="about-detail-card-noright">
            <span class="material-symbols-outlined text-primary about-detail-icon">construction</span>
            <h3 class="about-detail-title">Malzeme Dürüstlüğü</h3>
            <p class="about-detail-desc">
              Üretimlerimizde ham metal, katkısız terracotta ve organik kompost kullanıyoruz. Malzemenin kendi rengini ve dokusunu gizlemiyoruz.
            </p>
          </div>
          
          <div class="about-detail-card">
            <span class="material-symbols-outlined text-primary about-detail-icon">grid_view</span>
            <h3 class="about-detail-title">Rasyonel Tarım</h3>
            <p class="about-detail-desc">
              Sınırlı kaynakları en verimli şekilde kullanmak amacıyla ızgara tabanlı ekim planlaması ve geometrik saksı yerleşimi sunuyoruz.
            </p>
          </div>
          
          <div class="about-detail-card-nobottom">
            <span class="material-symbols-outlined text-primary about-detail-icon">groups</span>
            <h3 class="about-detail-title">Kolektif Üretim</h3>
            <p class="about-detail-desc">
              Tohumlarımızı ve tarım araçlarımızı yerel üreticiler ve kooperatiflerle iş birliği yaparak rasyonel standartlarda üretiyoruz.
            </p>
          </div>
          
          <div class="about-detail-card-plain">
            <span class="material-symbols-outlined text-primary about-detail-icon">energy_savings_leaf</span>
            <h3 class="about-detail-title">Geleceğe Dönüş</h3>
            <p class="about-detail-desc">
              GDO'suz ata tohumlarını koruyor, endüstriyel tarımın kimyasal atıklarına karşı rasyonel ve organik çözümler geliştiriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section class="about-process-section">
        <div class="about-process-header">
          <h2 class="section-title">Üretim Sürecimiz</h2>
          <span class="hero-tag">ATÖLYEDEN BAHÇEYE</span>
        </div>
        <div class="about-process-grid">
          <div class="about-process-card">
            <img class="about-process-img" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=400" alt="Tasarım" />
          </div>
          <div class="about-process-card">
            <img class="about-process-img" src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=400" alt="Dövme Çelik" />
          </div>
          <div class="about-process-card">
            <img class="about-process-img" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=400" alt="Toprak Atölyesi" />
          </div>
          <div class="about-process-card-noright">
            <img class="about-process-img" src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=400" alt="Tohum Saklama" />
          </div>
        </div>
      </section>

      <section class="about-practice-section">
        <div class="about-practice-side">
          <div class="about-practice-line"></div>
          <div class="about-practice-num-row">
            <span class="about-practice-num">1919</span>
            <span class="about-practice-title">Kuruluş Yılı &<br />Temel Akım</span>
          </div>
        </div>
        <div class="about-practice-body">
          <p class="about-practice-desc">
            Bauhaus'un Weimar'daki atölye ruhu, pratik ve teorik bilginin birleşimine dayanıyordu. Biz de tarımı sadece pratik bir eylem değil, ekolojik bir bilim ve tasarım disiplini olarak görüyoruz.
          </p>
          <div class="about-practice-subgrid">
            <div>
              <h4 class="about-detail-title">%100 Ekolojik Dürüstlük</h4>
              <p class="about-detail-desc">Kimyasal gübre ve tarım zehirleri içermeyen, tamamen geri dönüştürülebilir ham maddelerden üretilen ambalaj ve aletler.</p>
            </div>
            <div>
              <h4 class="about-detail-title">Yerel Ata Tohumları</h4>
              <p class="about-detail-desc">Coğrafyamızın biyoçeşitliliğini korumak adına genetiğiyle oynanmamış, nesilden nesile aktarılan sertifikalı tohum kitleri.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
