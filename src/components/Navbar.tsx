import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Info,
  Phone,
  Shield,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Phone className="w-4 h-4" /> },
    {
      name: "Privacy Policy",
      path: "/privacy-policy",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Terms of Service",
      path: "/terms-of-service",
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CaseConverter
              </span>
              <span className="text-xs text-gray-500 -mt-1">
                Free Online Tool
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActiveLink(link.path)
                    ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <span
                  className={
                    isActiveLink(link.path) ? "text-blue-600" : "text-gray-400"
                  }
                >
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                {/* Accessibility Components - Hidden visually but available for screen readers */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation links for CaseConverter website
                </SheetDescription>

                {/* Mobile Header */}
                <div className="flex items-center space-x-3 mb-8 pt-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">CaseConverter</div>
                    <div className="text-xs text-gray-500">
                      Free Online Tool
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Links */}
                <div className="space-y-2">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActiveLink(link.path)
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={
                          isActiveLink(link.path)
                            ? "text-white"
                            : "text-gray-400"
                        }
                      >
                        {link.icon}
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Footer */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-center text-xs text-gray-500 border-t pt-4">
                    Free • Secure • Instant
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
