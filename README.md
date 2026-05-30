# 🚀 TypeScript Infinite Scroll Dashboard

Application developed with TypeScript and Vite that displays data from multiple public APIs using reusable UI components and infinite scrolling.

The project consumes data from Unsplash, PokéAPI, and JSONPlaceholder, demonstrating API integration, reusable classes, TypeScript generics, and the Intersection Observer API.

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 Node.js: v14.21.3
- 📦 npm: v6.14.18
- 🅰️ Angular CLI: v12.x

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
```

## 🚀 Project Installation

### 1️⃣ Clone the repository

```bash
git clone git@github.com:alobuuls/typescript-infinite-scroll-dashboard.git
cd typescript-infinite-scroll-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Then open your browser at:

```text
http://localhost:5173
```

## 🧠 Project Architecture

The project follows a modular architecture based on reusable classes and components.

### 📦 Api Class

Responsible for:

- API communication
- URL generation
- Header configuration
- Request execution
- Response transformation

### 📦 UI Class

Responsible for:

- Rendering data
- Infinite scroll management
- Intersection Observer integration
- Pagination handling
- Loading state management

### 📦 Components

Contains reusable UI elements:

- Photo cards
- Dynamic content rendering

### 📦 Interfaces

Provides:

- API response typing
- UI contracts
- Type safety

## ⚙️ Main Features

- 📡 Multiple API integrations
- ♾️ Infinite scrolling
- 🖼️ Unsplash photo gallery
- 🔴 PokéAPI integration
- 📝 JSONPlaceholder posts
- 🔄 Dynamic data loading
- 🎯 Strong typing with TypeScript
- 📦 Reusable UI components
- 👀 Intersection Observer API
- ⚡ Generic classes for scalability

## 🛠️ Technologies Used

- 🔷 TypeScript
- ⚡ Vite
- 🌐 Fetch API
- 👀 Intersection Observer API
- 🎨 HTML5
- 🎨 CSS3

## 📁 Project Structure

```text
src/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── hero.png
│   ├── typescript.svg
│   └── vite.svg
│
├── classes/
│   ├── api.ts
│   └── ui.ts
│
├── components/
│   └── card.component.ts
│
├── interfaces/
│   ├── api/
│   │   ├── api.jsonplaceholder.interface.ts
│   │   ├── api.pokemons.interface.ts
│   │   └── api.unsplash.interface.ts
│   │
│   └── ui/
│       └── card.interface.ts
│
└── main.ts
```

## 🔥 Best Practices Implemented

- TypeScript generics
- Strong typing with interfaces
- Separation of concerns
- Reusable classes
- Reusable UI components
- Encapsulation using classes
- Async/Await for API requests
- Error handling
- Infinite scroll optimization
- DOM rendering with DocumentFragment
- Modular project structure

## 📄 License

This project is intended for educational purposes and is part of a personal portfolio.
