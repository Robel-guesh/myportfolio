import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
  id: 1,
  title: "IC School Management System",
  description:
    "A full-featured school management platform built with React, Express.js, and MongoDB. It manages student registration, class scheduling, attendance tracking, and payment processing through an intuitive dashboard for administrators and staff.",
  image: "https://backend.lulsoft.com/uploads/1762337670342.jpg",
  tags: ["React", "Express.js", "MongoDB", "Node.js"],
  link: "https://www.e-student.icdigitals.com/",
  githubLink:"https://github.com/Robel-guesh/IcSoftwareSolutions",
  hasLink: true,
  accent: "#9900cc",
  accentBg: "#faf5ff",
},
{
  id: 2,
  title: "Lulsoft Company Website",
  description:
    "A modern company website built with React, Express.js, and MongoDB to showcase software development services, company projects, and provide a professional online presence for the business.",
  image: "https://backend.lulsoft.com/uploads/1761850886797.png",
  tags: ["React", "Express.js", "MongoDB", "Node.js"],
  link: "https://www.lulsoft.com/",
  githubLink: "https://github.com/Robel-guesh/lulsoft",
  hasLink: true,
  accent: "#76b400",
  accentBg: "#f7feff",
},
  
{
  id: 3,
  title: "Dr. Tesfa Dermatology Clinic Website",
  description:
    "A modern dermatology clinic website built with React, Express.js, and MongoDB to present skincare services, clinic information, and provide an easy way for patients to learn about treatments and contact the clinic.",
  image: "https://admin.drtesfadermatologyclinic.com/uploads/1772458083913.png",
  tags: ["React", "Express.js", "MongoDB", "Node.js"],
  link: "https://drtesfadermatologyclinic.com/",
  githubLink: "https://github.com/Robel-guesh/Dermatology-Website",
  hasLink: true,
  accent: "orange",
  accentBg: "#fff7ed",
},
 {
  id: 4,
  title: "Sun Dental Clinic Mekelle Website",
  description:
    "A modern clinic website built with React, Express.js, and MongoDB to showcase dental services, provide clinic information, and help patients easily connect with the clinic online.",
  image: "https://backend.sundentalclinicmekelle.com/uploads/1745585484991.png",
  tags: ["React", "Express.js", "MongoDB", "Node.js"],
  link: "https://www.sundentalclinicmekelle.com/",
    githubLink: "https://github.com/Robel-guesh/SunDental",

  hasLink: true,
  accent: "#001aff",
  accentBg: "#f5f7ff",
},
  
  {
    id: 5,
    title: "Bank of Abyssinia Mobile App Clone",
    description:
      "A feature-rich mobile banking application clone built with Flutter and Dart. Implements modern UI patterns, account management, transfers, and transaction history.",
    image: "https://play-lh.googleusercontent.com/18z-FSNTswVVYQrsntytpdqjpdf7oc1IBksbhpOrqeAidzg6XR-iRt0iAnFqD5WAFqya=w526-h296",
    tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
    link: "#",
    githubLink: "https://github.com/Robel-guesh/abysiniamobileapp",

    hasLink: false,
    accent: "orange",
  accentBg: "#fff7ed",
  },
  {
    id: 6,
    title: "EQUB Management System",
    description:
      "A desktop application for managing the traditional Ethiopian EQUB savings system. Built with Python Tkinter, it handles member registration, contributions, and lottery management.",
    image: "https://github.com/Robel-guesh/Equb/blob/main/image/background_photo.png?raw=true",
    tags: ["Python", "Tkinter", "Desktop", "Database"],
    link: "https://github.com/Robel-guesh/Equb",
    githubLink: "https://github.com/Robel-guesh/Equb",
    hasLink: false,
    accent: "#00DF3F",
  accentBg: "#f7feff",
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ background: "linear-gradient(180deg, #f7feff 0%, #fff7ed 100%)" }} className="py-20">
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
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
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
                     
                     
                  <a href={project?.githubLink}  target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors cursor-pointer">
                    <Github size={14} className="text-[#0d2137]" />
                  </a>
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
