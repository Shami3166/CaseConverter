import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ✅ DIRECT IMPORTS for critical pages (Home, About, Contact)
import Home from "../pages/index";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Sitemap from "@/pages/sitemap.xml";

// ✅ Lazy load for less important/heavy pages
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));

// ✅ Lazy load ALL blog pages (they're content-heavy)
const GoogleDocsCase = lazy(
  () => import("../pages/blogs/how-to-change-text-case-google-docs")
);
const GoogleSheetsCase = lazy(
  () => import("../pages/blogs/how-to-change-text-case-google-sheets")
);
const MicrosoftWordCase = lazy(
  () => import("../pages/blogs/how-to-change-text-case-microsoft-word")
);
const CommonMistakes = lazy(
  () => import("../pages/blogs/common-text-case-mistakes")
);
const WhyCapitalizationMatters = lazy(
  () => import("../pages/blogs/why-proper-capitalization-matters")
);
const MobileCaseChange = lazy(
  () => import("../pages/blogs/how-to-change-text-case-mobile")
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading page...</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* ✅ NO LAZY LOADING for critical pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sitemap.xml" element={<Sitemap />} />
      {/* ✅ LAZY LOADING for secondary pages */}
      <Route
        path="/privacy-policy"
        element={
          <Suspense fallback={<PageLoader />}>
            <PrivacyPolicy />
          </Suspense>
        }
      />
      <Route
        path="/terms-of-service"
        element={
          <Suspense fallback={<PageLoader />}>
            <TermsOfService />
          </Suspense>
        }
      />

      {/* ✅ LAZY LOADING for all blog pages */}
      <Route
        path="/blog/how-to-change-text-case-google-docs"
        element={
          <Suspense fallback={<PageLoader />}>
            <GoogleDocsCase />
          </Suspense>
        }
      />
      <Route
        path="/blog/how-to-change-text-case-google-sheets"
        element={
          <Suspense fallback={<PageLoader />}>
            <GoogleSheetsCase />
          </Suspense>
        }
      />
      <Route
        path="/blog/how-to-change-text-case-microsoft-word"
        element={
          <Suspense fallback={<PageLoader />}>
            <MicrosoftWordCase />
          </Suspense>
        }
      />
      <Route
        path="/blog/common-text-case-mistakes"
        element={
          <Suspense fallback={<PageLoader />}>
            <CommonMistakes />
          </Suspense>
        }
      />
      <Route
        path="/blog/why-proper-capitalization-matters"
        element={
          <Suspense fallback={<PageLoader />}>
            <WhyCapitalizationMatters />
          </Suspense>
        }
      />
      <Route
        path="/blog/how-to-change-text-case-mobile"
        element={
          <Suspense fallback={<PageLoader />}>
            <MobileCaseChange />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
