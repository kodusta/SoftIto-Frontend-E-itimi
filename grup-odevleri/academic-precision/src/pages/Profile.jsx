import { useState } from 'react';

export default function Profile() {
  const [profileName, setProfileName] = useState('Alex Vance');
  const [profileEmail, setProfileEmail] = useState('alex.vance@techglobal.com');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profil ayarlarınız başarıyla güncellendi.');
  };

  return (
    <main className="profile-layout">
      <div className="profile-grid">
        <aside className="profile-sidebar">
          <div className="profile-avatar-wrapper">
            <img className="profile-avatar-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVGoV2iNkeXqAYamv6MWaPjxNPC9TsBN0gYFLEH2i-1yby-oJ1YboA_9nQTbt35e0D0_xdgEWIdn91orYEiL93l5VyWhzaa8YCiKx2i8qeypNLiu0fUyLlQU3q6Ap8DHKlF0g7AC6OhasSzV8Q-Sk1sxGzbUA759FJPTqCprABlf2iQ-DHxJAgdftM4x0zA1KyZRXET9ef1t4itqbFB9I5OBKTUn8OM5Yvf82BZhFj518zbEl2zneb-XOhiv5PBS6y2vwWLXrUaa27" alt="Alex Vance" />
          </div>
          <h3 className="profile-name">{profileName}</h3>
          <p className="profile-email">{profileEmail}</p>
          <div className="profile-badge-row">
            <span className="profile-badge">Kıdemli Üye</span>
            <span className="profile-badge">Yazılım</span>
          </div>

          <ul className="profile-nav-list">
            <li className="profile-nav-item-active">
              <span className="material-symbols-outlined profile-nav-icon">school</span>
              <span>Aktif Kurslarım</span>
            </li>
            <li className="profile-nav-item">
              <span className="material-symbols-outlined profile-nav-icon">workspace_premium</span>
              <span>Sertifikalarım</span>
            </li>
            <li className="profile-nav-item">
              <span className="material-symbols-outlined profile-nav-icon">settings</span>
              <span>Hesap Ayarları</span>
            </li>
          </ul>
        </aside>

        <div className="profile-main">
          <section className="profile-card">
            <h3 className="profile-card-title">Aktif Öğrenim İlerlemesi</h3>
            <div className="profile-courses-list">
              <div className="profile-course-item">
                <div className="profile-course-info">
                  <div className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnAwgxjkBn4-ZNH5_1bHLlCEOQHn6LSk3VWzj0tErl7Bz8l_uh8XcqncWMfZwJ9NuJE6B1JTE5YoqEBZzehoAQwxqtl1tyPc7zQASu4W4Zc_fyxy0EvEvxoU8zcrW1ivL0JiEotbtR4EPaDvgni0r5QZA1bgGDRtaIyJVkUksqvNW4romT7_7w6VRt06hdGcm2x46u8y-p7p7Q1JReTXYd6V9rzHGXx2PAUOB0lE-TyzaYOTdw1gGQzybdPvky8Cquh49nstRNcxRw')" }}></div>
                  <div className="profile-course-text">
                    <span className="profile-course-name">Figma ile Gelişmiş Tasarım Sistemleri</span>
                    <div className="profile-course-progress-row">
                      <div className="profile-course-progress-bar-track">
                        <div className="profile-course-progress-bar-fill" style={{ width: '65%' }}></div>
                      </div>
                      <span className="profile-course-progress-val">%65</span>
                    </div>
                  </div>
                </div>
                <button className="profile-course-btn">Derse Git</button>
              </div>

              <div className="profile-course-item">
                <div className="profile-course-info">
                  <div className="w-12 h-12 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKmZmG0yCXTOehOae9Uj26-CGH7BPBbYqmvRcPJgo20ISZjfyyhOFLiNQL9C8AUXBUmYk4knx5Eff0vJ0yVXmei5SV3i2OVdt0zGuL-YOUJng5Lg6LB_OPBFdQR49HSS5dqoiGo97Uwbys9k8Vz5aZYilb1E_elkzL5qwXd5YazRpxw4ppfklzWmqdlHqZe-44-MJ2qGfzAa8Nda4u6-eSa9mLYbt2ZN7UHXR4-M-BTT-WxKHaGaBkGb2lKnl5G6X6h6vcemm9HiDo')" }}></div>
                  <div className="profile-course-text">
                    <span className="profile-course-name">Python Programlamaya Giriş</span>
                    <div className="profile-course-progress-row">
                      <div className="profile-course-progress-bar-track">
                        <div className="profile-course-progress-bar-fill" style={{ width: '15%' }}></div>
                      </div>
                      <span className="profile-course-progress-val">%15</span>
                    </div>
                  </div>
                </div>
                <button className="profile-course-btn">Derse Git</button>
              </div>
            </div>
          </section>

          <section className="profile-card">
            <h3 className="profile-card-title">Hesap Ayarları</h3>
            <form onSubmit={handleSave} className="space-y-md">
              <div className="form-field">
                <label className="form-label">Ad Soyad</label>
                <input 
                  className="form-input" 
                  type="text" 
                  value={profileName} 
                  onChange={(e) => setProfileName(e.target.value)} 
                />
              </div>
              <div className="form-field">
                <label className="form-label">E-posta Adresi</label>
                <input 
                  className="form-input" 
                  type="email" 
                  value={profileEmail} 
                  onChange={(e) => setProfileEmail(e.target.value)} 
                />
              </div>
              <div className="form-field">
                <label className="form-label">Şifre</label>
                <input 
                  className="form-input" 
                  type="password" 
                  placeholder="••••••••" 
                />
              </div>
              <button className="contact-submit-btn" type="submit">Ayarları Kaydet</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
