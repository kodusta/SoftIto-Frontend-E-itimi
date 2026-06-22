import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: "Akıllı Taşınabilir Hızlı Şarj Cihazı - Mat Siyah",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 149.90,
    rating: 4.5,
    reviews: 120,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbtJqI9yLaFrEk4mg3irQG7pCYvvZM3lkXr6cXWrUHp6kghn9GtIf1Ba-Dl7Sc9l0VtvGvMaWb79z22mnaJM4CQp2NogdEnfW2EjK5ka2hFjyQcrUgiBGOaYyh0sAskeieadRUeNz1dtS0IcOs256UZTVC-2CfkhZ4-3mPqiopakBgFdrVAYefapDfEdh25Kxt6lxh288BtFx-n5Rb36AQGL0gfg7_-_Qe1lsefLnP7tJgU4wusCYBw95U569oLXQDW6-uH3vzqc",
    desc: "Mobil cihazlarınızı en yüksek hızda ve güvenle şarj edin. Isınma önleyici akıllı çip korumalıdır."
  },
  {
    id: 2,
    name: "Profesyonel Paslanmaz Çelik Mutfak Hazırlık Seti",
    category: "Ev/Yaşam",
    categoryKey: "home",
    price: 899.00,
    rating: 4.7,
    reviews: 86,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-GEJMtfVhBvtCxuj88AcXOJDYoKuuOksA17b6E8zAS5Y5VBN2IJeKGxmBStbHEyFmNQnv_lIGmKcxf_dTgbokuCPGvEV7v7VAvpmP-005Yp1p5QuBpmGERLgzh5XYscAPIIDaDMLvsSfSFgtQ65xeN_GnFXaQNpPQ32QHLcgurH_NVP4SEIyksBdcRF3bulSQAsm0hUSJBhsCI-z5UZI8rg6ZISax1WHkbE3dasImkCP_0nB_NWrMIp43iBMqCTNfXMxEUz6mme0",
    desc: "Mutfakta şef konforu. Paslanmaz çelikten üretilmiş ergonomik sap tasarımlı profesyonel set."
  },
  {
    id: 3,
    name: "Hakiki Deri Minimalist İnce Cüzdan - Kahverengi",
    category: "Giyim/Moda",
    categoryKey: "fashion",
    price: 299.00,
    rating: 4.6,
    reviews: 142,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChaAq_BiXOmCj3CZM8YUJ_7xw201z3zfj0nBciMT-4nUnIt9KG15qptJSjnQdtYGtCj7Vb_Rfd1GsYFSYXgb1oDO2kY12mq1pMjGEmqumWW62bkkoW-Y1y_uYHil3n2wzgvQMS5RIXCnOSkJ_lRV90WK2ZZ5OsH-a38sXJR8wPQVAUONDwDwYWeCRqIu4aGzREyPmNuSbVgGit_RHOqENxmIV8lo1Z55tO_8z-gzklJY2EFF92_f5H6VDbyPw8F1HHQ_jrjjTgLDA",
    desc: "Birinci sınıf hakiki deriden üretilmiş, kartlarınızı ve paranızı minimum hacimde taşıyan şık cüzdan."
  },
  {
    id: 4,
    name: "Sportif Hava Tabanlı Koşu ve Yürüyüş Ayakkabısı",
    category: "Spor/Outdoor",
    categoryKey: "sports",
    price: 1249.00,
    rating: 4.8,
    reviews: 1200,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIOsmXf9xWtlAYlYGimoEWXKKi7X672f4GPO4TlhpXZDvO4Na535Z9I04LlJ8TcwdkMtU4PyEIXAFNl9BIlxQjcq3MjiuiOWd-4r39uHEJDAM4Ly9j56bF8jKjcBKgM_KV019-aD4RXA530o4sBvXAq8hVehNa9MEuoWPNQA4uLq6h4xqmefZuWnrKHT_tpZlpzNdsacn3BfAC7GCCQAeGvSSaK4C3fG3k9ztdeJoJHdDpidWS5wt30WDRDe1zU29eAniQ_MhTqao",
    desc: "Yüksek darbe emici hava tabanlı tasarım. Günlük koşularınızda maksimum destek ve esneklik sağlar."
  },
  {
    id: 5,
    name: "Ultra Hassas Kablosuz Oyuncu Faresi - Turuncu Detaylı",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 549.90,
    rating: 4.5,
    reviews: 840,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4wKQTiePPslxl2kiECMc9AfBMkW2PKdXOOyghzkT8TKOJSfG9TtkMZw3oOM25EBs5xJRrL5ASgyt10cs9NuZM_Qbo3e6Kd9D_t5QuZa-HEgJo4woO5Sl8xktNGsmgsiC77YLgubVE-R0lKLfE5bTA2hQIH_mfyYB0kxOC25ImRJnzeIteqsa49_egd6O0jXBSW-q0QfDq2dRIphhyKjggj12jXTyp2gAWgB3_5tyKrwEnqUcfqRizMBNoxgGSqO8iZwt5Ri7k72E",
    desc: "Düşük gecikmeli kablosuz teknoloji, hassas optik sensör ve özelleştirilebilir RGB aydınlatma."
  },
  {
    id: 6,
    name: "Seramik Kahve Dripper ve Cam Demleme Seti",
    category: "Ev/Yaşam",
    categoryKey: "home",
    price: 389.00,
    rating: 4.9,
    reviews: 310,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY5-eUBS3cpGeBf8cwu_TJU2X63YM8Xjgmagy_4yQkQ8nGY4IbBe_MugeKEgDjk2EEp_yFPTfUQ_lQHUl4mz7G8XQBU22C2iWINR119TSNycXApvtJd2vcUc-xbjxYLEYyxYhCojGEQCEm0duYkYASu4baKAyBbwrBAKxabQ5ZrlGX7pOjiMtvZjHiPquVuilwmiM1GfEOPMgcpGi7DRCfoEjG9W9jXvby5kSTSxb8HoMOZR5vqiGXM1orqvJq_LzHDgc_R64gPN4",
    desc: "Nitelikli kahve demleme deneyimini evinizde yaşayın. Isı korumalı seramik dripper ile kusursuz filtre kahve."
  },
  {
    id: 7,
    name: "Su Geçirmez Taşınabilir Bluetooth Hoparlör - Okyanus Mavisi",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 729.00,
    rating: 4.7,
    reviews: 2100,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR8oOn4QWGEAgo3rLb6QT3md0Y64iqxspy5LnM_WPbg8gLelkK3QNwHMyTUJSHj7Ytn1KigLwGysLLGsrnAYPxWZHYZLdjvC78AFVT7r_rzChdTG4DoebiDhR76SAE937Cu8PNJ-BjPYStuCo8HrGtNMbO1MFgMRapkwn7fbsseql7HUEx40_JwKsrOQysAXkgJxfrwm2vsrxYxs4AqVfBMadF9yurYMtNvfsNFZn5eqGcow3oGQsO6cRjpCNRH5wDjH5nlrnq7-w",
    desc: "IPX7 su geçirmezlik derecesi, zengin bas performansı ve 15 saate kadar kesintisiz müzik çalma süresi."
  },
  {
    id: 8,
    name: "Galaxy Ultra S24 5G AI Uyumlu 256GB - Titanyum Gri",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 64999.00,
    rating: 4.8,
    reviews: 2400,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmGosTowM9m7SDme4Xk9VcMiLSgTIFqoZ-ORWZap8lCvdIvjaz_I4rUs-h-A7vSzo3iSkhG4EhJbaDo8Vgyp5ONFNyJx33cb9ofSChdAYlrxiyNVpxpsTpMHwXsmOvk3-88_G45QEAbLc_m9Pnsia77W5WAyMaKlQlvzle11uDLAoDAVv2Iu1K6r6_opIU6tsrhKeD47v51Y_6sCRety6POmKqhFcXJvg-sj36T1VxpB43NaxCE7K1IV54HG3TYOlgD5YHXfhHAv8",
    desc: "Yapay zeka asistanı, 200MP ultra yüksek çözünürlüklü kamera ve üstün titanyum gövde kalitesi."
  },
  {
    id: 9,
    name: "AcousticMaster Pro Kablosuz Gürültü Engelleyici Kulaklık",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 2499.00,
    oldPrice: 3200.00,
    rating: 4.8,
    reviews: 2458,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6AETihBP0e-TA7dEP86pr0pH5ZiL2wwCt9QiC0928iiPxQBNHLQiy_VhoWz-DhMKAoKjEevSYo8pCtzrI8HoeBf3OS63-RXz7nOFsFdPsF-zsr2m8RYC_VDfuUn2PikIkWjukr-mNQTJmUYe_DaJYktuXNUG1-_431GfpxvNM2sWkwf-wnWBR2rr-igyc3WcW3iHMrnG0iBP5oKI2jObhkY2qmhHs2UJzsMvUFLY6uaIr2VB0K5yTIeIbGZ4jO13GOYEaa2vG8Bw",
    desc: "Hi-Res Audio sertifikalı, 40 saat pil ömürlü, aktif gürültü engelleme (ANC) özellikli üstün kulaklık."
  },
  {
    id: 10,
    name: "Active Series 5 Akıllı Saat GPS + Hücresel 44mm",
    category: "Spor/Outdoor",
    categoryKey: "sports",
    price: 7249.00,
    oldPrice: 8999.00,
    rating: 4.6,
    reviews: 1100,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7-4QkWs9oXEIxladdhiFlnlHB1P58cryh_EdKejL-8CFdJkx_g4fQ_wYokWFxE8lhe3NRNYZQ2rdmRZasr0Mm-D9hZeOGIYcaLLvIbawORKEN6ziupHFZKOR7f4x9IizKecuiYVRkdNKhT4OwBHC20Nz_Ssao2983d0Xl9xnHjH0L_WLi0aEEvYS0RX0zRRc5LFMxRVEKhqyWlhYdu-3xTKd205hGCBM_fyL-NEz-CBoldj9D7VjMgVpBICxGkAl3HX57nW1pbHI",
    desc: "Gelişmiş antrenman takibi, EKG ölçümü, düşme algılama ve hücresel şebeke bağlantısı desteği."
  },
  {
    id: 11,
    name: "Ergonomik Mekanik Oyuncu Klavyesi - Lineer Sessiz",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 1250.00,
    rating: 4.7,
    reviews: 412,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBzbvS1txi8pJyC6ubzhK7OBhhQPzRxKPWMHk0Dl_1Kyc3m42AXP80W2xnzLMPT6LtOEMvqVdnqI-CG7EBrIF7SgSs7j2FZ00q2lsbEEnyPI9pw-n3dUKZI6hpe5fAV_BAzO8O0ar2rAzIpBE6GFLRBabMDZw2rSWTo0Gu51rX1eY-vXh1wLriyNyR9c3vDjrDr9U12V0-swcV2qgZ1BotzILj6jlGykuqjODH8wzPs8k1I1pQXxuPdgBnnhzxnMcmFEgmG13g-Zk",
    desc: "Yazı yazma ve oyun oynama konforunu artıran ultra sessiz lineer anahtarlı ve RGB arka aydınlatmalı klavye."
  },
  {
    id: 12,
    name: "Çift Yalıtımlı Çelik Su Şişesi - 750ml Canlı Turuncu",
    category: "Spor/Outdoor",
    categoryKey: "sports",
    price: 349.90,
    rating: 4.8,
    reviews: 320,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeAMHVxxarR1scDNJ2ua28Tnp7xRlQ73w_pNM42nrR9zjwHKQSACu5UWICT3wEHcLJc98DSswISET4OmXURluRZpxWCpugFOA8nuom1s4iC2jHIzFkAzhjy6WnUrB60wQeBKGRzV_ZsSS-xAmvJ-M3BDLfMQUSJjEPDU0P0f49DLWmyHrXgrQWEltUgYprvCqRZn2ZOsv5Cmt7SZQWSiBjkKc-Oz97Kvkxf2DU-Sj-tEMJHrFd66DWnhojVTvXyPhkQ6iDPS_ubEc",
    desc: "İçeceklerinizi 24 saat soğuk, 12 saat sıcak tutan çift duvar yalıtımlı paslanmaz çelik termos."
  },
  {
    id: 13,
    name: "Pro-Shell Fermuarlı Kulaklık Taşıma Çantası",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 249.90,
    rating: 4.4,
    reviews: 65,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkChx1nJHFO2LRY-LaSuVn8nWssZbDmzuuO-Ed_WQBODqGe3caHlYbLFW9Eq2bmfPOQf78WiX2OtIDI-V_BnPZyfkTI53J0s3aRu4_P7cp_P2f66sSjs9TKNIWD7yOzMEaBY0ETG8t8M0WJDiYfzgvGGVGf-N8HAmYIr_q-k-3RFfC7Ic4E7ajyoBEDCdYaE2iXB_Tv9j_fpi-FaqCGykdLUOM95D2448d1rtfYX2jW06Bfsa6ETC7a7P2zfE-j0Ta0Cn_b8i5LhE",
    desc: "Sert koruyucu gövde, darbe emici file iç cepler ve seyahatleriniz için pratik taşıma askısı."
  },
  {
    id: 14,
    name: "AcousticMaster Üniversal Alüminyum Kulaklık Standı",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 189.00,
    rating: 4.6,
    reviews: 90,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4RRxfnqDezXnvDRPvMJf3VGepypMla1MUvoWGKI0-ny2spaS5NDGk2Y5_wbeCPAaDLGu2YNDGryCYQTzliWDqrnLSj1O1-WZGoSEiynDkVxgMtnkjysP1h-rXsais8SUjq5vigxJQsbdSDwawB6Fp6u1-qLWw4sZiPpODiglb1uatLk1zIdfif_k7nxoAOfMHqhUDAcalmOUqKQJrCSISsCQwQc9tfyyYZQeF9TaxaIqhaGObOU48vO52AiD_LRE9vlLEIkBRMcc",
    desc: "Çalışma masanıza şıklık katın. Kaymaz tabanlı, fırçalanmış alüminyum alaşım kaliteli stand."
  },
  {
    id: 15,
    name: "Örgülü 1.5m Yüksek Çözünürlüklü Altın Uçlu Ses Kablosu",
    category: "Elektronik",
    categoryKey: "electronics",
    price: 89.90,
    rating: 4.5,
    reviews: 180,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOaTMk_JR2K3WCGOcGbF_oDqedAXUWhNpwKwEI7YnjyB4dVk7adRp5qa8rvHBVQ0zH93qmfhZleJidmVW-NwonjXpH1gwNrBUvYbcq0hLOFKJIUcmWliaKkP34duSdL1d0WUnk-j6wyK-rrOXqYS9uj-avDdWT7dPwjVE84OvBd2wVBJ9bpL5JQ1hNi2z7uRheLHreVMZe4GbYG4VxBV7xuxlkOmwtfwTy-00A958Y6aLKZF7PUEcqJ_9mGXhFc24oVxdDumikUDk",
    desc: "Altın kaplama konnektörler, kayıpsız ses iletimi ve bükülmelere karşı dayanıklı örgülü dış kılıf."
  }
];

const initialCategories = [
  { key: "electronics", name: "Elektronik", icon: "devices" },
  { key: "fashion", name: "Giyim/Moda", icon: "checkroom" },
  { key: "home", name: "Ev/Yaşam", icon: "home" },
  { key: "cosmetics", name: "Kozmetik", icon: "face_6" },
  { key: "sports", name: "Spor/Outdoor", icon: "sports_soccer" },
  { key: "toys", name: "Oyuncak/Hobi", icon: "toys" },
  { key: "books", name: "Kitap/Kırtasiye", icon: "menu_book" }
];

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [categories] = useState(initialCategories);
  const [cart, setCart] = useState([
    { product: initialProducts[8], quantity: 1, checked: true },
    { product: initialProducts[10], quantity: 2, checked: true },
    { product: initialProducts[11], quantity: 1, checked: true }
  ]);
  const [favorites, setFavorites] = useState([1, 4]);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [selectedAddress, setSelectedAddress] = useState('addr1');
  const [installment, setInstallment] = useState(1);
  
  const [paymentDetails, setPaymentDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
    selectedSavedCardId: "card1"
  });

  const [orderResult, setOrderResult] = useState({
    success: null,
    orderNumber: "",
    reason: ""
  });

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.product.id === productId);
      if (existing) {
        return prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1, checked: true }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      })
    );
  };

  const toggleCartItem = (productId) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const setShipping = (method) => {
    setShippingMethod(method);
  };

  const setAddress = (id) => {
    setSelectedAddress(id);
  };

  const updatePayment = (fields) => {
    setPaymentDetails(prev => ({ ...prev, ...fields }));
  };

  const processPayment = () => {
    const isSaved = paymentDetails.selectedSavedCardId !== null;
    let cardName = paymentDetails.cardHolder;

    if (isSaved) {
      cardName = paymentDetails.selectedSavedCardId === "card1" ? "Alex Johnston" : "Alex Johnston";
    }

    const failureKeywords = ["hata", "başarısız", "failure", "insufficient", "yetersiz"];
    const matchesFailure = failureKeywords.some(kw => cardName.toLowerCase().includes(kw));

    if (matchesFailure) {
      setOrderResult({
        success: false,
        orderNumber: "HB-" + Math.floor(100000 + Math.random() * 900000),
        reason: "Kartınızda yetersiz bakiye bulunmaktadır. Lütfen bakiye kontrolü yapınız."
      });
      return false;
    } else {
      setOrderResult({
        success: true,
        orderNumber: "HB-" + Math.floor(100000 + Math.random() * 900000),
        reason: ""
      });
      setCart([]);
      return true;
    }
  };

  const getSubtotal = () => {
    return cart
      .filter(item => item.checked)
      .reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const getShippingCost = () => {
    if (getSubtotal() === 0) return 0;
    return shippingMethod === 'express' ? 14.99 : 0;
  };

  const getTax = () => {
    return getSubtotal() * 0.08;
  };

  const getTotal = () => {
    return getSubtotal() + getShippingCost() + getTax();
  };

  return (
    <AppContext.Provider value={{
      products,
      categories,
      cart,
      favorites,
      shippingMethod,
      selectedAddress,
      installment,
      paymentDetails,
      orderResult,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleCartItem,
      clearCart,
      toggleFavorite,
      setShipping,
      setAddress,
      updatePayment,
      setInstallment,
      processPayment,
      getSubtotal,
      getShippingCost,
      getTax,
      getTotal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
