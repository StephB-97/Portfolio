"use client";

import { useReveal } from "@/hooks/useReveal";
import { skills } from "@/data/content";

export default function Skills() {
  const { visible, setRef } = useReveal();

  return (
    <section
      id="skills"
      style={{ padding: "100px 52px", borderBottom: "1px solid #1A1A18" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={setRef("sk-top")}
          className={`reveal ${visible["sk-top"] ? "visible" : ""}`}
          style={{ marginBottom: "56px" }}
        >
          <div className="section-label">
            <span className="section-divider" />
            <span>Tech Stack</span>
          </div>
          <h2 style={{ fontSize: "clamp(34px, 3.5vw, 50px)", fontWeight: 500, letterSpacing: "-0.01em", color: "#F0EDE6" }}>
            Technical Capabilities
          </h2>
        </div>

        {/* Skill rows — slide in from the left */}
        {skills.map((s, i) => (
          <div
            key={s.category}
            ref={setRef(`sk${i}`)}
            className="skill-row reveal-left"
            style={{
              opacity: visible[`sk${i}`] ? 1 : 0,
              transform: visible[`sk${i}`] ? "translateX(0)" : "translateX(-28px)",
              transition: `opacity 0.65s ease ${i * 0.1}s, transform 0.65s ease ${i * 0.1}s`,
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant SC', serif",
                fontSize: "12px", letterSpacing: "0.14em",
                color: "#C4965A", textTransform: "uppercase",
              }}
            >
              {s.category}
            </span>
            <span style={{ fontSize: "19px", fontWeight: 400, color: "#908878", lineHeight: 1.7 }}>
              {s.items}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
