"use client";

import { useReveal } from "@/hooks/useReveal";
import { personal } from "@/data/content";

export default function About() {
  const { visible, setRef } = useReveal();

  return (
    <section
      id="about"
      style={{ padding: "100px 52px", borderBottom: "1px solid #1A1A18" }}
    >
      <div
        style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "90px", alignItems: "start",
        }}
      >
        {/* Left — heading */}
        <div>
          <div
            ref={setRef("about-label")}
            className={`reveal ${visible["about-label"] ? "visible" : ""}`}
          >
            <div className="section-label" style={{ marginBottom: "28px" }}>
              <span className="section-divider" />
              <span>About Me</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(34px, 3.5vw, 50px)",
                fontWeight: 300, lineHeight: 1.2,
                letterSpacing: "-0.01em", color: "#F0EDE6",
              }}
            >
              Systems that are correct under pressure — that's the standard I build to.
            </h2>
          </div>
        </div>

        {/* Right — bio + stats */}
        <div
          ref={setRef("about-body")}
          className={`reveal delay-1 ${visible["about-body"] ? "visible" : ""}`}
          style={{ paddingTop: "52px" }}
        >
          <p style={{ fontSize: "19px", fontWeight: 300, lineHeight: 1.95, color: "#787060", marginBottom: "22px" }}>
            {personal.bio1}
          </p>
          <p style={{ fontSize: "19px", fontWeight: 300, lineHeight: 1.95, color: "#787060", marginBottom: "48px" }}>
            {personal.bio2}
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "52px" }}>
            {personal.stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "54px", fontWeight: 300,
                    color: "#C4965A", lineHeight: 1, letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant SC', serif",
                    fontSize: "10px", letterSpacing: "0.16em",
                    color: "#484440", marginTop: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
