Build the complete Spicy Carrot website based on PRD.md in this repo.

## Stack
- Next.js 15 (App Router, static export `output: 'export'`)
- Tailwind CSS 4
- Vercel deployment (vercel.json included)
- TypeScript

## Pages to build (all P0)
1. `/` — Homepage
2. `/services` — Three tiers explained
3. `/audit` — Free Business Audit landing page + form
4. `/about` — Franc's story, DR origin, why hospitality
5. `/case-study` — DR as proof of concept (all 3 layers)
6. `/contact` — Simple contact + WhatsApp link

## Design Requirements (NON-NEGOTIABLE)
- Beautiful. Hospitality aesthetic, NOT SaaS/startup template
- Generous whitespace, elegant typography
- Color palette: warm coral (#E8654A), cream (#FAF6F0), dark charcoal (#1A1A1A), olive accent (#7A8C5E)
- Font: Inter for body, Fraunces (Google Font) for headings
- Mobile-first, fast (no heavy JS)
- Photography placeholders with warm-toned overlays (no stock photos)

## Homepage Hero (exact copy from PRD)
Headline:
> Your guests are asking AI where to eat, sleep, and drink.
> Your staff are guessing at procedures.
> Your numbers arrive three months late.
> We fix all of it.

CTA: "Get your free business audit →" → /audit

## Key Messaging
- Tagline: "Less admin. More laughing."
- Sub: "Spicy Carrot digitizes independent restaurants, cafés, and boutique hotels — completely."
- The three layers: Be Found / Run Clean / See Clearly
- DR as living proof: "We run a café. We know the pain firsthand."
- Tone: warm, direct, slightly cheeky. Not corporate. Not startup-bro.

## Services Page — Three Tiers
- Tier 1: Free Business Health Audit (lead magnet)
- Tier 2: Business Health Audit — €1,000/mo
- Tier 3: Full Digitization — from €3,500/mo

## Audit Page — Form fields
- Business name
- Type (restaurant / café / boutique hotel / other)
- Location (city, country)
- Name + Email
- "What's eating most of your week?" (text area)
- Submit → mailto:hello@spicycarrot.xyz (for now)

## Case Study (DR)
Use Dirty Rabbit Coffee, S'Agaró, Costa Brava as the named case study.
Show before/after across 3 layers. Key stats to highlight:
- Layer 1: 57% Perplexity mention rate, #1 for "specialty coffee S'Agaró"
- Layer 2: Clock-in/out live via Telegram, opening SOPs digitized
- Layer 3: Daily Square sync, Holded connected, weekly P&L

## Footer
- hello@spicycarrot.xyz
- Copyright 2026 Spicy Carrot
- Simple links: Services, Free Audit, About, Contact

## vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"
}
```

## Git workflow
- Commit with clear messages as you go
- Push to origin main when done

## Notify when done
When completely finished, run:
openclaw system event --text "Done: Spicy Carrot website built — Next.js, 6 pages, push to SpicyCarrot25/spicycarrot-website. Connect to Vercel to deploy." --mode now
