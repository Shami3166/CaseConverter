import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx"; // ✅ DIRECT IMPORT - No lazy loading
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App /> {/* ✅ No suspense wrapper for App */}
  </StrictMode>
);
