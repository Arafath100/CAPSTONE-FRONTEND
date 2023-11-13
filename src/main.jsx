import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Provider from "./Context/Provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 

// Create a root to render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application wrapped with BrowserRouter and Provider
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
    <ToastContainer />
  </BrowserRouter>
);
