import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { activeBooking, setActiveBooking, searchParams, getRentalDays, confirmBooking } = useApp();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  if (!activeBooking.car) {
    return (
      <div className="no-car-wrapper">
        <span className="material-symbols-outlined no-car-icon">directions_car</span>
        <h4 className="no-car-title">Araç Seçilmedi</h4>
        <p className="no-car-desc">Rezervasyon yapabilmek için lütfen önce bir araç seçin.</p>
        <Link to="/cars" className="no-car-btn">Araç Listesine Git</Link>
      </div>
    );
  }

  const car = activeBooking.car;
  const rentalDays = getRentalDays(searchParams.pickupDate, searchParams.returnDate);
  const baseRentalPrice = car.pricePerDay * rentalDays;
  const insurancePrice = activeBooking.insurance === 'full' ? 400 * rentalDays : 150 * rentalDays;
  
  let servicesPrice = 0;
  if (activeBooking.services.gps) servicesPrice += 200 * rentalDays;
  if (activeBooking.services.babySeat) servicesPrice += 250 * rentalDays;
  if (activeBooking.services.wifi) servicesPrice += 150 * rentalDays;

  const totalPrice = baseRentalPrice + insurancePrice + servicesPrice;

  const handleInputChange = (field, value) => {
    setActiveBooking(prev => ({
      ...prev,
      driverInfo: {
        ...prev.driverInfo,
        [field]: value
      }
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleServiceToggle = (key) => {
    setActiveBooking(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [key]: !prev.services[key]
      }
    }));
  };

  const handlePaymentChange = (field, value) => {
    setActiveBooking(prev => ({
      ...prev,
      cardInfo: {
        ...prev.cardInfo,
        [field]: value
      }
    }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep1 = () => {
    const err = {};
    const { firstName, lastName, email, phone } = activeBooking.driverInfo;
    if (!firstName) err.firstName = 'Ad alanı zorunludur.';
    if (!lastName) err.lastName = 'Soyad alanı zorunludur.';
    if (!email) err.email = 'E-posta alanı zorunludur.';
    if (!phone) err.phone = 'Telefon alanı zorunludur.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep2 = () => {
    const err = {};
    const { licenseNumber, birthDate } = activeBooking.driverInfo;
    if (!licenseNumber) err.licenseNumber = 'Ehliyet numarası zorunludur.';
    if (!birthDate) err.birthDate = 'Doğum tarihi zorunludur.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateStep4 = () => {
    const err = {};
    const { number, expiry, cvv } = activeBooking.cardInfo;
    if (!number) err.number = 'Kart numarası zorunludur.';
    if (!expiry) err.expiry = 'Son kullanma tarihi zorunludur.';
    if (!cvv) err.cvv = 'Güvenlik kodu (CVV) zorunludur.';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        const birthYear = new Date(activeBooking.driverInfo.birthDate).getFullYear();
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        
        if (age < 25) {
          navigate('/failure', { state: { reason: 'age-error' } });
        } else {
          setStep(3);
        }
      }
    } else if (step === 3) {
      setStep(4);
    } else if (step === 4) {
      if (validateStep4()) {
        const referenceCode = 'VLR-' + Math.floor(100000 + Math.random() * 900000);
        confirmBooking(referenceCode);
        navigate('/success', { state: { reference: referenceCode } });
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="checkout-page">
      <div className="stepper-container">
        <div className="stepper-inner">
          <div className="stepper-line-bg"></div>
          <div className={`stepper-line-progress step-${step}`}></div>
          
          <div className="stepper-steps">
            <div className={`step-item ${step >= 1 ? 'active' : ''}`}>
              <div className="step-circle">{step > 1 ? <span className="material-symbols-outlined">check</span> : '1'}</div>
              <span className="step-label">Kişisel</span>
            </div>
            <div className={`step-item ${step >= 2 ? 'active' : ''}`}>
              <div className="step-circle">{step > 2 ? <span className="material-symbols-outlined">check</span> : '2'}</div>
              <span className="step-label">Ehliyet</span>
            </div>
            <div className={`step-item ${step >= 3 ? 'active' : ''}`}>
              <div className="step-circle">{step > 3 ? <span className="material-symbols-outlined">check</span> : '3'}</div>
              <span className="step-label">Hizmetler</span>
            </div>
            <div className={`step-item ${step >= 4 ? 'active' : ''}`}>
              <div className="step-circle">{step > 4 ? <span className="material-symbols-outlined">check</span> : '4'}</div>
              <span className="step-label">İnceleme</span>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-layout">
        <div className="checkout-main">
          <div className="checkout-form-card">
            <form className="checkout-form">
              {step === 1 && (
                <div className="form-step">
                  <div className="step-intro">
                    <h2 className="step-title">Sürücü Bilgileri</h2>
                    <p className="step-subtitle">Lütfen direksiyon başında olacak kişinin bilgilerini girin.</p>
                  </div>
                  <div className="form-grid">
                    <div className="input-group">
                      <label className="form-label">Ad</label>
                      <input
                        type="text"
                        value={activeBooking.driverInfo.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Örn. Can"
                        className={`form-input ${errors.firstName ? 'error-border' : ''}`}
                      />
                      {errors.firstName && <p className="error-text">{errors.firstName}</p>}
                    </div>
                    <div className="input-group">
                      <label className="form-label">Soyad</label>
                      <input
                        type="text"
                        value={activeBooking.driverInfo.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Örn. Demir"
                        className={`form-input ${errors.lastName ? 'error-border' : ''}`}
                      />
                      {errors.lastName && <p className="error-text">{errors.lastName}</p>}
                    </div>
                    <div className="input-group md-col-2">
                      <label className="form-label">E-posta Adresi</label>
                      <input
                        type="email"
                        value={activeBooking.driverInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Örn. can.demir@example.com"
                        className={`form-input ${errors.email ? 'error-border' : ''}`}
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                    <div className="input-group md-col-2">
                      <label className="form-label">Telefon Numarası</label>
                      <input
                        type="tel"
                        value={activeBooking.driverInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Örn. 0555 123 45 67"
                        className={`form-input ${errors.phone ? 'error-border' : ''}`}
                      />
                      {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <div className="step-intro">
                    <h2 className="step-title">Ehliyet ve Yaş Doğrulama</h2>
                    <p className="step-subtitle">Kiralama koşullarını karşıladığınızı doğrulamak için ehliyet bilgilerinizi girin.</p>
                  </div>
                  <div className="form-grid">
                    <div className="input-group md-col-2">
                      <label className="form-label">Düzenleyen Ülke</label>
                      <select
                        value={activeBooking.driverInfo.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="form-select"
                      >
                        <option value="Türkiye">Türkiye</option>
                        <option value="Almanya">Almanya</option>
                        <option value="İngiltere">İngiltere</option>
                        <option value="Amerika">Amerika</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label className="form-label">Ehliyet Numarası</label>
                      <input
                        type="text"
                        value={activeBooking.driverInfo.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        placeholder="Örn. 123456"
                        className={`form-input ${errors.licenseNumber ? 'error-border' : ''}`}
                      />
                      {errors.licenseNumber && <p className="error-text">{errors.licenseNumber}</p>}
                    </div>
                    <div className="input-group">
                      <label className="form-label">Doğum Tarihi</label>
                      <input
                        type="date"
                        value={activeBooking.driverInfo.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className={`form-input ${errors.birthDate ? 'error-border' : ''}`}
                      />
                      {errors.birthDate && <p className="error-text">{errors.birthDate}</p>}
                    </div>
                    <div className="input-group md-col-2">
                      <div className="upload-container">
                        <span className="material-symbols-outlined upload-icon">cloud_upload</span>
                        <p className="upload-title">Ehliyet Fotoğrafı Yükle</p>
                        <p className="upload-subtitle">Sadece simülasyon amaçlıdır • JPG veya PNG (Maks 5MB)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <div className="step-intro">
                    <h2 className="step-title">Seyahatinizi Geliştirin</h2>
                    <p className="step-subtitle">Daha konforlu bir yolculuk için ek hizmetlerden yararlanabilirsiniz.</p>
                  </div>
                  <div className="services-list">
                    <label className={activeBooking.services.gps ? 'service-card active' : 'service-card'} onClick={() => handleServiceToggle('gps')}>
                      <div className="service-info">
                        <div className="service-icon-box">
                          <span className="material-symbols-outlined">satellite_alt</span>
                        </div>
                        <div>
                          <p className="service-name">GPS Navigasyon Sistemi</p>
                          <p className="service-desc">Yolları kaybolmadan en hızlı rotalarla keşfedin</p>
                        </div>
                      </div>
                      <div className="service-action">
                        <span className="service-price">200 TL / gün</span>
                        <input
                          type="checkbox"
                          checked={activeBooking.services.gps}
                          onChange={() => handleServiceToggle('gps')}
                          className="service-checkbox"
                        />
                      </div>
                    </label>

                    <label className={activeBooking.services.babySeat ? 'service-card active' : 'service-card'} onClick={() => handleServiceToggle('babySeat')}>
                      <div className="service-info">
                        <div className="service-icon-box">
                          <span className="material-symbols-outlined">child_care</span>
                        </div>
                        <div>
                          <p className="service-name">Bebek Koltuğu</p>
                          <p className="service-desc">Küçük yolcularımızın güvenliği her şeyden önce gelir</p>
                        </div>
                      </div>
                      <div className="service-action">
                        <span className="service-price">250 TL / gün</span>
                        <input
                          type="checkbox"
                          checked={activeBooking.services.babySeat}
                          onChange={() => handleServiceToggle('babySeat')}
                          className="service-checkbox"
                        />
                      </div>
                    </label>

                    <label className={activeBooking.services.wifi ? 'service-card active' : 'service-card'} onClick={() => handleServiceToggle('wifi')}>
                      <div className="service-info">
                        <div className="service-icon-box">
                          <span className="material-symbols-outlined">wifi</span>
                        </div>
                        <div>
                          <p className="service-name">Araç İçi Wi-Fi</p>
                          <p className="service-desc">5 cihaza kadar kesintisiz yüksek hızlı internet bağlantısı</p>
                        </div>
                      </div>
                      <div className="service-action">
                        <span className="service-price">150 TL / gün</span>
                        <input
                          type="checkbox"
                          checked={activeBooking.services.wifi}
                          onChange={() => handleServiceToggle('wifi')}
                          className="service-checkbox"
                        />
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-step">
                  <div className="step-intro">
                    <h2 className="step-title">Ödeme ve Onay</h2>
                    <p className="step-subtitle">Rezervasyon bilgilerinizi gözden geçirin ve kiralama işlemini onaylayın.</p>
                  </div>
                  <div className="payment-options">
                    <div className="payment-summary-block">
                      <div className="summary-row border-b">
                        <span>Araç Kiralama Bedeli ({rentalDays} gün)</span>
                        <span>{baseRentalPrice.toLocaleString('tr-TR')} TL</span>
                      </div>
                      <div className="summary-row border-b">
                        <span>Güvence Paketi Bedeli</span>
                        <span>{insurancePrice.toLocaleString('tr-TR')} TL</span>
                      </div>
                      <div className="summary-row border-b">
                        <span>Ek Hizmetler Bedeli</span>
                        <span>{servicesPrice.toLocaleString('tr-TR')} TL</span>
                      </div>
                      <div className="summary-row total-row">
                        <span>Toplam</span>
                        <span className="text-primary">{totalPrice.toLocaleString('tr-TR')} TL</span>
                      </div>
                    </div>

                    <div className="card-payment-form">
                      <h3 className="payment-title">Kredi / Banka Kartı</h3>
                      <div className="form-grid">
                        <div className="input-group md-col-2">
                          <label className="form-label">Kart Numarası</label>
                          <input
                            type="text"
                            value={activeBooking.cardInfo.number}
                            onChange={(e) => handlePaymentChange('number', e.target.value)}
                            placeholder="XXXX XXXX XXXX XXXX"
                            maxLength="19"
                            className={`form-input ${errors.number ? 'error-border' : ''}`}
                          />
                          {errors.number && <p className="error-text">{errors.number}</p>}
                        </div>
                        <div className="input-group">
                          <label className="form-label">Son Kullanma Tarihi</label>
                          <input
                            type="text"
                            value={activeBooking.cardInfo.expiry}
                            onChange={(e) => handlePaymentChange('expiry', e.target.value)}
                            placeholder="AA / YY"
                            maxLength="5"
                            className={`form-input ${errors.expiry ? 'error-border' : ''}`}
                          />
                          {errors.expiry && <p className="error-text">{errors.expiry}</p>}
                        </div>
                        <div className="input-group">
                          <label className="form-label">CVC / CVV</label>
                          <input
                            type="password"
                            value={activeBooking.cardInfo.cvv}
                            onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                            placeholder="***"
                            maxLength="3"
                            className={`form-input ${errors.cvv ? 'error-border' : ''}`}
                          />
                          {errors.cvv && <p className="error-text">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="form-navigation">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`btn-prev ${step === 1 ? 'invisible' : ''}`}
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                  <span>Geri</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-next"
                >
                  <span>{step === 4 ? 'Rezervasyonu Tamamla' : 'Devam Et'}</span>
                  <span className="material-symbols-outlined">
                    {step === 4 ? 'rocket_launch' : 'arrow_forward'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <aside className="checkout-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-car-preview">
              <img src={car.image} alt={car.name} className="sidebar-car-img" />
              <div className="sidebar-car-badge">
                {car.pricePerDay.toLocaleString('tr-TR')} TL / gün
              </div>
            </div>
            <div className="sidebar-car-details">
              <h3 className="sidebar-car-title">{car.name}</h3>
              <p className="sidebar-car-desc">{car.collection} • {car.transmission} • {car.fuel}</p>
            </div>
          </div>

          <div className="sidebar-card">
            <h4 className="sidebar-title">Kiralama Özetiniz</h4>
            <div className="timeline-container">
              <div className="timeline-indicators">
                <div className="indicator-dot green"></div>
                <div className="indicator-line"></div>
                <div className="indicator-dot red"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-item">
                  <p className="timeline-label">Alış Noktası &amp; Tarihi</p>
                  <p className="timeline-value">{searchParams.pickupLocation}</p>
                  <p className="timeline-date">{searchParams.pickupDate} saat {searchParams.pickupTime}</p>
                </div>
                <div className="timeline-item mt-6">
                  <p className="timeline-label">İade Noktası &amp; Tarihi</p>
                  <p className="timeline-value">{searchParams.pickupLocation}</p>
                  <p className="timeline-date">{searchParams.returnDate} saat {searchParams.returnTime}</p>
                </div>
              </div>
            </div>
            <div className="sidebar-banner">
              <span className="material-symbols-outlined text-green">check_circle</span>
              <p className="banner-text">Teslim almaya 48 saat kalana kadar ücretsiz iptal edilebilir.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Checkout;
