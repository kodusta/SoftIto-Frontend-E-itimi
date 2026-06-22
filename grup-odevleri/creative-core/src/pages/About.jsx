import { Link } from 'react-router-dom'

export default function About() {
  const timeline = [
    {
      year: "14",
      title: "Kuruluş",
      desc: "Tasarım meraklısı üç ortak tarafından küçük bir stüdyoda, minimalist arayüz mantığına odaklanılarak kuruldu."
    },
    {
      year: "18",
      title: "Kurumsal Dönüşüm",
      desc: "Aesthetic ve yüksek mühendisliği entegre ederek Fortune 500 şirketlerine hizmet verecek şekilde operasyonlar büyütüldü."
    },
    {
      year: "24",
      title: "Core Dönemi",
      desc: "Modern dijital kimliğin merkezi motoru olma konumumuzu vurgulamak için CreativeCore markasına geçildi."
    }
  ]

  const team = [
    {
      name: "Elena Vance",
      role: "Kreatif Direktör",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Marcus Thorne",
      role: "Teknik Lider",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Sia Kim",
      role: "Baş Stratejist",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
    },
    {
      name: "Julian Reed",
      role: "Ürün Tasarımcısı",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
    }
  ]

  return (
    <main>
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-left">
            <h1 className="about-hero-title">DİJİTAL GELECEKLERİ MİMARİ EDİYORUZ.</h1>
            <p className="about-hero-desc">Kreatif anlatım ile fonksiyonel zarafetin sınırlarını zorlamaya adanmış üst düzey tasarımcılar, mühendisler ve vizyonerlerden oluşan bir topluluk.</p>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="about-mission-grid">
          <div className="about-mission-card glass-card bento-item">
            <span className="text-secondary font-label-md">MİSYON</span>
            <h2 className="services-title">Radikal İnovasyon ile Güven İnşa Ediyoruz</h2>
            <p className="about-hero-desc">Misyonumuz, karmaşık kurumsal güvenilirlik ile en son kreatif ifade biçimleri arasındaki boşluğu doldurmaktır. Biz sadece web siteleri yapmıyoruz; markaların sektörlerinde lider olmalarını sağlayan ekosistemler kuruyoruz.</p>
          </div>
          <div className="about-vision-card bento-item">
            <div>
              <span className="text-secondary-fixed font-label-md">VİZYON</span>
              <h3 className="service-card-title-lg">Sofistike dijital dönüşüm için küresel çıpa olmak.</h3>
            </div>
            <div>
              <span className="material-symbols-outlined text-secondary">bolt</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-history-section">
        <div className="about-history-container">
          <div className="about-history-header">
            <h2 className="services-title">Hassasiyetle Geçen On Yıl</h2>
            <p className="services-desc">Kreatif bir gücün evrimi.</p>
          </div>
          <div className="about-history-timeline">
            {timeline.map((item, idx) => (
              <div className={idx % 2 === 0 ? "about-history-item group" : "about-history-item-reverse group"} key={idx}>
                <div className={idx % 2 === 0 ? "about-history-content-left" : "about-history-content-right"}>
                  <div className="glass-card p-6">
                    <h4 className="service-card-title-md">{item.title}</h4>
                    <p className="services-desc">{item.desc}</p>
                  </div>
                </div>
                <div className="about-history-badge bg-primary">{item.year}</div>
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-team-header">
          <div>
            <span className="text-secondary font-label-md">MİMARLAR</span>
            <h2 className="services-title">Core'un Arkasındaki Akıllar.</h2>
          </div>
        </div>
        <div className="about-team-grid">
          {team.map((member, idx) => (
            <div className="about-team-card group" key={idx}>
              <div className="about-team-img-wrapper">
                <img className="about-team-img" src={member.img} alt={member.name} />
              </div>
              <h4 className="service-card-title-md">{member.name}</h4>
              <p className="text-secondary font-label-md">{member.role}</p>
              <div className="about-team-socials">
                <span className="material-symbols-outlined">share</span>
                <span className="material-symbols-outlined">contact_mail</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-culture-section">
        <div className="about-culture-container">
          <div className="about-culture-header">
            <h2 className="services-title text-on-primary">İnovasyonun Doğduğu Yer.</h2>
            <p className="about-hero-desc text-on-primary/80">Kültürümüz, disiplin ile deneyselliğin bir birleşimidir. En iyi işlerin, parlak zihinlere oyun oynama, hata yapma ve en nihayetinde sınırları aşma alanı verildiğinde ortaya çıktığına inanıyoruz.</p>
          </div>
          <div className="about-culture-grid">
            <div className="about-culture-item-lg bento-item">
              <img className="about-culture-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Ofis işbirliği" />
              <div className="about-culture-overlay">
                <span className="font-label-md text-on-primary">ORTAK ÇALIŞMA ALANI</span>
              </div>
            </div>
            <div className="about-culture-item-sm bento-item">
              <img className="about-culture-img" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" alt="Tasarım oturumu" />
            </div>
            <div className="about-culture-item-sm bento-item">
              <img className="about-culture-img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Rahatlama alanı" />
            </div>
            <div className="about-culture-item-wide bento-item">
              <img className="about-culture-img" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800" alt="Kutlama" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
