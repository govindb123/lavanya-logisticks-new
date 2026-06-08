"use client";

const services = [
  { icon: "📦", title: "Pickup Service", desc: "We collect your goods directly from your doorstep or warehouse — on time, every time.", accent: "#f97316", glow: "rgba(249,115,22,0.25)" },
  { icon: "🚚", title: "Local Delivery", desc: "Fast same-day or next-day delivery within the city using our tempo fleet.", accent: "#3b82f6", glow: "rgba(59,130,246,0.25)" },
  { icon: "🛣️", title: "Long Distance Transport", desc: "Reliable inter-city and inter-state freight movement with real-time tracking.", accent: "#22c55e", glow: "rgba(34,197,94,0.25)" },
  { icon: "🏋️", title: "Heavy Load Handling", desc: "Specialized trucks for industrial, construction, and bulk cargo of all weight categories.", accent: "#a855f7", glow: "rgba(168,85,247,0.25)" },
  { icon: "🏠", title: "Door-to-Door Delivery", desc: "Complete end-to-end logistics — we pick up and deliver right to the destination address.", accent: "#ec4899", glow: "rgba(236,72,153,0.25)" },
  { icon: "📋", title: "Freight Management", desc: "Organized documentation, scheduling, and coordination for all your shipments.", accent: "#fbbf24", glow: "rgba(251,191,36,0.25)" },
];

function ServiceCard({ s }: { s: typeof services[0] }) {
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -16;
    el.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.04,1.04,1.04)`;
    el.style.borderColor = s.accent + "55";
    el.style.boxShadow = `0 24px 60px ${s.glow}`;
  };
  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    el.style.borderColor = "rgba(255,255,255,0.08)";
    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
  };
  return (
    <div className="svc-card" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="svc-card-glow" style={{ background: `radial-gradient(ellipse at 30% 0%, ${s.glow}, transparent 70%)` }} />
      <div className="svc-icon-wrap" style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}33` }}>
        <span className="svc-icon">{s.icon}</span>
      </div>
      <h3 className="svc-title">{s.title}</h3>
      <p className="svc-desc">{s.desc}</p>
      <div className="svc-arrow" style={{ color: s.accent }}>→</div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="svc-section">
      <div className="svc-orb orb1" /><div className="svc-orb orb2" />
      <div className="svc-container">
        <div className="svc-header">
          <span className="svc-eyebrow">✦ What We Offer</span>
          <h2 className="svc-heading">Our <span className="svc-accent">Services</span></h2>
          <p className="svc-sub">Comprehensive logistics solutions tailored for businesses and individuals.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => <ServiceCard key={s.title} s={s} />)}
        </div>
      </div>
      <style>{`
        .svc-section { padding: 80px 24px; background: #f8fafc; position: relative; overflow: hidden; }
        .svc-orb { display: none; }
        .svc-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .svc-header { text-align: center; margin-bottom: 48px; }
        .svc-eyebrow { display: inline-block; background: #fff7ed; border: 1px solid #fed7aa; color: #ea580c; font-size: 13px; font-weight: 700; padding: 6px 18px; border-radius: 50px; margin-bottom: 16px; letter-spacing: 1px; text-transform: uppercase; }
        .svc-heading { font-size: clamp(1.6rem,4vw,2.8rem); font-weight: 900; color: #111827; margin: 0 0 14px; }
        .svc-accent { background: linear-gradient(90deg,#ea580c,#f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .svc-sub { color: #6b7280; max-width: 480px; margin: 0 auto; line-height: 1.75; font-size: 15px; }
        .svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .svc-card { background: #fff; border: 1.5px solid #f1f5f9; border-radius: 20px; padding: 32px 24px; position: relative; overflow: hidden; cursor: default; transition: transform 0.15s ease-out, box-shadow 0.15s ease-out, border-color 0.15s; box-shadow: 0 2px 12px rgba(0,0,0,0.06); transform-style: preserve-3d; }
        .svc-card-glow { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.3s; border-radius: 20px; }
        .svc-card:hover .svc-card-glow { opacity: 1; }
        .svc-icon-wrap { width: 58px; height: 58px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; transition: transform 0.3s; }
        .svc-card:hover .svc-icon-wrap { transform: scale(1.1) rotate(-4deg); }
        .svc-icon { font-size: 28px; }
        .svc-title { font-size: 16px; font-weight: 800; color: #111827; margin-bottom: 10px; }
        .svc-desc { color: #6b7280; font-size: 14px; line-height: 1.7; margin-bottom: 16px; }
        .svc-arrow { font-size: 18px; font-weight: 700; opacity: 0; transform: translateX(-8px); transition: opacity 0.3s, transform 0.3s; }
        .svc-card:hover .svc-arrow { opacity: 1; transform: translateX(0); }
        @media (max-width: 960px) { .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) {
          .svc-section { padding: 60px 16px; }
          .svc-grid { grid-template-columns: 1fr; gap: 14px; }
          .svc-card { padding: 24px 18px; }
          .svc-icon-wrap { width: 48px; height: 48px; }
          .svc-icon { font-size: 24px; }
        }
      `}</style>
    </section>
  );
}
