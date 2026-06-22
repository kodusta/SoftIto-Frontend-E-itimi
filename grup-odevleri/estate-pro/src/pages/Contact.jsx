import { useState } from 'react';

export default function Contact() {
  const [submitState, setSubmitState] = useState("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("buy");
  const [message, setMessage] = useState("");
  const [kvkk, setKvkk] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitState !== "idle") return;

    setSubmitState("loading");
    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubject("buy");
        setMessage("");
        setKvkk(false);
        setSubmitState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <main className="contact-main">
      <section className="contact-map-section">
        <div className="contact-map-bg-wrapper">
          <img className="contact-map-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnkIHxrPhV8FUM59dT6ZeAE2FKPGdoDsWjouxmL2wLiU3hFVJWJLX1NGRhAfCAzNpclBMpkga7S8AN6I5MVmveqBXOH8JizKvs08gZYWx2YEUgOdGIJcAbiPfkhRhBHjKr84dZ-RKOZkjyv-MfE9TGe4SfD_9fzd8YiL7hbtVhLTKI0xQyQLpDRA__bQuYJy2NtSNhysiyECGXfkjaQ4E7NprMSobRfX6SLcvMPrfI4j4BtVlriZaj35geXPR3y_4zFXnkqjhggtzc" alt="Istanbul Map" />
          <div className="contact-map-gradient" />
        </div>
        <div className="contact-map-marker-overlay">
          <div className="contact-map-marker-box">
            <span className="material-symbols-outlined contact-map-marker-icon" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <p className="contact-map-marker-text">Ana Ofis</p>
          </div>
        </div>
      </section>

      <div className="contact-grid">
        <aside className="contact-aside">
          <div className="contact-info-card">
            <h2 className="contact-info-title">İletişim Bilgileri</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <span className="material-symbols-outlined contact-info-icon">call</span>
                </div>
                <div className="contact-info-val-group">
                  <p className="contact-info-label">Telefon</p>
                  <p className="contact-info-val">+90 (212) 555 0123</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <span className="material-symbols-outlined contact-info-icon">mail</span>
                </div>
                <div className="contact-info-val-group">
                  <p className="contact-info-label">E-posta</p>
                  <p className="contact-info-val">info@estatepro.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon-wrapper">
                  <span className="material-symbols-outlined contact-info-icon">location_on</span>
                </div>
                <div className="contact-info-val-group">
                  <p className="contact-info-label">Adres</p>
                  <p className="contact-info-val">Levent Mah. Meltem Sokak No:4, Beşiktaş, İstanbul</p>
                </div>
              </div>
            </div>
            <div className="contact-socials-wrapper">
              <p className="contact-socials-label">Sosyal Medya</p>
              <div className="contact-socials-row">
                <a className="contact-social-btn" href="#">
                  <span className="material-symbols-outlined contact-social-icon">share</span>
                </a>
                <a className="contact-social-btn" href="#">
                  <span className="material-symbols-outlined contact-social-icon">public</span>
                </a>
                <a className="contact-social-btn" href="#">
                  <span className="material-symbols-outlined contact-social-icon">rss_feed</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-hours-box">
            <div className="contact-hours-content">
              <span className="material-symbols-outlined contact-hours-icon">schedule</span>
              <p className="contact-hours-text">Hafta içi: 09:00 - 18:00</p>
            </div>
          </div>
        </aside>

        <div className="contact-form-wrapper">
          <h1 className="contact-form-title">Bize Ulaşın</h1>
          <p className="contact-form-desc">Gayrimenkul ihtiyaçlarınız için uzman ekibimiz size yardımcı olmaya hazır.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="name">Ad Soyad</label>
                <input
                  className="contact-form-input"
                  id="name"
                  placeholder="Adınızı giriniz"
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="email">E-posta</label>
                <input
                  className="contact-form-input"
                  id="email"
                  placeholder="ornek@mail.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="subject">Konu</label>
              <select
                className="contact-form-select"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="buy">Satın Alma</option>
                <option value="rent">Kiralama</option>
                <option value="sell">Satış İşlemleri</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            <div className="contact-form-group">
              <label className="contact-form-label" htmlFor="message">Mesajınız</label>
              <textarea
                className="contact-form-textarea"
                id="message"
                placeholder="Mesajınızı buraya yazınız..."
                required
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="contact-form-kvkk-row">
              <input
                className="contact-form-checkbox"
                id="kvkk"
                required
                type="checkbox"
                checked={kvkk}
                onChange={(e) => setKvkk(e.target.checked)}
              />
              <label className="contact-form-checkbox-label" htmlFor="kvkk">
                Kişisel verilerimin işlenmesine ilişkin <span className="contact-form-checkbox-link">aydınlatma metnini</span> okudum.
              </label>
            </div>
            <button
              className="contact-form-submit-btn"
              type="submit"
              disabled={submitState === "loading"}
            >
              {submitState === "idle" && (
                <>
                  <span>Gönder</span>
                  <span className="material-symbols-outlined contact-form-submit-icon">send</span>
                </>
              )}
              {submitState === "loading" && (
                <>
                  <span className="material-symbols-outlined animate-spin">sync</span>
                  <span>Gönderiliyor...</span>
                </>
              )}
              {submitState === "success" && (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Başarıyla Gönderildi!</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
