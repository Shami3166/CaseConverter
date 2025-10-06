import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load all pages
const Home = lazy(() => import("../pages/index"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
