import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ROOMS_DETAILS = {
  'presidential-ocean': {
    title: 'Presidential Okyanus Süiti',
    price: 450,
    rating: 4.9,
    reviews: 128,
    location: 'Kuzey Atolü, Maldivler',
    size: 85,
    guests: '2 Yetişkin',
    bed: '1 King Yatak',
    desc: 'Büyüleyici turkuaz lagünün üzerinde konumlanan Presidential Okyanus Süiti, modern minimalist tasarım ile geleneksel el sanatlarını bir araya getiren 85 metrekarelik bir sığınaktır. Özel ahşap güverteden doğrudan denize girebilir veya gün batımını infinity havuzunuzdan izleyebilirsiniz.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABcRhsnRv9Ix1M0BO2xp2dgC8vbQo8ggK3XHza3uEt6w59MUSL-ScEDB3KpuC_Xa_eow-EANlrwO454GGNe_pdVCSUVuPutP29In9x91jgg3mLcUoCOb4AIFXdnUFS-nPu1PjrDfK2E12gJdduJWqC786Jx1vpHTUXzibMOiPpVd_7Llp6hEXwMsnczRC3xoNcuukj53XpT3DwKFZn_Rjf5SVt8oXdN-eHENA2YQPxqJqsW1DNvPJNAyxb-kWij7dmJY2-uFyZ2uEy',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4twTehMbpyJj_MtEqm5YfLQ81XadLmjjlnao3iXPnOhFl5Hrn9RX-RWpTlRMfNknIRrDg8DZXZkfTh36njtlY_zRhQP418FIFEETT5d3f1UZ6E9fjx1QtUSNsJbMENvL35aTVmIveao9w9l5EoLmpUZGtHnI8r0D7FsUOWHH3_AUMmurDQaEpm3uTvB3JVazPTpR9GDrqGCYjf-1_SrF_kPdKtpMbGereLun5H1HJRRgO_ICq4F6Gp8oQMf5lUxc4-rT-y4AugI5_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfXIIXsYL5XgNJ2g_LnWhyYgI0eSdtQHlS2Io5DjZBrD33VGQgMrBmPLPS1QWjaryn57jt7Grj717QHh4cFqtfpHZsYHxNxXUmCiKdUcOe32dRCwPiguf8mVXb_6mU2lk60feKmsyil1nv6_7Blk4EV5aPphHU6S-gGIqaYwaeBvRtxdXv_xO_cwjopol4lkZ8JfviORJod6uHZRHHTJYLbUS_6MlX072SkXm5A-D1ZXV_Yus0WjFYXjzoq6_-E9EyaRB65V12pHx',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJaYMCOiTCzKTvJlVPt204jb-lfBqLqx172IWP1OmlrilzslsY8DLjAize3MNP9OQe7UrTRzf0IJXH_B0pypUwgjcT1yICtwjrqJA1Vv-mOn6R-eb1pjfkGh4joHt8IhYPEjJ5K9YUKggmWqezZWAVbFMtRXhANo0yE36mnMPRMxRpj3ZVveSiFEiqFBqQTjpG2Wy7ISmQws_lfo_737LXA8MYJDJd-DsI_1oNiEmEyQlra0ZIGttsZb0LYAPSFtAcsnJJlBABqoJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdpJgVAqysZzXW7POFYYIcGrgJ9hbZnC7P5VIWLYcZCBjQI7NNqzPYvXcv2y1uCM_VIF3BTcviqCvYf-qtbSzoXBDHDmELZuUiYkGkahbVSM0U2y_CEwtXozmoB_BokL3iKL1yILfcJq2b1nyM_P82kKQFxKr8s_ABiNhyujb-VoWKn-W0XQUWyL-PbPWTKWNYbsKAVtz4ELKxTYYWCGnqd44BNnV_k4lDe8RqU2FoIUkqueG7s9hoQsU9zth-pnv6N06_rTaJf6qC'
    ],
    amenities: [
      { icon: 'wifi', title: 'Ücretsiz Wi-Fi', desc: 'Yüksek hızlı fiber' },
      { icon: 'pool', title: 'Özel Havuz', desc: 'Infinity kenarlı' },
      { icon: 'ac_unit', title: 'Akıllı Klima', desc: 'Otomatik iklimlendirme' },
      { icon: 'tv', title: '65" Smart TV', desc: 'Netflix üyeliği dahil' },
      { icon: 'coffee_maker', title: 'Nespresso', desc: 'Kahve kapsülleri' },
      { icon: 'room_service', title: '7/24 Uşak Hizmeti', desc: 'Size özel servis' }
    ]
  },
  'executive-urban': {
    title: 'Executive Şehir King',
    price: 285,
    rating: 4.7,
    reviews: 94,
    location: 'Manhattan, New York',
    size: 42,
    guests: '1 Yetişkin',
    bed: '1 King Yatak',
    desc: 'Metropolün kalbinde lüks ve pratikliği birleştiren Executive Şehir odalarımız, brüt beton duvarlar ve sıcak meşe mobilyalarla donatılmıştır. Şık dinlenme alanları ve geniş pencereler Manhattan siluetini odanıza taşır.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCfAHFWYX-yftYs_-Qyzn0w0SU0wZFSZKmPRQzx3TGntEwfqR6pgQare0AKbrH2BeECpFiNlpUahGolSb73aORfS6FAwsAX0lH8hesJWohp7XHlHZWV0pgORYYQN9hCY1gQlka0TRI-xdEBXvunaH21nkjCPKZQyx05A7dbx5BmwAh7od8yhgWZa0E7P_EsMng8GGIXpp9KEt7g9l7XojkLJS2MqSAIyhxE3-PGtkKzE47JxtRsVjIxrZUE3akDen4Nguz3lAbxB-hw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4twTehMbpyJj_MtEqm5YfLQ81XadLmjjlnao3iXPnOhFl5Hrn9RX-RWpTlRMfNknIRrDg8DZXZkfTh36njtlY_zRhQP418FIFEETT5d3f1UZ6E9fjx1QtUSNsJbMENvL35aTVmIveao9w9l5EoLmpUZGtHnI8r0D7FsUOWHH3_AUMmurDQaEpm3uTvB3JVazPTpR9GDrqGCYjf-1_SrF_kPdKtpMbGereLun5H1HJRRgO_ICq4F6Gp8oQMf5lUxc4-rT-y4AugI5_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfXIIXsYL5XgNJ2g_LnWhyYgI0eSdtQHlS2Io5DjZBrD33VGQgMrBmPLPS1QWjaryn57jt7Grj717QHh4cFqtfpHZsYHxNxXUmCiKdUcOe32dRCwPiguf8mVXb_6mU2lk60feKmsyil1nv6_7Blk4EV5aPphHU6S-gGIqaYwaeBvRtxdXv_xO_cwjopol4lkZ8JfviORJod6uHZRHHTJYLbUS_6MlX072SkXm5A-D1ZXV_Yus0WjFYXjzoq6_-E9EyaRB65V12pHx',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJaYMCOiTCzKTvJlVPt204jb-lfBqLqx172IWP1OmlrilzslsY8DLjAize3MNP9OQe7UrTRzf0IJXH_B0pypUwgjcT1yICtwjrqJA1Vv-mOn6R-eb1pjfkGh4joHt8IhYPEjJ5K9YUKggmWqezZWAVbFMtRXhANo0yE36mnMPRMxRpj3ZVveSiFEiqFBqQTjpG2Wy7ISmQws_lfo_737LXA8MYJDJd-DsI_1oNiEmEyQlra0ZIGttsZb0LYAPSFtAcsnJJlBABqoJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdpJgVAqysZzXW7POFYYIcGrgJ9hbZnC7P5VIWLYcZCBjQI7NNqzPYvXcv2y1uCM_VIF3BTcviqCvYf-qtbSzoXBDHDmELZuUiYkGkahbVSM0U2y_CEwtXozmoB_BokL3iKL1yILfcJq2b1nyM_P82kKQFxKr8s_ABiNhyujb-VoWKn-W0XQUWyL-PbPWTKWNYbsKAVtz4ELKxTYYWCGnqd44BNnV_k4lDe8RqU2FoIUkqueG7s9hoQsU9zth-pnv6N06_rTaJf6qC'
    ],
    amenities: [
      { icon: 'wifi', title: 'Ücretsiz Wi-Fi', desc: 'Yüksek hızlı fiber' },
      { icon: 'ac_unit', title: 'Akıllı Klima', desc: 'Otomatik iklimlendirme' },
      { icon: 'tv', title: '65" Smart TV', desc: 'Netflix üyeliği dahil' },
      { icon: 'coffee_maker', title: 'Nespresso', desc: 'Kahve kapsülleri' },
      { icon: 'fitness_center', title: 'Spor Salonu', desc: '7/24 erişim kartı' }
    ]
  },
  'grand-sky-villa': {
    title: 'The Grand Sky Villa',
    price: 1250,
    rating: 5.0,
    reviews: 142,
    location: 'Oia, Santorini',
    size: 150,
    guests: '6 Yetişkin',
    bed: '3 King Yatak',
    desc: 'LuxeStay portföyünün en prestijli konaklama alanı olan Grand Sky Villa, Ege Denizi ve sahil hattının 360 derecelik panoramik manzarasına sahiptir. Özel uşak servisi, chef mutfağı ve geniş bir teras alanı barındırır.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPc952_NjEW4iu1COpcQnK5GicWFyXcj9wRazXq1o0FnW0e0UprNo6t_XjRF8FV82nrzx2GocVMeA3XDZLmKc2GiKngyC_nZA9Ehiu0kG99y9r4tK88nQfkvq6F1kQpzIiBNmJI8oxCoicysY7Pvsu5PB907W7Sw8JPxpu0vXVTVqkyBTl0z8dL1BVGoxYA7qfHbcwbAhELrHWv167_faMDQ38fv6VCSThSkxLWMhx9i3Y9nx07SUXZz8c0ejAB4a46w_9X_bWSPrI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4twTehMbpyJj_MtEqm5YfLQ81XadLmjjlnao3iXPnOhFl5Hrn9RX-RWpTlRMfNknIRrDg8DZXZkfTh36njtlY_zRhQP418FIFEETT5d3f1UZ6E9fjx1QtUSNsJbMENvL35aTVmIveao9w9l5EoLmpUZGtHnI8r0D7FsUOWHH3_AUMmurDQaEpm3uTvB3JVazPTpR9GDrqGCYjf-1_SrF_kPdKtpMbGereLun5H1HJRRgO_ICq4F6Gp8oQMf5lUxc4-rT-y4AugI5_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfXIIXsYL5XgNJ2g_LnWhyYgI0eSdtQHlS2Io5DjZBrD33VGQgMrBmPLPS1QWjaryn57jt7Grj717QHh4cFqtfpHZsYHxNxXUmCiKdUcOe32dRCwPiguf8mVXb_6mU2lk60feKmsyil1nv6_7Blk4EV5aPphHU6S-gGIqaYwaeBvRtxdXv_xO_cwjopol4lkZ8JfviORJod6uHZRHHTJYLbUS_6MlX072SkXm5A-D1ZXV_Yus0WjFYXjzoq6_-E9EyaRB65V12pHx',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJaYMCOiTCzKTvJlVPt204jb-lfBqLqx172IWP1OmlrilzslsY8DLjAize3MNP9OQe7UrTRzf0IJXH_B0pypUwgjcT1yICtwjrqJA1Vv-mOn6R-eb1pjfkGh4joHt8IhYPEjJ5K9YUKggmWqezZWAVbFMtRXhANo0yE36mnMPRMxRpj3ZVveSiFEiqFBqQTjpG2Wy7ISmQws_lfo_737LXA8MYJDJd-DsI_1oNiEmEyQlra0ZIGttsZb0LYAPSFtAcsnJJlBABqoJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdpJgVAqysZzXW7POFYYIcGrgJ9hbZnC7P5VIWLYcZCBjQI7NNqzPYvXcv2y1uCM_VIF3BTcviqCvYf-qtbSzoXBDHDmELZuUiYkGkahbVSM0U2y_CEwtXozmoB_BokL3iKL1yILfcJq2b1nyM_P82kKQFxKr8s_ABiNhyujb-VoWKn-W0XQUWyL-PbPWTKWNYbsKAVtz4ELKxTYYWCGnqd44BNnV_k4lDe8RqU2FoIUkqueG7s9hoQsU9zth-pnv6N06_rTaJf6qC'
    ],
    amenities: [
      { icon: 'wifi', title: 'Ücretsiz Wi-Fi', desc: 'Yüksek hızlı fiber' },
      { icon: 'pool', title: 'Özel Havuz', desc: 'Infinity kenarlı' },
      { icon: 'ac_unit', title: 'Akıllı Klima', desc: 'Otomatik iklimlendirme' },
      { icon: 'tv', title: '65" Smart TV', desc: 'Netflix üyeliği dahil' },
      { icon: 'coffee_maker', title: 'Nespresso', desc: 'Kahve kapsülleri' },
      { icon: 'room_service', title: '7/24 Uşak Hizmeti', desc: 'Size özel servis' }
    ]
  },
  'starlight-loft': {
    title: 'Starlight Loft Süiti',
    price: 320,
    rating: 4.8,
    reviews: 67,
    location: 'Aspen, Colorado',
    size: 55,
    guests: '2 Yetişkin',
    bed: '1 Queen Yatak',
    desc: 'Büyük çatı pencereleriyle gökyüzünü ve yıldızları odanıza taşıyan Loft Süit, endüstriyel esintilerle lüks sıcaklığı bir araya getiriyor. Doğal tuğla kaplamalı duvarlar ve şöminesiyle kış kaçamakları için ideal.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArrgVllXfhWDFEagJRcBZ9KvLaJiO3bsv1tAsmThOlxH6v2Dx2i4dKP6fy8H1CM_Ck0urWkDMlv2IAXVY9Bpb3KkPXHyxEA-TM9NWvq5RPin0be0qLUxu5Rz4EDqTyZgHI_6v_5urrsiv3PARsuJhYSK4Pocm3rHxxtjYOAhkyFhZuO4R0ajNrj_JIhWo2zxicIEOpWWrQi21AuI1izOPdOlUiKR94tCryN0XkQITLQnp9Lr4-LBAw2QwPmtTGwH_SgmJhr8id3YVi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4twTehMbpyJj_MtEqm5YfLQ81XadLmjjlnao3iXPnOhFl5Hrn9RX-RWpTlRMfNknIRrDg8DZXZkfTh36njtlY_zRhQP418FIFEETT5d3f1UZ6E9fjx1QtUSNsJbMENvL35aTVmIveao9w9l5EoLmpUZGtHnI8r0D7FsUOWHH3_AUMmurDQaEpm3uTvB3JVazPTpR9GDrqGCYjf-1_SrF_kPdKtpMbGereLun5H1HJRRgO_ICq4F6Gp8oQMf5lUxc4-rT-y4AugI5_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfXIIXsYL5XgNJ2g_LnWhyYgI0eSdtQHlS2Io5DjZBrD33VGQgMrBmPLPS1QWjaryn57jt7Grj717QHh4cFqtfpHZsYHxNxXUmCiKdUcOe32dRCwPiguf8mVXb_6mU2lk60feKmsyil1nv6_7Blk4EV5aPphHU6S-gGIqaYwaeBvRtxdXv_xO_cwjopol4lkZ8JfviORJod6uHZRHHTJYLbUS_6MlX072SkXm5A-D1ZXV_Yus0WjFYXjzoq6_-E9EyaRB65V12pHx',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJaYMCOiTCzKTvJlVPt204jb-lfBqLqx172IWP1OmlrilzslsY8DLjAize3MNP9OQe7UrTRzf0IJXH_B0pypUwgjcT1yICtwjrqJA1Vv-mOn6R-eb1pjfkGh4joHt8IhYPEjJ5K9YUKggmWqezZWAVbFMtRXhANo0yE36mnMPRMxRpj3ZVveSiFEiqFBqQTjpG2Wy7ISmQws_lfo_737LXA8MYJDJd-DsI_1oNiEmEyQlra0ZIGttsZb0LYAPSFtAcsnJJlBABqoJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdpJgVAqysZzXW7POFYYIcGrgJ9hbZnC7P5VIWLYcZCBjQI7NNqzPYvXcv2y1uCM_VIF3BTcviqCvYf-qtbSzoXBDHDmELZuUiYkGkahbVSM0U2y_CEwtXozmoB_BokL3iKL1yILfcJq2b1nyM_P82kKQFxKr8s_ABiNhyujb-VoWKn-W0XQUWyL-PbPWTKWNYbsKAVtz4ELKxTYYWCGnqd44BNnV_k4lDe8RqU2FoIUkqueG7s9hoQsU9zth-pnv6N06_rTaJf6qC'
    ],
    amenities: [
      { icon: 'wifi', title: 'Ücretsiz Wi-Fi', desc: 'Yüksek hızlı fiber' },
      { icon: 'ac_unit', title: 'Akıllı Klima', desc: 'Otomatik iklimlendirme' },
      { icon: 'tv', title: '65" Smart TV', desc: 'Netflix üyeliği dahil' },
      { icon: 'coffee_maker', title: 'Nespresso', desc: 'Kahve kapsülleri' }
    ]
  },
  'mediterranean-family': {
    title: 'Akdeniz Aile Süiti',
    price: 510,
    rating: 4.6,
    reviews: 58,
    location: 'Kuzey Atolü, Maldivler',
    size: 72,
    guests: '4 Kişi',
    bed: '2 Queen Yatak',
    desc: 'Geniş ailelerin konforu düşünülerek tasarlanmış Akdeniz Aile Süiti, iki ayrı yatak odası ve ortak oturma alanından oluşur. Özel bahçe terası lagüne ve sahil şeridine açılır.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbB8-Oq2CAhwRZIwuFFbZqo_AyxXs4oUDkVfv_Ph7lOkssZYsWBPEEQrSj3zx7Vcl_gmQF3E1wCe0B8xmRCQL-4ujiUManBC8U1inU-p-ogsr8mHBm2MPO0m1p3gPvOZQXFX3krqFoZ1CcNND5_p4eBgnp4h925ernygAxwr3Z_x9Ln98QdJl5XJGH8KUDsLrnlqnxU8041oS2VitmiRfsnFGezVsjliK7LhkvNc-xOUfm2xt9Uuq5JXBk36cDXdfROpVvHZiRf3Qi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4twTehMbpyJj_MtEqm5YfLQ81XadLmjjlnao3iXPnOhFl5Hrn9RX-RWpTlRMfNknIRrDg8DZXZkfTh36njtlY_zRhQP418FIFEETT5d3f1UZ6E9fjx1QtUSNsJbMENvL35aTVmIveao9w9l5EoLmpUZGtHnI8r0D7FsUOWHH3_AUMmurDQaEpm3uTvB3JVazPTpR9GDrqGCYjf-1_SrF_kPdKtpMbGereLun5H1HJRRgO_ICq4F6Gp8oQMf5lUxc4-rT-y4AugI5_',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdfXIIXsYL5XgNJ2g_LnWhyYgI0eSdtQHlS2Io5DjZBrD33VGQgMrBmPLPS1QWjaryn57jt7Grj717QHh4cFqtfpHZsYHxNxXUmCiKdUcOe32dRCwPiguf8mVXb_6mU2lk60feKmsyil1nv6_7Blk4EV5aPphHU6S-gGIqaYwaeBvRtxdXv_xO_cwjopol4lkZ8JfviORJod6uHZRHHTJYLbUS_6MlX072SkXm5A-D1ZXV_Yus0WjFYXjzoq6_-E9EyaRB65V12pHx',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDdJaYMCOiTCzKTvJlVPt204jb-lfBqLqx172IWP1OmlrilzslsY8DLjAize3MNP9OQe7UrTRzf0IJXH_B0pypUwgjcT1yICtwjrqJA1Vv-mOn6R-eb1pjfkGh4joHt8IhYPEjJ5K9YUKggmWqezZWAVbFMtRXhANo0yE36mnMPRMxRpj3ZVveSiFEiqFBqQTjpG2Wy7ISmQws_lfo_737LXA8MYJDJd-DsI_1oNiEmEyQlra0ZIGttsZb0LYAPSFtAcsnJJlBABqoJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdpJgVAqysZzXW7POFYYIcGrgJ9hbZnC7P5VIWLYcZCBjQI7NNqzPYvXcv2y1uCM_VIF3BTcviqCvYf-qtbSzoXBDHDmELZuUiYkGkahbVSM0U2y_CEwtXozmoB_BokL3iKL1yILfcJq2b1nyM_P82kKQFxKr8s_ABiNhyujb-VoWKn-W0XQUWyL-PbPWTKWNYbsKAVtz4ELKxTYYWCGnqd44BNnV_k4lDe8RqU2FoIUkqueG7s9hoQsU9zth-pnv6N06_rTaJf6qC'
    ],
    amenities: [
      { icon: 'wifi', title: 'Ücretsiz Wi-Fi', desc: 'Yüksek hızlı fiber' },
      { icon: 'pool', title: 'Özel Havuz', desc: 'Lagün kenarlı' },
      { icon: 'ac_unit', title: 'Akıllı Klima', desc: 'Otomatik iklimlendirme' },
      { icon: 'tv', title: '65" Smart TV', desc: 'Netflix üyeliği dahil' },
      { icon: 'restaurant', title: 'Restoran', desc: 'Tüm öğünlerde açık büfe' }
    ]
  }
};

export default function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = ROOMS_DETAILS[id] || ROOMS_DETAILS['presidential-ocean'];

  const [stayNights, setStayNights] = useState(3);
  const [dates, setDates] = useState('24 Ekim - 27 Ekim 2024');
  const [guests, setGuests] = useState('2 Yetişkin, 0 Çocuk');

  const basePrice = room.price * stayNights;
  const serviceFee = 45;
  const taxes = 82;
  const totalAmount = basePrice + serviceFee + taxes;

  const handleBookNow = (e) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        roomTitle: room.title,
        price: room.price,
        nights: stayNights,
        dates: dates,
        guests: guests,
        total: totalAmount,
        image: room.images[0]
      }
    });
  };

  return (
    <main className="rooms-main">
      <nav className="breadcrumbs-nav">
        <span className="cursor-pointer hover:text-ocean-blue" onClick={() => navigate('/')}>Anasayfa</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="cursor-pointer hover:text-ocean-blue" onClick={() => navigate('/rooms')}>Odalar</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-midnight-navy font-bold">{room.title}</span>
      </nav>

      <div className="detail-header">
        <div className="detail-title-section">
          <h2 className="font-headline-xl text-headline-xl text-midnight-navy mb-2">{room.title}</h2>
          <div className="detail-meta-row">
            <div className="detail-rating">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="ml-2 text-on-surface font-bold">{room.rating}</span>
            </div>
            <span className="text-on-surface-variant">({room.reviews} Değerlendirme)</span>
            <span className="flex items-center text-on-surface-variant gap-1">
              <span className="material-symbols-outlined text-base">location_on</span>
              {room.location}
            </span>
          </div>
        </div>
      </div>

      <section className="bento-grid mb-16 overflow-hidden rounded-xl">
        <div className="bento-main relative overflow-hidden group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.images[0]} alt={room.title} />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>
        <div className="relative overflow-hidden group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.images[1]} alt={room.title} />
        </div>
        <div className="relative overflow-hidden group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.images[2]} alt={room.title} />
        </div>
        <div className="relative overflow-hidden group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.images[3]} alt={room.title} />
        </div>
        <div className="relative overflow-hidden group cursor-pointer">
          <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={room.images[4]} alt={room.title} />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-snow-white font-bold text-lg pointer-events-none">
            +12 Fotoğraf
          </div>
        </div>
      </section>

      <div className="detail-grid-layout">
        <div className="detail-main-pane">
          <section>
            <h3 className="detail-section-title">Açıklama</h3>
            <p className="detail-desc-text">
              {room.desc}
            </p>
          </section>

          <section>
            <h3 className="detail-section-title">Premium Olanaklar</h3>
            <div className="detail-amenities-grid">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="detail-amenity-card">
                  <span className="material-symbols-outlined text-ocean-blue text-3xl">{amenity.icon}</span>
                  <div>
                    <p className="font-bold text-on-surface">{amenity.title}</p>
                    <p className="text-body-sm text-on-surface-variant">{amenity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-8">
              <h3 className="detail-section-title">Misafir Değerlendirmeleri</h3>
            </div>
            <div className="detail-reviews-container">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-author-box">
                    <div className="review-avatar">AM</div>
                    <div>
                      <p className="font-bold text-on-surface">Alexandra Miller</p>
                      <p className="text-body-sm text-on-surface-variant">Konaklama: Ocak 2024 • Aile Tatili</p>
                    </div>
                  </div>
                  <div className="review-stars">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
                <p className="review-text">
                  "LuxeStay beklentilerimizin ötesindeydi. Özel infinity havuzumuzdan gün batımını izlemek seyahatimizin en güzel anıydı. Personel son derece ilgili ve profesyoneldi."
                </p>
              </div>
              <div className="review-card">
                <div className="review-header">
                  <div className="review-author-box">
                    <div className="review-avatar">JH</div>
                    <div>
                      <p className="font-bold text-on-surface">James Harrison</p>
                      <p className="text-body-sm text-on-surface-variant">Konaklama: Aralık 2023 • İş & Tatil</p>
                    </div>
                  </div>
                  <div className="review-stars">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-sm">star</span>
                  </div>
                </div>
                <p className="review-text">
                  "Harika bir tasarım ve muhteşem bir konum. Okyanusun ortasında bile internet bağlantısı son derece hızlıydı. Rüya gibi bir ortamda dinlenmek için mükemmel bir seçenek."
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside className="detail-sidebar">
          <div className="booking-widget">
            <div className="booking-widget-header">
              <div>
                <span className="font-price-tag text-price-tag text-midnight-navy">${room.price}</span>
                <span className="text-on-surface-variant">/ gece</span>
              </div>
              <div className="booking-widget-badge">
                Son 2 Oda!
              </div>
            </div>
            <form onSubmit={handleBookNow} className="booking-form">
              <div className="booking-input-group">
                <label className="block font-label-md text-on-surface-variant uppercase tracking-wider">Tarihler</label>
                <div className="booking-input-wrapper">
                  <input 
                    className="booking-input" 
                    type="text" 
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_month</span>
                </div>
              </div>
              <div className="booking-input-group">
                <label className="block font-label-md text-on-surface-variant uppercase tracking-wider">Gece Sayısı</label>
                <div className="booking-input-wrapper">
                  <select 
                    className="booking-select"
                    value={stayNights}
                    onChange={(e) => setStayNights(Number(e.target.value))}
                  >
                    <option value="1">1 Gece</option>
                    <option value="2">2 Gece</option>
                    <option value="3">3 Gece</option>
                    <option value="4">4 Gece</option>
                    <option value="5">5 Gece</option>
                    <option value="7">7 Gece</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">dark_mode</span>
                </div>
              </div>
              <div className="booking-input-group">
                <label className="block font-label-md text-on-surface-variant uppercase tracking-wider">Misafirler</label>
                <div className="booking-input-wrapper">
                  <select 
                    className="booking-select"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="1 Yetişkin">1 Yetişkin</option>
                    <option value="2 Yetişkin, 0 Çocuk">2 Yetişkin, 0 Çocuk</option>
                    <option value="2 Yetişkin, 1 Çocuk">2 Yetişkin, 1 Çocuk</option>
                    <option value="3 Yetişkin">3 Yetişkin</option>
                  </select>
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">group</span>
                </div>
              </div>

              <div className="booking-price-breakdown">
                <div className="booking-price-row">
                  <span>${room.price} x {stayNights} gece</span>
                  <span>${basePrice}</span>
                </div>
                <div className="booking-price-row">
                  <span>Hizmet Bedeli</span>
                  <span>${serviceFee}</span>
                </div>
                <div className="booking-price-row">
                  <span>Turizm Vergisi</span>
                  <span>${taxes}</span>
                </div>
                <div className="booking-total-row">
                  <span>Toplam</span>
                  <span>${totalAmount}</span>
                </div>
              </div>

              <button className="booking-btn-submit" type="submit">
                Hemen Rezervasyon Yap
              </button>
              <p className="text-center text-body-sm text-on-surface-variant mt-4">
                Şimdilik sizden ücret alınmayacaktır
              </p>
            </form>
          </div>

          <div className="guarantee-banner">
            <div className="guarantee-title-row">
              <span className="material-symbols-outlined text-ocean-blue">verified_user</span>
              <p className="font-bold">LuxeStay Garantisi</p>
            </div>
            <p className="guarantee-text">
              En iyi fiyat garantisi. Çıkış işlemleri sırasında beklenmedik sürprizler ve gizli ücretler yok.
            </p>
          </div>
        </aside>
      </div>

      <section className="map-section">
        <h3 className="detail-section-title">Konum</h3>
        <div className="map-wrapper">
          <img className="map-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzZh86P9-ZQuU7_pRCf_VqZueZWuvwE1a4jRsNCJAEv4hhinhonmPwof-BO_Ky1jJ_xowYvrIqVGOySylPc6IAphRcJcRNiaFecpY-y7CXTJFixRWK4_linlSHZhXi-FL8EQPNUaw7PGAL-HvQquPmljKwCl3NOtYJwITvrwWaQe1pt2JS-_A17cpu_cZAdd782L6XNo4lQXgEFJ2wI9DIzeF6ub_zTzG0HmadpU8VkGRzeuvC0cKy07xa2a_43aPe2awjKbSMldMN" alt="Maldivler Haritası" />
        </div>
      </section>
    </main>
  );
}
