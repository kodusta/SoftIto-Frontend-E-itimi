import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DESTINATIONS = [
  { name: 'Tokyo, Japonya', hotels: '1,240 Otel Mevcut', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN66YRXGQ-qyFrcubCxlE3R1XneS4xoxfJYf5MtblP7o_GZQAitqVTy3oPXaQXJaTAa4AWPMrw_QdzOcLOcmGWbTbSliD58D9KwFN794CL48DEBex6uorR9VEg3QX2PxRM41Rv1kJCXLsBumk8B94UJVCwEF5nFsLA_zgLbZyYsUMvlTLQiPgPgv40RlmRDagcYGY78AS_Rbf9Z_3EqWBwKlNR36eXODPbKd3C8kwNkBdgDvHJFXRf9Lml33tsGQdZnusa4jHTtIM7', size: 'large' },
  { name: 'Paris, Fransa', hotels: '890 Otel Mevcut', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOOw-t9UZaT8g3gSb-oPv8tugHKf0zMYMv4IQPYNGzjF05yiPYOKDOAp5qulsSkBNjt3JKAChd3Ix64r5XgLfixBBoVvBJU-SHne-8tKmsR1DRThvQX6fP1f5voiA4iXzva4kGIlSsx1e59zU1VUD_CpHv-Sj_0ZIUxRxCxy6aXabefmRC0QFKzgjRmuy_ku40DM9RXxL0wnB_TKiLWd_wdgyB8EDU9gj6lNFhP4vxIvOhp-Thr31LzWSu4h7kFJ4kZIeLj8WAKjZ5', size: 'mid' },
  { name: 'Dubai, BAE', hotels: '512 Otel Mevcut', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaUY-xynKSybG1A0lbDvTWs4_0QRtW8XbE-4Mvr72AU6idZ7AZUmyFRPGMoc4TwhR1sxo8mBrVDEYkwXCWoKudSY_QtesueI8l4t6EG2jCUGnvchmkY8etUqV3PuKu6KUqYZlBhIp5_OgaW92dic2mw1yjcJl5aPO94rtFNLq5TxtuVncedgvefOrXpaPbUk5k8XSVSME97gQSASwtJKQX1__MACmjA9BtNglVfOEImTeX9imFfUK5_dZrNTovGsts4X4SuR-Pv0pj', size: 'small' },
  { name: 'Maldivler', hotels: '325 Otel Mevcut', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNXkAKwETMCBXKUpSAyA3-JubbSaylo77u1Lsj8ReP2QQUyJvUfZm3NMa9RpX_6qg_001Kj4rxkloPAMHpbcS-qWI8woHxMGsdfs-3BCoVcdgXO6eqwWbI3Pzu_oL5PC4jbeFHt8OdHKn_xqlMOg4opg3_sum2Gg07xjh6J7RVxu7YcUbFQ1IApKasB8R70U4KN1_T3CLPd9qM0ZbsvfUJtEBqIkqL0pX8OL4NmBA471RnYyWQwqUI1vwb68PVvnokwKHuLTkUmSW', size: 'small' }
];

const TOP_HOTELS = [
  { name: 'The Grand Regency', type: 'Butik • Londra', location: 'Mayfair, Londra', rating: '4.9', price: '299', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFFe_NwZykMbc2CK55KgLsfJHwqWj7iCaVLA7tJmUEQwpAvLCPf2Fw9_eXIC8V2VIprboqk2xkC4glR5lKjOdkMLn4-XhEALpdVnkjUeFNjCvEzCgYaVPe18AlSXQOq7DO0MxaYeUGHWh3FNYQQowU50mZh9PGuaUX5SCp4T3YPgQKuDNmjHUdM66SWNlmZAQLGhLig_9OrW2p0SQI8ltHcNK3Xh-ioQDXroTUul0AAdv9ioss8aAHM6YSCIcVHV2EV6Avtt64l6Ex' },
  { name: 'Silver Peak Lodge', type: 'Resort • Aspen', location: 'Aspen, Colorado', rating: '4.8', price: '450', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHRaBnCTXhsDBKf_OpySkAZO4oOneRc5z3hZRMtQouSxqxxEksVaU-ma1pvJbVa5T_T7peWuE6JIj9_Yf5uIxXxUCY-v-H1BpikpSDDC0WR_Wao0mgz3WEUtv9iWfYnSh1VAqUdpLmH_FiaVn8HtgaJ732uSnN2w7pa88YWxq41wwXa5duKdikG7SeRncefFpSuO5tH6OQ1WB0IjNc2c0xSz-Vv-q8m6JFRAnq3Xq5ZG7R76Em5V7SxDBCgdSLviPrkOZI39OpOHjF', alert: 'Son 2 Oda!' },
  { name: 'Azure Vista Villas', type: 'Lüks Villa • Santorini', location: 'Oia, Santorini', rating: '5.0', price: '620', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPAOWn5QcxEI82ZJtIl99yBj2MKSOPq6evKwqpbf37n0s2cVl9h1818MSJ1abHtyF50aGFzn0bGe9RIKPZusbzBjlZFEqj8vgftWxJlF53-8uxD0Ohy2A-BLgw1HANT5hnGGp8bNjLjj6NgdFLSayYiv95L8NtymEyY18IV8QOFqLzYe6mTCsjhSUtRTLaXdlSpfA6oUloe8PBz9fo6HpjZyBylLqoLbY8ZKN1l4kuCaAdAiw4YoE9Zps00JZx4HTRBp3PfjklHGFS' },
  { name: 'Metropolitan Suites', type: 'Şehir Oteli • New York', location: 'Manhattan, NY', rating: '4.7', price: '375', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6kqjsnLcE71Vudh6mldqKRsau7s0xcqL95KHt9rzwej3BeeN9SYxxk93iR4pC2fV9VsXFoGcsSf_jjWIZfan83QZsj6ivOyq9165o8IDECPurHqtl_SbbAdayEN2yPp5B1U45LsZacQPFltx93JXYRC4yYhbIZaVys3S5yiN_AQuZLmZrW3_gTPoQsklCs9fw-hC9Q_6FD5UZPjCKJBDCvJJGa5yA_w8pFbV0H9C3gYmy5eEd9lBo53aCN9puWqFdIltYdQtk3Lh-' }
];

export default function Home() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/rooms', { state: { destination, dates, guests } });
  };

  const handleBook = () => {
    navigate('/rooms');
  };

  return (
    <main>
      <section className="hero-section">
        <div className="hero-bg">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWs2rAQM3YSTxc1Sy_IF4r2LPPnUaUVFHU7GB-WfbWdJEvZXcaTIbCqMiTCiPG9byu3OxF37hoaji6nj2dWnsGq4ajQE_C4XxNZY8ugeBAhZbOo6wuZpgo2RhNyaxRKf_s1zawKkz1gsEvr3RY7L05DsiYKb4njvAT3fagLQ0p8uIysCOGw2rEBHEIS4PDAz56FHAhEn3Fioc-7mm6ZJ9WS1NtBeM-lgLheZFPn3l_bBEjKPYn--VrhoBrJkPMwKkRdWkFH-7b4B9V')` }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-container">
          <h1 className="hero-title">Dünya Çapında Sıra Dışı Konaklamaları Keşfedin</h1>
          <p className="hero-desc">Özenle seçilmiş destinasyonlarda konfor ve lüksün mükemmel uyumunu deneyimleyin.</p>
          
          <form onSubmit={handleSearch} className="search-bar">
            <div className="search-fields">
              <div className="search-group">
                <label className="search-label">Destinasyon</label>
                <div className="search-input-wrapper">
                  <span className="material-symbols-outlined text-ocean-blue">location_on</span>
                  <input 
                    className="search-input" 
                    placeholder="Nereye gidiyorsunuz?" 
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="search-group">
                <label className="search-label">Tarihler</label>
                <div className="search-input-wrapper">
                  <span className="material-symbols-outlined text-ocean-blue">calendar_month</span>
                  <input 
                    className="search-input" 
                    placeholder="Tarih ekleyin" 
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>
              </div>
              <div className="search-group">
                <label className="search-label">Misafirler</label>
                <div className="search-input-wrapper">
                  <span className="material-symbols-outlined text-ocean-blue">person</span>
                  <input 
                    className="search-input" 
                    placeholder="Misafir ekleyin" 
                    type="text"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn-search">
              Arama Yap
            </button>
          </form>
        </div>
      </section>

      <section className="section-perks">
        <div className="section-header">
          <div>
            <span className="badge-perk">Üye Ayrıcalıkları</span>
            <h2 className="section-title">Özel Kampanyalar</h2>
          </div>
          <button onClick={handleBook} className="section-link">
            Tüm teklifleri görüntüle <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="offers-grid">
          <div className="offer-card">
            <div 
              className="offer-bg" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBySO_LELBx5Zh2LHCIqHnOb1NBRpqMhOWhMikkR7Q_BWRU1DEKe-JuizFeOjflp_f3Hz_xHVBDMv5zawO5U5sDwkGczlIKPzfhgYnBjKleRSACa1M7JsojOlfsjG-4ekD7zLR7m_MBxdBNwW3VjUYP6o1lWSlS-2b_jnXSG49K5FFv4me3P1ramgLObxERGp_GADnwIsxJm2QPmwGKYNDuPMk8VZW3ye-U9pM2ECTcIynQdA_SPHLFFjNhI_qIAYNLIUOwk9vpflh')` }}
            />
            <div className="offer-overlay">
              <span className="offer-badge-red">Sınırlı Fırsat</span>
              <h3 className="offer-title">Erken Rezervasyon Fırsatı</h3>
              <p className="offer-desc">60 gün önceden rezervasyon yapın, yaz tatilinizde %25 tasarruf edin.</p>
              <button onClick={handleBook} className="offer-btn">Fırsatı Yakala</button>
            </div>
          </div>
          <div className="offer-card">
            <div 
              className="offer-bg" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_XrHpe73rNY5MPuEniHq_711YXHKQF-jiod0V_yl6O0BltsDSyY9Wc9WV-8dH0xjibZY8BlishfvSpafEGNvjt09XMwvgGD_8bxPDDzLnNFTaJc-0PvSRcJn1pqC_w_0jJNpJzXT8DGH-CXxxKBVeK0dgpPx7xXzgEeV8crgjXbPgSpcmjwS0q_mLmAUDcKc3ocS7SBfV-yFDlLzDmAMJSOkCXd8nCwkGyAPps3Ob21AYDlHnt8G9wFIZnf2VYN0JbwD06E1gCzAa')` }}
            />
            <div className="offer-overlay">
              <span className="offer-badge-blue">Üyelere Özel</span>
              <h3 className="offer-title">Sadakat Programı Hafta Sonu</h3>
              <p className="offer-desc">Bu hafta sonu çift puan kazanın ve ücretsiz kahvaltının tadını çıkarın.</p>
              <button onClick={handleBook} className="offer-btn">Şimdi Katıl</button>
            </div>
          </div>
        </div>
      </section>

      <section className="trending-section">
        <div className="trending-container">
          <div className="text-center mb-12">
            <h2 className="section-title">Popüler Destinasyonları Keşfedin</h2>
            <p className="text-slate-gray font-body-md mt-4">Her seyahat tarzına özel hazırlanmış kaçış rotaları.</p>
          </div>
          <div className="trending-grid">
            {DESTINATIONS.map((dest, index) => {
              const cardClass = dest.size === 'large' ? 'dest-card-large' : (dest.size === 'mid' ? 'dest-card-mid' : 'dest-card-small');
              return (
                <div key={index} className={cardClass} onClick={handleBook}>
                  <div 
                    className="dest-bg group-hover:scale-110" 
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  />
                  <div className="dest-overlay" />
                  <div className="dest-text">
                    <h4 className="dest-name">{dest.name}</h4>
                    <p className="dest-count">{dest.hotels}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-perks">
        <div className="mb-12">
          <h2 className="section-title">En Yüksek Puanlı Oteller</h2>
          <p className="text-slate-gray font-body-md">Doğrulanmış değerlendirmelere göre misafirlerin en çok beğendiği konaklamalar.</p>
        </div>
        <div className="hotels-grid">
          {TOP_HOTELS.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <div className="hotel-img-wrapper">
                <img className="hotel-img group-hover:scale-105" src={hotel.image} alt={hotel.name} />
                <span className="hotel-rating-badge">
                  <span className="material-symbols-outlined text-[14px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {hotel.rating}
                </span>
                {hotel.alert && (
                  <span className="hotel-tag-badge">{hotel.alert}</span>
                )}
              </div>
              <div className="hotel-info">
                <p className="hotel-category">{hotel.type}</p>
                <h4 className="hotel-name">{hotel.name}</h4>
                <div className="hotel-location">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>{hotel.location}</span>
                </div>
                <div className="hotel-price-row">
                  <div>
                    <span className="hotel-price-label">Başlayan fiyatlar</span>
                    <span className="hotel-price-value">${hotel.price}<span className="text-sm font-normal text-slate-gray">/gece</span></span>
                  </div>
                  <button onClick={handleBook} className="hotel-btn-book">İncele</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="newsletter-title">Daha Akıllı Gezin, Daha İyi Konaklayın</h2>
          <p className="newsletter-desc">Gizli fırsatlara ve en son seyahat ilhamlarına doğrudan gelen kutunuzdan erişin.</p>
          <div className="newsletter-form">
            <input className="newsletter-input" placeholder="E-posta adresiniz" type="email" />
            <button className="newsletter-btn">Abone Ol</button>
          </div>
          <p className="mt-4 text-xs opacity-50">Abone olarak Gizlilik Politikamızı ve Hizmet Koşullarımızı kabul etmiş olursunuz.</p>
        </div>
      </section>
    </main>
  );
}
