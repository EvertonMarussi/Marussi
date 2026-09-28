# Everton Marussi — Portfolio

English portfolio built on the existing Vue 2 / Vue CLI project, with GSAP and ScrollTrigger.

## Development

```sh
npm install
npm run serve
```

Open `/Marussi/` on the server URL. The existing GitHub Pages base path is preserved in `vue.config.js`.

```sh
npm run lint
npm run build
```

## Content and assets

Edit `src/data/portfolio.js` to set portrait, project images, email and social links. The supplied photos are imported from `src/assets/`. The two Smart Outlet award photographs form a gallery, and the UNICID hackathon has its own organizer and mentor section. Technology SVGs are served locally from `public/icons/`, with Devicon attribution and license included. Biography and timeline are in `src/views/paginaPrincipal.vue`. Styles are in `src/assets/portfolio.css`.

The content is based on the supplied biography. Project descriptions distinguish the academic capstone, applied AI work and grouped professional experience. No project metrics, testimonials, proficiency percentages or repository links are invented.

## Contact

Until an email is configured, the form validates required fields and copies the composed message, explicitly informing visitors that nothing has been sent. Once `email` is supplied, submission opens a prefilled email draft in the visitor's mail application. There is no backend delivery service and no claim of successful delivery. For automatic delivery, connect an appropriate backend before replacing this flow.

## Motion and accessibility

GSAP drives entry reveals and the pinned Welcome sequence. Native anchor links, a keyboard-accessible mobile menu and project disclosure controls work without motion. Reduced-motion preferences remove scroll pinning and display both introduction phrases. GSAP contexts are reverted when the route is destroyed.
