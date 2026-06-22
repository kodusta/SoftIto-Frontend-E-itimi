import { Link } from 'react-router-dom';

export default function Home() {
  const projects = [
    {
      id: 'konut',
      number: '01',
      title: 'BETON MİNİMALİST VİLLA',
      location: 'İSVİÇRE ALPLERİ',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vN8uvWy9hZuW8zUQjj4KTrCmFEnT2jabUfnIkxHJm_brMHl2IeCea56OLXu1ZdGpI8H8YrtElNxV-us2L_NhHcNJT2ebbpd4FuR7IDXPcgZkYcZSM2IbYKhThNBWUB_ZqFAsfo-3zQ7oFH-fh8LvVCBSQS5Mf-kHpNoiSztGVIkQXOWMfGe4pwwQVqTRJI2y_saXZBsVHBx229xbWMb4M_pPppxS8Ctw9Yx9w1PjsppiqKBQeWUcKkV-M0w5guPuGVg5DxB22Ucg'
    },
    {
      id: 'ticari',
      number: '02',
      title: 'MONOLİTİK KÜLTÜR MERKEZİ',
      location: 'KOPENHAG',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcBmhuL6ahf_6_RIAmdSie8wEZNBBXkOQv7svwcrU2nok5ok-4Ms8bkLgFEpnChAWGRs8USih3pRH_5YmwNEKXi94sbBVaeKqbcybSt5N2WaLFSRjp9u5NKobEo-lpmCQNvuJWVFTfn9qdotBpIOH9zChL736x_hro74HdvqXdNuOvzg_gi8s-Ny1zvq7GN3rKZxVABmy-Dh97srNMFHLTOIpWB5vvyBWUA9ecs3qGG-5-AqnEaChHF5gki798VlnHEWX08WNt-due'
    },
    {
      id: 'ic-mimari',
      number: '03',
      title: 'BRÜTALİST KONUT GALERİSİ',
      location: 'NEW YORK',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAIZvCTF1RnqYastSoAPKgJOo8U_KMZABhTrmAV9AS1eeNnWQp2sGLmWJF6zWZiJNTW8HZZtbrypbIHmLUoCWa8oc7peww0_OmOp2_eRdO__6CS1R0NpqP1CCbgexliZOQcZA1Tx0fPWLt-Tjq6lOPmaKbptIAhfh5HWeYaPF7AlAvIore3g3MiiHjOqX3bZq5EGMMfdShR0k52wXNDxyz-fxUlt30I6s6QoFpeEnMdiQtnMKXztTpPQk3v7g4CjomjSNwNQksKFq6'
    }
  ];

  return (
    <main>
      <section className="hero-section">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Mekansal Berraklık.<br />Yapısal Mantık.
          </h1>
          <p className="hero-desc">
            Sessizliğin ve biçimin kalıcılığına odaklanan seçkin bir mimari pratik sunuyoruz. Hizmetlerimiz minimalist felsefeyi yaşanabilir gerçekliğe dönüştürür.
          </p>
        </div>
        <div className="hero-image-block">
          <div className="services-intro-line"></div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="portfolio-header">
          <div>
            <span className="section-label">SEÇKİN PROJELERİMİZ</span>
            <h2 className="philosophy-title">Zamansız Tasarımlar</h2>
          </div>
        </div>
        <div className="portfolio-carousel">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-card-img-wrapper">
                <img src={project.image} alt={project.title} className="arch-image-zoom" />
              </div>
              <span className="portfolio-card-meta">PROJE {project.number} — {project.location}</span>
              <h3 className="portfolio-card-title">{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="service-breakdown-section">
        <div className="service-breakdown-header">
          <span className="section-label">ARC & LINE YÖNTEMİ</span>
          <h2 className="philosophy-title">Stratejik Hassasiyet</h2>
        </div>
        <div className="service-breakdown-grid">
          <div className="service-breakdown-card">
            <span className="material-symbols-outlined service-breakdown-icon">edit_note</span>
            <h4 className="service-breakdown-title">Keşif</h4>
            <p className="service-breakdown-desc">Sakinlerin temel ihtiyaçlarını ve arazinin benzersiz kısıtlamalarını ortaya çıkarmak için derinlemesine danışmanlık.</p>
          </div>
          <div className="service-breakdown-card-active">
            <span className="material-symbols-outlined service-breakdown-icon-active">polyline</span>
            <h4 className="service-breakdown-title-active">Görselleştirme</h4>
            <p className="service-breakdown-desc-active">İlk taş yerleştirilmeden önce mekansal netliği ve yapısal mantığı sağlamak için titiz çizimler ve 3B modelleme.</p>
          </div>
          <div className="service-breakdown-card">
            <span className="material-symbols-outlined service-breakdown-icon">construction</span>
            <h4 className="service-breakdown-title">Uygulama</h4>
            <p className="service-breakdown-desc">Ustalık ve malzeme bütünlüğü için tavizsiz standartlarla inşaatı yönetmek.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box-alt">
          <h2 className="cta-title-alt">Mekanınızı tanımlamaya hazır mısınız?</h2>
          <p className="cta-desc-alt">
            2025 yılı konut ve ticari komisyonları için başvuruları kabul ediyoruz. Birlikte kalıcı bir miras inşa edelim.
          </p>
          <div className="status-actions-row justify-center">
            <Link to="/randevu" className="cta-btn-dark">
              DANISMANLIK ALIN
            </Link>
            <Link to="/hakkimizda" className="cta-btn-ghost">
              FELSEFEMİZİ İNCELEYİN
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
