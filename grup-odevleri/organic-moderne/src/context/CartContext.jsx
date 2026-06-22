import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: "K01 Kürek",
    price: 895,
    category: "Bahçe Aletleri",
    material: "Paslanmaz Çelik",
    color: "Metalik",
    desc: "Bauhaus esintili keskin geometrik hatlara sahip paslanmaz çelik bahçe küreği.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "M02 Budama Makası",
    price: 480,
    category: "Bahçe Aletleri",
    material: "Karbon Çeliği",
    color: "Kırmızı",
    desc: "Hassas budama işleri için tasarlanmış ergonomik ve açılı budama makası.",
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "S03 Sulama Kabı",
    price: 640,
    category: "Bahçe Aletleri",
    material: "Anodize Alüminyum",
    color: "Mavi",
    desc: "Dairesel maske ve silindirik gövde tasarımıyla modernist sulama ibriği.",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "T04 Organik Tohum Kiti",
    price: 350,
    category: "Tohumlar",
    material: "Organik GDO'suz",
    color: "Doğal Sarı",
    desc: "Özel Bauhaus tasarımı kutularda ata tohumu sebze ve yeşillik kiti.",
    image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "S05 Geometrik Saksı",
    price: 520,
    category: "Saksılar",
    material: "Terracotta",
    color: "Krem",
    desc: "Tamamen geometrik açılardan oluşan el yapımı toprak saksı serisi.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "G06 Kompost ve Toprak",
    price: 290,
    category: "Toprak & Gübre",
    material: "Doğal Kompost",
    color: "Siyah",
    desc: "Bahçeniz için besleyici, organik ve zenginleştirilmiş kompost gübre.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=600"
  }
];

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState(() => {
    const local = localStorage.getItem('bauhaus_organic_cart');
    return local ? JSON.parse(local) : [];
  });
  
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [paymentCard, setPaymentCard] = useState({
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  useEffect(() => {
    localStorage.setItem('bauhaus_organic_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setDiscount(0);
    setCouponCode('');
  };

  const applyCoupon = (code) => {
    if (code.toUpperCase() === 'ORGANIK20') {
      setCouponCode('ORGANIK20');
      setDiscount(20);
      return true;
    }
    return false;
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDiscountAmount = () => {
    return (getSubtotal() * discount) / 100;
  };

  const getShippingCost = () => {
    if (cart.length === 0) return 0;
    return getSubtotal() > 1500 ? 0 : 75;
  };

  const getTotal = () => {
    return getSubtotal() - getDiscountAmount() + getShippingCost();
  };

  return (
    <CartContext.Provider value={{
      products,
      cart,
      couponCode,
      discount,
      billingAddress,
      paymentCard,
      setBillingAddress,
      setPaymentCard,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      applyCoupon,
      getSubtotal,
      getDiscountAmount,
      getShippingCost,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
