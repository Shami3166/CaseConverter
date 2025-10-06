import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Case Converter – Free Online Text Case Tool 2025</title>
        <meta
          name="description"
          content="Learn about Case Converter, a free online tool built to help writers, students, and professionals easily convert text between uppercase, lowercase, title case, and more—100% free and secure."
        />
        <meta
          name="keywords"
          content="about case converter,how to change lower case to upper case,what is title case, text case tool, free text converter, uppercase lowercase tool, online text case converter, capitalize text online"
        />
        <link rel="canonical" href="https://caseconverter.vercel.app/about" />

        {/* 🔹 Open Graph / Social Preview */}
        <meta
          property="og:title"
          content="About Case Converter – Free Online Text Case Tool"
        />
        <meta
          property="og:description"
          content="Discover more about Case Converter — your free online text case conversion tool designed for everyone who works with text."
        />
        <meta
          property="og:url"
          content="https://caseconverter.vercel.app/about"
        />
        <meta
          property="og:image"
          content="https://caseconverter.vercel.app/og-image.webp"
        />
        <meta property="og:type" content="website" />

        {/* 🔹 Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Case Converter – Free Online Text Case Tool"
        />
        <meta
          name="twitter:description"
          content="Case Converter is a free browser-based tool to convert text between uppercase, lowercase, title case, and more instantly."
        />
        <meta
          name="twitter:image"
          content="https://caseconverter.vercel.app/og-image.webp"
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              About CaseConverter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your go-to free online tool for instant text case conversion.
              Transform your text effortlessly across multiple formatting
              styles.
            </p>
          </div>

          {/* Tool Screenshot Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 border">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                See Our Tool in Action
              </h3>
              <div className="max-w-4xl mx-auto">
                <img
                  src="/og-image.webp"
                  alt="Free Case Converter tool preview"
                  className="rounded-xl shadow-md border w-full h-auto"
                />
                <p className="text-gray-600 mt-3 text-sm">
                  Our clean and intuitive interface makes text conversion simple
                  and efficient
                </p>
              </div>
            </div>
          </div>

          {/* What is CaseConverter */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                What is CaseConverter?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CaseConverter is a simple tool that helps you change your text
                into different cases easily. In today's digital world, clear and
                good text formats is important to share the informatoins and
                understandable.This tool saves you time by fixing your text
                format.Our tool makes text formatting effortless, helping you
                save your time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                CaseConverter was created to solve the problems ot the content
                writers , students and other professionals — this tool quickly
                change the text case without any changing your content. Instead
                of wasting time on manual edits or digging through menus,
                CaseConverter makes it easy to convert text instantly, right at
                your fingertips.
              </p>

              <p className="text-gray-700 leading-relaxed">
                CaseConverter also focus on the user privacy and this tool do
                not collect any data . Since it runs entirely in your browser,
                everything happens on your device — your text never gets sent
                anywhere. This way, you can safely you converter cases and do
                not worry about your data and privacy. Learn more about our
                privacy practices in our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          {/* Supported Cases */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Supported Text Cases - Comprehensive Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Sentence Case</h3>
                  <p className="text-gray-700">
                    Perfect for starting paragraphs, emails, and any formal
                    writing that requires proper sentence structure. This case
                    capitalizes only the first letter of your text while keeping
                    the rest in lowercase, following standard English grammar
                    rules. documents.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> "hello world. how are you today?"
                    → "Hello world. how are you today?"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Best for:</strong> Formal documents, business
                    communications, academic papers, and professional emails
                    where proper sentence structure is essential.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Lower Case</h3>
                  <p className="text-gray-700">
                    Essential for programming, web development, and maintaining
                    consistency in digital content. Lower case conversion is
                    crucial when working with code, as most programming
                    languages are case-sensitive.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> "Hello World, This Is IMPORTANT" →
                    "hello world, this is important"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Best for:</strong> Programming variables, file
                    names, email addresses, URLs, usernames, and database
                    entries where case consistency matters.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Upper Case</h3>
                  <p className="text-gray-700">
                    Ideal for creating emphasis, headings, and important notices
                    that need to stand out. Upper case text commands attention
                    and is often used for warnings, titles, and announcements.
                    In design contexts, it can create visual hierarchy, while in
                    documentation, it helps distinguish section headers from
                    body content.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> "important notice: system update"
                    → "IMPORTANT NOTICE: SYSTEM UPDATE"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Best for:</strong> Headings, titles, warnings,
                    announcements, logos, and any content that requires strong
                    visual emphasis or attention-grabbing presentation.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">
                    Capitalize Case
                  </h3>
                  <p className="text-gray-700">
                    Excellent for proper nouns, titles, and specific formatting
                    requirements where each word needs individual attention.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> "the quick brown fox" → "The Quick
                    Brown Fox"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Best for:</strong> Proper names, product titles,
                    category labels, book titles, and any context where each
                    word deserves equal emphasis and proper capitalization.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Title Case</h3>
                  <p className="text-gray-700">
                    Professional formatting specifically designed for headings,
                    titles, and publication-ready content. Title case follows
                    specific grammatical rules where major words are capitalized
                    while minor words (like articles and prepositions) remain in
                    lowercase.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> "the lord of the rings: the return
                    of the king" → "The Lord of the Rings: The Return of the
                    King"
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Best for:</strong> Book titles, article headlines,
                    blog post titles, academic papers, and any formal
                    publication where professional title formatting is required.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Use Our Tool */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Why Choose CaseConverter? Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Completely Free - No Strings Attached
                    </h4>
                    <p className="text-gray-700">
                      Unlike many online tools that offer limited free usage or
                      require subscriptions, CaseConverter is 100% free with no
                      hidden costs. There are no usage limits, no premium
                      features locked behind paywalls, and no surprise charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instant Results - No Waiting, No Delays
                    </h4>
                    <p className="text-gray-700">
                      Experience real-time conversion as you type or paste your
                      text. Whether you're working with a single sentence or
                      lengthy documents, the conversion happens seamlessly in
                      the background.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Universal Compatibility - Works Everywhere
                    </h4>
                    <p className="text-gray-700">
                      CaseConverter is designed with responsive principles,
                      ensuring perfect functionality across all devices and
                      platforms. You are using this in the laptop, mobile, tab,
                      and all other devices. There's no need for app
                      installations, software updates, or compatibility checks.
                      Simply access our website through any modern browser and
                      start converting text immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Maximum Security - Your Data Stays Yours
                    </h4>
                    <p className="text-gray-700">
                      In an era of increasing data privacy concerns,
                      CaseConverter stands out by processing everything locally
                      in your browser. Your text never reaches our servers, gets
                      stored in databases, or gets transmitted over the
                      internet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      User-Friendly Design - No Learning Curve
                    </h4>
                    <p className="text-gray-700">
                      We've designed CaseConverter with simplicity and intuition
                      in mind. There are no complicated settings to configure,
                      no advanced options to understand, and no technical
                      knowledge required. Whether you're a tech-savvy
                      professional or a casual user, you'll find our tool
                      immediately usable and effective from the first visit.
                      Have questions? Feel free to{" "}
                      <Link
                        to="/contact"
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        contact us
                      </Link>{" "}
                      for assistance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who Is It For */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Who Benefits from CaseConverter? Target Audience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    👨‍💻 Developers & Programmers
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Essential for formatting code comments, variable names,
                    documentation, and string values. Programmers frequently
                    need to switch between cases when working with different
                    programming languages, API documentation, and code
                    standards.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    ✍️ Writers & Content Creators
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Perfect for preparing articles, blog posts, social media
                    content, and marketing materials. Writers can quickly format
                    headings, titles, and body text according to different style
                    guides and publication requirements.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    🎓 Students & Academics
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Invaluable for formatting essays, research papers, thesis
                    documents, and academic presentations. The tool helps you
                    create well-formatted and professional presentations.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    💼 Business Professionals
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Crucial for creating polished reports, presentations,
                    emails, and corporate communications. Professionals can
                    maintain brand consistency, ensure proper formatting in
                    client-facing materials, and save time on document
                    preparation.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    📊 Data Entry Specialists
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Essential for standardizing data across spreadsheets,
                    databases, and information systems. The tool improves the
                    data quality.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    🌐 Social Media Managers
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Perfect for creating consistent branding across social media
                    platforms, formatting post captions, and preparing content
                    for different channels. Social media professionals can
                    maintain brand voice consistency while adapting content
                    format for various platforms and audience preferences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                How to Use CaseConverter - Simple Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Input Your Text
                    </h4>
                    <p className="text-gray-700">
                      Start by copying the text you want to convert from any
                      source - documents, emails, web pages, or code editors.
                      Paste it into the designated input area on our platform.
                      You can also type directly into the input field if you
                      prefer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Select Your Desired Case Format
                    </h4>
                    <p className="text-gray-700">
                      Choose from our five specialized case conversion options
                      based on your specific needs. Each option is clearly
                      labeled with its purpose and common use cases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Copy and Use Results
                    </h4>
                    <p className="text-gray-700">
                      Once you're satisfied with the converted text, simply use
                      the copy button to transfer the results to your clipboard.
                      The converted text is immediately ready for pasting into
                      your target application - whether it's a document, email,
                      code editor, or any other platforms
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Links Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-blue-800 text-lg mb-4">
                Need More Information?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link to="/privacy-policy">
                  <Button
                    variant="outline"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Ready to Transform Your Text Workflow?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Join thousands of satisfied users who have made CaseConverter
              their go-to text conversion solution. Experience the difference
              that a dedicated, privacy-focused, and feature-rich tool can make
              in your daily work.
            </p>
            <Link to="/">
              <Button
                size="lg"
                className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Start Converting Now - It's Free!
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              No registration required • Instant access • Complete privacy
              protection
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
