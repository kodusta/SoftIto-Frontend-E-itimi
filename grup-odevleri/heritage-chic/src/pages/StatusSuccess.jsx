import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StatusSuccess() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(15);
  const [orderNumber] = useState(() => Math.floor(10000 + Math.random() * 90000));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#E93C37', '#b71319', '#F6F3EF', '#1C191E', '#db322f'];
    const particles = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.02,
        tiltAngle: 0
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

        if (p.y > canvas.height) {
          particles[idx] = {
            x: Math.random() * canvas.width,
            y: -20,
            r: p.r,
            d: p.d,
            color: p.color,
            tilt: p.tilt,
            tiltAngleIncremental: p.tiltAngleIncremental,
            tiltAngle: p.tiltAngle
          };
        }

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <canvas className="success-canvas" ref={canvasRef}></canvas>
      
      <div className="success-main">
        <div className="success-wrap">
          <div className="success-branding">
            <div className="success-circle-wrap">
              <div className="success-deco-1"></div>
              <div className="success-deco-2"></div>
              <div className="success-circle">
                <span className="material-symbols-outlined text-secondary text-5xl">check_circle</span>
              </div>
            </div>
            <h1 className="font-headline-lg text-primary text-4xl">Siparişiniz Alındı!</h1>
            <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mt-4">
              Harika bir seçim yaptınız. Şeflerimiz hemen hazırlıklara başladı. Sıcacık lezzetler yola çıkmak üzere!
            </p>
          </div>

          <div className="progress-wrap">
            <div className="progress-labels">
              <span className="text-xs font-bold">Alındı</span>
              <span className="text-xs font-bold opacity-80">Hazırlanıyor</span>
              <span className="text-xs font-bold opacity-50">Teslime Hazır</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="success-bento-card">
            <div className="form-group">
              <label className="form-label">Sipariş Numarası</label>
              <span className="font-headline-sm text-secondary">#BAC-{orderNumber}</span>
            </div>
            <div className="form-group">
              <label className="form-label">Tahmini Teslimat Süresi</label>
              <span className="font-headline-sm text-primary">30 Dakika</span>
            </div>
          </div>

          <div className="success-gallery">
            <div className="success-gallery-img-wrap group">
              <img className="success-gallery-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM" alt="Kahve barı" />
            </div>
            <div className="success-gallery-img-wrap-lifted group">
              <img className="success-gallery-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg" alt="Taze kruvasanlar" />
            </div>
            <div className="success-gallery-img-wrap group">
              <img className="success-gallery-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo" alt="Sıcak çikolata köşesi" />
            </div>
          </div>

          <div className="success-actions">
            <button className="pagination-btn" onClick={() => navigate('/')}>
              ANASAYFAYA DÖN
            </button>
            <button className="checkout-btn" onClick={() => navigate('/kategoriler')}>
              YENİ SİPARİŞ VER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
