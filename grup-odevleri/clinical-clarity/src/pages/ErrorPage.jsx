import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface">
      <main className="confirm-main">
        <div className="confirm-bg-circle-1" />
        <div className="confirm-bg-circle-2" />

        <div className="confirm-card">
          <div className="confirm-header">
            <div className="confirm-icon-box-error">
              <span className="confirm-icon-error">error</span>
            </div>
            <h2 className="confirm-title-error">İşlem Başarısız</h2>
            <p className="confirm-desc">
              Üzgünüz, randevu işleminiz tamamlanamadı. Seçtiğiniz zaman dilimi başka bir hasta tarafından az önce rezerve edilmiş olabilir.
            </p>
          </div>

          <div className="confirm-details-grid">
            <div className="confirm-error-info-card">
              <div className="confirm-error-info-layout">
                <span className="confirm-error-info-icon">info</span>
                <div>
                  <p className="confirm-error-info-title">Neden başarısız oldu?</p>
                  <p className="confirm-error-info-desc">
                    Klinik kapasitemiz anlık olarak güncellenmektedir. Lütfen farklı bir saat veya gün seçerek tekrar deneyin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="confirm-error-action-row">
            <button
              onClick={() => navigate("/randevu")}
              className="confirm-action-btn-primary"
            >
              Tekrar Dene
            </button>
            <button
              onClick={() => navigate("/hizmetler")}
              className="confirm-action-btn-secondary"
            >
              Hizmetlerimize Göz Atın
            </button>
          </div>

          <div className="confirm-error-support-row">
            <span className="confirm-error-support-label">Yardıma mı ihtiyacınız var?</span>
            <div className="confirm-error-support-links">
              <a href="tel:+902120000000" className="confirm-error-support-link">
                <span className="confirm-error-support-icon">call</span>
                Bizi Arayın
              </a>
              <a href="mailto:destek@dentalcare.com" className="confirm-error-support-link">
                <span className="confirm-error-support-icon">support_agent</span>
                Destek
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
