# Tareq Hasan — Portfolio

A modern, minimalist, and professional personal portfolio website built with
pure HTML, CSS, and vanilla JavaScript.

## Overview

- Pure white background (`#FFFFFF`), black text (`#111111`)
- No gradients or colorful UI
- Fully responsive for mobile, tablet, and desktop
- Smooth scrolling with `prefers-reduced-motion` support
- Semantic HTML5 and accessible
- SEO-friendly (meta tags + JSON-LD schema)
- Fast loading — no build step, no framework

## Sections

- **Hero** — profile photo, name, title, intro, and social/resume buttons
- **About** — professional summary and stack overview
- **Skills** — grouped badges for frontend, backend, database, AI, and tools
- **Featured Projects** — four project cards with tech and links
- **Experience** — simple timeline
- **Footer** — GitHub, LinkedIn, email, copyright

## Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── profile.jpg
```

## Customization

| What            | Where                                  |
| --------------- | -------------------------------------- |
| Profile photo   | `assets/images/profile.jpg`            |
| Name / title    | `index.html` hero section              |
| Socials         | GitHub / LinkedIn / email links in hero and footer |
| Resume          | `index.html` — replace the Google Drive link |
| Skills          | `index.html` skills section            |
| Projects        | `index.html` projects section          |
| Experience      | `index.html` experience section        |
| Colors / fonts  | CSS variables at the top of `css/style.css` |


## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
4. Save. The site will be live at
   `https://<username>.github.io/<repository>/`.

No build step is required.

## License

Feel free to use this as a template for your own portfolio.
