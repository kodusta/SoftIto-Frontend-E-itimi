import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Status() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const type = searchParams.get('type') || 'success'

  return (
    <main className="status-main">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-on-tertiary-container/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="status-container">
        {type === 'success' ? (
          <section className="status-section-success glass-card">
            <div className="status-icon-success-wrapper">
              <span className="material-symbols-outlined !text-[48px]">celebration</span>
            </div>
            <h1 className="status-title">Talebiniz için teşekkür ederiz</h1>
            <p className="status-desc">Strateji ekibimiz özetinizi aldı ve şu anda inovasyon potansiyelini analiz ediyor. 24 iş saati içinde sizinle iletişime geçeceğiz.</p>
            <div className="status-btns">
              <button className="status-btn-primary" onClick={() => navigate('/')}>
                Ana Sayfaya Dön
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="status-btn-secondary" onClick={() => navigate('/services')}>
                Hizmetleri İncele
              </button>
            </div>
            <div className="status-grid-steps">
              <div className="status-step-col">
                <p className="status-step-val">01</p>
                <p className="status-step-label">İnceleme</p>
              </div>
              <div className="status-step-col">
                <p className="status-step-val-inactive">02</p>
                <p className="status-step-label-inactive">Strateji</p>
              </div>
              <div className="status-step-col">
                <p className="status-step-val-inactive">03</p>
                <p className="status-step-label-inactive">Başlangıç</p>
              </div>
            </div>
          </section>
        ) : (
          <section className="status-section-failure glass-card">
            <div className="status-icon-failure-wrapper">
              <span className="material-symbols-outlined !text-[48px]">error</span>
            </div>
            <h1 className="status-title text-error">Bir şeyler yanlış gitti</h1>
            <p className="status-desc">Talebiniz işlenirken beklenmedik bir iletim hatası oluştu. Lütfen bağlantınızı kontrol edin ve tekrar göndermeyi deneyin.</p>
            <div className="status-btns">
              <button className="status-btn-error" onClick={() => navigate('/quote')}>
                <span className="material-symbols-outlined">refresh</span>
                Yeniden Dene
              </button>
              <button className="status-btn-error-sec" onClick={() => navigate('/contact')}>
                Destekle İletişime Geç
              </button>
            </div>
            <div className="status-error-log">
              <div className="status-error-log-header">
                <span className="material-symbols-outlined text-[16px]">info</span>
                Hata Günlüğü
              </div>
              <code className="status-error-log-code">
                Error_Code: 0x404_BAGLANTI_ZAMAN_ASIMI<br />
                Trace_ID: CC-9921-X-CORE
              </code>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
