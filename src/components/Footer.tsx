"use client";

import { personal } from "@/data/content";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "28px 52px",
        borderTop: "1px solid #181816",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant SC', serif",
          fontSize: "18px", fontWeight: 500,
          letterSpacing: "0.06em", color: "#2A2820",
        }}
      >
        {personal.initials}
      </span>

      <span
        style={{
          fontFamily: "'Cormorant SC', serif",
          fontSize: "10px", letterSpacing: "0.14em", color: "#262420",
        }}
      >
        © {new Date().getFullYear()} · {personal.name}
      </span>

      <div style={{ display: "flex", gap: "28px" }}>
        {[
          { label: "GitHub",   href: personal.github },
          { label: "LinkedIn", href: personal.linkedin },
          { label: "Resume",   href: personal.resume },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'Cormorant SC', serif",
              fontSize: "11px", letterSpacing: "0.12em",
              color: "#383530", textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#C4965A")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#383530")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
