import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Products = () => {
  const { products, addToCart } = useContext(CartContext);

  const [selectedCategory, setSelectedCategory] = useState('Hepsi');
  const [selectedMaterial, setSelectedMaterial] = useState('Hepsi');
  const [selectedColor, setSelectedColor] = useState('Hepsi');
  const [maxPrice, setMaxPrice] = useState(2500);
  const [sortBy, setSortBy] = useState('Varsayılan');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Hepsi', 'Bahçe Aletleri', 'Tohumlar', 'Saksılar', 'Toprak & Gübre'];
  const materials = ['Hepsi', 'Paslanmaz Çelik', 'Karbon Çeliği', 'Anodize Alüminyum', 'Organik GDO\'suz', 'Terracotta', 'Doğal Kompost'];
  const colors = ['Hepsi', 'Kırmızı', 'Mavi', 'Krem', 'Siyah', 'Metalik', 'Doğal Sarı'];

  const handleReset = () => {
    setSelectedCategory('Hepsi');
    setSelectedMaterial('Hepsi');
    setSelectedColor('Hepsi');
    setMaxPrice(2500);
    setSortBy('Varsayılan');
    setSearchQuery('');
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Hepsi' || product.category === selectedCategory;
    const matchesMaterial = selectedMaterial === 'Hepsi' || product.material === selectedMaterial;
    const matchesColor = selectedColor === 'Hepsi' || product.color === selectedColor;
    const matchesPrice = product.price <= maxPrice;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesMaterial && matchesColor && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'Artan Fiyat') return a.price - b.price;
    if (sortBy === 'Azalan Fiyat') return b.price - a.price;
    if (sortBy === 'İsim (A-Z)') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div class="main-canvas bauhaus-grid">
      <div class="main-grid-layout">
        <aside class="sidebar-filters">
          <div class="sidebar-header">
            <h2 class="product-title">Filtreler</h2>
          </div>

          <div class="filter-group">
            <h3 class="filter-heading">Kategoriler</h3>
            <ul class="checkbox-list">
              {categories.map(cat => (
                <li class="checkbox-item" key={cat} onClick={() => setSelectedCategory(cat)}>
                  <div class={selectedCategory === cat ? "checkbox-box-active" : "checkbox-box"}>
                    {selectedCategory === cat && <div class="checkbox-box-fill"></div>}
                  </div>
                  <span class="checkbox-label">{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="filter-group">
            <h3 class="filter-heading">Malzeme</h3>
            <ul class="checkbox-list">
              {materials.map(mat => (
                <li class="checkbox-item" key={mat} onClick={() => setSelectedMaterial(mat)}>
                  <div class={selectedMaterial === mat ? "checkbox-box-active" : "checkbox-box"}>
                    {selectedMaterial === mat && <div class="checkbox-box-fill"></div>}
                  </div>
                  <span class="checkbox-label">{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="filter-group">
            <h3 class="filter-heading">Renk</h3>
            <ul class="checkbox-list">
              {colors.map(col => (
                <li class="checkbox-item" key={col} onClick={() => setSelectedColor(col)}>
                  <div class={selectedColor === col ? "checkbox-box-active" : "checkbox-box"}>
                    {selectedColor === col && <div class="checkbox-box-fill"></div>}
                  </div>
                  <span class="checkbox-label">{col}</span>
                </li>
              ))}
            </ul>
          </div>

          <div class="filter-group">
            <h3 class="filter-heading">Fiyat Aralığı</h3>
            <div class="price-slider-container">
              <input 
                type="range" 
                min="0" 
                max="2500" 
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))} 
                class="w-full accent-primary" 
              />
              <div class="price-slider-labels">
                <span>0 TL</span>
                <span class="text-primary font-bold">{maxPrice} TL</span>
              </div>
            </div>
          </div>

          <button class="product-btn" onClick={handleReset}>Filtreleri Temizle</button>
        </aside>

        <div class="products-content-col">
          <div class="products-header-row">
            <div>
              <span class="hero-tag">KOLEKSİYON</span>
              <h1 class="section-title">Bauhaus Bahçe Koleksiyonu</h1>
            </div>
            
            <div class="flex items-center gap-md">
              <input 
                type="text" 
                placeholder="ARA..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                class="bg-transparent border-b-2 border-on-background focus:outline-none focus:border-primary px-sm py-xs uppercase font-label-md text-label-md" 
              />
              <div class="flex items-center gap-sm font-label-md text-label-md uppercase">
                <span>Sırala:</span>
                <select class="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option>Varsayılan</option>
                  <option>Artan Fiyat</option>
                  <option>Azalan Fiyat</option>
                  <option>İsim (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {sortedProducts.length === 0 ? (
            <div class="text-center py-xxl">
              <h3 class="product-title mb-md">Eşleşen Ürün Bulunamadı</h3>
              <p class="product-desc">Farklı filtre kriterleri deneyebilir veya tüm filtreleri sıfırlayabilirsiniz.</p>
            </div>
          ) : (
            <div class="product-grid">
              {sortedProducts.map((product) => (
                <div class="product-card" key={product.id}>
                  <div class="product-img-wrapper">
                    <img class="product-img" src={product.image} alt={product.name} />
                    <div class="product-badge">Arşiv</div>
                  </div>
                  <div class="product-content">
                    <div class="product-info-block">
                      <div class="product-header-row">
                        <h3 class="product-title">{product.name}</h3>
                        <span class="product-price">{product.price} TL</span>
                      </div>
                      <span class="product-desc block text-primary text-xs uppercase font-semibold">{product.category} / {product.material}</span>
                      <p class="product-desc mt-xs">{product.desc}</p>
                    </div>
                    <button class="product-btn" onClick={() => addToCart(product)}>
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
