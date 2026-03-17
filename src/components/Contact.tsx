"use client";

import { useReveal } from "@/hooks/useReveal";
import { personal } from "@/data/content";

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

function IconLeetCode() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

// ── Icon resolver — keeps the data array free of JSX ─────────────────────────

type IconName = "linkedin" | "github" | "leetcode" | "mail";

function ContactIcon({ name }: { name: IconName }) {
  if (name === "linkedin") return <IconLinkedIn />;
  if (name === "github")   return <IconGitHub />;
  if (name === "leetcode") return <IconLeetCode />;
  return <IconMail />;
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface ContactItem {
  label:       string;
  value:       string;
  href:        string;
  description: string;
  iconName:    IconName;
}

const contacts: ContactItem[] = [
  {
    label:       "LinkedIn",
    value:       "stephanie-bernades",
    href:        personal.linkedin,
    description: "Let's connect professionally",
    iconName:    "linkedin",
  },
  {
    label:       "GitHub",
    value:       "StephB-97",
    href:        personal.github,
    description: "See my code and projects",
    iconName:    "github",
  },
  {
    label:       "LeetCode",
    value:       "Profile",
    href:        personal.leetcode,
    description: "Problem solving practice",
    iconName:    "leetcode",
  },
  {
    label:       "Email",
    value:       personal.email,
    href:        `mailto:${personal.email}`,
    description: "Direct line — always open",
    iconName:    "mail",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const { visible, setRef } = useReveal();

  return (
    <section id="contact" style={{ padding: "100px 52px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Header */}
        <div
          ref={setRef("ct-top")}
          className={`reveal ${visible["ct-top"] ? "visible" : ""}`}
          style={{ marginBottom: "64px" }}
        >
          <div className="section-label">
            <span className="section-divider" />
            <span>Get In Touch</span>
          </div>
          <h2 style={{
            fontSize:      "clamp(40px, 5vw, 68px)",
            fontWeight:    500,
            lineHeight:    1.05,
            letterSpacing: "-0.025em",
            color:         "#F0EDE6",
            marginBottom:  "20px",
          }}>
            Available for the
            <br />
            <em style={{ color: "#C4965A" }}>right opportunity.</em>
          </h2>
          <p style={{
            fontSize:   "19px",
            fontWeight: 400,
            color:      "#787060",
            lineHeight: 1.85,
            maxWidth:   "480px",
          }}>
             Interested in discussing engineering roles, collaborations,
            or opportunities in financial technology.
            Based in {personal.location}.
          </p>
        </div>

        {/* Contact cards */}
        <div
          ref={setRef("ct-cards")}
          className={`reveal delay-2 ${visible["ct-cards"] ? "visible" : ""}`}
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap:                 "1px",
            background:          "#1A1A18",
            borderRadius:        "2px",
            overflow:            "hidden",
          }}
        >
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              style={{
                display:        "flex",
                flexDirection:  "column",
                padding:        "36px 28px",
                background:     "#0F0F0D",
                textDecoration: "none",
                transition:     "background 0.3s",
                borderLeft:     "3px solid transparent",
                gap:            "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background      = "#141410";
                e.currentTarget.style.borderLeftColor = "#C4965A";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background      = "#0F0F0D";
                e.currentTarget.style.borderLeftColor = "transparent";
              }}
            >
              <span style={{ color: "#C4965A" }}>
                <ContactIcon name={item.iconName} />
              </span>
              <div>
                <div style={{
                  fontFamily:    "'Cormorant SC', serif",
                  fontSize:      "11px",
                  fontWeight:    600,
                  letterSpacing: "0.16em",
                  color:         "#4A4840",
                  textTransform: "uppercase",
                  marginBottom:  "6px",
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily:   "'Cormorant Garamond', serif",
                  fontSize:     "17px",
                  fontWeight:   400,
                  color:        "#F0EDE6",
                  marginBottom: "8px",
                  wordBreak:    "break-all",
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize:   "13px",
                  fontWeight: 400,
                  color:      "#4A4840",
                  lineHeight: 1.5,
                }}>
                  {item.description}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <div
          ref={setRef("ct-note")}
          className={`reveal delay-3 ${visible["ct-note"] ? "visible" : ""}`}
          style={{
            marginTop:      "48px",
            paddingTop:     "32px",
            borderTop:      "1px solid #1A1A18",
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            "16px",
          }}
        >
        
          
        </div>

      </div>
    </section>
  );
}