"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/content";

const links = [
  { id: "about",    label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills",   label: "Skills" },
  { id: "contact",  label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        height: "62px",
        padding: "0 52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(12,12,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1C1C1A" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* Initials logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          fontFamily: "'Cormorant SC', serif",
          fontSize: "22px",
          fontWeight: 500,
          letterSpacing: "0.06em",
          color: "#F0EDE6",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {personal.initials}
      </button>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "44px" }}>
        {links.map(({ id, label }) => (
          <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </div>

      {/* Resume CTA */}
      <a
        href={personal.resume}
        target="_blank"
        rel="noreferrer"
        className="btn-outline"
        style={{ padding: "8px 22px", fontSize: "11px" }}
      >
        Resume
      </a>
    </nav>
  );
}
