const steps = [
  { step: "01", icon: "📞", title: "Book a Pickup", desc: "Call us or fill the contact form with your pickup address, destination, and cargo details." },
  { step: "02", icon: "🚛", title: "We Assign a Vehicle", desc: "Based on your cargo weight and distance, we assign the right vehicle from our fleet." },
  { step: "03", icon: "📦", title: "Pickup at Your Door", desc: "Our driver arrives at your location and safely loads your goods." },
  { step: "04", icon: "🏠", title: "Delivered to Destination", desc: "Your cargo is delivered safely to the drop address — on time and in perfect condition." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw-section">
      <div className="hiw-orb hiw-orb1" /><div className="hiw-orb hiw-orb2" />
      <div className="hiw-container">
        <div className="hiw-header">
          <span className="hiw-eyebrow">⚡ Simple Process</span>
          <h2 className="hiw-title">How It <span className="hiw-accent">Works</span></h2>
          <p className="hiw-sub">Getting your goods delivered is just 4 easy steps away.</p>
        </div>
        <div className="hiw-grid">
          {steps.map((s, i) => (
            <div key={s.step} className="hiw-step">
              {i < steps.length - 1 && <div className="hiw-connector"><div className="hiw-connector-line" /><div className="hiw-connector-truck">🚛</div></div>}
              <div className="hiw-circle-wrap">
                <div className="hiw-circle-ring" />
                <div className="hiw-circle"><span className="hiw-circle-icon">{s.icon}</span></div>
              </div>
              <div className="hiw-step-num">STEP {s.step}</div>
              <h3 className="hiw-step-title">{s.title}</h3>
              <p className="hiw-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .hiw-section { padding: 80px 24px; background: #fff; position: relative; overflow: hidden; }
        .hiw-orb { display: none; }
        .hiw-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .hiw-header { text-align: center; margin-bottom: 56px; }
        .hiw-eyebrow { display: inline-block; background: #fef3c7; border: 1px solid #fde68a; color: #d97706; font-size: 13px; font-weight: 700; padding: 6px 18px; border-radius: 50px; margin-bottom: 16px; letter-spacing: 1px; text-transform: uppercase; }
        .hiw-title { font-size: clamp(1.6rem,4vw,2.8rem); font-weight: 900; color: #111827; margin: 0 0 14px; }
        .hiw-accent { background: linear-gradient(90deg,#ea580c,#f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hiw-sub { color: #6b7280; max-width: 440px; margin: 0 auto; line-height: 1.75; font-size: 15px; }
        .hiw-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
        .hiw-step { text-align: center; position: relative; background: #fff; border: 1.5px solid #f1f5f9; border-radius: 22px; padding: 36px 16px 28px; box-shadow: 0 2px 16px rgba(0,0,0,0.06); transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s; }
        .hiw-step:hover { transform: translateY(-8px); border-color: #fed7aa; box-shadow: 0 16px 40px rgba(234,88,12,0.12); }
        .hiw-connector { position: absolute; top: 48px; left: calc(50% + 40px); width: calc(100% - 8px); display: flex; align-items: center; gap: 4px; z-index: 2; }
        .hiw-connector-line { flex: 1; height: 2px; background: linear-gradient(90deg,#ea580c,#fed7aa); border-radius: 2px; }
        .hiw-connector-truck { font-size: 14px; animation: drive2 2s ease-in-out infinite; }
        @keyframes drive2 { 0%,100% { transform: translateX(-4px); } 50% { transform: translateX(4px); } }
        .hiw-circle-wrap { position: relative; width: 72px; height: 72px; margin: 0 auto 18px; display: flex; align-items: center; justify-content: center; }
        .hiw-circle-ring { position: absolute; inset: -6px; border-radius: 50%; border: 2px solid rgba(234,88,12,0.2); animation: pulse-ring 2.5s ease-in-out infinite; }
        @keyframes pulse-ring { 0%,100% { transform: scale(1); opacity: 0.4; } 50% { transform: scale(1.12); opacity: 1; } }
        .hiw-circle { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg,#ea580c,#c2410c); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(234,88,12,0.35); transition: transform 0.3s; }
        .hiw-step:hover .hiw-circle { transform: scale(1.1); }
        .hiw-circle-icon { font-size: 28px; }
        .hiw-step-num { font-size: 10px; font-weight: 800; color: #ea580c; letter-spacing: 2px; margin-bottom: 8px; }
        .hiw-step-title { font-size: 15px; font-weight: 800; color: #111827; margin-bottom: 8px; }
        .hiw-step-desc { color: #6b7280; font-size: 13px; line-height: 1.65; }
        @media (max-width: 900px) { .hiw-grid { grid-template-columns: repeat(2,1fr); } .hiw-connector { display: none; } }
        @media (max-width: 480px) {
          .hiw-section { padding: 60px 16px; }
          .hiw-grid { grid-template-columns: 1fr; gap: 14px; }
          .hiw-step { padding: 28px 16px 22px; }
        }
      `}</style>
    </section>
  );
}
