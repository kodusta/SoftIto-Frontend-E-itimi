export default function About() {
  return (
    <main className="about-layout">
      <section className="about-hero">
        <h2 className="about-hero-title">Eğitimi Geleceğe Taşıyoruz</h2>
        <p className="about-hero-desc">
          EduStream olarak amacımız, dünyanın her yerindeki öğrencileri sektör liderlerinin deneyimleri ve pratik projelerle buluşturarak kariyer hedeflerine ulaştırmaktır.
        </p>
      </section>

      <section className="about-mission-grid">
        <div className="about-mission-card">
          <div className="about-mission-icon-wrapper">
            <span className="material-symbols-outlined about-mission-icon">target</span>
          </div>
          <h3 className="about-mission-title">Misyonumuz</h3>
          <p className="about-mission-desc">
            Sınıflar arası engelleri kaldırarak herkesin yüksek kaliteli ve modern yazılım, tasarım ve iş yönetimi eğitimlerine erişebilmesini sağlamaktır.
          </p>
        </div>

        <div className="about-mission-card">
          <div className="about-mission-icon-wrapper">
            <span className="material-symbols-outlined about-mission-icon">visibility</span>
          </div>
          <h3 className="about-mission-title">Vizyonumuz</h3>
          <p className="about-mission-desc">
            Küresel düzeyde en çok tercih edilen e-öğrenme platformu haline gelmek ve milyonlarca profesyonelin kariyer dönüşümüne öncülük etmektir.
          </p>
        </div>

        <div className="about-mission-card">
          <div className="about-mission-icon-wrapper">
            <span className="material-symbols-outlined about-mission-icon">handshake</span>
          </div>
          <h3 className="about-mission-title">Değerlerimiz</h3>
          <p className="about-mission-desc">
            Eğitimde şeffaflık, sürekli yenilikçilik, kalite odaklılık ve topluluk gücüne olan inancımızla kararlarımızı şekillendiriyoruz.
          </p>
        </div>
      </section>

      <section className="about-founders-section">
        <h3 className="font-headline-lg text-headline-lg text-on-surface text-center mb-xl">Kurucularımız</h3>
        <div className="about-founders-grid">
          <div className="founder-card group">
            <div className="founder-img-wrapper">
              <img 
                className="founder-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFdZfFq0i2aWl65f_11x8pP7H33IuQISJX542Y_C5MsZjirkLZIAhxhsQdojTi_HOi6PiN3NVXEP9KSD5TH3tg-cv6XQhCjP4eKLm9dOjLfuWSW4isOEuvuIA2GPsJx-NE8w42Br6xbHkhAn6PNhV8HJktUTOQmXfee_1e6lwHfNV-WDugR-6auWwHfIm_YbQXwM7S_m4mupnRD-hb98MFRfq0no2pj7lJ_HKkTLev8dc9VhBxALH6XelfmhKtIeF5GxKJStaQ-iQG" 
                alt="Ali Yılmaz" 
              />
            </div>
            <div className="founder-content">
              <h4 className="founder-name">Ali Yılmaz</h4>
              <p className="founder-role">EŞ KURUCU & CEO</p>
              <p className="founder-bio">
                Ali, 15 yılı aşkın teknoloji yönetimi deneyimine sahip eski bir yazılım mimarıdır. Eğitimde yenilikçi modeller geliştirmek üzere EduStream platformunu hayata geçirmiştir.
              </p>
            </div>
          </div>

          <div className="founder-card group">
            <div className="founder-img-wrapper">
              <img 
                className="founder-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrTZKohqCeLuwE7Yo0eF98TTWM4ZdNEJHiRDtgwK7lpLu3jKQBZMbk7k6t7ngFWXs4u-hELV-HuT0LftSpvXFtNKbwvrEsH_h86dBNyhitYu_-uQkjzss3V-lXj2pah3MgU4kVG6AZ8qzgCYX60jT-IH_AfAXrQePqVaoiuQb7oteqoJgtNj-CuJRP20ZMLEcLlo4Qd4w1cEsgRkV-nrFtIVJLp2hC_A5Uos4LkbWKN3NXeIHgN149nt0AAVXuqxKQwr_ajfnMjKM" 
                alt="Merve Kaya" 
              />
            </div>
            <div className="founder-content">
              <h4 className="founder-name">Merve Kaya</h4>
              <p className="founder-role">EŞ KURUCU & COO</p>
              <p className="founder-bio">
                Merve, dijital dönüşüm ve sürdürülebilir büyüme alanında uzmanlaşmış eski bir yönetim danışmanıdır. Operasyon ve öğrenci başarısı birimlerine liderlik etmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
