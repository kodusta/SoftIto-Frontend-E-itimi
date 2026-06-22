import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const {
    cart,
    clearCart,
    orderMethod,
    setOrderMethod,
    chefNotes,
    checkoutForm,
    setCheckoutForm,
    getSubtotal,
    getDiscount,
    getDeliveryFee,
    getTax,
    getTotal
  } = useCart();

  const [simulateError, setSimulateError] = useState(false);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const deliveryFee = getDeliveryFee();
  const tax = getTax();
  const total = getTotal();

  const handleInputChange = (field, val) => {
    setCheckoutForm((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (simulateError) {
      navigate('/siparis-basarisiz');
    } else {
      clearCart();
      navigate('/siparis-basarili');
    }
  };

  return (
    <div className="contact-container">
      <div className="cart-header">
        <h1 className="section-title">Ödeme Bilgileri</h1>
      </div>

      <div className="checkout-grid">
        <div className="checkout-left">
          <div className="method-grid">
            <button
              className={orderMethod === "teslimat" ? "method-btn-active group" : "method-btn group"}
              type="button"
              onClick={() => setOrderMethod("teslimat")}
            >
              <span className="material-symbols-outlined mb-2 text-2xl">local_shipping</span>
              <span className="font-label-lg">Adrese Teslimat</span>
            </button>
            <button
              className={orderMethod === "gel-al" ? "method-btn-active group" : "method-btn group"}
              type="button"
              onClick={() => setOrderMethod("gel-al")}
            >
              <span className="material-symbols-outlined mb-2 text-2xl">storefront</span>
              <span className="font-label-lg">Gel-Al (Şubeden Alım)</span>
            </button>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2 className="form-section-title">
                {orderMethod === "teslimat" ? "Teslimat Adresi" : "Alım Bilgileri"}
              </h2>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Adınız</label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    value={checkoutForm.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Soyadınız</label>
                  <input
                    className="form-input"
                    type="text"
                    required
                    value={checkoutForm.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
              </div>

              {orderMethod === "teslimat" ? (
                <>
                  <div className="form-group">
                    <label className="form-label">Açık Adres</label>
                    <input
                      className="form-input"
                      type="text"
                      required
                      placeholder="Mahalle, cadde, sokak ve kapı no..."
                      value={checkoutForm.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">İlçe / Şehir</label>
                      <input
                        className="form-input"
                        type="text"
                        required
                        placeholder="Kadıköy / İstanbul"
                        value={checkoutForm.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Posta Kodu</label>
                      <input
                        className="form-input"
                        type="text"
                        required
                        value={checkoutForm.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Alım Yapılacak Şube</label>
                    <select className="form-select">
                      <option value="caddebostan">Caddebostan Şubesi (Merkez)</option>
                      <option value="moda">Moda Şubesi</option>
                      <option value="suadiye">Suadiye Şubesi</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Alım Zamanı</label>
                    <select className="form-select">
                      <option value="15">15 Dakika Sonra</option>
                      <option value="30">30 Dakika Sonra</option>
                      <option value="45">45 Dakika Sonra</option>
                      <option value="60">1 Saat Sonra</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            <div className="form-section pt-8">
              <h2 className="form-section-title">Ödeme Yöntemi</h2>
              <div className="radio-group">
                <label className="radio-card">
                  <input
                    className="sr-only peer"
                    type="radio"
                    name="payment"
                    value="apple-pay"
                    checked={checkoutForm.paymentMethod === "apple-pay"}
                    onChange={() => handleInputChange("paymentMethod", "apple-pay")}
                  />
                  <div className="radio-label-row">
                    <div className="radio-label-left">
                      <div className="radio-circle">
                        {checkoutForm.paymentMethod === "apple-pay" && (
                          <div className="radio-circle-checked"></div>
                        )}
                      </div>
                      <span className="font-body-md font-bold">Apple Pay / Google Pay</span>
                    </div>
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                </label>

                <label className="radio-card">
                  <input
                    className="sr-only peer"
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={checkoutForm.paymentMethod === "credit-card"}
                    onChange={() => handleInputChange("paymentMethod", "credit-card")}
                  />
                  <div className="radio-label-row">
                    <div className="radio-label-left">
                      <div className="radio-circle">
                        {checkoutForm.paymentMethod === "credit-card" && (
                          <div className="radio-circle-checked"></div>
                        )}
                      </div>
                      <span className="font-body-md font-bold">Kredi veya Banka Kartı</span>
                    </div>
                    <span className="material-symbols-outlined">credit_card</span>
                  </div>
                </label>

                {orderMethod === "teslimat" && (
                  <label className="radio-card">
                    <input
                      className="sr-only peer"
                      type="radio"
                      name="payment"
                      value="at-door"
                      checked={checkoutForm.paymentMethod === "at-door"}
                      onChange={() => handleInputChange("paymentMethod", "at-door")}
                    />
                    <div className="radio-label-row">
                      <div className="radio-label-left">
                        <div className="radio-circle">
                          {checkoutForm.paymentMethod === "at-door" && (
                            <div className="radio-circle-checked"></div>
                          )}
                        </div>
                        <span className="font-body-md font-bold">Kapıda Ödeme (Nakit / POS)</span>
                      </div>
                      <span className="material-symbols-outlined">local_atm</span>
                    </div>
                  </label>
                )}
              </div>

              {checkoutForm.paymentMethod === "credit-card" && (
                <div className="cc-fields">
                  <div className="form-group">
                    <label className="form-label">Kart Numarası</label>
                    <input
                      className="form-input"
                      type="text"
                      required
                      placeholder="0000 0000 0000 0000"
                      value={checkoutForm.cardNumber}
                      onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Son Kullanma Tarihi</label>
                      <input
                        className="form-input"
                        type="text"
                        required
                        placeholder="AA/YY"
                        value={checkoutForm.expiry}
                        onChange={(e) => handleInputChange("expiry", e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Güvenlik Kodu (CVC)</label>
                      <input
                        className="form-input"
                        type="text"
                        required
                        placeholder="000"
                        value={checkoutForm.cvc}
                        onChange={(e) => handleInputChange("cvc", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-outline-variant/30 flex items-center gap-4">
              <input
                type="checkbox"
                id="simulateError"
                className="w-5 h-5 accent-heritage-red rounded"
                checked={simulateError}
                onChange={(e) => setSimulateError(e.target.checked)}
              />
              <label htmlFor="simulateError" className="font-body-md text-on-surface-variant cursor-pointer">
                Siparişi başarısız simüle et (Hata senaryosunu test etmek için)
              </label>
            </div>

            <div className="pt-8">
              <button className="checkout-btn" type="submit">
                Siparişinizi Tamamlayın (₺{total.toFixed(0)})
              </button>
            </div>
          </form>
        </div>

        <div className="checkout-right">
          <div className="sticky-summary">
            <h2 className="summary-title">Siparişiniz</h2>
            <div className="summary-items-list">
              {cart.map((item) => (
                <div className="summary-item-row" key={item.product.id}>
                  <div className="summary-item-img-wrap">
                    <img className="story-image" src={item.product.image} alt={item.product.name} />
                  </div>
                  <div className="summary-item-content">
                    <h4 className="font-body-md font-bold">{item.product.name}</h4>
                    <span className="font-label-md text-on-surface-variant">
                      Adet: {item.quantity} x ₺{item.product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {chefNotes && (
              <div className="mb-8 p-4 bg-warm-cream rounded-lg text-xs border border-outline-variant/30">
                <strong>Şefin Notu:</strong> "{chefNotes}"
              </div>
            )}

            <div className="space-y-2 pt-4 border-t border-outline-variant/30">
              <div className="summary-row">
                <span className="summary-row-label">Ara Toplam</span>
                <span className="font-body-lg font-bold">₺{subtotal}</span>
              </div>
              {discount > 0 && (
                <div className="summary-row text-secondary">
                  <span className="summary-row-label">İndirim (%10)</span>
                  <span className="font-body-lg font-bold">-₺{discount.toFixed(0)}</span>
                </div>
              )}
              <div className="summary-row">
                <span className="summary-row-label">KDV (%8)</span>
                <span className="font-body-lg font-bold">₺{tax.toFixed(0)}</span>
              </div>
              <div className="summary-row">
                <span className="summary-row-label">Teslimat Ücreti</span>
                <span className="font-body-lg font-bold">
                  {deliveryFee === 0 ? "Ücretsiz" : `₺${deliveryFee}`}
                </span>
              </div>
              <div className="summary-total-wrap !mb-0 pt-4 border-t border-outline-variant/40">
                <span className="summary-total-label">Toplam</span>
                <span className="summary-total-val">₺{total.toFixed(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
