import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StatusFailure() {
  const navigate = useNavigate();

  return (
    <div className="success-main">
      <div className="success-wrap">
        <div className="success-branding">
          <div className="success-circle-wrap">
            <div className="success-circle">
              <span className="material-symbols-outlined text-error text-5xl">error</span>
            </div>
          </div>
          <h1 className="font-headline-lg text-primary text-4xl">Ödeme Başarısız Oldu</h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mt-4">
            Üzgünüz, işleminiz bankanız tarafından onaylanmadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
          </p>
        </div>

        <div className="success-bento-card">
          <div className="form-group">
            <label className="form-label">Olası Sebepler</label>
            <span className="font-headline-sm text-secondary text-sm">Yetersiz bakiye, hatalı kart şifresi veya geçersiz CVC kodu.</span>
          </div>
          <div className="form-group">
            <label className="form-label">Çözüm Yolları</label>
            <span className="font-headline-sm text-primary text-sm">Başka bir kart deneyebilir veya teslimat için "Kapıda Ödeme" seçeneğini kullanabilirsiniz.</span>
          </div>
        </div>

        <div className="success-actions">
          <button className="pagination-btn" onClick={() => navigate('/')}>
            ANASAYFAYA DÖN
          </button>
          <button className="checkout-btn" onClick={() => navigate('/odeme')}>
            ÖDEMEYE GERİ DÖN
          </button>
        </div>
      </div>
    </div>
  );
}
