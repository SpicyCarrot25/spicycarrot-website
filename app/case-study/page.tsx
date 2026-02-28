import Link from "next/link";
export default function CaseStudy() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">Case Study</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-8 max-w-3xl leading-tight">
            Dirty Rabbit Coffee<br />S'Agaró, Costa Brava
          </h1>
          <p className="text-xl text-white/60 max-w-xl leading-relaxed">
            Specialty coffee shop, S'Agaró (Platja d'Aro area), Costa Brava. 
            Running the full Spicy Carrot stack since early 2026. All three layers, live in production.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">The challenge</p>
            <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-8">Every problem. At once.</h2>
            <div className="space-y-4 text-[#1A1A1A]/70 leading-relaxed">
              <p>Dirty Rabbit had the product — La Marzocco KB90, RO water system, exceptional coffee. What it didn't have: digital presence, operational systems, or financial visibility.</p>
              <p>Searches for "best coffee Platja d'Aro" returned competitors. Reviews went unanswered. Staff procedures lived in the owner's head. Revenue arrived in the accounting system three months late.</p>
              <p>Classic hospitality: incredible on the inside, invisible and chaotic on the outside.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 1 */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7A8C5E] text-xs font-mono tracking-widest uppercase mb-8">Layer 1 — Be Found</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-light text-[#1A1A1A] mb-6">From invisible to #1</h2>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                We built the visibility stack from scratch: website with full schema markup, 
                Google Business Profile optimization, 10+ directory listings, structured content for AI search.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                We now track every major AI engine weekly. Perplexity, ChatGPT, Google AI Overview, Gemini.
                When someone asks about specialty coffee in S'Agaró — Dirty Rabbit appears.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "#1", label: "for 'specialty coffee S'Agaró' on ChatGPT + Perplexity" },
                { stat: "57%", label: "mention rate across target Perplexity queries" },
                { stat: "170+", label: "website pages indexed across 4 languages" },
                { stat: "10+", label: "directory listings live (Google, TripAdvisor, ECT, Yelp...)" },
              ].map((item) => (
                <div key={item.stat} className="bg-[#FAF6F0] p-6 rounded-2xl">
                  <p className="font-display text-3xl text-[#E8654A] mb-2">{item.stat}</p>
                  <p className="text-xs text-[#1A1A1A]/60 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Layer 2 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7A8C5E] text-xs font-mono tracking-widest uppercase mb-8">Layer 2 — Run Clean</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "100%", label: "staff shifts tracked digitally via Telegram" },
                { stat: "0", label: "manual timesheets — all automated" },
                { stat: "5+", label: "critical SOPs digitized and deployed" },
                { stat: "Live", label: "daily checklist system for opening/closing" },
              ].map((item) => (
                <div key={item.stat} className="bg-white p-6 rounded-2xl border border-[#1A1A1A]/10">
                  <p className="font-display text-3xl text-[#E8654A] mb-2">{item.stat}</p>
                  <p className="text-xs text-[#1A1A1A]/60 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="font-display text-3xl font-light text-[#1A1A1A] mb-6">Staff tools that actually work</h2>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                Clock-in/out runs through Telegram. Staff tap a button — system logs the shift, 
                owner sees it in real time. No app to install, no training required.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed">
                Opening and closing procedures are digitized. New staff follow the same checklist
                as the tenth-year veterans. The procedure lives in the system, not in someone's memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Layer 3 */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#7A8C5E] text-xs font-mono tracking-widest uppercase mb-8">Layer 3 — See Clearly</p>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-light text-white mb-6">Numbers by 8am. Every day.</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Square POS syncs daily. Holded accounting is connected. Revenue, transaction count, 
                and ticket average are on the owner's phone before the first coffee of the day.
              </p>
              <p className="text-white/60 leading-relaxed">
                Before: revenue arrived in the accounting system 3 months late. Now: yesterday's 
                numbers are visible today. That's not a marginal improvement — it's a different 
                way of running a business.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { before: "Revenue visibility: 3 months late", after: "Yesterday's revenue on phone by 8am" },
                { before: "Manual reconciliation between POS + accounting", after: "Automated Square → Supabase → Holded sync" },
                { before: "No idea which items have real margin", after: "KPI dashboard with product-level profitability" },
                { before: "Weekly P&L impossible without accountant", after: "Weekly CFO brief via Telegram" },
              ].map((item) => (
                <div key={item.before} className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-white/5 p-4 rounded-xl text-white/40 leading-relaxed">❌ {item.before}</div>
                  <div className="bg-[#E8654A]/20 p-4 rounded-xl text-white/80 leading-relaxed">✓ {item.after}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-6">
            Your business has the same problems.
          </h2>
          <p className="text-[#1A1A1A]/60 mb-10 max-w-xl mx-auto">
            Start with a free business health audit. We'll show you exactly where you stand — 
            across visibility, operations, and finance.
          </p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-[#E8654A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#d4583e] transition-colors">
            Get your free audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
