import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#FAF6F0]">

      {/* Hero */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-[#E8654A] text-sm font-medium tracking-widest uppercase mb-8">AI × Hospitality</p>
            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] text-[#1A1A1A] mb-10">
              Your guests are asking AI<br />
              <em className="not-italic text-[#E8654A]">where to eat.</em><br />
              Are you there?
            </h1>
            <p className="text-xl text-[#1A1A1A]/60 max-w-xl leading-relaxed mb-4">
              Your staff are guessing at procedures. Your numbers arrive three months late.
            </p>
            <p className="text-xl font-medium text-[#1A1A1A] mb-12">
              We fix all of it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/audit" className="inline-flex items-center gap-2 bg-[#E8654A] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#d4583e] transition-colors">
                Get your free business audit →
              </Link>
              <Link href="/case-study" className="inline-flex items-center gap-2 text-[#1A1A1A] px-8 py-4 rounded-full text-base border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/40 transition-colors">
                See it live at Dirty Rabbit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="bg-[#1A1A1A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-16">What we digitize</p>
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: "01",
                name: "Be Found",
                desc: "AI visibility, GEO optimization, Google Business, directories, reviews, multilingual content. When someone asks ChatGPT for the best café in your town — you appear.",
              },
              {
                num: "02",
                name: "Run Clean",
                desc: "Digital SOPs, staff checklists on phones, clock-in/out, menu engineering, scheduling. Your opening procedure lives somewhere other than your head.",
              },
              {
                num: "03",
                name: "See Clearly",
                desc: "Daily revenue on your phone by 8am. Weekly P&L. Real margins. Supplier cost tracking. KPI dashboard. Yesterday's numbers — today.",
              },
            ].map((layer) => (
              <div key={layer.num} className="bg-[#1A1A1A] p-10">
                <p className="text-[#E8654A] text-sm font-mono mb-6">{layer.num}</p>
                <h3 className="font-display text-2xl text-white mb-4">{layer.name}</h3>
                <p className="text-white/50 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-8">The promise</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight mb-8">
              Open your phone in the morning. See everything.
            </h2>
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-6">
              Yesterday's revenue. Today's staff checklist. Trending reviews. What to order.
              Zero computer time required.
            </p>
            <p className="text-lg text-[#1A1A1A]/60 leading-relaxed">
              We're not a SaaS tool you have to learn. We're not an agency that sends reports and waves goodbye.
              We digitize your entire operation and keep it running — every day.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-[#7A8C5E]/10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7A8C5E] text-sm tracking-widest uppercase mb-6">Live proof</p>
              <h2 className="font-display text-4xl font-light text-[#1A1A1A] mb-6">
                We run a café. We know the pain firsthand.
              </h2>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-8">
                Dirty Rabbit Coffee in S'Agaró is our living proof of concept.
                We've been building on it for months — all three layers, running in production, real data.
              </p>
              <Link href="/case-study" className="text-[#E8654A] font-medium hover:underline">
                See the full case study →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "#1", label: "for 'specialty coffee S'Agaró' on ChatGPT" },
                { stat: "57%", label: "AI mention rate across Perplexity queries" },
                { stat: "8am", label: "daily revenue on owner's phone" },
                { stat: "100%", label: "staff shifts tracked digitally" },
              ].map((item) => (
                <div key={item.stat} className="bg-white p-6 rounded-2xl">
                  <p className="font-display text-3xl text-[#E8654A] mb-2">{item.stat}</p>
                  <p className="text-sm text-[#1A1A1A]/60 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#1A1A1A]/40 text-sm tracking-widest uppercase mb-16">How it works</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Free",
                name: "Business Health Audit",
                price: "No charge",
                desc: "We audit your visibility, operations, and finance. You see exactly what's broken — across all three layers. Most clients have two 'oh shit' moments.",
                cta: "Get yours →",
                href: "/audit",
                highlight: false,
              },
              {
                tier: "Tier 2",
                name: "Deep Diagnostic",
                price: "From €1,000/mo",
                desc: "Full 3-layer analysis with a prioritized action plan. We tell you exactly what to fix, in what order, and why. Delivered in 5–7 days.",
                cta: "Learn more →",
                href: "/services",
                highlight: true,
              },
              {
                tier: "Tier 3",
                name: "Full Digitization",
                price: "From €3,500/mo",
                desc: "We digitize your entire operation — marketing, ops, and finance. The owner never touches a computer. Retained, ongoing, compounding.",
                cta: "Learn more →",
                href: "/services",
                highlight: false,
              },
            ].map((tier) => (
              <div key={tier.tier} className={`p-8 rounded-3xl ${tier.highlight ? "bg-[#E8654A] text-white" : "border border-[#1A1A1A]/10"}`}>
                <p className={`text-xs font-mono tracking-widest uppercase mb-4 ${tier.highlight ? "text-white/60" : "text-[#1A1A1A]/40"}`}>{tier.tier}</p>
                <h3 className={`font-display text-2xl mb-2 ${tier.highlight ? "text-white" : "text-[#1A1A1A]"}`}>{tier.name}</h3>
                <p className={`text-lg font-medium mb-6 ${tier.highlight ? "text-white/80" : "text-[#E8654A]"}`}>{tier.price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${tier.highlight ? "text-white/80" : "text-[#1A1A1A]/60"}`}>{tier.desc}</p>
                <Link href={tier.href} className={`text-sm font-medium hover:underline ${tier.highlight ? "text-white" : "text-[#E8654A]"}`}>
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8654A] py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
            Less admin. More laughing.
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Start with a free business health audit. See your gaps across visibility, operations, and finance. No commitment.
          </p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-white text-[#E8654A] px-8 py-4 rounded-full font-medium hover:bg-[#FAF6F0] transition-colors">
            Get your free audit →
          </Link>
        </div>
      </section>
    </div>
  );
}
