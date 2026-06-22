import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    couponCode,
    setCouponCode,
    couponApplied,
    applyCoupon,
    removeCoupon,
    chefNotes,
    setChefNotes,
    getSubtotal,
    getDiscount,
    getDeliveryFee,
    getTax,
    getTotal
  } = useCart();

  const [promoError, setPromoError] = useState(false);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const deliveryFee = getDeliveryFee();
  const tax = getTax();
  const total = getTotal();

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    const success = applyCoupon(couponCode);
    if (!success) {
      setPromoError(true);
      setTimeout(() => setPromoError(false), 2500);
    }
  };

  const freeShippingLimit = 300;
  const progressToFreeShipping = Math.min((subtotal / freeShippingLimit) * 100, 100);
  const diffToFreeShipping = freeShippingLimit - subtotal;

  if (cart.length === 0) {
    return (
      <div className="contact-container text-center py-20">
        <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-6">
          shopping_basket
        </span>
        <h1 className="section-title">Sepetiniz Boş</h1>
        <p className="font-body-lg text-on-surface-variant mb-12">
          Sepetinizde henüz bir ürün bulunmamaktadır. Menümüzü inceleyerek leziz seçenekler ekleyebilirsiniz.
        </p>
        <button className="pagination-btn" onClick={() => navigate('/kategoriler')}>
          Menüyü Keşfedin
        </button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="cart-header">
        <h1 className="section-title">Alışveriş Sepetim</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-left">
          <div className="cart-list">
            {cart.map((item) => (
              <div className="cart-item" key={item.product.id}>
                <div className="cart-item-img-wrap">
                  <div 
                    className="cart-item-img" 
                    style={{ backgroundImage: `url('${item.product.image}')` }}
                  ></div>
                </div>

                <div className="cart-item-content">
                  <div className="cart-item-top">
                    <h3 className="font-headline-sm">{item.product.name}</h3>
                    <span className="font-body-lg font-bold">₺{item.product.price * item.quantity}</span>
                  </div>

                  <div className="cart-item-actions">
                    <div className="qty-adjuster">
                      <span 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, -1)}
                      >
                        remove
                      </span>
                      <span className="qty-val">{item.quantity}</span>
                      <span 
                        className="qty-btn"
                        onClick={() => updateQuantity(item.product.id, 1)}
                      >
                        add
                      </span>
                    </div>

                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="notes-container">
            <h3 className="notes-label">
              <span className="material-symbols-outlined">description</span>
              Şefin Notu (Alerjenler veya Özel İstekler)
            </h3>
            <textarea
              className="notes-textarea"
              placeholder="Lütfen alerjiniz olan malzemeleri veya siparişinizle ilgili özel notları buraya yazın..."
              value={chefNotes}
              onChange={(e) => setChefNotes(e.target.value)}
            ></textarea>
            <span className="notes-hint">
              Taze hazırlanan ürünlerimizin yapımında istekleriniz dikkate alınacaktır.
            </span>
          </div>
        </div>

        <div className="cart-right">
          <div className="sticky-summary">
            <h2 className="summary-title">Sipariş Özeti</h2>

            <div className="coupon-section">
              {!couponApplied ? (
                <form className="coupon-input-wrap" onSubmit={handlePromoSubmit}>
                  <input
                    className="coupon-input"
                    type="text"
                    placeholder="İndirim Kodu (CAFE10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button className="coupon-btn" type="submit">Uygula</button>
                </form>
              ) : (
                <div className="flex justify-between items-center bg-forest-accent/5 p-4 rounded-lg">
                  <span className="font-body-md text-forest-accent font-bold">CAFE10 Uygulandı! (%10 İndirim)</span>
                  <button className="remove-btn text-heritage-red font-bold" onClick={removeCoupon}>Kaldır</button>
                </div>
              )}
              {promoError && (
                <span className="text-xs text-secondary mt-2">Geçersiz indirim kodu. (Deneyin: CAFE10)</span>
              )}
            </div>

            <div className="space-y-2 mb-6">
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
            </div>

            {deliveryFee > 0 && (
              <div className="mb-8">
                <div className="flex justify-between text-xs text-on-surface-variant mb-1">
                  <span>Ücretsiz teslimat için kalan: <strong>₺{diffToFreeShipping}</strong></span>
                  <span>{progressToFreeShipping.toFixed(0)}%</span>
                </div>
                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary" style={{ width: `${progressToFreeShipping}%` }}></div>
                </div>
              </div>
            )}

            <div className="summary-total-wrap">
              <span className="summary-total-label">Toplam</span>
              <span className="summary-total-val">₺{total.toFixed(0)}</span>
            </div>

            <button className="checkout-btn" onClick={() => navigate('/odeme')}>
              ÖDEMEYE GEÇ
            </button>

            <div className="cart-shipping-info">
              <div className="shipping-row">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                <span className="text-xs">300 ₺ ve üzeri teslimatlar ücretsizdir.</span>
              </div>
              <div className="shipping-row">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="text-xs">Tahmini Hazırlanma Süresi: 25-35 dakika.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
