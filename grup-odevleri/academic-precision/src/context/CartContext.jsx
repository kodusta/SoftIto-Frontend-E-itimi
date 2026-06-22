import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const initialCourses = [
  {
    id: 'system-architecture',
    title: 'Modern Ölçeklenebilir Uygulamalar için Gelişmiş Sistem Mimarisi',
    category: 'Tasarım',
    categorySlug: 'tasarim',
    rating: 4.9,
    reviewsCount: 2450,
    studentsCount: 12500,
    price: 89.99,
    originalPrice: 149.99,
    duration: '12.5 saat',
    instructor: 'Dr. Helena Vance',
    instructorTitle: 'TechGlobal Kıdemli Bulut Mimarı',
    instructorBio: 'Helena, Fortune 500 listesindeki üç şirkette altyapı ekiplerine liderlik etmiş, dağıtık sistemler tasarımı alanında bir öncüdür. Yüksek yüklü arka uç mühendisliği konusunda uzmanlaşmıştır ve mimari kalıplar üzerine çok satan birkaç kitabın yazarıdır. Öğretim tarzı pratik, doğrudan ve gerçek üretim sorunlarını çözmeye odaklıdır.',
    instructorStats: { students: '45b+', courses: 12, rating: 4.9 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmwFo3at1G5WM4o4tF7kt0olP7yga_KiC5mXWWHGZXzu8LruCumFE0DnNStGfjt1wAYLKLQlSh8wQOlz6lGSFIretuOQJHeS0q-WCxNIVE8GHgJ8CiTyQooTfUVxkgg8iouMNFe2KmxdKAJUaqz6mRfnU-6duDFSVvc9EfWobekju3MWimq6xku7xGkRIn9F2-KOxeYDQQpEF8DN4pj6O54YI5SDEjeTFzs082iKvFgS2pVeVo1Amf0ja9zTsTEfkSnRmtwHMQeONq',
    bestseller: true
  },
  {
    id: 'digital-marketing',
    title: 'Dijital Pazarlama Stratejisi 2024',
    category: 'Pazarlama',
    categorySlug: 'pazarlama',
    rating: 4.8,
    reviewsCount: 2400,
    studentsCount: 9200,
    price: 49.99,
    originalPrice: 89.99,
    duration: '12.5 saat',
    instructor: 'Elena Rodriguez',
    instructorTitle: 'Büyüme Pazarlaması Uzmanı',
    instructorBio: 'Elena, silikon vadisindeki girişimlerin büyüme stratejilerini yönetmiş 10 yılı aşkın deneyime sahip bir pazarlama danışmanıdır.',
    instructorStats: { students: '28b+', courses: 5, rating: 4.8 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbii_YnhrlE0KzaQHMOhkCYzPqsBARfrvm28ZdMLCB4bGqLpqtDJCYFCc28YOO6Ov3vF_eWP_H5XSa8hYL4riu5ZSeAThfJ4Feizya4_2RUrp4ncUdOBY4einstB-yj2h-K5vfJPmPNdMNcU7z0YV7YesY2jeVD0pNOA1jg_jZd6SHMcwEQsSYdbska98uWeiD3TBmZ6AD3Ybup1Wr68ujUnKwm0YcA0SPI6Q3uSBPOVW649vkX2YQtTjD33gpiznsEKvoZufI7Ttm',
    bestseller: false
  },
  {
    id: 'python-programming',
    title: 'Python Programlamaya Giriş',
    category: 'Geliştirme',
    categorySlug: 'gelistirme',
    rating: 4.9,
    reviewsCount: 1800,
    studentsCount: 15000,
    price: 0,
    originalPrice: 0,
    duration: '8 saat 15 dk',
    instructor: 'Jordan Smith',
    instructorTitle: 'Kıdemli Yazılım Mühendisi',
    instructorBio: 'Jordan, açık kaynaklı projelere katkıda bulunan deneyimli bir Python geliştiricisidir.',
    instructorStats: { students: '65b+', courses: 8, rating: 4.7 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKmZmG0yCXTOehOae9Uj26-CGH7BPBbYqmvRcPJgo20ISZjfyyhOFLiNQL9C8AUXBUmYk4knx5Eff0vJ0yVXmei5SV3i2OVdt0zGuL-YOUJng5Lg6LB_OPBFdQR49HSS5dqoiGo97Uwbys9k8Vz5aZYilb1E_elkzL5qwXd5YazRpxw4ppfklzWmqdlHqZe-44-MJ2qGfzAa8Nda4u6-eSa9mLYbt2ZN7UHXR4-M-BTT-WxKHaGaBkGb2lKnl5G6X6h6vcemm9HiDo',
    bestseller: true
  },
  {
    id: 'procreate-illustrators',
    title: 'İllüstratörler için Procreate Masterclass',
    category: 'Tasarım',
    categorySlug: 'tasarim',
    rating: 4.7,
    reviewsCount: 950,
    studentsCount: 4500,
    price: 29.99,
    originalPrice: 59.99,
    duration: '5 saat 45 dk',
    instructor: 'Sarah Jenkins',
    instructorTitle: 'Dijital İllüstratör & Sanatçı',
    instructorBio: 'Sarah, oyun ve yayıncılık sektörlerinde çalışan ödüllü bir dijital sanatçıdır.',
    instructorStats: { students: '12b+', courses: 4, rating: 4.6 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJce9AmrNXkd85AYsUdf9LjpbZciCLp1Bzdo4KiFx_lDQAkR7IZLqf5QnWB9VRHBq1QvZuEZCsLOOx_o2CQmQvLMgZXCEB5MGxW4n2dzA5GgSgYg7zHRFz70laIdb-f6Yap3CEEnJG0UoCcs_e3F58mpKPYspoT2flX78b_wko7TOXTwJH2UCKSitR5rz5wpJUjXUgKxwHA3jXV9zCO5_fIdPkAnHW2gUyDVrkHxRjqJ2ZndsQPOA2V85AcXJc483znJXyT36ivBVW',
    bestseller: false
  },
  {
    id: 'leadership-digital',
    title: 'Dijital Çağda Liderlik',
    category: 'İş Dünyası',
    categorySlug: 'is-dunyasi',
    rating: 4.8,
    reviewsCount: 1200,
    studentsCount: 3800,
    price: 89.99,
    originalPrice: 149.99,
    duration: '15 saat 20 dk',
    instructor: 'Jordan Smith',
    instructorTitle: 'Yönetim Danışmanı',
    instructorBio: 'Jordan, teknoloji şirketlerinde liderlik değişimi üzerine danışmanlık yapmaktadır.',
    instructorStats: { students: '65b+', courses: 8, rating: 4.7 },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbdbV5w0j_ZEGWTohrBvqX-_cyEKTt5zxxSxV4GoHJFtrE3F4bB87xetKlXE4H3iXZdqGoghWpQfYKlgKgM_AaOaB10s69mmxKl7kRV31IsL9vAEW-rnu8DJnntVbwr4X9BOlct93njaVrg7EOubRG0OQX67SjwO6LgpsX1JsGf_vAYzrFF94IcSyuNxCmfCmBBG4K1n2kC2FbkUEs8YbEePMZh05_l64ssInSulbqlF8ibKO5St3zXKTS_a1beg5cCSRrMaFHKmGD',
    bestseller: false
  }
];

export function CartProvider({ children }) {
  const [courses] = useState(initialCourses);
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const addToCart = (course) => {
    if (!cart.some(item => item.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode('');
    setDiscountPercent(0);
  };

  const applyCoupon = (code) => {
    setCouponCode(code);
    if (code.trim().toUpperCase() === 'WELCOME20') {
      setDiscountPercent(20);
      return true;
    }
    setDiscountPercent(0);
    return false;
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = (subtotal * discountPercent) / 100;
  const tax = (subtotal - discount) * 0.05;
  const total = subtotal - discount + tax;

  return (
    <CartContext.Provider value={{
      courses,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      couponCode,
      discountPercent,
      applyCoupon,
      subtotal,
      discount,
      tax,
      total,
      billingInfo,
      setBillingInfo,
      paymentInfo,
      setPaymentInfo
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
