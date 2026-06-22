import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    couponCode,
    discount,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    getSubtotal,
    getDiscountAmount,
    getShippingCost,
    getTotal
  } = useContext(CartContext);

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState(false);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput) return;
    
    const success = applyCoupon(promoInput);
    if (success) {
      setPromoSuccess(true);
      setPromoError('');
    } else {
      setPromoError('Geçersiz Kupon Kodu');
      setPromoSuccess(false);
    }
  };

  return (
    <div class="main-canvas bauhaus-grid">
      <div>
        <span class="hero-tag">SEPETİM</span>
        <h1 class="section-title">Alışveriş Sepeti</h1>
      </div>

      {cart.length === 0 ? (
        <div class="text-center py-xxl border-2 border-on-background bg-white mt-xl">
          <h2 class="product-title mb-md">Sepetiniz Boş</h2>
          <p class="product-desc mb-xl">Sepetinizde henüz ekolojik bir ürün bulunmamaktadır.</p>
          <Link class="btn-primary" to="/urunler">Alışverişe Başla</Link>
        </div>
      ) : (
        <div class="cart-grid-layout">
          <div class="cart-items-col">
            {cart.map((item) => (
              <div class="cart-item-card" key={item.id}>
                <div class="cart-item-details">
                  <div class="cart-item-img-wrapper">
                    <img class="cart-item-img" src={item.image} alt={item.name} />
                  </div>
                  <div class="cart-item-info-text">
                    <h3 class="cart-item-name">{item.name}</h3>
                    <span class="cart-item-spec">{item.material} / {item.color}</span>
                    <span class="cart-item-price">{item.price} TL</span>
                  </div>
                </div>

                <div class="cart-item-actions">
                  <div class="cart-item-quantity-row">
                    <button class="cart-item-quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span class="cart-item-quantity-val">{item.quantity}</span>
                    <button class="cart-item-quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button class="cart-item-remove-btn" onClick={() => removeFromCart(item.id)}>Sil</button>
                </div>
              </div>
            ))}
          </div>

          <div class="cart-summary-col">
            <div class="cart-summary-box">
              <h2 class="cart-summary-title">Sipariş Özeti</h2>
              
              <div class="cart-summary-row">
                <span>Ara Toplam</span>
                <span>{getSubtotal()} TL</span>
              </div>

              {discount > 0 && (
                <div class="cart-summary-row text-primary">
                  <span>Kupon İndirimi (%{discount})</span>
                  <span>-{getDiscountAmount()} TL</span>
                </div>
              )}

              <div class="cart-summary-row">
                <span>Kargo Bedeli</span>
                <span>{getShippingCost() === 0 ? 'Ücretsiz' : `${getShippingCost()} TL`}</span>
              </div>

              <div class="cart-summary-total">
                <span>Toplam Tutar</span>
                <span class="text-primary font-bold">{getTotal()} TL</span>
              </div>

              <form class="cart-promo-section" onSubmit={handleApplyPromo}>
                <label class="cart-promo-label">İndirim Kodu</label>
                <div class="cart-promo-input-row">
                  <input 
                    class="cart-promo-input" 
                    placeholder="KUPON KODU (örn. ORGANIK20)" 
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    type="text" 
                  />
                  <button class="cart-promo-btn" type="submit">Uygula</button>
                </div>
                {promoError && <p class="text-primary text-xs mt-xs uppercase font-semibold">{promoError}</p>}
                {(promoSuccess || couponCode) && <p class="text-primary text-xs mt-xs uppercase font-semibold">Kupon Başarıyla Uygulandı (%{discount} İndirim)</p>}
              </form>

              <button class="cart-checkout-btn" onClick={() => navigate('/odeme')}>Ödeme Aşamasına Geç</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
