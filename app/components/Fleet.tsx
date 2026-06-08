"use client";

const fleet = [
  { icon: "🛺", name: "Mini Tempo", capacity: "Up to 500 kg", ideal: "Small parcels, grocery, local deliveries", accent: "#f59e0b", glow: "rgba(245,158,11,0.3)" },
  { icon: "🚐", name: "Tempo Traveller", capacity: "500 kg – 1.5 Ton", ideal: "Furniture, appliances, medium cargo", accent: "#3b82f6", glow: "rgba(59,130,246,0.3)" },
  { icon: "🚛", name: "Medium Truck", capacity: "1.5 Ton – 5 Ton", ideal: "Commercial goods, bulk orders", accent: "#22c55e", glow: "rgba(34,197,94,0.3)" },
  { icon: "🚚", name: "Heavy Truck", capacity: "5 Ton – 15 Ton", ideal: "Industrial equipment, construction material", accent: "#ea580c", glow: "rgba(234,88,12,0.3)" },
  { icon: "🏗️", name: "Trailer / Container", capacity: "15 Ton – 30 Ton", ideal: "Large-scale freight, inter-state transport", accent: "#ec4899", glow: "rgba(236,72,153,0.3)" },
];

function FleetCard({ v }: { v: typeof fleet[0] }) {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    el.style.transform = `perspective(700px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.04,1.04,1.04)`;
    el.style.boxShadow = `0 24px 60px ${v.glow}, 0 0 0 1px rgba(255,255,255,0.08)`;
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)";
  };

  return (
    <div
      className="fleet-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ "--accent": v.accent, "--glow": v.glow } as React.CSSProperties}
    >
      <div className="fleet-card-glow" style={{ background: `radial-gradient(ellipse at 50% 0%, ${v.glow}, transparent 70%)` }} />
      <div className="fleet-icon">{v.icon}</div>
      <h3 className="fleet-name">{v.name}</h3>
      <span className="fleet-badge" style={{ background: `${v.accent}22`, border: `1px solid ${v.accent}55`, color: v.accent }}>
        ⚖️ {v.capacity}
      </span>
      <p className="fleet-ideal">{v.ideal}</p>
      <div className="fleet-bar">
        <div className="fleet-bar-fill" style={{ background: `linear-gradient(90deg, ${v.accent}, ${v.accent}88)` }} />
      </div>
    </div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-orb orb-a" />
      <div className="fleet-orb orb-b" />

      <div className="fleet-container">
        <div className="fleet-header">
          <span className="fleet-eyebrow">🚛 Our Vehicles</span>
          <h2 className="fleet-title">
            Fleet &amp; Weight <span className="fleet-title-accent">Categories</span>
          </h2>
          <p className="fleet-desc">
            We have the right vehicle for every load — from small parcels to heavy industrial freight.
          </p>
        </div>

        <div className="fleet-grid">
          {fleet.map((v) => <FleetCard key={v.name} v={v} />)}
        </div>
      </div>

      <style>{`
        .fleet-section {
          padding: 100px 24px;
          background: linear-gradient(135deg, #1e3a5f 0%, #0f2744 50%, #1a1a2e 100%);
          position: relative; overflow: hidden;
        }
        .fleet-orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.25; pointer-events: none; }
        .orb-a { width: 500px; height: 500px; background: radial-gradient(circle,#3b82f6,transparent); top: -100px; left: -100px; }
        .orb-b { width: 400px; height: 400px; background: radial-gradient(circle,#06b6d4,transparent); bottom: -80px; right: -80px; }
        .fleet-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .fleet-header { text-align: center; margin-bottom: 64px; }
        .fleet-eyebrow { display: inline-block; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.4); color: #93c5fd; font-size: 13px; font-weight: 700; padding: 6px 18px; border-radius: 50px; margin-bottom: 20px; letter-spacing: 1px; text-transform: uppercase; }
        .fleet-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: #fff; margin: 0 0 16px; letter-spacing: -0.5px; }
        .fleet-title-accent { background: linear-gradient(90deg,#60a5fa,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .fleet-desc { color: #94a3b8; max-width: 500px; margin: 0 auto; line-height: 1.75; font-size: 16px; }
        .fleet-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .fleet-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; padding: 36px 28px; position: relative; overflow: hidden; cursor: default; transition: transform 0.15s ease-out, box-shadow 0.15s ease-out; box-shadow: 0 8px 32px rgba(0,0,0,0.3); transform-style: preserve-3d; backdrop-filter: blur(16px); }
        .fleet-card-glow { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.3s; }
        .fleet-card:hover .fleet-card-glow { opacity: 1; }
        .fleet-icon { font-size: 56px; margin-bottom: 18px; display: block; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); transition: transform 0.3s; }
        .fleet-card:hover .fleet-icon { transform: scale(1.15) translateY(-4px); }
        .fleet-name { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 12px; }
        .fleet-badge { display: inline-block; font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 50px; margin-bottom: 14px; }
        .fleet-ideal { color: #94a3b8; font-size: 14px; line-height: 1.65; margin-bottom: 20px; }
        .fleet-bar { height: 3px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; }
        .fleet-bar-fill { height: 100%; width: 0; border-radius: 2px; transition: width 0.8s ease; }
        .fleet-card:hover .fleet-bar-fill { width: 100%; }
        @media (max-width: 960px) { .fleet-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) {
          .fleet-section { padding: 60px 16px; }
          .fleet-header { margin-bottom: 36px; }
          .fleet-grid { grid-template-columns: 1fr; gap: 14px; }
          .fleet-card { padding: 24px 18px; }
          .fleet-icon { font-size: 40px; margin-bottom: 12px; }
          .fleet-name { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
