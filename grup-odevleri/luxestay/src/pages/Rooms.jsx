import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ROOMS_DATA = [
  {
    id: 'presidential-ocean',
    title: 'Presidential Okyanus Süiti',
    rating: 4.9,
    price: 450,
    size: 85,
    guests: 2,
    bed: '1 King Yatak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy',
    badge: 'Popüler Seçim',
    amenities: ['wifi', 'pool', 'tv']
  },
  {
    id: 'executive-urban',
    title: 'Executive Şehir King',
    rating: 4.7,
    price: 285,
    size: 42,
    guests: 1,
    bed: '1 King Yatak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfAHFWYX-yftYs_-Qyzn0w0SU0wZFSZKmPRQzx3TGntEwfqR6pgQare0AKbrH2BeECpFiNlpUahGolSb73aORfS6FAwsAX0lH8hesJWohp7XHlHZWV0pgORYYQN9hCY1gQlka0TRI-xdEBXvunaH21nkjCPKZQyx05A7dbx5BmwAh7od8yhgWZa0E7P_EsMng8GGIXpp9KEt7g9l7XojkLJS2MqSAIyhxE3-PGtkKzE47JxtRsVjIxrZUE3akDen4Nguz3lAbxB-hw',
    badge: 'İş ve Lüks',
    amenities: ['wifi', 'tv', 'fitness_center']
  },
  {
    id: 'grand-sky-villa',
    title: 'The Grand Sky Villa',
    rating: 5.0,
    price: 1250,
    originalPrice: 1500,
    size: 150,
    guests: 6,
    bed: '3 King Yatak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPc952_NjEW4iu1COpcQnK5GicWFyXcj9wRazXq1o0FnW0e0UprNo6t_XjRF8FV82nrzx2GocVMeA3XDZLmKc2GiKngyC_nZA9Ehiu0kG99y9r4tK88nQfkvq6F1kQpzIiBNmJI8oxCoicysY7Pvsu5PB907W7Sw8JPxpu0vXVTVqkyBTl0z8dL1BVGoxYA7qfHbcwbAhELrHWv167_faMDQ38fv6VCSThSkxLWMhx9i3Y9nx07SUXZz8c0ejAB4a46w_9X_bWSPrI',
    badge: 'Sınırlı Fırsat',
    isWide: true,
    amenities: ['wifi', 'pool', 'restaurant', 'fitness_center']
  },
  {
    id: 'starlight-loft',
    title: 'Starlight Loft Süiti',
    rating: 4.8,
    price: 320,
    size: 55,
    guests: 2,
    bed: '1 Queen Yatak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArrgVllXfhWDFEagJRcBZ9KvLaJiO3bsv1tAsmThOlxH6v2Dx2i4dKP6fy8H1CM_Ck0urWkDMlv2IAXVY9Bpb3KkPXHyxEA-TM9NWvq5RPin0be0qLUxu5Rz4EDqTyZgHI_6v_5urrsiv3PARsuJhYSK4Pocm3rHxxtjYOAhkyFhZuO4R0ajNrj_JIhWo2zxicIEOpWWrQi21AuI1izOPdOlUiKR94tCryN0XkQITLQnp9Lr4-LBAw2QwPmtTGwH_SgmJhr8id3YVi',
    amenities: ['wifi', 'tv']
  },
  {
    id: 'mediterranean-family',
    title: 'Akdeniz Aile Süiti',
    rating: 4.6,
    price: 510,
    size: 72,
    guests: 4,
    bed: '2 Queen Yatak',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbB8-Oq2CAhwRZIwuFFbZqo_AyxXs4oUDkVfv_Ph7lOkssZYsWBPEEQrSj3zx7Vcl_gmQF3E1wCe0B8xmRCQL-4ujiUManBC8U1inU-p-ogsr8mHBm2MPO0m1p3gPvOZQXFX3krqFoZ1CcNND5_p4eBgnp4h925ernygAxwr3Z_x9Ln98QdJl5XJGH8KUDsLrnlqnxU8041oS2VitmiRfsnFGezVsjliK7LhkvNc-xOUfm2xt9Uuq5JXBk36cDXdfROpVvHZiRf3Qi',
    amenities: ['wifi', 'pool', 'restaurant']
  }
];

export default function Rooms() {
  const navigate = useNavigate();
  const [maxPrice, setMaxPrice] = useState(1500);
  const [ratings, setRatings] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('price-asc');

  const handleRatingChange = (val) => {
    if (ratings.includes(val)) {
      setRatings(ratings.filter(r => r !== val));
    } else {
      setRatings([...ratings, val]);
    }
  };

  const handleAmenityChange = (val) => {
    if (selectedAmenities.includes(val)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== val));
    } else {
      setSelectedAmenities([...selectedAmenities, val]);
    }
  };

  const clearAllFilters = () => {
    setMaxPrice(1500);
    setRatings([]);
    setSelectedAmenities([]);
  };

  const filteredRooms = ROOMS_DATA.filter(room => {
    if (room.price > maxPrice) return false;
    
    if (ratings.length > 0) {
      const match = ratings.some(r => room.rating >= r);
      if (!match) return false;
    }

    if (selectedAmenities.length > 0) {
      const match = selectedAmenities.every(a => room.amenities.includes(a));
      if (!match) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating-desc') return b.rating - a.rating;
    return 0;
  });

  const handleSelectRoom = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <main className="rooms-main">
      <div className="rooms-header">
        <h2 className="font-headline-xl text-headline-xl text-midnight-navy mb-2">Oda Kategorilerimizi Keşfedin</h2>
        <p className="font-body-lg text-body-lg text-slate-gray max-w-2xl">
          Özenle seçilmiş suite ve odalarımızda eşsiz konfor ve sofistike tasarımın tadını çıkarın.
        </p>
      </div>

      <div className="rooms-grid-layout">
        <aside className="filters-sidebar">
          <div className="filter-card">
            <div className="filter-title-row">
              <h3 className="filter-heading">Filtreler</h3>
              <button onClick={clearAllFilters} className="filter-clear-btn">Tümünü Temizle</button>
            </div>

            <div className="filter-group">
              <label className="filter-label">Fiyat Aralığı (Gecelik)</label>
              <input 
                type="range" 
                min="100" 
                max="1500" 
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="range-slider"
              />
              <div className="range-labels">
                <span>$100</span>
                <span>En Fazla: ${maxPrice}</span>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Yıldız Derecesi</label>
              <div className="checkbox-list">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={ratings.includes(5)}
                    onChange={() => handleRatingChange(5)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-stars">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </span>
                  <span className="checkbox-text">5 Yıldız</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={ratings.includes(4.6)}
                    onChange={() => handleRatingChange(4.6)}
                    className="checkbox-input"
                  />
                  <span className="checkbox-stars">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </span>
                  <span className="checkbox-text">4.6 ve üzeri</span>
                </label>
              </div>
            </div>

            <div>
              <label className="filter-label">Olanaklar</label>
              <div className="checkbox-list">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedAmenities.includes('wifi')}
                    onChange={() => handleAmenityChange('wifi')}
                    className="checkbox-input"
                  />
                  <span className="material-symbols-outlined checkbox-icon">wifi</span>
                  <span className="checkbox-text">Ücretsiz Wi-Fi</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedAmenities.includes('pool')}
                    onChange={() => handleAmenityChange('pool')}
                    className="checkbox-input"
                  />
                  <span className="material-symbols-outlined checkbox-icon">pool</span>
                  <span className="checkbox-text">Özel Havuz</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedAmenities.includes('restaurant')}
                    onChange={() => handleAmenityChange('restaurant')}
                    className="checkbox-input"
                  />
                  <span className="material-symbols-outlined checkbox-icon">restaurant</span>
                  <span className="checkbox-text">Kahvaltı Dahil</span>
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={selectedAmenities.includes('fitness_center')}
                    onChange={() => handleAmenityChange('fitness_center')}
                    className="checkbox-input"
                  />
                  <span className="material-symbols-outlined checkbox-icon">fitness_center</span>
                  <span className="checkbox-text">Spor Salonu</span>
                </label>
              </div>
            </div>
          </div>

          <div className="ad-card">
            <div className="relative z-10">
              <h4 className="ad-title">Üyelere Özel</h4>
              <p className="ad-desc">LuxeRewards programına şimdi katılın ve seçili suitlerde anında %15 indirim kazanın.</p>
              <button onClick={() => navigate('/about')} className="ad-btn">Hemen Katıl</button>
            </div>
          </div>
        </aside>

        <div className="listings-pane">
          <div className="sort-bar">
            <span className="sort-count">Toplam <span className="font-bold text-midnight-navy">{filteredRooms.length}</span> seçkin sonuç listeleniyor</span>
            <div className="sort-label-row">
              <span className="font-label-md text-slate-gray">Sırala:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
                <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
                <option value="rating-desc">Puan: En Yüksek</option>
              </select>
            </div>
          </div>

          <div className="rooms-list-grid">
            {filteredRooms.map((room) => {
              if (room.isWide) {
                return (
                  <article key={room.id} className="room-card-wide">
                    <div className="room-wide-img">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.image} alt={room.title} />
                      {room.badge && (
                        <div className="room-badge">{room.badge}</div>
                      )}
                    </div>
                    <div className="room-wide-content">
                      <div>
                        <div className="room-wide-badge-row">
                          <div>
                            <h3 className="font-headline-lg text-headline-lg text-midnight-navy group-hover:text-ocean-blue transition-colors">{room.title}</h3>
                            <p className="text-ocean-blue font-label-md">Seçkin Çatı Katı</p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="room-stars mb-1">
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <span className="text-body-sm text-slate-gray">{room.rating} Puan</span>
                          </div>
                        </div>
                        <p className="text-body-md text-on-surface-variant mb-6 leading-relaxed">Sahil hattının 360 derecelik manzarasına hakim, özel uşak hizmeti ve şef mutfağı barındıran en prestijli konaklama alanımız.</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                          <span className="flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-midnight-navy text-body-sm">
                            <span className="material-symbols-outlined text-[18px]">pool</span> Havuz
                          </span>
                          <span className="flex items-center gap-1 px-3 py-1 bg-surface-container rounded-full text-midnight-navy text-body-sm">
                            <span className="material-symbols-outlined text-[18px]">local_bar</span> Bar
                          </span>
                        </div>
                      </div>
                      <div className="room-wide-price-row">
                        <div className="flex items-baseline gap-2">
                          <span className="font-price-tag text-[32px] text-midnight-navy">${room.price}</span>
                          <span className="text-slate-gray">/ gece</span>
                          {room.originalPrice && (
                            <span className="text-sunset-red font-bold line-through text-body-sm ml-2">${room.originalPrice}</span>
                          )}
                        </div>
                        <button onClick={() => handleSelectRoom(room.id)} className="room-btn-view">
                          Detaylar
                        </button>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article key={room.id} className="room-card">
                  <div className="room-img-wrapper">
                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={room.image} alt={room.title} />
                    {room.badge && (
                      <div className="room-badge">{room.badge}</div>
                    )}
                    <span className="hotel-rating-badge">
                      <span className="material-symbols-outlined text-[14px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {room.rating}
                    </span>
                  </div>
                  <div className="room-content">
                    <div className="room-header-row">
                      <h3 className="room-title">{room.title}</h3>
                    </div>
                    <div className="room-specs-row">
                      <span className="room-spec-item"><span className="material-symbols-outlined text-[18px]">square_foot</span> {room.size}m²</span>
                      <span className="room-spec-item"><span className="material-symbols-outlined text-[18px]">group</span> {room.guests} Kişi</span>
                      <span className="room-spec-item"><span className="material-symbols-outlined text-[18px]">king_bed</span> {room.bed}</span>
                    </div>
                    <div className="room-footer-row">
                      <div className="room-price-col">
                        <p className="font-label-md text-slate-gray">Gecelik</p>
                        <p className="room-price-val">${room.price}</p>
                      </div>
                      <button onClick={() => handleSelectRoom(room.id)} className="room-btn-view">
                        Detayları İncele
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="pagination-container">
            <button className="pagination-btn-nav">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="pagination-btn-active">1</button>
            <button className="pagination-btn-nav">2</button>
            <button className="pagination-btn-nav">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
