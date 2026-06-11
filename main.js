// Renders the tool grid from TOOLS (tools.js). No frameworks, no requests, no telemetry.

(function () {
  "use strict";

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function arrowIcon() {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("aria-hidden", "true");
    svg.classList.add("card-arrow");
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", "M4.5 11.5 11 5M5.5 4.5H11.5V10.5");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "currentColor");
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
    return svg;
  }

  function card(tool) {
    const live = tool.status === "live";
    const root = el("li", "card" + (live ? "" : " card--soon"));
    root.style.setProperty("--accent", tool.accent);

    // Stretched-link pattern: the title is the link (clean accessible name),
    // its ::after covers the whole card so the full card is clickable.
    const top = el("div", "card-top");
    const name = el("h3", "card-name");
    if (live) {
      const link = el("a", "card-link", tool.name);
      link.href = tool.repo;
      name.appendChild(link);
    } else {
      name.textContent = tool.name;
    }
    top.appendChild(name);
    if (live) {
      top.appendChild(arrowIcon());
    } else {
      top.appendChild(el("span", "card-soon", "Soon"));
    }
    root.appendChild(top);

    root.appendChild(el("p", "card-tag", tool.tag));
    root.appendChild(el("p", "card-pitch", tool.pitch));

    const foot = el("div", "card-foot");
    const hook = el("p", "card-hook");
    hook.appendChild(el("s", null, tool.strike));
    hook.appendChild(el("span", "card-hook-arr", "→"));
    hook.appendChild(el("b", null, tool.after));
    foot.appendChild(hook);

    const chips = el("div", "card-chips");
    for (const chip of tool.chips) chips.appendChild(el("span", "chip", chip));
    foot.appendChild(chips);
    root.appendChild(foot);

    return root;
  }

  const grid = document.getElementById("tools-grid");
  for (const tool of TOOLS) grid.appendChild(card(tool));

  const count = document.getElementById("tool-count");
  if (count) {
    const live = TOOLS.filter((t) => t.status === "live").length;
    count.textContent = live + " tools · 1 license (MIT) · $0";
  }
})();
