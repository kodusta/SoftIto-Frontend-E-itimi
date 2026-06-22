import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('about');
  const [expandedLessons, setExpandedLessons] = useState({ 0: true });

  const course = courses.find((c) => c.id === courseId) || courses[0];

  const toggleLesson = (index) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleEnroll = () => {
    addToCart(course);
    navigate('/sepet');
  };

  const curriculum = [
    {
      title: 'Dağıtık Sistemlere Giriş',
      lessons: [
        { title: 'Ölçeklenebilirlik ve Erişilebilirlik Tanımları', type: 'video', duration: '12:40' },
        { title: 'CAP Teoremi: Mitler ve Gerçekler', type: 'video', duration: '18:20' },
        { title: 'Mimari Belgelendirme Şablonu', type: 'pdf', duration: 'PDF' }
      ]
    },
    {
      title: 'Veri Tutarlılığı Modelleri',
      lessons: [
        { title: 'Nihai Tutarlılık Pratikleri (Eventual Consistency)', type: 'video', duration: '15:10' },
        { title: 'Dağıtık İşlemler ve İki Aşamalı Taahhüt (2PC)', type: 'video', duration: '22:45' }
      ]
    }
  ];

  return (
    <main className="course-detail-layout">
      <section className="course-detail-hero">
        <img className="course-detail-hero-img" src={course.image} alt={course.title} />
        <div className="course-detail-hero-overlay">
          <button className="course-detail-play-btn">
            <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
          <p className="course-detail-play-text">Bu kursu önizleyin</p>
        </div>
      </section>

      <div className="course-detail-content">
        <div className="space-y-sm">
          <div className="course-detail-badges">
            {course.bestseller && (
              <span className="course-detail-badge bg-secondary-container text-on-secondary-container">EN ÇOK SATAN</span>
            )}
            <span className="course-detail-badge bg-surface-container-high text-on-surface-variant">{course.category.toUpperCase()}</span>
          </div>
          <h2 className="course-detail-title">{course.title}</h2>
          <div className="course-detail-meta">
            <div className="course-detail-rating">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="ml-1">{course.rating}</span>
            </div>
            <span className="course-detail-reviews">({course.reviewsCount} değerlendirme)</span>
            <span className="course-detail-reviews">•</span>
            <span className="course-detail-reviews">{course.studentsCount} öğrenci</span>
          </div>
          <div className="course-detail-instructor-row">
            <img className="course-detail-instructor-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnrTZKohqCeLuwE7Yo0eF98TTWM4ZdNEJHiRDtgwK7lpLu3jKQBZMbk7k6t7ngFWXs4u-hELV-HuT0LftSpvXFtNKbwvrEsH_h86dBNyhitYu_-uQkjzss3V-lXj2pah3MgU4kVG6AZ8qzgCYX60jT-IH_AfAXrQePqVaoiuQb7oteqoJgtNj-CuJRP20ZMLEcLlo4Qd4w1cEsgRkV-nrFtIVJLp2hC_A5Uos4LkbWKN3NXeIHgN149nt0AAVXuqxKQwr_ajfnMjKM" alt={course.instructor} />
            <div className="course-detail-instructor-info">
              <p className="course-detail-instructor-name">Hazırlayan <span className="text-primary font-bold">{course.instructor}</span></p>
              <p className="course-detail-instructor-title">{course.instructorTitle}</p>
            </div>
          </div>
        </div>

        <div className="sticky-tabs">
          <button className={activeTab === 'about' ? 'sticky-tab-active' : 'sticky-tab'} onClick={() => setActiveTab('about')}>Hakkında</button>
          <button className={activeTab === 'curriculum' ? 'sticky-tab-active' : 'sticky-tab'} onClick={() => setActiveTab('curriculum')}>Müfredat</button>
          <button className={activeTab === 'instructor' ? 'sticky-tab-active' : 'sticky-tab'} onClick={() => setActiveTab('instructor')}>Eğitmen</button>
          <button className={activeTab === 'reviews' ? 'sticky-tab-active' : 'sticky-tab'} onClick={() => setActiveTab('reviews')}>Yorumlar</button>
        </div>

        <div className="course-detail-grid">
          <div className="course-detail-main">
            <section className="detail-section" id="about">
              <h3 className="detail-section-title">Bu kurs hakkında</h3>
              <p className="detail-section-body">
                Modern sistem tasarımının karmaşıklıklarında ustalaşın. Bu kurs, teorik sistem mimarisi ile gerçek dünya uygulamaları arasındaki boşluğu doldurmaktadır. Veri bütünlüğünü ve yüksek kullanılabilirliği korurken milyonlarca isteği işleyebilen dayanıklı, dağıtık sistemler oluşturmayı öğreneceksiniz.
              </p>
              <div className="features-grid">
                <div className="feature-box">
                  <span className="material-symbols-outlined feature-box-icon">verified</span>
                  <div>
                    <h4 className="feature-box-title">Profesyonel Sertifika</h4>
                    <p className="feature-box-desc">Kursu başarıyla tamamladığınızda prestijli bir sertifika kazanın.</p>
                  </div>
                </div>
                <div className="feature-box">
                  <span className="material-symbols-outlined feature-box-icon">incognito</span>
                  <div>
                    <h4 className="feature-box-title">Ömür Boyu Erişim</h4>
                    <p className="feature-box-desc">Kendi hızınızda öğrenin ve ücretsiz güncellemelerden yararlanın.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="detail-section" id="curriculum">
              <div className="curriculum-header">
                <h3 className="detail-section-title">Müfredat</h3>
                <span className="curriculum-meta">5 ders • 1 saat 30 dk</span>
              </div>
              <div className="lessons-list">
                {curriculum.map((section, idx) => (
                  <div key={idx} className="lesson-item">
                    <button className="lesson-item-header" onClick={() => toggleLesson(idx)}>
                      <div className="lesson-item-title-group">
                        <div className={expandedLessons[idx] ? 'lesson-item-number' : 'lesson-item-number-inactive'}>
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </div>
                        <span className="lesson-item-title">{section.title}</span>
                      </div>
                      <span className="material-symbols-outlined lesson-expand-icon" style={{ transform: expandedLessons[idx] ? 'rotate(180deg)' : 'none' }}>
                        expand_more
                      </span>
                    </button>
                    {expandedLessons[idx] && (
                      <div className="lesson-expand-content">
                        <div className="lesson-details-list">
                          {section.lessons.map((lesson, lessonIdx) => (
                            <div key={lessonIdx} className="lesson-detail-row">
                              <div className="lesson-detail-title-group">
                                <span className="material-symbols-outlined lesson-detail-icon">
                                  {lesson.type === 'video' ? 'play_circle' : 'description'}
                                </span>
                                <span className="lesson-detail-text">{lesson.title}</span>
                              </div>
                              {lesson.type === 'video' ? (
                                <span className="lesson-detail-duration">{lesson.duration}</span>
                              ) : (
                                <span className="lesson-detail-badge">{lesson.duration}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section" id="instructor">
              <h3 className="detail-section-title">Eğitmen</h3>
              <div className="instructor-card">
                <img className="instructor-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAj7y2inyy3K1khXjyaXlRYl_h3PIgISJX542Y_C5MsZjirkLZIAhxhsQdojTi_HOi6PiN3NVXEP9KSD5TH3tg-cv6XQhCjP4eKLm9dOjLfuWSW4isOEuvuIA2GPsJx-NE8w42Br6xbHkhAn6PNhV8HJktUTOQmXfee_1e6lwHfNV-WDugR-6auWwHfIm_YbQXwM7S_m4mupnRD-hb98MFRfq0no2pj7lJ_HKkTLev8dc9VhBxALH6XelfmhKtIeF5GxKJStaQ-iQG" alt={course.instructor} />
                <div className="instructor-details">
                  <h4 className="instructor-name">{course.instructor}</h4>
                  <p className="instructor-meta-tag">{course.instructorTitle}</p>
                  <p className="instructor-bio">{course.instructorBio}</p>
                  <div className="instructor-stats">
                    <div className="instructor-stat-box">
                      <p className="instructor-stat-value">{course.instructorStats.students}</p>
                      <p className="instructor-stat-label">Öğrenci</p>
                    </div>
                    <div className="instructor-stat-box">
                      <p className="instructor-stat-value">{course.instructorStats.courses}</p>
                      <p className="instructor-stat-label">Kurs</p>
                    </div>
                    <div className="instructor-stat-box">
                      <p className="instructor-stat-value">{course.instructorStats.rating}</p>
                      <p className="instructor-stat-label">Puanı</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="detail-section" id="reviews">
              <h3 className="detail-section-title">Öğrenci Yorumları</h3>
              <div className="reviews-grid">
                <div className="review-card">
                  <div className="review-header">
                    <div className="review-user-group">
                      <div className="review-user-avatar">JD</div>
                      <div>
                        <p className="review-user-name">James D.</p>
                        <p className="review-time">2 hafta önce</p>
                      </div>
                    </div>
                    <div className="review-stars">
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                  </div>
                  <p className="review-text">"Sistem tasarımı üzerine bulabileceğiniz en kapsamlı eğitim. Helena hoca Raft ve Paxos gibi karmaşık algoritmaları inanılmaz bir sadelikle aktarıyor."</p>
                </div>

                <div className="review-card">
                  <div className="review-header">
                    <div className="review-user-group">
                      <div className="review-user-avatar-alt">SR</div>
                      <div>
                        <p className="review-user-name">Sarah R.</p>
                        <p className="review-time">1 ay önce</p>
                      </div>
                    </div>
                    <div className="review-stars">
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined review-star-icon">star_half</span>
                    </div>
                  </div>
                  <p className="review-text">"Harika içerik. Özellikle fintech altyapılarını ölçekleme üzerine yaptığımız vaka çalışmasına bayıldım. Her kuruşuna değer."</p>
                </div>
              </div>
              <button className="reviews-more-btn">Tüm yorumları görüntüle</button>
            </section>
          </div>

          <aside className="desktop-sidebar">
            <div className="sticky-sidebar-box">
              <div className="price-card">
                <div className="price-row">
                  <span className="price-current">
                    {course.price === 0 ? 'Ücretsiz' : `${course.price.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}`}
                  </span>
                  {course.originalPrice > 0 && (
                    <>
                      <span className="price-old">${course.originalPrice}</span>
                      <span className="price-discount">
                        %{Math.round((1 - course.price / course.originalPrice) * 100)} İNDİRİM
                      </span>
                    </>
                  )}
                </div>
                <div className="price-btn-group">
                  <button className="price-primary-btn" onClick={handleEnroll}>Şimdi Kaydol</button>
                  <button className="price-secondary-btn" onClick={() => { addToCart(course); navigate('/sepet'); }}>Sepete Ekle</button>
                </div>
                <p className="price-guarantee">30 Gün Para İade Garantisi</p>
                <hr className="border-outline-variant/30" />
                <div className="space-y-sm">
                  <p className="price-includes-title">Bu kursun içeriği:</p>
                  <ul className="price-includes-list">
                    <li className="price-include-item">
                      <span className="material-symbols-outlined price-include-icon">play_circle</span> 
                      {course.duration} isteğe bağlı video ders
                    </li>
                    <li className="price-include-item">
                      <span className="material-symbols-outlined price-include-icon">description</span> 
                      15 indirilebilir ek kaynak
                    </li>
                    <li className="price-include-item">
                      <span className="material-symbols-outlined price-include-icon">stay_current_portrait</span> 
                      Mobil ve TV'den sınırsız erişim
                    </li>
                    <li className="price-include-item">
                      <span className="material-symbols-outlined price-include-icon">workspace_premium</span> 
                      Resmi tamamlama sertifikası
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="mobile-enroll-bar">
        <div>
          <p className="mobile-enroll-price">
            {course.price === 0 ? 'Ücretsiz' : `${course.price.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}`}
          </p>
          <p className="mobile-enroll-warning">Kampanya 2 gün içinde bitiyor</p>
        </div>
        <button className="mobile-enroll-btn" onClick={handleEnroll}>Şimdi Kaydol</button>
      </div>
    </main>
  );
}
