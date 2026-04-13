# Hang GIF Man

A modern React-based Hangman game with animated WebP images that show your progress. Built with React 19, TypeScript, and Vite.

## 🎮 Features

- Classic Hangman gameplay
- Animated WebP feedback for wrong guesses and success
- Responsive design
- Keyboard input support (mouse and keyboard)
- Vibration feedback (on supported devices)
- Full accessibility support (ARIA labels, keyboard navigation, screen reader friendly)

## 🛠️ Tech Stack

- **React 19** — UI
- **TypeScript** — Typed source and tests
- **Vite 8** — Dev server and production build
- **Vitest 4** — Unit and component tests
- **ESLint 9** — Linting (flat config, `eslint.config.ts`)
- **Prettier** — Formatting
- **SCSS Modules** — Scoped styling
- **React Testing Library** — Component testing

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** (`package.json` `engines`; `.nvmrc` pins a version for local use)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Building for Production

```bash
npm run build
npm run preview
```

### Testing

```bash
npm test
npm run test:ui
```

### Code Quality

```bash
npm run type-check
npm run lint
npm run lint:fix
npm run format
```

**Netlify (or similar):** Use build command `npm run type-check && npm run build` and publish directory `dist` if you want deploys to fail on type errors.

## 📁 Project Structure

```
public/                      # Static assets (served as-is)
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── media/                   # Hangman animations — WebP only (no GIFs)
│   ├── success.webp
│   ├── wrong0.webp
│   ├── wrong1.webp
│   ├── wrong2.webp
│   ├── wrong3.webp
│   ├── wrong4.webp
│   ├── wrong5.webp
│   └── wrong6.webp
└── robots.txt

eslint.config.ts
index.html
package.json
tsconfig.json
tsconfig.app.json
tsconfig.node.json
vite.config.ts
vitest.setup.ts

src/
├── components/
│   ├── Board/
│   │   ├── Board.tsx
│   │   ├── Board.hooks.ts
│   │   ├── Board.test.tsx
│   │   ├── Keyboard.tsx
│   │   ├── Keyboard.module.scss
│   │   ├── Keyboard.test.tsx
│   │   ├── Letters.tsx
│   │   ├── Letters.module.scss
│   │   ├── Letters.test.tsx
│   │   ├── RestartButton.tsx
│   │   ├── RestartButton.module.scss
│   │   ├── RestartButton.test.tsx
│   │   ├── Result.tsx
│   │   ├── Result.hooks.ts
│   │   ├── Result.module.scss
│   │   ├── Result.test.tsx
│   │   └── ResultImage.tsx
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.scss
│   └── Layout/
│       ├── Layout.tsx
│       └── Layout.module.scss
├── data/
│   └── words.json
├── hooks/
│   ├── useImageLoader.ts
│   └── useImageLoader.test.ts
├── styles/
│   └── _variables.scss
├── App.tsx
├── App.test.tsx
├── constants.ts
├── index.scss
└── index.tsx
```

## 🌐 Demo

Live demo: [https://hangman-gif.netlify.app/](https://hangman-gif.netlify.app/)

## 📝 License

This project was created for learning purposes.
