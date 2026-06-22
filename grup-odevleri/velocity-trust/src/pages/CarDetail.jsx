import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vehicles, activeBooking, setActiveBooking, getRentalDays, searchParams, setInsurance } = useApp();

  const [car, setCar] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const selectedCar = vehicles.find(v => v.id === parseInt(id));
    if (selectedCar) {
      setCar(selectedCar);
      setActiveBooking(prev => ({
        ...prev,
        car: selectedCar
      }));
    }
  }, [id, vehicles, setActiveBooking]);

  if (!car) {
    return (
      <div className="no-car-wrapper">
        <span className="material-symbols-outlined no-car-icon">warning</span>
        <h4 className="no-car-title">Araç Bulunamadı</h4>
        <p className="no-car-desc">İstediğiniz araç sistemde bulunamadı veya kaldırıldı.</p>
        <Link to="/cars" className="no-car-btn">Filoya Geri Dön</Link>
      </div>
    );
  }

  const rentalDays = getRentalDays(searchParams.pickupDate, searchParams.returnDate);
  const baseRentalPrice = car.pricePerDay * rentalDays;
  const insuranceDayRate = activeBooking.insurance === 'full' ? 400 : 150;
  const totalInsurancePrice = insuranceDayRate * rentalDays;
  const totalPrice = baseRentalPrice + totalInsurancePrice;

  const handleContinue = () => {
    navigate('/checkout');
  };

  return (
    <div className="car-detail-page">
      <nav className="breadcrumbs">
        <Link to="/" className="breadcrumb-link">Ana Sayfa</Link>
        <span className="material-symbols-outlined breadcrumb-sep">chevron_right</span>
        <Link to="/cars" className="breadcrumb-link">Araçlar</Link>
        <span className="material-symbols-outlined breadcrumb-sep">chevron_right</span>
        <span className="breadcrumb-current">{car.name}</span>
      </nav>

      <div className="detail-layout">
        <div className="detail-main">
          <div className="detail-showcase">
            <div className="showcase-badges">
              <span className="badge-eco">Çevre Dostu</span>
              <span className="badge-status">Mevcut</span>
            </div>
            <div className="showcase-fav">
              <button onClick={() => setIsFavorite(!isFavorite)} className={isFavorite ? 'fav-btn active' : 'fav-btn'}>
                <span className="material-symbols-outlined">favorite</span>
              </button>
            </div>
            <img src={car.image} alt={car.name} className="showcase-img" />
          </div>

          <div className="specs-bento-grid">
            <div className="spec-card">
              <span className="material-symbols-outlined spec-card-icon">ev_station</span>
              <span className="spec-card-label">Menzil / Depo</span>
              <span className="spec-card-value">{car.range}</span>
            </div>
            <div className="spec-card">
              <span className="material-symbols-outlined spec-card-icon">groups</span>
              <span className="spec-card-label">Kapasite</span>
              <span className="spec-card-value">{car.seats} Yetişkin</span>
            </div>
            <div className="spec-card">
              <span className="material-symbols-outlined spec-card-icon">luggage</span>
              <span className="spec-card-label">Bagaj Hacmi</span>
              <span className="spec-card-value">{car.bags} Valiz</span>
            </div>
            <div className="spec-card">
              <span className="material-symbols-outlined spec-card-icon">bolt</span>
              <span className="spec-card-label">0-100 km/s</span>
              <span className="spec-card-value">{car.acceleration}</span>
            </div>
          </div>

          <section className="detail-description-card">
            <h2 className="detail-card-title">Araç Açıklaması</h2>
            <p className="detail-card-text">{car.desc}</p>
            
            <h3 className="detail-sub-title">Öne Çıkan Özellikler</h3>
            <div className="features-grid">
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">Otopilot ve Sürüş Asistanı</span>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">15 inç Dokunmatik Kontrol Paneli</span>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">Premium Ses ve Navigasyon Sistemi</span>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">HEPA Hava Temizleme Sistemi</span>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">Isıtmalı Ön ve Arka Koltuklar</span>
              </div>
              <div className="feature-item">
                <span className="material-symbols-outlined check-icon">check_circle</span>
                <span className="feature-text">Kablosuz Akıllı Telefon Şarj İstasyonu</span>
              </div>
            </div>
          </section>

          <section className="detail-terms-card">
            <h2 className="detail-card-title">Kiralama Koşulları</h2>
            <div className="terms-list">
              <div className="term-item">
                <div className="term-icon-wrapper">
                  <span className="material-symbols-outlined term-icon">verified_user</span>
                </div>
                <div>
                  <h4 className="term-title">Sürücü Yaşı ve Ehliyet</h4>
                  <p className="term-desc">En az 25 yaşında olunmalı ve en az 2 yıllık geçerli sürücü belgesine sahip olunmalıdır.</p>
                </div>
              </div>
              <div className="term-item">
                <div className="term-icon-wrapper">
                  <span className="material-symbols-outlined term-icon">speed</span>
                </div>
                <div>
                  <h4 className="term-title">Kilometre Sınırı</h4>
                  <p className="term-desc">3 gün ve üzeri rezervasyonlarda sınırsız kilometre dahildir. Aksi takdirde günlük 250 km limiti uygulanır.</p>
                </div>
              </div>
              <div className="term-item">
                <div className="term-icon-wrapper">
                  <span className="material-symbols-outlined term-icon">event_busy</span>
                </div>
                <div>
                  <h4 className="term-title">İptal Politikası</h4>
                  <p className="term-desc">Teslim alma saatinden 48 saat öncesine kadar ücretsiz iptal hakkı mevcuttur. Geç iptaller ücrete tabidir.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="sticky-pricing-card">
            <div className="pricing-card-header">
              <div>
                <span className="price-value">{car.pricePerDay.toLocaleString('tr-TR')} TL</span>
                <span className="price-label">/ günlük kiralama</span>
              </div>
              <div className="price-discount-tag">
                <span className="discount-old">{(car.pricePerDay * 1.15).toFixed(0)} TL</span>
                <span className="discount-badge">%15 İndirim</span>
              </div>
            </div>

            <div className="pricing-card-body">
              <div className="location-summary">
                <label className="location-summary-label">Alış ve İade Noktası</label>
                <div className="location-summary-val">
                  <span>{searchParams.pickupLocation}</span>
                  <span className="material-symbols-outlined text-muted">location_on</span>
                </div>
              </div>

              <div className="date-summary-grid">
                <div className="date-summary-cell">
                  <label className="location-summary-label">Alış Tarihi</label>
                  <span className="date-summary-val">{searchParams.pickupDate}</span>
                </div>
                <div className="date-summary-cell">
                  <label className="location-summary-label">Saat</label>
                  <span className="date-summary-val">{searchParams.pickupTime}</span>
                </div>
              </div>

              <hr className="pricing-divider" />

              <div className="insurance-section">
                <h3 className="insurance-title">Güvence Seçenekleri</h3>
                <div className="insurance-options">
                  <label className={activeBooking.insurance === 'full' ? 'insurance-card active' : 'insurance-card'} onClick={() => setInsurance('full')}>
                    <div className="insurance-option-radio">
                      <input
                        type="radio"
                        name="insurance"
                        checked={activeBooking.insurance === 'full'}
                        onChange={() => setInsurance('full')}
                        className="radio-input"
                      />
                      <div>
                        <p className="insurance-name">Tam Güvence Paketi</p>
                        <p className="insurance-desc">Muafiyetsiz hasar, lastik-cam-far güvencesi, yol yardım</p>
                      </div>
                    </div>
                    <span className="insurance-price">+400 TL/gün</span>
                  </label>

                  <label className={activeBooking.insurance === 'standard' ? 'insurance-card active' : 'insurance-card'} onClick={() => setInsurance('standard')}>
                    <div className="insurance-option-radio">
                      <input
                        type="radio"
                        name="insurance"
                        checked={activeBooking.insurance === 'standard'}
                        onChange={() => setInsurance('standard')}
                        className="radio-input"
                      />
                      <div>
                        <p className="insurance-name">Standart Koruma Paketi</p>
                        <p className="insurance-desc">10.000 TL muafiyetli kaza güvencesi</p>
                      </div>
                    </div>
                    <span className="insurance-price">+150 TL/gün</span>
                  </label>
                </div>
              </div>

              <div className="pricing-summary-card">
                <div className="summary-row">
                  <span>{rentalDays} Günlük Kiralama</span>
                  <span>{baseRentalPrice.toLocaleString('tr-TR')} TL</span>
                </div>
                <div className="summary-row">
                  <span>Güvence Paketi</span>
                  <span>{totalInsurancePrice.toLocaleString('tr-TR')} TL</span>
                </div>
                <div className="summary-row total-row">
                  <span>Toplam Fiyat</span>
                  <span className="text-primary">{totalPrice.toLocaleString('tr-TR')} TL</span>
                </div>
              </div>

              <button onClick={handleContinue} className="pricing-submit-btn">
                <span>Rezervasyona Devam Et</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <p className="pricing-helper-text">Gizli masraf yoktur. Vergiler ve yasal ücretler fiyata dahildir.</p>
            </div>
          </div>

          <div className="trust-indicators">
            <div className="trust-item">
              <span className="material-symbols-outlined trust-icon">lock</span>
              <span className="trust-text">Güvenli Ödeme</span>
            </div>
            <div className="trust-item">
              <span className="material-symbols-outlined trust-icon">support_agent</span>
              <span className="trust-text">7/24 Canlı Destek</span>
            </div>
            <div className="trust-item">
              <span className="material-symbols-outlined trust-icon">stars</span>
              <span className="trust-text">En Beğenilen Araç</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CarDetail;
