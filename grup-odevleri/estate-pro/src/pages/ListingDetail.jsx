import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

export default function ListingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id)) || properties[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <main className="detail-main">
      <section className="detail-slider-section">
        <div className="detail-slider-container">
          <div className="detail-slide">
            <img className="detail-slide-img" src={property.images[activeImageIndex]} alt={property.title} />
            <span className="detail-slide-badge">{property.badge}</span>
            <div className="detail-slide-counter">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">photo_library</span>
              <span className="font-label-md text-label-md text-on-surface-variant">{activeImageIndex + 1}/{property.images.length}</span>
            </div>
          </div>
        </div>
        {property.images.length > 1 && (
          <>
            <button className="detail-slider-btn-prev" onClick={prevImage}>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="detail-slider-btn-next" onClick={nextImage}>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </>
        )}
      </section>

      <article className="detail-info-article">
        <div className="detail-header-row">
          <div className="detail-title-group">
            <span className="detail-price">{property.formattedPrice}</span>
            <h2 className="detail-title">{property.title}</h2>
            <p className="detail-location-row">
              <span className="material-symbols-outlined">location_on</span>
              {property.location}
            </p>
          </div>
          <button 
            className={isFavorite ? "detail-fav-btn-active" : "detail-fav-btn"} 
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0" }}>
              favorite
            </span>
          </button>
        </div>

        <section className="detail-specs-grid">
          <div className="detail-spec-card">
            <span className="detail-spec-label">METREKARE</span>
            <div className="detail-spec-value-group">
              <span className="material-symbols-outlined detail-spec-icon">square_foot</span>
              <span className="detail-spec-val">{property.size}</span>
            </div>
          </div>
          <div className="detail-spec-card">
            <span className="detail-spec-label">ODA SAYISI</span>
            <div className="detail-spec-value-group">
              <span className="material-symbols-outlined detail-spec-icon">bed</span>
              <span className="detail-spec-val">{property.beds}</span>
            </div>
          </div>
          <div className="detail-spec-card">
            <span className="detail-spec-label">BİNA YAŞI</span>
            <div className="detail-spec-value-group">
              <span className="material-symbols-outlined detail-spec-icon">domain</span>
              <span className="detail-spec-val">{property.age}</span>
            </div>
          </div>
          <div className="detail-spec-card">
            <span className="detail-spec-label">DURUM / KAT</span>
            <div className="detail-spec-value-group">
              <span className="material-symbols-outlined detail-spec-icon">layers</span>
              <span className="detail-spec-val">{property.floor}</span>
            </div>
          </div>
        </section>

        <section className="detail-desc-section">
          <h3 className="detail-section-title">Açıklama</h3>
          <p className="detail-desc-text">{property.description}</p>
          <button className="detail-show-more-btn">Daha Fazla Göster</button>
        </section>

        <section className="detail-map-section">
          <div className="detail-map-header">
            <h3 className="detail-section-title">Konum</h3>
            <span className="detail-map-link">Haritada Aç</span>
          </div>
          <div className="detail-map-wrapper">
            <img className="detail-map-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmhc7S4ynHRhE87MMf0Qc_gu39v9TXKThJt7i4I1NK_w1EZ10GuB_wGcFFmNYRek-kQb1tVSMwS094VHSjQzCVlNseYuQQ6DjdxX049V14uaDwe9nQWI6fRcnBKgloFDgJDLHBdFAlm-LJR-y4Uyc9YK348e5rQK1PafycGVAfU_cDL6fueA-KxzUtENs2AeTesYZI85wPLgWjlGVuA9VgueYUi3h08mEZPGBJW96PiYzxdrzyKmrZ8AS-OPfA3TwuTCm8_fJEhsAz" alt="Map View" />
            <div className="detail-map-marker-container">
              <div className="detail-map-marker-group">
                <div className="detail-map-ping" />
                <span className="material-symbols-outlined detail-map-marker" style={{ fontVariationSettings: "'FILL' 1" }}>
                  location_on
                </span>
              </div>
            </div>
            <div className="detail-map-tooltip">
              <p className="detail-map-tooltip-title">{property.district} Prestij Projesi</p>
              <p className="detail-map-tooltip-desc">Merkez Caddesi, No: 12</p>
            </div>
          </div>
        </section>
      </article>

      <footer className="detail-sticky-footer">
        <div className="detail-footer-content">
          <button className="detail-footer-btn-secondary">
            <span className="material-symbols-outlined">call</span>
            <span>Arayın</span>
          </button>
          <button className="detail-footer-btn-secondary">
            <span className="material-symbols-outlined">chat</span>
            <span>Mesaj Gönder</span>
          </button>
          <button className="detail-footer-btn-primary" onClick={() => navigate(`/booking?propertyId=${property.id}`)}>
            <span className="material-symbols-outlined">calendar_month</span>
            <span>Randevu Al</span>
          </button>
        </div>
      </footer>
    </main>
  );
}
