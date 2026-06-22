import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isPersonalTraining = id === 'personal-training' || !id;

  const handleSelectPlan = (planName, price) => {
    navigate('/booking', { state: { planName, price } });
  };

  return (
    <div className="main-content">
      <section className="relative h-[530px] min-h-[400px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWc5j6VvDL9P32A9FRI-44kjja1MxoVgG2vDkdWJxdAzNM2V9nGPwy1By4YrPmDK6K43TAxOqlnCLvy_bSGxAg8sFc-unt4JTie3LDccPMU3K_-gMLdInSUIW3MSiQSMIJlQYMVuE6i57PgQj19lKhsw9oH3kmK8o8RvoovB3bKcrLaoJ--jj9BxUMuRYQhWiNAokeQY6iVWGQnO0k8yypmYX1B11Nqazl7IUHqwYTDrCklbTI7olXyIG1CYjIAI0lXs7c9icNC88')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end px-container-margin-mobile pb-stack-lg max-w-7xl mx-auto w-full">
          <span className="font-label-sm text-label-sm text-primary-fixed bg-primary-container/20 px-3 py-1 rounded-full w-fit mb-4">
            AYRICALIKLI HİZMET
          </span>
          <h2 className="font-display-lg text-display-lg text-primary uppercase max-w-2xl">
            {isPersonalTraining ? 'Özel Antrenman (PT)' : 'Elit Antrenman'}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-4">
            Seçkin sonuçlar arzulayanlar için hassas şekilde tasarlanmış performans koçluğu.
          </p>
        </div>
      </section>

      <section className="px-container-margin-mobile mt-stack-lg max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 glass-card p-stack-lg rounded-xl flex flex-col justify-center">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6">Potansiyelinizi Yönetin</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Özel Antrenman programımız sadece "spor yapmaktan" ibaret değildir. Vücut mimarisine ve atletik performansa bilimsel bir yaklaşımdır. FORGE ELITE bünyesinde, hareketlerinizi analiz etmek, gücünüzü optimize etmek ve toparlanmanızı hızlandırmak için veri odaklı metodolojiler kullanan Master Antrenörlerimizle sizi eşleştiriyoruz. İster seçkin bir sporcu ister kendini adamış bir profesyonel olun, yolculuğunuz tamamen size özeldir ve misyonumuz her tekrarın değerli olmasını sağlamaktır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="bg-primary-container/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary-fixed">biotech</span>
                </div>
                <div>
                  <h4 className="text-body-md text-primary font-bold">Biyometrik Analiz</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">İlerlemeyi takip etmek ve yükleri ayarlamak için tüm vücut değerlendirmesi.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary-container/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary-fixed">restaurant</span>
                </div>
                <div>
                  <h4 className="text-body-md text-primary font-bold">Elit Beslenme</h4>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Optimal gelişim için kişiselleştirilmiş makro besin rehberliği.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-fixed">star</span>
                <h3 className="font-headline-md text-headline-md text-primary">Faydalar</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-body-md">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">1'e 1 Özel Eğitmen Desteği</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-body-md">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">Kişiye Özel Dönemlendirme</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-body-md">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">Öncelikli Giriş Hakkı</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed text-body-md">check_circle</span>
                  <span className="font-body-md text-body-md text-on-surface">Aylık Vücut Analizleri</span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden h-48 group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA29QOTBcu9GNVaElCbrV_bD96A2gn8ZKAzkBM7LqSjj_6zh2enyyYIEeP13bOyT8bwbl5TVa1qpa_I3Pf_L5vmdV2Jx-Dr7xMc4LD-HGcAGQPQ3uc71zuA9_8HGusCeQeV7SEK1a13yJjAWyP1_RlO_3Awj_qvn0WNtKTWus00v8LN6UduU8JvwtRMyU4or8hu6n8yo51HuJutuoy6JAeUiqmnPHFZyD3RAsdFwq4pyGERaoZ9kCEhQVvec1SKjKx2WtXozlgs2dc')` }}
              />
              <div className="absolute inset-0 bg-background/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-container-margin-mobile mt-stack-lg max-w-7xl mx-auto w-full">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-stack-md text-center">Seçkin Paketler</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col">
            <h4 className="font-headline-md text-headline-md text-primary">Standart Paket</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Yeni başlayanlar için ideal.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-primary">₺1.450</span>
              <span className="text-on-surface-variant font-label-sm">/ay</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Ayda 4 Seans</li>
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Temel Beslenme Planı</li>
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Uygulama Erişimi</li>
            </ul>
            <button 
              onClick={() => handleSelectPlan('Standart Paket', '1450')}
              className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background transition-all"
            >
              Planı Seç
            </button>
          </div>

          <div className="bg-surface-container-highest p-6 rounded-xl border-2 border-primary-fixed flex flex-col relative glow-primary overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-fixed text-on-primary-fixed px-3 py-1 font-label-sm text-[10px] rounded-bl-lg">POPÜLER</div>
            <h4 className="font-headline-md text-headline-md text-primary">Elit Paket</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Ciddi sporcular için.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-primary">₺2.800</span>
              <span className="text-on-surface-variant font-label-sm">/ay</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="font-body-md text-body-md text-primary flex gap-2"><span className="material-symbols-outlined text-primary-fixed">done</span> Ayda 8 Seans</li>
              <li className="font-body-md text-body-md text-primary flex gap-2"><span className="material-symbols-outlined text-primary-fixed">done</span> İleri Biyometrik Analiz</li>
              <li className="font-body-md text-body-md text-primary flex gap-2"><span className="material-symbols-outlined text-primary-fixed">done</span> Özel Beslenme Planı</li>
              <li className="font-body-md text-body-md text-primary flex gap-2"><span className="material-symbols-outlined text-primary-fixed">done</span> Takviye Rehberliği</li>
            </ul>
            <button 
              onClick={() => handleSelectPlan('Elit Paket', '2800')}
              className="w-full py-3 bg-primary-fixed text-on-primary-fixed font-bold rounded-lg hover:opacity-90 transition-all active:scale-95"
            >
              Planı Seç
            </button>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex flex-col">
            <h4 className="font-headline-md text-headline-md text-primary">Pro Ultra Paket</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Sınırsız potansiyel.</p>
            <div className="my-6">
              <span className="text-4xl font-extrabold text-primary">₺4.200</span>
              <span className="text-on-surface-variant font-label-sm">/ay</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Ayda 12 Seans</li>
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Günlük Eğitmen Erişimi</li>
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Yenilenme Terapisi</li>
              <li className="font-body-md text-body-md text-on-surface-variant flex gap-2"><span className="material-symbols-outlined text-sm">done</span> Özel Salon Danışmanlığı</li>
            </ul>
            <button 
              onClick={() => handleSelectPlan('Pro Ultra Paket', '4200')}
              className="w-full py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background transition-all"
            >
              Planı Seç
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-xl border-t border-outline-variant md:hidden z-50">
        <button 
          onClick={() => navigate('/booking')}
          className="w-full py-4 bg-primary-fixed text-on-primary-fixed font-bold rounded-xl flex items-center justify-center gap-2 glow-primary active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">calendar_month</span>
          Randevu Al
        </button>
      </div>

      <div className="hidden md:flex fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => navigate('/booking')}
          className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-bold rounded-full flex items-center justify-center gap-2 glow-primary hover:scale-105 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined">calendar_month</span>
          Randevu Al
        </button>
      </div>
    </div>
  );
}
