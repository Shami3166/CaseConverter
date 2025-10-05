import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | CaseConverter</title>
        <meta
          name="description"
          content="Read CaseConverter’s Terms of Service to understand your rights and responsibilities when using our free online text conversion tool. Use responsibly — your text remains private, and we don’t store your data."
        />
        <meta
          name="keywords"
          content="CaseConverter terms of service, user agreement, text conversion tool policy, online text case converter rules, free case converter terms, data usage policy"
        />
        <meta property="og:title" content="Terms of Service | CaseConverter" />
        <meta
          property="og:description"
          content="View CaseConverter’s Terms of Service — learn how to use our free text case converter responsibly. 100% browser-based, private, and simple to use."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://caseconverter.vercel.app/terms-of-service"
        />
        <meta
          property="og:image"
          content="https://caseconverter.vercel.app/og-image.png"
        />
        <link
          rel="canonical"
          href="https://caseconverter.vercel.app/terms-of-service"
        />

        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service | CaseConverter",
      "url": "https://caseconverter.vercel.app/terms-of-service",
      "description": "CaseConverter’s official Terms of Service — outlining the rules, usage guidelines, and responsibilities for using our free online text case conversion tool.",
      "publisher": {
        "@type": "Organization",
        "name": "CaseConverter",
        "url": "https://caseconverter.vercel.app"
      }
    }
  `}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Acceptance of Terms */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                By accessing and using CaseConverter ("the Service"), you accept
                and agree to be bound by these Terms of Service. If you do not
                like these terms so you do not use it as your will.
              </p>
              <p className="text-gray-700 leading-relaxed">
                CaseConverter is a free online text case conversion tool
                available at no cost to users. there are no any extra charges of
                this We believe in providing a genuinely free service that helps
                people with their text formatting needs without financial
                barriers. These terms exist to protect both you as a user and us
                as service providers.
              </p>
            </CardContent>
          </Card>

          {/* Description of Service */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CaseConverter provides a web-based tool that allows users to
                convert text between different cases including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Sentence Case - Perfect for starting sentences and paragraphs
                  correctly
                </li>
                <li>
                  Lower Case - Essential for programming and consistent
                  formatting
                </li>
                <li>Upper Case - Ideal for headings and emphasis</li>
                <li>Capitalize Case - Great for titles and proper nouns</li>
                <li>Title Case - Professional formatting for publications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The service is provided "as is" without any warranties or
                guarantees. We've designed CaseConverter to be simple and
                straightforward - you paste your text, choose a case format, and
                get instant results. There are no complex settings to configure
                and no learning curve required. Learn more about how our tool
                works on our{" "}
                <Link
                  to="/about"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  About page
                </Link>
                .
              </p>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To ensure CaseConverter remains available and functional for all
                users, we ask that you follow these basic guidelines:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Appropriate Use
                    </h4>
                    <p className="text-gray-700">
                      You agree to use the Service only for lawful purposes and
                      in a way that does not infringe the rights of others. This
                      includes respecting copyright laws, not harassing others,
                      and not using the service for any illegal activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      No Malicious Content
                    </h4>
                    <p className="text-gray-700">
                      Do not use the Service to process malicious, harmful, or
                      illegal content. This includes but is not limited to: spam
                      content, phishing attempts, malware code, hate speech, or
                      any material that could harm others.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Respect Service Limits
                    </h4>
                    <p className="text-gray-700">
                      Do not attempt to overload or disrupt the Service through
                      automated means or excessive requests. While there are no
                      strict usage limits for normal human use, automated
                      scraping, bot activity, or deliberate attempts to slow
                      down the service are prohibited.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Content Ownership Verification
                    </h4>
                    <p className="text-gray-700">
                      Only convert text that you own or have permission to use.
                      CaseConverter is a formatting tool, not a content creation
                      service. We assume that users are processing their own
                      original content, content they have licensed, or content
                      that is in the public domain. Respect intellectual
                      property rights at all times.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                The CaseConverter website, including its design, code, and
                branding, is the property of the service owner. You may not
                copy, modify, or distribute any part of the Service without
                permission. This includes attempting to reverse engineer our
                conversion algorithms, scraping our website content, or
                repackaging our tool as your own service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The text you input and convert remains your property. We do not
                claim any ownership rights over the content you process through
                our Service. When you paste text into CaseConverter, you retain
                all rights to that content. We don't store it, analyze it, or
                use it for any purpose other than providing the immediate
                conversion you requested.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimer of Warranties */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Disclaimer of Warranties
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our service is provided "as is" and "as available." This means
                we don't make any promises or guarantees about the tool—whether
                express or implied. For example, we can't guarantee it will
                always be error-free, uninterrupted, or meet every specific
                need.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Warranties of merchantability - We don't guarantee it's fit
                  for any particular commercial purpose
                </li>
                <li>
                  Fitness for a particular purpose - While we aim for accuracy,
                  we can't guarantee perfect results for every use case
                </li>
                <li>
                  Non-infringement - We believe our tool is original, but we
                  can't guarantee it doesn't infringe on others' rights
                </li>
                <li>
                  Continuous availability - We'll try to keep the service
                  running, but can't promise 100% uptime
                </li>
                <li>
                  Accuracy of results - Text conversion is complex and there may
                  be edge cases we haven't accounted for
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee that the Service will be uninterrupted,
                error-free, or completely secure. For critical documents or
                important business communications, we recommend double-checking
                the converted text before use.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To the fullest extent permitted by law, CaseConverter and its
                operators shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from:
              </p>
              <div className="space-y-3 ml-4">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700">
                    Your use or inability to use the Service - Including any
                    business losses, missed opportunities, or productivity
                    impacts
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700">
                    Any unauthorized access to or use of our systems - Though we
                    maintain reasonable security practices
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700">
                    Any errors or omissions in the Service - Including
                    conversion mistakes or functionality issues
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700">
                    Any decisions made based on converted text - You remain
                    responsible for verifying important content
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-gray-700">•</span>
                  <p className="text-gray-700">
                    Any third-party actions - Including internet service
                    providers, browser companies, or other external services
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                This limitation of liability applies whether the alleged
                liability is based on contract, tort, negligence, strict
                liability, or any other basis, even if we have been advised of
                the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Service Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We are responsible to maintain Service access but do not
                guarantee uninterrupted access. The Service may be temporarily
                unavailable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Maintenance and updates - To improve performance and add
                  features
                </li>
                <li>
                  Technical issues - Server problems, software bugs, or other
                  technical difficulties
                </li>
                <li>
                  Circumstances beyond our control - Including hosting provider
                  issues, internet outages, or natural disasters
                </li>
                <li>
                  Security concerns - If we detect abuse or threats to the
                  service
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or discontinue the Service at any
                time without notice. While we have no plans to discontinue
                CaseConverter, the digital landscape changes rapidly. If we ever
                need to shut down the service, we'll provide notice if possible,
                but can't guarantee it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since CaseConverter is a free service, we don't provide service
                level agreements (SLAs) or uptime guarantees.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service from time to time. When we
                make changes, we will update the "Last updated" date at the top
                of this page. Changes typically occur when we add new features,
                respond to legal requirements, or improve clarity based on user
                feedback.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Your continued use of the Service after any changes constitutes
                acceptance of the new terms. We encourage you to review these
                terms periodically. Since we don't require user accounts, we
                can't notify you directly about changes, so checking back
                occasionally is your responsibility.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If we make significant changes that substantially affect your
                rights, we'll try to provide prominent notice on our website for
                a reasonable period. However, for a free service like ours,
                extensive notification campaigns may not be feasible.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction where the service operator is
                located, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any legal disputes related to these terms or your use of
                CaseConverter will be resolved in the courts of that
                jurisdiction. We prefer to resolve issues amicably without legal
                proceedings, so if you have concerns, please contact us first
                through our{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Contact page
                </Link>
                .
              </p>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or
                unenforceable, that provision will be limited or eliminated to
                the minimum extent necessary, and the remaining provisions will
                remain in full force and effect. This ensures that the rest of
                the agreement remains valid even if one part is found to be
                problematic.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                If you have any question about these so go to my{" "}
                <Link
                  to="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  contact page
                </Link>{" "}
                and contact my via email or send message. We'll usually get back
                to you quickly and do our best to clear things up.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since CaseConverter is a free tool run by a small team, we'd
                appreciate it if you keep things simple whenever possible. Most
                issues can be solved without legal back-and-forth, and we'd
                rather spend our time improving the tool for you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in being transparent and fair. If something in these
                terms feels confusing or could be improved, let us know — we're
                always open to feedback that makes CaseConverter better for
                everyone.
              </p>
            </CardContent>
          </Card>

          {/* Additional Links Section */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-blue-800 text-lg mb-4">
                Learn More About CaseConverter
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-blue-300 cursor-pointer text-blue-700 hover:bg-blue-100"
                  >
                    About Our Tool
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-green-300 cursor-pointer text-green-700 hover:bg-green-100"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Simple Summary */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">
                Simple Summary
              </h3>
              <p className="text-blue-700">
                <strong>CaseConverter is a free tool:</strong> Use it
                responsibly for legal purposes. We provide the service "as is"
                without warranties. Your text remains yours, and we don't store
                it. We may update these terms occasionally. Be reasonable, don't
                abuse the service, and enjoy this free utility for your text
                formatting needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
