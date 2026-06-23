# 📝 Developer Prompt Specifications Collection

Bu dosya, çeşitli platformlar ve projeler için hazırlanmış detaylı rol, sistem mimarisi, tasarım sistemi ve bileşen gereksinimlerini içeren geliştirici yönlendirme şablonlarını (prompt) barındırmaktadır.

---

## 🗂️ İçindekiler / Table of Contents

1. [🐾 1. VETERİNER KLİNİĞİ DİJİTAL YÖNETİM PLATFORMU](#1-veteri̇ner-kli̇ni̇ği̇-di̇ji̇tal-yöneti̇m-platformu)
2. [💰 2. KİŞİSEL BÜTÇE YATIRIM TAKİBİ](#2-ki̇şi̇sel-bütçe-yatirim-taki̇bi̇)
3. [🔑 3. GOOGLE ŞİFRE YÖNETİCİSİ BENZERİ MOBİL UYGULAMA ÖZELLİKLERİ](#3-google-şi̇fre-yöneti̇ci̇si̇-benzeri̇-mobi̇l-uygulama-özelli̇kleri̇)
4. [🎨 4. NFT DİGİTAL SANAT PAZARYERİ PROJE](#4-nft-di̇gi̇tal-sanat-pazaryeri̇-proje)
5. [🤝 5. GÖNÜLLÜLÜK AĞI VE SOSYAL SORUMLULUK PLATFORMU](#5-gönüllülük-aği-ve-sosyal-sorumluluk-platformu)
6. [🏠 6. AKILLI EV OTOMASYON SİSTEMİ](#6-akilli-ev-otomasyon-si̇stemi̇)
7. [🤖 7. YAPAY ZEKA DESTEKLİ KİŞİSEL ASİSTAN](#7-yapay-zeka-destekli̇-ki̇şi̇sel-asi̇stan)

---

# 1. VETERİNER KLİNİĞİ DİJİTAL YÖNETİM PLATFORMU

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Full-Stack Developer and UI/UX Architect specializing in modern SaaS medical/veterinary platforms. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, complete frontend components, backend entity designs, and exact styling specifications for a "Veterinary Clinic Digital Management Platform".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to the following design system across all screens, components, and interactive elements:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | Emerald Green | `#10B981` | `emerald-500` | Represents health, recovery, and vitality. |
| **Secondary / Accent** | Deep Ocean Blue | `#1E3A8A` | `blue-900` | Used for corporate typography, headers, and professional layouts. |
| **Warning / Pending** | Amber Yellow | `#F59E0B` | `amber-500` | Used for near-due tasks, warning alerts, and intermediate triage states. |
| **Danger / Emergency** | Crimson Red | `#EF4444` | `red-500` | Used for delayed events, critical triage, and urgent notifications. |
| **Disabled / Inactive** | Muted Slate Gray | `#94A3B8` | `slate-400` *(bg: `#F1F5F9`)* | Muted slate gray with background. |

- **Typography:** Inter or Roboto sans-serif family. Clean, highly readable, and scannable.

---

## 📂 SECTION 1: SYSTEM ARCHITECTURE & DATA MODEL SHAPE

Define the structural core. Both Client and Doctor panels share the same transactional database but access it via asymmetric RBAC (Role-Based Access Control).

### Data Objects to Structure:

1. **User/Owner Profile:** `ID`, `Name`, `Email`, `Phone`, `Address`, `Role` (Client/Doctor).
2. **Pet Profile:** `ID`, `OwnerID`, `Name`, `Age`, `Species`, `Breed`, `Microchip Number`, `Chronic Conditions` (Array), `Allergies` (Array), `Operation History` (Array).
3. **Vaccination Event:** `ID`, `PetID`, `VaccineName`, `ScheduledDate`, `ExecutedDate`, `Status` (`COMPLETED` [Green], `NEAR_DUE` [Yellow], `OVERDUE` [Red]).
4. **Medical Record:** `ID`, `PetID`, `DoctorID`, `ConsultationDate`, `Diagnosis`, `AppliedTreatment`, `PrescribedMedications`, `DoctorNotes`, `FollowUpDate`, `FileAttachments` (Array of URLs).
5. **Appointment Block:** `ID`, `PetID`, `DoctorID`, `ServiceID`, `DateTimeSlot`, `PaymentStatus` (`PENDING`, `PAID`), `AppointmentStatus` (`SCHEDULED`, `COMPLETED`, `CANCELLED`).

---

## 💻 SECTION 2: INTERACTIVE FRONTEND COMPONENTS & INTERFACES

Implement the system step-by-step, providing detailed UI layouts, buttons, actions, and interactive behaviors for each module below:

### 🖥️ MODULE 1: CLIENT PANEL (HASTA SAHİBİ PANELİ)

#### 1.1 Dashboard Overview
- **Visual Grid:** Responsive multi-card layout.
- **Components to Create:**
  - **Today's Appointments Card:** Shows time, assigned doctor, and purpose. If empty, display text: _"No appointments scheduled for today."_
  - **Upcoming Vaccines Carousel:** Grouped by pet, rendered with respective color-coded dynamic badges (`#10B981`, `#F59E0B`, `#EF4444`).
  - **Delayed Procedures Alert Box:** Styled in soft red background (`#FEF2F2`) with dark red text (`#991B1B`) listing actions past their deadline.
  - **Quick Actions Sidebar:**
    - `Primary Button`: "Book Appointment Now" (`bg-emerald-500 hover:bg-emerald-600 text-white`, border-radius: 8px).
    - `Floating Action Widget`: "Vet-AI Assistant Quick Access" (Fixed bottom-right corner, pulsed green border, chat icon).
  - **Pet Health Snippets Summary:** Minimalist profile avatars representing each registered pet with micro-status indicators.

#### 1.2 My Pets Module & Digital Health Booklet (Dijital Sağlık Karnesi)
- **Visual Layout:** Left column features pet switching tabs. Right column features dynamic sub-tabs for Health Booklets.
- **Fields Rendered:** Full display of Name, Age, Species, Breed, Microchip ID, Chronic notes, and Allergies.
- **Health Booklet Sub-Tabs:**
  - **Vaccination Timeline Component:** Linear tracking graph. Circle nodes change color depending on status (Green/Yellow/Red).
  - **Chronological Treatment History Table:** Columns for [Date, Diagnosis, Treatment, Medication/Rx, Doctor Notes]. Includes a deep-link button to open the "Follow-up Appointment" model.
  - **Secure File Archive Grid:** Clickable folder cards filtered by category (X-Rays, Lab Results, Ultrasound, PDF Rx). Each card contains an interactive `Download Icon` and a `Preview Eye Icon`.

#### 1.3 Booking & Integrated Payment Pipeline
- **Step 1: Service Catalog Grid:** Interactive cards displaying services (e.g., General Check-up, Rabies Vaccine, Teeth Cleaning, Grooming). Each item must display explicit pricing. Clicking an item applies active state styling (Emerald border, checkmark icon).
- **Step 2: Smart Scheduling Calendar:** Render a full month/week view grid. Time-slots dynamically mapped to doctor availability.
  - _UI State:_ Occupied hours are rendered in flat gray (`#E2E8F0`), text pointer-events disabled. Available hours text is crisp blue (`#1E3A8A`) with hover activation effects.
- **Step 3: Embedded Virtual POS Terminal:** Seamlessly transitions into an online payment form checkout window.
  - _State Validation Logic:_ Finalizing execution requires successful credit card API confirmation. If successful, transition state instantly changes appointment metadata flag to `PAID` / "Ödendi", pushes an instant notification event to the Doctor Panel, and drops an auto-confirmed slot on the calendar.

---

### 🩺 MODULE 2: DOCTOR PANEL (HEKİM PANELİ)

#### 2.1 Clinical Control Center (Dashboard)
- **Top Financial & Operational Metrics Strip:** 4-Column Card setup mapping [Today’s Income, Completed Procedures, Pending Schedule Queue, Critical Triage Alerts].
- **Live Queue Table:** Lists current day appointments sorted sequentially by time. Shows Pet Name, Breed, Target Operation, and Status Badge.
- **Urgent Triage Alert Stream:** Highlighted banner flashing at the top if an automated high-risk event fires. _Example Notification:_ `[CRITICAL ALERT] Client [User X] submitted an Emergency Signal via Vet-AI Assistant for Pet [Pet Y].`

#### 2.2 Comprehensive Patient Database & EMR
- **Search & Filter Component:** Dynamic search input field tracking Name, Owner Name, or Microchip ID.
- **Unified Medical Folder:** Interactive workspace displaying the pet's entire chronological history. Hekim can edit, update or historical entries.

#### 2.3 Smart Medical Record Formulation Sheet (Akıllı Tedavi Formu)
- **Input Structures:** Dropdown for Diagnosis Selection (Searchable ICD-vet codes), text area for Applied Procedures, multi-select input for Medications & Dosages, Date-Picker for Next Control Check, and Drag-and-Drop area for raw medical imaging attachment uploads.
- **Commit Logic:** Clicking the `Save & Publish` Button (`bg-blue-900 text-white`) updates the database and immediately pushes data onto the specific client's UI booklet portal asynchronously without layout reloads.

#### 2.4 Service Catalog & Availability Configurator
- **Service Management Panel:** CRUD dashboard table controlling pricing indexes, naming conventions, descriptions, and structural status toggles. If a service toggle state is switched to `Inactive`, it must immediately hide from the public-facing client catalog.
- **Doctor Scheduler Tool:** Time block calendar interface enabling manual reservation overrides for lunch breaks, surgical procedures, and private leave gaps.

---

### 🤖 MODULE 3: VET-AI ASSISTANT (YAPAY ZEKA DANIŞMANI)

#### 3.1 Conversational Triage Interface
- **UI Architecture:** Chat drawer widget featuring custom scrollbars, typing indicators, auto-scrolling capabilities, and message bubble categorization blocks.
- **Diagnostic Logic Tree & Triage Evaluation Matrix:**
  - **Symptom Processing Stream:** Parses user prompts for keywords like _Vomiting, Fever, Bleeding, Limping, Inappetence, Dyspnea_.
  - **Interactive Deep-Diving Diagnostics:** AI must formulate systematic follow-ups dynamically. _("How many times did it occur?", "Is there active bleeding?", "Is there shortness of breath?")_
  - **Risk Tier Profiling Output:**
    - **LOW RISK (e.g., Minor shedding):** Renders info banner. Outputs conservative home tracking and care workflows.
    - **MEDIUM RISK (e.g., Recurrent loss of appetite):** Inserts a dynamic anchor component route redirecting directly to the appointment scheduler: _"Medical overview is highly advised. Click here to Schedule an Appointment."_
    - **HIGH RISK/EMERGENCY (e.g., Heavy bleeding, breathing issues):** Fires prominent red blinking element wrapper. Instantly appends full clinic map geolocation vectors, displays the emergency hotline direct dialer button (`bg-red-500 text-white`), and displays an **"INSTANT EMERGENCY BOOKING"** button.
- **Legal Disclaimer Mandate:** Every session init initialization or answer card bottom must append a persistent text node: _"Disclaimer: These suggestions are for informational purposes only. For definitive diagnosis and treatment, you must consult your veterinarian."_
- **Doctor Telemetry Bridge:** Conversations resulting in Medium/High risk flags automatically compile a structured markdown payload ("Vet-AI Analysis Report") detailing keywords, risk metrics, and time stamps, and feed it directly into the target doctor's main alerts workflow dashboard.

---

### 👥 MODULE 4: PLATFORM COMMUNITY SPACE (TOPLULUK ALANI)

#### 4.1 Content Stream & Interactive Modules
- **Social Feed Grid:** Cards displaying user stories, recovery experiences, and general advice requests. Includes functional Upvote, Comment, and Bookmark icons.
- **Moderated Q&A Board:** Categorized forum threads (Nutrition, Behavior, Post-Vaccine care).
  - _Strict Filtering System:_ Medical drug indexing words or definitive diagnostic terminology used by non-doctor roles will throw a soft intercept UI layout block warning: _"To ensure pet safety, definitive medical treatments or prescription suggestions are restricted. Please query Vet-AI or book a clinical review."_
- **Verified Clinical Knowledge Base:** Articles written and posted exclusively by verified accounts with a doctor role badge. These posts feature a clear, distinct **"Doctor Approved" Badge** (`bg-emerald-100 text-emerald-800`).
- **Lost & Adoption Listings Hub:** Photo cards featuring specialized data fields: [Pet Photo, Species, Breed, Age, Missing Location/Region, Last Seen Timestamp, Contact Action Trigger Button].
- **Clinic Events Bulletin:** Banner block alerting community members to upcoming wellness camps, vaccination drives, or schedule modifications.

---

### 🌐 MODULE 5: PUBLIC FACING COMPONENT PAGES

#### 5.1 Institutional Landing Frameworks
- **About Page:** Grid layout showcasing the clinic’s history, core missions, operational technology assets, and doctor bio cards listing professional specializations.
- **Contact Portal:** Embedded live Google Maps element, contact support details, and an interactive contact capture form processing [Full Name, Email, Phone, Subject Header, Message Body].
- **Asymmetric Authentication Gate (Giriş Yap Sayfası):** Divided into two distinct columns or toggle cards:
  - **Client Entry Side:** CTA text: _"Login to manage your companion's health journey."_
  - **Doctor Entry Side:** CTA text: _"Authorized login for medical staff and clinic management."_

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the structured code framework, layout templates, routing pathways, and styling architecture based on the specifications above. Ensure all modules match their specific Tailwind/HEX color-coding tokens, action-triggered button states, and conditional UI workflows. Proceed step-by-step to compile a comprehensive blueprint of this platform.

---

# 2. KİŞİSEL BÜTÇE YATIRIM TAKİBİ

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Full-Stack Developer and UI/UX Architect specializing in modern Fintech SaaS applications and financial intelligence platforms. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, frontend components, backend entity designs, and exact styling specifications for an "AI-Powered Financial & Transaction Management Platform".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to the following design system across all screens, components, and interactive elements:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | Deep Indigo Blue | `#4F46E5` | `indigo-600` | Represents security, trust, and professional finance. |
| **Income / Positive** | Mint Green | `#10B981` | `emerald-500` | Used for incomes, positive cashflows, active statuses, and growth indicators. |
| **Expense / Negative** | Crimson Red | `#EF4444` | `red-500` | Used for expenses, negative cashflows, alerts, and deletions. |
| **System Neutral / Structure** | Slate / Zinc Gray Group | `#0F172A` / `#F8FAFC` / `#64748B` | - | `#0F172A` for headers, `#F8FAFC` for page backgrounds, `#64748B` for secondary text. |

- **Typography:** Inter or SF Pro Sans-serif. Highly readable numerical weights (`font-mono` tracking for numeric transaction fields is preferred for alignment).

---

## 📂 SECTION 1: SYSTEM ARCHITECTURE & ENHANCED DATA MODEL

Define the data layer. The platform relies on real-time balance calculations, automated triggers, and multi-tenant user access controls.

### Data Objects to Structure:

1. **User Profile & Management:** `ID`, `Name`, `Email`, `AvatarURL`, `Role` (`OWNER`, `ADMIN`, `VIEWER`), `PasswordHash`, `CreatedAt`.
2. **Transaction Item:** `ID`, `CreatorID`, `Type` (`INCOME`, `EXPENSE`), `Amount`, `Category` (Dropdown tied to standard financial codes), `Date`, `Description`, `RecurrenceFlag` (Boolean), `ReceiptAttachmentURL`.
3. **Auto-Payment Mandate:** `ID`, `TargetAmount`, `ExecutionDayOfMonth`, `Category`, `Description`, `Status` (`ACTIVE` [Green], `PAUSED` [Slate Gray]), `FailureCounter`.
4. **AI Forecast Snapshot:** `ID`, `ComputedDate`, `PredictedTargetMonth`, `PredictedTotalExpense`, `ConfidenceScore` (Percentage), `CategoryBreakdown` (JSON Object), `GeneratedSavingTips` (Array of strings).

---

## 💻 SECTION 2: INTERACTIVE FRONTEND COMPONENTS & PAGES

Implement the platform systematically, providing complete UI structures, layout components, action triggers, and reactive visual feedback.

### 🔐 MODULE 1: AUTHENTICATION GATEWAYS (ŞİFRELEME & GİRİŞ)

#### 1.1 Login & Registration Frameworks (/login, /register)
- **Visual Design:** Split-screen layout. Left side renders abstract financial growth vector charts; right side hosts the semantic white authentication card grid.
- **Form Interactivity:** Real-time client-side regex input validation for Email and Password strength bars.
- **Buttons:**
  - `Primary CTA`: "Sign In" / "Create Account" (`bg-indigo-600 hover:bg-indigo-700 text-white`, border-radius: 6px).

---

### 📊 MODULE 2: MISSION CONTROL DASHBOARD (/dashboard)

#### 2.1 Metric Card Strip
- **Total Balance Card:** Bold display of net funds. If net balance falls below a customizable structural threshold ($500), automatically toggle border color to Crimson Red (`#EF4444`) with a micro-text indicator: _"Critically Low Balance Warning"_.
- **Monthly Income Summary Card:** Displays aggregated dynamic monthly values paired with an upward trending arrow icon (`#10B981`).
- **Monthly Expense Summary Card:** Displays aggregated dynamic monthly debit values paired with a downward trend line (`#EF4444`).
- **AI Forecast Sneak-Peek Widget:** Soft indigo banner showing next month's predicted overall burn rate with a deep link button redirecting to the core AI tab.

#### 2.2 Ledger Stream & Fast Triggers
- **Recent Transactions Ledger:** Maximum 5 items displayed chronologically. Positive values styled with a `+` prefix in Green; negative values with a `-` prefix in Red.
- **Quick-Add Transaction Shortcut Button:** Prominent corner button (`bg-indigo-600 text-white`) that fires a non-disruptive, clear overlay Modal layout instantly.

---

### 💸 MODULE 3: TRANSACTIONS & CASHFLOW ENGINE (/transactions)

#### 3.1 Advanced Filter & Data Table View
- **Control Bar Stack:** Includes a real-time Search Input Box tracking descriptions/categories, a Dropdown Select filter separating `Income / Expense / All`, and a Date Range Picker Component.
- **Data Spreadsheet Component:** Columns mapped to [Transaction ID, Date, Description, Category Badge, Type, Amount, Actions].
- **Actions Sub-Component:** Hovering row exposes a minimal icon sub-menu: `Edit (Pencil Icon)` and `Delete (Trashcan Icon)`. Clicking Delete spawns an immediate structural confirmation window before execution.

#### 3.2 Dynamic Transaction Creation Form (/transactions/add, /transactions/:id)
- **Inputs:** Numeric Amount selector (formatted dynamically with two decimal places), Transaction Type Toggle Button Switch (`INCOME` [Green] vs `EXPENSE` [Red]), Date Field, Category Selector, and a File Attachment Drag-and-Drop Dropzone for scanning invoice papers/receipts.

---

### 📅 MODULE 4: STANDING ORDERS & AUTO-PAYMENTS (/auto-payments)

#### 4.1 Standing Orders Roster Grid (/auto-payments, /auto-payments/add, /auto-payments/:id)
- **Mandate Profile Cards:** Displays active recurring billing details (e.g., Netflix subscription, Office Rent, Cloud Infrastructure Fees).
- **Interactive State Switches:** Each card embeds a live status toggle widget:
  - Switching state to `ACTIVE`: Changes badge immediately to Emerald Green.
  - Switching state to `PAUSED`: Fades card opacity to 60%, switches layout highlights to Slate Gray, and kills automated backend processor tracking logs.
- **Form Structure:** Inputs specify precise Execution Day of the Month (1-31), Target Value amount, and tracking descriptions.

---

### 📈 MODULE 5: ANALYTICS, BI & EXPORT SUITE (/reports)

#### 5.1 Business Intelligence Visualization Canvas
- **Macro Trend Component:** Interactive Area Chart mapping continuous monthly Income vs Expense metrics overlayed across time coordinates.
- **Micro Category Breakdown Asset:** Interactive Pie/Donut Chart visualizing relative allocation of spending across categories (Grooming, Supplies, Logistics, Operating Costs). Hovering over slices dynamically isolates explicit percentage indexes.
- **Export Control Panel (/reports/export):** Standalone dashboard block providing operational actions:
  - `Export PDF Document` Button (`bg-slate-800 hover:bg-slate-900 text-white`).
  - `Export Excel Sheet` Button (`bg-emerald-600 hover:bg-emerald-700 text-white`).
  - _UI State Transition:_ Clicking initiates an animated loading spinner inside the button text container (`Generating Document...`), unlocking state immediately upon delivery generation completion.

---

### 🧠 MODULE 6: FINANCIAL AI FORECAST ENGINE (/ai-forecast)

#### 6.1 Predictive Intelligence Workspace
- **Predictive Analytics Card:** Displays target values analyzing next month's comprehensive expenditure footprint based on past chronological patterns. Includes a predictive "Confidence Rating Score" metric bar.
- **Automated Anomaly Detection Stream:** Warning cards isolating irregular spikes or shifts across individual metrics. _Example Output:_ `[WARNING] AI detected a 24% upward spike in Software Subscription allocations compared to your 3-month run-rate.`
- **Algorithmic Cost-Cutting Advice Board:** Markdown generation array delivering explicit instructions for cash reservation expansion. (e.g., _"Consolidate duplicate automatic payment pipelines to free up $45 monthly"_).

---

### ⚙️ MODULE 7: PROFILE, PREFERENCES & USER MANAGEMENT (/profile, /settings)

#### 7.1 User Account Center
- **Profile Configuration Space (/profile):** Interactive upload dropzone processing User Profile Avatars, alongside text validation blocks mapping Name, Corporate Email address, and phone numbers.
- **Security & Authorization Access Controls (/settings):** Secure sub-panel managing Password Reset updates.
- **Multi-Tenant Team Management Console ("Kullanıcılar" Sub-Module):** Visible exclusively to accounts flagged with the `OWNER` metadata role attribute tag.
  - Features a secure dashboard tracking organizational team members.
  - Allows assigning explicit authorization access values (`ADMIN` [Full Write/Edit], `VIEWER` [Read-Only metrics data access restriction]). Viewer accounts will see form controls, inputs, and delete triggers styled as disabled or hidden.

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the structural directory architectures, routing configurations, component configurations, layout models, state handling pipelines, and Tailwind CSS layouts using the technical criteria detailed above. Ensure all modules match their specified color tokens, interactive states, and permission access layers. Run step-by-step to output a complete engineering specification sheet.

---

# 3. GOOGLE ŞİFRE YÖNETİCİSİ BENZERİ MOBİL UYGULAMA ÖZELLİKLERİ

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Mobile UI/UX Architect and Lead Frontend Engineer specializing in highly secure, mobile-first progressive web applications (PWAs) and password management utilities. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, complete components, local storage state layers, and exact styling specifications for a "Google Password Manager Clone (Mobile-First & Offline-Ready)".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to Google Material Design 3 guidelines optimized for mobile devices, supporting native system theme switching:

| Component / State | Light Theme Colors (HEX) | Dark Theme Colors (HEX) | Description / Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Blue** | `#1A73E8` | `#8AB4F8` | Primary brand blue accent. |
| **Background** | `#F8F9FA` | `#202124` | Main workspace background canvas. |
| **Surface Card** | `#FFFFFF` | `#2D2E30` | Interactive card and dialog surfaces. |
| **Text Primary** | `#202124` | `#E8EAED` | High-contrast main content text. |
| **Text Secondary** | `#5F6368` | `#9AA0A6` | Medium-contrast structural text labels. |
| **Success Green** | `#1E8E3E` | `#81C995` | Used for strong passwords and validated actions. |
| **Warning Orange** | `#F9AB00` | `#FDD663` | Alerts, reused passwords, and warning badges. |
| **Danger Red** | `#D93025` | `#F28B82` | Critical alerts, weak passwords, and deletion prompts. |

- **Layout Constraint:** Hard-coded container constraint simulating native iOS/Android screens (`max-w-md mx-auto min-h-screen shadow-2xl relative bg-background font-sans`).
- **Interactive States:** Micro-interactions on touch/tap. Long-press simulation triggers, haptic-feedback style animations, and absolute scannability.

---

## 📂 SECTION 1: SYSTEM ARCHITECTURE & LOCAL STORAGE DATA MODEL

The application runs entirely single-user and 100% offline. Data persistence relies purely on the browser's `LocalStorage` or `IndexedDB`.

### Data Objects & Schemas:

1. **Password Item Object:**
   - `id`: UUID String.
   - `siteName`: String (e.g., "Google", "Netflix").
   - `siteUrl`: String (Optional web link).
   - `username`: String / Email.
   - `encryptedPassword`: Plain string (Simulating encryption block).
   - `category`: String enum (`Social`, `Finance`, `Work`, `Personal`).
   - `isFavorite`: Boolean.
   - `securityScore`: Number (0 to 100, calculated via length & character variety balance).
   - `lastUsedTimestamp`: IsoDateString.
   - `createdAt`: IsoDateString.
   - `passwordHistory`: Array of Strings (Stores up to 5 previous passwords for rollback).

---

## 💻 SECTION 2: INTERACTIVE MOBILE FRONTEND COMPONENTS & SCREENS

Implement the platform systematically, providing complete mobile UI layouts, touch-friendly buttons, responsive views, and reactive storage pipelines.

### 🗺️ MODULE 1: MAIN VIEWS & NAVIGATION ARCHITECTURE

#### 1.1 Mobile Bottom Navigation Bar (Mobil Alt Menü)
- **UI Element:** Fixed, high-index sticky bottom bar (`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-surface border-t z-50 h-16 flex justify-around items-center`).
- **Tabs to Render:**
  1. **Passwords (Key Icon):** Maps to main ledger stream.
  2. **Security Fixes (Shield Icon):** Maps to overall security scoring portal.
  3. **Settings (Gear Icon):** Maps to Data Import/Export and clear configurations.
- **Active State Indicator:** Material-3 styled capsule pill active states around icons using `#1A73E8` (Light) or `#8AB4F8` (Dark).

#### 1.2 Interactive Home Screen Dashboard (Ana Ekran)
- **Top Utility Control Bar:** Includes an instantaneous Google-styled Search Input Field with a leading glass icon and a trailing close clear action button. Filters passwords by `siteName` or `username` as the user types.
- **Global Security Score Banner:** Semi-radial progress wheel displaying aggregate security health metrics calculated over all stored records. Appends a textual condition badge: `Weak` (Red), `Fair` (Orange), or `Excellent` (Green).
- **Recent & Frequently Used Carousel Rows:** Horizontal smooth scrolling cards displaying the 4 most recently generated or accessed records for rapid extraction.
- **Card-Based Main Ledger Stream:** Dynamic lists grouped alphabetically or by Categories (`Social`, `Finance`, etc.).
  - _Card Component UI:_ Rounded edges (`rounded-2xl`), background `bg-surface`, displaying site initials inside a circular monogram emblem badge, matching account title names, a visual string of masked dots (`••••••••`), a single-tap `Copy Password` utility button icon, and a `Star/Favorite` interactive toggle icon.

---

### 🛡️ MODULE 2: PASSWORD MANAGEMENT SUITE & OPERATIONS

#### 2.1 Dynamic Password Form Panel (Add / Edit Screen)
- **UI Layout:** Sliding full-height modal panel entering from the bottom of the screen viewport.
- **Input Field Blocks:**
  - **Site Name input field:** Auto-focus triggered.
  - **Username / Email input field:** Appends a quick-copy clipboard button handler.
  - **Password Input field with Eye Overlay:** Right-aligned icon toggles state value visibility seamlessly (`text` type vs `password` type masks).
- **Integrated Smart Password Generator Sub-Component:**
  - Inline slider adjustments adjusting length variables dynamically (Range: 8 to 32 characters).
  - Toggle options selecting uppercase, numbers, and custom special punctuation modifiers.
  - Live password generator box outputting random strings along with a dedicated refresh icon button.
- **Action Control Tray:**
  - `Cancel` Button (`text-muted hover:bg-muted-light`).
  - `Save/Update` Button (`bg-primary text-white font-medium px-6 py-2 rounded-full`). Clicking writes states directly to `LocalStorage` and automatically runs view recalculation schemas without refreshing layout layers.

#### 2.2 Detailed Entry Inspector View
- **Chronological History Drawer:** Expanding submenu displaying old passwords previously stored under this specific account mapping timestamp logs.
- **Destructive Danger Action Block:** Contains the `Delete Record (Trashcan)` action prompt. Triggers a native-simulated modal block demanding user confirmation: _"Are you sure you want to permanently delete this credential?"_ Clicking confirm purges local memory registers immediately.

---

### 📊 MODULE 3: SECURITY ANALYSIS ENGINE (GÜVENLİK PUANI)

#### 3.1 Security Score Diagnostic Center
- Focuses purely on analytical sorting streams over current repository items.
- **Data Categories Generated:**
  - **Compromised/Weak Records List:** Displays credentials carrying low character count limits under a bright Crimson alert marker framework.
  - **Re-used/Duplicate Records List:** Identifies separate objects that utilize identical password values, appending a warning recommendation flag.

---

### ⚙️ MODULE 4: SETTINGS, PRIVACY & ECOSYSTEM MIGRATION (/settings)

#### 4.1 Data Portability Framework (Veri Yönetimi)
- **Data Export Pipeline:** Clickable item trigger component labeled "Export Password Library".
  - _Functionality:_ Compiles full local storage contents into a standardized, clear formatting structure `passwords_export.json` file block and automatically prompts a local browser web download sequence.
- **Data Import Pipeline:** Drag-and-drop file uploader button zone accepting valid structured JSON schemas.
  - _Functionality:_ Parses user uploaded JSON payloads, verifies properties conform properly, merges incoming data arrays with current local memory pools securely, and triggers a dynamic success status confirmation modal.

#### 4.2 Theme Customizer Engine & Global Resets
- **System Theme Switcher Toggle Switch:** Dual selection switch moving values natively from Light Mode setups to Dark Mode states instantly by mutating a custom class assignment directly onto the document root DOM node element (`document.documentElement.classList`).
- **Factory Purge Reset Option:** Highlighted in explicit danger red tones. Fully flushes and clears out local web browser database storage scopes cleanly upon validating intentional multi-click warning checkpoints.

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the modular directory architecture tree layout, fully reactive view routing definitions, HTML structures utilizing Tailwind CSS framework utility styling definitions, state management structures processing offline `LocalStorage` persistence models, dynamic visibility mask layers, and complete components satisfying the custom requirements detailed above. Ensure all states translate perfectly into fluid mobile behaviors. Compile your outputs sequentially step-by-step.

---

# 4. NFT DİGİTAL SANAT PAZARYERİ PROJE

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Full-Stack Cloud Engineer, Web3 UI/UX Architect, and Redux State Master specializing in modern digital asset marketplaces and NFT ecosystems. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, complete frontend components, global state slice designs, and exact styling specifications for an "NFT Digital Art Marketplace Platform".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to a futuristic, high-end creative studio aesthetic built on Vite + React and Tailwind CSS:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | Electric Neon Purple | `#8B5CF6` | `violet-500` | Represents digital rarity and tokenization. |
| **Accent / Secondary** | Cyberpunk Cyan | `#06B6D4` | `cyan-500` | Used for active price indicators, bidding triggers, and verified badges. |
| **Success / Minting** | Neon Emerald | `#10B981` | `emerald-500` | Used for purchases, successfully minted tokens, and balance increases. |
| **System Neutral / Structure** | Dark Mode Default Palette | `#0F172A` / `#1E293B` / `#F8FAFC` | - | `#0F172A` for dark canvas backgrounds, `#1E293B` for product card surfaces, `#F8FAFC` for high-contrast typography. |

- **Typography:** Plus Jakarta Sans or Sora. Numbers and prices must utilize a high-readability monospace font variant (`font-mono`).

---

## 📂 SECTION 1: GLOBAL REDUX TOOLKIT STATE ARCHITECTURE

Define the structural core slices. Every module must connect asynchronously to these centralized reactive memory structures:

1. **authSlice:**
   - `user`: `{ id, name, email, role: 'ARTIST' | 'BUYER', avatarUrl }`
   - `wallet`: `{ simulatedAddress: string, balance: number (in ETH/USD) }`
   - `isAuthenticated`: Boolean
2. **nftSlice:**
   - `items`: Array of NFT Objects `[id, title, description, imageUrl, price, category, creatorId, currentOwnerId, isListed]`
   - `filters`: `{ activeCategory: string, minPrice: number, maxPrice: number, searchQuery: string }`
3. **cartSlice:**
   - `cartItems`: Array of targeted NFT references.
   - `cartTotal`: Derived automated pricing summary computation.

---

## 💻 SECTION 2: INTERACTIVE FRONTEND COMPONENTS & ARCHITECTURE PAGES

Implement the platform systematically, providing complete component UI specifications, mock validation workflows, and visual states.

### 🛍️ MODULE 1: LANDING & INFORMATIONAL PLATFORM FRAMEWORKS

#### 1.1 Responsive Navigation Grid & Footer
- **Global Header:** Dynamic context-aware top navigation bar (`sticky top-0 bg-slate-900/80 backdrop-blur-md`). Displays search inputs, a Category routing dropdown, and explicit dynamic variations based on authentication:
  - _Unauthenticated State:_ Displays "Connect Wallet / Login" button (`bg-gradient-to-r from-violet-500 to-cyan-500 text-white`).
  - _Authenticated State:_ Displays the user's active simulated Crypto Balance (`0.00 ETH`), a "Create NFT" quick trigger for Artists, and a clickable user profile avatar node routing to the Dashboard.

#### 1.2 Immersive Home Screen Layout (Anasayfa)
- **High-Impact Hero Arena:** Left column features premium bold typography promoting decentralized digital ownership; right column renders a 3D-styled floating preview card showcasing the "NFT of the Day" with active countdown timers.
- **Curated Live Metrics Feeds:** Includes horizontal grid arrays isolating:
  - **Trending Artists:** Dynamic profiles showing verification checkmarks (`#06B6D4`).
  - **Latest Drops:** Chronological stream of recently minted assets.

#### 1.3 Institutional Canvas Frameworks (Hakkımızda & İletişim)
- **About Page (/about-us):** Clean multi-column layout plotting platform values, creator royal commission breakdowns, and ecosystem vision summaries.
- **Contact Portal (/contact):** A fully managed secure contact input form mapping Name, Email, and Message text areas. Clicking `Send Message` triggers a success notification state block.

---

### 🔍 MODULE 2: MARKETPLACE DISCOVERY & TOKEN EXPANSION (/explore, /categories)

#### 2.1 Multi-Tier Search & Filter Workspace (/explore)
- **Interactive Control Sidebar:** Real-time Category Checkboxes (Digital Art, 3D Models, Photography, Audio Assets), explicit Min/Max Price numeric input fields, and an alphabetical sorting selector dropdown.
- **Responsive Inventory Product Matrix:** A robust grid mapping responsive viewport sizes.
  - **NFT Collection Card UI:** Surface colored in `#1E293B`, featuring absolute aspect-ratio image framing containers, creator attributes with verified icons, token tags, a clear price display (`font-mono text-cyan-500`), and a contextual action button (`Add to Cart` or `View Details`).

#### 2.2 Deep NFT Asset Inspector View (/nft/:id)
- **Detailed Layout Layout:** Left viewport captures the full high-resolution digital image file under a custom light-box component layout wrapper; right viewport displays metadata: Title, Token Mint ID hashes, Creator Profile link, Description text block, and a primary **"Buy Token Now / Complete Transaction"** button.

---

### ⚙️ MODULE 3: AUTHENTICATION & PERSONAL MISSION CONTROL (/login, /dashboard)

#### 3.1 Role-Based Access Gateways (/login, /register)
- Separate operational parameters supporting dual options: **Artist** (Permission settings unlocked for full asset minting and editing operations) and **Buyer** (Permission maps locked strictly to asset collection acquisition workflows).

#### 3.2 Comprehensive User Dashboard Component (/dashboard)
- **Digital Crypto Wallet Hub:** Renders a stylized crypto-wallet widget displaying random generated hexadecimal blockchain addresses alongside simulated funds. Includes an "Add Mock Funds" interactive feature loop button.
- **Asymmetric Operational Transaction Logs Table:**
  - **Owned Collection Gallery:** High-grid array showcasing items currently owned by the authenticated profile. If owned by the active user, display a "Re-list or Update Price" control toggle.
  - **History Logs Sheet:** Tabular list charting all historical buy/sell iterations completed inside this instance session.

---

### 🛠️ MODULE 4: THE CREATOR STUDIO - LIFECYCLE CRUD CONTROLS

#### 4.1 Asset Minting Form Sheet (/nft/create)
- Restricted exclusively to authenticated profiles carrying the `ARTIST` designation role attribute.
- **Inputs:** Token Title string, Description block, Category Selector, Price Input Field, and a direct Asset Image URL address path interface.
- **Commit Logic:** Clicking `Mint NFT Token` dispatches a Redux store transaction appending the newly compiled object onto the primary array ledger with `creatorId` mapped to the current active user.

#### 4.2 Asset Revision & Deletion Management (/nft/edit/:id, Delete Trigger)
- The interface evaluates authorization scopes locally: Only the absolute specific listed owner or original creator can change parameters.
- **Update Form:** Allows modifying pricing variables or descriptive strings instantly via localized update parameters.
- **Delisting Utility (Delete):** A destructive control option executing complete database deletion metrics, removing the item from open market listings immediately upon explicit modal user validation.

---

### 🛒 MODULE 5: CART PIPELINE & SIMULATED SETTLEMENT VIA WALLET (/checkout)

#### 5.1 Smart Transaction Processing Engine
- **Review Ledger:** Summarizes item specifications queued inside the checkout workflow along with dynamic total calculation aggregations.
- **Simulated Payment Settlement Verification Grid:**
  - Displays a dummy credit card input structure alongside a digital signature validator simulation panel.
  - **Validation Processing Rules:** Clicking the final `Execute Complete Settlement` button launches an animated processing loading overlay state. The system compares the total transaction value against the current user's Redux state wallet balance:
    - _Insufficient Balance:_ Aborts operation cleanly, projecting a high-contrast danger red floating warning banner alert.
    - _Successful Verification:_ Deducts values natively from the account's wallet slice, rewrites target asset ownership property pointers (`currentOwnerId`), updates transaction history lists, and routes users directly onto their updated dashboard collection layouts.

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the modular project file structure trees, absolute application routing pathways, modular React functional components wrapped tightly inside Tailwind CSS layout definitions, complete Redux Toolkit architecture configurations, state validation logic, and responsive UI layouts based on the technical specifications detailed above. Ensure perfect visual symmetry across all user states. Proceed step-by-step.

---

# 5. GÖNÜLLÜLÜK AĞI VE SOSYAL SORUMLULUK PLATFORMU

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Full-Stack Software Architect, Lead Fintech UI/UX Engineer, and Advanced State Management Specialist specializing in crowdfunding, donation mechanics, and complex corporate administration dashboards. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, structural frontend components, reactive state slice layouts, and explicit styling specifications for a "Decentralized Social Responsibility & Volunteer Donation Platform".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to a clean, trustworthy, and modern corporate non-profit design language built on Vite + React and Tailwind CSS:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | Trust Emerald Green | `#059669` | `emerald-600` | Represents growth, life, environmental restoration, and giving. |
| **Accent / Secondary** | Deep Navy Blue | `#1E3A8A` | `blue-900` | Used for corporate structure, administration layouts, headers, and professional typography. |
| **Warning / Pending** | Amber Gold | `#D97706` | `amber-600` | Used for active progress indicators and approaching deadlines. |
| **Danger / Alert** | Crimson Red | `#DC2626` | `red-600` | Used for structural reset actions, depleted balance warnings, and expired timelines. |
| **Neutral / Canvas Base** | Slate / Zinc Palette | `#F8FAFC` / `#0F172A` / `#FFFFFF` | - | `#F8FAFC` for client backgrounds, `#0F172A` for administration sheets, `#FFFFFF` for dynamic interaction cards. |

- **Typography:** Inter, Plus Jakarta Sans, or Hubot Sans. All numerical balances, targets, and percentage fields MUST employ a high-visibility monospace text formatting style (`font-mono`).

---

## 📂 SECTION 1: DUAL-ROLE CENTRALIZED STATE ARCHITECTURE (REDUX/CONTEXT STRUCTURE)

Establish the reactive state engine configuration. Financial calculations and status updates must execute instantly across all user nodes simultaneously.

### Global Store Schema:

1. **authSlice:**
   - `user`: `{ id, name, email, role: 'VOLUNTEER' | 'ADMIN', avatarUrl }`
   - `wallet`: `{ availableBalance: number (in TL) }`
   - `isAuthenticated`: Boolean
2. **campaignSlice:**
   - `projects`: Array of Campaign Objects `[id, title, description, targetBudget, currentCollected, remainingDays, category, status: 'ACTIVE' | 'COMPLETED' | 'EXPIRED']`
   - `filters`: `{ activeCategory: string, sortCriteria: string, query: string }`
3. **donationHistorySlice:**
   - `logs`: Array of Transaction Objects `[id, userId, campaignId, campaignTitle, amount, timestamp, paymentMethod]`

---

## 💻 SECTION 2: FRONTEND COMPONENT BLUEPRINTS & DETAILED ROUTING SCHEMAS

### 🤝 MODULE 1: INTERACTIVE VOLUNTEER PANEL (KULLANICI PANELİ)

#### 1.1 Context-Aware Global Navigation Frame (Navbar)
- **UI Architecture:** High-index fixed header component layout (`sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50`).
- **Dynamic Elements Matrix:**
  - Displays: [Home, Campaigns, About Us, Contact, My Profile].
  - _Conditional Visibility Hook:_ If `auth.user.role === 'ADMIN'`, automatically expose a highly distinctive secondary anchor link element: "Admin Control Console" (`text-emerald-600 font-semibold border-l pl-4 border-slate-300`).
  - _Wallet Node:_ Authenticated volunteers see a real-time floating wallet balance chip (`font-mono bg-slate-100 text-slate-800 px-3 py-1 rounded-full`).

#### 1.2 Unified Asset Discovery Hub & Progressive Campaign Views
- **Grid Layout Portfolio:** Dynamic item list cards with smooth hover state elevation modifications (`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`).
- **The Live Dynamic Progress Component:**
  - Renders a custom linear completion track. A smooth filling element (`bg-emerald-600 transition-all duration-1000 ease-out`) matches calculated percentage metrics `(currentCollected / targetBudget) * 100`.
  - Percentage tags are placed on top using explicit `font-mono text-sm font-bold text-emerald-700` styling.
- **Live Countdown Countdown Widget:**
  - Displays remaining clock schedules inside a mini-clock capsule interface layout (`bg-amber-50 text-amber-800 rounded-md border border-amber-200`). Shows string indicators clearly: _"99 Days Remaining"_.

#### 1.3 Virtualized POS Settlement Terminal Page (Ödeme Sayfası)
- **Simulated Payment Gateway Grid:** A dual-purpose layout handling Wallet Top-Ups and Direct Instant Donations.
- **Card Input Emulation Component:** Renders a responsive, interactive physical credit card wireframe graphic that replicates real-time input fields as users fill out data attributes: [16-Digit Card Number, Cardholder Name, Expiry Date MM/YY, Secure CVV Code].
- **State Processing Chain (Senaryo Adımları):**
  - When a user inputs an allocation action value (e.g., Top-Up 5,000 TL), clicking `Confirm Funding` updates `auth.wallet.availableBalance` state immediately.
  - When a user triggers a Project Donation event (e.g., Submitting 5,000 TL onto a Campaign carrying 345,000 TL collected):
    1. Instantly drops volunteer's internal `wallet.availableBalance` to 0 TL.
    2. Modifies target `campaign.currentCollected` property incrementally to 350,000 TL.
    3. Triggers dynamic calculation updates across progress element markers, updating indicators seamlessly from 34.5% to 35.0%.
    4. Automatically generates a transaction logging element and pushes it into the historical data array.

#### 1.4 Personal Activity Tracker Logs Portal
- Includes search-input matrices separating categories, amounts, and dates. Displays a spreadsheet table documenting all historical allocations completed by the user profile.

---

### 💼 MODULE 2: COMPREHENSIVE ADMINISTRATION COMMAND CENTRE (YÖNETİCİ PANELİ)

#### 2.1 Corporate Management Console Panel (/admin)
- **Layout Architecture:** Dedicated sidebar layout structure wrapped inside slate tones (`bg-slate-900 text-white min-h-screen`). Provides clear controls completely separated from regular volunteer layouts.
- **Metric Stream Analytics Strips:** 3-Column structural overview blocks rendering:
  1. _Total Aggregated Operational Intake (TL)_.
  2. _Global Fulfillment Progression Ratios (Average % metrics)_.
  3. _Active Campaign Projects Count_.

#### 2.2 CRUD Campaign Minting Studio (Etkinlik ve Kampanya Yönetimi)
- **Form Component Inputs:** Dynamic text area parsing long-form descriptions, strict inputs defining numeric Budget Target parameters, Date limits configuration blocks, and category label managers.
- **Execution Workflow:** Submitting the form appends a fresh campaign structure onto the global registry arrays with default zero collections parameters, making it publicly interactive across client views immediately.
- **Status Switches:** Enables manual override management, allowing administrators to pause campaigns, expand schedules, or mark initiatives as archived.

#### 2.3 Consolidated Fund Monitoring Spreadsheet
- Renders an itemized list tracking all deployed platform initiatives. Displays explicit tabular breakdowns indicating exact financial margins and absolute completion percentages on a single comprehensive data matrix interface.

#### 2.4 Advanced BI Audit & Data Export Suite (Gelişmiş Raporlama & Excel)
- **Advanced Filtering Controls:** Multi-dropdown parameters filtering overall transaction streams by User ID, Target Project Names, specific Month blocks, and Financial Volume thresholds.
- **Data Export Integration Action Engine:**
  - Features a prominent `Export Consolidated Ledger to Excel (CSV)` utility action button (`bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center gap-2 rounded-lg px-4 py-2`).
  - _UI Loading Animation State:_ Clicking changes button layout to a processing animation state spinner indicating file conversion execution, rendering an instantaneous file document transfer sequence upon final structural preparation.

---

## 🔍 SECTION 3: SYSTEM SYSTEMATIC PROJECT WORKFLOW SCENARIO VERIFICATION

Ensure that all code generation and component logic perfectly simulate the step-by-step lifecycle below:

1. **Admin Action Initialization:** Admin establishes "Geleceğe Nefes: Ağaçlandırma Projesi" with a 1,000,000 TL target and a 100-day deadline.
2. **Volunteer Onboarding & Funding:** Volunteer logs in, visits the virtual checkout screen, and charges their account with 5,000 TL mock capital.
3. **Reactive Donation Execution:** User commits the 5,000 TL to the project page. The application calculates values instantly: User Balance changes from 5,000 TL to 0 TL, Project Total shifts from 345,000 TL to 350,000 TL, and Progress Bars animate from 34.5% up to 35%.
4. **Data Auditing & Extraction:** The donation appears instantly in the Volunteer's ledger history, while the Admin's analytics grid updates the metrics in real time and unlocks file export actions for data extraction.

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the structured file directory maps, operational layout views using React functional components integrated with custom Tailwind CSS utility styling definitions, complete state slices managing balance interactions, and dynamic dashboard layouts based on the detailed requirements above. Ensure absolute state alignment and role security layers across all modules. Proceed step-by-step.

---

# 6. AKILLI EV OTOMASYON SİSTEMİ

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Frontend Engineer and Premium IoT UI/UX Architect specializing in modern, clean smart-home applications (reminiscent of Apple Home and Google Home). Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, layout models, React state trees, component structures, and explicit styling specifications for a 100% frontend "Smart Home Automation System".

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to a minimal, high-end, rounded design language inspired by modern smart-device controllers using pure React and Tailwind CSS:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Canvas Background** | Clean Studio Gray | `#F5F5F7` | `slate-50` | Provides a premium, non-glare surface. |
| **Component Surfaces** | Solid Pure White | `#FFFFFF` | - | - |
| **Active State / On Indicator** | Sky Accent Blue / Vibrant Eco Green | `#3B82F6` / `#10B981` | `blue-500` / `emerald-500` | Used for fully operational states. |
| **Alert / Safety Status** | Safety Red | `#EF4444` | `red-500` | Used for active security notifications and armed alarms. |
| **Warning Indicator** | Warm Orange | `#F59E0B` | `amber-500` | Used for high climate ranges or unlocked security toggles. |
| **Disabled / Off State** | Soft Muted Gray | `#E5E7EB` | `slate-200` *(text: `#9CA3AF`)* | Soft muted gray with background. |

- **Typography:** Inter or SF Pro Display. Font sizing should emphasize clarity with deep hierarchy masks (`font-normal` vs `font-bold`).

---

## 📂 SECTION 1: COMPREHENSIVE REACT CLIENT-SIDE STATE TREE

Since no backend service or physical IoT hardware layer exists, the entire data architecture must operate dynamically via centralized, mock-hydrated React state schemas.

### Primary State Configuration Structure:

1. **activePage:** String tracking SPA routing (`'HOME' | 'DASHBOARD' | 'ROOMS' | 'DEVICES' | 'SECURITY' | 'ENERGY' | 'ABOUT' | 'CONTACT'`).
2. **devicesMasterList:** Array of simulated IoT interactive objects:
   - `id`: Unique string key.
   - `name`: String (e.g., "Living Room Main Light", "Master AC").
   - `type`: String Enum (`'LIGHT' | 'CLIMATE' | 'CURTAIN' | 'LOCK' | 'CAMERA' | 'PLUG' | 'TV' | 'VACUUM'`).
   - `room`: String Enum (`'SALON' | 'MUTFAK' | 'YATAK_ODASI' | 'CALISMA_ODASI' | 'BANYO' | 'GIRIS'`).
   - `isOn`: Boolean status flag.
   - `isFavorite`: Boolean priority flag.
   - `isSecurityRelated`: Boolean classification tag.
   - `attributes`: JSON Object mapping contextual features:
     - _LIGHT:_ `{ brightness: number (0-100) }`
     - _CLIMATE:_ `{ targetTemperature: number (16-30), mode: string }`
     - _VACUUM:_ `{ batteryPct: number, currentStatus: string }`
3. **securitySystemStatus:** Object `{ isArmed: boolean, alarmTriggered: boolean, logs: Array }`.
4. **energyUsageMetrics:** Mock object holding aggregated metrics mapping hourly configurations.

---

## 💻 SECTION 2: SINGLE PAGE APPLICATION (SPA) VIEWS & INTEGRATED COMPONENT LAYOUTS

Implement the application view layer systematically, providing distinct component specifications, layouts, and action event triggers.

### 🗺️ MODULE 1: GLOBAL PLATFORM NAVIGATIONAL WRAPPERS

#### 1.1 Header & Sidebar Combined Grid
- **Navbar Layout:** Fixed horizontal top-bar (`bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 px-6 flex justify-between items-center`). Displays the platform title branding alongside a localized "Active Devices / Safety Check" summary string.
- **Sidebar Component:** Responsive vertical left-hand navigation pane (`w-64 bg-white min-h-screen border-r border-slate-100 p-4 space-y-2`). Renders clickable link blocks mapping all 8 core sections.
  - _Active Route State Styling:_ Selected links are rendered in premium light blue background (`bg-blue-50 text-blue-600 font-semibold rounded-xl`).

---

### 📋 MODULE 2: RECOGNITION & OVERVIEW CHANNELS

#### 2.1 Informational Main Hub View (`HOME`)
- **Visual Presentation:** A welcoming onboarding layout featuring an abstract hero banner graphic.
- **Operational Summary Matrix Grid:** 3-Column highlight row:
  - _Card 1 (Device Footprint):_ Displays numerical strings detailing Total Registered vs Currently On items.
  - _Card 2 (Security Health Capsule):_ Renders current status: `SYSTEM ARMED` [Red text] or `SYSTEM SAFE` [Green text].
  - _Card 3 (Energy Consumption):_ Displays a static summary baseline value (e.g., "2.4 kWh Active Draw").
- **Quick-Access Action Grid:** Contains target shortcut widgets deep-linking users directly to active pages.

#### 2.2 Command Intelligence Workspace (`DASHBOARD`)
- **Metric Indicator Strip:** Modern rounded squares presenting home vitals: `Average House Temp: 24°C`, `Active Alarms: 0`, `Plugged Loads: 4`.
- **Dynamic Favorite Devices Stream:** A dynamic row filtering the `devicesMasterList` to show only items with `isFavorite: true`. Allows immediate toggle execution directly inside the layout.
- **Recent Activities Logging Drawer:** Lists the last 4 user interactions executed during the active runtime instance.

---

### ⚙️ MODULE 3: CONTROL & FILTERING ENGINES

#### 3.1 Room-Centric Allocation Workspace (`ROOMS`)
- **Top Row Room Navigation Selector:** Horizontal tab buttons row parsing rooms (`Salon, Mutfak, Yatak Odası, Çalışma Odası, Banyo, Giriş`).
  - _Active Selection State:_ Applies a solid deep indigo or blue pill shape with white high-contrast text tags.
- **Contextual Device Grid Matrix:** Clicking a specific room filters the master array dynamically and prints an exclusive list of device cards assigned to that specific perimeter location. If no items exist, render: *"No smart devices assigned to this room yet."*

#### 3.2 Master Hardware Management Spreadsheet (`DEVICES`)
- **Filter Navigation Subheader:** Grid-aligned filter chips segmenting the UI list into: `All Devices`, `Active Only`, `Passive Only`, `Favorites`, or `Security Modules`.
- **Standardized Modular Device Card Component (`DeviceCard`):**
  - Rounded container frame layout (`bg-white rounded-3xl p-5 border border-slate-100 shadow-sm transition-shadow hover:shadow-md`).
  - Top quadrant maps device name, room sub-tag, and type icon.
  - **Contextual Parameter Controllers (Conditional Rendering based on type):**
    - _If LIGHT & isOn:_ Displays a linear drag slider input adjusting `attributes.brightness` values dynamically (0% to 100%).
    - _If CLIMATE & isOn:_ Displays numerical values flanked by concrete `+` and `-` control action click triggers adjusting temperature steps (16°C to 30°C).
    - _If CURTAIN:_ Renders two explicitly separated state utility buttons: `Open` and `Close`.
  - **Master Toggle Switch:** A clean right-aligned pill-shaped custom toggle button. If `isOn` is true, render in `#10B981` (Green); if false, render in `#E5E7EB` (Gray).

---

### 🛡️ MODULE 4: SAFETY SYSTEMS & ENERGETIC BI ANALYSIS

#### 4.1 Threat Monitoring & Lockdown Control Panel (`SECURITY`)
- **Global Alarm Trigger System:** Prominent full-width hero module enabling system state mutations.
  - _Button Action:_ Large central button toggle swapping states between `ARM SECURITY` (`bg-slate-900 text-white`) and `DISARM ALARM` (`bg-red-500 pulsing-animation text-white`).
- **Interactive Security Ledger Feed:** Lists exclusively security-related components (`Smart Door Lock`, `CCTV Camera`, `Motion Sensor`).
  - _Lock Component Interactivity:_ Features an explicit secure toggle button controlling lock states: `LOCKED` (Green secure state text) vs `UNLOCKED` (Orange hazard notification styling text).

#### 4.2 Utility Energy Analytics Dashboard (`ENERGY USAGE`)
- **Consumption Consumption Metrics Board:** Displays clear structural layout cards isolating mock power expenditure vectors categorized by day, week, and month indexes.
- **Top Consumption Consumers Table List:** Renders an itemized list sorting specific device groups by power consumption levels (e.g., Central AC - 1200W, Electric Boiler - 2000W).
- **Algorithmic Sustainability Advice Column:** Interactive info cards highlighting home optimization routines: *"Your Master AC has been running continuously above 26°C. Consider configuring an automated eco-timer to reduce baseline usage by 12%."*

---

### 👥 MODULE 5: CORPORATE PROFILE & DATA CAPTURE PANELS

#### 5.1 Institutional Narrative (`ABOUT US`)
- Premium typography layout detailing project goals, benefits of home automation ecosystems, developer profile attributes, and system mission/vision frameworks.

#### 5.2 Managed Contact Form Node (`CONTACT`)
- **Form Component Inputs:** Standard text field controls parsing User Full Name, Target Email Address, Subject Line Header, and Message Text Area boxes.
- **Submission Process State Handling:** Captures input values cleanly inside a local React `useState` component model. Clicking `Send Message` prevents browser default reload behaviors, resets state field vectors cleanly to empty strings, and displays a successful layout banner alert: *"Thank you! Your message has been transmitted successfully."*

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the fully modular project directory trees, comprehensive application navigation routing logic, HTML component layouts styled completely with Tailwind CSS utilities, explicit event handling models processing internal state array changes, and clean component architecture layouts matching the criteria detailed above. Ensure complete client-side simulation accuracy without any backend logic dependencies. Proceed step-by-step.

---

# 7. YAPAY ZEKA DESTEKLİ KİŞİSEL ASİSTAN

## 🧑‍💻 ROLE & CONTEXT

> [!NOTE]
> You are an expert Senior Full-Stack Cloud Architect, Lead AI UI/UX Architect, and Advanced State Management Specialist specializing in modern cloud infrastructure management SaaS products, virtualization control panels, and context-injected LLM interfaces. Your task is to generate a comprehensive, pixel-perfect, and fully functional software architecture, complete frontend view structures, centralized mock-state management slices, and exact styling specifications for a unified application named CloudHost AI.

---

## 🎨 GLOBAL DESIGN SYSTEM & STYLING SPECIFICATIONS

Adhere strictly to a premium, high-tech enterprise cloud developer infrastructure aesthetic built on Vite with React or Vue 3 and Tailwind CSS:

| Token / State | Color Name | HEX Code | Tailwind Class | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Primary / Brand** | Cyber Cloud Blue | `#2563EB` | - | Represents network stability, high availability, and performance. |
| **AI Integration** | Neon Violet | `#8B5CF6` | - | Used exclusively for active AI prompts, chat components, response highlights, and intelligence modules. |
| **Success / Active** | Hyper Green | `#10B981` | - | Used for active server nodes, paid invoices, and successful operations. |
| **Danger / Destructive** | Crimson Red | `#EF4444` | - | Used for stopped cloud infrastructure, data purges, and server termination switches. |
| **System Neutral Canvas** | Deep Tech Dark Theme Default | `#0B0F19` / `#1E293B` / `#F8FAFC` | - | `#0B0F19` for canvas background, `#1E293B` for service cards, `#F8FAFC` for typography. |

- **Typography:** JetBrains Mono or Inter font families. Hardware server metrics (CPU cores, RAM gigabytes, disk configurations) and pricing tiers MUST utilize a clear monospace font syntax alignment.

---

## 📂 SECTION 1: CORE DATA KNOWLEDGE BASE & SYSTEM STATE MODEL

The platform's intelligent automation layers run entirely on an explicit corporate knowledge vector map structure injected directly into OpenAI API system prompts.

### Embedded Knowledge Base Conceptual Schema

- **Company Identity:** CloudHost AI, operating with 24/7/365 Non-stop Engineering Tier Support.
- **Infrastructure Services Catalog:**
  - **VPS Basic:** 2 Cores CPU, 4 GB RAM, 80 GB SSD Storage, Priced at $5 monthly. Best for small personal projects, landing pages, and lightweight node backend instances.
  - **VPS Pro:** 4 Cores CPU, 8 GB RAM, 160 GB SSD Storage, Priced at $10 monthly. Best for medium scale e-commerce sites, Next.js deployment builds, and database storage staging.
  - **Cloud Enterprise:** 8 Cores CPU, 16 GB RAM, 320 GB NVMe Storage, Priced at $25 monthly. Best for high-traffic applications, enterprise scaling, and heavy database loads.
  - **Web Hosting Starter:** 1 Core Shared CPU, 1 GB RAM, 20 GB SSD Storage, Priced at $2 monthly. Best for basic WordPress sites and static HTML portfolios.
- **Corporate Policies & Operations:**
  - **Refund Window:** 14-Day explicit money-back guarantee without any complex validation criteria.
  - **Datacenter Coordinates:** Frankfurt (DE), Amsterdam (NL), Istanbul (TR), New York (US).
  - **Pre-mapped Operational FAQ:** Covers steps regarding quick server reboot processing via user dashboard inputs and refund activation mechanisms.

### Centralized Frontend State Tree

- **activePage:** String tracking single-page routing state configurations covering Home, Services, Detail, Chat, Login, Register, Dashboard, My Services, Tickets, and FAQ.
- **userSession:** Dynamic object managing user authentication flags, user details, and bought active services.
- **ticketRegistry:** Array of structural user inquiry tokens and diagnostic data blocks.

---

## 💻 SECTION 2: FRONTEND VIEW COMPONENT ARCHITECTURE & LAYOUTS

Implement the application views step-by-step, providing detailed responsive interface structures and dynamic trigger conditions.

### 🌐 MODULE 1: PUBLIC DISCOVERY PATHWAYS

#### 1.1 High-Tech Landing Hub (Ana Sayfa)
- **Hero Area:** Two-column split interface. Left panel displays bold developer-centric copy explaining AI-driven cloud automation; right panel houses a mini embedded Interactive Chat Box Widget titled Ask Assistant Which Package You Need.
- **Interactive Component Feature Loop:** Input field intercepts raw user queries like: Hangi paketi almalıyım? The simulated response logic reads the company information vector map, targets matching service tags, and outputs responsive package cards directly inline inside the chat window.
- **Service Blueprint Cards Showcase:** Displays rapid entry highlights for VPS, Cloud Server, and Web Hosting products with key system metrics.
- **Integrated FAQ Segment Accordion Component:** Clickable toggles displaying standard user queries with smooth accordion drop animations.

#### 1.2 Modular Infrastructure Catalog Grid (Hizmetler Sayfası)
- **Package Matrix Grid Component:** Displays all active lines structured under explicit tabs separating VPS, Cloud Server, and Web Hosting options.
- **Hardware Profile Grid Layout:** Every individual card lists resource specifications structured in high-contrast styling fields:
  - Top badge: CPU Core Capacity formatted in neon violet text.
  - Row items: RAM allocation metrics, storage volumes, and pricing tags.
- **AI Recommendation Injection Search Bar:** Prominent floating subheader input: Describe your deployment framework to find the perfect infrastructure tier.
  - **Context Logic:** Typing a request like React uygulamam için hangisi uygun? evaluates parameters, adds an animated neon violet border shine effect to the card element matching VPS Pro or Cloud Enterprise, and appends an explicit AI validation string: Recommended for React SSR deployment owing to 4 Cores and 8GB RAM threshold mapping rules.

#### 1.3 Deep Tier Inventory Inspector Portal (Paket Detay Sayfası)
- **Granular Spec Sheet Canvas:** Left partition maps advanced deep technical configuration data lists; right side holds a dynamic purchasing action column showing full monthly cost tallies such as 5 dollars per month for VPS Basic.
- **Inline Suitability AI Assessor Box:** Embedded chat bubble widget processing target usability queries such as: Bu paket küçük bir e-ticaret sitesi için yeterli mi?
  - **AI Generation Rule Engine:** Injects matching resource criteria into responses, concluding that for an active e-commerce platform, a larger asset like the VPS Pro structure is highly advised instead of the basic configuration.

---

### 🔐 MODULE 2: SECURE USER GATEWAYS & MISSION CONTROL PANELS

#### 2.1 Asymmetric Authentication Frameworks (Giriş Yap & Kayıt Ol)
- Minimalist, dark-themed developer account onboarding panels parsing user parameters including Name, Email address, and Password verification steps.

#### 2.2 Client Infrastructure Overview Command Center (Dashboard)
- **Metric Analytics Strip Layout:** 3-Column functional matrix displaying active server statistics including Total Active Infrastructure Modules Running, Aggregated Monthly Invoicing Metrics, and Pending Support Ticket Pipelines Open.
- **Quick-Access Navigation Grid:** Direct shortcut control paths routing cleanly to specific server actions, automated ticket creators, and live diagnostics interfaces.

#### 2.3 Interactive Compute Resource Fleet Ledger (Servislerim Sayfası)
- **Instance Rows Table Layout:** Spreadsheet tracking active server profiles held by the account user. Displays columns for Service Name, Running Status Badge, IP Address, and Actions Menu.
- **Mock Operational Control State Machine Switches:**
  - **Reboot / Yeniden Başlat Action Trigger:** Clicking sets the target row status badge state instantly to a flashing amber color phase showing REBOOTING, locking interactive controls for exactly 3 seconds before resetting cleanly back to a green active phase.
  - **Stop / Durdur Action Trigger:** Clicking mutates status badge configurations into a flat slate gray stopped phase, shifting action link text layers instantly to read Start or Başlat.
- **Integrated Live System Help Terminal Widget:** Dropdown panel processing direct commands like: Sunucumu nasıl yeniden başlatırım? AI responds inline by mapping exact steps detailing how to click the interactive reboot controls on the current page layout.

---

### 🤖 MODULE 3: INTELLIGENT TELEMETRY & SUPPORT CENTER

#### 3.1 AI Chat Assistant Dedicated Workspace (AI Destek Sayfası)
- **Full View Split Layout Workspace:** Left pane presents sticky pre-configured quick question action bubbles focusing on standard questions like İade politikanız nedir?, Hangi VPS paketini almalıyım?, and Destek saatleri nedir?; right pane handles the scrolling conversational dialogue interface layout.
- **Visual Chat Drawer Component:** Custom scrollbars, automated screen focus tracking models, and typed message generation loops styled inside clean slate and violet speech bubble structures.

#### 3.2 Proactive Ticket Interception Gateway (Destek Merkezi)
- **Ticket Interception Workflow Form:** Before unlocking the raw markdown text ticket submission pipeline form, users must input their query inside a preliminary text parser input block labeled: Sorununuzu kısaca yazın.
- **AI Triage Deflection Mechanism:** Submitting the message intercept layer checks keywords against the backend company metadata repository before a real ticket is registered.
  - **Context Logic:** If the user writes a problem that matches recorded documentation, the interface intercepts the ticket generation request, halts database creation, and projects an AI support summary card bubble outputting an automated matching solution first.
  - Provides a bypass path enabling users to override warnings and force open a physical engineering support queue ticket if the automated solution is insufficient.

#### 3.3 Dynamic Knowledge Repository Layout (SSS / FAQ)
- A grid of searchable informational panels mapping all platform operational procedures, server target deployment zones, refund architectures, and corporate timelines. Fully linked into the central AI response injection data pool to ensure conversational consistency across all chat windows.

---

## 🔍 SECTION 3: SYSTEM INTEGRATION & AI INJECTION VERIFICATION SCENARIOS

Ensure that all layout implementations and component code logic simulate the precise data workflows below:

1. **Context-Injected System Prompt Delivery:** When an inquiry executes inside any support workspace, the server backend framework automatically encapsulates the company information dataset payload alongside user prompts to structure cohesive OpenAI system API strings.
2. **Interactive Server Action Realization:** Clicking server control actions within the Compute Fleet ledger correctly fires state mutations, changing layout properties smoothly based on simulated processing delays.
3. **Ticket Interception and Deflection Execution:** Entering an allocation problem inside the support framework successfully triggers proactive help outputs, deflecting ticket creation by providing direct resolution steps before routing entries onto staff storage tables.

---

## 📋 GENERATION INSTRUCTIONS & OUTPUT REQUIREMENT

Generate the structured file directory maps, operational layout views using React or Vue functional components integrated with custom Tailwind CSS dark mode utility styling definitions, complete state slices managing mock server interactions, and responsive dashboard screens based on the detailed requirements above. Ensure absolute state alignment and role security layers across all modules. Proceed step-by-step.
