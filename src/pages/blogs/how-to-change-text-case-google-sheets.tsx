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
  Code,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoogleSheetsCaseGuide = () => {
  const navigate = useNavigate();

  // ✅ Target Keywords
  const keywords = [
    "change text case google sheets",
    "google sheets uppercase lowercase",
    "upper function google sheets",
    "lower function sheets",
    "proper function google sheets",
    "text case converter sheets",
    "google sheets capitalization",
    "spreadsheet text formatting",
    "sheets case conversion",
    "excel text case google sheets",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 py-8">
      <Helmet>
        <title>How to Change Text Case in Google Sheets - CaseConverter</title>
        <meta
          name="description"
          content="Complete guide to change text case in Google Sheets using UPPER, LOWER, PROPER functions. Learn formulas and quick online conversion methods with examples."
        />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="How to Change Text Case in Google Sheets - Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn Google Sheets text case formulas: UPPER, LOWER, PROPER functions. Plus quick online conversion method for instant results."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/sheets-case.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Sheets Text Case Guide" />
        <meta
          name="twitter:description"
          content="Master text case conversion in Google Sheets with formulas and tools."
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
            <div className="w-full h-64 bg-gradient-to-r from-green-600 to-teal-700 flex items-center justify-center">
              <div className="text-center text-white">
                <Code size={64} className="mx-auto mb-4" />
                <h2 className="text-3xl font-bold">Google Sheets Text Case</h2>
                <p className="text-green-100 mt-2">
                  Formulas & Functions Guide
                </p>
              </div>
            </div>

            {/* Blog Header */}
            <div className="p-8 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Google Sheets
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Formulas
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Case Converter
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  Spreadsheets
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                🔠 How to Change Text Case in Google Sheets
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>6 min read</span>
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
                {/* Introduction */}
                <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    If you work in <strong>Google Sheets</strong>, you've
                    probably faced messy text case issues. Unlike Google Docs,
                    Sheets doesn't have a direct "Change Case" button — but
                    don't worry, there are easy solutions!
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  In this guide, you'll learn how to{" "}
                  <strong>change text case in Google Sheets</strong> using
                  built-in functions, formulas, and a quick online alternative
                  for one-click conversions.
                </p>

                {/* Why Section */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🔹</span>
                    Why Change Text Case in Google Sheets?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Consistency matters — especially when dealing with reports,
                    names, titles, or shared data:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      Make your sheet look{" "}
                      <strong>clean and professional</strong>
                    </li>
                    <li>
                      Help with <strong>sorting and filtering data</strong>
                    </li>
                    <li>Improve readability for team members or clients</li>
                    <li>
                      Ensure <strong>consistent formatting</strong> across all
                      entries
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    For example, names written as{" "}
                    <strong>JOHN DOE, john doe, and John Doe</strong> look
                    inconsistent. Let's fix that!
                  </p>
                </div>

                {/* Method 1: UPPER Function */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">🔹</span>
                    Method 1: Use the UPPER Function
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you want to make all letters uppercase, use the{" "}
                    <strong>UPPER function in Google Sheets</strong>.
                  </p>

                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <code className="text-green-400 font-mono text-lg">
                      =UPPER(A1)
                    </code>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      📝 How to use it:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Click on an empty cell where you want the result</li>
                      <li>Type the formula above</li>
                      <li>
                        Replace <strong>A1</strong> with the cell that has your
                        original text
                      </li>
                      <li>
                        Press Enter, and your text will appear in uppercase
                      </li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🧪 Example:
                    </p>
                    <p className="text-gray-700">
                      If <strong>A1 = hello world</strong>
                      <br />
                      then <strong>=UPPER(A1) → HELLO WORLD</strong>
                    </p>
                  </div>
                </div>

                {/* Method 2: LOWER Function */}
                <div className="mb-8 bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">🔹</span>
                    Method 2: Use the LOWER Function
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To make all letters lowercase, use the{" "}
                    <strong>LOWER function in Google Sheets</strong>.
                  </p>

                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <code className="text-blue-400 font-mono text-lg">
                      =LOWER(A1)
                    </code>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🧪 Example:
                    </p>
                    <p className="text-gray-700">
                      If <strong>A1 = HELLO WORLD</strong>
                      <br />
                      then <strong>=LOWER(A1) → hello world</strong>
                    </p>
                    <p className="text-gray-700 mt-2 text-sm">
                      This function is useful for normalizing email addresses or
                      database entries where lowercase is preferred.
                    </p>
                  </div>
                </div>

                {/* Method 3: PROPER Function */}
                <div className="mb-8 bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🔹</span>
                    Method 3: Use the PROPER Function
                  </h2>
                  <p className="text-gray-700 mb-4">
                    To capitalize the first letter of each word (title case),
                    use the <strong>PROPER function in Google Sheets</strong>.
                  </p>

                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <code className="text-purple-400 font-mono text-lg">
                      =PROPER(A1)
                    </code>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-purple-800 font-medium mb-2">
                      🧪 Example:
                    </p>
                    <p className="text-gray-700">
                      If <strong>A1 = john doe</strong>
                      <br />
                      then <strong>=PROPER(A1) → John Doe</strong>
                    </p>
                    <p className="text-gray-700 mt-2 text-sm">
                      This is perfect for formatting names, titles, or addresses
                      neatly.
                    </p>
                  </div>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap size={24} className="text-yellow-300" />
                    <h3 className="text-2xl font-bold text-center">
                      ⚡ Quick Online Solution
                    </h3>
                  </div>
                  <p className="text-orange-100 text-center mb-6 text-lg">
                    Formulas confusing? Use our free{" "}
                    <strong>online case converter tool</strong> for instant text
                    formatting — no formulas needed!
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

                {/* Method 4: Apply to Multiple Cells */}
                <div className="mb-8 bg-white border border-yellow-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-yellow-600">🔹</span>
                    Method 4: Apply Formulas to Multiple Cells
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You don't have to convert one cell at a time. Apply formulas
                    to entire columns easily:
                  </p>

                  <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-medium mb-2">
                      🚀 Pro Tip:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Enter your formula in the first cell</li>
                      <li>
                        Drag the <strong>fill handle</strong> (small blue
                        square) down the column
                      </li>
                      <li>
                        To keep only formatted text:{" "}
                        <strong>Copy → Right-click → Paste values only</strong>
                      </li>
                    </ol>
                  </div>

                  <p className="text-gray-700">
                    This replaces formulas with actual text values in your{" "}
                    <strong>Google Sheets case conversion</strong>.
                  </p>
                </div>

                {/* Method 5: Online Tool */}
                <div className="mb-8 bg-white border border-red-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-red-600">🔹</span>
                    Method 5: Use Online Case Converter Tool (Fastest)
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you find formulas confusing or want instant results, use
                    our free <strong>online case converter tool</strong>.
                  </p>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="text-red-800 font-medium mb-2">
                      ⚡ How it works:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>
                        Copy text from <strong>Google Sheets</strong>
                      </li>
                      <li>
                        Paste into our <strong>case converter tool</strong>
                      </li>
                      <li>Choose your preferred case option</li>
                      <li>Copy formatted text and paste back into Sheets</li>
                    </ol>
                    <p className="text-gray-700 mt-3">
                      This method is quick, accurate, and works on any device —
                      perfect for <strong>bulk text case conversion</strong>.
                    </p>
                  </div>
                </div>

                {/* Bonus Tip */}
                <div className="mb-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    💡 Bonus Tip: Combine Functions
                  </h2>
                  <p className="text-purple-100 text-center mb-6 text-lg">
                    Mix formulas for advanced text cleaning in{" "}
                    <strong>Google Sheets</strong>.
                  </p>

                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <code className="text-yellow-400 font-mono text-lg">
                      =PROPER(TRIM(A1))
                    </code>
                  </div>

                  <p className="text-purple-100 text-center">
                    This removes extra spaces <strong>AND</strong> capitalizes
                    each word correctly — perfect for messy data!
                  </p>
                </div>

                {/* Summary Table */}
                <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    📊 Google Sheets Case Conversion Summary
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Goal
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Formula / Method
                          </th>
                          <th className="border border-gray-300 p-3 text-left font-semibold">
                            Example Output
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3">
                            Convert to Uppercase
                          </td>
                          <td className="border border-gray-300 p-3 font-mono bg-gray-50">
                            =UPPER(A1)
                          </td>
                          <td className="border border-gray-300 p-3">
                            HELLO WORLD
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">
                            Convert to Lowercase
                          </td>
                          <td className="border border-gray-300 p-3 font-mono bg-gray-50">
                            =LOWER(A1)
                          </td>
                          <td className="border border-gray-300 p-3">
                            hello world
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">
                            Convert to Title Case
                          </td>
                          <td className="border border-gray-300 p-3 font-mono bg-gray-50">
                            =PROPER(A1)
                          </td>
                          <td className="border border-gray-300 p-3">
                            Hello World
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3">
                            Clean and Capitalize
                          </td>
                          <td className="border border-gray-300 p-3 font-mono bg-gray-50">
                            =PROPER(TRIM(A1))
                          </td>
                          <td className="border border-gray-300 p-3">
                            John Doe
                          </td>
                        </tr>
                        <tr className="bg-green-50">
                          <td className="border border-gray-300 p-3 font-semibold">
                            Fast Online Conversion
                          </td>
                          <td className="border border-gray-300 p-3">
                            <a
                              href="https://case-converter-tool.vercel.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline flex items-center gap-1"
                            >
                              Case Converter Tool <ExternalLink size={14} />
                            </a>
                          </td>
                          <td className="border border-gray-300 p-3">
                            Any format instantly
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-teal-500 to-green-600 rounded-2xl p-8 text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">✅ Final Thoughts</h2>
                  <p className="text-teal-100 text-lg mb-4">
                    While <strong>Google Sheets</strong> doesn't have a "Change
                    Case" button, the <strong>UPPER, LOWER, and PROPER</strong>{" "}
                    functions make it easy to adjust capitalization exactly how
                    you need.
                  </p>
                  <p className="text-teal-100 text-lg mb-6">
                    Whether you want to clean up messy data, format names
                    properly, or make your sheet look professional, these
                    formulas get the job done.
                  </p>
                  <Button asChild size="lg" variant="secondary">
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
                    Share Google Sheets Guide
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

export default GoogleSheetsCaseGuide;
