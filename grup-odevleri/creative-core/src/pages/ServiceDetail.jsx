import { useParams, Link } from 'react-router-dom'

export default function ServiceDetail() {
  const { serviceId } = useParams()

  const serviceCatalog = {
    strategy: {
      badge: "DİJİTAL STRATEJİ",
      title: "Dijital Strateji ve Yol Haritası",
      desc: "İş hedeflerinizi en son teknoloji ortamlarıyla hizalıyoruz. Pazar analizinden üst düzey mimari planlamaya kadar her pikselin bir amaca hizmet etmesini sağlıyoruz.",
      techTitle: "Stratejik Çerçeveler",
      techDesc: "Stratejik yaklaşımımız nitel araştırma, veri denetimi ve pazar içgörülerine dayanmaktadır.",
      techCards: [
        { icon: "analytics", title: "Pazar Denetimi", desc: "Mevcut pazar konumlandırmasının değerlendirilmesi." },
        { icon: "target", title: "KPI Tanımlama", desc: "Net ürün başarı metriklerinin belirlenmesi." },
        { icon: "architecture", title: "Yol Haritası Çıkarma", desc: "Uzun vadeli geliştirme planlarının tasarlanması." },
        { icon: "group", title: "Kullanıcı Araştırması", desc: "Doğrudan müşteri mülakat analizleri." }
      ],
      steps: [
        {
          num: "01",
          title: "Keşif ve Denetim",
          desc: "Tek bir satır kod yazılmadan önce iş mantığınıza, kullanıcı personalarınıza ve teknik gereksinimlerinize derinlemesine dalıyoruz.",
          img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Mimari Plan",
          desc: "Denetim bulgularını yapılandırılmış kullanıcı akışlarına, teknoloji yığınlarına ve operasyonel kilometre taşlarına dönüştürme.",
          img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "Küresel Finans Uyumlaştırması",
      featuredDesc: "FinEdge Global için 4 ürün ekibini tek bir strateji altında hizalayan yeni bir strateji çerçevesini nasıl haritalandırdık.",
      featuredStat: "100%",
      featuredStatLabel: "Uyum Oranı"
    },
    design: {
      badge: "UX/UI TASARIMI",
      title: "UX/UI Ürün Tasarımı",
      desc: "Karmaşık SaaS ve tüketici platformları için insan etkileşimine ve görsel hiyerarşiye öncelik veren sistem odaklı tasarım.",
      techTitle: "Tasarım Yetenekleri",
      techDesc: "Birinci sınıf tasarım sistemleri, hızlı etkileşimli prototipler oluşturuyor ve derin kullanıcı testi oturumları yürütüyoruz.",
      techCards: [
        { icon: "layers", title: "Tasarım Sistemleri", desc: "Ürün ölçeklemesi için oluşturulmuş Figma kitaplıkları." },
        { icon: "touch_app", title: "Prototipleme", desc: "Yüksek kalitede tıklanabilir etkileşimler." },
        { icon: "visibility", title: "Kullanıcı Testi", desc: "Düzenlerin gerçek kullanıcılarla doğrulanması." },
        { icon: "palette", title: "Görsel Tasarım", desc: "Sofistike stiller ve karanlık modlar." }
      ],
      steps: [
        {
          num: "01",
          title: "Taslak ve Keşif",
          desc: "Düzen hiyerarşilerini, duyarlı kesme noktalarını ve temel mikro etkileşimleri tanımlıyoruz.",
          img: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Görsel Mühendislik",
          desc: "Nihai yüksek kaliteli ekranlar, varlık dışa aktarma kılavuzları ve geliştirici el sıkışma belgeleri hazırlama.",
          img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "FinEdge Arayüz Tasarımı",
      featuredDesc: "Canlı hisse senedi telemetrisini birinci sınıf bir arayüz stiliyle görüntülemek için yüksek performanslı bir finansal gösterge tablosunu yeniden tasarlama.",
      featuredStat: "40%",
      featuredStatLabel: "Kullanılabilirlik Skoru Artışı"
    },
    engineering: {
      badge: "MÜHENDİSLİK",
      title: "Tam Yığın Mühendislik",
      desc: "Modern çerçeveler kullanarak performans, erişilebilirlik ve ölçeklenebilirliğe odaklanan tam yığın geliştirme.",
      techTitle: "Teknoloji Yığını",
      techDesc: "Teknoloji yığınımız hız, ölçeklenebilirlik ve uzun vadeli uygulanabilirlik için seçilmiştir.",
      techCards: [
        { icon: "bolt", title: "Next.js", desc: "Müthiş hız için statik üretim." },
        { icon: "architecture", title: "Başsız CMS", desc: "Bağımsız içerik yönetimi." },
        { icon: "animation", title: "GSAP", desc: "Karmaşık hareket ve etkileşimler." },
        { icon: "database", title: "Supabase", desc: "Gerçek zamanlı veri altyapısı." }
      ],
      steps: [
        {
          num: "01",
          title: "Teknik Taslak",
          desc: "Veritabanı şemalarını, API yönlendiricilerini mimari olarak tasarlama ve depo yapılandırmalarını ayarlama.",
          img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Temiz Uygulama",
          desc: "Sürekli entegrasyon test hatlarıyla bileşenlere ayrılmış, semantik kod yazma.",
          img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "Kurumsal SaaS Dağıtımı",
      featuredDesc: "Eski bir monolitik platformu modern bir sunucusuz altyapıya nasıl taşıdık, sonuçta %60 daha hızlı yükleme süreleri elde ettik.",
      featuredStat: "60%",
      featuredStatLabel: "Daha Hızlı Yükleme"
    },
    branding: {
      badge: "MARKA KİMLİĞİ",
      title: "Marka Kimliği Sistemleri",
      desc: "Dijital yerli kitlelerde yankı uyandıran sözlü ve görsel kimlikler hazırlamak. Startupları ikonlara dönüştürüyoruz.",
      techTitle: "Marka Araçları",
      techDesc: "Tasarım belirteçlerini, renk yönergelerini, tipografi kataloglarını ve ses tonu yönergelerini tanımlıyoruz.",
      techCards: [
        { icon: "auto_awesome", title: "Logolar ve İşaretler", desc: "Akılda kalıcı modern semboller." },
        { icon: "font_download", title: "Tipografi", desc: "Özel editoryal yazı tipi setleri." },
        { icon: "menu_book", title: "Stil Kılavuzları", desc: "Kapsamlı marka kural kitapları." },
        { icon: "campaign", title: "Sözlü Kimlik", desc: "Marka mesajları ve metin yazarlığı." }
      ],
      steps: [
        {
          num: "01",
          title: "Konsept Aşaması",
          desc: "Pazar hedeflerine uyması için birden fazla tasarım yönünü, ruh hali panolarını ve estetik paletleri keşfetme.",
          img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Kimlik Kılavuzu",
          desc: "Baskı, dijital ve sosyal görsel yönleri temiz bir marka merkezinde birleştirme.",
          img: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "StreamFlow Yeniden Markalama",
      featuredDesc: "Bir bulut düzenleme aracının gelişmiş geliştirici odaklı estetiğine uyması için tamamen yeni bir kurumsal imaj yaratmak.",
      featuredStat: "10x",
      featuredStatLabel: "Marka Bilinirliği Endeksi"
    },
    "ai-systems": {
      badge: "YAPAY ZEKA ENTEGRASYONU",
      title: "Yapay Zeka ve Akıllı Sistemler",
      desc: "Karmaşık yaratıcı ve analitik görevleri otomatikleştirmek için üretken yapay zeka ve makine öğrenimi modellerini mevcut iş akışlarına entegre etmek.",
      techTitle: "Yapay Zeka Çerçeveleri",
      techDesc: "En son LLM ince ayarını, özel vektörleri ve akıllı aracıları kullanma.",
      techCards: [
        { icon: "psychology", title: "Ajan Ağları", desc: "Otonom operasyonel varlıklar." },
        { icon: "dataset", title: "Vektör Arama", desc: "Bağlamsal dokümantasyon kurtarma." },
        { icon: "smart_toy", title: "Model İnce Ayarı", desc: "Modelleri alan verilerine göre ince ayar yapma." },
        { icon: "api", title: "API Entegrasyonu", desc: "Güvenli REST uç noktalarını bağlama." }
      ],
      steps: [
        {
          num: "01",
          title: "Uygulanabilirlik Denetimi",
          desc: "Yapay zeka otomasyonuna uygun veritabanı parametrelerini ve operasyonel darboğazları analiz ediyoruz.",
          img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Sistem Entegrasyonu",
          desc: "Yedekli yönlendirme mimarileriyle güvenli model ağ geçitleri ve özel istemler dağıtma.",
          img: "https://images.unsplash.com/photo-1680814907495-e29b12535ee6?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "Destek Ajanı Ağı",
      featuredDesc: "Karmaşık kullanıcı biletlerinin %85'ini otomatik olarak başarıyla çözen otonom bir vektör destekli aracı katmanı dağıtmak.",
      featuredStat: "85%",
      featuredStatLabel: "Otomatik Çözüm"
    },
    growth: {
      badge: "DİJİTAL BÜYÜME",
      title: "Performans ve SEO Büyümesi",
      desc: "Dijital ürününüzün tam pazar potansiyeline ulaşmasını sağlayan veri destekli performans pazarlaması ve SEO stratejileri.",
      techTitle: "Büyüme Motoru",
      techDesc: "Yapılandırılmış meta veri optimizasyonu, veri izleme platformları ve kampanya otomasyon araçlarının kullanılması.",
      techCards: [
        { icon: "travel_explore", title: "Teknik SEO", desc: "Şemaları ve yükleme performansını optimize etme." },
        { icon: "bar_chart", title: "Veri Takibi", desc: "Güvenli dönüşüm piksellerini dağıtma." },
        { icon: "ads_click", title: "Paid Ads", desc: "Yüksek verimli dönüşüm campaigns." },
        { icon: "edit_document", title: "İçerik Motoru", desc: "Organik arama görünürlüğü kanalları." }
      ],
      steps: [
        {
          num: "01",
          title: "Anahtar Kelime ve Teknik Denetim",
          desc: "Pazar kapsamındaki tarama hatalarını, sayfa performansı indekslerini ve anahtar kelime boşluklarını belirleme.",
          img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
        },
        {
          num: "02",
          title: "Başlat ve Optimize Et",
          desc: "Optimize edilmiş içerik, şema işaretlemeleri ve günlük teklif otomasyon parametrelerini dağıtma.",
          img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
        }
      ],
      featuredTitle: "FinEdge SEO Ölçeklemesi",
      featuredDesc: "Organik arama trafiğini 6 ayda aylık 200 bin ziyaretçiye çıkaran sistematik bir editoryal strateji oluşturmak.",
      featuredStat: "300%",
      featuredStatLabel: "Arama Trafiği Artışı"
    }
  }

  const service = serviceCatalog[serviceId] || serviceCatalog.strategy

  return (
    <main className="pt-20">
      <section className="detail-hero">
        <div className="detail-hero-container">
          <div className="about-hero-left">
            <span className="home-hero-badge text-secondary-fixed">{service.badge}</span>
            <h1 className="home-hero-title text-on-primary">{service.title}</h1>
            <p className="home-hero-desc text-on-primary-container">{service.desc}</p>
          </div>
        </div>
      </section>

      <section className="detail-tech-section">
        <div className="services-header">
          <h2 className="services-title">{service.techTitle}</h2>
          <p className="services-desc">{service.techDesc}</p>
        </div>
        <div className="detail-tech-grid">
          {service.techCards.map((card, idx) => (
            <div className="detail-tech-card" key={idx}>
              <span className="service-card-icon-sec">{card.icon}</span>
              <h3 className="service-card-title-md">{card.title}</h3>
              <p className="services-desc text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-process-section">
        <div className="detail-process-container">
          {service.steps.map((step, idx) => (
            <div className={idx % 2 === 0 ? "detail-process-row" : "detail-process-row-reverse"} key={idx}>
              <div className="w-full md:w-1/2">
                <div className="detail-process-card">
                  <span className={idx % 2 === 0 ? "detail-process-num -left-5" : "detail-process-num -right-5"}>{step.num}</span>
                  <h3 className="services-title">{step.title}</h3>
                  <p className="services-desc">{step.desc}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="detail-process-img-wrapper">
                  <img className="w-full h-full object-cover" src={step.img} alt={step.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-featured-section">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-secondary/5 to-background"></div>
        <div className="detail-featured-container">
          <div className="detail-featured-grid">
            <div>
              <h2 className="services-title">Öne Çıkan Başarı</h2>
              <p className="services-desc mb-6">{service.featuredDesc}</p>
              <Link className="service-card-link" to="/contact">Projeyi Tartışın <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
            <div className="detail-featured-mockup-wrapper glass-card">
              <div className="detail-featured-mockup-img">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Gösterge paneli" />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="service-card-title-md">{service.featuredTitle}</h4>
                  <p className="services-desc text-sm">Finans Teknolojileri Uygulaması</p>
                </div>
                <div className="text-right">
                  <span className="services-title text-secondary">{service.featuredStat}</span>
                  <p className="services-desc text-xs uppercase tracking-widest">{service.featuredStatLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section bg-on-background text-on-primary">
        <div className="cta-container">
          <h2 className="cta-title text-on-primary">İnşa etmeye hazır mısınız?</h2>
          <p className="cta-desc text-on-primary-container">Bir sonraki dijital atılımınızı nasıl tasarlayabileceğimizi tartışalım. Ekibimiz vizyonunuzu ölçeklendirmeye hazır.</p>
          <div className="home-hero-btns justify-center">
            <Link className="home-hero-btn-primary bg-white text-primary hover:bg-secondary hover:text-white" to="/quote">PROJEYE BAŞLA</Link>
            <Link className="home-hero-btn-secondary border-outline text-on-primary hover:border-secondary" to="/services">HİZMETLERİMİZİ GÖRÜN</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
