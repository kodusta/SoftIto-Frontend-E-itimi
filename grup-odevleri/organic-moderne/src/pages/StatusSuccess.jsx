import React from 'react';
import { useNavigate } from 'react-router-dom';

const StatusSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = `BT-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div class="status-page-layout bauhaus-grid">
      <div class="status-card">
        <div class="status-icon-box-success">
          <span class="material-symbols-outlined text-[48px]">check</span>
        </div>
        
        <div>
          <h1 class="status-title">SİPARİŞ ALINDI</h1>
          <p class="status-desc mt-sm">Doğayla uyumlu yaşam alanınız için ilk adım atıldı. Ekolojik paketleme ile en kısa sürede yola çıkacaktır.</p>
        </div>

        <div class="status-details">
          <div class="flex justify-between border-b border-on-background/10 pb-xs">
            <span>Sipariş Kodu</span>
            <span class="font-bold">{orderNumber}</span>
          </div>
          <div class="flex justify-between border-b border-on-background/10 py-xs">
            <span>Ödeme Tipi</span>
            <span>Kredi Kartı</span>
          </div>
          <div class="flex justify-between pt-xs">
            <span>Kargo Durumu</span>
            <span class="text-primary font-bold">Hazırlanıyor</span>
          </div>
        </div>

        <div class="status-btn-row">
          <button class="btn-primary w-full" onClick={() => navigate('/')}>Alışverişe Devam Et</button>
        </div>
      </div>
    </div>
  );
};

export default StatusSuccess;
