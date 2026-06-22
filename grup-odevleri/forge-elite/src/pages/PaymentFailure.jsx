import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <main className="min-h-[80vh] pt-8 flex flex-col items-center justify-center px-container-margin-mobile">
        <div className="w-full max-w-2xl bg-surface-container rounded-xl border border-outline-variant p-8 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-error/10 blur-[80px] rounded-full" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-6 bg-error-container/20 rounded-full flex items-center justify-center border border-error/30 animate-pulse">
              <span className="material-symbols-outlined text-error text-6xl">
                error
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-2 text-on-surface">
              Ödeme Başarısız Oldu
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-md">
              İşleminiz tamamlanamadı. Hata Detayı: <span className="text-error font-semibold">Kart bakiyesi yetersiz</span>. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
              <button 
                className="group relative flex items-center justify-center gap-2 px-6 py-4 bg-primary-container text-on-primary-container rounded-lg font-headline-md text-body-md font-bold transition-all hover:scale-[1.02] active:scale-95 glow-error"
                onClick={() => navigate('/booking')}
              >
                <span className="material-symbols-outlined">refresh</span>
                Tekrar Dene
              </button>
              <button 
                className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-outline-variant text-primary rounded-lg font-headline-md text-body-md font-bold transition-all hover:bg-surface-variant hover:border-outline active:scale-95"
                onClick={() => navigate('/contact')}
              >
                <span className="material-symbols-outlined">contact_support</span>
                Destek Al
              </button>
            </div>
            <div className="w-full mt-8 p-4 bg-surface-container-low rounded-lg border border-outline-variant/30 text-left">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">İŞLEM NO</span>
                  <span className="font-label-sm text-label-sm text-on-surface">#FE-992384-TX</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">TUTAR</span>
                  <span className="font-label-sm text-label-sm text-on-surface">1,499.00 TL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 max-w-lg w-full h-40 rounded-xl overflow-hidden border border-outline-variant/20">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-KGO34Wv_Ay_nZRVYAgHqGPBg8iIoNDuo-45f2-fBFT95MywrnErKqRKL-3kCEnDaOI5ph_av5REMzMf0kssxR-KNCKpOFQJn5Rr47wyQLU1g9wgpF1Cf_F6WPUAw5vzuAmQwTQIV6z5S_knGy3vh7SnTFAJFYJjzAnV1mOh4c-0xDJGSP3naYTdNmT3fXEDXFyAHR-TWqFk9Plym4qH51lEogbbWMnkjCMuLn74rJyNzxYRgwkG0Kxvl647o2GTFfgNZWqQeiQQ')` }}
          />
        </div>
      </main>
    </div>
  );
}
