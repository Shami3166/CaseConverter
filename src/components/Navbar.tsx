import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  Info,
  Phone,
  Shield,
  Sparkles,
  ChevronDown,
  BookOpen,
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
  ];

  const blogLinks = [
    {
      name: "How to Change Text Case in Google Docs",
      path: "/blog/how-to-change-text-case-google-docs",
    },
    {
      name: "How to Change Text Case in Google Sheets",
      path: "/blog/how-to-change-text-case-google-sheets",
    },
    {
      name: "How to Change Text Case in Microsoft Word",
      path: "/blog/how-to-change-text-case-microsoft-word",
    },
    {
      name: "5 Common Text Case Mistakes and How to Fix Them",
      path: "/blog/common-text-case-mistakes",
    },
    {
      name: "Why Proper Capitalization Matters in Professional Writing",
      path: "/blog/why-proper-capitalization-matters",
    },
    {
      name: "How to Change Text Case on Mobile Phones (iOS & Android)",
      path: "/blog/how-to-change-text-case-mobile",
    },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const isBlogActive = blogLinks.some(
    (link) => location.pathname === link.path
  );

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

            {/* Blogs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isBlogActive
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-sm"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
                >
                  <BookOpen
                    className={`w-4 h-4 ${
                      isBlogActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  <span>Blogs</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
                {blogLinks.map((blog) => (
                  <DropdownMenuItem key={blog.path} asChild>
                    <Link
                      to={blog.path}
                      className="flex items-start p-3 cursor-pointer hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 line-clamp-2">
                          {blog.name}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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

                  {/* Mobile Blogs Section */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3 px-4 py-2 mb-2">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-gray-800">
                        Blog Articles
                      </span>
                    </div>
                    <div className="space-y-1 max-h-60 overflow-y-auto">
                      {blogLinks.map((blog) => (
                        <Link
                          key={blog.path}
                          to={blog.path}
                          className={`flex items-start px-4 py-2 rounded-lg transition-all duration-200 ${
                            isActiveLink(blog.path)
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm line-clamp-2">
                              {blog.name}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
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
