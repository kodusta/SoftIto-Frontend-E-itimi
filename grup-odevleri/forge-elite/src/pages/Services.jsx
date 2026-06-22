import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SERVICES_DATA = [
  {
    id: 'weightlifting',
    category: 'strength',
    title: 'Ağırlık Kaldırma',
    badge: 'GÜÇ',
    desc: 'Olimpik teknikler ve patlayıcı güç antrenmanları ile limitlerinizi zorlayın. Uzman koçlar eşliğinde formunuzu mükemmelleştirin.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbcm7aJzDOB9H9zonGKwkIWvjwIvfSz2BDkOIqXJEwRKrFpE5nWfS56SGqGN5sxYBOXC9Pz59AU9HWlW6I0-mnBxf7Vepb-LcCDiNQ56PLKPHRAK5LWn810ISDe8JGdA7xvHRcfDNjuDS9cAoqba8NTA678P1Mh6_n6u9pRyCceX85ozC1XLODBK8_WOjfjCM5fh_yhcY8ezOOEXOI1P0wn11OIdiwxdMBao8wkEE9DElWMnKWojY8qz0WlV8DoK06Yb0S605N_3I'
  },
  {
    id: 'yoga-mobility',
    category: 'mind',
    title: 'Yoga ve Mobilite',
    badge: 'DENGE',
    desc: 'Esneklik, mobilite ve zihinsel odaklanma ile vücudunuzun toparlanma sürecini hızlandırın ve sakatlık riskini minimize edin.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcuh_U1jrAP3-Qe-vvHQyzqliTEoMLlQnBSj0EydBKtPyeZPBYLexrlBftoJfhMkO6S_WeqirWvEehsHBN3zxOFqkrOIK7ycyvSdjX2XEQFib_d6T8HiDFcVPQQPtMjFrWVxIXY_MD94B8KV_GtKkGJkYBbsYKwqs-013dxhzC5HdAhx6QOiCzqRCPbw8vgQAponKDARDZIHu8EyvuH9cgdzTERf3WPGJpn3jmgHQw-AauX-5C8ssw8cWlGP4Da9lePpCF-wiHlL4'
  },
  {
    id: 'boxing-elite',
    category: 'combat',
    title: 'Elit Boks',
    badge: 'MUHAREBE',
    desc: 'Yüksek yoğunluklu kardiyo ve teknik boks eğitimi. Reflekslerinizi ve çevikliğinizi profesyonel ring standartlarına taşıyın.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4a8mvHVmEJoj8Osv4lKT3F1-M8BSbPtKCF5JOwKVgELo4p_yTXaBeLzkEBalKUWYgoiSsl-tUiGDYP3QS3QWvUAsLSkpBP6ynw5EF7uV2JtGqiQs4P39T7AaVQATM4-FEZoemvZzOJtCTU91OKgJb6_fhydFiAFZFZUfE5V9ovTBDMcjtofz3lS1KE2hWcSmUXJH7EIYOqsDCgV4Z4MT-srbsfORASoK7B2lH6xXJVAE9wYq0BqSGyPQ-dfENGFR1NpMCkEubj4w'
  },
  {
    id: 'reform-pilates',
    category: 'mind',
    title: 'Aletli Pilates',
    badge: 'MERKEZ BÖLGE',
    desc: 'Merkez bölge kuvveti ve postür düzeltme odaklı, makine destekli ileri seviye pilates deneyimi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH-FLJFMirKGuMhFk07l4o8K4aD6xO-i8qdTr9igejAQK30CKhWFwjiobR5rerVltdYPHH8f1IirP7yjPSRR_fJ2ZuBBWKnt0N7q0owWyGR10k8-yMhsBagBDci5Z6idy25diOy7SWDzBm0MBfrxhf7VEDojKrUeKkUZ8DElW-PPI9XWQdEv4gru8so9oCPjiwclsdm87qxn2sAd3xvvNNNbwk2mFDajxD-zpftC7jXg1NZphel_iU--mNvwYksr-_A89TqX4-wM8'
  },
  {
    id: 'personal-training',
    category: 'strength',
    title: 'Özel Antrenman',
    badge: 'PREMİUM',
    desc: 'Seçkin sonuçlar talep edenler için hassas şekilde tasarlanmış performans koçluğu.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWc5j6VvDL9P32A9FRI-44kjja1MxoVgG2vDkdWJxdAzNM2V9nGPwy1By4YrPmDK6K43TAxOqlnCLvy_bSGxAg8sFc-unt4JTie3LDccPMU3K_-gMLdInSUIW3MSiQSMIJlQYMVuE6i57PgQj19lKhsw9oH3kmK8o8RvoovB3bKcrLaoJ--jj9BxUMuRYQhWiNAokeQY6iVWGQnO0k8yypmYX1B11Nqazl7IUHqwYTDrCklbTI7olXyIG1CYjIAI0lXs7c9icNC88'
  },
  {
    id: 'hiit-cardio',
    category: 'cardio',
    title: 'HIIT ve Kardiyo',
    badge: 'HIZ',
    desc: 'Metabolik hızınızı ateşleyen, yüksek yoğunluklu interval antrenmanları ile yağ yakımını maksimuma çıkarın.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoihn_yHTq7HmibUjX9WgqoCz217GZSyfWuzGXqa2aw1inZiUjT_OpnS5wJX1YF-_G52bNqfe_GtAYBRjbCBm2rzEburTeBW8cSqYYmK4yD6M90VYIy-nDMafH3yzT-IqlcA5IHP6veS4yBR4JCBtBeS2xk66W1P5CN4N821tTcyygvjH-MgeIf_6M2PM6oQmQbogaNR9fYa9Q3khvCxLDToI2YvwGK5lDYbTqOlDs7pIoB0k-W4VAUzTcjRSovTTr4iPkNqAns20'
  }
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const filteredServices = activeFilter === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(item => item.category === activeFilter);

  return (
    <div className="main-content">
      <section className="story-section">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Hizmetlerimiz</h1>
          <p className="about-hero-desc">
            Performansınızı zirveye taşıyacak, bilimsel temelli ve atletik odaklı eğitim programlarımızla tanışın.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 py-4 sticky top-16 bg-background/80 backdrop-blur-sm z-40 my-stack-md">
          <button 
            className={activeFilter === 'all' ? 'filter-btn bg-primary-container text-on-primary-container' : 'filter-btn border border-outline-variant text-on-surface-variant'} 
            onClick={() => setActiveFilter('all')}
          >
            Hepsi
          </button>
          <button 
            className={activeFilter === 'strength' ? 'filter-btn bg-primary-container text-on-primary-container' : 'filter-btn border border-outline-variant text-on-surface-variant'} 
            onClick={() => setActiveFilter('strength')}
          >
            Güç & Kondisyon
          </button>
          <button 
            className={activeFilter === 'mind' ? 'filter-btn bg-primary-container text-on-primary-container' : 'filter-btn border border-outline-variant text-on-surface-variant'} 
            onClick={() => setActiveFilter('mind')}
          >
            Zihin & Esneklik
          </button>
          <button 
            className={activeFilter === 'cardio' ? 'filter-btn bg-primary-container text-on-primary-container' : 'filter-btn border border-outline-variant text-on-surface-variant'} 
            onClick={() => setActiveFilter('cardio')}
          >
            Kardiyo & Hız
          </button>
          <button 
            className={activeFilter === 'combat' ? 'filter-btn bg-primary-container text-on-primary-container' : 'filter-btn border border-outline-variant text-on-surface-variant'} 
            onClick={() => setActiveFilter('combat')}
          >
            Dövüş Sanatları
          </button>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="bento-grid">
          {filteredServices.map(service => (
            <div className="service-card group glass-card rounded-xl overflow-hidden" key={service.id}>
              <div className="h-64 overflow-hidden relative">
                <div 
                  className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-sm text-label-sm">
                  {service.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{service.title}</h3>
                <p className="text-on-surface-variant mb-6 h-12 overflow-hidden">{service.desc}</p>
                <button 
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="w-full py-4 border-2 border-primary-container text-primary font-bold rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-all flex items-center justify-center gap-2"
                >
                  Detayları Gör
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrapper max-w-5xl">
        <div className="cta-banner">
          <div className="cta-banner-text">
            <h2 className="cta-banner-title">Hangi Hizmet Size Uygun?</h2>
            <p className="cta-banner-subtitle font-normal">Ücretsiz bir deneme seansı için hemen randevu alın.</p>
          </div>
          <button 
            onClick={() => navigate('/booking')}
            className="cta-banner-btn"
          >
            Hemen Başla
          </button>
        </div>
      </section>
    </div>
  );
}
