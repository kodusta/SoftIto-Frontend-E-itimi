import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, favorites, toggleFavorite, addToCart } = useApp();
  const [activeTab, setActiveTab] = useState('desc');

  const product = products.find(p => p.id === parseInt(id)) || products[8];
  const isFav = favorites.includes(product.id);

  const relatedItems = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <main className="product-detail-main">
      <section className="detail-gallery-section">
        <div className="detail-gallery-track no-scrollbar">
          <div className="detail-gallery-slide">
            <img className="detail-gallery-img" src={product.img} alt={product.name} />
          </div>
        </div>
        <div className="detail-gallery-dots">
          <div className="detail-gallery-dot-active"></div>
          <div className="detail-gallery-dot"></div>
          <div className="detail-gallery-dot"></div>
        </div>
        <button onClick={() => toggleFavorite(product.id)} className="detail-gallery-fav-btn">
          <span className="material-symbols-outlined" style={isFav ? { color: '#ff6000', fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
        </button>
      </section>

      <div className="detail-header-info">
        <div className="detail-title-container">
          <span className="detail-badge-promo">EN ÇOK SATAN</span>
          <h2 className="detail-title">{product.name}</h2>
        </div>
        <div className="detail-rating-row">
          <div className="detail-stars-box">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
          <span className="detail-rating-score">{product.rating}</span>
          <span className="detail-rating-count">({product.reviews} Değerlendirme)</span>
        </div>
        <div className="detail-price-row">
          <span className="detail-price-current">{product.price.toLocaleString('tr-TR')} TL</span>
          {product.oldPrice && (
            <>
              <span className="detail-price-old">{product.oldPrice.toLocaleString('tr-TR')} TL</span>
              <span className="detail-price-discount">-%22</span>
            </>
          )}
        </div>
      </div>

      <section className="detail-seller-card">
        <div className="detail-seller-info">
          <div className="detail-seller-logo-box">
            <img className="detail-seller-logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_OMoTBEDI4C8nt6rlkyZ3e1s3B4G_z0sAy2unTmEMLweOcH5uFotYtENmss86rwfj2ECE1s1ipky7h3GoZfrL8ZDqbxlUQrhOQMtwjvmnEs3YU5gXFr13vd4X_WJ0imd11i0rAOkXNk6f-u4AS3X21VHBjn3dfDmniotFj_owceMC4k9NEqmr7bJVBeJOazAPpFp8_BXFuuqA4OozWvsMWek-u1G5gqlGirLFAorz5lgnZiNpEKiXHHnV-dDAK_Ztves8QuGfRSM" alt="Seller Logo" />
          </div>
          <div>
            <p className="detail-seller-name">Satıcı: <span>Kinetic Retail</span></p>
            <div className="detail-rating-score-row">
              <span className="detail-seller-score">9.8</span>
              <span className="detail-seller-score-label">Mağaza Puanı</span>
            </div>
          </div>
        </div>
        <button className="detail-seller-visit-btn">Mağazayı Ziyaret Et</button>
      </section>

      <section className="detail-tabs-section">
        <div className="detail-tabs-header no-scrollbar">
          <button onClick={() => setActiveTab('desc')} className={activeTab === 'desc' ? "detail-tab-btn-active bg-transparent border-none cursor-pointer" : "detail-tab-btn bg-transparent border-none cursor-pointer"}>Ürün Açıklaması</button>
          <button onClick={() => setActiveTab('specs')} className={activeTab === 'specs' ? "detail-tab-btn-active bg-transparent border-none cursor-pointer" : "detail-tab-btn bg-transparent border-none cursor-pointer"}>Özellikler</button>
          <button onClick={() => setActiveTab('reviews')} className={activeTab === 'reviews' ? "detail-tab-btn-active bg-transparent border-none cursor-pointer" : "detail-tab-btn bg-transparent border-none cursor-pointer"}>Yorumlar ({product.reviews})</button>
        </div>
        <div className="detail-tabs-content">
          {activeTab === 'desc' && (
            <>
              <p className="detail-desc-paragraph">{product.desc}</p>
              <ul className="detail-features-list">
                <li className="detail-feature-item">
                  <span className="material-symbols-outlined detail-feature-icon">check_circle</span>
                  Yüksek performanslı dayanıklı malzeme kullanımı
                </li>
                <li className="detail-feature-item">
                  <span className="material-symbols-outlined detail-feature-icon">check_circle</span>
                  Ergonomik ve şık tasarım detayları
                </li>
                <li className="detail-feature-item">
                  <span className="material-symbols-outlined detail-feature-icon">check_circle</span>
                  2 Yıl resmi distribütör garantisi kapsamındadır
                </li>
              </ul>
            </>
          )}
          {activeTab === 'specs' && (
            <p className="detail-desc-paragraph">Bu ürün yüksek kaliteli malzemelerden üretilmiştir, orijinal kutusuyla birlikte faturalı olarak gönderilmektedir.</p>
          )}
          {activeTab === 'reviews' && (
            <p className="detail-desc-paragraph">Kullanıcılarımızın %98'i bu ürünü tavsiye ediyor. Çok hızlı kargo ve özenli paketleme için teşekkür ederiz.</p>
          )}
        </div>
      </section>

      <section className="detail-shipping-promo-section">
        <div className="detail-shipping-card">
          <span className="material-symbols-outlined detail-shipping-icon">local_shipping</span>
          <div>
            <h4 className="detail-shipping-title">Yarın Kapında</h4>
            <p className="detail-shipping-desc">Ücretsiz hızlı teslimat seçeneğiyle yarın teslim alın.</p>
          </div>
        </div>
        <div className="detail-installment-card">
          <span className="material-symbols-outlined detail-installment-icon">payments</span>
          <div>
            <h4 className="detail-installment-title">Taksit Seçenekleri</h4>
            <p className="detail-installment-desc">Kredi kartlarına peşin fiyatına 6 aya varan taksit imkanı.</p>
          </div>
        </div>
      </section>

      <section className="detail-related-section">
        <h3 className="detail-related-title">Birlikte Alınan Ürünler</h3>
        <div className="detail-related-row no-scrollbar">
          {relatedItems.map(item => (
            <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} className="related-product-card">
              <div className="related-product-img-box">
                <img className="related-product-img" src={item.img} alt={item.name} />
              </div>
              <p className="related-product-title">{item.name}</p>
              <p className="related-product-price">{item.price.toFixed(2)} TL</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="detail-sticky-footer">
        <div className="detail-footer-price-box">
          <p className="detail-footer-price-label">Toplam Fiyat</p>
          <p className="detail-footer-price">{product.price.toLocaleString('tr-TR')} TL</p>
        </div>
        <button onClick={() => addToCart(product.id)} className="detail-footer-btn-add">
          <span className="material-symbols-outlined">shopping_cart</span>
          Sepete Ekle
        </button>
      </footer>
    </main>
  );
};

export default ProductDetail;
