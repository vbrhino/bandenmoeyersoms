# Bandencentrale Moeyersoms

Website voor Bandencentrale Moeyersoms — banden, velgen en autoservice in Puurs (België).

## Tech Stack

- **Hosting:** GitHub Pages (static site)
- **Contact form:** Formspree (SMTP backend, 100% reliable)
- **Analytics:** GoatCounter (free, privacy-first, no cookies)
- **Stack:** Vanilla HTML5 + CSS (no frameworks)

## Setup

### 1. Formspree (contact form)

1. Maak een gratis account aan op [formspree.io](https://formspree.io)
2. Maak een nieuw formulier aan
3. Kopieer de form ID (bv. `xyzabc`) en vervang in `prijsaanvraag.html` en `contact.html`:
   - `action="https://formspree.io/f/xxxxxxxx"` → `action="https://formspree.io/f/JOUW_FORM_ID"`

### 2. GoatCounter (analytics)

1. Maak een gratis account aan op [goatcounter.com](https://www.goatcounter.com)
2. Kies een site code (bv. `bandenmoeyersoms`)
3. Het script staat al in elke pagina: `data-goatcounter="https://bandenmoeyersoms.goatcounter.com/count"`
   - Vervang `bandenmoeyersoms` door jouw site code indien anders

### 3. GitHub Pages & Custom Domain

1. Ga naar repo Settings → Pages
2. Zet Source op `main` branch, `/ (root)` folder
3. (Optioneel) Voeg custom domein toe: `bandenmoeyersoms.be`
4. Stel de DNS van het domein in op GitHub Pages IPs / CNAME

### 4. Afbeeldingen

De huidige site gebruikt placeholder blokken. Vervang deze door echte afbeeldingen:
- Plaats afbeeldingen in de `images/` map
- Of gebruik een externe CDN

## Lokaal testen

```bash
# Open index.html in je browser, of serveer met een simpele server:
python3 -m http.server 8000
```
