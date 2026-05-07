import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const focuses = [
  {
    num: "01",
    title: "Smart Waste Management",
    desc: "Built a postcode-based smart waste management system focused on optimized garbage collection, smart routing, and real-time monitoring for smarter cities.",
  },
  {
    num: "02",
    title: "Digital Classroom",
    desc: "Developed an interactive digital classroom platform with modern UI, online learning features, assignment handling, and student-teacher collaboration tools.",
  },
  {
    num: "03",
    title: "BargainXAI",
    desc: "Created an AI-powered smart bargaining assistant that helps users compare prices, analyze deals, and improve online shopping decisions using AI.",
  },
];

export function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section label
      gsap.from(".about-label", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-label",
          start: "top 85%",
        },
      });

      // Big text reveal
      const words = sectionRef.current.querySelectorAll(".about-word");

      gsap.from(words, {
        y: 80,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        },
      });

      // Cards animation
      gsap.from(".focus-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".focus-grid",
          start: "top 80%",
        },
      });

      // Divider animation
      gsap.from(".about-divider", {
        scaleX: 0,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".about-divider",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const aboutText =
    "Hi, I'm Pooja Jaiswal — a passionate full-stack developer and AI enthusiast focused on building impactful real-world applications using modern web technologies and intelligent systems.";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="about-label flex items-center gap-4 mb-16 md:mb-20">
          <span
            className="font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: "var(--accent)" }}
          >
            01 / About
          </span>

          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
        </div>

        {/* About Text */}
        <div className="about-text mb-20 md:mb-28">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed tracking-tight flex flex-wrap gap-x-[0.4em] gap-y-[0.2em]">
            {aboutText.split(" ").map((word, i) => (
              <span key={i} className="about-word inline-block">
                {word.includes("Pooja") ||
                word.includes("full-stack") ||
                word.includes("AI") ||
                word.includes("modern") ||
                word.includes("intelligent") ? (
                  <span style={{ color: "var(--accent)" }}>{word}</span>
                ) : (
                  <span style={{ color: "var(--foreground)" }}>{word}</span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Divider */}
        <div
          className="about-divider w-full h-px mb-24 md:mb-32 origin-left"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Focus Cards */}
        <div className="focus-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {focuses.map((focus) => (
            <div
              key={focus.num}
              className="focus-card group"
              data-cursor-hover
            >
              <span
                className="font-mono text-xs block mb-6 md:mb-8"
                style={{ color: "var(--accent)" }}
              >
                {focus.num}
              </span>

              <h3
                className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 leading-tight transition-colors duration-300"
                style={{ color: "var(--foreground)" }}
              >
                {focus.title}
              </h3>

              <p
                className="text-sm md:text-base leading-relaxed md:leading-loose"
                style={{ color: "var(--muted-foreground)" }}
              >
                {focus.desc}
              </p>

              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}