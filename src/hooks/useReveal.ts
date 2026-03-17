"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal — attaches an IntersectionObserver to track which elements
 * have scrolled into view. Returns a ref-setter and a visibility map.
 *
 * Usage:
 *   const { setRef, visible } = useReveal();
 *   <div ref={setRef("hero")} className={`reveal ${visible["hero"] ? "visible" : ""}`}>
 */
export function useReveal(threshold = 0.1) {
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const refs = useRef<Record<string, Element>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.rid;
          if (id && entry.isIntersecting) {
            setVisible((v) => ({ ...v, [id]: true }));
          }
        });
      },
      { threshold }
    );

    const els = Object.values(refs.current);
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) {
      el.dataset.rid = id;
      refs.current[id] = el;
    }
  };

  return { visible, setRef };
}
