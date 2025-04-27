import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "blog", "contact"];
      const scrollPos = window.scrollY + 100; // add offset so it highlights a little earlier

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (section) =>
    `text-md transition-colors duration-200 ${
      activeSection === section
        ? "text-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center">
        <a href="/" className="text-xl font-bold flex items-center">
          <span className="text-black">null</span>
          <span className="text-indigo-600">Brains</span>
        </a>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className={navLinkClass("home")}>
          Home
        </a>
        <a href="#features" className={navLinkClass("features")}>
          Features
        </a>
        <a href="#blog" className={navLinkClass("blog")}>
          Blog
        </a>
        <a href="#contact" className={navLinkClass("contact")}>
          Contact
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a
          href="#"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
          Login
        </a>
        <a
          href="#"
          className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
          Sign up
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 shadow-lg rounded-b-lg md:hidden">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <a
              href="#plans"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}>
              Plans
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}>
              Features
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <div className="border-t pt-4 flex flex-col space-y-4">
              <a
                href="/login"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Login
              </a>
              <a
                href="/signup"
                className="bg-indigo-600 text-white text-center px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-200">
                Sign up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
