import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Payment = () => {
  const navigate = useNavigate();
  const {
    getTotal,
    paymentDetails,
    updatePayment,
    installment,
    setInstallment,
    processPayment
  } = useApp();

  const total = getTotal();

  const handleSavedCardSelect = (cardId) => {
    updatePayment({ selectedSavedCardId: cardId, cardHolder: "", cardNumber: "", expiryDate: "", cvv: "" });
  };

  const handleInputChange = (field, val) => {
    let clean = val;
    if (field === 'cardNumber') {
      clean = val.replace(/\D/g, '').substring(0, 16);
      clean = clean.replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (field === 'expiryDate') {
      clean = val.replace(/\D/g, '').substring(0, 4);
      if (clean.length >= 2) {
        clean = clean.substring(0, 2) + '/' + clean.substring(2);
      }
    } else if (field === 'cvv') {
      clean = val.replace(/\D/g, '').substring(0, 3);
    }
    updatePayment({ [field]: clean, selectedSavedCardId: null });
  };

  const handleCompleteOrder = () => {
    const success = processPayment();
    if (success) {
      navigate('/success');
    } else {
      navigate('/failure');
    }
  };

  const getInstallmentPrice = (months) => {
    if (months === 1) return total;
    if (months === 3) return total;
    return total * 1.05;
  };

  const getMonthlyPrice = (months) => {
    return getInstallmentPrice(months) / months;
  };

  return (
    <main className="payment-main-container">
      <div className="payment-stepper-header">
        <div className="flex-items-center-gap-2">
          <div className="payment-stepper-circle-green">
            <span className="material-symbols-outlined !text-[14px]">check</span>
          </div>
          <span className="payment-stepper-label-secondary">Teslimat</span>
        </div>
        <div className="payment-stepper-line"></div>
        <div className="flex-items-center-gap-2">
          <div className="payment-stepper-circle-primary">2</div>
          <span className="payment-stepper-label-primary">Ödeme</span>
        </div>
      </div>

      <section className="payment-saved-cards-section">
        <div className="payment-saved-cards-header">
          <h2 className="payment-saved-cards-title">Kayıtlı Kartlarım</h2>
          <button className="payment-saved-cards-edit-btn">Düzenle</button>
        </div>
        <div className="payment-saved-cards-scroll no-scrollbar">
          <div
            onClick={() => handleSavedCardSelect('card1')}
            className="payment-card-visual-dark"
          >
            <div className="payment-card-visual-row1">
              <span className="payment-card-visual-brand">VISA</span>
              <span className="material-symbols-outlined payment-card-visual-contactless">contactless</span>
            </div>
            <div className="payment-card-visual-number-box">
              <p className="payment-card-visual-number-label">Kart Numarası</p>
              <p className="payment-card-visual-number-val">**** **** **** 4582</p>
            </div>
            <div className="payment-card-visual-expiry-box">
              <p className="payment-card-visual-expiry-label">SKT</p>
              <p className="payment-card-visual-expiry-val">08/28</p>
            </div>
            {paymentDetails.selectedSavedCardId === 'card1' && (
              <div className="payment-card-visual-select-box">
                <div className="payment-card-visual-checked-circle">
                  <span className="material-symbols-outlined payment-card-visual-checked-icon">check_circle</span>
                </div>
              </div>
            )}
          </div>

          <div
            onClick={() => handleSavedCardSelect('card2')}
            className="payment-card-visual-blue"
          >
            <div className="payment-card-visual-row1">
              <span className="payment-card-visual-mastercard">mastercard</span>
              <span className="material-symbols-outlined payment-card-visual-contactless">contactless</span>
            </div>
            <div className="payment-card-visual-number-box">
              <p className="payment-card-visual-number-label">Kart Numarası</p>
              <p className="payment-card-visual-number-val">**** **** **** 9910</p>
            </div>
            <div className="payment-card-visual-expiry-box">
              <p className="payment-card-visual-expiry-label">SKT</p>
              <p className="payment-card-visual-expiry-val">11/27</p>
            </div>
            {paymentDetails.selectedSavedCardId === 'card2' && (
              <div className="payment-card-visual-select-box">
                <div className="payment-card-visual-checked-circle">
                  <span className="material-symbols-outlined payment-card-visual-checked-icon">check_circle</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="payment-new-card-form">
        <h2 className="payment-new-card-title">Veya Yeni Kart Kullan</h2>
        <div className="payment-new-card-fields">
          <div>
            <label className="payment-input-label">Kart Sahibi Adı Soyadı</label>
            <input
              type="text"
              value={paymentDetails.cardHolder}
              onChange={(e) => handleInputChange('cardHolder', e.target.value)}
              className="payment-input-field"
              placeholder="John Doe (Hata testi için 'Hata' yazabilirsiniz)"
            />
          </div>
          <div>
            <label className="payment-input-label">Kart Numarası</label>
            <div className="relative-flex-items-center">
              <input
                type="text"
                value={paymentDetails.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                className="payment-input-field-tracking"
                placeholder="0000 0000 0000 0000"
              />
              <div className="payment-input-card-logo-box">
                <span className="payment-input-icon-custom">credit_card</span>
              </div>
            </div>
          </div>
          <div className="payment-grid-2-col">
            <div>
              <label className="payment-input-label">Son Kullanma Tarihi</label>
              <input
                type="text"
                value={paymentDetails.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                className="payment-input-field"
                placeholder="AA/YY"
              />
            </div>
            <div>
              <label className="payment-input-label">CVV</label>
              <div className="relative-flex-items-center">
                <input
                  type="password"
                  value={paymentDetails.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  className="payment-input-field"
                  placeholder="***"
                />
                <span className="material-symbols-outlined payment-input-card-help-icon">help</span>
              </div>
            </div>
          </div>
          <div className="payment-checkbox-row">
            <input
              type="checkbox"
              id="save-card"
              checked={paymentDetails.saveCard}
              onChange={(e) => updatePayment({ saveCard: e.target.checked })}
              className="payment-checkbox-input cursor-pointer"
            />
            <label htmlFor="save-card" className="payment-checkbox-label cursor-pointer">Kartımı sonraki alışverişler için kaydet</label>
          </div>
        </div>
      </section>

      <section className="payment-installment-section">
        <div className="payment-installment-header">
          <h2 className="payment-installment-title">Taksit Seçenekleri</h2>
        </div>
        <div className="payment-installment-list">
          <div
            onClick={() => setInstallment(1)}
            className={installment === 1 ? "payment-installment-row-active" : "payment-installment-row"}
          >
            <div className="payment-installment-info">
              <p className="payment-installment-name">Tek Çekim</p>
              <p className="payment-installment-desc">Ek komisyon ücreti yansıtılmaz</p>
            </div>
            <div className="payment-installment-price-box">
              <p className={installment === 1 ? "payment-installment-price-active" : "payment-installment-price"}>
                {getInstallmentPrice(1).toLocaleString('tr-TR')} TL
              </p>
            </div>
            <div className="payment-installment-selector-box">
              <div className={installment === 1 ? "payment-installment-circle-active" : "payment-installment-circle"}>
                {installment === 1 && <div className="payment-installment-dot-active"></div>}
              </div>
            </div>
          </div>

          <div
            onClick={() => setInstallment(3)}
            className={installment === 3 ? "payment-installment-row-active" : "payment-installment-row"}
          >
            <div className="payment-installment-info">
              <p className="payment-installment-name">3 Taksit</p>
              <p className="payment-installment-desc">{getMonthlyPrice(3).toLocaleString('tr-TR')} TL x 3</p>
            </div>
            <div className="payment-installment-price-box">
              <p className={installment === 3 ? "payment-installment-price-active" : "payment-installment-price"}>
                {getInstallmentPrice(3).toLocaleString('tr-TR')} TL
              </p>
            </div>
            <div className="payment-installment-selector-box">
              <div className={installment === 3 ? "payment-installment-circle-active" : "payment-installment-circle"}>
                {installment === 3 && <div className="payment-installment-dot-active"></div>}
              </div>
            </div>
          </div>

          <div
            onClick={() => setInstallment(6)}
            className={installment === 6 ? "payment-installment-row-active" : "payment-installment-row"}
          >
            <div className="payment-installment-info">
              <p className="payment-installment-name">6 Taksit (%5 Farkla)</p>
              <p className="payment-installment-desc">{getMonthlyPrice(6).toLocaleString('tr-TR')} TL x 6</p>
            </div>
            <div className="payment-installment-price-box">
              <p className={installment === 6 ? "payment-installment-price-active" : "payment-installment-price"}>
                {getInstallmentPrice(6).toLocaleString('tr-TR')} TL
              </p>
            </div>
            <div className="payment-installment-selector-box">
              <div className={installment === 6 ? "payment-installment-circle-active" : "payment-installment-circle"}>
                {installment === 6 && <div className="payment-installment-dot-active"></div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-badges-section">
        <div className="payment-badges-row">
          <div className="payment-badge-item">
            <span className="payment-badge-icon">verified_user</span>
            <span className="payment-badge-label">SSL Secure</span>
          </div>
          <div className="payment-badge-item">
            <span className="payment-badge-icon">shield_lock</span>
            <span className="payment-badge-label">3D Secure</span>
          </div>
          <div className="payment-badge-item">
            <span className="payment-badge-icon">encrypted</span>
            <span className="payment-badge-label">Şifreli</span>
          </div>
        </div>
        <p className="payment-badge-desc">Ödeme bilgileriniz şifrelenir ve sunucularımızda kesinlikle okunabilir formatta saklanmaz.</p>
      </section>

      <footer className="payment-footer">
        <div className="payment-footer-price-box">
          <span className="payment-footer-price-label">Toplam Tutar</span>
          <span className="payment-footer-price">{getInstallmentPrice(installment).toLocaleString('tr-TR')} TL</span>
        </div>
        <button onClick={handleCompleteOrder} className="payment-footer-btn-submit">
          <span>Ödemeyi Tamamla</span>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </footer>
    </main>
  );
};

export default Payment;
