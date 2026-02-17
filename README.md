# Popup Modal

A clean, responsive popup modal built with **React** and **Tailwind CSS**. Clicking the "Create" button opens a sign-up form inside a modal overlay with a blurred background effect.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## Features

- **Modal Overlay** — Opens on button click with a semi-transparent backdrop
- **Background Blur** — Content behind the modal is blurred for focus
- **Click Outside to Close** — Clicking the overlay dismisses the modal
- **Close Button** — Dedicated "X" button to close the modal
- **Sign-Up Form** — Includes Full Name and Password fields
- **Fully Responsive** — Works on all screen sizes
- **Smooth Transitions** — CSS transitions for a polished feel

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| Tailwind CSS 4 | Utility-first styling |
| Vite 7 | Build tool & dev server |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/parwez159/Popup-Modal.git

# Navigate to the project
cd Popup-Modal

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
popup/
├── public/
├── src/
│   ├── components/
│   │   └── Modal.jsx        # Modal component with sign-up form
│   ├── App.jsx               # Main app with modal toggle logic
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

1. The `App` component manages modal visibility via `useState`.
2. Clicking **"Create"** sets `isActive` to `true`, rendering the `Modal` component.
3. The background content gets a blur effect using Tailwind's `blur` utility.
4. The modal can be closed by clicking the **X button** or clicking outside the modal.

## License

This project is open source and available under the [MIT License](LICENSE).
