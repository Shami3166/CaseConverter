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
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CommonTextCaseMistakes = () => {
  const navigate = useNavigate();

  // ✅ Target Keywords
  const keywords = [
    "text case mistakes",
    "common capitalization errors",
    "fix text case",
    "uppercase lowercase mistakes",
    "title case errors",
    "sentence case formatting",
    "capitalization rules",
    "text formatting mistakes",
    "case converter tool",
    "professional writing tips",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 py-8">
      <Helmet>
        <title>
          5 Common Text Case Mistakes and How to Fix Them - CaseConverter
        </title>
        <meta
          name="description"
          content="Avoid these 5 common text case mistakes in your writing. Learn how to fix capitalization errors and make your content look professional with our case converter tool."
        />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="5 Common Text Case Mistakes and How to Fix Them"
        />
        <meta
          property="og:description"
          content="Fix capitalization errors in your writing. Learn common text case mistakes and how to avoid them with our free case converter tool."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/mistakes.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="5 Common Text Case Mistakes to Avoid"
        />
        <meta
          name="twitter:description"
          content="Fix text capitalization errors and improve your writing instantly."
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
            <div className="w-full h-64 bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
              <img
                src="/mistakes.webp"
                alt="Common Text Case Mistakes - Fix Capitalization Errors"
                className="w-48 h-48 object-contain"
              />
            </div>

            {/* Blog Header */}
            <div className="p-8 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  Writing Tips
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800"
                >
                  Common Mistakes
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Case Converter
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Professional Writing
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                ✍️ 5 Common Text Case Mistakes and How to Fix Them
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>4 min read</span>
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
                <div className="bg-orange-50 border-l-4 border-orange-500 pl-4 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    Have you ever written something important and later noticed
                    your <strong>capitalization looked inconsistent</strong>?
                    You're not alone. Learn how to fix common{" "}
                    <strong>text case mistakes</strong> easily.
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Many writers, students, and professionals make simple{" "}
                  <strong>text case mistakes</strong> that can make their work
                  look unpolished. The good news? These{" "}
                  <strong>capitalization errors</strong> are easy to fix once
                  you know what to look for.
                </p>

                {/* Mistake 1 */}
                <div className="mb-8 bg-white border border-red-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-red-600">🔹</span>
                    1. Using ALL CAPS Everywhere
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Typing everything in <strong>ALL CAPS</strong> is one of the
                    most common and distracting <strong>text mistakes</strong>.
                    While it might seem like a good way to emphasize your point,
                    it actually gives the impression that you're shouting.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-2">❌ Example:</p>
                    <p className="text-red-700 font-mono">
                      PLEASE SEND THE FILE BEFORE NOON.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      ✅ Corrected:
                    </p>
                    <p className="text-green-700">
                      Please send the file before noon.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🛠️ How to Fix It:
                    </p>
                    <p className="text-gray-700">
                      If you've already written a full paragraph in uppercase,
                      don't waste time retyping it. Simply paste it into our{" "}
                      <strong>case converter tool</strong> and switch it to
                      sentence case or title case in seconds.
                    </p>
                  </div>
                </div>

                {/* Mistake 2 */}
                <div className="mb-8 bg-white border border-orange-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-orange-600">🔹</span>
                    2. Forgetting to Capitalize Proper Nouns
                  </h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Proper nouns</strong> — like names of people,
                    brands, and places — always start with a capital letter.
                    Forgetting to capitalize them can make your writing look
                    careless.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-2">❌ Example:</p>
                    <p className="text-red-700">
                      I met john from microsoft last week in london.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      ✅ Corrected:
                    </p>
                    <p className="text-green-700">
                      I met John from Microsoft last week in London.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🛠️ How to Fix It:
                    </p>
                    <p className="text-gray-700">
                      Always double-check names and places before finalizing
                      your text. If you use an online text editor or grammar
                      checker, it often highlights missed capitalizations.
                    </p>
                  </div>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    🚀 Fix All Case Mistakes Instantly
                  </h3>
                  <p className="text-blue-100 text-center mb-6 text-lg">
                    Tired of manual corrections? Use our free{" "}
                    <strong>online case converter tool</strong> to fix all text
                    case mistakes in seconds!
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

                {/* Mistake 3 */}
                <div className="mb-8 bg-white border border-yellow-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-yellow-600">🔹</span>
                    3. Inconsistent Title Formatting
                  </h2>
                  <p className="text-gray-700 mb-4">
                    When writing blog titles, headings, or academic papers, many
                    people mix up{" "}
                    <strong>title case, sentence case, and all caps</strong> —
                    making their work look inconsistent.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-2">❌ Example:</p>
                    <p className="text-red-700 font-mono">
                      "how To Write A GOOD Blog POST"
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      ✅ Corrected:
                    </p>
                    <p className="text-green-700">
                      "How to Write a Good Blog Post"
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🛠️ How to Fix It:
                    </p>
                    <p className="text-gray-700">
                      Stick to <strong>Title Case for your headings</strong>. If
                      you're unsure, use our{" "}
                      <strong>case conversion tool</strong> — it automatically
                      formats your titles correctly, saving time and keeping
                      your writing uniform.
                    </p>
                  </div>
                </div>

                {/* Mistake 4 */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">🔹</span>
                    4. Forgetting to Capitalize the First Word
                  </h2>
                  <p className="text-gray-700 mb-4">
                    This is a small but noticeable mistake, especially in
                    essays, messages, or blog paragraphs. It usually happens
                    when people are typing quickly or using mobile devices.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-2">❌ Example:</p>
                    <p className="text-red-700">
                      it's easy to forget capitalization when typing fast.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      ✅ Corrected:
                    </p>
                    <p className="text-green-700">
                      It's easy to forget capitalization when typing fast.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🛠️ How to Fix It:
                    </p>
                    <p className="text-gray-700">
                      Always proofread your text before publishing.
                      Alternatively, paste your text into our free{" "}
                      <strong>online case converter</strong> and choose{" "}
                      <strong>Sentence Case</strong> — it automatically
                      capitalizes the first word of every sentence.
                    </p>
                  </div>
                </div>

                {/* Mistake 5 */}
                <div className="mb-8 bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🔹</span>
                    5. Overusing Random Capital Letters
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Some people use capital letters for emphasis — but doing
                    this too often breaks the visual flow and looks
                    unprofessional.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-medium mb-2">❌ Example:</p>
                    <p className="text-red-700">
                      Our New Product Is The Best Choice For Students.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <p className="text-green-800 font-medium mb-2">
                      ✅ Corrected:
                    </p>
                    <p className="text-green-700">
                      Our new product is the best choice for students.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      🛠️ How to Fix It:
                    </p>
                    <p className="text-gray-700">
                      Capitalize only where necessary — at the beginning of
                      sentences or for proper nouns. Avoid using capital letters
                      for stylistic emphasis; instead, use bold or italics to
                      highlight important words.
                    </p>
                  </div>
                </div>

                {/* Bonus Tips */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-center">
                    💡 Bonus Tip: Keep Formatting Consistent
                  </h2>
                  <p className="text-green-100 text-center mb-6 text-lg">
                    Even if your capitalization is correct, inconsistent text
                    case across different sections can make your content look
                    unbalanced.
                  </p>

                  <div className="bg-white rounded-xl p-6 text-gray-800 mb-4">
                    <h3 className="text-xl font-bold mb-3 text-green-800">
                      Best Practice:
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Use <strong>Title Case</strong> for main headings
                      </li>
                      <li>
                        Use <strong>Sentence Case</strong> for paragraphs and
                        body text
                      </li>
                      <li>
                        Use <strong>Uppercase</strong> only for emphasis or
                        short labels
                      </li>
                    </ul>
                  </div>

                  <p className="text-green-100 text-center">
                    You can quickly standardize your formatting using our{" "}
                    <strong>online case converter tool</strong> — paste your
                    entire text, pick the desired case style, and copy it back
                    instantly.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    ✅ Final Thoughts
                  </h2>
                  <p className="text-gray-700 text-lg mb-4">
                    <strong>Capitalization mistakes</strong> are small but can
                    make a big difference in how your writing is perceived. The
                    goal isn't perfection — it's clarity and consistency.
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    By avoiding these five common{" "}
                    <strong>text case errors</strong> and using a reliable tool
                    like our <strong>Case Converter Tool</strong>, you can
                    instantly fix your text, improve readability, and make your
                    content look more professional.
                  </p>
                  <Button asChild size="lg">
                    <a
                      href="https://case-converter-tool.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Try Case Converter Tool <ExternalLink size={16} />
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
                    Share Common Mistakes Guide
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

export default CommonTextCaseMistakes;
