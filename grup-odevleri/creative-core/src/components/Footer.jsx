import { Link } from 'react-router-dom'

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
  }

  return (
    <footer className="footer-root">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">CREATIVE_CORE</span>
            <p className="footer-desc">Stratejik tasarım ve hassas kodlama ile dijital gelecekler inşa ediyoruz.</p>
            <div className="footer-social-links">
              <a className="footer-social-link" href="#linkedin">LinkedIn</a>
              <a className="footer-social-link" href="#twitter">Twitter</a>
              <a className="footer-social-link" href="#instagram">Instagram</a>
              <a className="footer-social-link" href="#dribbble">Dribbble</a>
            </div>
          </div>

          <div className="footer-grids">
            <div className="footer-col">
              <span className="footer-title">Ajans</span>
              <Link className="footer-link" to="/#vision">Vizyon</Link>
              <Link className="footer-link" to="/services">Hizmetlerimiz</Link>
              <Link className="footer-link" to="/#process">Süreç</Link>
            </div>
            <div className="footer-col">
              <span className="footer-title">Hizmetler</span>
              <Link className="footer-link" to="/services/strategy">Strateji</Link>
              <Link className="footer-link" to="/services/design">UX/UI Tasarım</Link>
              <Link className="footer-link" to="/services/engineering">Mühendislik</Link>
            </div>
            <div className="footer-newsletter">
              <span className="footer-title">E-Bülten</span>
              <p className="footer-desc">Teknoloji ve tasarım hakkındaki en son fikirlerimizden haberdar olun.</p>
              <form className="footer-input-group" onSubmit={handleSubmit}>
                <input className="footer-input" type="email" placeholder="e-posta@sirketiniz.com" required />
                <button className="footer-send-btn" type="submit">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 CreativeCore Ajansı. Tüm hakları saklıdır.</p>
          <div className="footer-policy-links">
            <a className="footer-policy-link" href="#privacy">Gizlilik Politikası</a>
            <a className="footer-policy-link" href="#terms">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
