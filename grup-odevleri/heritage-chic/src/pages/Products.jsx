import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CATEGORY_META = {
  "icecekler": {
    title: "Sıcak & Soğuk İçecekler",
    desc: "Özenle seçilmiş çekirdeklerden hazırlanan imza kahvelerimiz ve iç ısıtan özel karışımlarımız.",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM"
  },
  "tatlilar": {
    title: "Pastane & Tatlılar",
    desc: "Fırınımızdan her sabah yeni çıkmış, tereyağlı kruvasanlar ve taze meyveli tatlılar.",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuALeQ4BFsrNNYseUzXsDjyOr_g5myF4uDuXajenpGuluybrvQKch3NoJWFI5vuXHPNz7F1o5FKPw1j9FQeg4fqb_U9X48QRcnatbTVDIfujYjSTOcR2Dpe2n7iHHTt-PScSyKuPLFZdulsvAaR6PvOLH-9ljLxg2_MupViRpKYw4HW01hWAfE3S2Y9UGAvHydW2z3anXI74NawDrxf7axHcsXJyyHfxE6jiA1OquGw8i0R95mFau4JbBraA8b-NG7M6FidgkHIVCXI"
  },
  "kahvalti": {
    title: "Kahvaltı & Tostlar",
    desc: "Ekşi mayalı çıtır ekmekler üzerine hazırlanan özgün ve besleyici kahvaltı tabakları.",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg"
  },
  "ana-yemekler": {
    title: "Bistro Ana Yemekler",
    desc: "Şefimizin elinden çıkan özel el yapımı makarnalar ve taze mevsim tabakları.",
    bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo"
  }
};

export default function Products() {
  const { categoryId } = useParams();
  const { products, addToCart } = useCart();

  const [activeTag, setActiveTag] = useState("Hepsi");
  const [sortBy, setSortBy] = useState("Recommended");
  const [toast, setToast] = useState({ show: false, message: "" });

  const meta = CATEGORY_META[categoryId] || {
    title: "Enfes Lezzetler",
    desc: "Özenle hazırlanan tüm cafe lezzetlerimiz.",
    bg: CATEGORY_META.icecekler.bg
  };

  const filteredRaw = products.filter(p => p.category === categoryId);

  const availableTags = ["Hepsi", ...new Set(filteredRaw.flatMap(p => p.tags))];

  const filtered = filteredRaw.filter(p => {
    if (activeTag === "Hepsi") return true;
    return p.tags.includes(activeTag);
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "LowToHigh") return a.price - b.price;
    if (sortBy === "HighToLow") return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast({ show: true, message: `${product.name} sepetinize eklendi.` });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  return (
    <div>
      <section className="contact-hero">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url('${meta.bg}')` }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{meta.title}</h1>
          <p className="hero-desc">{meta.desc}</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="filters-wrap">
          <div className="filters-row">
            {availableTags.map((tag) => (
              <button
                key={tag}
                className={activeTag === tag ? "filter-btn-active" : "filter-btn"}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="sort-wrap">
            <span className="material-symbols-outlined text-sm">sort</span>
            <select 
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Recommended">Sıralama: Önerilen</option>
              <option value="LowToHigh">Fiyat: Düşükten Yükseğe</option>
              <option value="HighToLow">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sorted.map((prod) => (
            <div className="product-card group" key={prod.id}>
              <div className="prod-img-wrap">
                <img className="prod-img" src={prod.image} alt={prod.name} />
                {prod.tags.includes("Vegan Seçeneği") && (
                  <div className="prod-badge-vegan">
                    <span>Vegan</span>
                  </div>
                )}
                {prod.tags.includes("İmza Lezzet") && (
                  <div className="prod-badge-signature">
                    <span>İmza</span>
                  </div>
                )}
                {prod.tags.includes("Glütensiz") && (
                  <div className="prod-badge-organic">
                    <span>Glütensiz</span>
                  </div>
                )}
                
                <button 
                  className="prod-add-btn"
                  onClick={() => handleAddToCart(prod)}
                >
                  <span className="material-symbols-outlined text-sm">shopping_cart</span>
                  Sepete Ekle
                </button>
              </div>

              <div className="prod-info">
                <h3 className="font-headline-sm">{prod.name}</h3>
                <div className="prod-leader"></div>
                <span className="font-body-lg font-bold">₺{prod.price}</span>
              </div>
              <p className="prod-desc">{prod.description}</p>
            </div>
          ))}
        </div>

        <div className="pagination-wrap">
          <button className="pagination-btn">
            Daha Fazla Göster
          </button>
          <span className="font-body-md text-on-surface-variant">
            {sorted.length} / {sorted.length} ürün gösteriliyor
          </span>
        </div>
      </section>

      {toast.show && (
        <div className="toast-container translate-y-0 opacity-100">
          <span className="material-symbols-outlined text-secondary">check_circle</span>
          <span className="font-label-lg">{toast.message}</span>
        </div>
      )}
    </div>
  );
}
