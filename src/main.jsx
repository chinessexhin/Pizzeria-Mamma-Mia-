import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import React from 'react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
     <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
