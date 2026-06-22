import React from 'react';
import { useNavigate } from 'react-router-dom';

const VALUES = [
  {
    icon: "psychology",
    title: "Etik Tedarik",
    desc: "Yerel kahve üreticilerinden doğrudan adil ticaret prensipleriyle aldığımız çekirdekleri özenle işliyoruz."
  },
  {
    icon: "local_cafe",
    title: "Zanaatkar El İşçiliği",
    desc: "Baristalarımız ve fırın ustalarımız her detayda mükemmelliği arayan gerçek zanaatkarlardır."
  },
  {
    icon: "groups",
    title: "Topluluk Ruhu",
    desc: "Bir mahalle, ancak buluşma noktaları kadar güçlüdür. Biz de sıcak sohbetlerin ve anların adresiyiz."
  }
];

const GALLERY_IMGS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBMp_YHo-jIz4rkTqJPFd0TWqxaWTkpbf4rmUSDfru4LTRwF6GA60FitkC3pqhLGjTodxyLPpaHtNPXQGrrborqKP5bXIdmDbcL2vbI-NciKiPVjEIbhMJFX4MI2_RqgClosMRJgIfNr_VdgdCr12YyNJI0Ln3-MhuW0_TjFycvD_CMxhSsElWeUcNYhBCv7lx-h1wdzGld_9790hTcdRmNkI0ydBM0r3bGDJHUuRaiUXuQEj2O1cf6dm-a_m2av7jg7Pon_Fw9zfQ"
];

const TEAM = [
  {
    name: "Julian Vance",
    role: "Baş Barista",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM"
  },
  {
    name: "Elena Rossi",
    role: "Baş Fırıncı",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg"
  },
  {
    name: "Thomas Wright",
    role: "Genel Müdür",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo"
  },
  {
    name: "Sasha Chen",
    role: "Baş Kavurucu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMp_YHo-jIz4rkTqJPFd0TWqxaWTkpbf4rmUSDfru4LTRwF6GA60FitkC3pqhLGjTodxyLPpaHtNPXQGrrborqKP5bXIdmDbcL2vbI-NciKiPVjEIbhMJFX4MI2_RqgClosMRJgIfNr_VdgdCr12YyNJI0Ln3-MhuW0_TjFycvD_CMxhSsElWeUcNYhBCv7lx-h1wdzGld_9790hTcdRmNkI0ydBM0r3bGDJHUuRaiUXuQEj2O1cf6dm-a_m2av7jg7Pon_Fw9zfQ"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero-section">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM')` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-tagline">Berna & Aslı Cafe</span>
          <h1 className="hero-title">Sabahları Şekillendiren Bir On Yıl</h1>
          <p className="hero-desc">
            Günün ilk saatinin sonraki yirmi üç saati belirlediğine inanıyoruz. Bu yüzden her sabah taze zanaatkar kahvemizi ve çıtır fırın ürünlerimizi tutkuyla hazırlıyoruz.
          </p>
        </div>
      </section>

      <section className="section-story">
        <div className="story-container">
          <div className="story-left">
            <h2 className="section-title">Yavaş Yaşama Tutkusundan Doğdu</h2>
            <div className="story-text-wrap">
              <p>
                Berna & Aslı Cafe, karmaşık şehir hayatının ortasında dingin bir sığınak arayışıyla kuruldu. Geleneksel Avrupa bistro kültürünü modern lezzet dokunuşlarıyla birleştiriyoruz.
              </p>
              <p>
                Her bir fincan kahvenin arkasında küçük ölçekli üreticilerin emeği, her bir hamur işinde ise saatlerce mayalanan el emeği gizlidir. Acele etmeden, tadını çıkararak yaşamanın lezzetine varın.
              </p>
            </div>
            <div className="story-legacy-wrap">
              <div className="story-line"></div>
              <span className="story-legacy-text">Bizim Hikayemiz</span>
            </div>
            <div className="pt-8">
              <button className="pagination-btn" onClick={() => navigate('/hikayemiz')}>
                Devamını Oku
              </button>
            </div>
          </div>

          <div className="story-right">
            <div className="story-decor"></div>
            <div className="story-image-wrap">
              <img 
                className="story-image" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALeQ4BFsrNNYseUzXsDjyOr_g5myF4uDuXajenpGuluybrvQKch3NoJWFI5vuXHPNz7F1o5FKPw1j9FQeg4fqb_U9X48QRcnatbTVDIfujYjSTOcR2Dpe2n7iHHTt-PScSyKuPLFZdulsvAaR6PvOLH-9ljLxg2_MupViRpKYw4HW01hWAfE3S2Y9UGAvHydW2z3anXI74NawDrxf7axHcsXJyyHfxE6jiA1OquGw8i0R95mFau4JbBraA8b-NG7M6FidgkHIVCXI" 
                alt="Kurucularımız" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-values">
        <div className="values-container">
          <div className="values-header">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="values-subtitle">İşimizi sevgiyle yapmamızı sağlayan temel ilkelerimiz.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((val, idx) => (
              <div className="value-card" key={idx}>
                <div className="value-icon-wrap">
                  <span className="material-symbols-outlined text-secondary text-4xl">{val.icon}</span>
                </div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gallery">
        <div className="gallery-top">
          <div className="gallery-top-wrap">
            <div className="gallery-top-left">
              <span className="hero-tagline text-secondary">Galeri</span>
              <h2 className="section-title">Kafemizden Kareler</h2>
            </div>
            <div className="pt-4">
              <span className="gallery-link" onClick={() => navigate('/kategoriler')}>
                Menüyü İnceleyin
              </span>
            </div>
          </div>
        </div>
        <div className="gallery-scroll">
          {GALLERY_IMGS.map((url, idx) => (
            <div className="gallery-item" key={idx}>
              <div className="gallery-image-wrap">
                <img className="story-image" src={url} alt={`Kafemizden kare ${idx + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-commitment">
        <div 
          className="commitment-bg" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo')` }}
        ></div>
        <div className="commitment-overlay"></div>
        <div className="commitment-content">
          <div className="commitment-text-wrap">
            <h2 className="commitment-title">"Kalite, doğru verilen binlerce küçük kararın sonucudur."</h2>
            <p className="commitment-desc">
              Kahve çekirdeklerimizin kavrulma saniyesinden, kruvasanlarımızın kat sayısına kadar her şeyi incelikle tasarlıyoruz.
            </p>
            <button className="checkout-btn" onClick={() => navigate('/kategoriler')}>
              MENÜYÜ KEŞFEDİN
            </button>
          </div>
        </div>
      </section>

      <section className="section-team">
        <div className="team-container">
          <div className="team-header">
            <div>
              <span className="team-tag">Zanaatkarlarımız</span>
              <h2 className="section-title">Ekibimiz</h2>
            </div>
          </div>
          <div className="team-grid">
            {TEAM.map((member, idx) => (
              <div className="team-card group" key={idx}>
                <div className="team-image-wrap">
                  <img className="team-image" src={member.image} alt={member.name} />
                  <div className="team-hover-overlay"></div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
