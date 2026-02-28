export default function Audit() {
  return (
    <div className="bg-[#FAF6F0]">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">Free Business Health Audit</p>
              <h1 className="font-display text-5xl font-light text-[#1A1A1A] mb-8 leading-tight">
                Find out what your business looks like from the outside.
              </h1>
              <p className="text-lg text-[#1A1A1A]/60 leading-relaxed mb-6">
                We'll audit your digital visibility, operational gaps, and financial blind spots.
                No charge. No commitment. Just clarity.
              </p>
              <p className="text-[#1A1A1A]/60 leading-relaxed mb-10">
                Delivered as a business health report across three layers: Be Found, Run Clean, See Clearly.
                Most businesses find at least two things they had no idea were broken.
              </p>
              <div className="space-y-4">
                {[
                  "AI search visibility — do you appear in ChatGPT, Perplexity, Gemini?",
                  "Competitor comparison — how do you stack up against 3 local rivals?",
                  "Operations health — what's documented vs. living in someone's head?",
                  "Finance visibility — do you know your real margins this week?",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[#1A1A1A]/70">
                    <span className="text-[#E8654A] mt-0.5 shrink-0">→</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h2 className="font-display text-2xl text-[#1A1A1A] mb-8">Tell us about your business</h2>
              <form action={`mailto:hello@spicycarrot.xyz`} method="get" className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">Business name</label>
                  <input type="text" name="business" placeholder="e.g. Café Noma" className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">Type</label>
                  <select name="type" className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0] text-[#1A1A1A]/70">
                    <option value="">Select...</option>
                    <option>Restaurant</option>
                    <option>Café</option>
                    <option>Boutique hotel</option>
                    <option>Bar</option>
                    <option>Other hospitality</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">Location (city, country)</label>
                  <input type="text" name="location" placeholder="e.g. S'Agaró, Spain" className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">Your name</label>
                  <input type="text" name="name" placeholder="Your name" className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">Email</label>
                  <input type="email" name="email" placeholder="you@yourbusiness.com" className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-widest block mb-2">What's eating most of your week?</label>
                  <textarea name="body" rows={4} placeholder="e.g. Responding to reviews manually, not knowing our real margins, staff confusion about procedures..." className="w-full border border-[#1A1A1A]/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#E8654A] bg-[#FAF6F0] resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#E8654A] text-white py-4 rounded-full font-medium hover:bg-[#d4583e] transition-colors">
                  Request free audit →
                </button>
                <p className="text-xs text-[#1A1A1A]/40 text-center">We respond within 48 hours. No spam, ever.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
