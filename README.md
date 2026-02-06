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

- **React 19.2.4** - Latest React with modern features
- **Vite 7.3.1** - Fast build tool and dev server
- **Vitest 4.0.18** - Modern testing framework
- **ESLint 9** - Code linting with flat config
- **Prettier** - Code formatting
- **SCSS Modules** - Scoped styling
- **React Testing Library** - Component testing

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
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
src/
├── components/
│   ├── Board/          # Game board and logic
│   │   ├── Board.jsx
│   │   ├── Board.hooks.js    # Board component hooks
│   │   ├── Keyboard.jsx
│   │   ├── Letters.jsx
│   │   ├── Result.jsx
│   │   ├── Result.hooks.js   # Result component hooks
│   │   ├── ResultImage.jsx
│   │   └── RestartButton.jsx
│   ├── Header/         # App header
│   └── Layout/         # Main layout wrapper
├── hooks/
│   └── useImageLoader.js  # Reusable hook for image loading
├── styles/
│   └── _variables.scss    # Reusable Sass variables
├── data/
│   └── words.json         # Word list
├── constants.js           # Game constants and configuration
├── index.jsx              # App entry point
└── vitest.setup.js        # Test setup configuration
```

## 🌐 Demo

Live demo: [https://hangman-gif.netlify.app/](https://hangman-gif.netlify.app/)

## 📝 License

This project was created for learning purposes.
