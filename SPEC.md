# The Stuff Suite — landing page

One page that sells the whole collection: **free, open-source, self-hosted alternatives to
tools that nickel-and-dime people.** Built by Josh Storm (github.com/JoshuaStorm1017).
This is brand infrastructure for the public clone suite — repo will be PUBLIC, site deploys
to Vercel (deploy is handled by Josh's assistant AFTER QA — do NOT deploy, do NOT create a
remote, do NOT push).

## The product (one static page, done excellently)
- **Stack:** static-first. Plain HTML/CSS/vanilla JS in a single folder OR Next.js with
  `output: "export"` — builder's choice, but the result must be a static deploy (no server),
  fast (Lighthouse 95+ perf), zero external requests (no CDN fonts/scripts — self-host or
  system fonts), no telemetry/analytics.
- **Voice:** confident, dry, a little funny. Not corporate, not cringe. The premise writes
  itself: every tool on this page replaces something that costs $10–40/seat/month for what
  is, underneath, a redirect table or a PDF stamper. Sample headline direction (improve on
  it): "Free tools. No seats. No caps. No 'upgrade to unlock.'" Subline: "Self-hosted,
  open-source alternatives to software that charges rent. MIT licensed. Your data stays
  yours."
- **Design:** dark, modern, sharp typography, generous whitespace; a subtle accent color
  per tool card; tasteful hover states; flawless at 375px and 1440px. No stock
  illustrations, no emoji soup, no AI-slop gradients. It should look like a developer with
  taste made it — closer to linear.app/vercel.com energy than a bootstrap template.

## Content — the tool grid (DATA-DRIVEN: one `tools.js`/`tools.json` array so adding a
tool is a one-line edit; the page renders from it)
Live now (7):
1. **SnagStuff** — free Snagit alternative. Full-page scrolling screenshots + annotation
   in your browser. Chrome/Edge/Brave/Firefox/Safari. → github.com/JoshuaStorm1017/snagstuff
2. **SnagStuff Desktop** — capture ANY app on macOS/Windows; panoramic scroll-stitch,
   editor, hotkeys. Python. → github.com/JoshuaStorm1017/snagstuff-desktop
3. **BookStuff** — free Calendly alternative. Unlimited event types, reschedule/cancel
   links, reminders, ICS feed. Replaces: $10–16/seat/mo. → github.com/JoshuaStorm1017/bookstuff
4. **DocStuff** — free DocuSign alternative. Unlimited e-signatures, field placement,
   audit certificates. Replaces: $10–40/seat/mo + envelope caps. → github.com/JoshuaStorm1017/docstuff
5. **LinkStuff** — free Bitly alternative. Unlimited links, custom slugs, QR codes,
   privacy-first analytics. Replaces: $35/mo. → github.com/JoshuaStorm1017/linkstuff
6. **NoteStuff** — free Notion alternative. Local-first block editor, backlinks, full
   Markdown export. Your notes, your machine. → github.com/JoshuaStorm1017/notestuff
7. **FormStuff** — free Typeform alternative. One-question-at-a-time forms, logic jumps,
   quiz scoring, UNLIMITED responses (vs 10/month free). Replaces: $25+/mo. → github.com/JoshuaStorm1017/formstuff
Coming soon (greyed card, no link): **ReelStuff** — free Loom alternative. Screen + webcam
recording, 100% local, no 5-minute cap.

Each card: name, "free ___ alternative" tag, 1-line pitch, the pain it kills (the cap/fee
it replaces — this is the hook, make it visible), stack chips (e.g. "Browser ext", "Next.js
+ SQLite", "Python"), GitHub link. A small "what it replaces" price strikethrough is a nice
touch if it stays classy.

## Sections (in order)
1. Hero: headline + subline + two buttons ("Browse the tools" anchor, "GitHub" →
   github.com/JoshuaStorm1017). Small print: "MIT licensed · self-hosted · no accounts ·
   no telemetry".
2. The grid (above).
3. "Why" — 3 short blurbs: *Own your data* (self-hosted, nothing phones home), *No rent*
   (no seats, caps, or upgrade walls — MIT forever), *Actually maintained* (each repo has
   real tests/verification — link the receipts honestly).
4. "Who" — two sentences about Josh: builds AI-assisted production software; more at
   joshstorm.com (link) + GitHub. Understated, no rap references, no hype.
5. Footer: © 2026 Josh Storm · MIT · GitHub link.

## Acceptance (verify honestly)
1. Builds/serves statically with zero console errors; all 8 cards render from the data
   file; every link correct (spot-check each URL string against the list above — typos in
   GitHub URLs are the #1 failure here).
2. Zero external network requests (verify: no fonts.googleapis, no CDNs in the HTML).
3. Looks right at 375px and 1440px (screenshot both if headless Chrome is available; save
   to screenshots/).
4. Lighthouse-style sanity: tiny payload (<200KB total ideally), semantic HTML, real
   <title>/meta description/OG tags ("The Stuff Suite — free, self-hosted alternatives").
5. README (what it is, how to run locally, how to add a tool to the data file), MIT
   LICENSE. `git init` + commit locally as JoshuaStorm1017. NO remote, NO push, NO deploy
   (assistant handles both after QA).
