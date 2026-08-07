import React from 'react';
import AppRouter from './router';
import './index.css';

/**
 * App Component
 * 
 * Purpose: Root component of the application
 * 
 * This component:
 * - Wraps the entire app with Router
 * - Imports global styles
 * - Serves as the entry point for all routes
 */
function App() {
  return <AppRouter />;
}

export default App;
