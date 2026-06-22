import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Checkout = () => {
  const navigate = useNavigate();
  const {
    cart,
    selectedAddress,
    setAddress,
    shippingMethod,
    setShipping,
    getSubtotal,
    getShippingCost,
    getTax,
    getTotal
  } = useApp();

  const activeCartItems = cart.filter(item => item.checked);

  return (
    <main className="checkout-main-content">
      <div className="stepper-container">
        <div className="stepper-node">
          <div className="stepper-circle-completed">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
          </div>
          <span className="stepper-label-active">Sepet</span>
        </div>
        <div className="stepper-line-active"></div>
        <div className="stepper-node">
          <div className="stepper-circle-active">
            <span className="font-bold text-sm">2</span>
          </div>
          <span className="stepper-label-active">Teslimat</span>
        </div>
        <div className="stepper-line"></div>
        <div className="stepper-node">
          <div className="stepper-circle-inactive">
            <span className="font-bold text-sm">3</span>
          </div>
          <span className="stepper-label-inactive">Ödeme</span>
        </div>
      </div>

      <section className="checkout-address-section">
        <div className="checkout-section-title-row">
          <h2 className="checkout-section-title">Teslimat Adresi</h2>
          <button className="checkout-section-add-btn">+ Yeni Ekle</button>
        </div>
        <div className="checkout-address-list">
          <div className="checkout-address-option" onClick={() => setAddress('addr1')}>
            <div className={selectedAddress === 'addr1' ? "address-radio-label-active" : "address-radio-label"}>
              <div className="address-card-row">
                <div>
                  <span className="address-card-badge">Ev</span>
                  <p className="address-card-name">Alex Johnston</p>
                  <p className="address-card-details">245 Teknoloji Plaza, Daire 400<br/>Şişli, İstanbul 34360</p>
                  <p className="address-card-phone">+90 (555) 012 34 56</p>
                </div>
                {selectedAddress === 'addr1' ? (
                  <span className="material-symbols-outlined address-card-select-icon" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ) : (
                  <div className="address-card-circle-placeholder"></div>
                )}
              </div>
            </div>
          </div>

          <div className="checkout-address-option" onClick={() => setAddress('addr2')}>
            <div className={selectedAddress === 'addr2' ? "address-radio-label-active" : "address-radio-label"}>
              <div className="address-card-row">
                <div>
                  <span className="address-card-badge">İş Yeri</span>
                  <p className="address-card-name">Alex Johnston (Ofis)</p>
                  <p className="address-card-details">100 Levent Plaza, Kat 12<br/>Beşiktaş, İstanbul 34330</p>
                </div>
                {selectedAddress === 'addr2' ? (
                  <span className="material-symbols-outlined address-card-select-icon" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                ) : (
                  <div className="address-card-circle-placeholder"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout-shipping-section">
        <h2 className="checkout-section-title mb-4">Kargo Yöntemi</h2>
        <div className="checkout-shipping-list">
          <div onClick={() => setShipping('standard')}>
            <div className={shippingMethod === 'standard' ? "shipping-radio-label-active" : "shipping-radio-label"}>
              <div className="shipping-icon-box-orange">
                <span className="material-symbols-outlined shipping-icon">local_shipping</span>
              </div>
              <div className="shipping-info-main">
                <div className="shipping-name-row">
                  <span className="shipping-name">Standart Kargo</span>
                  <span className="shipping-price">Ücretsiz</span>
                </div>
                <p className="shipping-time-text">Tahmini: 3-5 İş Günü</p>
              </div>
            </div>
          </div>

          <div onClick={() => setShipping('express')}>
            <div className={shippingMethod === 'express' ? "shipping-radio-label-active" : "shipping-radio-label"}>
              <div className="shipping-icon-box-blue">
                <span className="material-symbols-outlined shipping-icon-blue">bolt</span>
              </div>
              <div className="shipping-info-main">
                <div className="shipping-name-row">
                  <span className="shipping-name">Hızlı Teslimat</span>
                  <span className="shipping-price-val">14.99 TL</span>
                </div>
                <p className="shipping-time-text">Tahmini: Ertesi Gün Kapında</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="checkout-summary-section">
        <div className="checkout-summary-card">
          <h3 className="checkout-summary-title">Sipariş Özeti</h3>
          <div className="checkout-summary-items-row no-scrollbar">
            {activeCartItems.map(item => (
              <div key={item.product.id} className="checkout-summary-item-thumb">
                <img className="checkout-summary-item-img" src={item.product.img} alt={item.product.name} />
              </div>
            ))}
          </div>

          <div className="checkout-summary-details-list">
            <div className="checkout-summary-row-data">
              <span>Ara Toplam ({activeCartItems.length} Ürün)</span>
              <span className="checkout-summary-val-dark">{getSubtotal().toLocaleString('tr-TR')} TL</span>
            </div>
            <div className="checkout-summary-row-data">
              <span>Kargo Ücreti</span>
              <span className="checkout-summary-val-green">
                {getShippingCost() === 0 ? "Ücretsiz" : `${getShippingCost().toFixed(2)} TL`}
              </span>
            </div>
            <div className="checkout-summary-row-data-border">
              <span>KDV (%8)</span>
              <span className="checkout-summary-val-dark">{getTax().toLocaleString('tr-TR')} TL</span>
            </div>
            <div className="checkout-summary-total-row">
              <span className="checkout-summary-total-label">Toplam</span>
              <span className="checkout-summary-total-price">{getTotal().toLocaleString('tr-TR')} TL</span>
            </div>
          </div>
        </div>
      </section>

      <div className="checkout-sticky-cta-bar">
        <div className="checkout-cta-max-box">
          <div className="checkout-cta-info-row">
            <div>
              <p className="checkout-cta-info-title">Kayıtlı Kart İle Öde</p>
              <p className="checkout-cta-info-val">**** **** **** 4582</p>
            </div>
            <button onClick={() => navigate('/payment')} className="checkout-cta-info-btn">Değiştir</button>
          </div>
          <button onClick={() => navigate('/payment')} className="checkout-cta-btn-submit">
            Ödeme Adımına Geç
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
