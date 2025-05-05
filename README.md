# 🌿 Equilibra – Aplikacja promująca produkt kosmetyczny SPF 50+

## 📌 Spis treści
- [Wstęp](#wstęp)
- [Technologie i biblioteki](#technologie-i-biblioteki)
- [Instrukcja uruchomienia lokalnie](#instrukcja-uruchomienia-lokalnie)
- [Struktura aplikacji](#struktura-aplikacji)
- [Dodatkowe funkcjonalności](#dodatkowe-funkcjonalności)
- [Animacje i UX](#animacje-i-ux)
- [Uwagi końcowe](#uwagi-końcowe)

---

## 🟢 Wstęp
Aplikacja Equilibra to interaktywna strona promująca naturalny krem przeciwsłoneczny SPF 50+. Składa się z sekcji informacyjnych, animacji wchodzących w trakcie scrollowania oraz prostego formularza kontaktowego obsługiwanego przez mailto.

---

## 🧰 Technologie i biblioteki

| Technologia             | Opis                                                                 |
|------------------------|----------------------------------------------------------------------|
| **React (JSX)**         | Główny framework do budowy komponentów i logiki aplikacji.          |
| **HTML5 + CSS3**        | Struktura i stylowanie sekcji (często z użyciem flexbox, position). |
| **AOS (Animate On Scroll)** | Obsługa animacji elementów podczas scrollowania (`data-aos`).    |
| **Mailto**              | Formularz kontaktowy wysyłający wiadomość przez klienta pocztowego. |
| **IntersectionObserver API** | Alternatywa dla AOS do uruchamiania animacji w React.         |
| **React Hooks**         | `useState`, `useEffect`, `useRef` do zarządzania stanem i logiką.   |
| **Lucide-react**        | Ikony (`Mail`, `User`, `Send`) do formularza.                       |
| **Leaflet / React-Leaflet** | Interaktywna mapa z markerem – osadzona za pomocą komponentu. |
| **z-index / position / transform** | Precyzyjne pozycjonowanie elementów graficznych.       |

---

## 🧪 Instrukcja uruchomienia lokalnie

**Krok 1:** Pobierz repozytorium

```bash
git clone https://github.com/szymonjozwiakzip/product-page
```

**Krok 2:** Zainstaluj zależności

```bash
npm install
```

**Krok 3:** Przejdź do folderu projektu

```bash
cd landing-product-page
```

**Krok 4:** Uruchom aplikację

```bash
npm run dev
```

**Krok 5:** Otwórz w przeglądarce

[http://localhost:5173](http://localhost:5173)

---

## 🧱 Struktura aplikacji

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Usage.jsx
│   ├── Hydration.jsx
│   ├── ProductComposition.jsx
│   ├── Prosun.jsx
│   ├── ContactForm.jsx
│   ├── Aloe.jsx
│   ├── HydrationIcon.jsx
│   ├── ProductTested.jsx
│   ├── SkinProtect.jsx
│   ├── UsageIcons.jsx
│   └── LeafletMap.jsx
├── styles/
│   ├── hero.css
│   ├── hydration.css
│   ├── contact.css
│   ├── prosun.css
│   └── ...itd
├── App.jsx
└── main.jsx
```

Każdemu komponentowi z `./src/components/` odpowiada konkretny plik z `./src/styles/`, dzięki czemu w przejrzysty sposób możemy kontrolować właściwości CSS. Komponenty są importowane i układane w pliku `App.jsx`.

---

## 🚀 Dodatkowe funkcjonalności 

### 📌 Navbar

- Sticky navbar u góry strony
- Przewija do odpowiednich sekcji dzięki `href="#sekcja"`
- Styl zmienia się przy najechaniu (hover)
- `position: fixed`, `z-index: 999`

### 💌 Formularz kontaktowy

- Pola: imię i nazwisko, email, wiadomość
- Ikony w inputach (`User`, `Mail`, `MessageSquare`)
- Walidacja po stronie klienta
- `mailto:` otwiera klienta pocztowego

### 🗺️ Mapa Leaflet

- Sekcja "Tu jesteśmy!" wyświetla interaktywną mapę z zaznaczeniem lokalizacji
- Możliwość przesuwania i przybliżania mapy
- Użycie biblioteki react-leaflet i leaflet

---

## ✨ Animacje i UX

Do animacji elementów podczas scrollowania wykorzystano dwie metody:

1. **IntersectionObserver**  
   Połączony z klasami CSS (`slide-in-left`, `slide-in-right`, `fadeInUp`) nadawanymi dynamicznie – pełna kontrola nad animacjami w React.

2. **AOS (Animate On Scroll)**  
   Instalowany przez `npm i aos`, używany przez `data-aos="fade-up"` bez konieczności pisania dodatkowego JS.

✅ Wszystkie animacje uruchamiane są jednorazowo w momencie pojawienia się elementu w widoku użytkownika.

---

## 📦 Uwagi końcowe

- Brak backendu – formularz działa tylko przez `mailto`
- Nie są zbierane żadne dane użytkownika
- Kod napisany czytelnie, komponenty są oddzielone i wielokrotnego użytku
- Ze względu na ograniczenia czasowe **brak pełnej responsywności mobilnej**
