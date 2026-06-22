import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Listings() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchVal = searchParams.get("search") || "";
  const categoryVal = searchParams.get("category") || "";

  const [priceFilter, setPriceFilter] = useState(false);
  const [bedsFilter, setBedsFilter] = useState(false);
  const [sizeFilter, setSizeFilter] = useState(false);
  const [locFilter, setLocFilter] = useState(false);
  const [sortType, setSortType] = useState("recommended");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredProperties = properties.filter((p) => {
    if (searchVal && !p.title.toLowerCase().includes(searchVal.toLowerCase()) && !p.location.toLowerCase().includes(searchVal.toLowerCase())) {
      return false;
    }
    if (categoryVal && p.category !== categoryVal) {
      return false;
    }
    if (priceFilter && p.price > 5000000) {
      return false;
    }
    if (bedsFilter && p.beds !== "3+1") {
      return false;
    }
    if (sizeFilter && parseInt(p.size) < 150) {
      return false;
    }
    if (locFilter && !p.location.includes("Muğla")) {
      return false;
    }
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortType === "price-asc") {
      return a.price - b.price;
    }
    if (sortType === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const resetFilters = () => {
    setPriceFilter(false);
    setBedsFilter(false);
    setSizeFilter(false);
    setLocFilter(false);
    setSearchParams({});
  };

  return (
    <main className="listings-main">
      <section className="filter-section">
        <div className="filter-header">
          <div className="filter-chips-list">
            <button 
              className={priceFilter ? "filter-chip-active" : "filter-chip-inactive"}
              onClick={() => setPriceFilter(!priceFilter)}
            >
              Fiyat (&lt; 5M TL)
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button 
              className={bedsFilter ? "filter-chip-active" : "filter-chip-inactive"}
              onClick={() => setBedsFilter(!bedsFilter)}
            >
              Oda Sayısı (3+1)
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button 
              className={sizeFilter ? "filter-chip-active" : "filter-chip-inactive"}
              onClick={() => setSizeFilter(!sizeFilter)}
            >
              Metrekare (&gt; 150m²)
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <button 
              className={locFilter ? "filter-chip-active" : "filter-chip-inactive"}
              onClick={() => setLocFilter(!locFilter)}
            >
              Konum (Muğla)
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            <div className="filter-divider" />
            <button className="filter-all-btn" onClick={resetFilters}>
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Sıfırla
            </button>
          </div>
          <div className="results-meta">
            <span className="results-count">
              <span className="font-bold">{sortedProperties.length}</span> sonuç bulundu
            </span>
            <select 
              className="results-sort-btn outline-none" 
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="recommended">Sırala: Önerilen</option>
              <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
              <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </div>
      </section>

      <section className="listings-grid-layout">
        {sortedProperties.map((p) => (
          <div 
            key={p.id} 
            className="listings-card-item"
            onClick={() => navigate(`/listings/${p.id}`)}
          >
            <div className="card-img-wrapper">
              <img className="card-img" src={p.images[0]} alt={p.title} />
              <span className={p.id % 2 === 0 ? "listings-card-badge-primary" : "listings-card-badge"}>
                {p.badge}
              </span>
              <button 
                className="listings-card-fav-btn" 
                onClick={(e) => toggleFavorite(p.id, e)}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: favorites.includes(p.id) ? "'FILL' 1" : "'FILL' 0" }}>
                  favorite
                </span>
              </button>
            </div>
            <div className="listings-card-content">
              <div className="flex flex-col gap-1">
                <span className="listings-card-price">{p.formattedPrice}</span>
                <h3 className="listings-card-title">{p.title}</h3>
                <div className="listings-card-loc-row">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {p.location}
                </div>
              </div>
              <div className="listings-card-specs-row">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">bed</span>
                  {p.beds}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">square_foot</span>
                  {p.size}
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">layers</span>
                  {p.floor}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="pagination-container">
        <button className="pagination-btn-prev-next">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="pagination-btn-active">1</button>
        <button className="pagination-btn-inactive">2</button>
        <button className="pagination-btn-inactive">3</button>
        <span className="px-2">...</span>
        <button className="pagination-btn-inactive">12</button>
        <button className="pagination-btn-prev-next">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </main>
  );
}
