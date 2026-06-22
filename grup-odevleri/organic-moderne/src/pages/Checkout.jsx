import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const {
    cart,
    billingAddress,
    paymentCard,
    setBillingAddress,
    setPaymentCard,
    getSubtotal,
    getDiscountAmount,
    getShippingCost,
    getTotal,
    clearCart
  } = useContext(CartContext);

  const [step, setStep] = useState(1);
  const [addressErrors, setAddressErrors] = useState({});
  const [cardErrors, setCardErrors] = useState({});

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!billingAddress.firstName) errors.firstName = 'Ad alanı zorunludur';
    if (!billingAddress.lastName) errors.lastName = 'Soyad alanı zorunludur';
    if (!billingAddress.address) errors.address = 'Adres alanı zorunludur';
    if (!billingAddress.city) errors.city = 'Şehir alanı zorunludur';
    if (!billingAddress.postalCode) errors.postalCode = 'Posta Kodu alanı zorunludur';

    if (Object.keys(errors).length > 0) {
      setAddressErrors(errors);
    } else {
      setAddressErrors({});
      setStep(2);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!paymentCard.cardNumber || paymentCard.cardNumber.replace(/\s/g, '').length < 16) {
      errors.cardNumber = 'Geçersiz Kart Numarası (16 hane olmalıdır)';
    }
    if (!paymentCard.expiryDate || !paymentCard.expiryDate.includes('/')) {
      errors.expiryDate = 'Geçersiz Tarih (AA/YY)';
    }
    if (!paymentCard.cvc || paymentCard.cvc.length < 3) {
      errors.cvc = 'Geçersiz CVC';
    }

    if (Object.keys(errors).length > 0) {
      setCardErrors(errors);
    } else {
      setCardErrors({});
      const cardClean = paymentCard.cardNumber.replace(/\s/g, '');
      if (cardClean.startsWith('4000') || cardClean.endsWith('0000')) {
        navigate('/siparis-basarisiz');
      } else {
        clearCart();
        navigate('/siparis-basarili');
      }
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div class="main-canvas bauhaus-grid">
      <div>
        <span class="hero-tag">ÖDEME ADIMLARI</span>
        <h1 class="section-title">Güvenli Ödeme Aşaması</h1>
      </div>

      <div class="cart-grid-layout">
        <div class="cart-items-col">
          <div class="checkout-step-indicator">
            <button 
              class={step === 1 ? "checkout-step-btn-active" : "checkout-step-btn-inactive"}
              onClick={() => step === 2 && setStep(1)}
            >
              1. Fatura Adresi
            </button>
            <span class="text-outline">/</span>
            <button 
              class={step === 2 ? "checkout-step-btn-active" : "checkout-step-btn-inactive"}
              disabled={step === 1}
            >
              2. Ödeme Bilgileri
            </button>
          </div>

          {step === 1 ? (
            <form class="space-y-lg mt-md" onSubmit={handleAddressSubmit}>
              <div class="grid grid-cols-2 gap-md">
                <div class="form-group">
                  <label class="form-label" htmlFor="firstName">Ad *</label>
                  <input 
                    class="form-input"
                    type="text" 
                    id="firstName"
                    value={billingAddress.firstName}
                    onChange={(e) => setBillingAddress({ ...billingAddress, firstName: e.target.value })}
                    required
                    placeholder="AD"
                  />
                  {addressErrors.firstName && <span class="text-primary text-xs uppercase font-semibold">{addressErrors.firstName}</span>}
                </div>
                <div class="form-group">
                  <label class="form-label" htmlFor="lastName">Soyad *</label>
                  <input 
                    class="form-input"
                    type="text" 
                    id="lastName"
                    value={billingAddress.lastName}
                    onChange={(e) => setBillingAddress({ ...billingAddress, lastName: e.target.value })}
                    required
                    placeholder="SOYAD"
                  />
                  {addressErrors.lastName && <span class="text-primary text-xs uppercase font-semibold">{addressErrors.lastName}</span>}
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" htmlFor="address">Adres *</label>
                <input 
                  class="form-input"
                  type="text" 
                  id="address"
                  value={billingAddress.address}
                  onChange={(e) => setBillingAddress({ ...billingAddress, address: e.target.value })}
                  required
                  placeholder="FATURA ADRESİ"
                />
                {addressErrors.address && <span class="text-primary text-xs uppercase font-semibold">{addressErrors.address}</span>}
              </div>

              <div class="grid grid-cols-2 gap-md">
                <div class="form-group">
                  <label class="form-label" htmlFor="city">Şehir *</label>
                  <input 
                    class="form-input"
                    type="text" 
                    id="city"
                    value={billingAddress.city}
                    onChange={(e) => setBillingAddress({ ...billingAddress, city: e.target.value })}
                    required
                    placeholder="ŞEHİR"
                  />
                  {addressErrors.city && <span class="text-primary text-xs uppercase font-semibold">{addressErrors.city}</span>}
                </div>
                <div class="form-group">
                  <label class="form-label" htmlFor="postalCode">Posta Kodu *</label>
                  <input 
                    class="form-input"
                    type="text" 
                    id="postalCode"
                    value={billingAddress.postalCode}
                    onChange={(e) => setBillingAddress({ ...billingAddress, postalCode: e.target.value })}
                    required
                    placeholder="POSTA KODU"
                  />
                  {addressErrors.postalCode && <span class="text-primary text-xs uppercase font-semibold">{addressErrors.postalCode}</span>}
                </div>
              </div>

              <button class="btn-primary w-full" type="submit">Ödeme Bilgilerine İlerle</button>
            </form>
          ) : (
            <form class="space-y-lg mt-md" onSubmit={handlePaymentSubmit}>
              <div class="form-group">
                <label class="form-label" htmlFor="cardNumber">Kart Numarası *</label>
                <input 
                  class="form-input"
                  type="text" 
                  id="cardNumber"
                  maxLength="19"
                  value={paymentCard.cardNumber}
                  onChange={(e) => setPaymentCard({ ...paymentCard, cardNumber: formatCardNumber(e.target.value) })}
                  required
                  placeholder="0000 0000 0000 0000"
                />
                {cardErrors.cardNumber && <span class="text-primary text-xs uppercase font-semibold">{cardErrors.cardNumber}</span>}
                <span class="text-on-surface-variant text-[11px] block mt-xs">Not: Başarısız işlem simülasyonu için 4000 ile başlayan veya 0000 ile biten bir kart girin.</span>
              </div>

              <div class="grid grid-cols-2 gap-md">
                <div class="form-group">
                  <label class="form-label" htmlFor="expiryDate">Son Kullanma (AA/YY) *</label>
                  <input 
                    class="form-input"
                    type="text" 
                    id="expiryDate"
                    maxLength="5"
                    value={paymentCard.expiryDate}
                    onChange={(e) => setPaymentCard({ ...paymentCard, expiryDate: e.target.value })}
                    required
                    placeholder="AA/YY"
                  />
                  {cardErrors.expiryDate && <span class="text-primary text-xs uppercase font-semibold">{cardErrors.expiryDate}</span>}
                </div>
                <div class="form-group">
                  <label class="form-label" htmlFor="cvc">CVC *</label>
                  <input 
                    class="form-input"
                    type="password" 
                    id="cvc"
                    maxLength="3"
                    value={paymentCard.cvc}
                    onChange={(e) => setPaymentCard({ ...paymentCard, cvc: e.target.value.replace(/[^0-9]/g, '') })}
                    required
                    placeholder="CVC"
                  />
                  {cardErrors.cvc && <span class="text-primary text-xs uppercase font-semibold">{cardErrors.cvc}</span>}
                </div>
              </div>

              <div class="payment-method-grid">
                <div class="payment-method-btn-active">
                  <div class="flex items-center gap-md">
                    <span class="material-symbols-outlined text-primary">credit_card</span>
                    <span class="font-label-md text-label-md uppercase">Kredi Kartı</span>
                  </div>
                  <div class="payment-indicator-outer">
                    <div class="payment-indicator-inner"></div>
                  </div>
                </div>
                <div class="payment-method-btn" onClick={() => alert('Havale/EFT seçeneği şu an aktif değildir.')}>
                  <div class="flex items-center gap-md">
                    <span class="material-symbols-outlined text-on-surface-variant">account_balance</span>
                    <span class="font-label-md text-label-md uppercase text-on-surface-variant">Havale / EFT</span>
                  </div>
                  <div class="payment-indicator-outer">
                    <div class="payment-indicator-inner-inactive"></div>
                  </div>
                </div>
              </div>

              <div class="flex gap-md pt-md">
                <button class="btn-secondary w-1/3" type="button" onClick={() => setStep(1)}>Geri Dön</button>
                <button class="btn-primary w-2/3" type="submit">Ödemeyi Tamamla ({getTotal()} TL)</button>
              </div>
            </form>
          )}
        </div>

        <div class="cart-summary-col">
          <div class="cart-summary-box">
            <h2 class="cart-summary-title">Sipariş Özeti</h2>
            <div class="flex flex-col gap-sm max-h-[250px] overflow-y-auto pr-xs">
              {cart.map((item) => (
                <div class="flex justify-between items-center py-xs border-b border-on-background/10" key={item.id}>
                  <div class="flex items-center gap-sm">
                    <div class="w-10 h-10 border border-on-background overflow-hidden flex-shrink-0">
                      <img class="w-full h-full object-cover" src={item.image} alt={item.name} />
                    </div>
                    <div>
                      <h4 class="font-label-sm text-label-sm uppercase leading-none">{item.name}</h4>
                      <span class="text-on-surface-variant text-[10px] uppercase">Adet: {item.quantity}</span>
                    </div>
                  </div>
                  <span class="font-label-sm text-label-sm font-bold">{item.price * item.quantity} TL</span>
                </div>
              ))}
            </div>

            <div class="space-y-sm pt-sm border-t border-on-background/20">
              <div class="cart-summary-row">
                <span>Ara Toplam</span>
                <span>{getSubtotal()} TL</span>
              </div>
              {getDiscountAmount() > 0 && (
                <div class="cart-summary-row text-primary">
                  <span>Kupon İndirimi</span>
                  <span>-{getDiscountAmount()} TL</span>
                </div>
              )}
              <div class="cart-summary-row">
                <span>Kargo Bedeli</span>
                <span>{getShippingCost() === 0 ? 'Ücretsiz' : `${getShippingCost()} TL`}</span>
              </div>
              <div class="cart-summary-total">
                <span>Toplam</span>
                <span class="text-primary font-bold">{getTotal()} TL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
