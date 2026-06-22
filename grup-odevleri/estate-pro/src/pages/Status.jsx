import { useSearchParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';

export default function Status() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const successVal = searchParams.get("success");
  const refVal = searchParams.get("ref") || "EP-49201";
  const propertyId = searchParams.get("propertyId");

  const property = properties.find((p) => p.id === parseInt(propertyId)) || properties[0];
  const isSuccess = successVal === "true";

  return (
    <main className="status-main">
      {isSuccess ? (
        <section className="status-card-success">
          <div className="status-icon-success">
            <svg className="status-icon-success-svg" viewBox="0 0 52 52">
              <circle className="fill-none stroke-[#2e7d32] stroke-[2]" cx="26" cy="26" r="25" />
              <path 
                className="success-checkmark fill-none stroke-[#2e7d32] stroke-[4]" 
                d="M14.1 27.2l7.1 7.2 16.7-16.8" 
                strokeDasharray="100" 
                strokeDashoffset="0" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          <h1 className="status-title">Randevunuz Başarıyla Oluşturuldu</h1>
          <p className="status-desc">Danışmanımız sizi en kısa sürede arayacaktır. İlginiz için teşekkür ederiz.</p>
          <button className="status-home-btn" onClick={() => navigate("/")}>
            <span className="material-symbols-outlined status-home-btn-icon">home</span>
            <span>Anasayfaya Dön</span>
          </button>
          <div className="status-img-wrapper">
            <img className="status-img" src={property.images[0]} alt="Property" />
            <div className="status-img-overlay" />
            <div className="status-ref-box">
              <p className="status-ref-label">Referans No</p>
              <p className="status-ref-val">#{refVal}</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="status-card-error">
          <div className="status-icon-error">
            <span className="material-symbols-outlined status-icon-error-span">close</span>
          </div>
          <h2 className="status-title">Bir Hata Oluştu</h2>
          <p className="status-desc">Şu anda işleminizi gerçekleştiremiyoruz. Lütfen tekrar deneyiniz veya müşteri hizmetleri ile iletişime geçiniz.</p>
          <div className="status-actions-error">
            <button className="status-btn-back" onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined status-btn-back-icon">arrow_back</span>
              <span>Geri Dön</span>
            </button>
            <button className="status-btn-retry" onClick={() => navigate(-1)}>Tekrar Dene</button>
          </div>
          <div className="status-support-box">
            <div className="status-support-icon-wrapper">
              <span className="material-symbols-outlined status-support-icon">support_agent</span>
            </div>
            <div className="status-support-info">
              <p className="status-support-title">Yardıma mı ihtiyacınız var?</p>
              <p className="status-support-desc">Hata Kodu: 0x822-ERR</p>
            </div>
            <button className="status-support-link" onClick={() => navigate("/contact")}>
              <span className="material-symbols-outlined status-support-link-icon">open_in_new</span>
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
