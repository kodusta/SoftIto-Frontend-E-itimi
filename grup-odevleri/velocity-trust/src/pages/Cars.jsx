import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Cars = () => {
  const navigate = useNavigate();
  const { vehicles, selectCar } = useApp();

  const [typeFilter, setTypeFilter] = useState('All');
  const [fuelFilters, setFuelFilters] = useState([]);
  const [transmissionFilter, setTransmissionFilter] = useState('All');
  const [maxPrice, setMaxPrice] = useState(7000);
  const [sortBy, setSortBy] = useState('Recommended');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleFuelToggle = (fuel) => {
    setFuelFilters(prev =>
      prev.includes(fuel) ? prev.filter(f => f !== fuel) : [...prev, fuel]
    );
  };

  const resetFilters = () => {
    setTypeFilter('All');
    setFuelFilters([]);
    setTransmissionFilter('All');
    setMaxPrice(7000);
    setSortBy('Recommended');
  };

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter(car => {
        if (typeFilter !== 'All' && car.category !== typeFilter) return false;
        if (fuelFilters.length > 0 && !fuelFilters.includes(car.fuel)) return false;
        if (transmissionFilter !== 'All' && car.transmission !== transmissionFilter) return false;
        if (car.pricePerDay > maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'PriceLow') return a.pricePerDay - b.pricePerDay;
        if (sortBy === 'PriceHigh') return b.pricePerDay - a.pricePerDay;
        if (sortBy === 'Rating') return b.rating - a.rating;
        return 0;
      });
  }, [vehicles, typeFilter, fuelFilters, transmissionFilter, maxPrice, sortBy]);

  const handleRentNow = (car) => {
    selectCar(car);
    navigate(`/car/${car.id}`);
  };

  return (
    <div className="cars-page">
      <section className="cars-hero">
        <div className="cars-hero-bg"></div>
        <div className="cars-hero-gradient"></div>
        <div className="cars-hero-content">
          <h2 className="cars-hero-title">Mükemmel Sürüşünüzü Bulun</h2>
          <p className="cars-hero-desc">İş, seyahat ve aradaki tüm anlar için premium kiralık araç filosu.</p>
        </div>
      </section>

      <div className="cars-main-layout">
        <aside className="filters-sidebar">
          <div className="filters-card">
            <div className="filters-header">
              <h3 className="filters-title">Filtreler</h3>
              <button onClick={resetFilters} className="filters-reset-btn">Sıfırla</button>
            </div>

            <div className="filters-body">
              <div className="filter-group">
                <p className="filter-group-label">Araç Tipi</p>
                <div className="filter-chips">
                  <button
                    onClick={() => setTypeFilter('All')}
                    className={typeFilter === 'All' ? 'filter-chip active' : 'filter-chip'}
                  >
                    Tümü
                  </button>
                  <button
                    onClick={() => setTypeFilter('SUV')}
                    className={typeFilter === 'SUV' ? 'filter-chip active' : 'filter-chip'}
                  >
                    SUV
                  </button>
                  <button
                    onClick={() => setTypeFilter('Sedan')}
                    className={typeFilter === 'Sedan' ? 'filter-chip active' : 'filter-chip'}
                  >
                    Sedan
                  </button>
                  <button
                    onClick={() => setTypeFilter('Luxury')}
                    className={typeFilter === 'Luxury' ? 'filter-chip active' : 'filter-chip'}
                  >
                    Lüks
                  </button>
                </div>
              </div>

              <div className="filter-group">
                <p className="filter-group-label">Yakıt Tipi</p>
                <div className="filter-checkboxes">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={fuelFilters.includes('Benzinli')}
                      onChange={() => handleFuelToggle('Benzinli')}
                      className="filter-checkbox"
                    />
                    <span className="checkbox-text">Benzinli</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={fuelFilters.includes('Elektrikli')}
                      onChange={() => handleFuelToggle('Elektrikli')}
                      className="filter-checkbox"
                    />
                    <span className="checkbox-text">Elektrikli</span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={fuelFilters.includes('Dizel')}
                      onChange={() => handleFuelToggle('Dizel')}
                      className="filter-checkbox"
                    />
                    <span className="checkbox-text">Dizel</span>
                  </label>
                </div>
              </div>

              <div className="filter-group">
                <p className="filter-group-label">Şanzıman</p>
                <div className="filter-grid-two">
                  <button
                    onClick={() => setTransmissionFilter(transmissionFilter === 'Otomatik' ? 'All' : 'Otomatik')}
                    className={transmissionFilter === 'Otomatik' ? 'filter-grid-btn active' : 'filter-grid-btn'}
                  >
                    Otomatik
                  </button>
                  <button
                    onClick={() => setTransmissionFilter(transmissionFilter === 'Manuel' ? 'All' : 'Manuel')}
                    className={transmissionFilter === 'Manuel' ? 'filter-grid-btn active' : 'filter-grid-btn'}
                  >
                    Manuel
                  </button>
                </div>
              </div>

              <div className="filter-group">
                <p className="filter-group-label">Maksimum Fiyat / Gün</p>
                <input
                  type="range"
                  min="2000"
                  max="7000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="filter-range-slider"
                />
                <div className="range-labels">
                  <span>2.000 TL</span>
                  <span className="price-bold">{maxPrice.toLocaleString('tr-TR')} TL</span>
                  <span>7.000 TL</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="results-container">
          <div className="results-toolbar">
            <p className="results-count">
              Toplam <span className="font-bold">{filteredVehicles.length}</span> araç listeleniyor
            </p>
            <div className="results-sorting">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="Recommended">Önerilen</option>
                <option value="PriceLow">Fiyat: Düşükten Yükseğe</option>
                <option value="PriceHigh">Fiyat: Yüksekten Düşüğe</option>
                <option value="Rating">Değerlendirme</option>
              </select>
            </div>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="no-results-card">
              <span className="material-symbols-outlined no-results-icon">directions_car_urgent</span>
              <h4 className="no-results-title">Araç Bulunamadı</h4>
              <p className="no-results-desc">Seçtiğiniz filtrelere uygun araç bulunmamaktadır. Lütfen filtrelerinizi sıfırlayıp tekrar deneyin.</p>
              <button onClick={resetFilters} className="no-results-btn">Filtreleri Temizle</button>
            </div>
          ) : (
            <div className="cars-grid">
              {filteredVehicles.map(car => (
                <div key={car.id} className="car-card" onClick={() => handleRentNow(car)}>
                  <div className="car-card-header">
                    <span className={`status-badge ${car.status === 'Mevcut' ? 'bg-green' : 'bg-red'}`}>
                      {car.status}
                    </span>
                    <button
                      onClick={(e) => toggleFavorite(car.id, e)}
                      className={favorites.includes(car.id) ? 'fav-btn active' : 'fav-btn'}
                    >
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>

                  <div className="car-card-img-wrapper">
                    <img src={car.image} alt={car.name} className="car-card-img" />
                  </div>

                  <div className="car-card-body">
                    <div className="car-card-info">
                      <div>
                        <h4 className="car-card-title">{car.name}</h4>
                        <p className="car-card-subtitle">{car.collection}</p>
                      </div>
                      <div className="car-card-price-section">
                        <span className="car-card-price">{car.pricePerDay.toLocaleString('tr-TR')} TL</span>
                        <p className="car-card-price-label">/ gün</p>
                      </div>
                    </div>

                    <div className="car-card-specs">
                      <div className="spec-item">
                        <span className="material-symbols-outlined spec-icon">local_gas_station</span>
                        <span className="spec-text">{car.fuel}</span>
                      </div>
                      <div className="spec-item">
                        <span className="material-symbols-outlined spec-icon">settings_input_component</span>
                        <span className="spec-text">{car.transmission}</span>
                      </div>
                      <div className="spec-item">
                        <span className="material-symbols-outlined spec-icon">group</span>
                        <span className="spec-text">{car.seats} Koltuk</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRentNow(car);
                      }}
                      className="car-card-rent-btn"
                    >
                      Hemen Kirala
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Cars;
