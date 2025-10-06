import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Lazy load the main App component
const App = lazy(() => import("./App.tsx"));

// Simple loading component
// eslint-disable-next-line react-refresh/only-export-components
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading Case Converter...</p>
    </div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>
);
