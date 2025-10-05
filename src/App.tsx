import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/appRoutes";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>

        {/* ✅ Toast system mounted once at the root */}
        <Toaster position="top-right" richColors />
      </Router>
    </HelmetProvider>
  );
}

export default App;
