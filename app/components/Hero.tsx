"use client";
import { useEffect, useRef } from "react";

const CHIPS = [
  { label: "📍 Live Tracking", offset: 0.00 },
  { label: "⚡ Same Day",      offset: 0.25 },
  { label: "🔒 Insured Cargo", offset: 0.50 },
  { label: "🌍 Pan India",     offset: 0.75 },
];

function OrbitChips({ boxRef }: { boxRef: React.RefObject<HTMLDivElement | null> }) {
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progress = useRef(CHIPS.map((c) => c.offset));

  useEffect(() => {
    let raf: number;
    const speed = 0.0008;
    const GAP = 28; // px gap between card edge and chip centre

    function animate() {
      const box = boxRef.current;
      if (!box) { raf = requestAnimationFrame(animate); return; }

      // orbit path is GAP px outside the card on all sides
      const W  = box.offsetWidth  + GAP * 2;
      const H  = box.offsetHeight + GAP * 2;
      const ox = box.offsetLeft   - GAP;
      const oy = box.offsetTop    - GAP;
      const perimeter = 2 * (W + H);

      CHIPS.forEach((_, i) => {
        progress.current[i] = (progress.current[i] + speed) % 1;
        const dist = progress.current[i] * perimeter;
        let x = 0, y = 0;

        if (dist <= W) {
          x = dist; y = 0;
        } else if (dist <= W + H) {
          x = W; y = dist - W;
        } else if (dist <= 2 * W + H) {
          x = W - (dist - W - H); y = H;
        } else {
          x = 0; y = H - (dist - 2 * W - H);
        }

        const el = chipRefs.current[i];
        if (!el) return;
        const cw = el.offsetWidth;
        const ch = el.offsetHeight;
        el.style.left = (ox + x - cw / 2) + "px";
        el.style.top  = (oy + y - ch / 2) + "px";
      });
      raf = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(raf);
  }, [boxRef]);

  return (
    <>
      {CHIPS.map((c, i) => (
        <div
          key={c.label}
          ref={(el) => { chipRefs.current[i] = el; }}
          className="orbit-chip"
        >
          {c.label}
        </div>
      ))}
    </>
  );
}

const WHATSAPP = "https://wa.me/919923175422?text=Hello%20Lavanya%20Logisticks!%20I%20want%20to%20book%20a%20delivery.%20Please%20share%20availability%20and%20pricing.";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 22;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -22;
      card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.04,1.04,1.04)`;
    };
    const onLeave = () => {
      card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    };
    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* ── SECTION 1: Homepage — 3D card fullscreen ── */}
      <section className="home-section">
        <div className="home-orb orb-a" />
        <div className="home-orb orb-b" />
        <div className="home-orb orb-c" />

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>

        {/* Centered 3D card */}
        <div className="home-card-wrap">
          <div className="card-3d" ref={cardRef}>
            <div className="card-glow" />
            <div className="card-eyebrow">🏆 Trusted Logistics Partner</div>
            <div className="card-truck">🚛</div>
            <div className="card-title">Lavanya Logisticks</div>
            <div className="card-sub">Pickup · Transit · Delivery</div>
            <div className="card-steps">
              {[
                { icon: "📦", label: "Pickup" },
                { icon: "🛣️", label: "Transit" },
                { icon: "🏠", label: "Delivery" },
              ].map((item) => (
                <div key={item.label} className="step-chip">
                  <span className="step-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <div className="card-badge">✅ Available 7 Days a Week</div>
            <div className="card-route">
              <div className="route-dot" />
              <div className="route-line" />
              <div className="route-truck">🚛</div>
              <div className="route-line" />
              <div className="route-dot" />
            </div>
            <div className="card-actions">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="card-btn-primary">🚛 Book Now</a>
              <a href="#hero-info" className="card-btn-outline">Learn More ↓</a>
            </div>
          </div>
          {/* Orbiting chips */}
          <OrbitChips boxRef={cardRef} />
        </div>
      </section>

      {/* ── SECTION 2: Hero info — title, desc, stats ── */}
      <section id="hero-info" className="heroinfo-section">
        <div className="heroinfo-orb hi-orb1" />
        <div className="heroinfo-orb hi-orb2" />

        <div className="heroinfo-container">
          <span className="heroinfo-badge">🚛 Fast &amp; Reliable Logistics</span>

          <h1 className="heroinfo-title">
            Delivering Your Cargo{" "}
            <span className="heroinfo-accent">Safely</span>{" "}
            Across Every Mile
          </h1>

          <p className="heroinfo-desc">
            From small pickups to heavy-load trucks — Lavanya Logisticks handles your cargo with care, speed, and precision. Trusted by 500+ businesses across India.
          </p>

          <div className="heroinfo-btns">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">🚛 Book a Delivery</a>
            <a href="#services" className="btn-outline">Our Services →</a>
          </div>

          {/* Stats */}
          <div className="heroinfo-stats">
            {[
              { value: "500+", label: "Deliveries/Month", icon: "📦" },
              { value: "20+",  label: "Vehicles",          icon: "🚛" },
              { value: "10+",  label: "Years Experience",  icon: "🏆" },
              { value: "100%", label: "On-Time Delivery",  icon: "⚡" },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ══ SECTION 1 — HOMEPAGE ══ */
        .home-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0c29 0%, #1a0a00 50%, #0f0c29 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 110px;
          position: relative;
          overflow: hidden;
        }
        .home-orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.2; pointer-events: none;
        }
        .orb-a { width: 600px; height: 600px; background: radial-gradient(circle,#ea580c,transparent); top: -150px; right: -150px; }
        .orb-b { width: 400px; height: 400px; background: radial-gradient(circle,#f97316,transparent); bottom: -100px; left: -100px; }
        .orb-c { width: 300px; height: 300px; background: radial-gradient(circle,#fbbf24,transparent); top: 40%; left: 20%; opacity: 0.1; }

        /* Scroll hint */
        .scroll-hint {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.4); font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          animation: fadeUpDown 2s ease-in-out infinite;
        }
        .scroll-arrow { font-size: 18px; }
        @keyframes fadeUpDown {
          0%,100% { opacity: 0.4; transform: translateX(-50%) translateY(0); }
          50%      { opacity: 1;   transform: translateX(-50%) translateY(6px); }
        }

        /* Card wrap */
        .home-card-wrap {
          position: relative;
          display: flex; justify-content: center; align-items: center;
          z-index: 1;
          padding: 80px;
        }

        /* 3D Card — bigger */
        .card-3d {
          background: linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 36px;
          padding: 56px 52px;
          text-align: center;
          backdrop-filter: blur(24px);
          box-shadow:
            0 40px 100px rgba(0,0,0,0.6),
            0 0 0 1px rgba(255,255,255,0.05),
            inset 0 1px 0 rgba(255,255,255,0.15);
          width: 520px;
          max-width: 80vw;
          transition: transform 0.15s ease-out;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }
        .card-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 50% 0%, rgba(234,88,12,0.25), transparent 65%);
        }
        .card-eyebrow {
          display: inline-block;
          background: rgba(234,88,12,0.15); border: 1px solid rgba(234,88,12,0.35);
          color: #fb923c; font-size: 12px; font-weight: 700;
          padding: 5px 16px; border-radius: 50px; margin-bottom: 20px;
        }
        .card-truck {
          font-size: 90px; margin-bottom: 14px; display: block;
          filter: drop-shadow(0 8px 28px rgba(234,88,12,0.6));
          animation: floatTruck 3s ease-in-out infinite;
        }
        @keyframes floatTruck {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }
        .card-title {
          color: #fff; font-weight: 900; font-size: 26px; letter-spacing: -0.5px;
          background: linear-gradient(90deg,#fff,#fed7aa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .card-sub { color: #9ca3af; font-size: 14px; margin-top: 6px; margin-bottom: 4px; }

        .card-steps {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; margin-top: 24px;
        }
        .step-chip {
          background: rgba(234,88,12,0.12); border: 1px solid rgba(234,88,12,0.25);
          border-radius: 14px; padding: 14px 8px; color: #fff;
          font-size: 12px; font-weight: 600;
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          transition: background 0.2s;
        }
        .step-chip:hover { background: rgba(234,88,12,0.28); }
        .step-icon { font-size: 22px; }

        .card-badge {
          margin-top: 18px;
          background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.25);
          border-radius: 12px; padding: 11px 16px; color: #86efac;
          font-size: 13px; font-weight: 600;
        }
        .card-route {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; margin-top: 18px;
        }
        .route-dot {
          width: 10px; height: 10px; background: #ea580c;
          border-radius: 50%; box-shadow: 0 0 8px #ea580c;
        }
        .route-line {
          flex: 1; height: 2px; max-width: 60px;
          background: linear-gradient(90deg,#ea580c,#f97316); border-radius: 2px;
        }
        .route-truck { font-size: 20px; animation: driveRoute 2s linear infinite; }
        @keyframes driveRoute {
          0%   { transform: translateX(-4px); }
          50%  { transform: translateX(4px); }
          100% { transform: translateX(-4px); }
        }

        .card-actions {
          display: flex; gap: 12px; margin-top: 24px; justify-content: center;
        }
        .card-btn-primary {
          background: linear-gradient(135deg,#f97316,#ea580c);
          color: #fff; padding: 12px 24px; border-radius: 50px;
          font-weight: 700; font-size: 14px; text-decoration: none;
          box-shadow: 0 6px 24px rgba(234,88,12,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(234,88,12,0.6); }
        .card-btn-outline {
          border: 2px solid rgba(234,88,12,0.5); color: #fb923c;
          padding: 12px 24px; border-radius: 50px;
          font-weight: 700; font-size: 14px; text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .card-btn-outline:hover { background: rgba(234,88,12,0.1); transform: translateY(-2px); }

        /* Orbit chips */
        .orbit-chip {
          position: absolute;
          background: linear-gradient(135deg, rgba(234,88,12,0.9), rgba(249,115,22,0.9));
          color: #fff;
          font-size: 13px; font-weight: 800;
          padding: 10px 18px;
          border-radius: 50px;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(234,88,12,0.5), 0 0 0 2px rgba(255,255,255,0.15);
          pointer-events: none;
          z-index: 20;
          letter-spacing: 0.3px;
          backdrop-filter: blur(8px);
        }

        /* ══ SECTION 2 — HERO INFO ══ */
        .heroinfo-section {
          min-height: 100vh;
          background: linear-gradient(180deg, #0f0c29 0%, #1a0500 50%, #0f0c29 100%);
          display: flex; align-items: center;
          position: relative; overflow: hidden;
        }
        .heroinfo-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); opacity: 0.18; pointer-events: none;
        }
        .hi-orb1 { width: 500px; height: 500px; background: radial-gradient(circle,#ea580c,transparent); top: -80px; right: -80px; }
        .hi-orb2 { width: 400px; height: 400px; background: radial-gradient(circle,#6366f1,transparent); bottom: -60px; left: -60px; }

        .heroinfo-container {
          max-width: 860px; margin: 0 auto;
          padding: 80px 24px; width: 100%;
          position: relative; z-index: 1;
          text-align: center;
        }
        .heroinfo-badge {
          display: inline-block;
          background: rgba(234,88,12,0.15); border: 1px solid rgba(234,88,12,0.4);
          color: #fb923c; font-size: 13px; font-weight: 700;
          padding: 6px 18px; border-radius: 50px; margin-bottom: 28px;
        }
        .heroinfo-title {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900; color: #fff; line-height: 1.15;
          margin-bottom: 24px; letter-spacing: -0.5px;
        }
        .heroinfo-accent {
          background: linear-gradient(90deg,#f97316,#fbbf24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .heroinfo-desc {
          color: #9ca3af; font-size: 18px; line-height: 1.8;
          margin-bottom: 40px; max-width: 640px; margin-left: auto; margin-right: auto;
        }
        .heroinfo-btns {
          display: flex; gap: 16px; flex-wrap: wrap;
          justify-content: center; margin-bottom: 64px;
        }
        .btn-primary {
          background: linear-gradient(135deg,#f97316,#ea580c);
          color: #fff; padding: 15px 36px; border-radius: 50px;
          font-weight: 700; font-size: 16px; text-decoration: none;
          box-shadow: 0 8px 32px rgba(234,88,12,0.45);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(234,88,12,0.6); }
        .btn-outline {
          border: 2px solid rgba(234,88,12,0.6); color: #fb923c;
          padding: 15px 36px; border-radius: 50px;
          font-weight: 700; font-size: 16px; text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-outline:hover { background: rgba(234,88,12,0.1); transform: translateY(-2px); }

        /* Stats */
        .heroinfo-stats {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 20px;
        }
        .stat-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px; padding: 28px 16px; text-align: center;
          backdrop-filter: blur(12px);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          border-color: rgba(234,88,12,0.4);
          box-shadow: 0 16px 40px rgba(234,88,12,0.2);
        }
        .stat-icon { font-size: 28px; margin-bottom: 10px; }
        .stat-value {
          font-size: 32px; font-weight: 900;
          background: linear-gradient(135deg,#f97316,#fbbf24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .stat-label {
          font-size: 12px; color: #6b7280; margin-top: 6px;
          font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .home-section { padding-top: 100px; }
          .home-card-wrap { padding: 48px 16px; }
          .card-3d { padding: 36px 22px; width: 100%; max-width: 340px; }
          .card-truck { font-size: 64px; }
          .card-title { font-size: 20px; }
          .orbit-chip { font-size: 10px; padding: 6px 10px; }
          .heroinfo-container { padding: 60px 20px; }
          .heroinfo-title { font-size: clamp(1.6rem,6vw,2.4rem); }
          .heroinfo-desc { font-size: 15px; }
          .heroinfo-btns { flex-direction: column; align-items: center; }
          .btn-primary, .btn-outline { width: 100%; max-width: 300px; text-align: center; padding: 14px 24px; }
          .heroinfo-stats { grid-template-columns: repeat(2,1fr); gap: 12px; }
          .stat-card { padding: 20px 10px; }
          .stat-value { font-size: 24px; }
          .stat-icon { font-size: 22px; }
        }
        @media (max-width: 400px) {
          .card-3d { padding: 28px 16px; }
          .card-truck { font-size: 52px; }
          .card-steps { gap: 6px; }
          .step-chip { padding: 10px 4px; font-size: 11px; }
          .card-actions { flex-direction: column; gap: 8px; }
          .card-btn-primary, .card-btn-outline { width: 100%; text-align: center; }
          .heroinfo-stats { grid-template-columns: repeat(2,1fr); gap: 8px; }
        }
      `}</style>
    </>
  );
}
