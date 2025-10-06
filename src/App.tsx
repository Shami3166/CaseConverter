import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const AppRoutes = lazy(() => import("./routes/appRoutes"));

// Simple loading components
const NavbarLoader = () => <div className="h-16 bg-gray-100 animate-pulse" />;
const FooterLoader = () => <div className="h-20 bg-gray-100 animate-pulse" />;
const MainLoader = () => (
  <div className="flex-grow flex items-center justify-center min-h-64">
    Loading...
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Suspense fallback={<NavbarLoader />}>
            <Navbar />
          </Suspense>

          <main className="flex-grow">
            <Suspense fallback={<MainLoader />}>
              <AppRoutes />
            </Suspense>
          </main>

          <Suspense fallback={<FooterLoader />}>
            <Footer />
          </Suspense>
        </div>

        <Toaster position="top-right" richColors />
      </Router>
    </HelmetProvider>
  );
}

export default App;
