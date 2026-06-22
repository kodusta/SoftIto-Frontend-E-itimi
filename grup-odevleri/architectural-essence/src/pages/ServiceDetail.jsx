import { useParams, Link } from 'react-router-dom';

export default function ServiceDetail() {
  const { serviceId } = useParams();

  const data = {
    konut: {
      title: 'KONUT TASARIMI',
      desc: 'Kalıcı sığınaklar inşa etmek. Konut pratiğimiz, brütalist dürüstlük ile rafine lüksün kesiştiği noktaya odaklanarak sakinleriyle nefes alan alanlar yaratır.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx8NLGIJYxG5HqsIZwGZVkduO_FIRzT7m6AH8r5JCnrG-5NKTuTjYZuaseVj_RI-De88tqL0H9LPN1T-AszU6hlNTTgdJWzMb7AiFOeAa4xeeuV0aTuV7SfWjaJN0ojiTobRDdVwy87F4M21RoGJEAiv1QNX0SpeS_zItpu4qX6LBiHOFy0bA3oCWxZx8h5Vx6_Yt536M-s1gLaoooBpgze57cIBDPLhs0CGyUKizAmbqlLOKYXMuXMHzZPVJZm-RdhQk7N6-6SzLZ',
      caseTitle: 'MONOLİT EVİ',
      caseDesc: '"Her eklemde hassasiyet, her köşede sessizlik."',
      caseImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVunzKEwtGZsCpOkk89J2LUbSjW5tbpPbBcbsManNJ6ebUaQatLVMKG6n5yj9ve9TTPr3m1EnuuSe6uCRy4e3ozyQxscmhT6v2UHWkB8WBx0-8yAq4IXNDBdzgsIT4Z-1MihaNTV0spj9KhlabEjTie4zMKzLzw4sYqGCAXGgnB7CLnu1PgDz_A-Crzxk4NtB5CfS8ZH2OiPThTS7XU13HeISHPL_xwID2UTXNfKSNSAaxnWAe445Yd0ygIWv_iBImU6lXA3yadWYZ',
      steps: [
        { num: '01', title: 'Kavramsal Geliştirme', desc: 'Vizyonu, saha analizini ve bütçe çerçevesini tanımlamak için ilk danışmanlık.', duration: '3-4 HAFTA' },
        { num: '02', title: 'Şematik Gelişim', desc: 'Detaylı kat planları, 3B görselleştirmeler ve malzeme paleti seçimi.', duration: '6-8 HAFTA' },
        { num: '03', title: 'Dokümantasyon', desc: 'İnşaat çizimleri, yapı mühendisliği ve yasal onaylar.', duration: '10-12 HAFTA' },
        { num: '04', title: 'Proje Yönetimi', desc: 'Saha denetimi, usta koordinasyonu ve son iç mekan stili.', duration: 'DEVAM EDİYOR' }
      ],
      tiers: [
        { name: 'AŞAMA 1', title: 'İÇ MEKAN YENİLEME', desc: 'Mevcut yapılar için mekansal yeniden tasarım ve malzeme yenileme.', price: '25.000 $\'dan' },
        { name: 'AŞAMA 2', title: 'TAM TASARIM', desc: 'Yeni konut inşaatları için kapsamlı mimari tasarım.', price: 'BÜTÇENİN %8-12\'Sİ' },
        { name: 'ÖZEL', title: 'MİRAS PLANI', desc: 'Arazi planlaması, peyzaj entegrasyonu ve ısmarlama mobilya tasarımı.', price: 'TALEP ÜZERİNE' }
      ]
    },
    ticari: {
      title: 'TİCARİ MİMARİ',
      desc: 'Marka kimliğini mekansal disiplinle tanımlamak. Butik galerilerden monolitik genel merkezlere kadar, kalıcılığı ve kurumsal saygınlığı yansıtan yapılar üretiyoruz.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcBmhuL6ahf_6_RIAmdSie8wEZNBBXkOQv7svwcrU2nok5ok-4Ms8bkLgFEpnChAWGRs8USih3pRH_5YmwNEKXi94sbBVaeKqbcybSt5N2WaLFSRjp9u5NKobEo-lpmCQNvuJWVFTfn9qdotBpIOH9zChL736x_hro74HdvqXdNuOvzg_gi8s-Ny1zvq7GN3rKZxVABmy-Dh97srNMFHLTOIpWB5vvyBWUA9ecs3qGG-5-AqnEaChHF5gki798VlnHEWX08WNt-due',
      caseTitle: 'GALERİ MONOLİT',
      caseDesc: '"Sanat ve mimarinin sessiz ve brütalist diyaloğu."',
      caseImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyli7xwOW5eV5oo87BgFpiHmsN6SExEYECpVV1UWkxLGgBgF7mE0WuZ_CommXdeg2oYGDWpurZXPiAJ57hFzp8JP8hYl79LYa5EdSslhiEvmC1sUDcigBgeo2z5OBZF4pLS9USJc5ncP4_PJGfF5sxpJz7cb7hNKBafJbjmqi8u2SoD4PVCuh-B4ELx-JU1gJf9J8g5Vp_qmMNeCo23uGkHkGFBGPb7qVjXwb6p5qJyJlKruX18Kb7R86JvC2SCMfaPfvUrXQXDZ9o',
      steps: [
        { num: '01', title: 'Analiz & Brifing', desc: 'Marka vizyonu, mekansal gereksinimler ve imar durumu incelemeleri.', duration: '4 HAFTA' },
        { num: '02', title: 'Tasarım Geliştirme', desc: 'Hacimsel çalışmalar, sirkülasyon şemaları ve cephe tasarımları.', duration: '8 HAFTA' },
        { num: '03', title: 'Uygulama Projesi', desc: 'Teknik şartnameler, detay paftaları ve ihale dosyası hazırlığı.', duration: '12 HAFTA' },
        { num: '04', title: 'Kontrollük', desc: 'İnşaat sürecinin tasarım standartlarına uygunluğunun denetimi.', duration: 'DEVAM EDİYOR' }
      ],
      tiers: [
        { name: 'AŞAMA 1', title: 'OFİS & MAĞAZA', desc: 'Prestijli çalışma ve perakende alanları kurgusu.', price: '50.000 $\'dan' },
        { name: 'AŞAMA 2', title: 'MONOLİTİK PROJE', desc: 'Sıfırdan ticari bina tasarımı ve mimari projelendirme.', price: 'BÜTÇENİN %6-10\'U' },
        { name: 'ÖZEL', title: 'KURUMSAL KİMLİK', desc: 'Marka kimliğinin tüm mekansal bileşenlere entegrasyonu.', price: 'TALEP ÜZERİNE' }
      ]
    },
    'ic-mimari': {
      title: 'İÇ MİMARİ CURATION',
      desc: 'Minimalizmin dokunsal sınırları. Malzemenin en dürüst halini (beton, ham çelik, meşe) kullanarak, duyulara hitap eden dingin yaşam alanları küratörlüğü.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAIZvCTF1RnqYastSoAPKgJOo8U_KMZABhTrmAV9AS1eeNnWQp2sGLmWJF6zWZiJNTW8HZZtbrypbIHmLUoCWa8oc7peww0_OmOp2_eRdO__6CS1R0NpqP1CCbgexliZOQcZA1Tx0fPWLt-Tjq6lOPmaKbptIAhfh5HWeYaPF7AlAvIore3g3MiiHjOqX3bZq5EGMMfdShR0k52wXNDxyz-fxUlt30I6s6QoFpeEnMdiQtnMKXztTpPQk3v7g4CjomjSNwNQksKFq6',
      caseTitle: 'ZEN LOFT DAİRESİ',
      caseDesc: '"Ham malzemenin şiirsel sessizliği ve duruluğu."',
      caseImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9bLb3FjSMAdOiSpjIws9rY_ZFUmd7oPg0WZ0pTMACuOWSQyvLcyove9v23IdxZeQNFiWsWykwp88fmc0V-Sp9vuRCymzY93F5SGtnDMcmfM0K1RXN_qHMsQl4SS62iFY9K-peivx5ynAzzp9PTZ8ypAz0RkIM-BtZuTq-OElxyEIHDON7-f0l31jNlh3TjSn9ce0i5llfIkmtOjMLgl9j7snQwTbcnw6UK6t-GUJoqVDyAHFAbSneLVnrnYhsYA3g0wKwGo_U2jcF',
      steps: [
        { num: '01', title: 'Malzeme Seçimi', desc: 'Doğal taşlar, metal alaşımları ve ahşap dokuların kombinasyonu.', duration: '3 HAFTA' },
        { num: '02', title: 'Yerleşim & Işık', desc: 'Aydınlatma senaryoları ve asimetrik mobilya yerleşimi planları.', duration: '5 HAFTA' },
        { num: '03', title: 'Curation Dosyası', desc: 'Özel imalat detayları, mobilya ve aydınlatma satın alma listeleri.', duration: '6 HAFTA' },
        { num: '04', title: 'Kurulum & Stil', desc: 'Mobilya yerleşimi, sanat eseri asımı ve stil sonlandırma.', duration: 'DEVAM EDİYOR' }
      ],
      tiers: [
        { name: 'AŞAMA 1', title: 'ODA BAZLI STİL', desc: 'Salon, yatak odası veya çalışma odası odaklı kürasyon.', price: '15.000 $\'dan' },
        { name: 'AŞAMA 2', title: 'BÜTÜNSEL İÇ MEKAN', desc: 'Konutun tüm iç mekanlarının bütünsel bir minimalist çizgide kürasyonu.', price: '35.000 $\'dan' },
        { name: 'ÖZEL', title: 'ISMARLAMA BİÇİM', desc: 'Kişiye özel mobilya, aydınlatma armatürleri ve sanat eseri tasarımları.', price: 'TALEP ÜZERİNE' }
      ]
    }
  };

  const current = data[serviceId] || data.konut;

  return (
    <main>
      <section className="service-hero-section">
        <div className="service-hero-grid">
          <div className="service-hero-left">
            <span className="section-label">HİZMET DETAYI</span>
            <h1 className="hero-title">{current.title}</h1>
            <p className="hero-desc">{current.desc}</p>
          </div>
          <div className="service-hero-right">
            <div className="arch-image-wrapper">
              <img src={current.image} alt={current.title} className="arch-image-zoom" />
            </div>
          </div>
        </div>
        <div className="service-hero-decor-lines"></div>
      </section>

      <section className="service-approach-section">
        <div className="service-approach-grid">
          <div className="service-approach-left">
            <h2 className="service-approach-label">YAKLAŞIMIMIZ</h2>
          </div>
          <div className="service-approach-right">
            <p className="service-approach-lead">
              Biz sadece binalar inşa etmiyoruz; zamanla gelişen mekansal deneyimlerin küratörlüğünü yapıyoruz. Her çizgi bir amaca hizmet eder; her boşluk ışığı davet eder.
            </p>
            <div className="service-approach-subgrid">
              <div>
                <h3 className="service-approach-card-title">MALZEME DÜRÜSTLÜĞÜ</h3>
                <p className="service-approach-card-desc">
                  Mimarimiz ve çevresi arasında dokunsal bir bağ oluşturmak için brütalist beton, doğal taş ve meşe ağacı gibi saf malzemeler kullanırız.
                </p>
              </div>
              <div>
                <h3 className="service-approach-card-title">MEKANSAL RİTİM</h3>
                <p className="service-approach-card-desc">
                  Bilinçli asimetri ve cömert boşluklar aracılığıyla, kamusal etkileşim ile özel sığınak alanlarını dengeleyen bir akış kurgularız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-gallery-section">
        <div className="service-gallery-header">
          <h2 className="service-gallery-title">VAKA ÇALIŞMALARI</h2>
        </div>
        <div className="service-gallery-grid">
          <div className="service-gallery-large-col">
            <div className="service-gallery-large-card">
              <img src={current.caseImg} alt={current.caseTitle} className="arch-image-zoom" />
              <div className="service-gallery-overlay">
                <span className="section-label">PROJE 01</span>
                <h3 className="philosophy-title">{current.caseTitle}</h3>
              </div>
            </div>
          </div>
          <div className="service-gallery-vertical-col">
            <div className="service-gallery-vertical-card">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyli7xwOW5eV5oo87BgFpiHmsN6SExEYECpVV1UWkxLGgBgF7mE0WuZ_CommXdeg2oYGDWpurZXPiAJ57hFzp8JP8hYl79LYa5EdSslhiEvmC1sUDcigBgeo2z5OBZF4pLS9USJc5ncP4_PJGfF5sxpJz7cb7hNKBafJbjmqi8u2SoD4PVCuh-B4ELx-JU1gJf9J8g5Vp_qmMNeCo23uGkHkGFBGPb7qVjXwb6p5qJyJlKruX18Kb7R86JvC2SCMfaPfvUrXQXDZ9o" alt="Detay" className="arch-image-zoom" />
            </div>
            <div className="service-gallery-vertical-meta">
              <span className="section-label">DETAY ODAKLI</span>
              <p className="philosophy-quote">{current.caseDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-section">
        <div className="blueprint-container">
          <div className="blueprint-header">
            <div className="hero-text-block">
              <h2 className="blueprint-header-title">PROJE HARİTASI</h2>
            </div>
          </div>
          <div className="blueprint-grid">
            {current.steps.map((step, idx) => (
              <div key={idx} className={idx === 0 ? 'blueprint-step-card-active' : 'blueprint-step-card'}>
                <span className="blueprint-step-label">{step.num} / {step.duration}</span>
                <h3 className="blueprint-step-title">{step.title}</h3>
                <p className="blueprint-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="investment-box">
            <div className="investment-header">
              <span className="section-label">YATIRIM YAPISI</span>
              <span className="material-symbols-outlined text-outline">info</span>
            </div>
            <div className="investment-grid">
              {current.tiers.map((tier, idx) => (
                <div key={idx} className={idx === 2 ? 'investment-card-dark' : 'investment-card'}>
                  <span className={idx === 2 ? 'investment-tier-dark' : 'investment-tier'}>{tier.name}</span>
                  <h4 className={idx === 2 ? 'investment-title-dark' : 'investment-title'}>{tier.title}</h4>
                  <p className={idx === 2 ? 'investment-desc-dark' : 'investment-desc'}>{tier.desc}</p>
                  <div className={idx === 2 ? 'investment-price-dark' : 'investment-price'}>{tier.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box-alt">
          <h2 className="cta-title-alt">Hazır mısınız?</h2>
          <p className="cta-desc-alt">
            Hemen bir rezervasyon oluşturarak projenizi bizimle paylaşın.
          </p>
          <div className="status-actions-row justify-center">
            <Link to="/randevu" className="cta-btn-dark">
              RANDEVU OLUŞTUR
            </Link>
            <Link to="/hizmetlerimiz" className="cta-btn-ghost">
              DİĞER HİZMETLERİMİZ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
