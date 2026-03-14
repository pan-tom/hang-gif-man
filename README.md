# Hang GIF Man

A modern React-based Hangman game with animated GIFs that show your progress. Built with React 19 and Vite for a fast, smooth experience.

## 🎮 Features

- Classic Hangman gameplay
- Animated GIF feedback for wrong guesses
- Success animation when you win
- Responsive design
- Keyboard input support (mouse and keyboard)
- Vibration feedback (on supported devices)
- Full accessibility support (ARIA labels, keyboard navigation, screen reader friendly)

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Fast build tool and dev server
- **Vitest 4** - Modern testing framework
- **ESLint 9** - Code linting with flat config
- **Prettier** - Code formatting
- **SCSS Modules** - Scoped styling
- **React Testing Library** - Component testing

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port)

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui
```

### Code Quality

```bash
# Lint code with ESLint
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## 📁 Project Structure

```
public/                  # Static assets (served as-is)
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── media/               # Hangman GIFs (wrong guesses, success)
│   ├── success.gif
│   ├── success.webp
│   ├── wrong0.gif
│   ├── wrong0.webp
│   ├── wrong1.gif
│   ├── wrong1.webp
│   ├── wrong2.gif
│   ├── wrong2.webp
│   ├── wrong3.gif
│   ├── wrong3.webp
│   ├── wrong4.gif
│   ├── wrong4.webp
│   ├── wrong5.gif
│   ├── wrong5.webp
│   ├── wrong6.gif
│   └── wrong6.webp
└── robots.txt

src/
├── components/
│   ├── Board/              # Game board and logic
│   │   ├── Board.hooks.js  # Board component hooks
│   │   ├── Board.jsx
│   │   ├── Board.test.jsx
│   │   ├── Keyboard.jsx
│   │   ├── Keyboard.module.scss
│   │   ├── Keyboard.test.jsx
│   │   ├── Letters.jsx
│   │   ├── Letters.module.scss
│   │   ├── Letters.test.jsx
│   │   ├── RestartButton.jsx
│   │   ├── RestartButton.module.scss
│   │   ├── RestartButton.test.jsx
│   │   ├── Result.hooks.js # Result component hooks
│   │   ├── Result.jsx
│   │   ├── Result.module.scss
│   │   ├── Result.test.jsx
│   │   └── ResultImage.jsx
│   ├── Header/             # App header
│   │   ├── Header.jsx
│   │   └── Header.module.scss
│   └── Layout/             # Main layout wrapper
│       ├── Layout.jsx
│       └── Layout.module.scss
├── data/
│   └── words.json          # Word list
├── hooks/
│   ├── useImageLoader.js   # Reusable hook for image loading
│   └── useImageLoader.test.js
├── styles/
│   └── _variables.scss     # Reusable Sass variables
├── App.jsx
├── App.test.jsx
├── constants.js            # Game constants and configuration
├── index.css
├── index.jsx               # App entry point
└── vitest.setup.js         # Test setup configuration
```

## 🌐 Demo

Live demo: [https://hangman-gif.netlify.app/](https://hangman-gif.netlify.app/)

## 📝 License

This project was created for learning purposes.
