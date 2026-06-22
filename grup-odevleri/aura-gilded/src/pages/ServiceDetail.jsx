import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { useReservation } from '../context/ReservationContext';

export default function ServiceDetail() {
  const { id } = useParams();
  const { updateBooking } = useReservation();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <main className="detail-main">
        <h2 className="detail-title">Hizmet Bulunamadı</h2>
        <Link to="/hizmetler" className="wizard-prev-btn">
          Hizmetler Listesine Geri Dön
        </Link>
      </main>
    );
  }

  const getCategoryImage = () => {
    if (service.category === 'NAILS') {
      return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBqx_7mJcM08jcvhy14vn8cOqVeKNcKsUkjuIRXcpTwKiap9PTy4DBdUFppk-eB1Bl4Ac_0Y4sR2O03i2Kh6LAdik1oRsIhL6z_f-7N1a76YZTJMpgcBTX1fvPeTYXtMackL0hG4M5GDqzKXaevt0b3ERqMB_5yp2_mbkAtQLOEH1OksMQcRYSeOJemGKM0ct2X4SzYnAfybQptD_ZfnTWukvF9ueNPIBGK0uvsi0i2Z37Qn5VI9yYtlk-dbm961NppdE5qx9yh6-R';
    }
    if (service.category === 'SKIN CARE') {
      return 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfcXJi3WcRDOwklWtqootYaw9KkF9_b1uq6pGHpK6meTlqag60ofVsTsQW5JBqQ3SjaCwhosxRVRLRrn_q18D-24Xy6iPdnWxqytw6sFRqVKTFxse-PIp18Dwl4k4tpWUizl547--NqjtFNfYC3utFVcvyVQUDDSANq29rSRWseVyCK-YPWTrc8XhqYev9mAHCx6vSjD6EbmCmLoaK1FWBlcSGMjK8D-loUbB7d1uDccwuQMUo9CS-nnapqnRQcUHefxne0iu9pf5a';
    }
    return 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA-eG_hZKlcni5XWbSH9i9X0iVwK-6t7hRSRxbziy-Tb8iKABvJPWkE6uqjwEkQfkmkAtxXBzUl3Zz5jQUrEXvLPFCVcoRYUVXmT4-kqgMNZVOYseQAuizb6jxp0wTVtbgCi-j9icYP2-AwsfzkvUlBVBCsw7wpXDTH2fAp3C1WyE-s39UOIF_ld_pf5hxzgLIxa4JuFXAq748QnIWPXpeYHy9EALlCackHd_3lKMSH3DoXv2KthC4ud9gpGBoEkqNLW6FmVHaZDCm';
  };

  const handleBookNow = () => {
    updateBooking({ service });
    navigate('/randevu');
  };

  return (
    <main className="detail-main">
      <div className="detail-header">
        <Link to="/hizmetler" className="wizard-prev-btn">
          <span className="material-symbols-outlined text-[16px]">chevron_left</span> Geri Dön
        </Link>
        <span className="hero-label">{service.category} RİTÜELİ</span>
        <h2 className="detail-title">{service.name}</h2>
        <div className="detail-meta">
          <span>Süre: {service.duration} Dakika</span>
          <span>•</span>
          <span>Fiyat: {service.price} TL</span>
        </div>
      </div>

      <div className="detail-hero-box">
        <img
          src={getCategoryImage()}
          className="hero-image"
          alt={service.name}
        />
      </div>

      <div className="detail-content-grid">
        <div className="detail-desc-box">
          <p>{service.desc}</p>
          <p>
            Deneyimli kadromuz tarafından uygulanan bu hizmette, yalnızca cildinize ve saç yapınıza zarar vermeyen, dermatolojik testlerden geçmiş seçkin markaların organik ürünleri kullanılmaktadır. Konforlu salon ortamımızda kendinizi ödüllendirin.
          </p>
        </div>

        <div className="detail-sidebar">
          <h4 className="detail-sidebar-title">Randevu Detayları</h4>
          
          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Uygulama Alanı:</span>
            <span className="detail-sidebar-text">Aura & Gilded Premium Salon</span>
          </div>

          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Fiyat:</span>
            <span className="detail-sidebar-text text-secondary font-bold">{service.price} TL</span>
          </div>

          <div className="detail-sidebar-item">
            <span className="detail-sidebar-text font-semibold">Tahmini Süre:</span>
            <span className="detail-sidebar-text">{service.duration} dk</span>
          </div>

          <button onClick={handleBookNow} className="detail-sidebar-btn">
            HEMEN REZERVE ET
          </button>
        </div>
      </div>

      <section className="detail-steps-section">
        <h3 className="detail-steps-title">Bakım Aşamaları</h3>
        
        <div className="detail-steps-grid">
          <div className="detail-step-card">
            <div className="detail-step-number">1</div>
            <h4 className="detail-step-title">Hazırlık & Yıkama</h4>
            <p className="detail-step-desc">
              Saç veya cilt tipinize uygun özel arındırıcı şampuan veya solüsyonlar kullanılarak yüzey temizliği ve hazırlık yapılır.
            </p>
          </div>

          <div className="detail-step-card">
            <div className="detail-step-number">2</div>
            <h4 className="detail-step-title">Uygulama & Tasarım</h4>
            <p className="detail-step-desc">
              Uzman kadromuz tarafından yüz hattınıza, karakterinize ve beklentinize uygun bireysel kesim, boya veya bakım işlemi titizlikle uygulanır.
            </p>
          </div>

          <div className="detail-step-card">
            <div className="detail-step-number">3</div>
            <h4 className="detail-step-title">Besleme & Şekillendirme</h4>
            <p className="detail-step-desc">
              Nemlendirici ve koruyucu serumlar sürülerek işlem tamamlanır ve fön veya masaj ile son şekli verilir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
