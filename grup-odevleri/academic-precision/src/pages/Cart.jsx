import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const navigate = useNavigate();
  const { 
    cart, 
    removeFromCart, 
    couponCode, 
    discountPercent, 
    applyCoupon, 
    subtotal, 
    discount, 
    tax, 
    total 
  } = useCart();

  const [couponInput, setCouponInput] = useState(couponCode);
  const [couponError, setCouponError] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(discountPercent > 0);

  const handleApplyCoupon = () => {
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponSuccess(true);
      setCouponError(false);
    } else {
      setCouponSuccess(false);
      setCouponError(true);
    }
  };

  return (
    <main className="cart-layout">
      {cart.length === 0 ? (
        <div className="cart-empty-box">
          <span className="material-symbols-outlined cart-empty-icon">shopping_cart</span>
          <h2 className="cart-empty-title">Sepetiniz Boş</h2>
          <p className="cart-empty-desc">
            Sepetinizde herhangi bir kurs bulunmuyor. Yeni beceriler edinmek için kurs kataloğumuzu inceleyebilirsiniz.
          </p>
          <button className="cart-empty-btn" onClick={() => navigate('/kurslar')}>Kursları Keşfet</button>
        </div>
      ) : (
        <div className="space-y-lg">
          <h2 className="cart-title">Alışveriş Sepeti</h2>
          <div className="cart-grid">
            <div className="cart-main">
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item-card">
                    <div className="cart-item-info">
                      <img className="cart-item-img" src={item.image} alt={item.title} />
                      <div className="cart-item-text">
                        <span className="cart-item-name" onClick={() => navigate(`/kurs/${item.id}`)}>{item.title}</span>
                        <span className="cart-item-instructor">Eğitmen: {item.instructor} • {item.duration}</span>
                        <div className="cart-item-rating-row">
                          <span className="material-symbols-outlined text-yellow-500 text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-label-md text-xs">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item-price-actions">
                      <span className="cart-item-price">
                        {item.price === 0 ? 'Ücretsiz' : `${item.price.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}`}
                      </span>
                      <button className="cart-item-remove-btn" onClick={() => removeFromCart(item.id)}>
                        <span className="material-symbols-outlined cart-item-remove-icon">delete</span>
                        Kaldır
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-xl grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div className="flex flex-col gap-md">
                  <label className="font-headline-md text-headline-md text-on-surface">Kupon Uygula</label>
                  <div className="flex gap-sm">
                    <input 
                      className="coupon-input" 
                      placeholder="Kupon kodunu girin" 
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                    />
                    <button className="checkout-next-btn" onClick={handleApplyCoupon}>Uygula</button>
                  </div>
                  {couponSuccess && (
                    <p className="text-secondary font-bold text-xs">%20 indirim kuponu başarıyla uygulandı!</p>
                  )}
                  {couponError && (
                    <p className="text-error font-bold text-xs">Geçersiz kupon kodu. Lütfen tekrar deneyin.</p>
                  )}
                  <p className="text-on-surface-variant font-body-sm italic">İlk siparişinizde %20 indirim için "WELCOME20" kodunu deneyebilirsiniz.</p>
                </div>

                <div className="cart-summary-sidebar">
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-on-surface-variant">Ara Toplam</span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      {subtotal.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-body-md text-on-surface-variant">KDV (%5)</span>
                    <span className="font-headline-md text-headline-md text-on-surface">
                      {tax.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between items-center text-primary">
                      <span className="font-body-md">Kupon İndirimi</span>
                      <span className="font-headline-md text-headline-md">
                        -{discount.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
                      </span>
                    </div>
                  )}
                  <div className="cart-summary-total-row">
                    <span>Toplam</span>
                    <span>
                      {total.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' })}
                    </span>
                  </div>
                  <button className="cart-checkout-btn" onClick={() => navigate('/odeme-ozeti')}>Güvenli Ödeme Adımına Geç</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
