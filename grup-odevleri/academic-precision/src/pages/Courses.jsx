import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Courses() {
  const navigate = useNavigate();
  const { courses, addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const cat = searchParams.get('cat') || 'all';
    setSearchQuery(q);
    setSelectedCategory(cat);
  }, [searchParams]);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.categorySlug === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="main-layout">
      <section className="section-container">
        <h2 className="section-title">Kurs Kataloğu</h2>
        <div className="flex flex-col md:flex-row gap-md items-center">
          <div className="relative flex-grow w-full">
            <span className="material-symbols-outlined absolute left-4 top-3 text-outline">search</span>
            <input 
              className="w-full h-12 pl-12 pr-4 rounded-lg border border-outline-variant/60 focus:border-primary focus:ring-1 focus:ring-primary text-body-sm bg-white" 
              placeholder="Kurs adına veya eğitmene göre ara..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="scroll-container w-full md:w-auto">
            <button 
              className={selectedCategory === 'all' ? 'category-chip-btn-active' : 'category-chip-btn'}
              onClick={() => setSelectedCategory('all')}
            >
              <span className="category-chip-text">Tüm Kurslar</span>
            </button>
            <button 
              className={selectedCategory === 'tasarim' ? 'category-chip-btn-active' : 'category-chip-btn'}
              onClick={() => setSelectedCategory('tasarim')}
            >
              <span className="category-chip-text">Tasarım</span>
            </button>
            <button 
              className={selectedCategory === 'gelistirme' ? 'category-chip-btn-active' : 'category-chip-btn'}
              onClick={() => setSelectedCategory('gelistirme')}
            >
              <span className="category-chip-text">Geliştirme</span>
            </button>
            <button 
              className={selectedCategory === 'pazarlama' ? 'category-chip-btn-active' : 'category-chip-btn'}
              onClick={() => setSelectedCategory('pazarlama')}
            >
              <span className="category-chip-text">Pazarlama</span>
            </button>
            <button 
              className={selectedCategory === 'is-dunyasi' ? 'category-chip-btn-active' : 'category-chip-btn'}
              onClick={() => setSelectedCategory('is-dunyasi')}
            >
              <span className="category-chip-text">İş Dünyası</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section-container">
        <p className="text-on-surface-variant text-body-sm font-bold">
          {filteredCourses.length} kurs listeleniyor
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm border border-outline-variant/50 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="course-card-img-wrapper" onClick={() => navigate(`/kurs/${course.id}`)}>
                <img className="course-card-img" src={course.image} alt={course.title} />
                <div className="course-card-price-badge">
                  {course.price === 0 ? 'Ücretsiz' : `${course.price.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}`}
                </div>
              </div>
              <div className="p-md space-y-sm flex-grow flex flex-col justify-between">
                <div className="space-y-xs">
                  <div className="flex gap-xs">
                    <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-md text-[10px] uppercase">
                      {course.category}
                    </span>
                    {course.bestseller && (
                      <span className="bg-secondary-container/20 text-secondary px-2 py-0.5 rounded-full font-label-md text-[10px] uppercase">
                        EN ÇOK SATAN
                      </span>
                    )}
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface cursor-pointer leading-tight" onClick={() => navigate(`/kurs/${course.id}`)}>
                    {course.title}
                  </h4>
                  <p className="text-body-sm text-on-surface-variant">Eğitmen: {course.instructor}</p>
                  <div className="course-card-rating-row">
                    <span className="material-symbols-outlined course-card-rating-icon">star</span>
                    <span className="course-card-rating-text">{course.rating} ({course.reviewsCount} yorum)</span>
                  </div>
                </div>
                <div className="course-card-footer mt-md">
                  <span className="course-card-duration">{course.duration}</span>
                  <button 
                    className="course-card-btn"
                    onClick={() => {
                      addToCart(course);
                      navigate('/sepet');
                    }}
                  >
                    Kayıt Ol
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
