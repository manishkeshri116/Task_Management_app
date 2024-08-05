// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18
import App from './App';
import './index.css';

// Create a root container using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component to the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
