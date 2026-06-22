import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Failure = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const reason = location.state?.reason || 'general-error';

  const handleEditInfo = () => {
    navigate(-1);
  };

  return (
    <div className="failure-page">
      <div className="failure-card">
        <div className="failure-icon-wrapper">
          <span className="material-symbols-outlined failure-icon">error</span>
        </div>

        <h1 className="failure-title">İşlem Başarısız</h1>

        {reason === 'age-error' ? (
          <div className="failure-reason-box">
            <h3 className="reason-title">Yaş Sınırı Kuralı İhlali</h3>
            <p className="reason-text">
              Kiralama koşullarımız gereği sürücünün en az 25 yaşında olması gerekmektedir. Doğum tarihiniz bu şartı karşılamıyor.
            </p>
          </div>
        ) : (
          <div className="failure-reason-box">
            <h3 className="reason-title">Ödeme Onaylanmadı</h3>
            <p className="reason-text">
              Kredi kartı bilgileriniz doğrulanamadı veya limit yetersiz. Lütfen kart bilgilerinizi kontrol edip tekrar deneyin.
            </p>
          </div>
        )}

        <p className="failure-help-text">
          Sorunun devam etmesi durumunda müşteri destek ekibimizle iletişime geçebilirsiniz.
        </p>

        <div className="failure-actions">
          <button onClick={handleEditInfo} className="btn-retry">
            <span className="material-symbols-outlined">refresh</span>
            <span>Bilgileri Düzenle</span>
          </button>
          
          <Link to="/cars" className="btn-back-fleet">
            <span className="material-symbols-outlined">directions_car</span>
            <span>Filoya Geri Dön</span>
          </Link>
        </div>

        <div className="failure-support-info">
          <p className="support-phone">Müşteri Destek: +1 (800) VELOCITY</p>
          <p className="support-email">Destek: priority@velocity-rentals.com</p>
        </div>
      </div>
    </div>
  );
};

export default Failure;
