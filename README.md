# Vite React App

<p align="center">
  <img src="./client/src/assets/react.svg" alt="React Logo" width="90" />
  &nbsp;&nbsp;&nbsp;
  <img src="./client/public/favicon.svg" alt="Vite Logo" width="75" />
</p>

A simple full-stack application built with React, Vite, and Express that connects a frontend interface to a backend API.

## Features

- Built a React frontend using Vite
- Built an Express backend server
- Connected frontend and backend using `fetch()`
- Displays a backend message on the frontend
- Uses a clean client/server project structure
- Runs frontend and backend together with one command
- Improved the frontend with a modern dark UI
- Uses Git with a separate working branch

## Technologies Used

- React
- Vite
- Node.js
- Express
- CORS
- Dotenv
- Nodemon
- Concurrently

## Project Structure

- `client/` - React frontend
- `client/src/App.jsx` - main frontend component
- `client/src/App.css` - component styling
- `client/src/index.css` - global styling
- `client/src/assets/` - frontend images and SVG files
- `client/index.html` - Vite HTML entry file
- `client/vite.config.js` - Vite configuration
- `server/index.js` - Express server
- `server/.env` - environment variables
- `package.json` - root project scripts and backend dependencies
- `.gitignore` - ignored files and folders

## Installation

1. Clone the repository
2. Run `npm install`
3. Go to the client folder and run `npm install`
4. Create a `server/.env` file with:

```env
PORT=3000
```