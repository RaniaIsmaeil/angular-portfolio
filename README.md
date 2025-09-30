# angular-portfolio

A clean, modern Angular portfolio with Tailwind CSS, smooth animations, and a dark/light theme toggle that remembers your choice.

## Quick start

```bash
npm i
npm start
```

This will open `http://localhost:4200`.

## Customize
- Edit projects inside `src/app/app.component.ts` (the `projects` array).
- Update contact links in the Contact section.
- Tailwind design tokens are in `tailwind.config.js` and `src/styles.css`.

## Notes
- Built with Angular 18 standalone components.
- Uses `buildTarget` in `angular.json` (no deprecated `browserTarget`).
- Tailwind `darkMode: 'class'` + localStorage persists theme.
