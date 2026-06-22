import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Home() {
  const navigate = useNavigate();
  const { courses, addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/kurslar?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleCategoryClick = (categorySlug) => {
    navigate(`/kurslar?cat=${categorySlug}`);
  };

  return (
    <main className="main-layout">
      <section className="hero-banner">
        <div className="hero-content">
          <div className="space-y-xs">
            <p className="hero-welcome">Tekrar hoş geldin, Alex</p>
            <h2 className="hero-headline">Bugün neyi ustalaştırmak istersin?</h2>
          </div>
          <form className="hero-search-wrapper" onSubmit={handleSearchSubmit}>
            <span className="material-symbols-outlined hero-search-icon">search</span>
            <input 
              className="hero-search-input" 
              placeholder="5.000'den fazla online kurs ara..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="hero-search-btn" type="submit">Bul</button>
          </form>
        </div>
        <div className="hero-mesh-bg">
          <div className="hero-mesh-gradient"></div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-header-row">
          <h3 className="section-title">Öğrenmeye Devam Et</h3>
          <span className="section-link" onClick={() => navigate('/profil')}>Tümünü Gör</span>
        </div>
        <div className="bento-grid">
          <div className="featured-progress-card group">
            <div className="featured-card-img-wrapper">
              <img 
                className="featured-card-img" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnAwgxjkBn4-ZNH5_1bHLlCEOQHn6LSk3VWzj0tErl7Bz8l_uh8XcqncWMfZwJ9NuJE6B1JTE5YoqEBZzehoAQwxqtl1tyPc7zQASu4W4Zc_fyxy0EvEvxoU8zcrW1ivL0JiEotbtR4EPaDvgni0r5QZA1bgGDRtaIyJVkUksqvNW4romT7_7w6VRt06hdGcm2x46u8y-p7p7Q1JReTXYd6V9rzHGXx2PAUOB0lE-TyzaYOTdw1gGQzybdPvky8Cquh49nstRNcxRw" 
                alt="Figma ile Gelişmiş Tasarım Sistemleri" 
              />
            </div>
            <div className="featured-card-content">
              <div>
                <span className="badge-primary">UX Tasarım</span>
                <h4 className="featured-card-title">Figma ile Gelişmiş Tasarım Sistemleri</h4>
                <p className="featured-card-meta">Eğitmen: Jordan Smith • 4.9 ★</p>
              </div>
              <div className="featured-progress-section">
                <div className="featured-progress-label-row">
                  <span>İlerleme: %65</span>
                  <span>12/18 Ders</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: '65%' }}></div>
                </div>
                <button className="featured-resume-btn" onClick={() => navigate('/kurs/system-architecture')}>Derse Devam Et</button>
              </div>
            </div>
          </div>

          <div className="stats-sidebar">
            <div className="stat-item-card">
              <div className="stat-icon-wrapper">
                <span className="material-symbols-outlined stat-icon">workspace_premium</span>
              </div>
              <div className="stat-content">
                <p className="stat-value">12</p>
                <p className="stat-label">Tamamlanan Kurs</p>
              </div>
            </div>
            <div className="next-up-card group" onClick={() => navigate('/kurs/python-programming')}>
              <p className="next-up-label">SIRADAKİ DERS</p>
              <h4 className="next-up-title">React 18'e Giriş</h4>
              <p className="next-up-desc">45 dakika • Kodlama</p>
            </div>
            <div className="next-up-card">
              <p className="next-up-label">TESLİM EDİLECEK ÖDEV</p>
              <h4 className="next-up-title">Pazarlama Raporu Taslağı</h4>
              <p className="next-up-desc-error">4 saat içinde teslim edilmeli</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h3 className="section-title">Kategorileri Keşfedin</h3>
        <div className="scroll-container">
          <button className="category-chip-btn" onClick={() => handleCategoryClick('tasarim')}>
            <span className="material-symbols-outlined category-chip-icon">palette</span>
            <span className="category-chip-text">Tasarım</span>
          </button>
          <button className="category-chip-btn" onClick={() => handleCategoryClick('gelistirme')}>
            <span className="material-symbols-outlined category-chip-icon">terminal</span>
            <span className="category-chip-text">Geliştirme</span>
          </button>
          <button className="category-chip-btn" onClick={() => handleCategoryClick('pazarlama')}>
            <span className="material-symbols-outlined category-chip-icon">trending_up</span>
            <span className="category-chip-text">Pazarlama</span>
          </button>
          <button className="category-chip-btn" onClick={() => handleCategoryClick('is-dunyasi')}>
            <span className="material-symbols-outlined category-chip-icon">business_center</span>
            <span className="category-chip-text">İş Dünyası</span>
          </button>
        </div>
      </section>

      <section className="section-container">
        <div className="section-header-row">
          <h3 className="section-title">Öne Çıkan Kurslar</h3>
          <span className="section-link" onClick={() => navigate('/kurslar')}>Tümünü Gör</span>
        </div>
        <div className="featured-courses-scroll">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-card-img-wrapper" onClick={() => navigate(`/kurs/${course.id}`)}>
                <img className="course-card-img" src={course.image} alt={course.title} />
                <div className="course-card-price-badge">
                  {course.price === 0 ? 'Ücretsiz' : `${course.price.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}`}
                </div>
              </div>
              <div className="course-card-content">
                <h4 className="course-card-title" onClick={() => navigate(`/kurs/${course.id}`)}>{course.title}</h4>
                <div className="course-card-rating-row">
                  <span className="material-symbols-outlined course-card-rating-icon">star</span>
                  <span className="course-card-rating-text">{course.rating} ({course.reviewsCount} yorum)</span>
                </div>
                <div className="course-card-footer">
                  <span className="course-card-duration">{course.duration}</span>
                  <button className="course-card-btn" onClick={() => { addToCart(course); navigate('/sepet'); }}>Kayıt Ol</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
