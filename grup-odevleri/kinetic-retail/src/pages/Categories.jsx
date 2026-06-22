import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const subcategoryData = {
  electronics: [
    { name: "Telefonlar", icon: "smartphone", desc: "iPhone, Samsung, Xiaomi" },
    { name: "Bilgisayarlar", icon: "computer", desc: "Dizüstü, Monitör, Parçalar" },
    { name: "Ses Sistemleri", icon: "headphones", desc: "Kulaklıklar, Hoparlörler" },
    { name: "Giyilebilir Cihazlar", icon: "match_case", desc: "Akıllı Saatler, Akıllı Bileklikler" },
    { name: "Televizyonlar", icon: "tv", desc: "OLED, LED, Ses Barları" },
    { name: "Oyun Konsolları", icon: "videogame_asset", desc: "PS5, Xbox, Aksesuarlar" }
  ],
  fashion: [
    { name: "Erkek Giyim", icon: "man", desc: "T-Shirt, Ceket, Pantolon" },
    { name: "Kadın Giyim", icon: "woman", desc: "Elbise, Bluz, Etek" },
    { name: "Ayakkabılar", icon: "checkroom", desc: "Spor, Klasik, Bot" },
    { name: "Çantalar", icon: "shopping_bag", desc: "Sırt Çantası, Cüzdan" }
  ],
  home: [
    { name: "Mobilya", icon: "chair", desc: "Koltuk, Masa, Kitaplık" },
    { name: "Mutfak Gereçleri", icon: "kitchen", desc: "Yemek Takımı, Tava, Bardak" },
    { name: "Ev Tekstili", icon: "bed", desc: "Nevresim, Yastık, Halı" },
    { name: "Dekorasyon", icon: "wb_sunny", desc: "Tablo, Ayna, Saat" }
  ],
  cosmetics: [
    { name: "Parfüm", icon: "airware", desc: "Erkek, Kadın Parfümleri" },
    { name: "Makyaj", icon: "face_6", desc: "Ruj, Fondöten, Maskara" },
    { name: "Cilt Bakımı", icon: "clean_hands", desc: "Krem, Serum, Temizleyici" },
    { name: "Saç Bakımı", icon: "style", desc: "Şampuan, Saç Kremi" }
  ],
  sports: [
    { name: "Fitness & Kondisyon", icon: "fitness_center", desc: "Ağırlıklar, Matlar, Barlar" },
    { name: "Outdoor & Kamp", icon: "hiking", desc: "Çadır, Uyku Tulumu" },
    { name: "Spor Giyim", icon: "sports_soccer", desc: "Eşofman, Tayt, Rüzgarlık" },
    { name: "Bisiklet", icon: "directions_bike", desc: "Dağ, Şehir Bisikletleri" }
  ],
  toys: [
    { name: "Lego & Yapım Setleri", icon: "toys", desc: "Classic, Technic, Creator" },
    { name: "Kutu Oyunları", icon: "casino", desc: "Monopoly, Catan, Satranç" },
    { name: "Figür & Robotlar", icon: "smart_toy", desc: "Aksiyon Figürleri, Eğitici Setler" },
    { name: "Bebek Oyuncakları", icon: "child_care", desc: "Çıngıraklar, İlk Adım Arabası" }
  ],
  books: [
    { name: "Edebiyat", icon: "menu_book", desc: "Roman, Öykü, Şiir" },
    { name: "Kişisel Gelişim", icon: "psychology", desc: "Motivasyon, İş Dünyası" },
    { name: "Sınav Hazırlık", icon: "school", desc: "LGS, YKS, KPSS Kitapları" },
    { name: "Çocuk Kitapları", icon: "menu_book", desc: "Masal, Eğitici Hikayeler" }
  ]
};

const Categories = () => {
  const navigate = useNavigate();
  const { categories } = useApp();
  const [activeTab, setActiveTab] = useState('electronics');

  const activeCategory = categories.find(c => c.key === activeTab) || categories[0];
  const activeSubs = subcategoryData[activeTab] || [];

  return (
    <main className="categories-main">
      <div className="search-persistent-bar">
        <div className="relative">
          <span className="search-icon-absolute">search</span>
          <input className="categories-search-input" placeholder="Kategorilerde arama yapın..." type="text"/>
        </div>
      </div>

      <div className="categories-container">
        <aside className="categories-sidebar no-scrollbar">
          <nav className="categories-sidebar-nav">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={activeTab === cat.key ? "sidebar-nav-btn-active" : "sidebar-nav-btn"}
              >
                <span className="sidebar-nav-icon" style={activeTab === cat.key ? { fontVariationSettings: "'FILL' 1" } : {}}>{cat.icon}</span>
                <span className="sidebar-nav-label">{cat.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        <section className="categories-content no-scrollbar">
          <div className="categories-content-header">
            <h2 className="categories-content-title">{activeCategory.name}</h2>
            <button onClick={() => navigate(`/products?cat=${activeTab}`)} className="categories-view-all-btn">
              Tümünü Gör <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>

          <div className="categories-featured-banner">
            <img className="categories-featured-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuvx6ZYOj6LBnxps3bXaXKZrxN2e_gZCbCCO1o4acbbJ9NDS8EGsOB3QE2wSMFKRo2T7yOGnBtQLcsLu6mmi7EmSqwFZpZO6vIowXmSRTYbZyJPIdYcEkG_OggBrTNLW-W9_Al_X6_xDcXwQNfWoiMmNukTZ5l_f1WZ9ARl2S4qNTNJuGbTqL2APvQNrx9i33Tuhtp9vo20wYExKgSKM8UsVcAZURguc0uuRRNFdcELdGQo2u8dD_x6h4J1MICEthic9XMCLhWf3I" alt="Kategori İndirimi" />
            <div className="categories-featured-overlay">
              <div className="categories-featured-text-box">
                <p className="categories-featured-tag">Yeni Sezon</p>
                <h3 className="categories-featured-title">Seçkin Ürünler</h3>
              </div>
            </div>
          </div>

          <div className="subcategories-grid">
            {activeSubs.map((sub, idx) => (
              <div key={idx} onClick={() => navigate(`/products?cat=${activeTab}`)} className="subcategory-card">
                <span className="material-symbols-outlined subcategory-icon">{sub.icon}</span>
                <span className="subcategory-title">{sub.name}</span>
                <span className="subcategory-desc">{sub.desc}</span>
              </div>
            ))}
          </div>

          <div className="categories-banner-promo">
            <div>
              <h4 className="categories-banner-promo-text">Fırsat Kampanyası</h4>
              <p className="categories-banner-promo-desc">Aksesuarlarda %40'a varan indirimler</p>
            </div>
            <span className="material-symbols-outlined categories-banner-promo-icon">sell</span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Categories;
