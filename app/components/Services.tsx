"use client";

const services = [
  { icon: "📦", title: "Pickup Service",          desc: "We collect your goods directly from your doorstep or warehouse — on time, every time.",                     accent: "#f97316", bg: "linear-gradient(135deg,#fff7ed,#ffedd5)", border: "#fed7aa", num: "01" },
  { icon: "🚚", title: "Local Delivery",           desc: "Fast same-day or next-day delivery within the city using our full tempo fleet.",                             accent: "#3b82f6", bg: "linear-gradient(135deg,#eff6ff,#dbeafe)", border: "#bfdbfe", num: "02" },
  { icon: "🛣️", title: "Long Distance Transport",  desc: "Reliable inter-city and inter-state freight movement with real-time tracking.",                             accent: "#22c55e", bg: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: "#bbf7d0", num: "03" },
  { icon: "🏋️", title: "Heavy Load Handling",      desc: "Specialized trucks for industrial, construction, and bulk cargo of all weight categories.",                 accent: "#a855f7", bg: "linear-gradient(135deg,#faf5ff,#ede9fe)", border: "#ddd6fe", num: "04" },
  { icon: "🏠", title: "Door-to-Door Delivery",    desc: "Complete end-to-end logistics — we pick up and deliver right to the destination address.",                  accent: "#ec4899", bg: "linear-gradient(135deg,#fdf2f8,#fce7f3)", border: "#fbcfe8", num: "05" },
  { icon: "📋", title: "Freight Management",       desc: "Organized documentation, scheduling, and coordination for all your shipments.",                             accent: "#f59e0b", bg: "linear-gradient(135deg,#fffbeb,#fef3c7)", border: "#fde68a", num: "06" },
];

function ServiceCard({ s, featured }: { s: typeof services[0]; featured?: boolean }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 20;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -20;
    el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.04,1.04,1.04)`;
    el.style.boxShadow = `0 32px 64px ${s.accent}33, 0 0 0 2px ${s.border}`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    el.style.boxShadow = `0 4px 24px rgba(0,0,0,0.08), 0 0 0 1.5px ${s.border}`;
  };

  return (
    <div
      className={`svc-card ${featured ? "svc-featured" : ""}`}
      style={{ background: s.bg, "--accent": s.accent, "--border": s.border } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Shine sweep */}
      <div className="svc-shine" />

      {/* Number badge */}
      <div className="svc-num" style={{ color: s.accent, background: `${s.accent}15` }}>{s.num}</div>

      {/* Icon */}
      <div className="svc-icon-wrap" style={{ background: `${s.accent}18`, border: `2px solid ${s.accent}30`, boxShadow: `0 8px 24px ${s.accent}22` }}>
        <span className="svc-icon">{s.icon}</span>
        <div className="svc-icon-ring" style={{ borderColor: `${s.accent}40` }} />
      </div>

      <h3 className="svc-title" style={{ color: "#111827" }}>{s.title}</h3>
      <p className="svc-desc">{s.desc}</p>

      {/* Bottom bar */}
      <div className="svc-bar-wrap">
        <div className="svc-bar" style={{ background: `linear-gradient(90deg,${s.accent},${s.accent}55)` }} />
        <span className="svc-learn" style={{ color: s.accent }}>Learn more →</span>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="svc-section">
      {/* Decorative blobs */}
      <div className="svc-blob blob1" />
      <div className="svc-blob blob2" />

      <div className="svc-container">
        <div className="svc-header">
          <span className="svc-eyebrow">✦ What We Offer</span>
          <h2 className="svc-heading">
            Our <span className="svc-accent">Services</span>
          </h2>
          <p className="svc-sub">Comprehensive logistics solutions tailored for businesses and individuals across India.</p>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => <ServiceCard key={s.title} s={s} featured={i === 0} />)}
        </div>
      </div>

      <style>{`
        .svc-section {
          padding: 90px 24px;
          background: #f1f5f9;
          position: relative; overflow: hidden;
        }
        .svc-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.5; pointer-events: none;
        }
        .blob1 { width: 400px; height: 400px; background: #ffedd5; top: -100px; left: -80px; }
        .blob2 { width: 350px; height: 350px; background: #dbeafe; bottom: -80px; right: -60px; }

        .svc-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }

        /* Header */
        .svc-header { text-align: center; margin-bottom: 56px; }
        .svc-eyebrow {
          display: inline-block; background: #fff7ed; border: 1.5px solid #fed7aa;
          color: #ea580c; font-size: 12px; font-weight: 800;
          padding: 6px 20px; border-radius: 50px; margin-bottom: 18px;
          letter-spacing: 2px; text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(234,88,12,0.12);
        }
        .svc-heading {
          font-size: clamp(1.8rem,4vw,3rem); font-weight: 900;
          color: #111827; margin: 0 0 16px; letter-spacing: -0.5px;
        }
        .svc-accent {
          background: linear-gradient(90deg,#ea580c,#f97316,#fbbf24);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .svc-sub { color: #6b7280; max-width: 500px; margin: 0 auto; line-height: 1.8; font-size: 16px; }

        /* Grid */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Card */
        .svc-card {
          border-radius: 24px;
          padding: 36px 28px 28px;
          position: relative; overflow: hidden;
          cursor: default;
          transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 0 0 1.5px var(--border);
          transform-style: preserve-3d;
        }

        /* Shine sweep on hover */
        .svc-shine {
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.55) 50%, transparent 60%);
          background-size: 200% 100%;
          background-position: -100% 0;
          pointer-events: none;
          transition: background-position 0s;
          border-radius: 24px;
        }
        .svc-card:hover .svc-shine {
          background-position: 200% 0;
          transition: background-position 0.5s ease;
        }

        /* Number */
        .svc-num {
          position: absolute; top: 20px; right: 20px;
          font-size: 11px; font-weight: 900; letter-spacing: 1px;
          padding: 4px 10px; border-radius: 50px;
        }

        /* Icon */
        .svc-icon-wrap {
          width: 68px; height: 68px; border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 22px;
          position: relative;
          transition: transform 0.3s;
        }
        .svc-card:hover .svc-icon-wrap {
          transform: scale(1.12) translateY(-4px) rotate(-6deg);
        }
        .svc-icon { font-size: 32px; position: relative; z-index: 1; }
        .svc-icon-ring {
          position: absolute; inset: -6px; border-radius: 26px;
          border: 2px dashed;
          animation: spinRing 8s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .svc-card:hover .svc-icon-ring { opacity: 1; }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .svc-title {
          font-size: 18px; font-weight: 800;
          margin-bottom: 10px; letter-spacing: -0.2px;
        }
        .svc-desc {
          color: #6b7280; font-size: 14px; line-height: 1.75;
          margin-bottom: 24px;
        }

        /* Bottom bar */
        .svc-bar-wrap {
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
        .svc-bar {
          height: 3px; flex: 1; border-radius: 2px;
          transform: scaleX(0.3); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .svc-card:hover .svc-bar { transform: scaleX(1); }
        .svc-learn {
          font-size: 13px; font-weight: 700;
          opacity: 0; transform: translateX(-6px);
          transition: opacity 0.3s, transform 0.3s;
          white-space: nowrap;
        }
        .svc-card:hover .svc-learn { opacity: 1; transform: translateX(0); }

        /* Featured card (first one) */
        .svc-featured {
          grid-row: span 1;
          box-shadow: 0 8px 40px rgba(234,88,12,0.18), 0 0 0 2px #fed7aa;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .svc-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 560px) {
          .svc-section { padding: 60px 16px; }
          .svc-grid { grid-template-columns: 1fr; gap: 16px; }
          .svc-card { padding: 28px 20px 22px; }
          .svc-icon-wrap { width: 56px; height: 56px; }
          .svc-icon { font-size: 26px; }
          .svc-title { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
