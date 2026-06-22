import React, { useRef } from "react";
import { doctors } from "../data/clinicData";

export default function About() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 340;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-surface">
      <section className="about-hero">
        <span className="about-hero-badge">Biz Kimiz?</span>
        <h1 className="about-hero-title">Ayşenur &amp; Eren Diş Sağlığı Kliniği</h1>
        <p className="about-hero-desc">
          Modern diş hekimliğinin tüm olanaklarını kullanarak, hastalarımıza sağlıklı, estetik ve güvenli bir gülüş kazandırmak için çalışıyoruz.
        </p>
        <div className="about-hero-img-box">
          <img
            className="about-hero-img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpm9x3Iwl390o_ov_JN6GkQWSpTts6U0YLPjg2txPjUOwgZOqGLgOF24s6oj3DJwPaLmIBh3NBbvcZzqqcU9jsuOA_2CDRArIQpEpKDzvo6zjDa4-4OhNA9hgEkGLvgdiFzKxikkjmlJnRm5Hfvp1yYiu6nYlvs3KVftJu--SOrYBNNxGc0yI79HfyqLVgsvSqqys651sThUe3H8A7vsGotpkzwSJaw6oTWPFuzw1gxHAR5c0Y2ORkm5nPiL1qC67xHibYCFQ0HyI"
            alt="DentalCare Klinik"
          />
          <div className="about-hero-overlay" />
          <div className="about-hero-text-overlay">
            <h2 className="about-story-title text-white">DentalCare Merkez Ofis</h2>
            <p className="about-story-desc text-white/90">Levent, Şişli, İstanbul</p>
          </div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-grid">
          <div className="about-story-card">
            <div>
              <h2 className="about-story-title">Tarihçemiz ve Değerlerimiz</h2>
              <p className="about-story-desc">
                2010 yılında Ayşenur ve Eren Sağlık kuruculuğunda temelleri atılan kliniğimiz, İstanbul'da butik ve yüksek standartlı diş hekimliği hizmeti sunma amacıyla yola çıkmıştır. Bugün, 15 yılı aşkın tecrübe ve binlerce mutlu hastayla yolumuza devam ediyoruz.
              </p>
            </div>
            <div className="about-story-stats">
              <div className="about-stat-item">
                <span className="about-stat-num">15+</span>
                <span className="about-stat-label">Yıllık Deneyim</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-num">25K+</span>
                <span className="about-stat-label">Mutlu Gülüş</span>
              </div>
            </div>
          </div>

          <div className="about-mission-card">
            <span className="about-mission-icon">spa</span>
            <h3 className="about-mission-title">Misyonumuz</h3>
            <p className="about-mission-desc">
              Her hastamıza empati ve hassasiyetle yaklaşarak, en güncel tedavi protokollerini, ağrısız ve en üstün medikal teknolojiyle sunmaktır.
            </p>
          </div>
        </div>
      </section>

      <section className="about-tech-section">
        <div className="about-tech-grid">
          <div className="about-tech-card">
            <div className="about-tech-info">
              <h3 className="about-tech-title">Dijital Gülüş Tasarımı</h3>
              <p className="about-tech-desc">
                3D ağız içi tarayıcılarımızla dişlerinizi dijital ortama aktarıyor, tedavi öncesinde yeni gülüşünüzü simüle ediyoruz.
              </p>
            </div>
            <div className="about-tech-img-box">
              <img
                className="about-tech-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoKP4YLkPQ7e4EGj7mtkP_eBYAgBsL7XD1d11EzNgfOSr5rFzhCvj6I5TDp-qjXVGFBqvsXiAdInu3e3RnYySquFgSMK_XPj0PMzjFbFTutVTDy51NIDYwW7TF9vtzziIwpaAU-P3XQOo0aWu1GqrCCtfqOGM37Pi1pXG7Ke7VtE8MNipS43JBQEsL_xGwTKtlxdXwfP_uihXmN2RNe-NOuZtidoh2qyq_YMwitiUS0KP-sSxOY4bNU8YNrAtgUF7WaF2zVW13Ni0"
                alt="Gülüş Tasarımı"
              />
            </div>
          </div>

          <div className="about-tech-card">
            <div className="about-tech-info">
              <h3 className="about-tech-title">Lazer Destekli Tedavi</h3>
              <p className="about-tech-desc">
                Cerrahi ve beyazlatma uygulamalarında kullandığımız lazer sistemleri ile kanamasız, dikişsiz ve ağrısız süreçler sağlıyoruz.
              </p>
            </div>
            <div className="about-tech-img-box">
              <img
                className="about-tech-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR2hP016L7wDkacZgdzffwBpsxjRQQhSn70NenPV13y5nD6khZ0C1xof3G7pxTdT9d8OL61RaDBivs8xHbs5of_vKVe_WCMns1KZmxk8bVWY3jCkH-i1oQhtjV0MFdnT2f9fROIjNQJGOLWyBf1hpPprWnx2EEhK9BDhqDwbdwgzkYLX2gtrPsDYjXZwIXVhOE8xLtFkp5Fb4XGTNoEWACyXDW_yxJvhyJQKtDJSII50_O3B4phijX2enp7R909HYnDyn6QoY8nq0"
                alt="Lazer Tedavi"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-team-section">
        <div className="about-team-container">
          <div className="about-team-header">
            <div>
              <span className="about-team-badge">Uzman Kadromuz</span>
              <h2 className="about-team-title">Hekimlerimizle Tanışın</h2>
            </div>
            <div className="about-team-arrows">
              <button
                onClick={() => scroll("left")}
                className="about-team-arrow"
              >
                <span className="about-team-arrow-icon">chevron_left</span>
              </button>
              <button
                onClick={() => scroll("right")}
                className="about-team-arrow"
              >
                <span className="about-team-arrow-icon">chevron_right</span>
              </button>
            </div>
          </div>

          <div ref={trackRef} className="about-team-track">
            {doctors.map((doc) => (
              <div key={doc.id} className="about-team-card">
                <div className="about-team-avatar-box">
                  <img
                    className="about-team-avatar"
                    src={doc.avatar}
                    alt={doc.name}
                  />
                </div>
                <div className="about-team-info">
                  <h3 className="about-team-name">{doc.name}</h3>
                  <p className="about-team-role">{doc.title}</p>
                  <p className="about-team-desc">{doc.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
