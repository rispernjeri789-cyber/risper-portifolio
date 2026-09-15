# Risper Njeri — Portfolio

Personal portfolio site for Risper Njeri, a full-stack software developer.
Built as a single-page React application showcasing skills, projects and
contact information.

## Live Site

Deploy this project (e.g. with Vercel or Netlify) and add the link here
once it's live.

## Sections

- **Hero** — introduction, tech stack, resume download
- **About** — who I am, what I enjoy building, my software engineering journey
- **What I Do** — frontend, backend, database and full-stack capabilities
- **Skills** — frontend, backend, database and tooling
- **Featured Project** — Vehicle Rental Management System, with a live demo
- **Other Projects** — Safari Tour & Travel, Hospital Appointment System,
  Python Full-Stack Group Project
- **Contact** — email, phone, GitHub, LinkedIn

## Tech Stack

- React 19
- Vite
- Plain CSS with CSS variables (light/dark mode support)
- ESLint

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # run ESLint
```

## Project Structure

```
src/
  components/   # one component per section (Hero, About, Skills, ...)
  assets/       # profile photo and project screenshots
  App.jsx       # assembles the page from components
  index.css     # design tokens (colors, spacing) and base styles
  App.css       # component and section styles
```

## To Do

- Add resume PDF to `public/resume.pdf` so the Download Resume button works
- Add LinkedIn URL
- Add exact GitHub repo links for each project (currently point to the
  GitHub profile)
