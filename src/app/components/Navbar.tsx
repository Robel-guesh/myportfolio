import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#16a34a] flex items-center justify-center shadow-sm">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-[#0d2137] tracking-tight">
              <span style={{ fontWeight: 700 }}>Robel</span>
              <span className="text-[#16a34a]" style={{ fontWeight: 700 }}>.dev</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer ${
                    active === id
                      ? "text-[#16a34a] bg-green-50"
                      : "text-[#4a5568] hover:text-[#0d2137] hover:bg-gray-50"
                  }`}
                  style={{ fontWeight: active === id ? 600 : 500 }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[#0d2137] hover:bg-[#16a34a] text-white px-5 py-2 rounded-lg text-sm transition-all duration-200 cursor-pointer shadow-sm"
              style={{ fontWeight: 600 }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#0d2137] hover:bg-gray-100 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 shadow-lg">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-3 py-2 rounded-lg text-sm cursor-pointer ${
                    active === id
                      ? "text-[#16a34a] bg-green-50"
                      : "text-[#4a5568] hover:bg-gray-50"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-2 bg-[#0d2137] text-white px-5 py-2.5 rounded-lg text-sm cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
