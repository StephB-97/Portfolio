import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephanie Bernades — Software Engineer",
  description:
    "CS student at Hunter College, CUNY. Building scalable systems and thoughtful interfaces. Seeking Summer 2026 internships in New York.",
  openGraph: {
    title: "Stephanie Bernades — Software Engineer",
    description: "CS student at Hunter College. AWS-certified. Building scalable systems and thoughtful interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
