import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Shami3166",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ehtesham-munawar-5b9562382/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/EhteshamMunawar",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:ehtishammunawar0@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">CaseConverter</h3>
                <p className="text-gray-400 text-sm">Free Online Text Tool</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              A free online tool that helps you convert text between different
              cases instantly. No registration required, no data stored.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">
              Have questions or want to collaborate?
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} CaseConverter. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>100% Free</span>
            <span>•</span>
            <span>No Registration</span>
            <span>•</span>
            <span>Privacy First</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
