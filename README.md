# The Stuff Suite

Landing page for the Stuff Suite — free, open-source, self-hosted alternatives to
software that charges rent. One static page. No build step, no dependencies, no
external requests, no telemetry.

**Live tools:** SnagStuff · SnagStuff Desktop · BookStuff · DocStuff · LinkStuff ·
NoteStuff · FormStuff — plus ReelStuff (coming soon). All MIT licensed, all at
[github.com/JoshuaStorm1017](https://github.com/JoshuaStorm1017).

## Run locally

It's static files — any web server works:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in a browser.

## Add a tool

The grid renders entirely from the `TOOLS` array in [`tools.js`](tools.js).
Add one line:

```js
{ name: "NewStuff", tag: "Free X alternative", pitch: "One line on what it does.", strike: "$X/mo", after: "$0", chips: ["Stack"], repo: "https://github.com/JoshuaStorm1017/newstuff", accent: "#6cb4ff", status: "live" },
```

Set `status: "soon"` and `repo: null` for a coming-soon card. That's the whole
process — no build, no rebuild, refresh the page.

## Deploy notes

- Static deploy, no server needed (Vercel: framework preset "Other", no build command,
  output directory `.`).
- **Before deploying anywhere other than `stuff-suite.vercel.app`:** update the
  `canonical`, `og:url`, and `og:image` URLs in `index.html` — they're currently
  placeholders pointing at `https://stuff-suite.vercel.app/`.
- Regenerate the social card after edits to `assets/og.html`:

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --screenshot=og.png --window-size=1200,630 --hide-scrollbars assets/og.html
```

## Repo layout

```
index.html      page markup + meta/OG tags
styles.css      all styles (system fonts only)
tools.js        the data — the tool grid renders from this
main.js         grid renderer (vanilla JS, ~80 lines)
assets/         favicon + OG image template
og.png          1200×630 social card
screenshots/    375px and 1440px QA screenshots
```

Page payload is ~21 KB raw (~7 KB gzipped). Zero external requests — system font
stack, no CDNs, no analytics.

## License

[MIT](LICENSE) © 2026 Josh Storm
