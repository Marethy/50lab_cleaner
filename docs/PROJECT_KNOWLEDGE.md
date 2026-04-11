# PROJECT_KNOWLEDGE.md — 50-Lab Website

> Read this at the start of every session. Keep it up to date after major changes.

---

## Project Overview

**Business**: 50-Lab — dịch vụ vệ sinh giày và túi xách chuyên nghiệp tại TP.HCM
**URL**: https://www.50lab.store/
**Target users**: Sinh viên làng ĐH Thủ Đức (B2C) + tiệm giặt ủi / cửa hàng (B2B)
**Key brand rule**: Brand name is **50-Lab** (not "50LAB" — all components updated)

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Routing | React Router v6 |
| Email | EmailJS (`emailjs-com`) — env vars in `.env` |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights` (already in main.jsx) |
| Deployment | Vercel (SPA rewrite in `vercel.json`) |
| Image optimization | `vite-imagetools` — use `?format=webp` on `src/assets/images` imports |

---

## Routes

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `HomePage` | Main page — mobile-first (4 sections only on mobile) |
| `/services` | `ServicesPage` | ServicesSection + HowItWorks + ServiceCard |
| `/services#shoes` | → ServicesPage | Scrolls to shoe tab |
| `/services#bags` | → ServicesPage | Scrolls to bag tab |
| `/services#quy-trinh` | → ServicesPage | Scrolls to HowItWorks |
| `/lien-he-hop-tac` | `B2BPage` | B2B contact form |
| `/about-us` | `AboutUsPage` | GocChiaSe (blog posts) |
| `/policy` | `PolicyPage` | Terms & warranty |
| `/meo-cham-soc-giay` | `ShoeCareTipsPage` | Blog: shoe care tips |
| `/contact` | inline `ContactForm` | Booking form |

---

## Component Map

```
App.jsx
├── ScrollToTop (fixes nav scroll bug)
├── Header.jsx — sticky nav, dropdown, mobile hamburger
│   └── mobileOnlyLinks: Góc chia sẻ, Quy trình làm sạch
├── main
│   └── HomePage.jsx
│       ├── HeroSection — headline, CTA buttons
│       ├── BrandIntro — about 50-Lab, links to B2C/B2B
│       ├── StatsSection — 3 stats inline (5+ yr, 3000+, 2h)
│       ├── ServicesSection — tab (giày/túi), service cards, consult form
│       ├── [hidden md:block] B2CBSection — who is this for?
│       ├── B2BSection — partners (Chin Lab, Soji, Save), benefits
│       ├── [hidden md:block] HowItWorks — 5-step process, tab (giày/túi)
│       ├── [hidden md:block] GocChiaSe — blog/community posts
│       └── ContactForm — booking form (simplified: no shoeType/preferredTime)
├── ChatBox.jsx — floating chat (Zalo + Messenger)
└── Footer.jsx
```

---

## Key Decisions Made

### Mobile-first homepage (April 2025)
- Only 4 sections show on mobile: BrandIntro, StatsSection, ServicesSection, ContactForm
- B2CBSection, HowItWorks, GocChiaSe → `hidden md:block` (accessible via hamburger menu)
- Mobile hamburger menu: "Góc chia sẻ" → /about-us, "Quy trình làm sạch" → /services#quy-trinh

### Brand name
- All "50LAB" → "50-Lab" (client request, April 2025 req.xlsx)

### Student discount
- "Vệ sinh giày" shows `🎓 Sinh viên giảm 50%` badge in ServicesSection

### B2B partners
- Real partners: Chin Lab, Soji, Save - The love a little more (not placeholder names)

### Contact form simplification
- Removed fields: shoeType (Loại giày/túi), preferredTime (Thời gian mong muốn)
- Remaining: name, email, phone, service, address, message

### Stats (updated April 2025)
- 5+ năm kinh nghiệm | 3000+ đôi giày & túi | 2 giờ giao nhanh nhất
- Removed: 4.8★ rating stat

---

## EmailJS Configuration

Centralized in `src/config/emailjs.js` — imports env vars with hardcoded fallback:
```js
export const EMAILJS = {
  serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_xzvm2db",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_i25gn75",
  publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "uX5HE9XX3c98LTqzw",
};
```

All three forms (`ContactForm`, `ServicesSection` ConsultForm, `B2BPage`) import from this file.

**Why fallback values exist**: `.env` is gitignored → Vercel builds without it → `import.meta.env.*` would be `undefined` at build time → forms silently fail. Fallback values guarantee production works without Vercel env var configuration (EmailJS public keys are intentionally public/client-side).

Optional: set in Vercel dashboard (Project → Settings → Environment Variables) to allow key rotation without code changes.

---

## Image Conventions

- Source images: `src/assets/images/*.jpg`
- All imports via `config/images.js` use `?format=webp` (vite-imagetools)
- GocChiaSe imports also use `?format=webp`
- Public folder images (`/50lab.jpg`, `/vite.svg`) are NOT processed — served as-is
- All `<img>` tags on content images have `loading="lazy"`

---

## SEO / Analytics

- **GA4**: placeholder `G-XXXXXXXX` in index.html — **replace with real ID**
- **Schema markup**: LocalBusiness + 2 Service entities in index.html
- **Sitemap**: `/public/sitemap.xml` (all 7 routes)
- **Robots**: `/public/robots.txt`
- **Vercel rewrite**: `vercel.json` → fixes SPA 404 on page refresh

---

## Known Issues / Fixed

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| 404 on page refresh after idle | Vercel serving SPA without rewrite rules | `vercel.json` SPA rewrite `/(.*) → /` |
| Click nav link → page stays still | No scroll-to-top on route change | `ScrollToTop` component in `App.jsx` |
| All 3 forms fail to send email in production | `.env` is gitignored → Vercel builds without it → `import.meta.env.VITE_*` is `undefined` → EmailJS called with undefined credentials | Centralized `src/config/emailjs.js` with env var + hardcoded fallback |
| B2BPage + ServicesSection hardcoded EmailJS keys | Copy-paste, no single source of truth | Both now import from `src/config/emailjs.js` |
| `ServiceMenu` mobile select caused full-page reload | `window.location.href = value` instead of React Router | Replaced with `useNavigate()(value)` |
| `ServiceMenu` all links pointed to non-existent routes | Old routes (`/ve-sinh-giay/` etc.) never existed in App.jsx | Remapped to actual routes (`/services#shoes`, `/services#bags`, `/lien-he-hop-tac`) |

## Dead Code (not rendered, safe to delete later)

These components exist but are imported by nothing in the active app:
- `src/components/Navbar.jsx` — superseded by `Header.jsx`
- `src/components/SideBar.jsx` — not mounted anywhere
- `src/components/ThemeToggle.jsx` — only imported by dead `Navbar.jsx`
- `src/components/ServiceDetail.jsx` — unused stub
- Note: `ThemeProvider` IS still used — wraps `App.jsx`

---

## Web Performance & Monitoring

- **Core Web Vitals**: LCP, FID, CLS — đo bằng Google PageSpeed Insights
- **Monitoring tools**: Google Search Console (miễn phí), GA4, Hotjar (heatmap)
- **Uptime**: UptimeRobot (free tier) hoặc Better Stack

---

## SEO Checklist (local business)

- Title tag: < 60 ký tự, có keyword + địa danh (TP.HCM)
- Meta description: < 160 ký tự
- Schema markup: LocalBusiness + Service ✅
- Sitemap.xml + robots.txt ✅
- Google Business Profile — cần xin review từ khách
- Local keywords: "vệ sinh giày quận X", "clean giày TPHCM"

---

## Analytics keywords cần track

- vệ sinh giày, clean giày, tiệm giặt giày, spa giày
- vệ sinh túi xách, làm sạch túi da
- giày hôi, giày bẩn, giày ố vàng
- Target: sinh viên làng ĐH Thủ Đức + khách B2B tiệm giặt ủi

---

## Tech Debt / TODO

- [ ] Replace GA4 placeholder `G-XXXXXXXX` with real measurement ID
- [ ] Add Google Search Console → submit sitemap.xml
- [ ] Setup UptimeRobot alert for https://www.50lab.store/
- [ ] Migrate B2BPage.jsx hardcoded EmailJS keys to env vars
- [ ] Optimize large images (bla1.jpg 1.3MB, blb1.jpg 1.3MB, sa1.jpg 700KB) — already WebP via vite-imagetools but source files are large
- [ ] Add Google Business Profile reviews widget
- [ ] Consider adding `sla2.jpg`, `sb2.jpg`, `slb2.jpg` to remove unused imports (currently `spkm1/2.jpg` imported in old images.js but removed)
