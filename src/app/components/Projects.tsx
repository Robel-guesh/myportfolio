import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projectCategoryLabels = {
  all: "All",
  website: "Website",
  mobile: "Mobile",
  "ui/ux": "UI/UX",
  desktop: "Desktop",
} as const;

const projects = [
  
     {
    id: 7,
    title: "Trucksload Logistics Super App",
    description:
      "Developed a cross-platform logistics super app for truck load management and transportation services. Implemented shipment management, order tracking, real-time updates, and user-friendly workflows. Collaborated with backend services and APIs to ensure reliable data synchronization. Used Riverpod for state management.",
    image: "https://trucksload.net/assets/images/GetTheApp.png",
    tags: ["Flutter", "Dart", "Mobile", "Riverpod"],
    category: "mobile",
    link: "https://play.google.com/store/apps/details?id=com.trucksload.logistics",
    githubLink: "",
    hasLink: true,
    accent: "#3b82f6",
    accentBg: "#eff6ff",
  },
  {
    id: 8,
    title: "Trucksload Driver App",
    description:
      "Developed a dedicated driver application for truck operators. Implemented trip management, route tracking, delivery status updates, and real-time communication features. Optimized application performance and user experience for daily operational use. Used Bloc for state management.",
    image: "https://play-lh.googleusercontent.com/k556w8Dw-YSqYgAM3h8HF7K7w9mEwyqlPVKQSYaqFSdcKApDWRiV1i4nkmGI_F4KfQlY4chuWc9NdPO7jFRd7A=w480-h960-rw",
    tags: ["Flutter", "Dart", "Mobile", "BLoC"],
    category: "mobile",
    link: "https://play.google.com/store/apps/details?id=com.trucksload.driver",
    githubLink: "",
    hasLink: true,
    accent: "#3b82f6",
    accentBg: "#eff6ff",
  },
  {
    id: 9,
    title: "Axumtite Ride Hailing Driver App",
    description:
      "Developed a ride-hailing driver application using Flutter. Implemented Clean Architecture, BLoC state management, and dependency injection with GetIt. Integrated real-time trip requests using SignalR, driver status management, location tracking, push notifications with Firebase, and backend APIs. Contributed to performance optimization and feature enhancements.",
    image: "https://axumiteride.com/uploads//images/corporate.jpeg",
    tags: ["Flutter", "Clean Architecture", "BLoC","signalR" ],
    category: "mobile",
    link: "#",
    githubLink: "",
    hasLink: false,
    accent: "#3b82f6",
    accentBg: "#eff6ff",
  },
  {
    id: 3,
    title: "Dr. Tesfa Dermatology Clinic Website",
    description:
      "A modern dermatology clinic website built with React, Express.js, and MongoDB to present skincare services, clinic information, and provide an easy way for patients to learn about treatments and contact the clinic.",
    image: "https://admin.drtesfadermatologyclinic.com/uploads/1772458083913.png",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    category: "website",
    link: "https://drtesfadermatologyclinic.com/",
    githubLink: "https://github.com/Robel-guesh/Dermatology-Website",
    hasLink: true,
    accent: "orange",
    accentBg: "#fff7ed",
  },
  {
    id: 1,
    title: "IC School Management System",
    description:
      "A full-featured school management platform built with React, Express.js, and MongoDB. It manages student registration, class scheduling, attendance tracking, and payment processing through an intuitive dashboard for administrators and staff.",
    image: "/ic.png",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    category: "website",
    link: "https://www.e-student.icdigitals.com/",
    githubLink: "https://github.com/Robel-guesh/IcSoftwareSolutions",
    hasLink: true,
    accent: "#9900cc",
    accentBg: "#faf5ff",
  },
  {
    id: 2,
    title: "Lulsoft Company Website",
    description:
      "A modern company website built with React, Express.js, and MongoDB to showcase software development services, company projects, and provide a professional online presence for the business.",
    image: "/lulsoft.png",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    category: "website",
    link: "https://www.lulsoft.com/",
    githubLink: "https://github.com/Robel-guesh/lulsoft",
    hasLink: true,
    accent: "#76b400",
    accentBg: "#f7feff",
  },
  
  {
    id: 4,
    title: "Sun Dental Clinic Mekelle Website",
    description:
      "A modern clinic website built with React, Express.js, and MongoDB to showcase dental services, provide clinic information, and help patients easily connect with the clinic online.",
    image: "/sundental.jpg",
    tags: ["React", "Express.js", "MongoDB", "Node.js"],
    category: "website",
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
    image: "https://www.bankofabyssinia.com/wp-content/uploads/2024/02/ABYSSINIA_BANK_Classic-Visa-e1715240505908.png",
    tags: ["Flutter", "Dart", "Mobile", "UI/UX"],
    category: "mobile",
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
    category: "desktop",
    link: "https://github.com/Robel-guesh/Equb",
    githubLink: "https://github.com/Robel-guesh/Equb",
    hasLink: false,
    accent: "#00DF3F",
    accentBg: "#f7feff",
  },
 
  {
    id: 10,
    title: "Abner Guesthouse Management Platform",
    description:
      "Developed a full-stack guesthouse management platform using React, Vite, Express, and Prisma. Implemented room reservations, restaurant and bar order management, inventory tracking, laundry services, payment processing, audit reporting, staff shift management, role-based access control, and secure JWT authentication. Built comprehensive admin dashboards, guest booking workflows, and operational management tools to streamline hotel operations.",
    image: "/abner.png",
    tags: ["React", "Vite", "Express", "Prisma", "Full-stack"],
    category: "website",
    link: "https://abnerguesthouse.com/",
    githubLink: "",
    hasLink: true,
    accent: "#16a34a",
    accentBg: "#f0fdf4",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "website" | "mobile" | "desktop" | "ui/ux">("all");
  const projectCategories = ["all", "website", "mobile", "desktop", "ui/ux"] as const;
  const availableProjectCategories = projectCategories.filter(
    (category) => category === "all" || projects.some((project) => project.category === category)
  );
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" style={{ background: "linear-gradient(180deg, #f7feff 0%, #FAF8F6 20%, #f7feff 0%)" }} className="py-20">
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

        {availableProjectCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {availableProjectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-[#0d2137] text-white"
                    : "bg-white border border-gray-200 text-[#4b5563] hover:bg-gray-50"
                }`}
              >
                {projectCategoryLabels[category]}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden ">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                {/* Overlay links */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.hasLink && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open project link"
                      className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ExternalLink size={14} className="text-[#0d2137]" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open GitHub repository"
                      className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors cursor-pointer"
                    >
                      <Github size={14} className="text-[#0d2137]" />
                    </a>
                  )}
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
                <div className="flex j flex-wrap gap-2 mb-4">
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
