import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Products = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { products, favorites, toggleFavorite, addToCart } = useApp();

  const categoryQuery = searchParams.get('cat');

  const filteredProducts = categoryQuery
    ? products.filter(p => p.categoryKey === categoryQuery)
    : products;

  const getCategoryTitle = () => {
    if (!categoryQuery) return "Tüm Ürünler";
    const mapped = {
      electronics: "Elektronik",
      fashion: "Giyim/Moda",
      home: "Ev/Yaşam",
      cosmetics: "Kozmetik",
      sports: "Spor/Outdoor",
      toys: "Oyuncak",
      books: "Kitap/Kırtasiye"
    };
    return mapped[categoryQuery] || "Kategori Ürünleri";
  };

  return (
    <main className="pt-14 pb-20">
      <div className="products-filter-strip no-scrollbar">
        <button className="products-filter-btn">
          <span className="material-symbols-outlined text-[18px]">filter_list</span>
          Filtreler
        </button>
        <button className="products-filter-btn">
          <span className="material-symbols-outlined text-[18px]">swap_vert</span>
          Popülerlik
        </button>
        <button className="products-filter-btn">
          Fiyat
          <span className="material-symbols-outlined text-[18px]">expand_more</span>
        </button>
        <div className="products-filter-divider"></div>
        <button className="products-filter-btn">Marka</button>
        <button className="products-filter-btn">Renk</button>
      </div>

      <div className="products-stats-row">
        <p className="products-stats-text">
          <span className="products-stats-query">"{getCategoryTitle()}"</span> için {filteredProducts.length} sonuç listeleniyor
        </p>
      </div>

      <div className="products-grid-container">
        {filteredProducts.map(p => {
          const isFav = favorites.includes(p.id);
          return (
            <div key={p.id} className="grid-product-card">
              <div className="grid-product-img-box">
                <img onClick={() => navigate(`/product/${p.id}`)} className="grid-product-img cursor-pointer" src={p.img} alt={p.name} />
                <button onClick={() => toggleFavorite(p.id)} className="grid-product-fav-btn">
                  <span className="material-symbols-outlined" style={isFav ? { color: '#ff6000', fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
                </button>
                {p.oldPrice && (
                  <div className="grid-product-badge">İndirim</div>
                )}
              </div>

              <div className="grid-product-info">
                <h3 onClick={() => navigate(`/product/${p.id}`)} className="grid-product-title cursor-pointer">{p.name}</h3>
                <div className="grid-product-rating-box">
                  <span className="material-symbols-outlined grid-product-star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="grid-product-rating-score">{p.rating}</span>
                  <span className="grid-product-rating-count">({p.reviews})</span>
                </div>
                <div className="grid-product-price-box">
                  <span className="grid-product-price">{p.price.toLocaleString('tr-TR')} TL</span>
                  <div className="grid-product-shipping">
                    <span className="material-symbols-outlined grid-product-shipping-icon">local_shipping</span>
                    <span className="grid-product-shipping-text">Ücretsiz Teslimat</span>
                  </div>
                </div>
                <button onClick={() => addToCart(p.id)} className="grid-product-add-btn">
                  <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                  <span className="font-label-md">Ekle</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="products-load-more-box">
        <button className="products-load-more-btn">
          Daha Fazla Sonuç Yükle
        </button>
      </div>
    </main>
  );
};

export default Products;
