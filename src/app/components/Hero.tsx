import { ArrowRight, Download, CheckCircle2, TrendingUp, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImage1 = "https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzcyNjQ5MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const heroImage2 = "https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwbGFwdG9wJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzcyNjk3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const heroImage3 = "https://images.unsplash.com/photo-1744974086616-8cd4368609ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMGZsdXR0ZXJ8ZW58MXx8fHwxNzcyNjk3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center"
      style={{ background: "linear-gradient(135deg, #f0f7f4 0%, #f8fffe 50%, #eef6ff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-1.5 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
              <span className="text-sm text-[#0d2137]" style={{ fontWeight: 500 }}>
                Available for Opportunities
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="text-[#0d2137] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, lineHeight: 1.15 }}
              >
                Building Scalable
                <br />
                and Modern Software
              </h1>
              <p className="mt-3 text-[#16a34a] text-lg" style={{ fontWeight: 600 }}>
                Full-stack Developer · Flutter · Nodejs · React · Tkinter
              </p>
            </div>

            {/* Description */}
            <p className="text-[#4a5568] text-base leading-relaxed max-w-xl">
              I am <span style={{ fontWeight: 600 }} className="text-[#0d2137]">Robel Guesh Tsehaye</span>, an Information Technology graduate and software developer specializing in Full-stack development, full-stack web and mobile applications, and UI/UX design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 bg-[#0d2137] hover:bg-[#16a34a] text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                style={{ fontWeight: 600 }}
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <a
                href="#"
                download
                className="flex items-center gap-2 bg-white border border-gray-200 text-[#0d2137] hover:border-[#16a34a] hover:text-[#16a34a] px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                style={{ fontWeight: 600 }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-2">
              <div>
                <p className="text-[#0d2137]" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2 }}>2+</p>
                <p className="text-[#6b7280] text-sm">Years Experience</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-[#0d2137]" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2 }}>15+</p>
                <p className="text-[#6b7280] text-sm">Projects Completed</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-[#0d2137]" style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2 }}>3.81</p>
                <p className="text-[#6b7280] text-sm">GPA</p>
              </div>
            </div>
          </div>

          {/* Right – Stacked Cards */}
          <div className="relative flex justify-center items-center h-[520px] lg:h-[560px]">
            {/* Main large image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[340px] lg:w-[290px] lg:h-[380px] rounded-2xl overflow-hidden shadow-2xl z-20">
              <ImageWithFallback
                src={heroImage1}
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top left image */}
            <div className="absolute top-4 left-0 lg:left-4 w-[160px] h-[200px] rounded-2xl overflow-hidden shadow-xl z-10">
              <ImageWithFallback
                src={heroImage2}
                alt="Software engineer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="absolute bottom-4 right-0 lg:right-4 w-[150px] h-[190px] rounded-2xl overflow-hidden shadow-xl z-10">
              <ImageWithFallback
                src={heroImage3}
                alt="Mobile development"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating card – Tech Stack */}
            <div className="absolute top-6 right-2 lg:right-0 bg-white rounded-xl shadow-lg px-4 py-3 z-30 border border-gray-100">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#16a34a]" />
                  <span className="text-[#0d2137] text-xs" style={{ fontWeight: 500 }}>Node.js Expert</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#16a34a]" />
                  <span className="text-[#0d2137] text-xs" style={{ fontWeight: 500 }}>TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#16a34a]" />
                  <span className="text-[#0d2137] text-xs" style={{ fontWeight: 500 }}>Flutter / Dart</span>
                </div>
              </div>
            </div>

            {/* Floating card – New Project */}
            <div className="absolute bottom-10 left-0 lg:left-2 bg-white rounded-xl shadow-lg px-4 py-3 z-30 border border-gray-100">
              <p className="text-[#9ca3af] text-[10px] mb-1" style={{ fontWeight: 500 }}>Latest Work</p>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center">
                  <Briefcase size={13} className="text-[#16a34a]" />
                </div>
                <div>
                  <p className="text-[#0d2137] text-xs" style={{ fontWeight: 700 }}>Niyat Consultancy</p>
                  <p className="text-[#6b7280] text-[10px]">Truck & Ride Hailing Apps</p>
                </div>
              </div>
            </div>

            {/* Floating card – Profile visibility */}
            <div className="absolute bottom-28 right-0 lg:-right-2 bg-white rounded-xl shadow-lg px-4 py-2.5 z-30 border border-gray-100">
              <div className="flex items-center gap-1.5">
                <TrendingUp size={14} className="text-[#16a34a]" />
                <div>
                  <p className="text-[#0d2137] text-xs" style={{ fontWeight: 700 }}>GPA 3.81</p>
                  <p className="text-[#6b7280] text-[10px]">Mekelle University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
