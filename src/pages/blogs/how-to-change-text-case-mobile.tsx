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
  Smartphone,
  Apple,
  Download,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MobileCaseChangeGuide = () => {
  const navigate = useNavigate();

  // ✅ Target Keywords
  const keywords = [
    "change text case mobile phone",
    "iphone uppercase lowercase",
    "android text case conversion",
    "mobile keyboard capitalization",
    "text case converter mobile",
    "ios android case change",
    "mobile writing tips",
    "phone text formatting",
    "mobile case converter tool",
    "smartphone capitalization",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-8">
      <Helmet>
        <title>
          How to Change Text Case on Mobile Phones (iOS & Android) -
          CaseConverter
        </title>
        <meta
          name="description"
          content="Complete guide to change text case on mobile phones. Learn iPhone and Android methods, keyboard shortcuts, and quick online conversion tools for perfect mobile formatting."
        />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="How to Change Text Case on Mobile Phones (iOS & Android)"
        />
        <meta
          property="og:description"
          content="Fix text case on iPhone and Android. Learn mobile keyboard shortcuts and use online case converter for perfect formatting anywhere."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/mobile-case.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile Text Case Guide - iOS & Android"
        />
        <meta
          name="twitter:description"
          content="Change text case on mobile phones instantly with our complete guide."
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
            <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-cyan-700 flex items-center justify-center">
              <div className="text-center text-white">
                <Smartphone size={64} className="mx-auto mb-4" />
                <h2 className="text-3xl font-bold">Mobile Text Case</h2>
                <p className="text-blue-100 mt-2">iOS & Android Guide</p>
              </div>
            </div>

            {/* Blog Header */}
            <div className="p-8 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Mobile Guide
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  iPhone
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Android
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Case Converter
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                📱 How to Change Text Case on Mobile Phones (iOS & Android)
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
                {/* Introduction */}
                <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    Have you ever typed a long message on your phone only to
                    realize you used the wrong text case? Don't worry, it
                    happens to everyone!
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Changing text case is simple on mobile devices — whether
                  you're using an <strong>iPhone (iOS) or Android</strong>. In
                  this guide, you'll learn how to quickly fix capitalization
                  mistakes right from your mobile keyboard or using an online
                  text case converter tool.
                </p>

                {/* Text Case Definitions */}
                <div className="mb-8 bg-white border border-purple-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-600">🔹</span>
                    What Does "Text Case" Mean?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Text case simply means how letters are written — in capital
                    (uppercase), small (lowercase), or mixed form.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-mono text-lg mb-2">UPPERCASE</p>
                      <p className="text-gray-700">
                        Every letter is capitalized
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-mono text-lg mb-2">lowercase</p>
                      <p className="text-gray-700">All letters are small</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-mono text-lg mb-2">Title Case</p>
                      <p className="text-gray-700">
                        First letter of each major word capitalized
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-mono text-lg mb-2">Sentence case</p>
                      <p className="text-gray-700">
                        Only first letter of first word capitalized
                      </p>
                    </div>
                  </div>
                </div>

                {/* iPhone Section */}
                <div className="mb-8 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Apple size={32} className="text-gray-800" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      How to Change Text Case on iPhone (iOS)
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Apple makes it easy to manage capitalization using the
                    built-in iOS keyboard.
                  </p>

                  {/* Method 1: Auto-Capitalization */}
                  <div className="mb-6 bg-blue-50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      1. Enable or Disable Auto-Capitalization
                    </h3>
                    <p className="text-gray-700 mb-3">
                      iPhones automatically capitalize the first word of a
                      sentence.
                    </p>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-blue-800 font-medium mb-2">
                        📱 Steps:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          Open <strong>Settings → General → Keyboard</strong>
                        </li>
                        <li>
                          Turn <strong>Auto-Capitalization ON or OFF</strong>
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Method 2: Shift Key */}
                  <div className="mb-6 bg-green-50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      2. Use the Shift Key for Quick Capitalization
                    </h3>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-green-800 font-medium mb-2">
                        ⌨️ Keyboard Shortcuts:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                          Tap <strong>Shift (⬆) once</strong> → Capitalize next
                          letter
                        </li>
                        <li>
                          Double-tap <strong>Shift</strong> → Caps Lock (all
                          uppercase)
                        </li>
                        <li>
                          Tap <strong>Shift again</strong> → Turn off Caps Lock
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Method 3: Apps */}
                  <div className="mb-4 bg-purple-50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      3. Use Text Editing Apps
                    </h3>
                    <p className="text-gray-700">
                      Copy your text and use{" "}
                      <strong>Notes, Pages, or Word App</strong> for manual case
                      changes.
                    </p>
                  </div>
                </div>

                {/* Android Section */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Download size={32} className="text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      How to Change Text Case on Android Phones
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Android devices come with various keyboards (Gboard, Samsung
                    Keyboard, SwiftKey) with similar functionality.
                  </p>

                  {/* Method 1: Shift Key */}
                  <div className="mb-6 bg-green-50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      1. Use Shift Key for Quick Caps
                    </h3>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-green-800 font-medium mb-2">
                        ⌨️ Works in WhatsApp, Gmail, Notes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>
                          Tap <strong>Shift once</strong> → Capitalize one
                          letter
                        </li>
                        <li>
                          Double-tap <strong>Shift</strong> → Caps Lock
                        </li>
                        <li>Tap again → Turn off Caps Lock</li>
                      </ul>
                    </div>
                  </div>

                  {/* Method 2: Auto-Capitalization */}
                  <div className="mb-6 bg-blue-50 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      2. Turn Auto-Capitalization On/Off
                    </h3>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-blue-800 font-medium mb-2">
                        ⚙️ Settings Path:
                      </p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          Open{" "}
                          <strong>Settings → System → Languages & Input</strong>
                        </li>
                        <li>
                          <strong>
                            On-Screen Keyboard → Gboard → Text Correction
                          </strong>
                        </li>
                        <li>
                          Toggle <strong>Auto-Capitalization ON</strong>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-white mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap size={24} className="text-yellow-300" />
                    <h3 className="text-2xl font-bold text-center">
                      🚀 Universal Mobile Solution
                    </h3>
                  </div>
                  <p className="text-orange-100 text-center mb-6 text-lg">
                    Android doesn't have built-in case changing? Use our free{" "}
                    <strong>online case converter tool</strong> — works
                    perfectly on all mobile browsers!
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
                        Open on Mobile <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Why It Matters */}
                <div className="mb-8 bg-white border border-yellow-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🔹 Why Changing Text Case Matters on Mobile
                  </h2>

                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="font-mono text-red-600 mb-2">ALL CAPS</p>
                      <p className="text-gray-700 text-sm">
                        Looks like shouting
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="font-mono text-gray-600 mb-2">lowercase</p>
                      <p className="text-gray-700 text-sm">
                        Too casual or lazy
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-mono text-green-600 mb-2">
                        Proper Case
                      </p>
                      <p className="text-gray-700 text-sm">
                        Shows professionalism
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-4 text-center">
                    Whether you're writing emails, social media posts, or
                    documents, correct text case makes your writing{" "}
                    <strong>clear, confident, and respectful</strong>.
                  </p>
                </div>

                {/* Bonus Online Tool */}
                <div className="mb-8 bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🔹 Bonus: Use Free Online Tool for Quick Conversion
                  </h2>

                  <p className="text-gray-700 mb-4">
                    Instead of manually fixing each letter, save time using our{" "}
                    <strong>Case Converter Tool</strong>.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 font-medium mb-2">
                      📲 Perfect for Mobile:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Copy your text from any app</li>
                      <li>Paste into our case converter tool</li>
                      <li>
                        Choose UPPERCASE, lowercase, Title Case, or Sentence
                        case
                      </li>
                      <li>Copy converted text and use anywhere</li>
                    </ol>
                    <p className="text-gray-700 mt-3">
                      Works on both <strong>iOS and Android</strong>, perfect
                      for students, bloggers, and professionals.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">✅ Final Thoughts</h2>
                  <p className="text-cyan-100 text-lg mb-4">
                    Changing text case on mobile phones is simple once you know
                    the right shortcuts. Both iPhone and Android offer built-in
                    capitalization features, but for full control — especially
                    with long paragraphs — online tools are your best choice.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                      <p className="font-semibold">Mobile Methods:</p>
                      <ul className="text-left text-cyan-100 space-y-1 mt-2">
                        <li>• Shift key shortcuts</li>
                        <li>• Auto-capitalization settings</li>
                        <li>• Text editing apps</li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                      <p className="font-semibold">Best Solution:</p>
                      <p className="text-cyan-100 mt-2">
                        Use our{" "}
                        <strong>mobile-optimized Case Converter Tool</strong>{" "}
                        for instant, perfect formatting.
                      </p>
                    </div>
                  </div>

                  <p className="text-cyan-100 text-lg mb-6">
                    Proper capitalization makes your mobile content more{" "}
                    <strong>readable, professional, and engaging</strong> — now
                    you can fix it effortlessly right from your phone.
                  </p>

                  <Button asChild size="lg" variant="secondary">
                    <a
                      href="https://case-converter-tool.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Open Case Converter on Mobile <ExternalLink size={16} />
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
                    Share Mobile Guide
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

export default MobileCaseChangeGuide;
