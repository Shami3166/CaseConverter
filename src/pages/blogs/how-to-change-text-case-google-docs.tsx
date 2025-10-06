import { Helmet } from "react-helmet-async";
import CaseConverter from "@/components/CaseConverter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Clock, Calendar, Tags } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const keywords = [
  "change text case google docs",
  "google docs uppercase lowercase",
  "text case converter",
  "capitalization google docs",
  "how to change case in docs",
  "google docs formatting",
  "text capitalization",
  "uppercase to lowercase docs",
  "title case google docs",
  "sentence case converter",
];
const GoogleDocsCaseGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <Helmet>
        <title>
          How to Change Text Case in Google Docs - CaseConverter Tool
        </title>
        <meta
          name="description"
          content="Step-by-step guide to change text case in Google Docs. Learn how to convert uppercase, lowercase, title case, and sentence case with screenshots and examples."
        />
        <meta
          name="keywords"
          content="change text case google docs,google docs uppercase lowercase,text case converter,capitalization google docs,how to change case in docs,
google docs formatting,text capitalization,uppercase to lowercase docs,title case google docs,sentence case converter,"
        />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="How to Change Text Case in Google Docs - CaseConverter"
        />
        <meta
          property="og:description"
          content="Learn to change text case in Google Docs with our complete guide. Free case converter tool included."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/docsCase.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Docs Text Case Guide" />
        <meta
          name="twitter:description"
          content="Change text case in Google Docs easily. Free online tool available."
        />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Button>

        {/* Main Blog Card */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
          <CardContent className="p-0">
            {/* Hero Image */}
            <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
              <img
                src="/docsCase.webp"
                alt="Google Docs Text Case Conversion - Uppercase, Lowercase, Title Case"
                className="w-32 h-32 object-contain"
              />
            </div>

            {/* Blog Header */}
            <div className="p-8 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Google Docs
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Tutorial
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Text Formatting
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  Case Converter
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                How to Change Text Case in Google Docs
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>

              {/* ✅ Keywords Tags Section */}
              <div className="flex items-start gap-2 mb-4 p-4 bg-gray-50 rounded-lg border">
                <Tags size={16} className="text-gray-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-gray-700 block mb-2">
                    Target Keywords:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {keywords.slice(0, 6).map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-white"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="px-8 pb-8">
              <div className="prose prose-lg max-w-none">
                {/* Introduction - Include Keywords Naturally */}
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    Learn how to{" "}
                    <strong>change text case in Google Docs</strong> when you
                    realize your text is in the wrong case. No need to rewrite
                    everything!
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  <strong>Google Docs text case conversion</strong> is super
                  easy with just a few clicks. In this guide, you'll learn how
                  to <strong>change text from lowercase to uppercase</strong>,
                  use <strong>title case in Google Docs</strong>, or apply{" "}
                  <strong>sentence case formatting</strong>.
                </p>

                {/* Why Section */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🔹</span>
                    Why Change Text Case in Google Docs?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Proper <strong>text capitalization in Google Docs</strong>{" "}
                    isn't just about looks — it's about clarity and
                    professionalism:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>UPPERCASE</strong> can look like shouting in
                      documents
                    </li>
                    <li>
                      <strong>lowercase</strong> may appear casual or
                      unprofessional
                    </li>
                    <li>
                      <strong>Title Case formatting</strong> makes your headings
                      stand out
                    </li>
                    <li>
                      <strong>Sentence case converter</strong> gives natural
                      reading flow
                    </li>
                  </ul>
                </div>

                {/* Method 1 - Optimized for Keywords */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">🔹</span>
                    Method 1: Built-In Google Docs Case Change Feature
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Use the built-in <strong>Google Docs capitalization</strong>{" "}
                    option for quick <strong>text case conversion</strong>:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-green-500">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        Open your document in <strong>Google Docs</strong>
                      </li>
                      <li>
                        Select the text you want to <strong>change case</strong>
                      </li>
                      <li>
                        Click <strong>Format → Text → Capitalization</strong>
                      </li>
                      <li>
                        Choose from:
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>
                            <strong>lowercase</strong> – for all lowercase
                            letters
                          </li>
                          <li>
                            <strong>UPPERCASE</strong> – for uppercase text
                            conversion
                          </li>
                          <li>
                            <strong>Title Case</strong> – perfect for headings
                            capitalization
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    🚀 Quick Online Case Converter Solution
                  </h3>
                  <p className="text-blue-100 text-center mb-6 text-lg">
                    Need faster <strong>text case conversion</strong>? Use our
                    free <Link to="/">online case converter tool</Link> — works
                    anywhere!
                  </p>
                  <div className="bg-white rounded-xl p-1 shadow-2xl">
                    <CaseConverter />
                  </div>
                  <p className="text-blue-100 text-center mt-4 text-sm">
                    Perfect for{" "}
                    <strong>uppercase to lowercase conversion</strong>,{" "}
                    <strong>title case formatting</strong>, and{" "}
                    <strong>sentence case editing</strong>.
                  </p>
                </div>

                {/* Method 2 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-orange-600">🔹</span>
                    Method 2: Google Docs Add-ons for Case Changing
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For frequent{" "}
                    <strong>text case changes in Google Docs</strong>, install
                    dedicated add-ons:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-orange-500">
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>
                        Go to{" "}
                        <strong>Extensions → Add-ons → Get add-ons</strong>
                      </li>
                      <li>Search for "Change Case" or "Case Converter"</li>
                      <li>Install and authorize the add-on</li>
                      <li>
                        Select text and use{" "}
                        <strong>Extensions → Change Case</strong>
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Method 3 */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🔹</span>
                    Method 3: Online Text Case Converter Tools
                  </h2>
                  <p className="text-gray-700 mb-4">
                    For work outside{" "}
                    <strong>Google Docs text formatting</strong>, use online{" "}
                    <strong>case conversion tools</strong>:
                  </p>
                  <p className="text-gray-700 mb-4">
                    Copy text from <strong>Google Docs</strong>, paste into a{" "}
                    <strong>case converter</strong>, choose your format, and
                    paste back. Perfect for{" "}
                    <strong>uppercase lowercase conversion</strong> across
                    platforms.
                  </p>
                </div>

                {/* Bonus Tips */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    💡 Google Docs Formatting Best Practices
                  </h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Use <strong>Title Case in Google Docs</strong> for
                      headings
                    </li>
                    <li>
                      Apply <strong>sentence case formatting</strong> for body
                      text
                    </li>
                    <li>
                      Avoid <strong>ALL CAPS text</strong> in professional
                      documents
                    </li>
                    <li>
                      Use <strong>case conversion tools</strong> for consistency
                    </li>
                  </ul>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    ✅ Google Docs Case Change Summary
                  </h2>
                  <p className="text-gray-700 text-lg">
                    Now you know how to{" "}
                    <strong>change text case in Google Docs</strong> using
                    built-in features, add-ons, or online{" "}
                    <strong>case converter tools</strong>.
                  </p>
                  <p className="text-gray-700 mt-4 text-lg">
                    Proper <strong>text capitalization</strong> shows
                    professionalism and attention to detail in all your
                    documents.
                  </p>
                </div>
              </div>

              {/* Share & Keywords Footer */}
              <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-600">
                    Share this guide:
                  </span>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 mx-auto mt-2"
                  >
                    <Share2 size={16} />
                    Share Google Docs Case Guide
                  </Button>
                </div>

                {/* ✅ All Keywords Display */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Tags size={14} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      All Target Keywords:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-white text-gray-600"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoogleDocsCaseGuide;
