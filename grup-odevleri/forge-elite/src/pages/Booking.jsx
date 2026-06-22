import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SERVICES = [
  { id: 'strength', title: 'Elite Güç', duration: '60 Dakika', price: 450, desc: 'Maksimum güç ve hipertrofi odaklı özel koçluk.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAynoQv3ttSnjHrnnoDJpUOheL6SE0UnceMc2en84_4r3Sjq9Bt1JMMlv6oJL9Da1tLI_bOg1kPtku1EdPa2D5DNne_oYDapJ6JGyk9wN-zFsFPchxTv95RZBR_iMtSwFRzXsAZ-8XDnqppmkubSmtn94R3OwbxIOY-9tv-jBqYmXHhBhwzLWudbsvXloD2708DxY-S-IrPhTCKJOyIOLAqjA90vrYimo307SMTzRXvDI_bol_5Nc98NSuJ7Glm6MyQpu6SBP2DxAA' },
  { id: 'mobility', title: 'Kinetik Mobilite', duration: '45 Dakika', price: 380, desc: 'Esneklik, eklem sağlığı ve fonksiyonel hareket.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6CpkdrtixDfZglvfYfGK9iFhH5z98TTAqXZaftsP94ClDGOmfZmoXuZX9L__TFqDGBISXm07W1mX5o8GXWj-E6rss7cWPc8LOi4MVxXqw2fm1XKXAE2iR2ZX-hX1blxKU4bUuUFLz6YfKDrGKchIIg5Ph1XFcgbNJvczYXDqUjcdq915wCjWk3uMEnii7LXkqyLNLTTKdqX_JIBC-14U79YpRtlHjHibwYnitTx_h9xGMSd-QRpDmlAw2TZpWaHxPyCYKBwhlcBA' },
  { id: 'speed', title: 'Hız ve Çeviklik', duration: '60 Dakika', price: 500, desc: 'Atletik performans, patlayıcı güç ve hız.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnvvNDIoc3Dy3lyPjklWDkQ2msIMVNeQeNzNYy2hddwYyPYCpeiccEuAXfyFB9G8RJUUB3D5a_d0Vxwy9923azKovmy0T4pkL9MAPqO9XkTBKaJ5TLzT3UIaagdW-NNLtSsDb14KbRtwgY2gK2OU7vZEEt13aeq80QEhbbC7H2P7h-9DY239OorXz0jSkYtxF7WQPBNxGsQ_lvZCe0HEfvK6RgQQ9W7m6sQAN7uJVEnYeySDQwze-WmgrVQAoulrvzRDaI29CQ5cY' },
  { id: 'recovery', title: 'Profesyonel Toparlanma', duration: '30 Dakika', price: 320, desc: 'Yoğun antrenman sonrası manuel terapi ve dinlenme.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUW3WZqfskS1xG5t3ennRVid3Zej6J7Xeq5cch3nNVzOEW75YCq8dbdq6iY2c2JEssw4S2F7K5kN3FjjMHQKrOyyncl8Y92G4zFBoo19hgBaRdzLtPlheISA4PU48V57zu77DaIxBXMxblv-YxDCslDSyfg6cM7CnvIYqwF8AJpibXVjIvTDT7elqZHgR2GYT2YcZrySAcgXnSF9FQDt8L0uKe1_FiN5YzJWH4PDmJUpWhEX76uiuXGvnODVS4VK0O3C5KY90wKoo' }
];

const TIME_SLOTS = ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00', '18:30', '20:00'];

export default function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  const preselectedPlan = location.state?.planName ? {
    title: location.state.planName,
    price: parseInt(location.state.price.replace('$', '')) * 30,
    duration: 'Aylık Üyelik'
  } : null;

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedPlan);
  const [selectedDay, setSelectedDay] = useState(4);
  const [selectedTime, setSelectedTime] = useState('14:00');
  const [cardInfo, setCardInfo] = useState({ name: '', number: '', expiry: '', cvc: '' });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleNextStep = () => {
    if (!selectedService) {
      alert('Lütfen devam etmek için bir hizmet seçin.');
      return;
    }
    setStep(2);
  };

  const handleCardInput = (e) => {
    let { name, value } = e.target;
    if (name === 'number') {
      value = value.replace(/\D/g, '').match(/.{1,4}/g)?.join(' ') || '';
    } else if (name === 'expiry') {
      value = value.replace(/\D/g, '');
      if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
    } else if (name === 'cvc') {
      value = value.replace(/\D/g, '').substring(0, 3);
    }
    setCardInfo({ ...cardInfo, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardInfo.name || !cardInfo.number || !cardInfo.expiry || !cardInfo.cvc) {
      alert('Lütfen tüm ödeme alanlarını doldurun.');
      return;
    }

    if (cardInfo.number.includes('4000') || cardInfo.number.includes('0000')) {
      navigate('/payment-failure');
    } else {
      navigate('/payment-success');
    }
  };

  return (
    <div className="main-content">
      <main className="flex-grow pt-8 pb-stack-lg px-container-margin-mobile max-w-5xl mx-auto w-full">
        <div className="mb-stack-lg">
          <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex flex-col items-center gap-2">
              <div 
                className={step >= 1 ? 'w-10 h-10 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container font-bold step-active' : 'w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-on-surface-variant font-bold'}
              >
                {step > 1 ? <span className="material-symbols-outlined">check</span> : '1'}
              </div>
              <span className={step >= 1 ? 'font-label-sm text-label-sm text-primary' : 'font-label-sm text-label-sm text-on-surface-variant'}>
                Hizmet
              </span>
            </div>
            <div className="flex-grow h-[2px] bg-outline-variant mx-4 mt-[-20px]" />
            <div className="flex flex-col items-center gap-2">
              <div 
                className={step >= 2 ? 'w-10 h-10 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container font-bold step-active' : 'w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-on-surface-variant font-bold'}
              >
                {step > 2 ? <span className="material-symbols-outlined">check</span> : '2'}
              </div>
              <span className={step >= 2 ? 'font-label-sm text-label-sm text-primary' : 'font-label-sm text-label-sm text-on-surface-variant'}>
                Zaman
              </span>
            </div>
            <div className="flex-grow h-[2px] bg-outline-variant mx-4 mt-[-20px]" />
            <div className="flex flex-col items-center gap-2">
              <div 
                className={step === 3 ? 'w-10 h-10 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container font-bold step-active' : 'w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-on-surface-variant font-bold'}
              >
                3
              </div>
              <span className={step === 3 ? 'font-label-sm text-label-sm text-primary' : 'font-label-sm text-label-sm text-on-surface-variant'}>
                Ödeme
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {step === 1 && (
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-headline-lg text-headline-lg mb-4">Performans Hedefini Seç</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((s) => (
                  <button 
                    key={s.id}
                    className={selectedService?.id === s.id ? 'group flex flex-col text-left glass-panel rounded-xl overflow-hidden border-2 border-primary-container bg-primary-container/5 transition-all' : 'group flex flex-col text-left glass-panel rounded-xl overflow-hidden hover:border-primary-container transition-all'}
                    onClick={() => handleServiceSelect(s)}
                  >
                    <div className="h-32 w-full relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                        style={{ backgroundImage: `url('${s.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline-md text-headline-md text-primary mb-1">{s.title}</h3>
                      <p className="font-body-md text-on-surface-variant text-sm mb-4">{s.desc}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-primary-container">{s.duration}</span>
                        <span className="font-bold text-primary">₺{s.price}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-headline-lg text-headline-lg mb-4">Zaman Dilimini Belirle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-xl border border-outline-variant">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-headline-md text-primary">Ekim 2024</h4>
                    <div className="flex gap-2">
                      <button className="p-1 hover:text-primary-container"><span className="material-symbols-outlined">chevron_left</span></button>
                      <button className="p-1 hover:text-primary-container"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    <span className="text-on-surface-variant font-label-sm">Pt</span>
                    <span className="text-on-surface-variant font-label-sm">Sa</span>
                    <span className="text-on-surface-variant font-label-sm">Ça</span>
                    <span className="text-on-surface-variant font-label-sm">Pe</span>
                    <span className="text-on-surface-variant font-label-sm">Cu</span>
                    <span className="text-on-surface-variant font-label-sm">Ct</span>
                    <span className="text-on-surface-variant font-label-sm">Pz</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    <div className="p-2 text-on-surface-variant/30">29</div>
                    <div className="p-2 text-on-surface-variant/30">30</div>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((day) => (
                      <button 
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={selectedDay === day ? 'p-2 rounded-lg bg-primary-container text-on-primary-container font-bold' : 'p-2 rounded-lg hover:bg-surface-container-highest'}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-headline-md text-primary">Uygun Saatler</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((time) => {
                      const isDisabled = time === '18:30';
                      return (
                        <button 
                          key={time}
                          disabled={isDisabled}
                          onClick={() => setSelectedTime(time)}
                          className={isDisabled ? 'py-3 px-2 rounded-lg border border-outline-variant text-center font-label-sm opacity-30 cursor-not-allowed' : (selectedTime === time ? 'py-3 px-2 rounded-lg bg-primary-container/20 border border-primary-container text-primary-container font-bold text-center font-label-sm' : 'py-3 px-2 rounded-lg border border-outline-variant hover:border-primary-container transition-colors text-center font-label-sm')}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="lg:col-span-2 space-y-4">
              <div className="glass-panel p-6 rounded-xl border border-primary-container/30">
                <div className="flex items-center gap-3 text-primary-container mb-4">
                  <span className="material-symbols-outlined">lock</span>
                  <span className="font-label-sm font-bold">GÜVENLİ ÖDEME (Hata simülasyonu için kart numarasına 0000 girin)</span>
                </div>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant uppercase font-bold">Kart Sahibi</label>
                    <input 
                      className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-primary transition-colors py-2" 
                      placeholder="Ad Soyad" 
                      type="text"
                      name="name"
                      value={cardInfo.name}
                      onChange={handleCardInput}
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-on-surface-variant uppercase font-bold">Kart Numarası</label>
                    <input 
                      className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-primary transition-colors py-2" 
                      placeholder="0000 0000 0000 0000" 
                      type="text"
                      name="number"
                      value={cardInfo.number}
                      onChange={handleCardInput}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-on-surface-variant uppercase font-bold">Son Kullanma</label>
                      <input 
                        className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-primary transition-colors py-2" 
                        placeholder="AA/YY" 
                        type="text"
                        name="expiry"
                        value={cardInfo.expiry}
                        onChange={handleCardInput}
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-on-surface-variant uppercase font-bold">CVC</label>
                      <input 
                        className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-container focus:ring-0 text-primary transition-colors py-2" 
                        placeholder="***" 
                        type="password"
                        name="cvc"
                        value={cardInfo.cvc}
                        onChange={handleCardInput}
                        required
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full mt-6 py-4 rounded-full bg-primary-container text-on-primary text-center font-bold hover:opacity-90 transition-all glow-primary"
                  >
                    ÖDEMEYİ TAMAMLA
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="glass-panel p-6 rounded-xl border border-outline-variant">
              <h3 className="font-headline-md text-primary mb-6">Randevu Özeti</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Hizmet</span>
                  <span className="text-right text-primary font-bold">
                    {selectedService ? selectedService.title : 'Seçilmedi'}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Tarih</span>
                  <span className="text-right text-primary font-bold">{selectedDay} Ekim 2024</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-on-surface-variant font-label-sm uppercase tracking-wider">Saat</span>
                  <span className="text-right text-primary font-bold">{selectedTime}</span>
                </div>
                <div className="pt-4 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-primary font-bold">Toplam</span>
                  <span className="text-headline-md text-primary-container">
                    {selectedService ? `₺${selectedService.price}` : '₺0.00'}
                  </span>
                </div>
              </div>

              {step === 1 && (
                <div>
                  <button 
                    onClick={handleNextStep}
                    className="w-full py-4 rounded-full bg-primary-container text-on-primary text-center font-bold tracking-tight hover:opacity-90 active:scale-95 transition-all glow-primary"
                  >
                    DEVAM ET
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full py-4 rounded-full bg-primary-container text-on-primary text-center font-bold tracking-tight hover:opacity-90 active:scale-95 transition-all glow-primary"
                  >
                    ÖDEMEYE GEÇ
                  </button>
                  <button 
                    onClick={() => setStep(1)}
                    className="w-full py-3 rounded-full border border-outline-variant text-primary text-center font-bold hover:bg-surface-container transition-colors"
                  >
                    Geri Dön
                  </button>
                </div>
              )}

              {step === 3 && (
                <div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full py-3 rounded-full border border-outline-variant text-primary text-center font-bold hover:bg-surface-container transition-colors"
                  >
                    Geri Dön
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
