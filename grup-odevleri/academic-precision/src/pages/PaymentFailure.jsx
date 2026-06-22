import { useNavigate } from 'react-router-dom';

export default function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <main className="failure-layout">
      <div className="failure-container">
        <div className="failure-icon-wrapper">
          <span className="material-symbols-outlined failure-icon">error</span>
        </div>

        <h2 className="failure-title">Ödeme Başarısız</h2>
        <p className="failure-desc">İşleminizi gerçekleştiremedik. Bu durum yetersiz bakiye veya kart hatasından kaynaklanıyor olabilir.</p>

        <div className="failure-details-box">
          <div className="failure-detail-row">
            <span className="failure-detail-label">Sipariş No</span>
            <span className="failure-detail-val">#EDU-994285-TX</span>
          </div>
          <div className="failure-detail-row">
            <span className="failure-detail-label">Tutar</span>
            <span className="failure-detail-val">$149.00</span>
          </div>
          <div className="failure-divider"></div>
          <div className="failure-warning-row">
            <span className="material-symbols-outlined failure-warning-icon">warning</span>
            <p className="failure-warning-text">Lütfen kart bilgilerinizi kontrol edin veya detaylı bilgi için bankanızla iletişime geçin.</p>
          </div>
        </div>

        <div className="failure-actions">
          <button className="failure-btn-primary" onClick={() => navigate('/odeme-bilgileri')}>Tekrar Dene</button>
          <button className="failure-btn-secondary" onClick={() => navigate('/sepet')}>Ödeme Yöntemini Değiştir</button>
        </div>
      </div>

      <div className="success-support-grid">
        <div className="success-support-card">
          <span className="material-symbols-outlined success-support-icon">support_agent</span>
          <div className="flex flex-col">
            <span className="success-support-title">Desteğe mi ihtiyacınız var?</span>
            <span className="success-support-desc">Sorularınızı yanıtlamak için destek ekibimiz 7/24 hizmetinizdedir.</span>
          </div>
        </div>
        <div className="success-support-card">
          <span className="material-symbols-outlined success-support-icon">security</span>
          <div className="flex flex-col">
            <span className="success-support-title">Güvenli Alışveriş</span>
            <span className="success-support-desc">Ödeme verileriniz tamamen şifrelenir ve korunur.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
