"use client";

import { useReveal } from "@/hooks/useReveal";
import { projects } from "@/data/content";

export default function Projects() {
  const { visible, setRef } = useReveal();

  return (
    <section
      id="projects"
      style={{ padding: "100px 52px", borderBottom: "1px solid #1A1A18" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={setRef("proj-top")}
          className={`reveal ${visible["proj-top"] ? "visible" : ""}`}
          style={{ marginBottom: "64px" }}
        >
          <div className="section-label">
            <span className="section-divider" />
            <span>Selected Work</span>
          </div>
          <h2 style={{
            fontSize: "clamp(34px, 3.5vw, 50px)",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "#F0EDE6",
          }}>
            Projects
          </h2>
        </div>

        {/*
          Auto-fit grid: cards are minimum 300px wide.
          Add or remove projects in content.ts — the grid reflows automatically.
          2 projects → 2 columns | 3 → 3 | 4 → 2×2 | 5 → 3+2 | 6 → 3×2 etc.
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "#1A1A18",   /* gap colour between cards */
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.title}
              ref={setRef(`p${i}`)}
              className="card"
              style={{
                opacity: visible[`p${i}`] ? 1 : 0,
                transform: visible[`p${i}`] ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${(i % 3) * 0.12}s, transform 0.7s ease ${(i % 3) * 0.12}s`,
              }}
            >
              {/* Card number */}
              <div style={{
                fontFamily: "'Cormorant SC', serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                color: "#3A3830",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 1.6vw, 24px)",
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "#F0EDE6",
                marginBottom: "16px",
                lineHeight: 1.25,
              }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "17px",
                fontWeight: 400,
                color: "#7A7060",
                lineHeight: 1.75,
                marginBottom: "28px",
                flexGrow: 1,
              }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="gold-cta"
                style={{ marginTop: "auto" }}
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
