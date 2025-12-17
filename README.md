# Nebubots Landing Page

A modern, professional landing page for Nebubots - an AI-Powered Gmail Assistant. Built with React, featuring dark/light mode toggle and responsive design.

## Features

- 🎨 **Modern Design**: Clean, professional UI inspired by Nebubots and Sintra.ai
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent storage
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎯 **Smooth Animations**: Engaging hover effects and transitions
- 🔍 **SEO Friendly**: Proper meta tags and semantic HTML

## Sections

- **Hero Section**: Eye-catching introduction with CTA buttons
- **Features**: Showcase of key capabilities
- **AI Helpers**: Display of various AI assistants (like Sintra.ai)
- **Testimonials**: Customer reviews and feedback
- **FAQ**: Expandable frequently asked questions
- **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Context API**: Theme management

## Project Structure

```
nebubots-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── AIHelpers.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the `colors.primary` section.

### Content

All content is in the component files. Edit the respective component to change text, images, or structure.

### Theme

The theme toggle is managed by `ThemeContext.jsx`. The theme preference is stored in localStorage.

## License

MIT


