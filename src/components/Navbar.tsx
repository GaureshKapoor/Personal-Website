import { useState, useEffect } from "react";
import { Menu, X, Construction } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Posts", href: "#posts" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Work in Progress Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 py-2 px-4">
          <Construction className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Work in Progress</span>
        </div>
      </div>
      
      <header
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-gradient">
            GK
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass mt-2 mx-6 rounded-xl p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
      </header>
    </>
  );
};

export default Navbar;