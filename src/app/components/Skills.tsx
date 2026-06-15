import { Monitor, Server, Smartphone, Database, Wrench, Code } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    icon: Monitor,
    title: "Frontend",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
    skills: ["React.js", "Bootstrap","Tailwind CSS"],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Dev",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    border: "#ddd6fe",
    skills: ["Flutter", "Dart","react native"],
  },
  {
    id: "databases",
    icon: Database,
    title: "Databases",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
    skills: ["MongoDB", "MySQL", "Firebase","Postgres","supabase"],
  },
  {
    id: "tools",
    icon: Wrench,
    title: "Tools",
    color: "#ef4444",
    bg: "#fef2f2",
    border: "#fecaca",
    skills: ["Git", "GitHub", "GitLab", "Figma"],
  },
  {
    id: "programming",
    icon: Code,
    title: "Programming",
    color: "#0d2137",
    bg: "#f0f7f4",
    border: "#a7f3d0",
    skills: ["Python", "JavaScript", "Dart","java",'c++'],
  },
];

export function Skills() {
  return (
    <section id="skills" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f7f4 100%)" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#16a34a] text-sm mb-2 tracking-widest uppercase" style={{ fontWeight: 600 }}>
            Skills
          </span>
          <h2 className="text-[#0d2137]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Technical Expertise
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl mx-auto text-sm">
            A modern stack built for scalable, production-ready applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all duration-200 group"
                style={{ borderColor: cat.border }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: cat.bg }}
                  >
                    <Icon size={18} style={{ color: cat.color }} />
                  </div>
                  <h3 className="text-[#0d2137]" style={{ fontSize: "0.95rem", fontWeight: 700 }}>
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs border"
                      style={{
                        background: cat.bg,
                        color: cat.color,
                        borderColor: cat.border,
                        fontWeight: 600,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

               
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
