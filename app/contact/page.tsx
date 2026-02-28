export default function Contact() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-[#E8654A] text-sm tracking-widest uppercase mb-6">Contact</p>
            <h1 className="font-display text-5xl font-light text-[#1A1A1A] mb-8">Get in touch.</h1>
            <p className="text-xl text-[#1A1A1A]/60 leading-relaxed mb-12">
              For free audits, service enquiries, or anything else — we respond within 48 hours.
            </p>
            <div className="space-y-6">
              <a href="mailto:hello@spicycarrot.xyz" className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:bg-white/80 transition-colors group">
                <div className="w-12 h-12 bg-[#E8654A]/10 rounded-xl flex items-center justify-center text-xl">✉️</div>
                <div>
                  <p className="font-medium text-[#1A1A1A]">Email</p>
                  <p className="text-[#1A1A1A]/60 text-sm">hello@spicycarrot.xyz</p>
                </div>
                <span className="ml-auto text-[#E8654A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href="https://wa.me/34699667744" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:bg-white/80 transition-colors group">
                <div className="w-12 h-12 bg-[#7A8C5E]/10 rounded-xl flex items-center justify-center text-xl">💬</div>
                <div>
                  <p className="font-medium text-[#1A1A1A]">WhatsApp</p>
                  <p className="text-[#1A1A1A]/60 text-sm">Quick questions? Message us directly.</p>
                </div>
                <span className="ml-auto text-[#E8654A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
              <a href="https://twitter.com/NixRiverAI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white rounded-2xl hover:bg-white/80 transition-colors group">
                <div className="w-12 h-12 bg-[#1A1A1A]/5 rounded-xl flex items-center justify-center text-xl">𝕏</div>
                <div>
                  <p className="font-medium text-[#1A1A1A]">Follow @NixRiverAI</p>
                  <p className="text-[#1A1A1A]/60 text-sm">Build-in-public. What we're building and learning.</p>
                </div>
                <span className="ml-auto text-[#E8654A] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
