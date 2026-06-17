# SoftIto Akademi Frontend Yazılım Eğitimi

Bu depo, **SoftIto Akademi** bünyesinde **Eğitmen Selahaddin ÇİFTÇİ** tarafından verilen **Frontend Yazılım Geliştirme Eğitimi** süresince yazılan tüm ders notlarını, kod örneklerini, alıştırmaları ve geliştirilen projeleri bir arada sunan ana kaynak deposudur.

---

## 👨‍🏫 Eğitmen Bilgisi
*   **Eğitmen:** Selahaddin ÇİFTÇİ
*   **Kurum:** SoftIto Akademi
*   **Program:** Frontend Geliştirici (React + TypeScript) Yetiştirme Programı

---

## 📅 Eğitim Müfredatı ve Yol Haritası

Aşağıdaki tabloda eğitim günleri, işlenen konu başlıkları ve ilgili ders materyallerinin bulunduğu klasörler listelenmiştir:

| Tarih | Saat | Konu Başlığı | Proje / Kod Konumu |
| :--- | :--- | :--- | :--- |
| **04/06/2026** | 09:00-16:00 | IDE Kurulumu, DevTools ile Hata Ayıklama & DOM Etkileşimleri | [04062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/04062026) |
| **05/06/2026** | 09:00-16:00 | Modern CSS Mantığı, Tailwind CSS Kurulumu & Temelleri | [05062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/05062026) |
| **08/06/2026** | 09:00-16:00 | Flexbox ve Grid ile Responsive Sayfa Yerleşimleri | [08062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/08062026) |
| **09/06/2026** | 09:00-16:00 | ES6+ Modern JavaScript Tekrarı, Spread/Rest & Array Metotları | [09062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/09062026) |
| **10/06/2026** | 09:00-16:00 | Asenkron JS: Callbacks, Promises, Async/Await & API (Fetch/Axios) | [10062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/10062026) |
| **11/06/2026** | 09:00-16:00 | TypeScript'e Giriş, Tip Yapıları, Interfaces & Jenerikler (Generics) | [11062026](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/11062026) |
| **12/06/2026** | 09:00-16:00 | React Giriş, Vite ile Proje Kurulumu, JSX & Props Yapısı | [12062026/ilk-ders](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/12062026/ilk-ders) |
| **15/06/2026** | 09:00-16:00 | React State Yönetimi (useState) & Form Olayları | [15062026/ilk-ders](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/15062026/ilk-ders) |
| **16/06/2026** | 09:00-16:00 | React Lifecycle, useEffect, API İstekleri & Koşullu Render | [16062026/ecommerce](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/16062026/ecommerce) |
| **17/06/2026** | 09:00-16:00 | Tailwind CSS ile Stil Yönetimi & React Hook Form Giriş | [17062026/ecommerce-v2](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/17062026/ecommerce-v2) |
| **18/06/2026** | 09:00-16:00 | Props & Prop Drilling Çözümü ve Context API ile Global State | [ecommerce-v2](file:///Users/selahaddin/Desktop/yenidersler/SoftIto-Frontend-E-itimi/ecommerce-v2) |
| *Gelecek Konular* | *Müfredat Devamı* | Dinamik Yönlendirme (Router), Global State (Redux), UI Kütüphaneleri, RTL Testleri ve Bitirme Projesi | *Eğitim takvimine göre güncellenecektir* |

---

## 🛠️ Kazanılan Temel Yetkinlikler ve Teknolojiler

Bu eğitim serüveninde öğrencilere kazandırılan temel teknolojiler ve mimari yaklaşımlar:

1.  **Temel HTML5 & CSS3:** Semantik HTML yapıları, modern yerleşim metodolojileri.
2.  **Tailwind CSS (Utility-First):** `@tailwind` direktifleri, tema özelleştirme (`tailwind.config.js`), responsive breakpoints (`sm:`, `md:`, `lg:`) ve animasyonlu geçişler.
3.  **Modern JavaScript (ES6+):** Arrow functions, scope (`let`, `const`), Spread/Rest, Object & Array Destructuring, `map()`, `filter()` ve asenkron programlama (`Promises`, `Async/Await`, `fetch`, `axios`).
4.  **TypeScript:** Statik tiplendirme, `interface` yapıları, `readonly` & optional (`?`) niteleyicileri, fonksiyon tipleri ve esnek `Generics` yapıları.
5.  **React Core Concepts:** JSX sözdizimi, bileşen tabanlı (Component-based) mimari, prop akışı, koşullu ve liste render optimizasyonları, olay yönetimi (Event handling).
6.  **React Hooks & State:** `useState` (değişkenler, diziler, nesneler için durum takibi), `useEffect` (side effects, timers, olay dinleyiciler ve cleanup işlemleri).
7.  **Form Yönetimi:** `react-hook-form` kütüphanesi ile yüksek performanslı, uncontrolled input tabanlı form yönetimi ve dinamik veri doğrulama (validation).
8.  **Global State Yönetimi:** Prop Drilling probleminin çözümü, `createContext` ve `useContext` ile merkezi sepet ve tema yönetimi altyapısı.

---

## 🚀 Projeleri Yerel Ortamda Çalıştırma

Vite tabanlı React projelerini yerel makinenizde çalıştırmak için aşağıdaki adımları uygulayabilirsiniz:

### Prerequisities (Gereksinimler)
*   Bilgisayarınızda **Node.js** (LTS sürümü tavsiye edilir) kurulu olmalıdır.

### Adımlar

1.  Projeyi klonlayın veya zip olarak indirin.
2.  İncelemek istediğiniz proje klasörüne terminalinizde geçiş yapın (Örnek: `17062026/ecommerce-v2` veya root dizindeki `ecommerce-v2`):
    ```bash
    # Örnek klasör geçişi
    cd 17062026/ecommerce-v2
    ```
3.  Gerekli paketleri kurun:
    ```bash
    npm install
    ```
4.  Geliştirici sunucusunu başlatın:
    ```bash
    npm run dev
    ```
5.  Terminalde gösterilen adresi (genellikle `http://localhost:5173`) tarayıcınızda açarak projeyi görüntüleyin.

---

## 📁 Dosya ve Klasör Yapısı Şeması

```text
SoftIto-Frontend-E-itimi/
├── 04062026/              # IDE, DevTools, Temel HTML/JS DOM Manipülasyonu
│   └── dersnotu.txt       # Günlük Ders Notu
├── 05062026/              # Modern CSS ve Tailwind CSS Giriş
│   └── dersnotu.txt       # Günlük Ders Notu
├── 08062026/              # Flexbox, Grid, Responsive Tasarım ve Dashboard Düzenleri
│   └── dersnotu.txt       # Günlük Ders Notu
├── 09062026/              # ES6+ JavaScript ve Bootstrap 5.3 Paneli
│   └── dersnotu.txt       # Günlük Ders Notu
├── 10062026/              # Asenkron Programlama, Fetch ve Axios Entegrasyonu
│   └── dersnotu.txt       # Günlük Ders Notu
├── 11062026/              # TypeScript Temelleri, Interfaces ve Generics
│   └── dersnotu.txt       # Günlük Ders Notu
├── 12062026/              # React Başlangıcı ve Vite Şablonu
│   └── ilk-ders/
│       └── dersnotu.txt   # Günlük Ders Notu
├── 15062026/              # React useState ve Çoklu Form Girdileri
│   └── ilk-ders/
│       └── dersnotu.txt   # Günlük Ders Notu
├── 16062026/              # React Lifecycle, useEffect ve TrendStore v1
│   └── ecommerce/
│       └── dersnotu.txt   # Günlük Ders Notu
├── 17062026/              # Tailwind Stil Yönetimi, React Hook Form ve TrendStore v2
│   └── ecommerce-v2/
│       └── dersnotu.txt   # Günlük Ders Notu
├── ecommerce-v2/          # (18/06/2026) Props, Prop Drilling ve Context API
│   └── dersnotu.txt       # Günlük Ders Notu
├── dersler.md             # Ders Müfredat ve Takvimi
└── readme.md              # Ana Tanıtım ve Kılavuz (Bu Dosya)
```

---

> [!TIP]
> Her ders klasörünün içinde o güne ait teorik detayları, kod parçacıklarını ve pratik kazanımları içeren **dersnotu.txt** dosyaları yer almaktadır. Konuları pekiştirmek için bu notları okumanız önerilir.
