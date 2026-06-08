"use client";
import { useState, useEffect, useRef } from "react";

const links = ["Services", "Fleet", "How It Works", "Contact"];
const VEHICLES = [
  { emoji: "🚛", speed: 0.00030, offset: 0.00, size: 18 },
  { emoji: "🚚", speed: 0.00022, offset: 0.28, size: 16 },
  { emoji: "🚐", speed: 0.00017, offset: 0.55, size: 15 },
  { emoji: "🛺", speed: 0.00013, offset: 0.78, size: 14 },
];

function NavVehicles() {
  const svgRef = useRef<SVGSVGElement>(null);
  const refsMap = useRef<(SVGTextElement | null)[]>(VEHICLES.map(() => null));
  const progress = useRef(VEHICLES.map((v) => v.offset));

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let raf: number;
    function animate() {
      const W = svg!.clientWidth || window.innerWidth;
      VEHICLES.forEach((v, i) => {
        progress.current[i] = (progress.current[i] + v.speed) % 1;
        const x = W - progress.current[i] * (W + v.size * 2);
        const el = refsMap.current[i];
        if (el) el.setAttribute("transform", `translate(${x}, 0)`);
      });
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg ref={svgRef} style={{
      position: "absolute", bottom: 0, left: 0,
      width: "100%", height: "26px",
      pointerEvents: "none", zIndex: 10, overflow: "hidden",
    }}>
      {VEHICLES.map((v, i) => (
        <text key={i} ref={(el) => { refsMap.current[i] = el; }}
          y="20" fontSize={v.size}
          style={{ filter: "drop-shadow(0 0 3px rgba(234,88,12,0.5))" }}>
          {v.emoji}
        </text>
      ))}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <NavVehicles />
        <div className="nav-inner">
          <a href="#" className="brand-wrap">
            <span className="brand-icon">🚛</span>
            <span className="brand-text-wrap">
              <span className="brand-lavanya">Lavanya</span>
              <span className="brand-logisticks">Logisticks</span>
            </span>
          </a>

          <ul className="nav-links desktop-nav">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link">{l}</a>
              </li>
            ))}
          </ul>

          <a href="https://wa.me/919923175422?text=Hello%20Lavanya%20Logisticks!%20I%20want%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer" className="nav-cta desktop-nav">Get a Quote</a>

          <button className="mobile-toggle mobile-nav" onClick={() => setOpen(!open)}>
            <span className={`burger ${open ? "open" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="mobile-menu mobile-nav">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="mobile-link" onClick={() => setOpen(false)}>{l}</a>
            ))}
            <a href="https://wa.me/919923175422?text=Hello%20Lavanya%20Logisticks!%20I%20want%20to%20get%20a%20quote." target="_blank" rel="noopener noreferrer" className="mobile-cta" onClick={() => setOpen(false)}>🚛 Get a Quote</a>
          </div>
        )}
      </nav>

      <style>{`
        .navbar {
          position: fixed; top: 0; width: 100%; z-index: 100;
          background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
          border-bottom: 2px solid #fed7aa;
          transition: box-shadow 0.4s;
          overflow: hidden;
          padding-bottom: 26px;
        }
        .navbar.scrolled {
          box-shadow: 0 4px 20px rgba(234,88,12,0.15);
        }
        .nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 14px 28px;
          display: flex; align-items: center; justify-content: space-between;
          position: relative; z-index: 11;
        }
        .brand-wrap { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .brand-icon {
          font-size: 30px;
          filter: drop-shadow(0 2px 6px rgba(234,88,12,0.4));
          animation: brandBob 3s ease-in-out infinite;
        }
        @keyframes brandBob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        .brand-text-wrap { display: flex; flex-direction: column; line-height: 1; gap: 2px; }
        .brand-lavanya {
          font-size: clamp(18px, 2.2vw, 26px); font-weight: 900; letter-spacing: -0.5px;
          background: linear-gradient(90deg, #c2410c, #ea580c, #f97316, #fbbf24);
          background-size: 300% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: nameShimmer 4s linear infinite;
        }
        .brand-logisticks {
          font-size: clamp(9px, 0.9vw, 12px); font-weight: 700;
          letter-spacing: 4px; text-transform: uppercase; color: #ea580c; opacity: 0.8;
        }
        @keyframes nameShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        .nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; }
        .nav-link {
          text-decoration: none; color: #9a3412; font-weight: 600; font-size: 15px;
          position: relative; padding-bottom: 4px; transition: color 0.2s;
        }
        .nav-link::after {
          content: ""; position: absolute; bottom: 0; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #ea580c, #fbbf24);
          border-radius: 2px; transition: width 0.3s;
        }
        .nav-link:hover { color: #ea580c; }
        .nav-link:hover::after { width: 100%; }
        .nav-cta {
          background: linear-gradient(135deg, #ea580c, #c2410c);
          color: #fff; padding: 10px 24px; border-radius: 50px;
          font-weight: 700; text-decoration: none; font-size: 14px;
          box-shadow: 0 4px 16px rgba(234,88,12,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(234,88,12,0.5); }
        .mobile-toggle {
          background: rgba(234,88,12,0.1); border: 1.5px solid #fed7aa;
          width: 44px; height: 44px; border-radius: 12px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .burger, .burger::before, .burger::after {
          display: block; width: 20px; height: 2px;
          background: #ea580c; border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s; position: relative;
        }
        .burger::before, .burger::after { content: ""; position: absolute; left: 0; }
        .burger::before { top: -6px; }
        .burger::after  { top: 6px; }
        .burger.open { background: transparent; }
        .burger.open::before { transform: rotate(45deg) translate(4px,4px); }
        .burger.open::after  { transform: rotate(-45deg) translate(4px,-4px); }
        .mobile-menu {
          background: #fff7ed; border-top: 1.5px solid #fed7aa;
          padding: 16px 24px 28px; position: relative; z-index: 11;
        }
        .mobile-link {
          display: block; padding: 12px 0; color: #9a3412;
          text-decoration: none; font-weight: 500; font-size: 16px;
          border-bottom: 1px solid #fed7aa;
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover { color: #ea580c; padding-left: 8px; }
        .mobile-cta {
          display: block; margin-top: 16px;
          background: linear-gradient(135deg, #ea580c, #c2410c);
          color: #fff; text-align: center; padding: 13px;
          border-radius: 50px; font-weight: 700; text-decoration: none; font-size: 15px;
        }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
        @media (min-width: 769px) { .mobile-nav { display: none !important; } }
        @media (max-width: 480px) {
          .nav-inner { padding: 12px 16px; }
          .brand-lavanya { font-size: 18px; }
          .brand-icon { font-size: 24px; }
        }
      `}</style>
    </>
  );
}
