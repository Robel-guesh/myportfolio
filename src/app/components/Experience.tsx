import { Briefcase, Smartphone, Globe, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "IC Software Solutions PLC",
    role: "Software Developer",
    period: "Jan 2024 – Aug 2025",
    icon: Briefcase,
     color: "#9900cc",
    bg: "#f5f3ff",
    
    border: "#bbf7d0",
    description:
      "Developed IC School Management System using React, Express.js and MongoDB. Handled student registration, scheduling, attendance tracking, and payment management.",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
  },
  {
    id: 2,
    company: "Lul Soft",
    role: "Software Developer",
    period: "Aug 2024 – Aug 2025",
    icon: Globe,
    color: "#16a34a",
    bg: "#f0fdf4",
  
    border: "#bfdbfe",
    description:
      "Worked on multiple client web projects, delivering modern, responsive websites and web applications for businesses across various industries.",
    tags: ["React", "Node.js", "Web Development"],
    projects: [
      {
        name: "drtesfadermatologyclinic.com",
        link: "https://drtesfadermatologyclinic.com",
      },
      {
        name: "lulsoft.com",
        link: "https://lulsoft.com",
      },
      {
        name: "sundentalclinicmekelle.com",
        link: "https://sundentalclinicmekelle.com",
      },
    ],
  },
  {
    id: 3,
    company: "Niyat Consultancy",
    role: "Mobile App Developer",
    period: "Sep 2025 – Present",
    icon: Smartphone,
     color: "#3b82f6",
    bg: "#eff6ff",
    border: "#ddd6fe",
    description:
      "Developing mobile applications using Flutter for logistics and transportation industry clients. Built a truck logistics mobile app and a ride hailing application.",
    tags: ["Flutter", "Dart", "Mobile", "iOS", "Android"],
    projects: [
      {
        name: "Truck logistics  mobile Supper application",
        link: "https://play.google.com/store/apps/details?id=com.trucksload.logistics"
      },
       {
        name: "Truck logistics mobile Driver application",
        link: "https://play.google.com/store/apps/details?id=com.trucksload.driver"
      },
      {
        name: "Axumtite Ride hailing application",
        link: "#",
      },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#16a34a] text-sm mb-2 tracking-widest uppercase" style={{ fontWeight: 600 }}>
            Experience
          </span>
          <h2 className="text-[#0d2137]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Work History
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl mx-auto text-sm">
            Real-world experience building production software for companies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#16a34a] via-[#3b82f6] to-[#8b5cf6] rounded-full hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="relative flex gap-6 sm:pl-16">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-5 w-12 h-12 rounded-xl flex items-center justify-center shadow-md hidden sm:flex z-10"
                    style={{ background: exp.bg, border: `2px solid ${exp.border}` }}
                  >
                    <Icon size={18} style={{ color: exp.color }} />
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-200"
                    style={{ borderColor: exp.border }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-[#0d2137]" style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                          {exp.company}
                        </h3>
                        <p style={{ color: exp.color, fontWeight: 600, fontSize: "0.875rem" }}>
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                        <Calendar size={13} className="text-[#6b7280]" />
                        <span className="text-[#6b7280] text-xs" style={{ fontWeight: 500 }}>
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Projects */}
                    {exp.projects && (
                      <div className="mb-4">
                        <p className="text-[#9ca3af] text-xs mb-2" style={{ fontWeight: 600 }}>
                          PROJECTS DELIVERED
                        </p>
                        <ul className="flex flex-col gap-1">
                          {exp.projects.map((proj) => (
                            <li key={proj.name} className="flex items-center gap-2">
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: exp.color }}
                              />
                              {proj.link ? (
                                <a
                                  href={proj.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-[#4a5568] text-sm hover:text-[#0d2137] transition-colors"
                                >
                                  {proj.name}
                                </a>
                              ) : (
                                <span className="text-[#4a5568] text-sm">{proj.name}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg border"
                          style={{
                            background: exp.bg,
                            color: exp.color,
                            borderColor: exp.border,
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
