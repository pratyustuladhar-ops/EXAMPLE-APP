import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * Entry Point
 * 
 * Purpose: Mounts the React app to the DOM
 * 
 * This file:
 * - Imports the root App component
 * - Finds the #root element in index.html
 * - Renders the entire React application
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
