import { useState } from 'react'

export default function Contact() {
  const [btnText, setBtnText] = useState('Talebi Gönder')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setBtnText('Gönderiliyor...')
    setTimeout(() => {
      setBtnText('Mesaj Gönderildi!')
      setIsSuccess(true)
      setTimeout(() => {
        setBtnText('Talebi Gönder')
        setIsSuccess(false)
        e.target.reset()
      }, 2000)
    }, 1500)
  }

  return (
    <main className="contact-main">
      <section className="contact-hero">
        <h1 className="contact-hero-title">Geleceği <span className="text-secondary">birlikte</span> inşa edelim.</h1>
        <p className="contact-hero-desc">İster tam bir dijital dönüşüm ister özel bir tasarım projesi arıyor olun, ekibimiz vizyonunuzu güçlendirmeye hazır.</p>
      </section>

      <section className="contact-grid">
        <div className="contact-form-card glass-card">
          <h2 className="contact-form-title">Mesaj Gönderin</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label className="contact-form-label">Ad Soyad</label>
                <input className="contact-form-input" type="text" placeholder="John Doe" required />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">E-posta Adresi</label>
                <input className="contact-form-input" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">Konu</label>
              <select className="contact-form-input">
                <option value="inquiry">Yeni Proje Talebi</option>
                <option value="partnership">Ortaklık Teklifi</option>
                <option value="careers">Kariyer Fırsatları</option>
                <option value="feedback">Genel Geri Bildirim</option>
              </select>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label">Mesaj</label>
              <textarea className="contact-form-input resize-none" placeholder="Hedefleriniz hakkında bize bilgi verin..." rows="4" required></textarea>
            </div>
            <button className={isSuccess ? "contact-form-submit-btn bg-green-600" : "contact-form-submit-btn"} type="submit">
              {btnText}
            </button>
          </form>
        </div>

        <div className="contact-info-col">
          <div className="contact-info-card glass-card glow-hover">
            <div className="contact-info-icon-wrapper">
              <span className="material-symbols-outlined text-secondary">location_on</span>
            </div>
            <div>
              <h3 className="contact-info-title">Merkez Stüdyo</h3>
              <p className="contact-info-desc">124 İnovasyon Yolu, Daire 500<br />Silikon Vadisi, CA 94025</p>
            </div>
          </div>

          <div className="contact-info-card glass-card glow-hover">
            <div className="contact-info-icon-wrapper">
              <span className="material-symbols-outlined text-secondary">alternate_email</span>
            </div>
            <div>
              <h3 className="contact-info-title">Doğrudan İletişim</h3>
              <p className="contact-info-desc">merhaba@creativecore.design</p>
              <p className="contact-info-desc">+1 (555) 892-0441</p>
            </div>
          </div>

          <div className="contact-social-card glass-card">
            <h3 className="contact-social-title">Bağlantıda Kalın</h3>
            <div className="contact-social-list">
              <a className="contact-social-btn" href="#share"><span className="material-symbols-outlined">share</span></a>
              <a className="contact-social-btn" href="#camera"><span className="material-symbols-outlined">camera</span></a>
              <a className="contact-social-btn" href="#video"><span className="material-symbols-outlined">videocam</span></a>
              <a className="contact-social-btn" href="#brush"><span className="material-symbols-outlined">brush</span></a>
            </div>
          </div>

          <div className="contact-quote-card glass-card">
            <span className="contact-quote-text">"Her pikselde hassasiyet."</span>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-wrapper">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="San Francisco ofis çalışma alanı" />
          <div className="contact-map-overlay glass-card">
            <h4 className="contact-info-title">Alanımızı Ziyaret Edin</h4>
            <p className="contact-info-desc mb-4">Teknoloji bölgesinin kalbinde yer almaktadır. Bir kahve içmek ve bir sonraki büyük fikriniz hakkında sohbet etmek için uğrayın.</p>
            <a className="text-secondary font-label-md flex items-center gap-2" href="#maps">
              Haritada Aç
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
