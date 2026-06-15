import { Mail, Phone, MapPin, Github,Linkedin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "robelguesh21@gmail.com",
    href: "mailto:robelguesh21@gmail.com",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 943667642",
    href: "tel:+251943667642",
    color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: "https://maps.app.goo.gl/9ZqZLkms52D2gtVv5",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Robel-guesh",
    href: "https://github.com/Robel-guesh",
    color: "#0d2137",
    bg: "#f8fafc",
    border: "#e2e8f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/robelguesh",
    href: "https://www.linkedin.com/in/robelguesh/",
     color: "#3b82f6",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#16a34a] text-sm mb-2 tracking-widest uppercase" style={{ fontWeight: 600 }}>
            Contact
          </span>
          <h2 className="text-[#0d2137]" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800 }}>
            Get In Touch
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl mx-auto text-sm">
            Available for freelance projects, full-time roles, and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <div className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "GitHub" || item.label === "Location" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-200 group"
                    style={{ borderColor: item.border }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.bg }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#9ca3af] text-xs mb-0.5" style={{ fontWeight: 500 }}>
                        {item.label}
                      </p>
                      <p
                        className="text-sm break-all group-hover:underline"
                        style={{ color: item.color, fontWeight: 600 }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Banner */}
            <div className="bg-[#F9FFFB] rounded-3xl border-[#21a13a] border-2 p-6 text-white">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.3 }} className="text-[#16a34a]">
                Ready to build something great together?
              </h3>
              <p className="text-[#16a34a] text-sm mt-2 mb-5">
                Let's discuss your project and see how I can help you ship faster.
              </p>
              <a
                href="mailto:robelguesh21@gmail.com"
                className="inline-flex items-center gap-2 bg-[#21a13a] hover:bg-[#15803d] text-white px-5 py-2.5 rounded-xl text-sm transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Mail size={15} />
                Send Me an Email
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[420px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.689228594507!2d38.77993727479332!3d9.000716691059477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854911e34aa3%3A0xaca58d1aacca2af!2sNiyat%20Consultancy!5e0!3m2!1sen!2set!4v1772697184475!5m2!1sen!2set"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Niyat Consultancy Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
