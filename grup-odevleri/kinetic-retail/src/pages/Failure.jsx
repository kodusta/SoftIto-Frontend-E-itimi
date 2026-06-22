import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Failure = () => {
  const navigate = useNavigate();
  const { orderResult } = useApp();

  const errorReason = orderResult.reason || "Kartınızda yetersiz bakiye bulunmaktadır. Lütfen bakiye kontrolü yapınız.";

  return (
    <div className="failure-body-layout">
      <main className="failure-main">
        <div className="failure-card">
          <div className="failure-icon-container">
            <div className="failure-icon-ping"></div>
            <div className="failure-icon-box">
              <span className="material-symbols-outlined failure-icon" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
          </div>

          <h1 className="failure-title">Ödeme Başarısız</h1>
          <p className="failure-desc">İşleminiz şu anda gerçekleştirilemedi. Kart bilgilerini kontrol edip tekrar deneyebilirsiniz.</p>

          <div className="failure-reason-card">
            <div className="failure-reason-row">
              <span className="material-symbols-outlined failure-reason-icon">info</span>
              <div>
                <p className="failure-reason-label">Başarısızlık Nedeni</p>
                <p className="failure-reason-val">{errorReason}</p>
              </div>
            </div>
          </div>

          <div className="failure-steps-list">
            <div className="failure-step-row">
              <span className="material-symbols-outlined failure-step-icon">credit_card</span>
              <p className="failure-step-text">Farklı bir kart kullanmayı deneyebilir veya limitinizi kontrol edebilirsiniz.</p>
            </div>
            <div className="failure-step-row">
              <span className="material-symbols-outlined failure-step-icon">verified_user</span>
              <p className="failure-step-text">Lütfen endişelenmeyin, hesabınızdan herhangi bir tahsilat yapılmamıştır.</p>
            </div>
          </div>

          <div className="failure-actions-box">
            <button onClick={() => navigate('/payment')} className="failure-btn-retry">
              <span className="material-symbols-outlined failure-btn-retry-icon">refresh</span>
              Tekrar Dene
            </button>
            <button onClick={() => navigate('/checkout')} className="failure-btn-return">
              Teslimat Bilgilerine Dön
            </button>
          </div>
        </div>

        <div className="failure-help-box">
          <p className="failure-help-text">
            Yardım mı lazım? <span onClick={() => navigate('/contact')} className="failure-help-link">Müşteri Hizmetleri ile İletişime Geçin</span>
          </p>
        </div>
      </main>

      <div className="failure-transaction-footer">
        <p className="failure-transaction-text">İşlem Kimliği (Transaction ID): HB-992837415X</p>
      </div>
    </div>
  );
};

export default Failure;
