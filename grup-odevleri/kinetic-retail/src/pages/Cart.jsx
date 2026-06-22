import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    toggleCartItem,
    clearCart,
    getTotal
  } = useApp();

  const isAllChecked = cart.length > 0 && cart.every(item => item.checked);
  const checkedItemsCount = cart.filter(item => item.checked).length;

  const handleSelectAllChange = () => {
    cart.forEach(item => {
      if (isAllChecked) {
        if (item.checked) toggleCartItem(item.product.id);
      } else {
        if (!item.checked) toggleCartItem(item.product.id);
      }
    });
  };

  return (
    <main className="cart-main-container">
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="cart-selection-summary">
            <div className="cart-select-all-box">
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
                className="cart-select-all-checkbox cursor-pointer"
              />
              <span className="cart-select-all-label">Tümünü Seç ({cart.length})</span>
            </div>
            <button onClick={clearCart} className="cart-clear-btn">Sepeti Temizle</button>
          </div>

          {cart.map(item => (
            <div key={item.product.id} className="cart-item-card">
              <div className="cart-item-checkbox-box">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleCartItem(item.product.id)}
                  className="cart-item-checkbox cursor-pointer"
                />
              </div>
              <div className="cart-item-img-box">
                <img className="cart-item-img" src={item.product.img} alt={item.product.name} />
              </div>
              <div className="cart-item-info">
                <div>
                  <h3 className="cart-item-title">{item.product.name}</h3>
                  <p className={item.product.id === 12 ? "cart-item-delivery-fast" : "cart-item-delivery"}>
                    {item.product.id === 12 ? "Hızlı Teslimat" : "Tahmini Teslimat: Yarın Kapında"}
                  </p>
                </div>
                <div className="cart-item-bottom">
                  <span className="cart-item-price">{(item.product.price * item.quantity).toLocaleString('tr-TR')} TL</span>
                  <div className="cart-item-quantity-box">
                    <button onClick={() => updateCartQuantity(item.product.id, -1)} className="cart-item-quantity-btn">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="cart-item-quantity-val">{item.quantity}</span>
                    <button onClick={() => updateCartQuantity(item.product.id, 1)} className="cart-item-quantity-btn">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.product.id)} className="cart-item-delete-btn">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="cart-empty-state">
          <div className="cart-empty-icon-box">
            <span className="material-symbols-outlined cart-empty-icon" style={{ fontSize: "80px" }}>shopping_cart_off</span>
          </div>
          <h2 className="cart-empty-title">Sepetiniz Boş</h2>
          <p className="cart-empty-desc text-secondary">Sepetinizde henüz herhangi bir ürün bulunmamaktadır.</p>
          <button onClick={() => navigate('/')} className="cart-empty-btn">Alışverişe Başla</button>
        </div>
      )}

      <div className="cart-recommended-section">
        <h2 className="cart-recommended-title">Önerilen Ürünler</h2>
        <div className="cart-recommended-grid">
          <div onClick={() => navigate('/product/1')} className="cart-recommended-card">
            <div className="cart-recommended-img-box">
              <img className="cart-recommended-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgS7eQMJbTTkX1ZAmEbeRixWw8QYh5X11eB_cuRGQQc7dfqTpCyOWsu18ksseOZWbgfH-tAgGeIOXgAoLg47aPQ1gNjtCddCgsSerJFMJ0jXwCAraYfS8tSXkXrarPJDeqj4BFAnl7sIrhMCyRiGJXYFd4lOScJrewnCA8BTw-NMXeYUHYMGwYB_u8rsu414fz4ElJ6POJEZLDDT92ba-St0dKaeYUkJUoL4koVRXYo5WFRPWYjZU25rS6iI9pM_1sTfeK-00MDW0" alt="Önerilen Ürün 1" />
            </div>
            <h4 className="cart-recommended-name">Karbon Akıllı Kılıf</h4>
            <span className="cart-recommended-price">199.00 TL</span>
          </div>
          <div onClick={() => navigate('/product/15')} className="cart-recommended-card">
            <div className="cart-recommended-img-box">
              <img className="cart-recommended-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfMjlgwKSkAijPfA2CQdGGI5kOk_UxM5Tk43QvhbHBpUqVYhpnUM04VlGhBu18i2_1hmd3Ir1QbFsvJHC9xpIW_kOyqK34oo3lqkQ3WwlGH3bppZBqWeDiFi60tlhXC4-_Ir5QJAbdmOaxmZUJiQm_oyzD7c_moTmXCj_tbiSgPjEZaynKNMpYZw93TggmWZiO41uPLN3M7X5OSRBG5cVK11tTocGURX5vUhQKUBx5v1T_YcpujozhZVr8m46Mipp-LUR9hvSOys8" alt="Önerilen Ürün 2" />
            </div>
            <h4 className="cart-recommended-name">Hızlı Şarj Kablosu</h4>
            <span className="cart-recommended-price">129.00 TL</span>
          </div>
        </div>
      </div>

      {cart.length > 0 && (
        <div className="cart-summary-nav-sticky">
          <div className="cart-summary-strip">
            <div className="cart-summary-row">
              <div>
                <p className="cart-summary-count">Toplam ({checkedItemsCount} Ürün)</p>
                <p className="cart-summary-price">{getTotal().toLocaleString('tr-TR')} TL</p>
              </div>
              <button
                onClick={() => {
                  if (checkedItemsCount > 0) navigate('/checkout');
                }}
                disabled={checkedItemsCount === 0}
                className="cart-summary-checkout-btn"
                style={checkedItemsCount === 0 ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                Alışverişi Tamamla
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
