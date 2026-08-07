# Frontend Authentication App

A professional React + Tailwind CSS authentication system with Login, Register, and Dashboard pages.

## Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Navbar.jsx
│   │   └── index.js
│   ├── pages/          # Page components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   └── index.js
│   ├── router/         # React Router configuration
│   │   └── index.jsx
│   ├── services/       # Utility/service functions
│   │   ├── authService.js
│   │   └── index.js
│   ├── assets/         # Images, icons, etc.
│   ├── App.jsx         # Root App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── .gitignore          # Git ignore rules
```

## Installation & Setup

```bash
cd frontend
npm install
npm run dev
```

The app will open automatically at http://localhost:3000

## Features

- ✅ Responsive design
- ✅ Form validation
- ✅ Client-side routing
- ✅ Reusable components
- ✅ Modern Tailwind CSS styling
- ✅ Professional UI

## Tech Stack

- React 18
- Vite (build tool)
- React Router v6
- Tailwind CSS
- Autoprefixer
