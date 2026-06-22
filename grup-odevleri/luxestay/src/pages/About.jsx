import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <main>
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBK2_-bmPk5Nhe0HrEzZiVG59XOoGqSuWawwf9FI40IcRJ0Yq_mrR7dLrS77IKeR4CihlD0aky4Vjz2REVtoQicaBvT2zfenftP9y8MBD1pheSPjLij1bI69S94rz35F7RU688Y4qdQ8OHESUguBDFpbL0yyDHhgWeKkUNvSKb3W5vBDEDMcz9Im1sGiE2SoiiMWTRswUGQqP8dh0RftNySGgNZU4_qdSsNkaELow9dOhGbMrD_mbtDZiqEAOOHfs_bcyQ4ZV5jxw4I')` }}
          />
          <div className="absolute inset-0 bg-midnight-navy/50" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile text-snow-white">
          <h1 className="font-headline-xl text-headline-xl mb-4">LuxeStay Ayrıcalığı</h1>
          <p className="max-w-2xl mx-auto font-body-lg text-body-lg">
            2012'den beri seyahat deneyimini lüks, konfor ve en son teknoloji ile yeniden şekillendiriyoruz.
          </p>
        </div>
      </section>

      <section className="py-20 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-outline-variant shadow-lg">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBySO_LELBx5Zh2LHCIqHnOb1NBRpqMhOWhMikkR7Q_BWRU1DEKe-JuizFeOjflp_f3Hz_xHVBDMv5zawO5U5sDwkGczlIKPzfhgYnBjKleRSACa1M7JsojOlfsjG-4ekD7zLR7m_MBxdBNwW3VjUYP6o1lWSlS-2b_jnXSG49K5FFv4me3P1ramgLObxERGp_GADnwIsxJm2QPmwGKYNDuPMk8VZW3ye-U9pM2ECTcIynQdA_SPHLFFjNhI_qIAYNLIUOwk9vpflh')` }}
            />
          </div>
          <div className="space-y-6">
            <span className="text-ocean-blue font-label-md text-label-md uppercase tracking-widest">Köklerimiz</span>
            <h2 className="font-headline-lg text-headline-lg text-midnight-navy">Lüks Seyahatlerin Güvenilir Adresi</h2>
            <p className="font-body-md text-body-md text-slate-gray">
              LuxeStay olarak, misafirlerimize sıradan bir konaklamanın ötesinde, hayat boyu unutamayacakları anlar sunmayı hedefliyoruz. Dünya genelinde en seçkin destinasyonlardaki lüks villaları, resortları ve suitleri doğrudan sizin için küratörlük süzgecimizden geçiriyoruz.
            </p>
            <p className="font-body-md text-body-md text-slate-gray">
              Kusursuz oda içi otomasyondan 24/7 kişisel concierge hizmetine kadar, LuxeStay güvencesiyle planladığınız her tatilde evinizin rahatlığını ve üst düzey otel lüksünü bir arada bulacaksınız.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="flex flex-col">
                <span className="about-metric-number">50+</span>
                <span className="font-label-md text-label-md text-slate-gray uppercase">Destinasyon</span>
              </div>
              <div className="flex flex-col">
                <span className="about-metric-number">10K+</span>
                <span className="font-label-md text-label-md text-slate-gray uppercase">Mutlu Misafir</span>
              </div>
              <div className="flex flex-col">
                <span className="about-metric-number">%98</span>
                <span className="font-label-md text-label-md text-slate-gray uppercase">Memnuniyet</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-12">
            <span className="text-ocean-blue font-label-md text-label-md uppercase tracking-widest">Neden Biz?</span>
            <h2 className="font-headline-lg text-headline-lg text-midnight-navy mt-2">Hizmet Standartlarımız</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-snow-white p-8 rounded-xl border border-outline-variant/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-ocean-blue/10 flex items-center justify-center mx-auto text-ocean-blue">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-midnight-navy">En İyi Fiyat Garantisi</h3>
              <p className="text-slate-gray font-body-sm">Seçkin tesislerimizde gizli ücretler olmadan her zaman en avantajlı fiyatlarla rezervasyon yaparsınız.</p>
            </div>
            <div className="bg-snow-white p-8 rounded-xl border border-outline-variant/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-ocean-blue/10 flex items-center justify-center mx-auto text-ocean-blue">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-midnight-navy">7/24 Concierge Hizmeti</h3>
              <p className="text-slate-gray font-body-sm">Seyahatinizin her anında isteklerinizi karşılamak ve sorunları çözmek için hazır bekleyen profesyonel ekip.</p>
            </div>
            <div className="bg-snow-white p-8 rounded-xl border border-outline-variant/30 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-ocean-blue/10 flex items-center justify-center mx-auto text-ocean-blue">
                <span className="material-symbols-outlined text-3xl">hotel</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-midnight-navy">Özenle Seçilmiş Odalar</h3>
              <p className="text-slate-gray font-body-sm">Tüm konaklama noktalarımız konfor, lüks ve güvenlik denetimlerinden geçerek listelenir.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-margin-desktop max-w-container-max mx-auto text-center space-y-8">
        <h2 className="font-headline-xl text-headline-xl text-midnight-navy">Hemen Rezervasyonunuzu Planlayın</h2>
        <p className="font-body-lg text-body-lg text-slate-gray max-w-xl mx-auto">
          Dünyanın en iyi destinasyonlarında yer alan suitlerimizi keşfedin ve LuxeRewards ayrıcalıklarından hemen faydalanmaya başlayın.
        </p>
        <button onClick={() => navigate('/rooms')} className="bg-sunset-red text-snow-white px-10 py-4 rounded-lg font-headline-md text-headline-md hover:scale-[1.02] transition-transform active:scale-95">
          Odaları İnceleyin
        </button>
      </section>
    </main>
  );
}
