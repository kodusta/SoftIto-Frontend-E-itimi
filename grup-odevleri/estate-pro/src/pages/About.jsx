import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="about-main">
      <section className="about-hero">
        <div className="about-hero-bg-wrapper">
          <div className="about-hero-bg" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_-k2k1WoJvaZsvnpdc8badJZB6pOoLguLknGQsAvUrVShnBiY1Z4n9Rd6elgdyOaBVi2NwT8mQoH0THRxYkZ69A0IZokR7Pk26ITnzeK0cIGI8eKFcvRYXZUD48QXgWpPCby1VTBImtqzktlX_dC5c0v9swnbTCmKI7qyg0xDHgF373TllkPb78o7Rkbxj9Ok_uW_18jw2ztfRZJPNuk51EHsOZxH9JlnJn4uUufUg1pKnskNYhocEYSCdy2AWUziB130RjFjDiI8')" }} />
          <div className="about-hero-gradient" />
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">Biz Kimiz?</h1>
          <p className="about-hero-desc">Gayrimenkul sektöründe güveni, teknolojiyi ve uzmanlığı bir araya getiriyoruz. 10 yılı aşkın tecrübemizle hayallerinizdeki yaşam alanlarını bulmanıza yardımcı oluyoruz.</p>
          <div className="about-hero-buttons">
            <button className="about-hero-btn-primary" onClick={() => navigate("/contact")}>İletişime Geç</button>
            <button className="about-hero-btn-secondary" onClick={() => navigate("/listings")}>İlanlarımız</button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stats-card">
            <span className="stats-number">10+</span>
            <span className="stats-label">YIL DENEYİM</span>
          </div>
          <div className="stats-card">
            <span className="stats-number">5000+</span>
            <span className="stats-label">MUTLU MÜŞTERİ</span>
          </div>
          <div className="stats-card">
            <span className="stats-number">12k+</span>
            <span className="stats-label">TAMAMLANAN SATIŞ</span>
          </div>
          <div className="stats-card">
            <span className="stats-number">45+</span>
            <span className="stats-label">UZMAN DANIŞMAN</span>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <span className="material-symbols-outlined mission-icon-bg">rocket_launch</span>
          <h2 className="mission-title"><span className="material-symbols-outlined">flag</span> Misyonumuz</h2>
          <p className="mission-desc">Sektördeki en şeffaf ve güvenilir gayrimenkul deneyimini sunarak, müşterilerimizin hayatlarını kolaylaştırmak ve en doğru yatırımı yapmalarını sağlamaktır. Teknolojiyi insan odaklı hizmetimizle harmanlıyoruz.</p>
        </div>
        <div className="vision-card">
          <span className="material-symbols-outlined vision-icon-bg">visibility</span>
          <h2 className="vision-title"><span className="material-symbols-outlined">lightbulb</span> Vizyonumuz</h2>
          <p className="vision-desc">Türkiye'nin ve bölgenin en yenilikçi gayrimenkul teknoloji şirketi olarak, gayrimenkul alışverişini dijital dönüşümle yeniden tanımlamak ve küresel pazarda örnek gösterilen bir marka olmaktır.</p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-header">
          <div className="team-header-left">
            <span className="team-subtitle-accent">Profesyoneller</span>
            <h2 className="team-title">Ekibimizle Tanışın</h2>
          </div>
          <p className="team-header-right">Alanında uzman ekibimiz, size en iyi hizmeti sunmak için her gün titizlikle çalışıyor.</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3Zce8bAQBgGJiusoHt5-UJ4X8jR1LV0HRxDZwxWyHhCbiVIAOH5G3rC5wgf2m_x3f-3qpObgvDQKe2xS2dyxByGV-Fr5PnrlAKn76kRNpk9JpWFe1nZuBkVlYjRx1fSR2ECUNZ2QdkDgZcCFMX_6Gmoq1So3HB9jTpKY0XxHM92qm90Qcf84RE8RdhQWiQOeDPsCFYc9ss3Ct2yW3yBKLYs7MTgWDL0LqKknp8-jDDPoTb9ELvMZ6M_Wf3MbuXiesmmVx59ODM1v" alt="Caner Aydın" />
              <div className="team-img-overlay">
                <div className="team-social-group">
                  <span className="team-social-btn"><span className="material-symbols-outlined">share</span></span>
                </div>
              </div>
            </div>
            <h3 className="team-member-name">Caner Aydın</h3>
            <p className="team-member-role">Kurucu Ortak & CEO</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2uScDxDrZRTYYhmZ0NkNjOjxTCc10uA3uWxJGBP-nIjSghpWvM73CJXNfGqMwOxiSwTSaZhAMwodo5WS4jF9YB7Jnr8VNSQT4HQ_he32cYjz59iSYi64uee9itvNghk-Z7jaydmV21UTRB4t-Uml43LrH60GXzItbUisE3dUAYy1M29yhWt7b7INR6xHbm5MIdw-Rg4ctZTQm6JCqC52IJhQvgRNXG7kEPKbWpU4vECt93DpmPwrC7DUcdFsbrB__EYK7hJ9eAqs8" alt="Selin Yılmaz" />
              <div className="team-img-overlay">
                <div className="team-social-group">
                  <span className="team-social-btn"><span className="material-symbols-outlined">share</span></span>
                </div>
              </div>
            </div>
            <h3 className="team-member-name">Selin Yılmaz</h3>
            <p className="team-member-role">Operasyon Müdürü</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOgOyqlCCGV76fagusuDJA9usDGM5H5T_k9QcmbJxnc7luvSwqy9HBPP3f2Heh1JKWWO2pFx7QY6IH4yfa0vWAxl1jO-vdXJIOWkH8eL0bqOL_W1jil-02EprZhMFBibmdqh0vYUkWrfo-6VNGHfwHgTPIhV9KR2z8kc3MPMIYIm88v6vBKTHDCqbip6b6Is1ZvKXvNwxwggvUIMuAiu9eEkZN9bnSZoUuuMyG2h-lCaQ2OdOYqXWIE8Iq13SN8R1yf5tS1ck3BmK" alt="Mert Demir" />
              <div className="team-img-overlay">
                <div className="team-social-group">
                  <span className="team-social-btn"><span className="material-symbols-outlined">share</span></span>
                </div>
              </div>
            </div>
            <h3 className="team-member-name">Mert Demir</h3>
            <p className="team-member-role">Yatırım Uzmanı</p>
          </div>
          <div className="team-card">
            <div className="team-img-wrapper">
              <img className="team-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDxsnc0EMM96QwHfrL3wvAJR8FRYbkBdvsFlykJAoj0ZrVMZ07dnrLX9qhXHUFIRAes5dK8OGwQ6ngJuOFRv8wanFMMZBaQ1MFU0U_YLp0EjEjOTpD_A-TyFsuGOx4KwW4KJws_M2STrdvxDPS7TdTMjx489i44nlh6gepJpKcFcqmVPuPLyHdztb0kbpD0BNC1xtClSXtSXohvjZrRhZ9dTs3jJ_Qf6dU2R6OfulD2gdBAFC7ckdu3McWJDuO4QJCH-GtqqkwcnKt" alt="Zeynep Kaya" />
              <div className="team-img-overlay">
                <div className="team-social-group">
                  <span className="team-social-btn"><span className="material-symbols-outlined">share</span></span>
                </div>
              </div>
            </div>
            <h3 className="team-member-name">Zeynep Kaya</h3>
            <p className="team-member-role">Hukuk Danışmanı</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-header">
          <h2 className="values-title">Bizi Farklı Kılan Değerlerimiz</h2>
          <p className="values-subtitle">Sadece bir emlak ofisi değil, yaşam yolculuğunuzdaki çözüm ortağınızız.</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon-wrapper">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h4 className="value-card-title">Mutlak Güven</h4>
            <p className="value-card-desc">Şeffaf süreçler ve yasal güvencelerle her aşamada yanınızdayız.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-wrapper-secondary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h4 className="value-card-title">Uzman Analiz</h4>
            <p className="value-card-desc">Veriye dayalı piyasa analizleri ile en kârlı yatırımı yapmanızı sağlıyoruz.</p>
          </div>
          <div className="value-card">
            <div className="value-icon-wrapper-tertiary">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h4 className="value-card-title">Geniş Ağ</h4>
            <p className="value-card-desc">En seçkin portföyler ve güçlü iş ortaklıkları ile size özel fırsatlar sunuyoruz.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
