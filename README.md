<h1 align="center">🚀 TypeScript Infinite Scroll Dashboard</h1>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Architecture-Modular-blue" alt="Modular Architecture" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Completed" />
</p>

<p align="center">
  <a href="https://github.com/alobuuls/typescript-infinite-scroll-dashboard" target="_blank"><img src="https://img.shields.io/badge/GitHub-Repository-181717?logo=github&logoColor=white" alt="Repository" /></a>
  <a href="https://github.com/alobuuls/typescript-infinite-scroll-dashboard/stargazers" target="_blank"><img src="https://img.shields.io/github/stars/alobuuls/typescript-infinite-scroll-dashboard?style=social" alt="GitHub Stars" /></a>
  <a href="https://github.com/alobuuls/typescript-infinite-scroll-dashboard/commits/main" target="_blank"><img src="https://img.shields.io/github/last-commit/alobuuls/typescript-infinite-scroll-dashboard" alt="Last Commit" /></a>
</p>

---

## 📑 Table of Contents

* [🚀 TypeScript Infinite Scroll Dashboard](#-typescript-infinite-scroll-dashboard)

  * [🌐 Live Demo](#-live-demo)
  * [📖 Description](#-description)
  * [⚙️ System Requirements](#️-system-requirements)
  * [🚀 Project Installation](#-project-installation)
  * [▶️ Run the Project](#️-run-the-project)
  * [🧠 Project Architecture](#-project-architecture)
  * [✨ Features](#-features)
  * [🛠 Technologies Used](#-technologies-used)
  * [📁 Project Structure](#-project-structure)
  * [🔥 Best Practices Implemented](#-best-practices-implemented)
  * [🎯 Project Goal](#-project-goal)
  * [📄 License](#-license)

---

## 🌐 Live Demo

🔗 https://alobuuls.github.io/typescript-infinite-scroll-dashboard/

---

## 📖 Description

> [!NOTE]
> A TypeScript application that displays information from multiple public APIs through reusable UI components and infinite scrolling.

The project integrates data from Unsplash, PokéAPI, and JSONPlaceholder while demonstrating TypeScript generics, reusable classes, API abstraction, strong typing, and scalable front-end architecture.

---

## ⚙️ System Requirements

Before running the project, make sure you have installed:

- 📦 **Node.js:** `v12.14.x – v14.x` *(recommended: v14.21.3 LTS)*
- 📦 **npm:** `v6+` *(compatible with the specified Node.js version)*
- 🅰️ **Angular CLI:** `v12.x`

---

## 🔍 Verify Installed Versions

Run the following commands in your terminal:

```bash
node -v
npm -v
ng version
```

---

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

---

## ▶️ Run the Project

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

## 🧠 Project Architecture

The application follows a modular architecture based on reusable classes and strongly typed interfaces.

### 📦 API Class

Responsible for:

* API communication
* Endpoint generation
* Request execution
* Response processing
* Error handling

### 📦 UI Class

Responsible for:

* Rendering dynamic content
* Infinite scroll management
* Pagination handling
* Intersection Observer integration
* Loading state control

### 📦 Card Component

Responsible for:

* Reusable card rendering
* Dynamic content presentation
* UI consistency

### 📦 Interfaces

Responsible for:

* API response contracts
* Type safety
* Component data structures

### 📦 Main Module

Responsible for:

* Application bootstrap
* Dependency initialization
* Component orchestration

---

## ✨ Features

* ♾️ Infinite scrolling
* 📸 Unsplash image gallery
* 🔴 PokéAPI integration
* 📝 JSONPlaceholder integration
* 📡 Multiple API consumption
* ⚡ Dynamic content loading
* 🎯 Strong typing with TypeScript
* 🧩 Reusable UI components
* 👀 Intersection Observer API
* 📦 Generic and reusable classes
* 🚀 Modular architecture

---

## 🛠 Technologies Used

| Technology                | Purpose           |
| ------------------------- | ----------------- |
| TypeScript                | Application Logic |
| Vite                      | Build Tool        |
| Fetch API                 | HTTP Requests     |
| Intersection Observer API | Infinite Scroll   |
| HTML5                     | Structure         |
| CSS3                      | Styling           |

---

## 📁 Project Structure

```text
typescript-infinite-scroll-dashboard/

├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── hero.png
│   │   ├── typescript.svg
│   │   └── vite.svg
│   │
│   ├── classes/
│   │   ├── api.ts
│   │   └── ui.ts
│   │
│   ├── components/
│   │   └── card.component.ts
│   │
│   ├── interfaces/
│   │   ├── api/
│   │   │   ├── api.jsonplaceholder.interface.ts
│   │   │   ├── api.pokemons.interface.ts
│   │   │   └── api.unsplash.interface.ts
│   │   │
│   │   └── ui/
│   │       └── card.interface.ts
│   │
│   └── main.ts
│
├── handleError.ts
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔥 Best Practices Implemented

* TypeScript generics
* Strong typing with interfaces
* Separation of concerns
* Reusable class architecture
* Component-based design
* Async/Await patterns
* Error handling abstraction
* Infinite scroll optimization
* Intersection Observer implementation
* Modular project organization
* Scalable code structure

---

## 🎯 Project Goal

Practice and strengthen advanced TypeScript concepts through the implementation of a real-world dashboard application:

* API Consumption
* TypeScript Generics
* Interface Design
* Reusable Components
* Infinite Scroll
* Strong Typing
* Front-End Architecture
* Asynchronous Programming
* Performance Optimization

---

## 📄 License

This project is intended for educational and portfolio purposes.

Created by **Alondra Francisco**.
