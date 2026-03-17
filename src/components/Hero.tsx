"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/content";

/* ── Inline SVG icons — no extra library needed ── */
const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconGitHub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

/* LeetCode doesn't have a standard Feather icon — using a clean custom path */
const IconLeetCode = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const socialLinks = [
  { href: personal.linkedin, label: "LinkedIn",  Icon: IconLinkedIn },
  { href: personal.github,   label: "GitHub",    Icon: IconGitHub   },
  { href: personal.leetcode, label: "LeetCode",  Icon: IconLeetCode },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        padding: "0 52px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        borderBottom: "1px solid #1A1A18",
      }}
    >
      {/* Photo circle */}
      <div
        style={{
          width: 120, height: 120,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid #2A2820",
          marginBottom: "36px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "scale(1)" : "scale(0.92)",
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          flexShrink: 0,
          background: "#141410",
        }}
      >
        <img
          src={personal.photo}
          alt={personal.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            if (t.parentElement) {
              t.parentElement.style.display = "flex";
              t.parentElement.style.alignItems = "center";
              t.parentElement.style.justifyContent = "center";
              t.parentElement.innerHTML = `<span style="font-family:'Cormorant SC',serif;font-size:32px;color:#C4965A;font-weight:500">${personal.initials}</span>`;
            }
          }}
        />
      </div>

      {/* Name */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(44px, 6vw, 80px)",
          fontWeight: 500,
          letterSpacing: "0.04em",
          lineHeight: 1.08,
          color: "#F0EDE6",
          marginBottom: "18px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 1s ease 0.25s, transform 1s ease 0.25s",
        }}
      >
        {personal.name}
      </h1>

      {/* Role */}
      <p
        style={{
          fontFamily: "'Cormorant SC', serif",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.22em",
          color: "#C4965A",
          textTransform: "uppercase",
          marginBottom: "24px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
        }}
      >
        {personal.role}
      </p>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 1.8vw, 22px)",
          fontWeight: 400,
          color: "#9A9080",
          maxWidth: "520px",
          lineHeight: 1.7,
          marginBottom: "44px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.9s ease 0.55s, transform 0.9s ease 0.55s",
        }}
      >
        {personal.tagline}
      </p>

      {/* Social icons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "44px",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.9s ease 0.65s, transform 0.9s ease 0.65s",
        }}
      >
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="social-icon"
            title={label}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* CTA buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.9s ease 0.75s, transform 0.9s ease 0.75s",
        }}
      >
        <button
          className="btn-outline"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Work
        </button>
        <button
          className="btn-gold"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get In Touch
        </button>
      </div>

      {/* Stats row */}
      <div
        style={{
          position: "absolute",
          bottom: "44px",
          left: "52px",
          right: "52px",
          display: "flex",
          justifyContent: "center",
          gap: "clamp(32px, 6vw, 80px)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        {personal.stats.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: "'Cormorant SC', serif",
              fontSize: "clamp(24px, 2.5vw, 34px)",
              fontWeight: 500,
              color: "#C4965A",
              lineHeight: 1,
              marginBottom: "6px",
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "'Cormorant SC', serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.16em",
              color: "#4A4640",
              textTransform: "uppercase",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
