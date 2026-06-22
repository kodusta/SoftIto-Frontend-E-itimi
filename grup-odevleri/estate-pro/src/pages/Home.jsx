import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/listings?search=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/listings");
    }
  };

  const handleCategory = (cat) => {
    navigate(`/listings?category=${encodeURIComponent(cat)}`);
  };

  const featured = properties.slice(0, 4);

  return (
    <div className="home-main">
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Hayalinizdeki Evi Keşfedin</h1>
          <form className="hero-search-wrapper" onSubmit={handleSearch}>
            <div className="hero-search-container">
              <span className="material-symbols-outlined hero-search-icon">search</span>
              <input 
                type="text" 
                className="hero-search-input" 
                placeholder="İl, ilçe veya ilan başlığı arayın..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="hero-search-btn">Ara</button>
            </div>
          </form>
        </div>
      </section>

      <div className="categories-list">
        <button className="category-btn" onClick={() => handleCategory("Daire")}>
          <span className="material-symbols-outlined category-icon">apartment</span>
          <span className="category-text">Daire</span>
        </button>
        <button className="category-btn" onClick={() => handleCategory("Residence")}>
          <span className="material-symbols-outlined category-icon">domain</span>
          <span className="category-text">Rezidans</span>
        </button>
        <button className="category-btn" onClick={() => handleCategory("Villa")}>
          <span className="material-symbols-outlined category-icon">home</span>
          <span className="category-text">Villa</span>
        </button>
        <button className="category-btn" onClick={() => handleCategory("Taş Ev")}>
          <span className="material-symbols-outlined category-icon">history</span>
          <span className="category-text">Taş Ev</span>
        </button>
      </div>

      <section className="featured-section">
        <div className="featured-header">
          <div className="featured-title-wrapper">
            <h2 className="featured-title">Vitrin İlanları</h2>
            <span className="featured-subtitle">Sizin için seçtiğimiz özel portföylerimiz</span>
          </div>
          <button className="featured-all-btn" onClick={() => navigate("/listings")}>Tümünü Gör</button>
        </div>
        <div className="listings-grid">
          {featured.map((p) => (
            <div key={p.id} className="property-card" onClick={() => navigate(`/listings/${p.id}`)}>
              <div className="card-img-wrapper">
                <img className="card-img" src={p.images[0]} alt={p.title} />
                <span className="card-badge">{p.badge}</span>
                <button className="card-fav-btn" onClick={(e) => e.stopPropagation()}>
                  <span className="material-symbols-outlined card-fav-icon">favorite</span>
                </button>
              </div>
              <div className="card-content">
                <span className="card-price">{p.formattedPrice}</span>
                <h3 className="card-title">{p.title}</h3>
                <div className="card-location-row">
                  <span className="material-symbols-outlined card-location-icon">location_on</span>
                  <span className="card-location-text">{p.location}</span>
                </div>
                <div className="card-specs">
                  <div className="card-spec-item">
                    <span className="material-symbols-outlined card-spec-icon">bed</span>
                    <span className="card-spec-text">{p.beds}</span>
                  </div>
                  <div className="card-spec-item">
                    <span className="material-symbols-outlined card-spec-icon">square_foot</span>
                    <span className="card-spec-text">{p.size}</span>
                  </div>
                  <div className="card-spec-item">
                    <span className="material-symbols-outlined card-spec-icon">layers</span>
                    <span className="card-spec-text">{p.floor}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Kendi İlanınızı Verin</h2>
            <p className="cta-subtitle">Evinizi hızlıca satmak veya kiralamak için hemen ücretsiz ilanınızı oluşturun.</p>
          </div>
          <button className="cta-btn" onClick={() => navigate("/contact")}>Başlayın</button>
          <div className="cta-bg-gradient" />
        </div>
      </section>

      <section className="recent-section">
        <h2 className="recent-title">Yeni Eklenenler</h2>
        <div className="recent-bento">
          <div className="recent-bento-large" onClick={() => navigate("/listings/3")}>
            <img className="recent-bento-large-img" src={properties[2].images[0]} alt="Bento Large" />
            <div className="recent-bento-overlay" />
            <div className="recent-bento-content">
              <span className="recent-bento-badge">{properties[2].badge}</span>
              <div className="recent-bento-row">
                <div>
                  <h3 className="recent-bento-title">{properties[2].title}</h3>
                  <span className="recent-bento-location">
                    <span className="material-symbols-outlined recent-bento-location-icon">location_on</span>
                    {properties[2].location}
                  </span>
                </div>
                <span className="recent-bento-price">{properties[2].formattedPrice}</span>
              </div>
            </div>
          </div>
          <div className="recent-bento-side">
            <div className="recent-bento-small" onClick={() => navigate("/listings/1")}>
              <img className="recent-bento-small-img" src={properties[0].images[0]} alt="Bento Small 1" />
              <div className="recent-bento-small-overlay" />
              <div className="recent-bento-small-content">
                <h3 className="recent-bento-small-title">{properties[0].title}</h3>
                <span className="recent-bento-small-price">{properties[0].formattedPrice}</span>
              </div>
            </div>
            <div className="recent-bento-small" onClick={() => navigate("/listings/2")}>
              <img className="recent-bento-small-img" src={properties[1].images[0]} alt="Bento Small 2" />
              <div className="recent-bento-small-overlay" />
              <div className="recent-bento-small-content">
                <h3 className="recent-bento-small-title">{properties[1].title}</h3>
                <span className="recent-bento-small-price">{properties[1].formattedPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
