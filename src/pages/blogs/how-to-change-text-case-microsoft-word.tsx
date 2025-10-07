import { Helmet } from "react-helmet-async";
import CaseConverter from "@/components/CaseConverter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Share2,
  Clock,
  Calendar,
  Tags,
  ExternalLink,
  Keyboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MicrosoftWordCaseGuide = () => {
  const navigate = useNavigate();

  // ✅ Target Keywords
  const keywords = [
    "change text case microsoft word",
    "word uppercase lowercase",
    "microsoft word capitalization",
    "shift f3 word",
    "word change case button",
    "text case converter word",
    "word formatting tips",
    "title case word",
    "sentence case microsoft word",
    "word keyboard shortcuts",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <Helmet>
        <title>How to Change Text Case in Microsoft Word - CaseConverter</title>
        <meta
          name="description"
          content="Complete guide to change text case in Microsoft Word. Learn toolbar options, Shift+F3 shortcut, and quick online conversion methods with examples."
        />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="How to Change Text Case in Microsoft Word - Complete Guide"
        />
        <meta
          property="og:description"
          content="Master Microsoft Word text case conversion with toolbar, shortcuts, and online tools. Fix capitalization instantly."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/msWord.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microsoft Word Text Case Guide" />
        <meta
          name="twitter:description"
          content="Change text case in Word instantly with shortcuts and tools."
        />
      </Helmet>

      <div className="container mx-auto  max-w-4xl">
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
                src="/msWord.webp"
                alt="Microsoft Word Text Case Conversion - Change Case Options"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Blog Header */}
            <div className="p-8 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Microsoft Word
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
                  Keyboard Shortcuts
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  Case Converter
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                📝 How to Change Text Case in Microsoft Word
              </h1>

              <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-4">
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
              <div className="flex items-start gap-2 mb-4 p-2 bg-gray-50 rounded-lg border">
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
                {/* Introduction */}
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-2 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    Have you ever finished typing a document and realized your{" "}
                    <strong>capitalization is all wrong</strong>? Microsoft Word
                    makes it incredibly easy to fix text case with just a few
                    clicks.
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Whether you want to switch between{" "}
                  <strong>lowercase, UPPERCASE, or Title Case</strong>, Word has
                  built-in options and shortcuts to help you format your text
                  instantly — no retyping required.
                </p>

                {/* Why Section */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🔹</span>
                    Why Text Case Matters in Microsoft Word
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Proper capitalization isn't just about style — it affects
                    readability, tone, and professionalism:
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-mono text-red-600 mb-2">ALL CAPS</p>
                      <p>Looks like shouting and can be hard to read</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-mono text-gray-600 mb-2">lowercase</p>
                      <p>Can appear casual or unfinished</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-mono text-green-600 mb-2">
                        Title Case
                      </p>
                      <p>Makes headings look neat and balanced</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-mono text-blue-600 mb-2">
                        Sentence case
                      </p>
                      <p>Gives paragraphs a natural, professional flow</p>
                    </div>
                  </div>
                </div>

                {/* Method 1: Toolbar */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-2 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">🔹</span>
                    Method 1: Change Text Case Using the Toolbar
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Microsoft Word includes a simple "Change Case" button right
                    in the toolbar.
                  </p>

                  <div className="bg-green-50 rounded-lg p-2 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      🎯 Step-by-Step:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Select the text you want to modify</li>
                      <li>
                        Go to the <strong>Home tab</strong> in the top menu
                      </li>
                      <li>
                        In the <strong>Font group</strong>, find the{" "}
                        <strong>Change Case (Aa)</strong> button
                      </li>
                      <li>Click it and choose your option</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-2">
                    <p className="text-blue-800 font-medium mb-2">
                      📋 Available Options:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>Sentence case</strong> – Capitalizes only the
                        first letter
                      </li>
                      <li>
                        <strong>lowercase</strong> – All letters lowercase
                      </li>
                      <li>
                        <strong>UPPERCASE</strong> – All letters capitalized
                      </li>
                      <li>
                        <strong>Capitalize Each Word</strong> – Title Case
                      </li>
                      <li>
                        <strong>tOGGLE cASE</strong> – Switches
                        capital/lowercase
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Method 2: Keyboard Shortcut */}
                <div className="mb-8 bg-white border border-purple-200 rounded-lg p-2 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🔹</span>
                    Method 2: Use Keyboard Shortcuts (Fastest)
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you often need to switch text cases, this shortcut will
                    save you tons of time.
                  </p>

                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-2 text-center mb-4">
                    <Keyboard
                      size={32}
                      className="mx-auto mb-3 text-purple-600"
                    />
                    <code className="text-2xl font-bold text-purple-800 bg-white px-4 py-2 rounded border">
                      Shift + F3
                    </code>
                    <p className="text-purple-700 mt-2">
                      The ultimate Word case changing shortcut
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-2 mb-4">
                    <p className="text-purple-800 font-medium mb-2">
                      ⚡ How it works:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Select the text</li>
                      <li>
                        Press <strong>Shift + F3 once</strong> → changes to
                        lowercase
                      </li>
                      <li>
                        Press it <strong>again</strong> → changes to UPPERCASE
                      </li>
                      <li>
                        Press it a <strong>third time</strong> → changes to
                        Capitalize Each Word
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-800 font-medium mb-2">
                      🧪 Example:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>"this is a title"</strong>
                      </p>
                      <p className="text-green-600">
                        → Press Shift+F3 → <strong>"THIS IS A TITLE"</strong>
                      </p>
                      <p className="text-blue-600">
                        → Press again → <strong>"This Is A Title"</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-4 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    🚀 Quick Online Solution
                  </h3>
                  <p className="text-orange-100 text-center mb-6 text-lg">
                    Need to format text before pasting into Word? Use our free{" "}
                    <strong>online case converter tool</strong> for instant
                    results!
                  </p>
                  <div className="bg-white rounded-xl p-1 shadow-2xl">
                    <CaseConverter />
                  </div>
                  <div className="text-center mt-4">
                    <Button asChild variant="secondary" size="sm">
                      <a
                        href="https://case-converter-tool.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 mx-auto"
                      >
                        Visit Full Tool <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Method 3: Find and Replace */}
                <div className="mb-8 bg-white border border-blue-200 rounded-lg p-2 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">🔹</span>
                    Method 3: Find and Replace for Consistency
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If your document has inconsistent capitalization, use Find
                    and Replace for uniform formatting.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-2">
                    <p className="text-blue-800 font-medium mb-2">
                      🔍 How to use:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>
                        Press <strong>Ctrl + H</strong> to open Find and Replace
                      </li>
                      <li>
                        Find specific phrases that need consistent
                        capitalization
                      </li>
                      <li>Replace them with the correct case version</li>
                    </ol>
                    <p className="text-gray-700 mt-3">
                      Perfect for handling brand names, job titles, or headings
                      throughout your document.
                    </p>
                  </div>
                </div>

                {/* Method 4: Online Tool */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-2 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">🔹</span>
                    Method 4: Use Online Tool for Quick Conversion
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Perfect for writers, bloggers, or students who work across
                    different editors.
                  </p>

                  <div className="bg-green-50 rounded-lg p-2">
                    <p className="text-green-800 font-medium mb-2">
                      🌐 Why use online tools:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Format text before pasting into Word</li>
                      <li>
                        Consistent capitalization across emails, articles, web
                        content
                      </li>
                      <li>Works on any device, no software needed</li>
                      <li>Instant results with one click</li>
                    </ul>
                  </div>
                </div>

                {/* Bonus Tips */}
                <div className="mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    💡 Professional Formatting Tips
                  </h2>
                  <p className="text-indigo-100 text-center mb-6 text-lg">
                    For reports, blogs, or academic papers, follow these
                    guidelines:
                  </p>

                  <div className="bg-white rounded-xl p-2 text-gray-800 mb-4">
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="text-center p-2 border rounded-lg">
                        <p className="font-bold text-green-600 mb-2">
                          Headings
                        </p>
                        <p>
                          Use <strong>Title Case</strong>
                          <br />
                          (e.g., "How to Write an Effective Report")
                        </p>
                      </div>
                      <div className="text-center p-2 border rounded-lg">
                        <p className="font-bold text-blue-600 mb-2">
                          Paragraphs
                        </p>
                        <p>
                          Use <strong>Sentence Case</strong>
                          <br />
                          for natural reading flow
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-indigo-100 text-center">
                    Consistent style improves appearance and readability —
                    something editors and teachers appreciate.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    ✅ Final Thoughts
                  </h2>
                  <p className="text-gray-700 text-lg mb-4">
                    Changing text case in <strong>Microsoft Word</strong> is
                    fast and easy once you know where to look. No more retyping
                    or manually fixing each word.
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 mb-6">
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-semibold text-green-600">
                        Quick Methods:
                      </p>
                      <p>Toolbar button & Shift+F3 shortcut</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border">
                      <p className="font-semibold text-blue-600">
                        Advanced Options:
                      </p>
                      <p>Find & Replace + Online tools</p>
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <a
                      href="https://case-converter-tool.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Try Free Case Converter <ExternalLink size={16} />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Share & Keywords Footer */}
              <div className="flex flex-col gap-2 mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-600">
                    Share this guide:
                  </span>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 mx-auto mt-2"
                  >
                    <Share2 size={16} />
                    Share Word Case Guide
                  </Button>
                </div>

                {/* ✅ All Keywords Display */}
                <div className="bg-gray-50 rounded-lg p-2">
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

export default MicrosoftWordCaseGuide;
