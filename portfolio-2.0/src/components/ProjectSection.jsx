import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Smart Waste",
    subtitle: "Postcode-Based Waste Management System",
    category: "Smart City / AI",
    year: "2025",
    description:
      "An intelligent postcode-based waste management system designed to optimize garbage collection, route tracking, and waste monitoring for smart cities. Features real-time waste tracking, automated scheduling, and analytics dashboard.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Google Maps API",
    ],
    github: "https://github.com/yourusername/smart-waste"
  },
 {
  id: 2,
  title: "Digital Classroom",
  subtitle: "Smart E-Learning Platform",
  category: "EdTech / Web App",
  year: "2025",
  description:
    "An interactive digital classroom platform designed for modern learning with online lectures, assignment management, student-teacher interaction, attendance tracking, and real-time learning resources.",
  technologies: [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "JWT Auth",
  ],
  github: "https://github.com/pooja701691/DIGITAL_CLASSROOM"
},
  {
    id: 3,
    title: "BargainXAI",
    subtitle: "AI Negotiation & Price Comparison Platform",
    category: "AI / E-Commerce",
    year: "2025",
    description:
      "An AI-powered bargaining assistant that compares product prices across platforms and helps users negotiate smarter deals with intelligent recommendation and market trend analysis.",
    technologies: [
      "Next.js",
      "Gemini API",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/pooja701691/aisgopkeeper"
  },
];

export function ProjectSection() {
  const sectionRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".projects-label", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-label",
          start: "top 85%",
        },
      });

      gsap.from(".projects-heading-word", {
        y: 100,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 85%",
        },
      });

      gsap.from(".project-row", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="projects-label flex items-center gap-4 mb-16 md:mb-20">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            04 / Projects
          </span>

          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* Heading */}
        <div className="projects-heading overflow-hidden mb-20 md:mb-28">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-[0.4em] gap-y-[0.2em]">
            {"Featured Work".split(" ").map((word, i) => (
              <span
                key={i}
                className="projects-heading-word inline-block"
                style={{
                  color: i === 1 ? "var(--accent)" : "var(--foreground)",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Projects */}
        <div className="projects-list">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.id;
            const isExpanded = expandedProject === project.id;

            return (
              <div key={project.id} className="project-row">
                {/* Main Row */}
                <div
                  className="group cursor-pointer py-10 md:py-12 transition-all duration-500"
                  style={{
                    borderTop: "1px solid var(--border)",
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() =>
                    setExpandedProject(isExpanded ? null : project.id)
                  }
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Number */}
                    <span
                      className="font-mono text-xs hidden md:block w-12"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Title */}
                    <div className="flex-1">
                      <h3
                        className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-500"
                        style={{
                          color: isHovered
                            ? "var(--accent)"
                            : "var(--foreground)",
                          transform: isHovered
                            ? "translateX(16px)"
                            : "translateX(0)",
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Category */}
                    <span
                      className="font-mono text-xs uppercase tracking-wider hidden md:block"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.category}
                    </span>

                    {/* Year */}
                    <span
                      className="font-mono text-xs hidden md:block w-16 text-right"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {project.year}
                    </span>

                    {/* Arrow */}
                    <div
                      className="w-10 h-10 flex items-center justify-center transition-all duration-500"
                      style={{
                        transform: isExpanded
                          ? "rotate(45deg)"
                          : isHovered
                          ? "scale(1.2)"
                          : "scale(1)",
                      }}
                    >
                      <ArrowUpRight
                        size={20}
                        style={{
                          color: isHovered
                            ? "var(--accent)"
                            : "var(--muted-foreground)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isExpanded ? "500px" : "0",
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <div className="pb-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Description */}
                    <div className="md:col-span-6 md:col-start-2">
                      <p
                        className="text-sm md:text-base leading-relaxed mb-4"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {project.subtitle}
                      </p>

                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Stack + Links */}
                    <div className="md:col-span-4 md:col-start-9">
                      <h4
                        className="font-mono text-xs uppercase tracking-[0.2em] mb-4"
                        style={{ color: "var(--accent)" }}
                      >
                        Stack
                      </h4>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-mono"
                            style={{
                              border: "1px solid var(--border)",
                              color: "var(--muted-foreground)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors duration-300"
                          style={{ color: "var(--muted-foreground)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--muted-foreground)")
                          }
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={14} />
                          Code
                        </a>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors duration-300"
                          style={{ color: "var(--muted-foreground)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--muted-foreground)")
                          }
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowUpRight size={14} />
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Bottom Border */}
          <div
            className="h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>
      </div>
    </section>
  );
}