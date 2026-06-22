import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();
  const [card, setCard] = useState({ name: '', number: '', expiry: '', cvv: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInput = (e) => {
    let { id, value } = e.target;
    const nameMap = {
      'card-name': 'name',
      'card-number': 'number',
      'card-expiry': 'expiry',
      'card-cvv': 'cvv'
    };
    const key = nameMap[id];

    if (key === 'number') {
      value = value.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || '';
    } else if (key === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else if (key === 'cvv') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setCard({ ...card, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card.name || !card.number || !card.expiry || !card.cvv) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (card.number.includes('0000') || card.number.includes('4000')) {
        navigate('/payment-failure');
      } else {
        navigate('/payment-success');
      }
    }, 2000);
  };

  return (
    <div className="main-content">
      <main className="flex-grow pt-8 pb-stack-lg px-container-margin-mobile">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 space-y-4">
            <section className="space-y-2">
              <h1 className="font-headline-lg text-primary">Ödeme Bilgileri</h1>
              <p className="text-on-surface-variant font-body-md">Güvenli ödeme altyapımız ile işleminizi saniyeler içinde tamamlayın.</p>
            </section>
            <div className="surface-container border border-[#2c2c2c] rounded-xl p-6 space-y-8">
              <div className="relative w-full h-48 rounded-xl bg-gradient-to-br from-primary-container to-on-primary-container p-6 flex flex-col justify-between overflow-hidden glow-primary">
                <div className="relative z-10 flex justify-between items-start">
                  <span className="material-symbols-outlined text-on-primary text-4xl">contactless</span>
                  <span className="font-display-lg text-headline-md text-on-primary opacity-50 italic">ELITE KART</span>
                </div>
                <div className="relative z-10">
                  <div className="text-on-primary font-mono text-xl tracking-widest mb-2">
                    {card.number || '**** **** **** ****'}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-on-primary">
                      <p className="text-[10px] uppercase opacity-70">Kart Sahibi</p>
                      <p className="font-bold uppercase">{card.name || 'AHMET YILMAZ'}</p>
                    </div>
                    <div className="text-on-primary text-right">
                      <p className="text-[10px] uppercase opacity-70">Son Kullanma</p>
                      <p className="font-bold">{card.expiry || 'AA/YY'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Kart Üzerindeki İsim</label>
                  <input 
                    className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant text-primary py-3 focus:ring-0 transition-all font-mono" 
                    id="card-name" 
                    placeholder="AHMET YILMAZ" 
                    required 
                    type="text"
                    value={card.name}
                    onChange={handleInput}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Kart Numarası (FAIL simülasyonu için 0000 girin)</label>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant text-primary py-3 focus:ring-0 transition-all font-mono" 
                      id="card-number" 
                      maxLength="19" 
                      placeholder="0000 0000 0000 0000" 
                      required 
                      type="text"
                      value={card.number}
                      onChange={handleInput}
                    />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2 pr-2">
                      <span className="material-symbols-outlined text-on-surface-variant">credit_card</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Son Kullanma</label>
                    <input 
                      className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant text-primary py-3 focus:ring-0 transition-all font-mono" 
                      id="card-expiry" 
                      maxLength="5" 
                      placeholder="AA / YY" 
                      required 
                      type="text"
                      value={card.expiry}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">CVV</label>
                    <input 
                      className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant text-primary py-3 focus:ring-0 transition-all font-mono" 
                      id="card-cvv" 
                      maxLength="3" 
                      placeholder="***" 
                      required 
                      type="password"
                      value={card.cvv}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <button 
                  className="w-full bg-primary-container text-on-primary-container font-headline-md py-4 rounded-lg flex items-center justify-center gap-3 hover:opacity-90 active:scale-95 transition-all glow-primary mt-6" 
                  type="submit"
                  disabled={isProcessing}
                >
                  <span className="material-symbols-outlined">
                    {isProcessing ? 'sync' : 'lock'}
                  </span>
                  {isProcessing ? 'İşleniyor...' : 'Ödemeyi Tamamla'}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="surface-container border border-[#2c2c2c] rounded-xl p-6 space-y-4">
                <h2 className="font-headline-md text-headline-md text-primary">Sipariş Özeti</h2>
                <div className="flex items-center gap-4 py-4 border-b border-outline-variant/30">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDG3UyBjdpmfuXNUo6dzfTkPiAQvF6Ql6OiTcLTDM9_TijbKnDKOQZhX1yTuP4nVagGAx6WYkFIhqVLD0GTBcX5eAw0LpkZP0zRj5dVJEjsLmCFpfG-DCv7ce9bWHiuJ102lNMnK7a1QsDR1spmz2U4ns3oyGbe8ofA1aBfe0029l1xqUeyzcVqFR_px7ic5RFtcwYJ4TIPlqd2cj0-tz8pwgMGTtNguE6IlohvpFxlNAyY6noAGh1j57VvNnm1KLrrvnfiEzy77o" 
                      alt="Coaching" 
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-primary">Elite Performans Koçluğu</h3>
                    <p className="text-label-sm text-on-surface-variant">12 Aylık Üyelik</p>
                    <p className="text-primary-fixed font-bold mt-1">1.250,00 TL / ay</p>
                  </div>
                </div>
                <div className="space-y-2 py-2">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Ara Toplam</span>
                    <span>1.250,00 TL</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>KDV (%20)</span>
                    <span>250,00 TL</span>
                  </div>
                  <div className="flex justify-between text-primary font-bold text-lg pt-2 border-t border-outline-variant">
                    <span>Toplam</span>
                    <span>1.500,00 TL</span>
                  </div>
                </div>
                <div className="bg-surface-container-highest p-4 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary-fixed">verified</span>
                  <p className="text-label-sm text-on-surface-variant leading-relaxed">Üyeliğiniz anında aktifleşir ve tüm eğitim modüllerine erişim sağlarsınız.</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span className="font-label-sm text-label-sm">SSL GÜVENLİ</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">payment</span>
                  <span className="font-label-sm text-label-sm">VISA / MASTERCARD</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="font-label-sm text-label-sm">256-BIT ŞİFRELEME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
