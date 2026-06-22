import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Success = () => {
  const navigate = useNavigate();
  const { orderResult } = useApp();

  useEffect(() => {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    const colors = ['#a63c00', '#ff6000', '#27AE60', '#0061a4', '#ffdbce'];
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '8px';
      confetti.style.height = '8px';
      confetti.style.borderRadius = '50%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.top = '-10px';
      confetti.style.opacity = '1';
      container.appendChild(confetti);

      confetti.animate([
        { transform: 'translate3d(0, 0, 0) rotate(0deg)', opacity: 1 },
        { transform: `translate3d(${(Math.random() - 0.5) * 200}px, ${window.innerHeight + 10}px, 0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: 2000 + Math.random() * 2000,
        easing: 'cubic-bezier(0, .9, .57, 1)'
      });

      setTimeout(() => confetti.remove(), 4000);
    }
  }, []);

  const orderNo = orderResult.orderNumber || "#HB-482910";

  return (
    <div className="success-body-layout">
      <div id="confetti-container" className="success-confetti-container"></div>

      <main className="success-main-card">
        <div className="success-card">
          <div className="success-card-content">
            <div className="success-card-icon-box">
              <span className="material-symbols-outlined success-card-icon" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h1 className="success-card-title">Sipariş Başarılı</h1>
            <p className="success-card-desc">Alışverişiniz için teşekkür ederiz! Siparişiniz hazırlanma aşamasına geçmiştir.</p>

            <div className="success-details-list-box">
              <div className="success-details-grid">
                <div className="success-detail-item">
                  <span className="success-detail-label">Sipariş No</span>
                  <span className="success-detail-value-primary">{orderNo}</span>
                </div>
                <div className="success-detail-item">
                  <span className="success-detail-label">Teslimat</span>
                  <span className="success-detail-value-dark">Yarın Kapında</span>
                </div>
              </div>

              <div className="success-detail-shipping-tracker">
                <div className="success-detail-tracker-row">
                  <div className="success-tracker-icon-box">
                    <span className="material-symbols-outlined success-tracker-icon">local_shipping</span>
                  </div>
                  <div className="success-tracker-info">
                    <span className="success-tracker-label">Mevcut Durum</span>
                    <span className="success-tracker-status">Kargoya hazırlanıyor</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="success-actions-box">
              <button onClick={() => navigate('/')} className="success-actions-btn-primary">
                Ana Sayfaya Dön
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button onClick={() => navigate('/')} className="success-actions-btn-secondary">
                Alışverişe Devam Et
              </button>
            </div>
          </div>

          <div className="success-promo-box">
            <div className="success-promo-header">
              <h3 className="success-promo-title">Sizin İçin Önerilenler</h3>
              <span onClick={() => navigate('/products')} className="success-promo-view-all">Tümünü Gör</span>
            </div>
            <div className="success-promo-scroll-track no-scrollbar">
              <div onClick={() => navigate('/product/4')} className="success-promo-item cursor-pointer">
                <div className="success-promo-item-img-box">
                  <img className="success-promo-item-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIOsmXf9xWtlAYlYGimoEWXKKi7X672f4GPO4TlhpXZDvO4Na535Z9I04LlJ8TcwdkMtU4PyEIXAFNl9BIlxQjcq3MjiuiOWd-4r39uHEJDAM4Ly9j56bF8jKjcBKgM_KV019-aD4RXA530o4sBvXAq8hVehNa9MEuoWPNQA4uLq6h4xqmefZuWnrKHT_tpZlpzNdsacn3BfAC7GCCQAeGvSSaK4C3fG3k9ztdeJoJHdDpidWS5wt30WDRDe1zU29eAniQ_MhTqao" alt="Koşu Ayakkabısı" />
                </div>
                <span className="success-promo-item-name">Spor Hava Taban Ayakkabı</span>
                <span className="success-promo-item-price">1.249 TL</span>
              </div>

              <div onClick={() => navigate('/product/12')} className="success-promo-item cursor-pointer">
                <div className="success-promo-item-img-box">
                  <img className="success-promo-item-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeAMHVxxarR1scDNJ2ua28Tnp7xRlQ73w_pNM42nrR9zjwHKQSACu5UWICT3wEHcLJc98DSswISET4OmXURluRZpxWCpugFOA8nuom1s4iC2jHIzFkAzhjy6WnUrB60wQeBKGRzV_ZsSS-xAmvJ-M3BDLfMQUSJjEPDU0P0f49DLWmyHrXgrQWEltUgYprvCqRZn2ZOsv5Cmt7SZQWSiBjkKc-Oz97Kvkxf2DU-Sj-tEMJHrFd66DWnhojVTvXyPhkQ6iDPS_ubEc" alt="Çelik Matara" />
                </div>
                <span className="success-promo-item-name">Çift Yalıtımlı Termos Matara</span>
                <span className="success-promo-item-price">349 TL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="success-support-footer">
          <p className="success-support-text">
            <span className="material-symbols-outlined success-support-icon">support_agent</span>
            Destek mi lazım? <span onClick={() => navigate('/contact')} className="success-support-link">Müşteri Hizmetleri</span>
          </p>
        </div>
      </main>

      <div className="success-bg-decoration-right">
        <span className="material-symbols-outlined success-bg-decoration-icon">shopping_bag</span>
      </div>
      <div className="success-bg-decoration-left">
        <span className="material-symbols-outlined success-bg-decoration-icon-green">celebration</span>
      </div>
    </div>
  );
};

export default Success;
