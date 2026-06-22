import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <main className="pt-32 pb-24">
      <section className="services-list-hero">
        <div className="home-hero-left">
          <span className="home-hero-badge">YETENEKLERİMİZ</span>
          <h1 className="home-hero-title">Dijital mükemmellik, <span className="text-secondary">tasarlandı.</span></h1>
          <p className="home-hero-desc">Pazarları tanımlayan ürünler oluşturmak için teknik hassasiyeti kreatif ifadeyle harmanlıyoruz. Hizmetlerimiz kurumsal ölçek ve startup hızı için uyarlanmıştır.</p>
        </div>
      </section>

      <section className="services-container">
        <div className="services-list-grid">
          <div className="services-list-bento-lg glass-card bento-item group">
            <div>
              <div className="flex gap-4">
                <span className="service-card-icon">hub</span>
                <div>
                  <h3 className="service-card-title-lg">Dijital Strateji ve Yol Haritası</h3>
                  <p className="service-card-desc-lg">İş hedeflerinizi en son teknoloji ortamlarıyla hizalıyoruz. Pazar analizinden üst düzey mimari planlamaya kadar her pikselin bir amaca hizmet etmesini sağlıyoruz.</p>
                </div>
              </div>
              <div className="home-hero-btns mt-6">
                <Link className="service-card-link" to="/services/strategy">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
              </div>
            </div>
          </div>

          <div className="services-list-bento-sm glass-card bento-item">
            <div>
              <span className="service-card-icon text-secondary">draw</span>
              <h3 className="service-card-title-md">UX/UI Ürün Tasarımı</h3>
              <p className="service-card-desc-md">Karmaşık SaaS ve tüketici platformları için insan etkileşimine ve görsel hiyerarşiye öncelik veren sistem odaklı tasarım.</p>
              <Link className="service-card-link mt-6" to="/services/design">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
          </div>

          <div className="services-list-bento-sm glass-card bento-item">
            <div>
              <span className="service-card-icon text-primary">code</span>
              <h3 className="service-card-title-md">Mühendislik</h3>
              <p className="service-card-desc-md">Modern çerçeveler kullanarak performans, erişilebilirlik ve ölçeklenebilirliğe odaklanan tam yığın geliştirme.</p>
              <Link className="service-card-link mt-6" to="/services/engineering">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
          </div>

          <div className="services-list-bento-brand glass-card bento-item">
            <div>
              <span className="service-card-icon text-secondary">auto_awesome</span>
              <h3 className="service-card-title-md">Marka Kimliği</h3>
              <p className="service-card-desc-md">Dijital yerli kitlelerde yankı uyandıran sözlü ve görsel kimlikler hazırlamak. Startupları ikonlara dönüştürüyoruz.</p>
              <Link className="service-card-link mt-6" to="/services/branding">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
            <div className="flex-1 mt-6 md:mt-0">
              <img className="service-card-img-full rounded-lg" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" alt="Marka Kimliği" />
            </div>
          </div>

          <div className="services-list-bento-half glass-card bento-item">
            <span className="service-card-icon text-primary">psychology</span>
            <h3 className="service-card-title-md">Yapay Zeka ve Akıllı Sistemler</h3>
            <p className="service-card-desc-md">Karmaşık yaratıcı ve analitik görevleri otomatikleştirmek için üretken yapay zeka ve makine öğrenimi modellerini mevcut iş akışlarına entegre etmek.</p>
            <Link className="service-card-link mt-6" to="/services/ai-systems">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>

          <div className="services-list-bento-half glass-card bento-item">
            <span className="service-card-icon text-secondary">trending_up</span>
            <h3 className="service-card-title-md">Dijital Büyüme</h3>
            <p className="service-card-desc-md">Dijital ürününüzün tam pazar potansiyeline ulaşmasını sağlayan veri destekli performans pazarlaması ve SEO stratejileri.</p>
            <Link className="service-card-link mt-6" to="/services/growth">Daha Fazlası <span className="material-symbols-outlined">arrow_forward</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
