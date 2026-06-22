import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      text: "CreativeCore eski platformumuzu yüksek performanslı bir sisteme dönüştürdü. Mimari yaklaşımları ve tasarım dilleri bize büyük bir rekabet avantajı sağladı.",
      name: "Sarah Jenkins",
      role: "Ürün Başkan Yardımcısı, FinEdge Global",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
    },
    {
      text: "Teslim ettikleri ürünün hızı ve görsel kalitesi beklentilerimizin ötesindeydi. Mühendislerle doğrudan işbirliği yapmak büyük fark yarattı.",
      name: "Marcus Vance",
      role: "CTO, BioTech Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    {
      text: "Stratejik bakış açıları, yeni SaaS platformumuzu rekor sürede yeniden markalamamıza ve yayına almamıza yardımcı oldu. CreativeCore uzun vadeli teknoloji ortağımızdır.",
      name: "Elena Rostova",
      role: "CEO, StreamFlow",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-container">
          <div className="home-hero-left">
            <span className="home-hero-badge">DİJİTAL EKOSİSTEMLER</span>
            <h1 className="home-hero-title">Kod ile dijital gelecekler inşa ediyoruz.</h1>
            <p className="home-hero-desc">Pazarları yeniden tanımlayan ve benzersiz hız sunan kurumsal düzeyde web uygulamaları ve yüksek kaliteli marka sistemleri kuruyoruz.</p>
            <div className="home-hero-btns">
              <Link className="home-hero-btn-primary" to="/quote">
                Projeye Başla
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link className="home-hero-btn-secondary" to="/services">
                Hizmetleri Keşfet
              </Link>
            </div>
          </div>
          <div className="home-hero-right">
            <div className="home-hero-circle-wrapper">
              <img className="home-hero-img" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Kreatif stüdyo çalışma alanı" />
            </div>
            <div className="home-hero-badge-float glass-card">
              <span className="home-hero-badge-icon">bolt</span>
              <p className="home-hero-badge-text">Maksimum hız, dinamik olarak ölçeklenmek üzere tasarlandı.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="vision">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Stratejik Yetenekler</h2>
            <p className="services-desc">Ürün stratejisi, kullanıcı deneyimi tasarımı ve sağlam tam yığın mühendisliğe yönelik birinci sınıf bir yaklaşım.</p>
          </div>

          <div className="services-grid">
            <div className="service-card-lg-1 bento-item glass-card group">
              <div className="service-card-bg-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="service-card-overlay">
                <span className="service-card-icon">hub</span>
                <h3 className="service-card-title-lg">Dijital Strateji</h3>
                <p className="service-card-desc-lg">Yol haritanızı endüstri standartlarıyla uyumlu hale getirmek. Teknik denetimler, UX araştırması ve mimari planlar.</p>
                <Link className="service-card-link" to="/services/strategy">
                  Vaka Analizini Oku
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="service-card-sm-seo bento-item glass-card group">
              <div>
                <span className="service-card-icon-sec">draw</span>
                <h3 className="service-card-title-md">Ürün Tasarımı</h3>
                <p className="service-card-desc-md">Tutarlılık, kullanım kolaylığı ve görsel ayrım için oluşturulmuş sistemli kullanıcı arayüzü tasarım kütüphaneleri.</p>
              </div>
              <div className="service-card-list">
                <div className="service-card-list-item">
                  <span className="service-card-list-icon">check_circle</span>
                  <span>Figma Tasarım Sistemleri</span>
                </div>
                <div className="service-card-list-item">
                  <span className="service-card-list-icon">check_circle</span>
                  <span>Etkileşimli Prototipleme</span>
                </div>
              </div>
            </div>

            <div className="service-card-sm-ads bento-item glass-card group">
              <div>
                <span className="service-card-icon-sec">code</span>
                <h3 className="service-card-title-md text-on-primary">Tam Yığın Mühendislik</h3>
                <p className="service-card-desc-md text-on-primary/80">Hız, semantik işaretleme ve güvenilir barındırma için optimize edilmiş yeni nesil web çerçeveleri.</p>
              </div>
              <div className="service-card-progress-wrapper">
                <div className="service-card-progress-track">
                  <div className="service-card-progress-bar"></div>
                </div>
                <p className="service-card-progress-text text-on-primary/60">Lighthouse Performans Denetimi: %99</p>
              </div>
            </div>

            <div className="service-card-lg-2 bento-item glass-card">
              <img className="service-card-img-full" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" alt="Ekip çalışması" />
              <div className="service-card-gradient-overlay">
                <span className="service-card-icon">psychology</span>
                <h3 className="service-card-title-lg">Yapay Zeka ve Akıllı Entegrasyonlar</h3>
                <p className="service-card-desc-lg">Yapay zeka arayüzlerini doğrudan müşteri odaklı uygulamalara ve yönetim sistemlerine entegre etmek.</p>
                <Link className="service-card-link" to="/services/ai-systems">
                  Entegrasyonu Keşfet
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="process">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-header-left">
              <h2 className="testimonials-title">Yenilikçiler Tarafından Güvenilen</h2>
              <p className="testimonials-desc">Küresel ortaklarımızdan ve ürün paydaşlarımızdan gelen yorumları okuyun.</p>
            </div>
            <div className="testimonials-nav-btns">
              <button className="testimonials-nav-btn" onClick={prevSlide}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="testimonials-nav-btn" onClick={nextSlide}>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <span className="testimonial-quote-icon">format_quote</span>
              <p className="testimonial-text">{testimonials[activeSlide].text}</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar-wrapper">
                  <img className="testimonial-avatar" src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonials[activeSlide].name}</h4>
                  <p className="testimonial-role">{testimonials[activeSlide].role}</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card glass-card hidden md:block">
              <span className="testimonial-quote-icon">format_quote</span>
              <p className="testimonial-text">{testimonials[(activeSlide + 1) % testimonials.length].text}</p>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-avatar-wrapper">
                  <img className="testimonial-avatar" src={testimonials[(activeSlide + 1) % testimonials.length].avatar} alt={testimonials[(activeSlide + 1) % testimonials.length].name} />
                </div>
                <div>
                  <h4 className="testimonial-name">{testimonials[(activeSlide + 1) % testimonials.length].name}</h4>
                  <p className="testimonial-role">{testimonials[(activeSlide + 1) % testimonials.length].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box glass-card">
            <div className="cta-glow-1"></div>
            <div className="cta-glow-2"></div>
            <h2 className="cta-title">Ölçeklenmeye hazır mısınız?</h2>
            <p className="cta-desc">Uygulamanızı güvenli bir şekilde başlatmak için seçkin geliştiriciler ve dijital danışmanlardan oluşan bir ekiple çalışın.</p>
            <div className="cta-content-wrapper">
              <Link className="cta-btn" to="/quote">Bugün Başlayın</Link>
              <span className="cta-subtext">24 saat içinde teklif teslimi</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
