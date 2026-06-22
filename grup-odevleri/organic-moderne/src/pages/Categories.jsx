import React from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (catName) => {
    navigate(`/urunler?category=${catName}`);
  };

  return (
    <div class="categories-main bauhaus-grid">
      <aside class="categories-sidebar">
        <div class="space-y-sm">
          <p class="categories-sidebar-heading">NAVİGASYON</p>
          <div class="flex flex-col gap-sm">
            <button class="categories-sidebar-btn" onClick={() => navigate('/urunler')}>Tüm Arşiv</button>
            <button class="categories-sidebar-btn-active">Koleksiyonlar</button>
            <button class="categories-sidebar-btn" onClick={() => navigate('/urunler')}>Yeni Gelenler</button>
          </div>
        </div>
        <div class="mt-auto">
          <div class="bg-primary p-md border-2 border-on-background cursor-pointer hover:bg-on-background group transition-all" onClick={() => navigate('/hakkimizda')}>
            <p class="text-background font-label-md text-label-md uppercase group-hover:text-primary transition-all">Manifestoyu Oku</p>
          </div>
        </div>
      </aside>

      <section class="categories-canvas">
        <header class="categories-header">
          <h1 class="categories-header-title">Bahçenin <span class="text-primary">Taksonomisi</span></h1>
          <p class="categories-header-desc">
            Kataloğumuz yapısal işlevselliğe göre düzenlenmiştir. Ekolojik dengeyi ve geometrik sadeliği ön planda tutan koleksiyonumuzu işlevsel kategoriler üzerinden keşfedin.
          </p>
        </header>

        <div class="categories-grid">
          <div class="category-item-card" onClick={() => handleCategoryClick('Bahçe Aletleri')}>
            <div class="category-item-content">
              <div class="category-item-header">
                <span class="category-item-icon">yard</span>
                <span class="category-item-number">01</span>
              </div>
              <div class="category-item-title-block">
                <h2 class="category-item-title">Bahçe Aletleri</h2>
                <div class="category-item-bar"></div>
              </div>
            </div>
          </div>

          <div class="category-item-card" onClick={() => handleCategoryClick('Tohumlar')}>
            <div class="category-item-content">
              <div class="category-item-header">
                <span class="category-item-icon">eco</span>
                <span class="category-item-number">02</span>
              </div>
              <div class="category-item-title-block">
                <h2 class="category-item-title">Tohumlar</h2>
                <div class="category-item-bar"></div>
              </div>
            </div>
          </div>

          <div class="category-item-card" onClick={() => handleCategoryClick('Saksılar')}>
            <div class="category-item-content">
              <div class="category-item-header">
                <span class="category-item-icon">shapes</span>
                <span class="category-item-number">03</span>
              </div>
              <div class="category-item-title-block">
                <h2 class="category-item-title">Saksılar</h2>
                <div class="category-item-bar"></div>
              </div>
            </div>
          </div>

          <div class="category-item-card" onClick={() => handleCategoryClick('Toprak & Gübre')}>
            <div class="category-item-content">
              <div class="category-item-header">
                <span class="category-item-icon">agriculture</span>
                <span class="category-item-number">04</span>
              </div>
              <div class="category-item-title-block">
                <h2 class="category-item-title">Toprak & Gübre</h2>
                <div class="category-item-bar"></div>
              </div>
            </div>
          </div>

          <div class="featured-series-card">
            <div class="featured-series-grid">
              <div class="featured-series-text-side">
                <span class="font-label-sm text-label-sm uppercase text-primary mb-sm">Özel Seri</span>
                <h3 class="font-headline-md text-headline-md uppercase mb-md">Weimar Bahçe Serisi</h3>
                <p class="font-body-md text-body-md mb-xl">Orijinal 1923 Weimar atölye tasarımlarından esinlenen sınırlı sayıda üretim. Birincil renkler, ikincil işlevler.</p>
                <button class="self-start px-xl py-md border-2 border-on-background font-label-md text-label-md uppercase hover:bg-primary hover:text-background hover:border-primary transition-all" onClick={() => navigate('/urunler')}>Seriyi Keşfet</button>
              </div>
              <div class="featured-series-image-side">
                <img class="featured-series-img" src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" alt="Weimar" />
              </div>
            </div>
          </div>
        </div>

        <div class="materials-filter-section">
          <div class="materials-filter-header">
            <h3 class="font-headline-md text-headline-md uppercase">Malzemeye Göre Filtrele</h3>
            <div class="materials-filter-chips">
              <span class="materials-filter-chip-active">Çelik</span>
              <span class="materials-filter-chip">Alüminyum</span>
              <span class="materials-filter-chip">Toprak</span>
              <span class="materials-filter-chip">Kompost</span>
            </div>
          </div>
          <div class="materials-filter-grid">
            <div class="materials-filter-card" onClick={() => navigate('/urunler')}>
              <p class="materials-filter-text">Karbon Çeliği</p>
            </div>
            <div class="materials-filter-card" onClick={() => navigate('/urunler')}>
              <p class="materials-filter-text">Anodize Alüminyum</p>
            </div>
            <div class="materials-filter-card" onClick={() => navigate('/urunler')}>
              <p class="materials-filter-text">Terracotta</p>
            </div>
            <div class="materials-filter-card" onClick={() => navigate('/urunler')}>
              <p class="materials-filter-text">Ata Tohumu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
