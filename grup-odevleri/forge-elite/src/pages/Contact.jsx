import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="main-content">
      <div className="max-w-7xl mx-auto px-container-margin-mobile md:px-container-margin-desktop">
        <section className="mb-stack-lg">
          <h1 className="font-display-lg text-display-lg uppercase mb-4 text-primary">
            Performans Alanına <span className="text-primary-fixed">Katılın</span>
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            Elit performans eğitmenlerimizle bağlantı kurun. İster profesyonel atletik eğitim ister tam bir yaşam tarzı değişimi arıyor olun, siz hazır olduğunuzda biz de hazırız.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 glass-panel rounded-xl p-6 md:p-8">
            <h2 className="font-headline-lg text-headline-lg mb-6 text-primary">BİZE YAZIN</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-label-sm text-label-sm text-outline mb-2 block uppercase">Ad Soyad</label>
                  <input 
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-fixed focus:ring-0 text-on-surface py-3 transition-colors duration-300" 
                    placeholder="Sporcu Adı" 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="font-label-sm text-label-sm text-outline mb-2 block uppercase">E-posta</label>
                  <input 
                    className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-fixed focus:ring-0 text-on-surface py-3 transition-colors duration-300" 
                    placeholder="eposta@performans.com" 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-label-sm text-label-sm text-outline mb-2 block uppercase">Mesajınız</label>
                <textarea 
                  className="w-full bg-surface-container border-0 border-b-2 border-outline-variant focus:border-primary-fixed focus:ring-0 text-on-surface py-3 transition-colors duration-300 resize-none" 
                  placeholder="Bize hedeflerinizden bahsedin..." 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button 
                className={status === 'success' ? 'w-full md:w-auto bg-[#14C333] text-white px-12 py-4 rounded-full font-display-lg font-extrabold uppercase transition-all' : 'w-full md:w-auto bg-primary-fixed text-on-primary-fixed px-12 py-4 rounded-full font-display-lg font-extrabold uppercase glow-primary hover:scale-[0.98] transition-all'} 
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'idle' && 'MESAJI GÖNDER'}
                {status === 'sending' && 'İLETİLİYOR...'}
                {status === 'success' && 'MESAJ ALINDI'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel rounded-xl p-6 flex-1">
              <h2 className="font-headline-md text-headline-md mb-6 text-primary uppercase">Elit Merkez</h2>
              <div className="space-y-6">
                <a className="flex items-start gap-4 group" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline uppercase">Konum</p>
                    <p className="text-body-md font-body-md text-on-surface">1200 Performans Bulvarı, <br />İstanbul, 34000</p>
                  </div>
                </a>
                <a className="flex items-center gap-4 group" href="tel:+902121234567">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline uppercase">Telefon</p>
                    <p className="text-body-md font-body-md text-on-surface">+90 212 123 4567</p>
                  </div>
                </a>
                <a className="flex items-center gap-4 group" href="mailto:elite@forge.com">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-fixed group-hover:bg-primary-fixed group-hover:text-on-primary-fixed transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-label-sm text-outline uppercase">E-posta</p>
                    <p className="text-body-md font-body-md text-on-surface">iletisim@forge-elite.com</p>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant">
                <p className="font-label-sm text-label-sm text-outline uppercase mb-4">Bizi Takip Edin</p>
                <div className="flex gap-4">
                  <a className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed hover:border-primary-fixed transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  <a class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed hover:border-primary-fixed transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a>
                  <a class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-primary-fixed hover:text-on-primary-fixed hover:border-primary-fixed transition-all duration-300" href="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="h-64 lg:h-auto lg:flex-1 relative rounded-xl overflow-hidden glass-panel group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBi2zAX_9hsHUnag8wJsJ_4jJL7DL3jrmjkxXu1QhvArVTa5NsBX2dEoto46mgbnb0Seu2xp0KJOGXiXtUmDla7vomW4KGHQkmbpyh0LkcvyvFv42EvOEevssPExS-tLN8Rd4tyQdiQbss7yzZP42R8nmRXhvU8QlPbTbBRlmAVC75_d10MQgdTLZeNU6CNYR0PLSX5CUSLyy2ZFaCXk1IS4FIFCK4hJllAsc_NiskZgFI3wjlzOE4eiJOkIPLSpeomL9PhOqanDd0')` }}
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md p-4 rounded-lg border border-outline-variant">
                <p className="font-label-sm text-label-sm text-primary-fixed uppercase mb-1">Canlı İzleme</p>
                <p className="text-xs text-on-surface">Forge Elite Merkez İzleme Aktif</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-stack-lg p-6 glass-panel rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary uppercase">HIZLI BİR SORUNUZ MU VAR?</h3>
            <p className="text-on-surface-variant">Üyelikler ve antrenmanlar hakkında anında yanıt almak için sıkça sorulan sorularımızı inceleyin.</p>
          </div>
          <button className="border-2 border-primary-fixed text-primary-fixed px-8 py-3 rounded-full font-bold hover:bg-primary-fixed hover:text-on-primary-fixed transition-all">
            SSS ZİYARET ET
          </button>
        </section>
      </div>
    </div>
  );
}
