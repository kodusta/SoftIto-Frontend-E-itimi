export const services = [
  {
    id: "routine",
    title: "Genel Kontrol",
    category: "Genel Diş",
    duration: "30 dk",
    price: "750 TL",
    icon: "medical_services",
    description: "Rutin muayene, röntgen analizi ve profesyonel diş temizliği.",
    details: "Genel diş bakımı ve koruyucu hekimlik uygulamaları ile ağız sağlığınızı kontrol altında tutuyoruz. Erken teşhis sayesinde olası diş problemlerini büyümeden önlüyoruz.",
    steps: [
      "Ağız içi muayene ve röntgen çekimi",
      "Plak ve diş taşı temizliği (detertraj)",
      "Diş parlatma (polisaj)",
      "Ağız hijyeni eğitimi ve fırçalama tavsiyeleri"
    ]
  },
  {
    id: "whitening",
    title: "Diş Beyazlatma",
    category: "Estetik",
    duration: "45 dk",
    price: "2.500 TL",
    icon: "auto_fix_high",
    description: "Modern lazer teknolojisi ile dişlerinizi güvenle beyazlatın.",
    details: "Kahve, çay veya sigara kullanımıyla sararan dişlerinizi, özel beyazlatıcı jeller ve klinik tipi lazer teknolojisi ile 45 dakikada 3-4 ton açıyoruz.",
    steps: [
      "Diş eti koruyucu bariyer uygulanması",
      "Özel beyazlatıcı jel sürülmesi",
      "Lazer ışık aktivasyonu (15-20 dk seans)",
      "Hassasiyet giderici jel uygulaması"
    ]
  },
  {
    id: "implant",
    title: "Dental İmplant",
    category: "Cerrahi",
    duration: "60 dk",
    price: "12.000 TL",
    icon: "dentistry",
    description: "Eksik dişlerin yerini alan ömür boyu garantili titanyum vidalar.",
    details: "Tek veya çoklu diş eksikliklerinde çene kemiğine yerleştirilen titanyum vidalar sayesinde, komşu dişlere zarar vermeden kalıcı ve doğal diş konforu sunuyoruz.",
    steps: [
      "Detaylı 3D çene tomografisi ve planlama",
      "Lokal anestezi altında implant yerleşimi",
      "Kemik entegrasyonu süreci (3-6 ay)",
      "Kalıcı estetik porselen kron montajı"
    ]
  },
  {
    id: "orthodontics",
    title: "Ortodonti & Şeffaf Plak",
    category: "Ortodonti",
    duration: "45 dk",
    price: "35.000 TL",
    icon: "align_items_stretch",
    description: "Telsiz ve görünmez yöntemlerle diş hizalama çözümleri.",
    details: "Çapraşık dişleri ve çene kapanış bozukluklarını, klasik metal braketler yerine şeffaf plaklar (Invisalign) kullanarak konforlu ve görünmez şekilde hizalıyoruz.",
    steps: [
      "Dijital 3D ağız içi tarama",
      "Tedavi simülasyonu ve planlama",
      "Özel şeffaf plak serisinin üretimi",
      "Periyodik kontrol ve plak değişimi"
    ]
  },
  {
    id: "veneers",
    title: "Lamine Veneer",
    category: "Estetik",
    duration: "60 dk",
    price: "15.000 TL",
    icon: "star",
    description: "Kusursuz form ve beyazlık için ince yaprak porselenler.",
    details: "Dişlerin ön yüzeyinde minimal aşındırma yapılarak yapıştırılan yaprak porselen lamine uygulaması ile diş aralıkları, kırıklar ve kalıcı sarılıklar giderilir.",
    steps: [
      "Gülüş tasarımı ve fotoğraflama",
      "Minimal ön yüzey hazırlığı (0.3-0.5 mm)",
      "Hassas ölçü alımı ve geçici diş uygulaması",
      "Porselen laminelerin kalıcı yapıştırılması"
    ]
  },
  {
    id: "root-canal",
    title: "Kanal Tedavisi",
    category: "Genel Diş",
    duration: "45 dk",
    price: "3.200 TL",
    icon: "biotech",
    description: "Enfekte olmuş dişlerinizi mikroskobik yöntemlerle kurtarma.",
    details: "Dişin sinir dokusunun (pulpa) enfekte olduğu durumlarda, kanalların temizlenip dolgu maddeleriyle doldurulmasıyla dişi ağızda tutarak çekimi engelliyoruz.",
    steps: [
      "Lokal anestezi ile tam uyuşma",
      "Çürük dokunun temizlenmesi ve kanallara erişim",
      "Döner aletlerle kanal temizliği ve dezenfeksiyonu",
      "Kanal dolumu ve üst dolgu restorasyonu"
    ]
  },
  {
    id: "pedodontics",
    title: "Çocuk Diş Hekimliği",
    category: "Genel Diş",
    duration: "30 dk",
    price: "1.200 TL",
    icon: "child_care",
    description: "Minik dostlarımız için oyun eşliğinde diş bakımları.",
    details: "Çocuklarda süt ve daimi diş gelişimini izleme, çürük önleyici uygulamalar (flor, fissür örtücü) ve diş hekimi korkusunu yenmeye yönelik pedagojik yaklaşımlar sunuyoruz.",
    steps: [
      "Klinik tanışma ve oyunla muayene",
      "Çürük risk analizi ve beslenme tavsiyeleri",
      "Koruyucu jel veya fissür örtücü uygulaması",
      "Fırçalama alışkanlığı kazandırma eğitimi"
    ]
  }
];

export const doctors = [
  {
    id: "selin-yilmaz",
    name: "Dr. Selin Yılmaz",
    title: "Kurucu / Estetik Diş Hekimi",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK0R85Wa6OY2ffzEzpOPRDuhT25RRgTPGH701tqbdFTWZbCHjKClF5ed_1p8gX937-dNwlRCH52m1NGKXQZl4tQ37Vehs09d2XA0i9qKUWuULdlUHV4zB7Xi7uabpq9VX0lw7M1asShadzPb8crVXLEAWEiLIg97X1VjMgSmz6ONigrzzdjc3I5Ip8tJ5YWLURXrm99nY-C9SEix4_DwZBwXqBFdK2UUmo-7DF6KV6Xb0AxWTr9VsKWB7M1Qe4uQG7_sNVGrF9jMk",
    specialties: ["Estetik Gülüş Tasarımı", "Lamine Veneer", "Zirkonyum"],
    bio: "Hacettepe Üniversitesi Diş Hekimliği Fakültesi mezunu. Estetik diş hekimliği alanında 15 yılı aşkın süredir ulusal ve uluslararası çalışmaları bulunmaktadır."
  },
  {
    id: "murat-erden",
    name: "Dr. Murat Erden",
    title: "Ortodontist",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbunfDqFRvA6-f35XgeAPM2NA0QLaxWpwy5KU3PV0K07NhHoWPanojisaxBdWq_6WAI6RMOI0LTR0Vn9suHXErV0gWZNbgnq84_YojPIBf41G24jP7t008YDFrvP_sfDwHVH40zq1UPv22WWLj2SlFlBib-EBI_BdidXhNYo9ah-9qCgv0Htrf2CWhpW34t7ZW5xOR_F-tjyzPyWwZVhfIxxtRfNws45jyU0yPtrI9TjVuUQrKn7tJ3im0aRq34QkOizUJCkKrtJY",
    specialties: ["Şeffaf Plak Tedavisi", "Metal & Porselen Tel"],
    bio: "Ankara Üniversitesi Diş Hekimliği Fakültesi ve Ortodonti Uzmanlığı mezunu. Sertifikalı Invisalign uygulayıcısı olup, şeffaf plak sistemlerinde uzmandır."
  },
  {
    id: "kerem-can",
    name: "Dr. Kerem Can",
    title: "Ağız ve Çene Cerrahı",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6v6czocteVLVhNkr2hgHfoM0TE8ZV_l9qtuMBbAeYLVA8aQ9qIYbMUuBigJBcbNXVEgrkpEWTDQrLhMzeB1YGxwEWncCq00Ou_KKUbp49j56NQhiYm2QDkPINfbwUqvIxpDZ5xDSNEuMFFC1hvWwJd018_wF9oqqTShcd0VmM3AyQ_j198u3UfLWdJ0wlIK4y10_f_aJyvGsmVt0aKfo4yZAZViBYuTqGOqCK643Xdl1Xs8432oh8kqUk4xwvddNIxEvVmtfuRQ",
    specialties: ["İmplantoloji", "Gömülü Diş Çekimi", "Kemik Grefti"],
    bio: "Gazi Üniversitesi mezunu ve Çene Cerrahisi doktorası sahibi. İleri implantoloji, çene kistleri tedavisi ve kemik ogmentasyonları üzerine odaklanmaktadır."
  },
  {
    id: "elif-soydan",
    name: "Dr. Elif Soydan",
    title: "Pedodontist",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDejpzWZwfO5-wvjihs-6Q7smiTlZlYfLjTiA4_k3u-6LH6j2kaL-s8ZoKIzvp5MjbgZs8FsibEII_wfBsA9iCgX0DJuCC_cBpt5gSWbDxk-ylloJljvQ2tBt1FqbvEnMQoUe_ZST7VWo8sFz0uOSqjcV6zhU8yMbdgK56qQFVIRl9QWHvStKmAJ8i7Rh7zL1elPaqupf2Jo33t7p9TEUXDRKH0D-4eqmQgz8GWU7BktVVpu2t12gcPaoXFO_Ph3syudXjUFDZxlVI",
    specialties: ["Çocuk Diş Tedavisi", "Florür Uygulaması", "Sedasyon"],
    bio: "Ege Üniversitesi mezunudur. Çocukların diş muayene anksiyetelerini azaltmak için oyunla muayene yaklaşımları uygulayarak pedodonti hizmeti sunmaktadır."
  },
  {
    id: "mehmet-can",
    name: "Dr. Mehmet Can",
    title: "Genel Diş Hekimi",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMoFrxTZQTnxC7InS3ioAj6a0rwAA_pWQM6WAK-GBNnVHFD6PvEf--SpStuTFTcYfC9q8c5OV1CeQaW4vZlIAIMROfBG38FNFEhJEppLnOVjn-MYAdjDwTpdd0ACISWSGn4FY8ye4aXF0VH3FLzGO41Du-onVlKc9czWHARx465VcnbLeePNk8nUefRekJ2u_qvWv0_VwRgJF6ueLIi39vLr7IzfhwzERFLfPHb_OLzIcLBzIBGGb1plPIuhEZ2fmIeaFlgNJcKeo",
    specialties: ["Genel Kontrol", "Kanal Tedavisi", "Estetik Dolgu"],
    bio: "İstanbul Üniversitesi Diş Hekimliği Fakültesi mezunu. 8 yıllık genel diş hekimliği ve konservatif dolgu, protetik restorasyonlar alanında tecrübelidir."
  },
  {
    id: "ayse-yilmaz",
    name: "Dr. Ayşe Yılmaz",
    title: "Ortodonti Uzmanı",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG2cAicx9gNRromebL-O_-08qXPZ8KC-KGcWJo9U1zqSPa1vgjRTXvLjAYkXma-4OBNP1_byGpZKSWmypGdfGsZChRNqSVmTJn5W_m-_3XIR6TtT8xPMkEpIjYpHXd-Z0FxlxdvhFNd8RKcAblWJugnDiCbD6u7Y_3WpXEO6YxFCe7mRCmhmmfCgECFHFPmEKpxn3Dy59J2OttWLAlRmtbQ4H-lcVW3cF0tZ9gajM9qHgOhO0bWv2sB_yi3E0XISKFIFfT_W4sjcE",
    specialties: ["Hizalama Plakları", "Metal & Safir Braketler"],
    bio: "Yeditepe Üniversitesi Diş Hekimliği Fakültesi mezunudur. Estetik ortodonti ve eklem rahatsızlıkları üzerine uzmanlaşmıştır."
  }
];
