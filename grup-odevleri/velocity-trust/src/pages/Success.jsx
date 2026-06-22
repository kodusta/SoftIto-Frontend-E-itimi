import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { activeBooking, searchParams, getRentalDays } = useApp();
  const canvasRef = useRef(null);

  const referenceCode = location.state?.reference || 'VLR-882910';
  const car = activeBooking.car;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let pieces = [];
    const numberOfPieces = 150;
    const colors = ['#bc001f', '#10B981', '#565e74', '#ffffff'];

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    class Piece {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.rotation = Math.random() * 360;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.diameter = Math.random() * 10 + 5;
        this.speed = Math.random() * 3 + 2;
        this.vx = Math.random() * 2 - 1;
      }

      update() {
        this.y += this.speed;
        this.x += this.vx;
        this.rotation += this.speed;
        if (this.y > canvas.height) {
          this.y = -20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.diameter / 2, -this.diameter / 2, this.diameter, this.diameter);
        ctx.restore();
      }
    }

    for (let i = 0; i < numberOfPieces; i++) {
      pieces.push(new Piece());
    }

    let animationId;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener('resize', updateSize);

    const fadeTimeout = setTimeout(() => {
      canvas.style.transition = 'opacity 1s ease';
      canvas.style.opacity = '0';
      setTimeout(() => {
        canvas.style.display = 'none';
      }, 1000);
    }, 4000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateSize);
      clearTimeout(fadeTimeout);
    };
  }, []);

  if (!car) {
    return (
      <div className="no-car-wrapper">
        <span className="material-symbols-outlined no-car-icon">check_circle</span>
        <h4 className="no-car-title">Rezervasyon Başarılı</h4>
        <p className="no-car-desc">Rezervasyonunuz başarıyla onaylanmıştır.</p>
        <Link to="/my-bookings" className="no-car-btn">Rezervasyonlarımı Görüntüle</Link>
      </div>
    );
  }

  const rentalDays = getRentalDays(searchParams.pickupDate, searchParams.returnDate);
  const baseRentalPrice = car.pricePerDay * rentalDays;
  const insurancePrice = activeBooking.insurance === 'full' ? 400 * rentalDays : 150 * rentalDays;
  
  let servicesPrice = 0;
  if (activeBooking.services.gps) servicesPrice += 200 * rentalDays;
  if (activeBooking.services.babySeat) servicesPrice += 250 * rentalDays;
  if (activeBooking.services.wifi) servicesPrice += 150 * rentalDays;

  const totalPrice = baseRentalPrice + insurancePrice + servicesPrice;

  return (
    <div className="success-page">
      <canvas ref={canvasRef} className="confetti-canvas"></canvas>

      <div className="success-header">
        <div className="success-badge-wrapper">
          <div className="success-badge-pulse"></div>
          <span className="material-symbols-outlined success-check-icon">check_circle</span>
        </div>
        <h1 className="success-title">Rezervasyon Onaylandı</h1>
        <p className="success-subtitle">
          Yola çıkmaya hazır olun! Rezervasyonunuz onaylandı ve aracınız seçilen teslim noktasında hazır olacak.
        </p>
      </div>

      <div className="success-layout">
        <div className="success-card-main">
          <div className="success-car-showcase">
            <img src={car.image} alt={car.name} className="success-car-img" />
            <div className="success-class-badge">Premium Sınıf</div>
          </div>

          <div className="success-card-details">
            <div className="details-header-row">
              <div>
                <h2 className="details-car-name">{car.name}</h2>
                <p className="details-car-desc">{car.transmission} • {car.fuel} • {car.seats} Koltuk</p>
              </div>
              <div className="details-price-row">
                <span className="price-title">Toplam Ödenen</span>
                <span className="price-amount">{totalPrice.toLocaleString('tr-TR')} TL</span>
              </div>
            </div>

            <div className="details-timeline">
              <div className="timeline-item">
                <div className="timeline-icon-box">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="timeline-title">Alış &amp; İade Noktası</p>
                  <p className="timeline-value">{searchParams.pickupLocation}</p>
                </div>
              </div>

              <div className="timeline-item mt-6">
                <div className="timeline-icon-box">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <p className="timeline-title">Kiralama Süresi</p>
                  <p className="timeline-value">
                    {searchParams.pickupDate} saat {searchParams.pickupTime} — {searchParams.returnDate} saat {searchParams.returnTime} ({rentalDays} Gün)
                  </p>
                </div>
              </div>
            </div>

            <div className="action-buttons-row">
              <button className="btn-action">
                <span className="material-symbols-outlined">download</span>
                <span>Faturayı İndir</span>
              </button>
              <button className="btn-action">
                <span className="material-symbols-outlined">calendar_add_on</span>
                <span>Takvime Ekle</span>
              </button>
            </div>
          </div>
        </div>

        <aside className="success-sidebar">
          <div className="sidebar-info-card">
            <h3 className="sidebar-info-title">Rezervasyon Detayları</h3>
            <div className="info-rows">
              <div className="info-row">
                <span className="info-row-label">Rezervasyon Durumu</span>
                <span className="info-status-badge">Onaylandı</span>
              </div>
              <div className="info-row">
                <span className="info-row-label">Referans Kodu</span>
                <span className="info-reference-id">{referenceCode}</span>
              </div>
              <div className="info-row">
                <span className="info-row-label">Ödeme Yöntemi</span>
                <span className="info-payment-val">Kart •••• 4412</span>
              </div>
            </div>
          </div>

          <div className="sidebar-info-card overflow-hidden">
            <div className="map-placeholder">
              <div className="map-img-bg"></div>
              <div className="map-marker-overlay">
                <div className="map-marker-box">
                  <span className="material-symbols-outlined map-marker">location_on</span>
                </div>
              </div>
            </div>
            <div className="map-instructions-body">
              <h4 className="instructions-title">Teslim Alma Talimatları</h4>
              <p className="instructions-text">
                Terminalden çıktıktan sonra 'Araç Kiralama Merkezi' yönlendirmelerini takip ederek ücretsiz havalimanı servisine binin. Ofisimiz B Blok, 14 numaralı peronda yer almaktadır.
              </p>
              <a href="#" className="instructions-directions-link">
                <span>Yol Tarifi Al</span>
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="success-footer-actions">
        <Link to="/" className="btn-return-home">
          <span className="material-symbols-outlined">home</span>
          <span>Ana Sayfaya Dön</span>
        </Link>
        <Link to="/contact" className="btn-contact-support">
          <span className="material-symbols-outlined">support_agent</span>
          <span>Destekle İletişime Geç</span>
        </Link>
      </div>
    </div>
  );
};

export default Success;
