# Product Store

A responsive product detail page built with React, TypeScript, SCSS Modules, and React Router.

## Live Demo

[Live Demo](https://your-site.vercel.app)

## Features

- Responsive product detail page
- Product image gallery with thumbnails
- Cart sidebar with:
  - quantity increment/decrement
  - item removal
  - price calculations
- Cart persistence using localStorage
- URL with color, size search params
- Context API used for global cart state management

## Tech Stack

- React
- Vite
- TypeScript
- React Router DOM
- SCSS Modules
- Context API
- Lucide React Icons
- Fake Store API

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

## Installation & Setup

```bash
npm install
npm run dev
```

## Folder Structure

```txt
src/
├── components/
├── constants/
├── context/
├── hooks/
├── router/
├── services/
├── styles/
  ├── _globals.scss
  ├── _mixins.scss
  ├── variables.scss
  ├── main.scss
├── types/
```
