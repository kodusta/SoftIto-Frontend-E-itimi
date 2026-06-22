import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const PRODUCTS = [
  {
    id: 1,
    name: "Flat White",
    category: "icecekler",
    price: 145,
    description: "Çifte shot espresso ve mikro köpüklü sütün mükemmel dengesi. Kadifemsi bir içim deneyimi sunar.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX1AoSYRq4tNda-387Kl_Szo3OrqR5F6NtE1heUbijxPZzcpQrutyDb2ADHD9ygFgr-CgwzOGspMJOOiyHdMkKf_bxz_LTNY1meHhFPY7Bsibbo_rvVqm1C7IwUY_WiYzC0Y0K3NgMDESUVa3iS-LnNI466M_xhLaNjLGNmwmeQ1qW2SaR6_M957xsmeMSQBQVfZmdIDDpZdyczuqKXanqXwLDK-M8013qQK7E11w9rCqgqMBTkHNOe66quCAeKdvpDgnGHssZgO8",
    tags: ["Vegan Seçeneği"]
  },
  {
    id: 2,
    name: "Belçika Sıcak Çikolata",
    category: "icecekler",
    price: 185,
    description: "Gerçek Belçika çikolatası, taze süt ve üzerinde el yapımı çırpılmış krema ile servis edilir.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChrskfWwLkg_JQlhLmyX-NWoVXIgliZJw8aFHQwNnXpuXW6cjP1k9DlE4by53-Q7A3kYN4gvQUdNwfz0iEW2epN9zyp8DKdC4TnRGRX4Wlo115fLHoqAaFhMxQhLpkeEo8RHBmu8ieP30jYal1o6wwak4PijJMS3hON_Uesyb3vPn-Q-LqJ4pX4FAkN6IoqFUCeFIgLpisv7qkbyWwsDnkMOwS7SbeuULTXuFAN44JxFKJNyH8LcA2Y2Q-5wSQvpYOR9wZ2WPL-Bo",
    tags: ["İmza Lezzet"]
  },
  {
    id: 3,
    name: "Seremoniyel Matcha Latte",
    category: "icecekler",
    price: 165,
    description: "Japonya'nın Uji bölgesinden gelen en üst kalite seremoniyel matcha ve yulaf sütü eşleşmesi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTAXmCDXlMUfFZwvKFBvWYmle2uE4TLf434PC452LLlcx2jhpSf9oUgt8g5rb5lQRaELY9ydRvIZ8zGb3M-dXkR1Mytz8yW4M5AKWHY5UxERCE3mkwUvGHEuUyIWsTmA0aZAwh23NhifVchOA5Nzz7rHlDvt9ve61OcX1a9eksUWQTCrBYS5eQc3T4KGajUKvN5_UYDUcjFX-kHdBK8Q9bbb0uD12DwHIJKhadoKfLMyhyUA4qd3j400Z6DV6a8yNa3atLWcvUjQ4",
    tags: ["Organik"]
  },
  {
    id: 4,
    name: "Cortado",
    category: "icecekler",
    price: 125,
    description: "Eşit oranlı espresso ve yoğun dokulu süt. Kahve tadını öne çıkaran kompakt bir klasik.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuGDbKifwq5RVeOxDXwx6sO0oPG9Pze8QALxB4XbTcLgXRe2XQrc4tK-ipxkKDtB9ZypLjAvVaQH0JX-93Sx_Zy9AhpVeIuhHyNkAZwodpabmaHGayjn9uTfJPAAYA9kouEh9M3A-hvTLRN8aLgfeulCeF5FkR2LB6k9zypElt__l2z1QjyUG_otjUYLJUih3aqkxhT3UrXjG6tXx9ezBryQ-JTsC6Mx_6YgkB3U_eZFulXvaJQF5Qiqq34QjgvSAuvsPXuEwPHdM",
    tags: []
  },
  {
    id: 5,
    name: "Spiced Chai Latte",
    category: "icecekler",
    price: 155,
    description: "Taze çekilmiş baharatlar ve siyah çayın süt ile demlenmesiyle hazırlanan aromatik bir lezzet.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqqv4ho1eTVck9GiOVq6Vr1jvGjz3mmXkubULsz7jg8D308FNwdHEn1hrhykgwn9d-Wbyt8ipUdfgXqVGjvb3Lsj-2vcVj7MnLwlNM6AxJILJQOsjqgIGJ6c-3_8orymDMBgL4WrAfDyUQk4ILUVWBRO8upJSy4s3_KjsGPYsdk6JxkzJxlE-1Fx1COAgC7WhhDsytnQHPOzXQZZZlG4aLwwUBvkKlgLXlHyMAQAQoPBzGanH8SvyCjhs0wzPvl2Lc2MrOUHK-3gw",
    tags: []
  },
  {
    id: 6,
    name: "Caffé Americano",
    category: "icecekler",
    price: 115,
    description: "Tek kökenli Brezilya çekirdeklerimizden hazırlanan zengin espresso ve sıcak su birlikteliği.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMp_YHo-jIz4rkTqJPFd0TWqxaWTkpbf4rmUSDfru4LTRwF6GA60FitkC3pqhLGjTodxyLPpaHtNPXQGrrborqKP5bXIdmDbcL2vbI-NciKiPVjEIbhMJFX4MI2_RqgClosMRJgIfNr_VdgdCr12YyNJI0Ln3-MhuW0_TjFycvD_CMxhSsElWeUcNYhBCv7lx-h1wdzGld_9790hTcdRmNkI0ydBM0r3bGDJHUuRaiUXuQEj2O1cf6dm-a_m2av7jg7Pon_Fw9zfQ",
    tags: []
  },
  {
    id: 7,
    name: "Zanaatkar Avokado Tost",
    category: "kahvalti",
    price: 240,
    description: "Ekşi mayalı ekmek, poşe yumurta, pul biber ve taze mikro yeşilliklerle süslenmiş avokado ezmesi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeT2KNkJTeNusJt27NcFX_ePQza7b940R7LWNyAdaUFnYmQB8NLv52zCyhnM-HYlUXLSvDS2LsQg906znlPa5dzosVzwBgaiWlosqg_IqlKeqV9It4upMvMGMmtMLXm66qftRQ3UnC_idesbLalz0ZfO_MPCSGaS8Vh7mlvGkYLqGXUXWkewIRmOp2JVy15ccGaWScKkY8gGoq12qWPuvLdrV7KQrxCRJIwRxiU1CEjw9nIXcsq0YY3Dk_UWj_5F6PJq8PZ7U3Vgg",
    tags: ["İmza Lezzet", "Glütensiz Seçeneği"]
  },
  {
    id: 8,
    name: "Trüflü Briyoş Sandviç",
    category: "kahvalti",
    price: 280,
    description: "Taze briyoş ekmeği arasında trüf mayonezli yumurta salatası, frenk soğanı ve çıtır marul.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1_Af6mqu3P52Nr8oZHAV6WUlPQJ55DPdMtOmEY9vmgQzISGjTkODtlf2BUdhvyEQbG2FJAU6c7Jv1Gt7D8La4l7pmMAhkdxJw3aqAfuw7B8yrP6ooWozVRN9Ht4tslWraTfGRFd3Osx82wwkQLomrH6-AVnwZsQUzRkH1k-ug377XOmSoax7HPyvIzZwK8GyN8M0Lnko3PAihjlBWWd6zY018-Z5MkKlZ8qlrxdA7QXcSz0EM7QbhwV2oBXsudE8EpPDzSLGiXfg",
    tags: []
  },
  {
    id: 9,
    name: "Zanaatkar Kruvasan Kutusu",
    category: "tatlilar",
    price: 260,
    description: "Tamamen tereyağlı, kat kat açılmış 3 adet çıtır Fransız kruvasanı.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQTeudZUhSDLEK8OoBu75p1gcM9RAkXyQX0kW4D_v-qLGN62HNrzA_DN4iozvn9u4QX8uNoiJyi4pNOuZGU2TPX3bUSnEdySuYsJLG1n2SjMZGRNkmfhb97CtFn5jjjurRZfVidzo23YAgcH4R5E_8YtkaI4G0iTPq3Le3icbZra5n_8MxrWbCePGt7Oo2sItkOWaHLa8-cmSqe6NnXUJ-E61LNijNOqzFFXMPGSkFYsyvLZnoHxzHzuAB1byw7zbH_KFxcif6xbk",
    tags: []
  },
  {
    id: 10,
    name: "Orman Meyveli Tart",
    category: "tatlilar",
    price: 195,
    description: "Zengin pasta kreması, taze çilek, yaban mersini ve ahududu ile çıtır tart hamuru.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALeQ4BFsrNNYseUzXsDjyOr_g5myF4uDuXajenpGuluybrvQKch3NoJWFI5vuXHPNz7F1o5FKPw1j9FQeg4fqb_U9X48QRcnatbTVDIfujYjSTOcR2Dpe2n7iHHTt-PScSyKuPLFZdulsvAaR6PvOLH-9ljLxg2_MupViRpKYw4HW01hWAfE3S2Y9UGAvHydW2z3anXI74NawDrxf7axHcsXJyyHfxE6jiA1OquGw8i0R95mFau4JbBraA8b-NG7M6FidgkHIVCXI",
    tags: ["Glütensiz"]
  },
  {
    id: 11,
    name: "Yabani Mantarlı Gnocchi",
    category: "ana-yemekler",
    price: 320,
    description: "Kremalı trüf sosu, yabani kestane mantarı ve taze parmesan rendesi ile el yapımı patates gnocchi.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs0EWl9UCY0UY4RbjS5_oV5LDL-0Rb2cGdMZG215J8rj_nxNsvpuMvs0du5YnGwq9RZeWQtsIzRyBEsSjSlIy7equ2klG3t2iBvSWLmjza8me62AM2L9JJ8UdcdN9JtWOrQwihTnh5vAUQhuh3EGXw2NgspF5P9DYUF8Ts3hlu5DiaudxH9fkMLi93Cbn1O5KLd6L1Br48tqr_JBYmAVDQAnB1k1Odav2-oJY3mBema4kUmrhsANEZfBLOMhP-TZkeZ_WlB5HEFcM",
    tags: ["Vegan Seçeneği", "İmza Lezzet"]
  }
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [chefNotes, setChefNotes] = useState("");
  const [orderMethod, setOrderMethod] = useState("teslimat");
  const [isResOpen, setIsResOpen] = useState(false);
  const [reservations, setReservations] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    paymentMethod: "apple-pay",
    simulateError: false
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart((prev) =>
      prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode("");
    setCouponApplied(false);
    setChefNotes("");
  };

  const applyCoupon = (code) => {
    if (code.toUpperCase() === "CAFE10") {
      setCouponApplied(true);
      return true;
    }
    return false;
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponCode("");
  };

  const getSubtotal = () => {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const getDiscount = () => {
    return couponApplied ? getSubtotal() * 0.10 : 0;
  };

  const getDeliveryFee = () => {
    if (orderMethod === "gel-al") return 0;
    const subtotal = getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal >= 300 ? 0 : 35;
  };

  const getTax = () => {
    return (getSubtotal() - getDiscount()) * 0.08;
  };

  const getTotal = () => {
    return getSubtotal() - getDiscount() + getDeliveryFee() + getTax();
  };

  const toggleReservation = () => {
    setIsResOpen(!isResOpen);
  };

  const addReservation = (data) => {
    setReservations((prev) => [...prev, data]);
  };

  return (
    <CartContext.Provider value={{
      products: PRODUCTS,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      couponCode,
      setCouponCode,
      couponApplied,
      applyCoupon,
      removeCoupon,
      chefNotes,
      setChefNotes,
      orderMethod,
      setOrderMethod,
      isResOpen,
      toggleReservation,
      reservations,
      addReservation,
      checkoutForm,
      setCheckoutForm,
      getSubtotal,
      getDiscount,
      getDeliveryFee,
      getTax,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
