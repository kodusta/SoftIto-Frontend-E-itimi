import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Status() {
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(location.state?.success ?? true);

  const booking = location.state?.booking || {
    date: '15 Temmuz 2026',
    time: '11:00 — 12:00',
    projectType: 'Konut Tasarımı'
  };

  return (
    <main className="hero-section">
      <div className="status-demo-control">
        <button
          onClick={() => setIsSuccess(true)}
          className={isSuccess ? 'status-demo-btn-active' : 'status-demo-btn-inactive'}
        >
          BAŞARILI EKRANI
        </button>
        <button
          onClick={() => setIsSuccess(false)}
          className={!isSuccess ? 'status-demo-btn-active' : 'status-demo-btn-inactive'}
        >
          HATA EKRANI
        </button>
      </div>

      <div className="status-screen-grid">
        {isSuccess ? (
          <div className="status-card-grid">
            <div className="status-visual-anchor">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx8NLGIJYxG5HqsIZwGZVkduO_FIRzT7m6AH8r5JCnrG-5NKTuTjYZuaseVj_RI-De88tqL0H9LPN1T-AszU6hlNTTgdJWzMb7AiFOeAa4xeeuV0aTuV7SfWjaJN0ojiTobRDdVwy87F4M21RoGJEAiv1QNX0SpeS_zItpu4qX6LBiHOFy0bA3oCWxZx8h5Vx6_Yt536M-s1gLaoooBpgze57cIBDPLhs0CGyUKizAmbqlLOKYXMuXMHzZPVJZm-RdhQk7N6-6SzLZ" alt="Monolith" className="arch-image-zoom" />
              <div className="status-visual-overlay"></div>
            </div>
            <div className="status-content-area">
              <div className="status-badge-row">
                <span className="material-symbols-outlined status-badge-icon-success">check_circle</span>
                <span className="status-badge-label">İŞLEM BAŞARILI</span>
              </div>
              <h2 className="status-title">Rezervasyon Onaylandı.</h2>
              <p className="status-desc">
                Depozito ödemeniz başarıyla alındı. Seans detayları ve video konferans katılım bağlantısı e-posta adresinize gönderildi.
              </p>
              <div className="status-summary-table">
                <div className="status-summary-row">
                  <span className="status-summary-label">REFERANS NO</span>
                  <span className="status-summary-value">AL-29384-X</span>
                </div>
                <div className="status-summary-row">
                  <span className="status-summary-label">ÖDENEN TUTAR</span>
                  <span className="status-summary-value">2.500,00 $</span>
                </div>
                <div className="status-summary-row">
                  <span className="status-summary-label">SEÇİLEN TARİH</span>
                  <span className="status-summary-value">{booking.date} @ {booking.time}</span>
                </div>
                <div className="status-summary-row">
                  <span className="status-summary-label">ÖDEME YÖNTEMİ</span>
                  <span className="status-summary-value">Kredi Kartı</span>
                </div>
              </div>
              <div className="status-actions-row">
                <Link to="/" className="status-action-btn-primary">STÜDYOYA DÖN</Link>
                <button className="status-action-btn-secondary" onClick={() => alert('Dekont indiriliyor...')}>DEKONT İNDİR</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="status-error-card">
            <div className="status-error-icon-box">
              <div className="status-error-icon-wrapper">
                <span className="material-symbols-outlined status-error-icon">error</span>
              </div>
            </div>
            <h2 className="status-error-title">Ödeme Reddedildi.</h2>
            <p className="status-error-desc">
              Depozito ödemeniz banka tarafından reddedildi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
            </p>
            <div className="status-error-log-box">
              <div className="status-error-log-header">
                <span className="material-symbols-outlined status-error-log-icon">terminal</span>
                <div>
                  <span className="status-error-log-label">SİSTEM GÜNLÜĞÜ</span>
                  <p className="status-error-log-text">Hata Kodu 1092: Kart bakiyesi yetersiz veya geçersiz güvenlik kodu.</p>
                </div>
              </div>
            </div>
            <div className="status-error-actions">
              <Link to="/randevu" className="status-error-retry-btn">TEKRAR DENE</Link>
              <Link to="/iletisim" className="status-error-support-btn">DESTEK AL</Link>
            </div>
            <p className="status-error-footer-text">Sorunun devam etmesi durumunda lütfen bankanızla iletişime geçin.</p>
          </div>
        )}
      </div>
    </main>
  );
}
