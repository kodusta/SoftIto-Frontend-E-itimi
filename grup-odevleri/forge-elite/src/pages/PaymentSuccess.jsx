import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <main className="min-h-[80vh] pt-8 pb-stack-lg px-container-margin-mobile flex flex-col items-center justify-center relative">
        <div className="w-full max-w-2xl bg-surface-container rounded-xl p-8 relative z-10 border border-outline-variant shadow-lg animate-success">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center success-checkmark-glow">
              <span className="material-symbols-outlined text-on-primary-container text-5xl">check_circle</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-2">
              Ödemeniz Başarıyla Tamamlandı!
            </h1>
            <p className="text-on-surface-variant font-body-md">Randevunuz onaylandı ve takviminize eklendi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-surface-container-high rounded-lg border border-outline-variant/30">
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Hizmet</p>
              <p className="font-headline-md text-body-lg text-primary">Elite Performans Eğitimi</p>
            </div>
            <div className="p-4 bg-surface-container-high rounded-lg border border-outline-variant/30">
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Eğitmen</p>
              <p className="font-headline-md text-body-lg text-primary">Caner Demir</p>
            </div>
            <div className="p-4 bg-surface-container-high rounded-lg border border-outline-variant/30">
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">Tarih & Saat</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-fixed-dim text-sm">calendar_month</span>
                <p className="font-body-md text-primary">15 Ekim 2024, 18:30</p>
              </div>
            </div>
            <div className="p-4 bg-surface-container-high rounded-lg border border-outline-variant/30">
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase mb-1">İşlem No</p>
              <p className="font-body-md text-primary font-mono">#FE-8842-X1</p>
            </div>
          </div>

          <div className="bg-primary-container/10 border border-primary-container/20 p-4 rounded-xl flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary-container">star</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase">Elite Puan Kazanıldı</p>
              <p className="text-on-surface font-body-md">+250 Puan hesabınıza eklendi.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button 
              className="flex-1 bg-primary-container text-on-primary-container py-4 rounded-lg font-display-lg text-body-md font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all glow-primary" 
              onClick={() => navigate('/booking')}
            >
              <span className="material-symbols-outlined">event_note</span>
              Randevularım
            </button>
            <button 
              className="flex-1 bg-transparent border-2 border-primary-container text-primary py-4 rounded-lg font-display-lg text-body-md font-bold uppercase tracking-wider hover:bg-primary-container/10 active:scale-95 transition-all"
              onClick={() => navigate('/')}
            >
              Anasayfaya Dön
            </button>
          </div>
        </div>

        <div className="mt-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div 
            className="w-48 h-32 rounded-lg bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZXyyxOQ5CTLg8M0A1vTRzrHexOMxmyV3Q4v_ALdUX4-5YTeP_yjMx_dI3Pe_a77ECUssJ8JERMjuxailmjiDSL64NT-qmcpvc2Po-kqWCbQe8U2HB9pFlY-h_QB2Hv-_fTwNDCWCIQVAmne_xrJlOUbw4In4nhjzxdTws6DLXHfUCceRugXf55lJIo-f8gcIAon9IUXTXgi9G3eVuxMSR_IqZwCCeIwWQutxGCVGTjNkCLO45tPAZ6E_dpivfL3i2ol6ofBp6yYE')` }}
          />
        </div>
      </main>
    </div>
  );
}
