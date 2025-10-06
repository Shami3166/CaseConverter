import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load main pages
const Home = lazy(() => import("../pages/index"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("../pages/TermsOfService"));

// Lazy load blog pages
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
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Existing routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* ✅ New blog routes */}
        <Route
          path="/blog/how-to-change-text-case-google-docs"
          element={<GoogleDocsCase />}
        />
        <Route
          path="/blog/how-to-change-text-case-google-sheets"
          element={<GoogleSheetsCase />}
        />
        <Route
          path="/blog/how-to-change-text-case-microsoft-word"
          element={<MicrosoftWordCase />}
        />
        <Route
          path="/blog/common-text-case-mistakes"
          element={<CommonMistakes />}
        />
        <Route
          path="/blog/why-proper-capitalization-matters"
          element={<WhyCapitalizationMatters />}
        />
        <Route
          path="/blog/how-to-change-text-case-mobile"
          element={<MobileCaseChange />}
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
