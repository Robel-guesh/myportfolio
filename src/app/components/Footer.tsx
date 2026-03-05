import { Code2, Github, Mail, ArrowUp } from "lucide-react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d2137] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#16a34a] flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                Robel<span className="text-[#16a34a]">.dev</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Backend Developer & Full-Stack Engineer specializing in Node.js, TypeScript, and Flutter. Building scalable, modern software.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white/40 text-xs mb-4 tracking-widest uppercase" style={{ fontWeight: 600 }}>
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-white/70 hover:text-[#16a34a] text-sm transition-colors cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs mb-4 tracking-widest uppercase" style={{ fontWeight: 600 }}>
              Connect
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Robel-guesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-[#16a34a] text-sm transition-colors"
                style={{ fontWeight: 500 }}
              >
                <Github size={15} />
                github.com/Robel-guesh
              </a>
              <a
                href="mailto:robelguesh21@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-[#16a34a] text-sm transition-colors"
                style={{ fontWeight: 500 }}
              >
                <Mail size={15} />
                robelguesh21@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Robel Guesh Tsehaye. All rights reserved.
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-1.5 text-white/40 hover:text-[#16a34a] text-sm transition-colors cursor-pointer"
            style={{ fontWeight: 500 }}
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
