import React from 'react';
import { useNavigate } from 'react-router-dom';

const CATS = [
  {
    id: "icecekler",
    name: "Sıcak & Soğuk İçecekler",
    desc: "Zanaatkar kahveler ve iç ısıtan imza karışımlarımız.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM",
    size: "large"
  },
  {
    id: "tatlilar",
    name: "Pastane & Tatlılar",
    desc: "Günlük hazırlanan çıtır hamur işleri ve taze meyveli tartlar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALeQ4BFsrNNYseUzXsDjyOr_g5myF4uDuXajenpGuluybrvQKch3NoJWFI5vuXHPNz7F1o5FKPw1j9FQeg4fqb_U9X48QRcnatbTVDIfujYjSTOcR2Dpe2n7iHHTt-PScSyKuPLFZdulsvAaR6PvOLH-9ljLxg2_MupViRpKYw4HW01hWAfE3S2Y9UGAvHydW2z3anXI74NawDrxf7axHcsXJyyHfxE6jiA1OquGw8i0R95mFau4JbBraA8b-NG7M6FidgkHIVCXI",
    size: "small"
  },
  {
    id: "kahvalti",
    name: "Kahvaltı & Tostlar",
    desc: "Ekşi mayalı tostlar ve taze sabah seçenekleri.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg",
    size: "small"
  },
  {
    id: "ana-yemekler",
    name: "Bistro Ana Yemekler",
    desc: "El yapımı makarnalar ve mevsimsel lezzet tabakları.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo",
    size: "large"
  }
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="menu-main">
      <div className="menu-hero">
        <span className="menu-tag">Lezzetli Seçenekler</span>
        <h1 className="section-title">Menü Kategorileri</h1>
        <p className="menu-desc">
          Mevsimsel ve taze malzemelerle hazırlanan, damak tadınıza hitap edecek zengin menümüzü keşfedin.
        </p>
      </div>

      <div className="menu-grid">
        {CATS.map((cat) => {
          const isLarge = cat.size === "large";
          return (
            <div 
              key={cat.id} 
              className={isLarge ? "cat-card-large group" : "cat-card-small group"}
              onClick={() => navigate(`/kategori/${cat.id}`)}
            >
              <div className={isLarge ? "cat-img-wrap-large" : "cat-img-wrap-small"}>
                <div 
                  className="cat-img" 
                  style={{ backgroundImage: `url('${cat.image}')` }}
                ></div>
              </div>
              
              {isLarge ? (
                <div className="cat-bottom-large">
                  <div>
                    <h3 className="font-headline-sm">{cat.name}</h3>
                    <p className="text-on-surface-variant font-body-md mt-2">{cat.desc}</p>
                  </div>
                  <div className="cat-arrow-wrap">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              ) : (
                <div className="cat-bottom-small">
                  <h3 className="font-headline-sm">{cat.name}</h3>
                  <p className="text-on-surface-variant font-body-md mt-2">{cat.desc}</p>
                  <span className="cat-link-text">
                    İncele <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              )}
            </div>
          );
        })}

        <div className="other-selections">
          <h2 className="font-headline-sm mb-6">Hızlı Tercihler</h2>
          <div className="chips-wrap">
            <div className="chip-item" onClick={() => navigate('/kategori/icecekler')}>
              <span className="material-symbols-outlined chip-icon">coffee</span>
              <span className="chip-text">Filtre Kahveler</span>
            </div>
            <div className="chip-item" onClick={() => navigate('/kategori/tatlilar')}>
              <span className="material-symbols-outlined chip-icon">cake</span>
              <span className="chip-text">Glütensiz Tatlılar</span>
            </div>
            <div className="chip-item" onClick={() => navigate('/kategori/kahvalti')}>
              <span className="material-symbols-outlined chip-icon">bakery_dining</span>
              <span className="chip-text">Taze Kruvasanlar</span>
            </div>
            <div className="chip-item" onClick={() => navigate('/kategori/ana-yemekler')}>
              <span className="material-symbols-outlined chip-icon">dinner_dining</span>
              <span className="chip-text">İmza Yemekler</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
