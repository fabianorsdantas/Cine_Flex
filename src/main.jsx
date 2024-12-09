import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/style.css"

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'milligram/dist/milligram.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)*/