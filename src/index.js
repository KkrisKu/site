import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";

import { store } from "./features/store";
import App from './App/App';


createRoot(document.getElementById("root")).render(
<Provider>
    <BrowserRouter store={store}>
       <App />
    </BrowserRouter>
</Provider>

);
