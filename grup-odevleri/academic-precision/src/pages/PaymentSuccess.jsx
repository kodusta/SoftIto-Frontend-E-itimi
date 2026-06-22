import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const items = [];
    const colors = ['#24389c', '#33a0fd', '#9ecaff', '#cacfff', '#4355b9'];
    for (let i = 0; i < 40; i++) {
      items.push({
        id: i,
        left: Math.random() * 100 + 'vw',
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: (Math.random() * 2 + 2) + 's',
        delay: (Math.random() * 1.5) + 's',
        rotation: `rotate(${Math.random() * 360}deg)`
      });
    }
    setConfetti(items);
  }, []);

  return (
    <main className="success-layout">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {confetti.map((c) => (
          <div 
            key={c.id} 
            className="absolute w-2 h-2 rounded-sm" 
            style={{
              left: c.left,
              backgroundColor: c.color,
              animation: `confetti-fall ${c.duration} ease-in-out ${c.delay} forwards`,
              transform: c.rotation,
              top: '-10px'
            }}
          />
        ))}
      </div>

      <div className="success-container">
        <div className="success-badge">
          <svg className="success-icon-svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <h2 className="success-title">Ödeme Başarılı</h2>
        <p className="success-desc">Öğrenimin geleceğine hoş geldiniz. İşleminiz başarıyla tamamlandı.</p>

        <div className="success-order-box">
          <div className="success-order-header">
            <span className="success-order-label">SİPARİŞ NUMARASI</span>
            <span className="success-order-val">#EDU-88294-XP</span>
          </div>
          <div className="success-item-row">
            <div className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyaEnp8dv1yEob730j0jpyFs6JW8xBeVlB16YxCBCOThMriHqsdeF6gyzN6GEo3fy8-23kqgIuUDUwYXNOL94xstSrWq7td5bebghK1i8cLqFNbKWcsAo0j8q0Uxs2YTNT7-fk3kx6r9IBuc9WGQUIHZsuWQb0E-5KNDCC82e8e2880aWciBVPUuZWD0xrA1n861i6weBlL7XPEvB43TBU-2Y2I5G939Ocrb7GAXlL1UddXx2Fwkci7pnO0atpeAB_hWH4wNyDL-OL')" }}></div>
            <div className="flex flex-col">
              <span className="success-item-name">Gelişmiş Kullanıcı Arayüzü Tasarımı</span>
              <span className="success-item-access">Kurs Erişimi: Sınırsız</span>
            </div>
          </div>
        </div>

        <button className="success-btn" onClick={() => navigate('/profil')}>
          Öğrenmeye Başla
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button className="success-receipt-btn" onClick={() => alert('Makbuz PDF olarak indiriliyor...')}>Makbuzu Görüntüle</button>
      </div>

      <div className="success-support-grid">
        <div className="success-support-card">
          <span className="material-symbols-outlined success-support-icon">lightbulb</span>
          <div className="flex flex-col">
            <span className="success-support-title">Sıradaki Adım</span>
            <span className="success-support-desc">Size özel kurs önerileri almak için profilinizi tamamlayın.</span>
          </div>
        </div>
        <div className="success-support-card">
          <span className="material-symbols-outlined success-support-icon">group</span>
          <div className="flex flex-col">
            <span className="success-support-title">Topluluk</span>
            <span className="success-support-desc">Özel Discord kanalımızda 5.000'den fazla öğrenciye katılın.</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
