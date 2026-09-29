# Sairam Gudiputi – Portfolio

Personal portfolio of Sairam Gudiputi, UI Software Engineer. Live at **https://itsairam.netlify.app**.

Built with Next.js 15 (App Router), React 19, Tailwind CSS and Sass, deployed on Netlify.

## Content

All content lives in `utils/data/`:

| File | Section |
| --- | --- |
| `personal-data.js` | Hero, About, contact details, social links, résumé link, meta description |
| `experience.js` | Experience (newest first) |
| `skills.js` | Skills marquee (icons are mapped in `utils/skill-image.js`) |
| `projects-data.js` | Projects (the homepage shows the first four) |
| `educations.js` | Education and certificates |

## Development

```bash
npm ci
npm run dev     # http://localhost:3000
npm run lint
npm run build   # output in dist/
```

## Contact form

The form sends through [EmailJS](https://www.emailjs.com/) in the browser and falls back to a `mailto:` link.
Default EmailJS ids are set in `app/components/homepage/contact/contact-form.jsx`; these optional variables
override them (they are inlined at build time, so redeploy after changing them):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SERVICE_ID` | EmailJS service id |
| `NEXT_PUBLIC_TEMPLATE_ID` | EmailJS template id |
| `NEXT_PUBLIC_EMAIL_PUBLIC` | EmailJS public key |
| `NEXT_PUBLIC_GTM` | Google Tag Manager id (analytics is off when unset) |

See `.env.example`.
