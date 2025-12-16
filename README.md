# macOS Portfolio

A stunning portfolio website that replicates the macOS Big Sur interface, built with Next.js, React, and TypeScript. Features a fully interactive desktop environment with draggable windows, a functional dock, menu bar, and theme switching.

## ✨ Features

### 🖥️ macOS-Inspired Interface

- **Authentic macOS Design**: Pixel-perfect recreation of macOS Big Sur's visual style
- **Interactive Desktop**: Fully functional desktop environment with window management
- **Draggable & Resizable Windows**: Move and resize application windows using `react-rnd`
- **Dock**: Animated dock with app icons and hover effects
- **Menu Bar**: Top menu bar with system time and controls

### 🎨 Theme System

- **Light & Dark Mode**: Toggle between light and dark themes
- **System Preference Detection**: Automatically detects OS theme preference
- **Persistent Theme**: Saves theme preference to localStorage
- **Control Center**: macOS-style control center for theme switching

### 📱 Portfolio Sections

- **About Me**: Personal introduction with highlights
- **Experience**: Timeline view of work experience
- **Projects**: Filterable project showcase
- **Skills**: Categorized skills display
- **Contact**: Contact information with social links

### 🚀 Performance & SEO

- **Next.js 16**: Built on the latest Next.js with App Router
- **React 19**: Leveraging the newest React features
- **SEO Optimized**: Comprehensive metadata, OpenGraph, Twitter Cards
- **Structured Data**: JSON-LD for better search engine understanding
- **Sitemap & Robots.txt**: Automated sitemap generation

### 🛠️ Developer Experience

- **TypeScript**: Full type safety across the codebase
- **SCSS Modules**: Component-scoped styling with SCSS
- **Prettier**: Automated code formatting with import organization
- **ESLint**: Code quality enforcement
- **Zustand**: Lightweight state management

## 🏗️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [SCSS](https://sass-lang.com/) with CSS Modules
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Window Management**: [react-rnd](https://github.com/bokuweb/react-rnd)
- **UI Components**: [Material-UI](https://mui.com/)
- **Date Formatting**: [date-fns](https://date-fns.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd macos-portfolio

# Install dependencies (using pnpm recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

## 🚀 Getting Started

### Development

```bash
# Start the development server
pnpm dev

# Or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create a production build
pnpm build

# Start the production server
pnpm start
```

### Linting & Formatting

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Check formatting without modifying files
pnpm format:check
```

## 🙏 Credits & Acknowledgments

This project was inspired by and builds upon the excellent work of:

- **[Puru Vijay (@puruvj)](https://github.com/PuruVJ)** - Original macOS web experience
  - [macos-web](https://github.com/PuruVJ/macos-web) - macOS Big Sur UI in the browser (Svelte)
  - [macos-preact](https://github.com/puruvj/macos-preact) - macOS experience with Preact

Special thanks for the inspiration and design patterns that made this portfolio possible.

## 📧 Contact

For questions or feedback, please reach out through the contact information in the portfolio application.

---

Built with ❤️ using Next.js and React
