# TODO — FIX HERO TEXT READABILITY

## Plan Overview (confirmed after exploration)
- Update `src/components/Hero.tsx` to improve hero text readability without affecting the product imagery.
- Apply changes only to the left/text overlay area.
- Use banner images from `src/assets/banner` for the slide backgrounds.

## Steps
1. Inspect current hero implementation in `src/components/Hero.tsx`. ✅
2. Implement text-only left fade (strongest behind text, fades toward center). ✅
3. Add subtle soft radial glow backdrop behind hero text only (white/ivory, opacity 85–90%, blur 30px). ✅
4. Update heading styles: main color `#2B1E19` + text-shadow `0 2px 12px rgba(255,255,255,0.85)`. ✅
5. Update highlighted words (`Love`, `Luxury`) to `#E89CAD` and weight 700. ✅
6. Update paragraph styles: color `#4A3A34`, weight 500, max-width 520px. ✅
7. Move text block slightly left (20–30px) so it sits in brightest fade region. ✅
8. Replace hero background usage with banner slide images from `src/assets/banner` (Banner1..Banner4). ✅
9. Run lint/build (or dev) to ensure no TS/React errors. ✅



