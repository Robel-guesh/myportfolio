import { MapPin, Mail, GraduationCap, Award, User } from "lucide-react";

const aboutData = {
  name: "Robel Guesh Tsehaye",
  location: "Addis Ababa, Ethiopia",
  email: "robelguesh21@gmail.com",
  description:
    "Information Technology graduate from Mekelle University with strong experience in software development, backend engineering, and UI/UX design using modern tools such as Node.js, React, Flutter, and Python.",
  education: {
    institution: "Mekelle Institute of Technology – Mekelle University",
    degree: "BSc in Information Technology",
    gpa: "3.81",
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#16a34a] text-sm mb-2 tracking-widest uppercase" style={{ fontWeight: 600 }}>
            About Me
          </span>
          <h2 className="text-[#0d2137]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Who I Am
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl mx-auto text-sm">
            Passionate developer building real solutions with modern technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-[#f0f7f4] to-[#eef6ff] rounded-2xl p-8 border border-green-100 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#16a34a] flex items-center justify-center shadow-md flex-shrink-0">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-[#0d2137]" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  {aboutData.name}
                </h3>
                <p className="text-[#16a34a] text-sm" style={{ fontWeight: 500 }}>
                  Backend Developer & Full-Stack Engineer
                </p>
              </div>
            </div>

            <p className="text-[#4a5568] text-sm leading-relaxed mb-6">
              {aboutData.description}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-[#16a34a]" />
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs" style={{ fontWeight: 500 }}>Location</p>
                  <p className="text-[#0d2137] text-sm" style={{ fontWeight: 600 }}>{aboutData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-[#16a34a]" />
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs" style={{ fontWeight: 500 }}>Email</p>
                  <a
                    href={`mailto:${aboutData.email}`}
                    className="text-[#0d2137] text-sm hover:text-[#16a34a] transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    {aboutData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0d2137] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <GraduationCap size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs mb-0.5" style={{ fontWeight: 500 }}>Education</p>
                  <h3 className="text-[#0d2137]" style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {aboutData.education.degree}
                  </h3>
                </div>
              </div>
              <p className="text-[#4a5568] text-sm mb-4" style={{ fontWeight: 500 }}>
                {aboutData.education.institution}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-green-50 rounded-lg px-3 py-2 border border-green-100">
                  <Award size={14} className="text-[#16a34a]" />
                  <span className="text-[#16a34a] text-sm" style={{ fontWeight: 700 }}>
                    GPA: {aboutData.education.gpa}
                  </span>
                </div>
                <span className="text-[#6b7280] text-xs">· Graduated with Distinction</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Backend Projects", value: "5+", color: "#16a34a" },
                { label: "Mobile Apps", value: "3+", color: "#0d2137" },
                { label: "Years of Study", value: "4 Yrs", color: "#0d2137" },
                { label: "Technologies", value: "15+", color: "#16a34a" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center"
                >
                  <p style={{ fontSize: "1.75rem", fontWeight: 800, color: stat.color, lineHeight: 1.2 }}>
                    {stat.value}
                  </p>
                  <p className="text-[#6b7280] text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
