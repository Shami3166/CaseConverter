import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Linkedin,
  Github,
  Twitter,
  MapPin,
  Clock,
  Copy,
  Check,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ehtesham-munawar-5b9562382/",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:bg-blue-100 hover:text-blue-600",
    },
    {
      name: "GitHub",
      url: "https://github.com/Shami3166",
      icon: <Github className="w-5 h-5" />,
      color: "hover:bg-gray-100 hover:text-gray-900",
    },
    {
      name: "Twitter",
      url: "https://x.com/EhteshamMunawar",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:bg-blue-100 hover:text-blue-400",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Contact from ${formData.name} - CaseConverter Tool`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    const mailtoLink = `mailto:ehtishammunawar0@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast.success("Opening your email client... 📧");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ehtishammunawar0@gmail.com");
    setCopied(true);
    toast.success("Email copied 📋");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>Contact | CaseConverter free online tool</title>
        <meta
          name="description"
          content="Get in touch with CaseConverter! Have questions, feedback, or collaboration ideas? Contact us easily via email or our online form."
        />
        <meta
          name="keywords"
          content="contact CaseConverter, Case Converter support, get in touch,case change converter,case support manager,case support status text case converter help, online text tool contact"
        />
        <meta property="og:title" content="Contact | CaseConverter" />
        <meta
          property="og:description"
          content="Have questions or feedback? Contact CaseConverter easily via email or form. We usually reply within 24 hours."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://caseconverter.vercel.app/contact"
        />
        <meta
          property="og:image"
          content="https://caseconverter.vercel.app/og-image.webp"
        />
        <link rel="canonical" href="https://caseconverter.vercel.app/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
              📧 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or want to collaborate? Feel free to reach out. I'd
              love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-lg rounded-2xl border-0 bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-gray-800">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    Let's Connect
                  </CardTitle>
                  <CardDescription>
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-blue-50/50 border border-blue-100 relative">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-sm text-gray-600">
                        ehtishammunawar0@gmail.com
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Typically replies within 24 hours
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={handleCopyEmail}
                      className="absolute top-3 right-3"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                      <User className="w-4 h-4 text-purple-600" />
                      Follow Me
                    </h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl border border-gray-200 bg-white text-gray-600 transition-all duration-200 hover:shadow-md ${social.color}`}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span>Available Worldwide</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-orange-600" />
                      <span>Quick Response Time</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl rounded-2xl border-0 bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-gray-700 font-medium"
                      >
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="pl-10 py-6 border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-gray-700 font-medium"
                      >
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className="pl-10 py-6 border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-gray-700 font-medium"
                      >
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, question, or anything you'd like to discuss..."
                        className="min-h-[150px] resize-none border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-xl p-4"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Opening Email...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      📨 This will open your default email client to send the
                      message
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
