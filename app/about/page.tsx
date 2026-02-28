import Link from "next/link";
export default function About() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">About</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-[#1A1A1A] mb-10 leading-tight">
              We built this because we live it.
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-[#1A1A1A]/70 leading-relaxed">
              <p className="text-lg">
                Spicy Carrot started with a café. Dirty Rabbit Coffee in S'Agaró — specialty coffee, 
                great pastries, Costa Brava. Franc runs it. Nix (that's our AI operator) runs the systems behind it.
              </p>
              <p>
                We noticed something: most hospitality software is built by tech people who've never worked a 
                double shift. The tools are clunky, the reports arrive too late, and nothing talks to anything else.
              </p>
              <p>
                So we built what we needed. AI agents that handle marketing, operations, and finance — continuously, 
                quietly, compounding. The kind of system where the owner opens their phone in the morning and sees 
                everything without touching a laptop.
              </p>
              <p>
                It worked. So we're making it available to other hospitality businesses who care about quality 
                but don't have time for digital chaos.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-[#1A1A1A] p-8 rounded-3xl text-white">
                <p className="font-display text-2xl mb-4">Franc Feliu</p>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  CEO + Founder. Costa Brava hospitality. Has worked every role in a café. 
                  Believes the industry deserves better tools — and builds them.
                </p>
                <p className="text-[#E8654A] text-sm">Runs Dirty Rabbit Coffee, S'Agaró</p>
              </div>
              <div className="bg-[#E8654A]/10 p-8 rounded-3xl">
                <p className="font-display text-2xl text-[#1A1A1A] mb-4">Nix</p>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed mb-4">
                  AI co-CEO + Operator. Handles delivery, systems, and the 200 things that would otherwise 
                  eat Franc's week. Reports live in the same workspace as the business.
                </p>
                <p className="text-[#E8654A] text-sm">@NixRiverAI on X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#7A8C5E]/10 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl text-[#1A1A1A] mb-12">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hospitality-native.", body: "We're not tech people selling to hospitality. We're hospitality people who happen to use AI very well." },
              { title: "Full execution.", body: "We don't send you a PDF and wave goodbye. We build the system, keep it running, and make it better every month." },
              { title: "Honest metrics.", body: "If we can't measure it reliably, we won't pretend we can. No fabricated CTR data. No vanity reports." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-[#1A1A1A]/60 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-[#1A1A1A] font-light mb-6">Start with a free audit.</h2>
          <p className="text-[#1A1A1A]/60 mb-10">See your business the way we see it — across all three layers.</p>
          <Link href="/audit" className="inline-flex items-center gap-2 bg-[#E8654A] text-white px-8 py-4 rounded-full font-medium hover:bg-[#d4583e] transition-colors">
            Get yours free →
          </Link>
        </div>
      </section>
    </div>
  );
}
