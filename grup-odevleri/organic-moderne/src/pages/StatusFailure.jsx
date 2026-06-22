import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatusFailure = () => {
  const navigate = useNavigate();

  return (
    <div class="status-page-layout bauhaus-grid">
      <div class="status-card">
        <div class="status-icon-box-failure">
          <span class="material-symbols-outlined text-[48px] text-background">close</span>
        </div>
        
        <div>
          <h1 class="status-title">ÖDEME BAŞARISIZ</h1>
          <p class="status-desc mt-sm">Bankanız işlemi onaylamadı veya kart bilgilerinizde bir hata mevcut. Lütfen bilgilerinizi kontrol edip tekrar deneyin.</p>
        </div>

        <div class="status-details">
          <div class="flex justify-between border-b border-on-background/10 pb-xs">
            <span>Hata Kodu</span>
            <span class="font-bold">ERR-BANK-500</span>
          </div>
          <div class="flex justify-between border-b border-on-background/10 py-xs">
            <span>Açıklama</span>
            <span>Yetersiz Bakiye veya Geçersiz Kart</span>
          </div>
        </div>

        <div class="status-btn-row">
          <button class="btn-primary w-2/3" onClick={() => navigate('/odeme')}>Tekrar Dene</button>
          <button class="btn-secondary w-1/3" onClick={() => navigate('/sepet')}>Sepete Dön</button>
        </div>
      </div>
    </div>
  );
};

export default StatusFailure;
