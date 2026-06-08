"use client";
export default function Footer() {
  return (
    <footer className="ft-footer">
      <div className="ft-orb ft-orb1" />
      <div className="ft-orb ft-orb2" />

      <div className="ft-container">
        <div className="ft-grid">
          {/* Brand */}
          <div>
            <a href="#" className="ft-brand">
              <span className="ft-brand-icon">🚛</span>
              <span className="ft-brand-name">Lavanya Logisticks</span>
            </a>
            <p className="ft-brand-desc">
              Your trusted partner for fast, reliable, and affordable logistics across every mile.
            </p>
            <div className="ft-socials">
              {[{ icon: "📘", label: "Facebook" }, { icon: "📸", label: "Instagram" }, { icon: "🐦", label: "Twitter" }].map((s) => (
                <button key={s.label} className="ft-social-btn" title={s.label}>{s.icon}</button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="ft-col-title">Quick Links</h4>
            {["Services", "Fleet", "How It Works", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, "-")}`} className="ft-link">
                <span className="ft-link-arrow">→</span> {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="ft-col-title">Contact</h4>
            {[
              { icon: "📞", text: "+91 9923175422" },
              { icon: "📧", text: "info@lavanyalogisticks.com" },
              { icon: "📍", text: "Bhiwandi" },
              { icon: "🕐", text: "Mon–Sat: 8 AM – 8 PM" },
            ].map((c) => (
              <div key={c.text} className="ft-contact-row">
                <span>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} Lavanya Logisticks. All rights reserved.</span>
          <span>Made with ❤️ for reliable logistics</span>
        </div>
      </div>

      <style>{`
        .ft-footer {
          background: #070510;
          padding: 72px 24px 32px;
          position: relative; overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .ft-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); opacity: 0.12; pointer-events: none;
        }
        .ft-orb1 { width: 400px; height: 400px; background: radial-gradient(circle,#ea580c,transparent); top: -100px; left: -80px; }
        .ft-orb2 { width: 300px; height: 300px; background: radial-gradient(circle,#6366f1,transparent); bottom: -60px; right: -60px; }
        .ft-container { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .ft-grid {
          display: grid; grid-template-columns: 2fr 1fr 1fr;
          gap: 48px; margin-bottom: 56px;
        }
        .ft-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; margin-bottom: 16px; }
        .ft-brand-icon { font-size: 32px; filter: drop-shadow(0 0 8px rgba(234,88,12,0.5)); }
        .ft-brand-name {
          font-size: clamp(18px,2vw,24px); font-weight: 900;
          background: linear-gradient(90deg,#f97316,#fbbf24,#f97316);
          background-size: 200% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          animation: ft-shimmer 3s linear infinite;
        }
        @keyframes ft-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .ft-brand-desc { color: #6b7280; font-size: 14px; line-height: 1.8; max-width: 280px; margin-bottom: 24px; }
        .ft-socials { display: flex; gap: 12px; }
        .ft-social-btn {
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; font-size: 18px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.2s, border-color 0.2s;
        }
        .ft-social-btn:hover {
          background: rgba(234,88,12,0.2); border-color: rgba(234,88,12,0.4);
          transform: translateY(-3px);
        }
        .ft-col-title { color: #fff; font-weight: 700; margin-bottom: 20px; font-size: 15px; }
        .ft-link {
          display: flex; align-items: center; gap: 8px;
          color: #6b7280; text-decoration: none; margin-bottom: 12px; font-size: 14px;
          transition: color 0.2s, gap 0.2s;
        }
        .ft-link:hover { color: #f97316; gap: 12px; }
        .ft-link-arrow { font-size: 12px; transition: transform 0.2s; }
        .ft-link:hover .ft-link-arrow { transform: translateX(2px); }
        .ft-contact-row {
          display: flex; gap: 10px; margin-bottom: 12px;
          font-size: 14px; color: #6b7280; align-items: flex-start;
        }
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 28px;
          display: flex; justify-content: space-between; flex-wrap: wrap;
          gap: 12px; font-size: 13px; color: #4b5563;
        }
        @media (max-width: 768px) {
          .ft-footer { padding: 48px 16px 24px; }
          .ft-grid { grid-template-columns: 1fr; gap: 32px; }
          .ft-bottom { flex-direction: column; align-items: center; text-align: center; }
          .ft-brand-name { font-size: 20px; }
          .ft-brand-desc { max-width: 100%; }
        }
      `}</style>
    </footer>
  );
}
