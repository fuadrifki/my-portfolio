# Project Images

This directory contains placeholder images for portfolio projects. Each image is an SVG mockup representing the project's interface.

## Image Mapping

| Project | File | Category | Featured |
|---------|------|----------|----------|
| Genesis — Lion Parcel | `genesis.svg` | Enterprise | ✅ |
| Pindad | `pindad.svg` | Enterprise | ✅ |
| Pintoko | `pintoko.svg` | E-commerce | |
| Shopify × Lion Parcel | `shopify-lionparcel.svg` | E-commerce | |
| Jersium | `jersium.svg` | E-commerce | |
| Lion Parcel Website & Lion CMS | `lion-cms.svg` | Enterprise | |
| Refactory Company Profile | `refactory-profile.svg` | Enterprise | |
| Atenda | `atenda.svg` | Enterprise | |
| Ayo Belajar | `ayo-belajar.svg` | Personal | |
| Sistem Informasi Akademik UT | `sia-ut.svg` | Enterprise | |
| S1 Learning Platform | `s1-learning.svg` | Personal | |
| PKR-2 | `pkr2.svg` | Personal | |

## Replacing with Real Screenshots

1. **Prepare your screenshot**: Take a screenshot of the actual application interface
2. **Optimize the image**:
   - Recommended dimensions: 800×500px (16:10 aspect ratio)
   - Recommended format: WebP or optimized PNG/JPG
   - Target file size: < 200KB per image
3. **Replace the file**: Save your optimized image with the same filename (e.g., `genesis.webp`)
4. **Update the data** (if changing format): Update the `image` field in `src/data/portfolio.ts` to point to the new file

## Image Specifications

- **Aspect Ratio**: 16:10 (800×500px base)
- **Display**: Used in project cards with `object-cover` fit
- **Hover Effect**: Subtle scale (1.02x) and shadow transition
- **Loading**: Lazy-loaded with Next.js Image component

## Notes

- SVG placeholders use fictional sample data only
- No proprietary screenshots, company data, or real logos are included
- Images are optimized for both light and dark themes
- The `project-card-image` CSS class handles hover transitions