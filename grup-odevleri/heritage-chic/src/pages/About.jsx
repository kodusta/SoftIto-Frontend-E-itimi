import React from 'react';

export default function About() {
  return (
    <div>
      <section className="contact-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM')` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Hikayemiz</h1>
          <p className="hero-desc">Berna & Aslı Cafe'nin zanaatkarlık serüveni.</p>
        </div>
      </section>

      <section className="section-story">
        <div className="story-container">
          <div className="story-left">
            <h2 className="section-title">Kuruluş Felsefemiz</h2>
            <div className="story-text-wrap">
              <p>
                Berna & Aslı Cafe, 2016 yılında iki dostun nitelikli kahveye ve el yapımı tatlılara olan tutkusuyla kuruldu. Amacımız, misafirlerimize sadece bir fincan kahve sunmak değil; günün koşuşturmacasında soluklanabilecekleri, kendilerini evlerinde hissedecekleri sıcak bir mahalle sığınağı yaratmaktı.
              </p>
              <p>
                Tüm içeceklerimizi en taze çekirdeklerden, tatlı ve hamur işlerimizi ise hiçbir katkı maddesi kullanmadan günlük olarak üretiyoruz. Kaliteden asla ödün vermeyen duruşumuz, bizi bugünlere getiren en büyük gücümüz oldu.
              </p>
            </div>
          </div>
          <div className="story-right">
            <div className="story-image-wrap">
              <img 
                className="story-image" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg" 
                alt="Fırından yeni çıkmış ürünler" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-values">
        <div className="values-container">
          <div className="values-header">
            <h2 className="section-title">Önceliklerimiz</h2>
            <p className="values-subtitle">Sizin için en iyisini hazırlarken odaklandığımız üç temel direk.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-wrap">
                <span className="material-symbols-outlined text-secondary text-4xl">eco</span>
              </div>
              <h3 className="value-title">%100 Doğal Malzemeler</h3>
              <p className="value-desc">
                Kullandığımız unlardan meyvelere kadar her malzemenin en doğalını ve tazesini yerel üreticilerden doğrudan seçiyoruz.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <span className="material-symbols-outlined text-secondary text-4xl">tempest</span>
              </div>
              <h3 className="value-title">Kendi Kavrumumuz</h3>
              <p className="value-desc">
                Yeşil çekirdek olarak ithal ettiğimiz kahveleri, profillerine en uygun sıcaklık ve sürelerde kendimiz kavuruyoruz.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrap">
                <span className="material-symbols-outlined text-secondary text-4xl">volunteer_activism</span>
              </div>
              <h3 className="value-title">Sıcak Misafirperverlik</h3>
              <p className="value-desc">
                Kapımızdan giren her misafirimizi güler yüzle karşılamak ve onlara kendilerini özel hissettirmek bizim için bir görevdir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
