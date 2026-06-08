"use client";
import { useState, useRef } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", drop: "", weight: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formCardRef = useRef<HTMLDivElement>(null);
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Lavanya Logisticks!%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0APickup: ${encodeURIComponent(form.pickup)}%0ADrop: ${encodeURIComponent(form.drop)}%0AWeight: ${encodeURIComponent(form.weight)}%0ANotes: ${encodeURIComponent(form.message || 'N/A')}`;
    window.open(`https://wa.me/919923175422?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = formCardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -16;
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.02,1.02,1.02)`;
  };
  const onCardLeave = () => {
    if (formCardRef.current)
      formCardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <section id="contact" className="ct-section">
      <div className="ct-orb ct-orb1" /><div className="ct-orb ct-orb2" />
      <div className="ct-container">
        <div className="ct-header">
          <span className="ct-eyebrow">📬 Get In Touch</span>
          <h2 className="ct-title">Book a Delivery or <span className="ct-accent">Get a Quote</span></h2>
          <p className="ct-sub">Our team will get back to you within 30 minutes with the best vehicle and pricing.</p>
        </div>
        <div className="ct-grid">
          {/* Info */}
          <div className="ct-info">
            {[
              { icon: "📞", label: "Phone", value: "+91 9923175422", accent: "#f97316" },
              { icon: "📧", label: "Email", value: "info@lavanyalogisticks.com", accent: "#3b82f6" },
              { icon: "📍", label: "Office", value: "Bhiwandi 421308", accent: "#22c55e" },
              { icon: "🕐", label: "Hours", value: "Mon–Sat: 8 AM – 8 PM", accent: "#a855f7" },
            ].map((c) => (
              <div key={c.label} className="ct-info-card">
                <div className="ct-info-icon" style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}33` }}>{c.icon}</div>
                <div>
                  <div className="ct-info-label" style={{ color: c.accent }}>{c.label}</div>
                  <div className="ct-info-value">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="ct-trust">
              {["✅ Free Quote", "⚡ 30-min Response", "🔒 Insured Cargo", "📍 Live Tracking"].map(t => (
                <span key={t} className="ct-trust-chip">{t}</span>
              ))}
            </div>
          </div>
          {/* Form */}
          <div
            className="ct-form-card"
            ref={formCardRef}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
          >
            <div className="ct-form-glow" />
            {submitted ? (
              <div className="ct-success">
                <div className="ct-success-icon">✅</div>
                <h3 className="ct-success-title">Request Received!</h3>
                <p className="ct-success-sub">We&apos;ll contact you within 30 minutes.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", pickup: "", drop: "", weight: "", message: "" }); }} className="ct-btn">New Request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="ct-form-title">🚛 Quick Booking Form</h3>
                <div className="ct-row">
                  <input className="ct-input" placeholder="Your Name" required value={form.name} onChange={e => set("name", e.target.value)} />
                  <input className="ct-input" placeholder="Phone Number" type="tel" required value={form.phone} onChange={e => set("phone", e.target.value)} />
                </div>
                <input className="ct-input" placeholder="Pickup Address" required value={form.pickup} onChange={e => set("pickup", e.target.value)} />
                <input className="ct-input" placeholder="Drop Address" required value={form.drop} onChange={e => set("drop", e.target.value)} />
                <select className="ct-input ct-select" required value={form.weight} onChange={e => set("weight", e.target.value)}>
                  <option value="">⚖️ Select Cargo Weight</option>
                  <option>Up to 500 kg</option>
                  <option>500 kg – 1.5 Ton</option>
                  <option>1.5 Ton – 5 Ton</option>
                  <option>5 Ton – 15 Ton</option>
                  <option>15 Ton – 30 Ton</option>
                </select>
                <textarea className="ct-input ct-textarea" placeholder="Additional notes (optional)" rows={3} value={form.message} onChange={e => set("message", e.target.value)} />
                <button type="submit" className="ct-btn">🚛 Book Now — Get Free Quote</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .ct-section { padding: 80px 24px; background: linear-gradient(135deg,#ea580c 0%,#c2410c 60%,#9a3412 100%); position: relative; overflow: hidden; }
        .ct-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; pointer-events: none; }
        .ct-orb1 { width: 400px; height: 400px; background: radial-gradient(circle,#fbbf24,transparent); top: -80px; right: -40px; }
        .ct-orb2 { width: 300px; height: 300px; background: radial-gradient(circle,#fff,transparent); bottom: -60px; left: -40px; opacity: 0.1; }
        .ct-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .ct-header { text-align: center; margin-bottom: 48px; }
        .ct-eyebrow { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #fff; font-size: 13px; font-weight: 700; padding: 6px 18px; border-radius: 50px; margin-bottom: 16px; letter-spacing: 1px; text-transform: uppercase; }
        .ct-title { font-size: clamp(1.6rem,4vw,2.8rem); font-weight: 900; color: #fff; margin: 0 0 14px; }
        .ct-accent { background: linear-gradient(90deg,#fef3c7,#fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .ct-sub { color: #fed7aa; max-width: 500px; margin: 0 auto; line-height: 1.75; font-size: 15px; }
        .ct-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; align-items: start; }
        .ct-info { display: flex; flex-direction: column; gap: 14px; }
        .ct-info-card { display: flex; gap: 14px; align-items: flex-start; border-radius: 16px; padding: 16px; transition: transform 0.2s, box-shadow 0.2s; transform-style: preserve-3d; }
        .ct-info-card:hover { transform: translateX(8px) perspective(600px) rotateY(-4deg); box-shadow: 0 12px 32px rgba(0,0,0,0.15); }
        .ct-info-card:nth-child(1) { background: linear-gradient(135deg,#fff7ed,#ffedd5); border: 1.5px solid #fed7aa; }
        .ct-info-card:nth-child(2) { background: linear-gradient(135deg,#eff6ff,#dbeafe); border: 1.5px solid #bfdbfe; }
        .ct-info-card:nth-child(3) { background: linear-gradient(135deg,#f0fdf4,#dcfce7); border: 1.5px solid #bbf7d0; }
        .ct-info-card:nth-child(4) { background: linear-gradient(135deg,#faf5ff,#ede9fe); border: 1.5px solid #ddd6fe; }
        .ct-info-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; background: rgba(255,255,255,0.7); box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .ct-info-label { font-size: 11px; font-weight: 700; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.5px; }
        .ct-info-value { color: #111827; font-weight: 600; font-size: 14px; }
        .ct-trust { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
        .ct-trust-chip { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: #fff; font-size: 11px; font-weight: 600; padding: 5px 12px; border-radius: 50px; }
        .ct-form-card {
          background: #fff;
          border-radius: 28px;
          padding: 40px 32px;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.25),
            0 0 0 1px rgba(255,255,255,0.6),
            inset 0 1px 0 rgba(255,255,255,0.9);
          position: relative; overflow: hidden;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out, box-shadow 0.15s ease-out;
        }
        .ct-form-card:hover {
          box-shadow:
            0 48px 100px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.8),
            inset 0 1px 0 rgba(255,255,255,1);
        }
        .ct-form-glow {
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #ea580c, #f97316, #fbbf24, #f97316, #ea580c);
          background-size: 200% auto;
          animation: glowSlide 3s linear infinite;
          border-radius: 28px 28px 0 0;
        }
        @keyframes glowSlide {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .ct-form-title { font-size: 18px; font-weight: 800; color: #111827; margin-bottom: 20px; }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .ct-input { width: 100%; background: #f9fafb; border: 1.5px solid #e5e7eb; border-radius: 12px; padding: 12px 14px; font-size: 14px; color: #111827; font-family: inherit; outline: none; margin-bottom: 10px; transition: border-color 0.2s; box-sizing: border-box; }
        .ct-input::placeholder { color: #9ca3af; }
        .ct-input:focus { border-color: #ea580c; background: #fff; }
        .ct-select { color: #374151; }
        .ct-textarea { resize: none; }
        .ct-btn { width: 100%; background: linear-gradient(135deg,#ea580c,#c2410c); color: #fff; padding: 15px; border-radius: 14px; font-weight: 800; font-size: 15px; border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(234,88,12,0.45), inset 0 1px 0 rgba(255,255,255,0.2); transition: transform 0.2s, box-shadow 0.2s; margin-top: 6px; }
        .ct-btn:hover { transform: translateY(-3px) scale(1.01); box-shadow: 0 14px 36px rgba(234,88,12,0.55); }
        .ct-btn:active { transform: translateY(0) scale(0.99); }
        .ct-success { text-align: center; padding: 32px 0; }
        .ct-success-icon { font-size: 56px; margin-bottom: 14px; }
        .ct-success-title { font-size: 20px; font-weight: 800; color: #111827; margin-bottom: 8px; }
        .ct-success-sub { color: #6b7280; margin-bottom: 20px; }
        @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) {
          .ct-section { padding: 60px 16px; }
          .ct-form-card { padding: 24px 16px; }
          .ct-row { grid-template-columns: 1fr; }
          .ct-trust { gap: 6px; }
          .ct-trust-chip { font-size: 10px; padding: 4px 10px; }
        }
      `}</style>
    </section>
  );
}
