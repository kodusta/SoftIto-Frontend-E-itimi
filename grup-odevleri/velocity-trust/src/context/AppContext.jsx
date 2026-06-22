import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({
    pickupLocation: 'İstanbul Havalimanı (IST)',
    pickupDate: '2026-06-25',
    returnDate: '2026-06-28',
    pickupTime: '10:00',
    returnTime: '10:00'
  });

  const vehiclesData = [
    {
      id: 1,
      name: 'Tesla Model Y',
      category: 'SUV',
      collection: 'Eco-Electric',
      pricePerDay: 4200,
      fuel: 'Elektrikli',
      transmission: 'Otomatik',
      seats: 5,
      bags: 3,
      range: '530 km',
      acceleration: '4.8s',
      rating: 4.9,
      status: 'Mevcut',
      featured: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADjcLcJHIsSSXLGJx-eelEoW-RXBN6KEQLPe821GgTXihvJAFly_MPJr3m4iLnMybg-GHQeeVTGlHl8DrHumYf3HThiZ5Xl6dANr5OM5WcHl_OkOYeDHMqoO-nH3EPaouF5qCvtRuOU5z0_1r6RLjumsUKfftzfwGF3yeAFibvxSrCXQQ6OhL1plYYEkix54_vVvcsNhx-jhMCWM52hMKIyUZbLKrkF6EFaFr2HBFBs3Z5B5DIMka0-rUOOG8u73wrwuT8sGfKS8c',
      desc: 'Tesla Model Y ile sürüşün geleceğini deneyimleyin. Bu tamamen elektrikli kompakt SUV, yüksek performans, çok yönlü depolama alanı ve sektör lideri güvenliği bir araya getiriyor. Sessiz, pürüzsüz ve sürdürülebilir bir seyahat deneyimi sunarak uzun yolculuklar veya şehir keşifleri için mükemmeldir.'
    },
    {
      id: 2,
      name: 'Audi A6',
      category: 'Sedan',
      collection: 'Business Elite',
      pricePerDay: 3800,
      fuel: 'Benzinli',
      transmission: 'Otomatik',
      seats: 5,
      bags: 2,
      range: '850 km',
      acceleration: '5.6s',
      rating: 4.8,
      status: 'Son Fırsat',
      featured: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL1ecpUNNE8007kl0L_QTKorw-yk-pqE-Yz1mdkWuYcj-dbiqRoN19xAOwItjHDyOLs1Xu4hkcEL1i61thlTX0yjR7GY-oEVxSZWJn-kDHolF19Q1DTGrlhrSYch8vW-OtgmHLiXv3VMSAktoaaH_cO5lKeTLoKO0FW8M4-cAAv-lV78q3eVLpbEQDYtpiynqIq976dz01rNojVy42a5Z2Ijhz2k8El_-nnqfVjWH2O-SzBkAyZrouduPN8vbJD0G6Nito2IXNrRE',
      desc: 'Audi A6, prestij ve konforu bir arada sunan birinci sınıf bir iş sınıfı sedandır. Gelişmiş sürüş destek sistemleri, geniş iç hacmi ve güçlü motoru ile hem iş seyahatlerinizde hem de uzun tatillerinizde üst düzey konfor sağlar.'
    },
    {
      id: 3,
      name: 'Polestar 2',
      category: 'Sedan',
      collection: 'Eco-Electric',
      pricePerDay: 3950,
      fuel: 'Elektrikli',
      transmission: 'Otomatik',
      seats: 5,
      bags: 2,
      range: '480 km',
      acceleration: '4.7s',
      rating: 4.7,
      status: 'Mevcut',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYVwru3J8NRnFyYIteJsTKVWmCGGrINGCbYlxs2d0AD03igw5jSvHsfne_tK_LyLNvoBrm_crzXAr9T1C1MNpify8ggEYNwxv55-uZRJbKZNsyid-EeSDXnZvw90OXytprEweKgVzEhoDBccmWo8kvv-yCflYEOlA0Sktiu52TfJW0Eo_QMt3MFAuKfLrBzchq7aWvlXnk5vHbUlgdBaCGMOSDJU2wEUhiWyRjlgT-UZScECLjpmWr9_f3Ka3x4FtYirZI0KW6J68',
      desc: 'İskandinav tasarımının elektrik gücüyle buluştuğu Polestar 2, minimalist lüksün en yeni temsilcisidir. Çevre dostu yapısı, sezgisel bilgi-eğlence sistemi ve hızlı ivmelenmesiyle sürüş keyfini ikiye katlar.'
    },
    {
      id: 4,
      name: 'Land Rover Defender',
      category: 'SUV',
      collection: 'Luxury SUVs',
      pricePerDay: 6300,
      fuel: 'Dizel',
      transmission: 'Otomatik',
      seats: 7,
      bags: 4,
      range: '900 km',
      acceleration: '7.0s',
      rating: 4.9,
      status: 'Mevcut',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZQ-obdHqTk3wc_S4SerIWj_byfxDuOMPUmrlOGeV8bUZMhrVYdNRPL-mUDsRWtIOSHkqkmwSAssNlyPC-ebjqti1T-suYpdz8jwKeVxb_qLR5Tr0ZAqHkefvz4-TWeve5pz0aE7ws6bTwLaWR7m7w4aLJ84T4xUoMLMJIRPLTJUtmEwmedbJKacBMQNqa-5xTZHBbs3iHGoFJuSiv9UMbQHQ_9UR6Ho0-BL1LeG03APOw1ZdtYKbYRUihDJI7mokw0ppfo-ncdFU',
      desc: 'Land Rover Defender, macera ve lüksü sınırsızca yaşamak isteyenler için tasarlandı. 7 kişilik oturma kapasitesi, efsanevi 4x4 off-road yeteneği ve zengin donanımı ile her türlü arazi ve yol koşulunda güvenli sürüş sunar.'
    },
    {
      id: 5,
      name: 'VW Golf 8',
      category: 'Sedan',
      collection: 'Business Elite',
      pricePerDay: 2200,
      fuel: 'Benzinli',
      transmission: 'Manuel',
      seats: 5,
      bags: 2,
      range: '780 km',
      acceleration: '8.2s',
      rating: 4.6,
      status: 'Mevcut',
      featured: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFmpEHVdLtmsWMI5AYz5nbkQFx2q9pSfRn6IKxbEUZ0RhSseDSFBO6WaNsCF-GpTRPaFO62alzpsj3zRgbiFN9n37LIzh5HJajlRtnoKyIeC0QWImdzo0iZg--YaLSoTbT_deHDhiJxx9X0MwuiH7vKoO08yp7J6NknQ50tM4GxaDxHcfSbnlESMPVrYIiE1FwaOQMcRW7KXJzdEG1WXabvatrCT3HJZA0w9aIoE5EyrjrbcDyuXqr-a9Fs4ISJeYDJGkgPoIv8Yo',
      desc: 'Volkswagen Golf 8, sınıfının standartlarını belirleyen şehir içi hatchback aracıdır. Pratik boyutları, yakıt verimliliği ve gelişmiş kokpit tasarımı ile günlük sürüşlerinizde ve seyahatlerinizde en sadık yardımcınız olacaktır.'
    },
    {
      id: 6,
      name: 'BMW Z4 Roadster',
      category: 'Luxury',
      collection: 'Exotic Sport',
      pricePerDay: 5800,
      fuel: 'Benzinli',
      transmission: 'Otomatik',
      seats: 2,
      bags: 1,
      range: '650 km',
      acceleration: '4.5s',
      rating: 4.9,
      status: 'Popüler',
      featured: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsLnlsLsh8fqcbzUaN4GbDMlR_XtwYoHbxf8zZkn268J4nhdb8rw-oQGSnVXru8ReeimKrNuk8H5NXNs8Q5LmxfrmR_Toy5Z62Qch71bxtaBPnylFi6xeCESVrY7S_gxGi0WjqXz23T_wY9irQAixZABUahoDkYv9yfacvde1isDVkgycJp9sWLk0V3Au1ZUwf1t36_IP9sXHo8KVPqeZM20ZtHRyYyh0SNM5IYgf8VXKdSexo9n_1ZET6llyQ79t54dT1PgSHIfM',
      desc: 'BMW Z4 Roadster ile rüzgarı hissedin. İki kişilik bu lüks spor üstü açık otomobil, üst düzey motor performansı, kusursuz gövde dengesi ve dinamik sürüş dinamikleriyle benzersiz bir özgürlük hissi vaat ediyor.'
    }
  ];

  const [activeBooking, setActiveBooking] = useState({
    car: null,
    insurance: 'standard',
    services: {
      gps: false,
      babySeat: false,
      wifi: false
    },
    driverInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: 'Türkiye',
      licenseNumber: '',
      birthDate: '',
      licensePhoto: null
    },
    paymentMethod: 'card',
    cardInfo: {
      number: '',
      expiry: '',
      cvv: ''
    }
  });

  const [bookings, setBookings] = useState([
    {
      id: 'VLR-882910',
      car: vehiclesData[1],
      insurance: 'full',
      services: {
        gps: true,
        babySeat: false,
        wifi: true
      },
      driverInfo: {
        firstName: 'Ahmet',
        lastName: 'Yılmaz',
        email: 'ahmet.yilmaz@example.com',
        phone: '+90 555 123 45 67',
        country: 'Türkiye',
        licenseNumber: 'TR-1882910',
        birthDate: '1990-05-12'
      },
      pickupLocation: 'İstanbul Sabiha Gökçen Havalimanı (SAW)',
      pickupDate: '2026-05-12',
      returnDate: '2026-05-16',
      pickupTime: '10:00',
      returnTime: '16:00',
      totalPrice: 16800,
      status: 'Tamamlandı'
    }
  ]);

  const selectCar = (car) => {
    setActiveBooking(prev => ({
      ...prev,
      car: car
    }));
  };

  const setInsurance = (type) => {
    setActiveBooking(prev => ({
      ...prev,
      insurance: type
    }));
  };

  const toggleService = (serviceKey) => {
    setActiveBooking(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey]
      }
    }));
  };

  const setDriverInfo = (info) => {
    setActiveBooking(prev => ({
      ...prev,
      driverInfo: {
        ...prev.driverInfo,
        ...info
      }
    }));
  };

  const confirmBooking = (bookingId) => {
    const rentalDays = getRentalDays(searchParams.pickupDate, searchParams.returnDate);
    const carPrice = (activeBooking.car?.pricePerDay || 0) * rentalDays;
    const insurancePrice = activeBooking.insurance === 'full' ? 400 * rentalDays : 150 * rentalDays;
    let servicesPrice = 0;
    if (activeBooking.services.gps) servicesPrice += 200 * rentalDays;
    if (activeBooking.services.babySeat) servicesPrice += 250 * rentalDays;
    if (activeBooking.services.wifi) servicesPrice += 150 * rentalDays;
    
    const totalPrice = carPrice + insurancePrice + servicesPrice;

    const newBooking = {
      id: bookingId,
      car: activeBooking.car,
      insurance: activeBooking.insurance,
      services: activeBooking.services,
      driverInfo: activeBooking.driverInfo,
      pickupLocation: searchParams.pickupLocation,
      pickupDate: searchParams.pickupDate,
      returnDate: searchParams.returnDate,
      pickupTime: searchParams.pickupTime,
      returnTime: searchParams.returnTime,
      totalPrice: totalPrice,
      status: 'Onaylandı'
    };

    setBookings(prev => [newBooking, ...prev]);
  };

  const cancelBooking = (id) => {
    setBookings(prev =>
      prev.map(b => (b.id === id ? { ...b, status: 'İptal Edildi' } : b))
    );
  };

  const getRentalDays = (start, end) => {
    const sDate = new Date(start);
    const eDate = new Date(end);
    const diffTime = Math.abs(eDate - sDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  return (
    <AppContext.Provider
      value={{
        searchParams,
        setSearchParams,
        vehicles: vehiclesData,
        activeBooking,
        setActiveBooking,
        bookings,
        selectCar,
        setInsurance,
        toggleService,
        setDriverInfo,
        confirmBooking,
        cancelBooking,
        getRentalDays
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  return useContext(AppContext);
};
