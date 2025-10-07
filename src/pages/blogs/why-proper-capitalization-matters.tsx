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
  Eye,
  Users,
  Building,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WhyCapitalizationMatters = () => {
  const navigate = useNavigate();

  // ✅ Target Keywords
  const keywords = [
    "proper capitalization professional writing",
    "why capitalization matters",
    "professional writing tips",
    "business communication",
    "capitalization rules professional",
    "writing credibility",
    "professional email writing",
    "business writing standards",
    "text case professional",
    "capitalization importance",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
      <Helmet>
        <title>
          Why Proper Capitalization Matters in Professional Writing -
          CaseConverter
        </title>
        <meta
          name="description"
          content="Discover why proper capitalization is crucial for professional writing. Learn how it impacts credibility, readability, and professionalism in business communication."
        />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* ✅ Open Graph Tags */}
        <meta
          property="og:title"
          content="Why Proper Capitalization Matters in Professional Writing"
        />
        <meta
          property="og:description"
          content="Learn how capitalization affects professionalism, credibility, and communication in business writing. Essential tips for professional communication."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/matters.webp" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Capitalization in Professional Writing"
        />
        <meta
          name="twitter:description"
          content="Why proper capitalization matters for credibility and professionalism in business communication."
        />
      </Helmet>

      <div className="container mx-auto max-w-4xl">
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
            <div className="w-full h-64 bg-gradient-to-r from-purple-600 to-pink-700 flex items-center justify-center relative">
              <img
                src="/matters.webp"
                alt="Professional Writing Capitalization Matters - Business Communication"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <Building size={48} className="mx-auto mb-4" />
                  <h2 className="text-4xl font-bold">Professional Writing</h2>
                  <p className="text-purple-100 mt-2 text-lg">
                    Why Capitalization Matters
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Header */}
            <div className="p-4 pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Professional Writing
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-800"
                >
                  Business Communication
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Writing Tips
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  Case Converter
                </Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                ✍️ Why Proper Capitalization Matters in Professional Writing
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
                <div className="bg-purple-50 border-l-4 border-purple-500 pl-2 py-2 mb-6">
                  <p className="text-gray-700 italic">
                    Have you ever received an email that started with "hi sir"
                    or read a report filled with random capital letters? Even if
                    the message was clear, it probably didn't feel professional.
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Proper capitalization is more than just grammar—it's a mark of
                  attention to detail, respect, and clarity. In{" "}
                  <strong>professional writing</strong>—whether it's a business
                  proposal, email, article, or social media post—how you use
                  capital letters can greatly influence your credibility.
                </p>

                {/* Point 1: Professionalism */}
                <div className="mb-8 bg-white border border-blue-200 rounded-lg p-2 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Building className="text-blue-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      🔹 1. It Reflects Professionalism and Attention to Detail
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    In professional environments, small details often make a big
                    difference. Using correct{" "}
                    <strong>
                      capitalization shows that you've taken time to proofread
                    </strong>{" "}
                    and present your work carefully.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                      <p className="text-red-800 font-medium mb-2">
                        ❌ Unprofessional:
                      </p>
                      <p className="text-red-700">
                        "dear manager, please find attached my report."
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <p className="text-green-800 font-medium mb-2">
                        ✅ Professional:
                      </p>
                      <p className="text-green-700">
                        "Dear Manager, Please find attached my report."
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    The second version immediately looks more polished. It
                    signals <strong>respect and effort</strong>—qualities that
                    clients, colleagues, and employers notice.
                  </p>
                </div>

                {/* Point 2: Readability */}
                <div className="mb-8 bg-white border border-green-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Eye className="text-green-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      🔹 2. It Improves Readability and Understanding
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Capital letters are visual cues that help readers navigate
                    and interpret text quickly. They mark beginnings, names,
                    titles, and key sections—making your writing easier to
                    follow.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-800 rounded-lg p-2">
                      <p className="text-red-300 font-mono mb-2">
                        Without capitalization:
                      </p>
                      <p className="text-gray-300">
                        "writing emails reports or articles without capital
                        letters makes it hard for readers to understand where
                        sentences start and end"
                      </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2">
                      <p className="text-green-300 font-mono mb-2">
                        With proper capitalization:
                      </p>
                      <p className="text-gray-300">
                        "Writing emails, reports, or articles without capital
                        letters makes it hard for readers to understand where
                        sentences start and end."
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-4">
                    Proper capitalization gives{" "}
                    <strong>structure to your text</strong>, guiding your reader
                    smoothly through each sentence.
                  </p>
                </div>

                {/* Point 3: Tone */}
                <div className="mb-8 bg-white border border-yellow-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <MessageCircle className="text-yellow-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      🔹 3. It Conveys the Right Tone
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Capitalization can influence how your message is felt. Using{" "}
                    <strong>
                      ALL CAPS in writing can come across as shouting
                    </strong>{" "}
                    or overly aggressive.
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                      <p className="text-red-800 font-medium mb-1">
                        ❌ Aggressive tone:
                      </p>
                      <p className="text-red-700 font-mono">
                        PLEASE RESPOND IMMEDIATELY!
                      </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <p className="text-green-800 font-medium mb-1">
                        ✅ Professional tone:
                      </p>
                      <p className="text-green-700">
                        Please respond immediately.
                      </p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                      <p className="text-orange-800 font-medium mb-1">
                        ❌ Too casual:
                      </p>
                      <p className="text-orange-700">
                        hi john, i'll send it later.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    The correct use of capitalization strikes the right tone—
                    <strong>polite, professional, and balanced</strong>.
                  </p>
                </div>

                {/* Case Converter Tool Section */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-4 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    🚀 Maintain Professional Capitalization Instantly
                  </h3>
                  <p className="text-blue-100 text-center mb-6 text-lg">
                    Ensure your writing always maintains professional
                    capitalization standards with our free tool.
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

                {/* Point 4: Respect */}
                <div className="mb-8 bg-white border border-purple-200 rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Users className="text-purple-600" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      🔹 4. It Shows Respect for Names and Titles
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Capitalizing people's names, job titles, companies, and
                    organizations isn't just grammatical—it's respectful.
                  </p>

                  <div className="space-y-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <p className="text-green-800 font-medium mb-1">
                        ✅ Respectful:
                      </p>
                      <p className="text-green-700">
                        "I met with Dr. Ahmed, the Head of Marketing at
                        VisionTech."
                      </p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                      <p className="text-red-800 font-medium mb-1">
                        ❌ Disrespectful:
                      </p>
                      <p className="text-red-700">
                        "i met with dr. ahmed, the head of marketing at
                        visiontech."
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-4">
                    In professional communication, these small details can
                    impact how others perceive you. Consistent, correct
                    capitalization builds{" "}
                    <strong>trust and professionalism</strong>.
                  </p>
                </div>

                {/* Point 5: Brand Voice */}
                <div className="mb-8 bg-white border border-pink-200 rounded-lg p-4 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🔹 5. It Strengthens Your Brand Voice
                  </h2>

                  <p className="text-gray-700 mb-4">
                    For businesses and content creators, consistent
                    capitalization is part of brand identity. Whether you write
                    blog posts, emails, or social media captions, using the same
                    capitalization style across platforms helps you look
                    organized and credible.
                  </p>

                  <div className="bg-pink-50 rounded-lg p-2 mb-4">
                    <p className="text-pink-800 font-medium mb-2">
                      🎯 Brand Examples:
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Sentence Case:</strong> "We help teams grow
                        faster"
                      </p>
                      <p>
                        <strong>Title Case:</strong> "We Help Teams Grow Faster"
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    Whichever you choose, stick to one style for a clean,
                    professional appearance. If you often switch between styles,
                    tools like our <strong>Case Converter Tool</strong> can help
                    you instantly change text case to match your preferred
                    format.
                  </p>
                </div>

                {/* Point 6: Miscommunication */}
                <div className="mb-8 bg-white border border-red-200 rounded-lg p-4 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🔹 6. It Prevents Miscommunication
                  </h2>

                  <p className="text-gray-700 mb-4">
                    Sometimes, a misplaced capital letter can even change the
                    meaning of a sentence.
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 mb-4">
                    <p className="text-red-800 font-medium mb-2">
                      ⚠️ Critical Example:
                    </p>
                    <div className="space-y-2">
                      <p className="text-green-600">
                        <strong>Correct:</strong> "I helped my Uncle Jack off a
                        horse."
                      </p>
                      <p className="text-red-600">
                        <strong>Incorrect:</strong> "I helped my uncle jack off
                        a horse."
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700">
                    The second sentence accidentally implies something very
                    different because of <strong>capitalization misuse</strong>!
                    Correct capitalization keeps your message clear and prevents
                    embarrassing misunderstandings.
                  </p>
                </div>

                {/* Point 7: Collaboration */}
                <div className="mb-8 bg-white border border-indigo-200 rounded-lg p-4 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    🔹 7. It Makes Editing and Collaboration Easier
                  </h2>

                  <p className="text-gray-700 mb-4">
                    When teams collaborate on reports, blogs, or documents,
                    maintaining consistent capitalization rules ensures that
                    everyone's writing aligns.
                  </p>

                  <div className="bg-indigo-50 rounded-lg p-2">
                    <p className="text-indigo-800 font-medium mb-2">
                      📚 Professional Standards:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        <strong>APA Style</strong> - Academic and scientific
                        writing
                      </li>
                      <li>
                        <strong>MLA Style</strong> - Humanities and literature
                      </li>
                      <li>
                        <strong>Chicago Manual</strong> - Book publishing and
                        business
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Following these rules keeps your writing consistent and
                      respected across professional contexts.
                    </p>
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-2 text-white text-center">
                  <h2 className="text-2xl font-bold mb-4">✅ Final Thoughts</h2>
                  <p className="text-green-100 text-lg mb-4">
                    Proper capitalization is one of those details that seem
                    small but carry a huge impact. It shapes how your message is
                    read, how your professionalism is judged, and how your ideas
                    are understood.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                      <p className="font-semibold">
                        By ensuring correct capitalization, you:
                      </p>
                      <ul className="text-left text-green-100 space-y-1 mt-2">
                        <li>• Build credibility and trust</li>
                        <li>• Improve readability</li>
                        <li>• Maintain professional tone</li>
                        <li>• Show respect</li>
                      </ul>
                    </div>
                    <div className="bg-white bg-opacity-20  rounded-lg">
                      <p className="font-semibold">Quick solutions:</p>
                      <p className="text-green-100 mt-2">
                        Use our <strong>free Case Converter Tool</strong> to
                        automatically switch between uppercase, lowercase, title
                        case, or sentence case in seconds.
                      </p>
                    </div>
                  </div>

                  <p className="text-green-100 text-lg mb-6">
                    Because in the professional world,{" "}
                    <strong>
                      how you write is just as important as what you write
                    </strong>
                    .
                  </p>

                  <Button asChild size="lg" variant="secondary">
                    <a
                      href="https://case-converter-tool.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Ensure Professional Capitalization{" "}
                      <ExternalLink size={14} />
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
                    Share Professional Writing Guide
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

export default WhyCapitalizationMatters;
