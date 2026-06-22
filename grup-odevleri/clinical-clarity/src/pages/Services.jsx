import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/clinicData";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const navigate = useNavigate();

  const categories = ["Tümü", "Genel Diş", "Estetik", "Cerrahi", "Ortodonti"];

  const filteredServices =
    selectedCategory === "Tümü"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <div className="bg-surface">
      <section className="about-hero">
        <span className="about-hero-badge">Uzman Tedavi Hizmetleri</span>
        <h1 className="about-hero-title">Gülüşünüzü Yeniden Keşfedin</h1>
        <p className="about-hero-desc">
          Modern teknolojiler ve uzman kadromuzla, her hastamıza özel, ağrısız ve estetik çözümler sunuyoruz. Sizin sağlığınız bizim önceliğimizdir.
        </p>
      </section>

      <div className="services-filter-row">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={
              selectedCategory === cat
                ? "services-filter-btn services-filter-btn-active"
                : "services-filter-btn services-filter-btn-inactive"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="services-grid-container">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 0;

          if (service.id === "implant" || service.id === "orthodontics") {
            return (
              <div key={service.id} className="bento-card-featured group">
                <div className="bento-card-featured-layout">
                  {isEven ? (
                    <>
                      <div className="bento-card-featured-info">
                        <div>
                          <span className="bento-card-icon-primary">
                            {service.icon}
                          </span>
                          <h3 className="bento-card-title">{service.title}</h3>
                          <p className="bento-card-desc">
                            {service.description}
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/hizmet/${service.id}`)}
                          className="bento-card-btn-primary"
                        >
                          Detaylı Bilgi
                        </button>
                      </div>
                      <div className="bento-card-featured-img-wrap">
                        <img
                          className="bento-card-featured-img"
                          src={
                            service.id === "implant"
                              ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCPtokghlyvSx9pmTmX9Y3xT579FfhH2tUrq3MClSlSL4Fhkm0ZkBXzKZp6_zeYtMoq5FkOidfbW9xhMigvq1kh9qj4rUcKEhAnq4jq9ssCyfwl8iNF7Bd66t_GNr_21pFFJVLOvG33HEeHKAryBMdQDVbN8G5ZWj0PG4KEo852MDXS16QhonYKhg5GiJ__yXCFP1Y_0Oyg3FhrObJm0_-NmqZ-GHt_Cqox3x2xqWsn2R323es-EwuvZ6AGJd8AqPqWN0yiXRDdZ2o"
                              : "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKP4YLkPQ7e4EGj7mtkP_eBYAgBsL7XD1d11EzNgfOSr5rFzhCvj6I5TDp-qjXVGFBqvsXiAdInu3e3RnYySquFgSMK_XPj0PMzjFbFTutVTDy51NIDYwW7TF9vtzziIwpaAU-P3XQOo0aWu1GqrCCtfqOGM37Pi1pXG7Ke7VtE8MNipS43JBQEsL_xGwTKtlxdXwfP_uihXmN2RNe-NOuZtidoh2qyq_YMwitiUS0KP-sSxOY4bNU8YNrAtgUF7WaF2zVW13Ni0"
                          }
                          alt={service.title}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bento-card-featured-img-wrap">
                        <img
                          className="bento-card-featured-img"
                          src={
                            service.id === "implant"
                              ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCPtokghlyvSx9pmTmX9Y3xT579FfhH2tUrq3MClSlSL4Fhkm0ZkBXzKZp6_zeYtMoq5FkOidfbW9xhMigvq1kh9qj4rUcKEhAnq4jq9ssCyfwl8iNF7Bd66t_GNr_21pFFJVLOvG33HEeHKAryBMdQDVbN8G5ZWj0PG4KEo852MDXS16QhonYKhg5GiJ__yXCFP1Y_0Oyg3FhrObJm0_-NmqZ-GHt_Cqox3x2xqWsn2R323es-EwuvZ6AGJd8AqPqWN0yiXRDdZ2o"
                              : "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKP4YLkPQ7e4EGj7mtkP_eBYAgBsL7XD1d11EzNgfOSr5rFzhCvj6I5TDp-qjXVGFBqvsXiAdInu3e3RnYySquFgSMK_XPj0PMzjFbFTutVTDy51NIDYwW7TF9vtzziIwpaAU-P3XQOo0aWu1GqrCCtfqOGM37Pi1pXG7Ke7VtE8MNipS43JBQEsL_xGwTKtlxdXwfP_uihXmN2RNe-NOuZtidoh2qyq_YMwitiUS0KP-sSxOY4bNU8YNrAtgUF7WaF2zVW13Ni0"
                          }
                          alt={service.title}
                        />
                      </div>
                      <div className="bento-card-featured-info">
                        <div>
                          <span className="bento-card-icon-primary">
                            {service.icon}
                          </span>
                          <h3 className="bento-card-title">{service.title}</h3>
                          <p className="bento-card-desc">
                            {service.description}
                          </p>
                        </div>
                        <button
                          onClick={() => navigate(`/hizmet/${service.id}`)}
                          className="bento-card-btn-primary"
                        >
                          Detaylı Bilgi
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          } else if (service.id === "veneers") {
            return (
              <div key={service.id} className="bento-card-single group">
                <div>
                  <span className="bento-card-icon-tertiary">
                    {service.icon}
                  </span>
                  <h3 className="bento-card-title">{service.title}</h3>
                  <p className="bento-card-desc">{service.description}</p>
                </div>
                <div className="bento-card-single-img-wrap">
                  <img
                    className="bento-card-single-img"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8cK4-T4YGbqedPNEUVxUd8z7LYNeUosuCWKNe-N6HzmhKYTip-AWl8oAwLvjHaJfLQAbdvE7Vn_RQpNs32XUFjV07BqRcGjfthvNP2Sc3mpAzSca-K3JnhKq-zi2rP4odLkQ5tlZlut1BFTiYrWDEF7pcdDa9zNdfN4AHwura_zm9a_NxRVxm049xmZjoiFDUxBHCAZbfbS9SzlCQzUnB6-IaZcwomagslo_HfzkVggoou1vQZQN9lGgnvO7B2z5hC-kgoTDNm5A"
                    alt={service.title}
                  />
                </div>
                <button
                  onClick={() => navigate(`/hizmet/${service.id}`)}
                  className="bento-card-btn-outline"
                >
                  İncele
                </button>
              </div>
            );
          } else {
            return (
              <div key={service.id} className="bento-card-small group">
                <div>
                  <span className="bento-card-icon-primary">
                    {service.icon}
                  </span>
                  <h3 className="bento-card-title">{service.title}</h3>
                  <p className="bento-card-desc">{service.description}</p>
                </div>
                <button
                  onClick={() => navigate(`/hizmet/${service.id}`)}
                  className="bento-card-small-btn"
                >
                  Detaylar
                  <span className="bottom-nav-icon">arrow_forward</span>
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
