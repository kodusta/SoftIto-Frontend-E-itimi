import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 'konut',
      number: '01',
      title: 'Konut Tasarımı',
      desc: 'Işık ve hacim yoluyla sığınak yaratmak. Konut pratiğimiz, brütalist dürüstlüğü insan deneyiminin yumuşaklığı ile dengeleyen üst düzey özel mülklere odaklanır. Sakin bir nefes gibi hissettiren evler tasarlıyoruz.',
      btnText: 'SÜRECİ İNCELE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8vN8uvWy9hZuW8zUQjj4KTrCmFEnT2jabUfnIkxHJm_brMHl2IeCea56OLXu1ZdGpI8H8YrtElNxV-us2L_NhHcNJT2ebbpd4FuR7IDXPcgZkYcZSM2IbYKhThNBWUB_ZqFAsfo-3zQ7oFH-fh8LvVCBSQS5Mf-kHpNoiSztGVIkQXOWMfGe4pwwQVqTRJI2y_saXZBsVHBx229xbWMb4M_pPppxS8Ctw9Yx9w1PjsppiqKBQeWUcKkV-M0w5guPuGVg5DxB22Ucg'
    },
    {
      id: 'ticari',
      number: '02',
      title: 'Ticari Mimari',
      desc: 'Mekansal titizlik yoluyla marka kimliğini tanımlamak. Butik galerilerden monolitik kurumsal genel merkezlere kadar hassasiyet, uzun ömürlülük ve profesyonel mükemmellik ileten ticari ortamlar tasarlıyoruz.',
      btnText: 'PORTFOLYOYU GÖR',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcBmhuL6ahf_6_RIAmdSie8wEZNBBXkOQv7svwcrU2nok5ok-4Ms8bkLgFEpnChAWGRs8USih3pRH_5YmwNEKXi94sbBVaeKqbcybSt5N2WaLFSRjp9u5NKobEo-lpmCQNvuJWVFTfn9qdotBpIOH9zChL736x_hro74HdvqXdNuOvzg_gi8s-Ny1zvq7GN3rKZxVABmy-Dh97srNMFHLTOIpWB5vvyBWUA9ecs3qGG-5-AqnEaChHF5gki798VlnHEWX08WNt-due'
    },
    {
      id: 'ic-mimari',
      number: '03',
      title: 'İç Mimari Curation',
      desc: 'Minimalizmin dokunsal yönü. İç mimari odağımız, ham taş, karartılmış çelik ve kadim ahşap gibi "dürüst" malzemelerin kürasyonuna odaklanır. Duyu organlarını doku ve gölgeyle harekete geçiren ortamlar yaratıyoruz.',
      btnText: 'DETAYLARI İNCELE',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAIZvCTF1RnqYastSoAPKgJOo8U_KMZABhTrmAV9AS1eeNnWQp2sGLmWJF6zWZiJNTW8HZZtbrypbIHmLUoCWa8oc7peww0_OmOp2_eRdO__6CS1R0NpqP1CCbgexliZOQcZA1Tx0fPWLt-Tjq6lOPmaKbptIAhfh5HWeYaPF7AlAvIore3g3MiiHjOqX3bZq5EGMMfdShR0k52wXNDxyz-fxUlt30I6s6QoFpeEnMdiQtnMKXztTpPQk3v7g4CjomjSNwNQksKFq6'
    }
  ];

  return (
    <main>
      <section className="services-intro-section">
        <div className="services-intro-left">
          <h1 className="hero-title">
            Mekansal Berraklık.<br />Yapısal Mantık.
          </h1>
          <p className="hero-desc">
            Sessizliğin ve biçimin kalıcılığına odaklanan seçkin bir mimari pratik sunuyoruz. Hizmetlerimiz minimalist felsefeyi yaşanabilir gerçekliğe dönüştürür.
          </p>
        </div>
        <div className="services-intro-right">
          <div className="services-intro-line"></div>
        </div>
      </section>

      <section className="services-list-section">
        {services.map((service, idx) => (
          <div key={service.id} className="service-row-grid">
            <div className={`service-row-text-col ${idx % 2 === 0 ? 'order-2 md:order-1' : 'md:pl-12'}`}>
              <div className="service-row-badge-wrapper">
                <span className="service-row-badge">{service.number}</span>
                <h2 className="service-row-title">{service.title}</h2>
              </div>
              <p className="service-row-desc">{service.desc}</p>
              <Link to={`/hizmet/${service.id}`} className="service-row-btn">
                {service.btnText}
              </Link>
            </div>
            <div className={`service-row-img-col ${idx % 2 === 0 ? 'order-1 md:order-2' : ''}`}>
              <div className="arch-image-wrapper-wide">
                <img src={service.image} alt={service.title} className="arch-image-zoom" />
              </div>
            </div>
          </div>
        ))}
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
