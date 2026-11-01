"use client";

import { useEffect, useRef, useState } from "react";

export default function Toc({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  const navRef = useRef(null);

  // Highlight the section currently being read
  useEffect(() => {
    const targets = items
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  // On phones the contents bar scrolls sideways: keep the active pill in view
  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector('[aria-current="true"]');
    if (!nav || !link) return;
    if (getComputedStyle(nav).overflowX !== "auto") return;
    nav.scrollTo({
      left: link.offsetLeft - nav.clientWidth / 2 + link.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <nav className="toc" aria-label="Contents" ref={navRef}>
      {items.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="toc-link"
          aria-current={active === s.id ? "true" : undefined}
        >
          <span className="toc-num">{s.num}.</span> {s.title}
        </a>
      ))}
    </nav>
  );
}
