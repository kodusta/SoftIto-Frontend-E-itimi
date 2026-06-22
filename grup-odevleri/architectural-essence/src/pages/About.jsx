export default function About() {
  const chronology = [
    {
      year: '2012',
      title: 'BAŞLANGIÇ',
      desc: 'Stüdyo, Kyoto\'da küçük bir galeri alanında kuruldu ve konut zen bahçeleri ile çay evlerine odaklandı.'
    },
    {
      year: '2016',
      title: 'GENİŞLEME',
      desc: 'Londra\'ya taşınma. ARC & LINE büyük ölçekli müze ve kültürel projelerde iş birliği yapmaya başladı.'
    },
    {
      year: '2019',
      title: 'KÜRESEL ERİŞİM',
      desc: 'Formda Saflık ödülüne layık görüldü. Arizona\'daki yüksek profilli Çöl Pavyonu projesini üstlendi.'
    },
    {
      year: 'GÜNÜMÜZ',
      title: 'KALICILIK',
      desc: 'Brütalist dürüstlüğün zamansız ilkelerine bağlı, iki kıtaya yayılmış 24 mimardan oluşan bir ekip.'
    }
  ];

  const methodology = [
    {
      step: '01 / SAHA DİYALOGU',
      desc: 'Her proje, sahanın jeolojisine, tarihine ve ışık desenlerine derinlemesine dalarak başlar. Dayatmayız, dinleriz.'
    },
    {
      step: '02 / MALZEME DÜRÜSTLÜĞÜ',
      desc: 'Onurla yaşlanan ham ve otantik malzemelere öncelik veriyoruz: dökme beton, eskitilmiş ahşap ve karartılmış çelik.'
    },
    {
      step: '03 / MEKANSAL KOREOGRAFİ',
      desc: 'Mekanlarımızda hareket etmek bir ritüeldir. Anlatı akışını oluşturmak için geçişleri ve bakış açılarını özenle tasarlıyoruz.'
    },
    {
      step: '04 / RAFİNE BRÜTALİZM',
      desc: 'Nihai uygulama, monolitik güç ve mikroskobik hassasiyet arasında bir dengedir ve mutlak kalıcılık hissi sağlar.'
    }
  ];

  const team = [
    {
      name: 'Elias Thorne',
      role: 'KURUCU ORTAK',
      desc: 'Tokyo Üniversitesi mezunu olan Elias, her yapısal zorluğa Zen felsefesiyle yaklaşır.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMLI-9ddpAm5x8Ef57qF7dC5BR5tIrAl2wTNaQyGzvWaBmHDIKhz67S5MO1R9bVhnwnTHMOFbJcw8PsScCPn2MKQU10YUYxZMnpGKvAoHoPhqzIwNgGfI-NizY6c2QkvCYFF0473gx4WNNOOxFxxHimRtL420VcraWEFCBqnUIPKcOc0vUxQH4bknBA2PYbBN9ieFLsLkXS8vSbFPu0_z-QHQJmdNXP0uIn4xHERoRsbU3JGAyHsamUx3kZN3p87kedlUjD1XjJ_QF'
    },
    {
      name: 'Sienna Vance',
      role: 'TASARIM DİREKTÖRÜ',
      desc: 'Malzeme bilimi ve sürdürülebilir brütalizm konusunda uzmanlaşan Sienna, teknik inovasyon birimimize liderlik ediyor.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2JPDB1dWNk0WOJ_Wj4ZNnrsG4cGniDYiJHryYcf9_dARZHWbDXrCJaQpzpV6VWyHYN2ujpmf0mn17re1O8hNpRIc9J8D_kV-jynJXuEOIZ2ocNZtBAl2spQoxvbe3WTuL-RoXZneg8Py7caknN_OqOPTVG08EQ-1okBMuZwDYKOfTPZ8ai63oGuoAzyMlfvvXNHNcpQxqP2-uhfi10pTIV2FTGoIlPWvCu-Xjg8haibEh_nTXX0OqnR9RyyycLV1IVSw2RCDuSRS5'
    },
    {
      name: 'Julian Reed',
      role: 'BAŞ MİMAR',
      desc: 'Julian, dijital fabrikasyon ile zanaatkar el işçiliği tekniklerinin kesişimine odaklanıyor.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiCbfdZUZG8VCzUqwJdXsp9PMJ7KoeoY1oPysajo6MHBNTXu2s2WV9A6MJ9Io989BKxadrKN7BeyjHG1AFi87QrLskIQbmzsUnx8vlFjvt8JTicoL7TWJ9WmJlcioSYRWmSCZLBr3yB8BidqvBl0EJMWnxOyAeyLEDr5akwaaSWr0ucbl8MICCs1Ko1KQrptFIte9IR6C1dxXCm5DEWfDWVaiHuuLpXUq3oB66DAWv5bpldodjYml5CVDC5cdzi3M9h4YHGGCGyIEw'
    }
  ];

  return (
    <main>
      <section className="hero-section">
        <div className="hero-text-block">
          <h1 className="hero-title">
            Tasarımda Kalıcılık,<br />Biçimde Sessizlik.
          </h1>
          <p className="hero-desc">
            2012 yılında kurulan ARC & LINE, mekansal netlik ve malzeme dürüstlüğü arayışına adanmış butik bir mimarlık stüdyosudur. Çevresiyle diyalog kuran sığınaklar tasarlıyoruz.
          </p>
        </div>
        <div className="hero-image-block">
          <div className="arch-image-wrapper">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMGHPT7hgGpn6l-5H7FJ6oog5hdvwWvoK4rzonRI_IzDYMGrjmRXgTpaEpyigApzdmKE0keL4FBIiGi0t31u0RBJMJME6gZGIVjuFPr41k26-h9AGbKsrOReFVqcghr-qzgR5trvpmWevT5HQP2HmyqX7ZI9kP9awI0A4uunBjdCkMbSj2F7s4e2FJ3jrtRRSWow2MK3BmQPAL5KVyWN63RkJgCWPFXVwI7_t6COJnNxDPBnK0UesTDedvN52Lzgd5xJgBTFoE4zZp" alt="Brütalist Yapı" className="arch-image-zoom" />
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-info">
          <span className="section-label">VİZYONUMUZ</span>
          <h2 className="philosophy-title">Bir yaşam tarzı olarak mimari minimalizm.</h2>
        </div>
        <div className="philosophy-text-block">
          <p className="philosophy-body">
            Gerçek lüksün aşırılıkta değil; alanın, ışığın ve gölgenin bilinçli kürasyonunda bulunduğuna inanıyoruz. Vizyonumuz, gereksiz olanı soyup atarak geriye yalnızca duygu uyandıran ve sakinlik hissi aşılayan temel unsurları bırakmaktır.
          </p>
          <div className="philosophy-quote-wrapper">
            <p className="philosophy-quote">
              "ARC & LINE'ın mimarisi bağırmaz, nefes alır. Manzara için bir çerçeve, ışık için bir kaptır."
            </p>
          </div>
        </div>
      </section>

      <section className="chronology-section">
        <span className="section-label">KRONOLOJİ</span>
        <div className="chronology-grid">
          {chronology.map((item, idx) => (
            <div key={idx} className="chronology-card">
              <h3 className="chronology-year">{item.year}</h3>
              <p className="chronology-title">{item.title}</p>
              <p className="chronology-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="team-grid">
          <div className="process-info">
            <span className="section-label">SÜRECİMİZ</span>
            <h2 className="process-title">Titiz Metodoloji.</h2>
          </div>
          <div className="process-grid-container">
            <div className="process-grid">
              {methodology.map((step, idx) => (
                <div key={idx} className="process-card">
                  <span className="process-card-step">{step.step}</span>
                  <p className="process-card-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-grid mb-16">
          <div className="col-span-12">
            <span className="section-label">EKİBİMİZ</span>
            <h2 className="process-title">Sessizliğin Mimarları.</h2>
          </div>
        </div>
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-card">
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="arch-image-zoom" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-desc">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="atmosphere-section">
        <div className="atmosphere-wrapper">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ6oho-hFl-nqkK9Wsd0-ivtsOc3S_hw_dW_eqqVgD7DHUunBhT5RqF3e4otJHaZKpdaJJJrHgJ31uC-FuRLAPXMY9nl-764XZgIipXveDbtnb7zIvrwkDF60Z0WNNliDvAEoEkCYfMbvWhf85-Nx8otWY66hH54eVn0BkNVNheDvNQjClL6PED9cNpRXlEe_fWpmXVg_0nYzNx7m0_yZ-hyFQi4urrnYpAASlLG-bdsAzGLXb8SCfg4lCh8ONysOvpapB2y5q44rW" alt="Mekansal Atmosfer" className="arch-image-zoom" />
        </div>
      </section>
    </main>
  );
}
