import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "IC School Management System",
    description:
      "A comprehensive school management platform built with React, Express.js, and MongoDB. Handles student registration, scheduling, attendance tracking, and payment management.",
    image: "https://images.unsplash.com/photo-1558092535-648ec3c50158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtYW5hZ2VtZW50JTIwc3lzdGVtJTIwZGFzaGJvYXJkJTIwVUl8ZW58MXx8fHwxNzcyNjk3OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    link: "https://www.e-student.icdigitals.com/",
    hasLink: true,
    accent: "#16a34a",
    accentBg: "#f0fdf4",
  },
  {
    id: 2,
    title: "Bank of Abyssinia Mobile App Clone",
    description:
      "A feature-rich mobile banking application clone built with Flutter and Dart. Implements modern UI patterns, account management, transfers, and transaction history.",
    image: "https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwbW9iaWxlJTIwYXBwJTIwZmludGVjaHxlbnwxfHx8fDE3NzI2OTc5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
    link: "#",
    hasLink: false,
    accent: "#3b82f6",
    accentBg: "#eff6ff",
  },
  {
    id: 3,
    title: "EQUB Management System",
    description:
      "A desktop application for managing the traditional Ethiopian EQUB savings system. Built with Python Tkinter, it handles member registration, contributions, and lottery management.",
    image: "https://images.unsplash.com/photo-1590482930637-c8d907ce02bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1hbmFnZW1lbnQlMjBzb2Z0d2FyZXxlbnwxfHx8fDE3NzI2OTc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "Tkinter", "Desktop", "Database"],
    link: "#",
    hasLink: false,
    accent: "#8b5cf6",
    accentBg: "#f5f3ff",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f0f7f4 100%)" }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#16a34a] text-sm mb-2 tracking-widest uppercase" style={{ fontWeight: 600 }}>
            Portfolio
          </span>
          <h2 className="text-[#0d2137]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl mx-auto text-sm">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Overlay links */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.hasLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ExternalLink size={14} className="text-[#0d2137]" />
                    </a>
                  )}
                  <button className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors cursor-pointer">
                    <Github size={14} className="text-[#0d2137]" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#0d2137] mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg border"
                      style={{
                        background: project.accentBg,
                        color: project.accent,
                        borderColor: project.accent + "40",
                        fontWeight: 600,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.hasLink ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm border transition-all duration-200"
                    style={{
                      background: project.accentBg,
                      color: project.accent,
                      borderColor: project.accent + "40",
                      fontWeight: 600,
                    }}
                  >
                    <ExternalLink size={14} />
                    Visit Website
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm border"
                    style={{
                      background: "#f9fafb",
                      color: "#9ca3af",
                      borderColor: "#e5e7eb",
                      fontWeight: 600,
                    }}
                  >
                    Private Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
