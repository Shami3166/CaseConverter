import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

// ✅ DIRECT IMPORTS for critical components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Only lazy load routes (pages)
const AppRoutes = lazy(() => import("./routes/appRoutes"));

// Simple loading for routes only
const RouteLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-64">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading content...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          {/* ✅ No lazy loading for Navbar/Footer */}
          <Navbar />

          <main className="flex-grow">
            {/* ✅ Only routes are lazy loaded */}
            <Suspense fallback={<RouteLoader />}>
              <AppRoutes />
            </Suspense>
          </main>

          <Footer />
        </div>

        <Toaster position="top-right" richColors />
      </Router>
    </HelmetProvider>
  );
}

export default App;
