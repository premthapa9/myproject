import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CancelProvider } from "./components/Context/CancelContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CancelProvider>
      <App />
    </CancelProvider>
  </StrictMode>
);
