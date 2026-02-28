import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-light text-[#1A1A1A] mb-8 max-w-2xl">
            Three tiers. One mission.
          </h1>
          <p className="text-xl text-[#1A1A1A]/60 max-w-xl leading-relaxed">
            From a free audit to full business digitization — you choose where to start.
            Most clients start with the audit and never want to stop.
          </p>
        </div>
      </section>

      {/* Tier 1 */}
      <section className="border-t border-[#1A1A1A]/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#E8654A] text-xs font-mono tracking-widest uppercase mb-4">Tier 1 — Free</p>
              <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-6">Business Health Audit</h2>
              <p className="text-3xl font-display text-[#1A1A1A] mb-8">€0</p>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                We scan your entire business — not just your website. You see exactly where you're invisible,
                where your operations leak, and where your numbers are guesswork.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-10">
                Most clients have two moments where they say "oh shit." One when they see they don't appear
                in ChatGPT. Another when they realize they don't know their real margins.
              </p>
              <Link href="/audit" className="inline-flex items-center gap-2 bg-[#E8654A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#d4583e] transition-colors">
                Request your free audit →
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { layer: "Be Found", items: ["AI search visibility (ChatGPT, Perplexity, Gemini)", "Google Business Profile health", "Directory presence scan", "Competitor comparison"] },
                { layer: "Run Clean", items: ["SOP documentation assessment", "Staff tools & checklist audit", "Scheduling & time tracking gaps"] },
                { layer: "See Clearly", items: ["POS data quality check", "P&L visibility assessment", "Supplier cost tracking gaps"] },
              ].map((section) => (
                <div key={section.layer} className="bg-white p-6 rounded-2xl">
                  <p className="text-[#7A8C5E] text-xs font-mono tracking-widest uppercase mb-3">{section.layer}</p>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-sm text-[#1A1A1A]/70 flex items-start gap-2">
                        <span className="text-[#E8654A] mt-0.5">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 2 */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8654A] text-xs font-mono tracking-widest uppercase mb-4">Tier 2</p>
              <h2 className="font-display text-4xl font-light text-white mb-6">Deep Diagnostic</h2>
              <p className="font-display text-3xl text-white mb-8">From €1,000<span className="text-white/40 text-xl">/mo</span></p>
              <p className="text-white/60 leading-relaxed mb-6">
                Full 3-layer analysis. We go deep on visibility, operations, and finance.
                You get a prioritized action plan: what to fix first, in what order, and why.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Delivered in 5–7 business days. Agent-generated with human strategic review.
              </p>
              <a href="mailto:hello@spicycarrot.xyz?subject=Tier 2 inquiry" className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#1A1A1A] transition-colors">
                Get in touch →
              </a>
            </div>
            <div className="text-white/60 space-y-6">
              <p className="text-white font-medium">What's covered:</p>
              {[
                "Full gap analysis across all digital touchpoints",
                "AI visibility: how you appear (or don't) in ChatGPT, Perplexity, Gemini, Google AI",
                "Competitive positioning against top 5 local competitors",
                "SOP gap analysis: what's documented vs. in someone's head",
                "Menu engineering: stars, puzzles, and dogs",
                "POS data quality and margin analysis",
                "Cash flow visibility assessment",
                "Prioritized action plan across all three layers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-[#E8654A] mt-0.5">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tier 3 */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#E8654A] text-xs font-mono tracking-widest uppercase mb-4">Tier 3 — Retained</p>
              <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-6">Full Digitization</h2>
              <p className="font-display text-3xl text-[#1A1A1A] mb-8">From €3,500<span className="text-[#1A1A1A]/40 text-xl">/mo</span></p>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                We digitize your entire operation. Marketing, operations, and finance — all three layers,
                running continuously, compounding every month.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                The owner opens their phone. Sees yesterday's revenue. Today's checklist. Trending reviews. 
                Zero computer time.
              </p>
              <p className="text-sm text-[#1A1A1A]/40 mb-10">3-month minimum. One new automated workflow added monthly.</p>
              <a href="mailto:hello@spicycarrot.xyz?subject=Tier 3 inquiry" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#333] transition-colors">
                Talk to us →
              </a>
            </div>
            <div className="space-y-6">
              {[
                { label: "Be Found", items: ["Website build + management", "GBP optimization + posting", "10+ directory listings", "Review monitoring + AI responses", "GEO optimization for AI search", "Multilingual content (4–6 languages)"] },
                { label: "Run Clean", items: ["Digital SOPs for all critical procedures", "Daily staff checklists via phone", "Clock-in/out system with reporting", "Menu engineering + profitability analysis", "Scheduling assistance"] },
                { label: "See Clearly", items: ["Daily revenue on your phone by 8am", "Weekly P&L summary", "KPI dashboard", "Supplier cost tracking", "Weekly CFO brief via WhatsApp/Telegram", "Accounting system connection"] },
              ].map((layer) => (
                <div key={layer.label} className="border border-[#1A1A1A]/10 p-6 rounded-2xl">
                  <p className="text-[#7A8C5E] text-xs font-mono tracking-widest uppercase mb-3">{layer.label}</p>
                  <ul className="space-y-2">
                    {layer.items.map((item) => (
                      <li key={item} className="text-sm text-[#1A1A1A]/70 flex items-start gap-2">
                        <span className="text-[#E8654A] mt-0.5">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
