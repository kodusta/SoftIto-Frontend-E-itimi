import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quote() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    projectName: '',
    email: '',
    services: [],
    budget: '25-50',
    timeline: 'ASAP',
    description: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleCheckboxChange = (serviceVal) => {
    setFormData((prev) => {
      const services = prev.services.includes(serviceVal)
        ? prev.services.filter((s) => s !== serviceVal)
        : [...prev.services, serviceVal]
      return { ...prev, services }
    })
  }

  const handleNext = () => {
    const newErrors = {}
    if (step === 1) {
      if (!formData.projectName.trim()) newErrors.projectName = 'Proje adı zorunludur.'
      if (!formData.email.trim()) newErrors.email = 'E-posta adresi zorunludur.'
    }
    if (step === 2 && formData.services.length === 0) {
      newErrors.services = 'En az bir yetenek seçmelisiniz.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStep((prev) => Math.min(prev + 1, totalSteps))
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.description.trim()) {
      setErrors({ description: 'Açıklama zorunludur.' })
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const isSuccess = Math.random() > 0.1
      if (isSuccess) {
        navigate('/status?type=success')
      } else {
        navigate('/status?type=error')
      }
    }, 1500)
  }

  return (
    <main className="quote-main">
      <div className="quote-grid">
        <div className="quote-left">
          <div className="quote-extra-card">
            <span className="home-hero-badge">Bizimle ortak olun</span>
            <h1 className="home-hero-title">Geleceği inşa edelim.</h1>
            <p className="home-hero-desc">Sofistike tasarım ve yüksek performanslı mühendislik yoluyla iddialı fikirleri dijital gerçekliğe dönüştürüyoruz. Yolculuğunuza bugün bizimle başlayın.</p>
          </div>
          <div className="quote-extra-card pt-6">
            <img className="service-card-img-full rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=400" alt="Kreatif Stüdyo" />
          </div>
          <div className="quote-extra-grid pt-6">
            <div className="quote-extra-card">
              <span className="material-symbols-outlined text-secondary">verified</span>
              <p className="testimonial-name">Kurumsal Hazır</p>
              <p className="services-desc text-xs">Güvenlik ve Ölçek Uyumlu</p>
            </div>
          </div>
        </div>

        <div className="quote-right-form-wrapper">
          <div className="quote-progress-bar" style={{ width: `${(step / totalSteps) * 100}%` }}></div>
          <form className="quote-step" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="quote-step">
                <div className="mb-6">
                  <span className="text-secondary font-label-md">Aşama 01/04</span>
                  <h2 className="services-title">Kimlik</h2>
                </div>
                <div className="quote-extra-card">
                  <div className="quote-input-group mb-6">
                    <label className="quote-input-label">Proje Adı</label>
                    <input className="quote-input" type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} placeholder="Örn: Proje Odyssey" required />
                    {errors.projectName && <p className="text-error text-xs mt-1">{errors.projectName}</p>}
                  </div>
                  <div className="quote-input-group">
                    <label className="quote-input-label">E-posta Adresi</label>
                    <input className="quote-input" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e-posta@sirketiniz.com" required />
                    {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quote-step">
                <div className="mb-6">
                  <span className="text-secondary font-label-md">Aşama 02/04</span>
                  <h2 className="services-title">Yetenekler</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'branding', icon: 'auto_awesome', label: 'Markalama' },
                    { id: 'product', icon: 'layers', label: 'Arayüz Tasarımı' },
                    { id: 'web', icon: 'terminal', label: 'Geliştirme' },
                    { id: 'ai', icon: 'psychology', label: 'Yapay Zeka' }
                  ].map((service) => (
                    <label className="relative cursor-pointer" key={service.id}>
                      <input className="quote-checkbox-peer" type="checkbox" checked={formData.services.includes(service.id)} onChange={() => handleCheckboxChange(service.id)} />
                      <div className="quote-checkbox-card">
                        <span className="material-symbols-outlined text-secondary block mb-2">{service.icon}</span>
                        <p className="font-label-md">{service.label}</p>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.services && <p className="text-error text-xs mt-2">{errors.services}</p>}
              </div>
            )}

            {step === 3 && (
              <div className="quote-step">
                <div className="mb-6">
                  <span className="text-secondary font-label-md">Aşama 03/04</span>
                  <h2 className="services-title">Yatırım</h2>
                </div>
                <div className="quote-extra-card">
                  <div className="quote-input-group mb-6">
                    <label className="quote-input-label">Tahmini Bütçe Aralığı (USD)</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { val: '10-25', label: '$10k - $25k' },
                        { val: '25-50', label: '$25k - $50k' },
                        { val: '50+', label: '$50k+' }
                      ].map((budObj) => (
                        <label className="cursor-pointer" key={budObj.val}>
                          <input className="quote-checkbox-peer" type="radio" name="budget" value={budObj.val} checked={formData.budget === budObj.val} onChange={handleInputChange} />
                          <div className="quote-radio-card">
                            {budObj.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="quote-input-group">
                    <label className="quote-input-label">Tercih Edilen Lansman Penceresi</label>
                    <select className="quote-select" name="timeline" value={formData.timeline} onChange={handleInputChange}>
                      <option value="ASAP">Hemen</option>
                      <option value="3-6">3 - 6 Ay</option>
                      <option value="6+">6+ Ay</option>
                      <option value="flexible">Esnek</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="quote-step">
                <div className="mb-6">
                  <span className="text-secondary font-label-md">Aşama 04/04</span>
                  <h2 className="services-title">Bağlam</h2>
                </div>
                <div className="quote-input-group">
                  <label className="quote-input-label">Vizyonu veya zorluğu tanımlayın</label>
                  <textarea className="quote-textarea" name="description" value={formData.description} onChange={handleInputChange} placeholder="Hedefleriniz, temel özellikler ve varsa mevcut çalışmalarınız hakkında bilgi verin..." required rows="5"></textarea>
                  {errors.description && <p className="text-error text-xs mt-1">{errors.description}</p>}
                </div>
              </div>
            )}

            <div className="quote-nav-btns">
              {step > 1 && (
                <button className="quote-back-btn" type="button" onClick={handleBack}>
                  <span className="material-symbols-outlined">arrow_back</span> Geri
                </button>
              )}
              <div className="flex-grow"></div>
              {step < totalSteps ? (
                <button className="quote-next-btn" type="button" onClick={handleNext}>
                  Sonraki Adım <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              ) : (
                <button className="quote-submit-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklifi Gönder'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="quote-extra-grid">
        <div className="quote-extra-card">
          <span className="material-symbols-outlined text-secondary">speed</span>
          <h3 className="service-card-title-md">Hızlı Yanıt</h3>
          <p className="services-desc">24 iş saati içinde ayrıntılı bir teklif ve uygunluk kontrolü bekleyin.</p>
        </div>
        <div className="quote-extra-card">
          <span className="material-symbols-outlined text-secondary">lock</span>
          <h3 className="service-card-title-md">Gizlilik</h3>
          <p className="services-desc">Paylaşılan tüm proje detayları standart ajans NDA protokolümüzle korunmaktadır.</p>
        </div>
        <div className="quote-extra-card">
          <span className="material-symbols-outlined text-secondary">chat</span>
          <h3 className="service-card-title-md">Doğrudan Erişim</h3>
          <p className="services-desc">Aracıyı atlayın. Doğrudan baş tasarımcılar ve mühendislerle konuşacaksınız.</p>
        </div>
      </div>
    </main>
  )
}
