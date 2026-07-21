const app = document.getElementById("app");
const path = window.location.pathname.replace(/^\/+|\/+$/g, "");

const CONTACT = "sarkatech@proton.me";

const extensions = {
  youtube: {
    name: "YouTube Ad Blocker 2025",
    tagline: "Ad-free YouTube, entirely local.",
    icon: "https://www.google.com/s2/favicons?sz=128&domain=youtube.com",
    lastUpdated: "January 5, 2026",
    version: "1.0.4",
    sections: [
      { title: "Commitment to Privacy", body: `<p>Privacy is a fundamental right. YouTube Ad Blocker 2025 is designed to operate entirely within your browser, so your data never leaves your device.</p>` },
      { title: "Zero Data Collection", body: `<p>This extension does not collect, store, transmit, or monetise any user data.</p><ul><li>No browsing history or YouTube watch history is tracked.</li><li>No personal identifiers, email addresses, or account information are collected.</li><li>No third-party analytics, telemetry, or tracking scripts are used.</li></ul>` },
      { title: "Local Processing", body: `<p>All ad-blocking logic and playback adjustments happen locally on your machine. Any settings you customise are stored in the browser's local storage and never synced to external servers.</p>` },
      { title: "Required Permissions", body: `<ul><li><strong>activeTab</strong> — detect and manage playback on the current YouTube page.</li><li><strong>storage</strong> — remember your preferred playback speed locally.</li><li><strong>Host permissions</strong> — strictly limited to youtube.com.</li></ul>` },
      { title: "Transparency & Security", body: `<p>The extension does not fetch remote code or interact with external APIs. Its behaviour is consistent, predictable, and fully transparent.</p>` },
      { title: "Contact", body: `<p>For privacy-related enquiries, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  gemini: {
    name: "Gemini Watermark Remover",
    tagline: "A focused creative helper. Nothing more.",
    icon: "https://www.google.com/s2/favicons?sz=128&domain=gemini.google.com",
    lastUpdated: "May 24, 2026",
    version: "1.0.4",
    sections: [
      { title: "Core Principle", body: `<p>Gemini Watermark Remover is a specialised tool built with a single purpose: enhancing your creative workflow while maintaining absolute privacy.</p>` },
      { title: "No External Communication", body: `<p>The extension operates in a completely isolated environment. It does not have background networking capabilities and cannot communicate with any external servers.</p>` },
      { title: "Image Processing", body: `<p>Watermark removal is performed using client-side canvas operations. Your images are processed in memory and are never uploaded, saved, or logged.</p>` },
      { title: "Permissions Policy", body: `<ul><li><strong>Access</strong> — strictly limited to gemini.google.com.</li><li><strong>Data</strong> — no access to your Google account details or personal files.</li></ul>` },
      { title: "Updates", body: `<p>Any future updates will strictly adhere to this zero-data policy. Features that compromise user privacy will never be introduced.</p>` },
      { title: "Support", body: `<p>Questions? Reach out at <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  clipboard: {
    name: "Clipboard Eternity",
    tagline: "Every copy, saved forever — on your device only.",
    icon: "https://i.imgur.com/rdgDdfS.png",
    lastUpdated: "April 3, 2026",
    version: "1.0.4",
    sections: [
      { title: "Core Functionality", body: `<p>Clipboard Eternity automatically detects and saves content you copy — text, links, code snippets — inside your browser. This lets you search and reuse copied content instantly.</p>` },
      { title: "Local-Only Data Storage", body: `<p>All copied data is stored exclusively on your device using the browser's local storage system. Nothing is transmitted, uploaded, or synced to any external server.</p>` },
      { title: "Data Handling Transparency", body: `<ul><li>Copied text or URLs are stored locally for user convenience.</li><li>URLs may be categorised as "smart links" for easier access.</li><li>No background data collection occurs beyond user-triggered copy actions.</li></ul>` },
      { title: "Zero External Communication", body: `<p>This extension does not connect to any external APIs, servers, or third-party services. All operations happen entirely within the browser.</p>` },
      { title: "Permissions Justification", body: `<ul><li><strong>clipboardRead</strong> — access copied content after user actions.</li><li><strong>storage</strong> — persist clipboard history locally on your device.</li></ul>` },
      { title: "Sensitive Data Awareness", body: `<p>The extension does not differentiate between types of copied content. Be aware that anything you copy may be stored locally within your device history and can be cleared at any time.</p>` },
      { title: "No Tracking or Analytics", body: `<ul><li>No user tracking mechanisms are implemented.</li><li>No analytics, telemetry, or behavioural monitoring is performed.</li><li>No personal identity or account data is collected.</li></ul>` },
      { title: "Security & Control", body: `<p>You retain full control over stored clipboard data and can clear it at any time through the extension interface.</p>` },
      { title: "Contact", body: `<p>For privacy-related questions, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  discord: {
    name: "Discord Web Auto Quest",
    tagline: "Automates quest completion — nothing else.",
    icon: "https://i.imgur.com/SVGoiJC.png",
    lastUpdated: "May 31, 2026",
    version: "1.0.4",
    sections: [
      { title: "Introduction", body: `<p>Discord Web Auto Quest automates quest completion on <strong>discord.com/quest-home</strong> while running entirely within your browser.</p>` },
      { title: "Local Operation", body: `<p>The extension injects helper scripts into the active Discord tab and interacts only with Discord's own quest API endpoints. No external servers or third-party services are contacted.</p>` },
      { title: "No Data Collection", body: `<p>This extension does not collect, store, transmit, or share user data. It does not use analytics, telemetry, or any remote logging.</p>` },
      { title: "Permissions", body: `<ul><li><strong>Host permission</strong> <code>https://discord.com/*</code> — run content scripts and access Discord quest endpoints.</li><li><strong>scripting</strong> — inject the quest automation script into the active tab.</li><li><strong>activeTab</strong> — target the current Discord tab for script injection.</li><li><strong>declarativeNetRequestWithHostAccess</strong> — modify Discord request headers for Electron desktop client emulation.</li></ul>` },
      { title: "How It Works", body: `<p>The extension adds an in-page button and status panel on the Discord quest page, and can run quests sequentially or in parallel. Sequential is the default for safer execution.</p>` },
      { title: "User Responsibility", body: `<p>The extension is provided as-is. Keep the quest page open while automation runs and use the tool responsibly.</p>` },
      { title: "Contact", body: `<p>For privacy questions or issues, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  speed: {
    name: "SpeedX",
    tagline: "Precise video speed control on every site.",
    icon: "https://i.imgur.com/xvW3dZZ.png",
    lastUpdated: "April 27, 2026",
    version: "1.0.4",
    sections: [
      { title: "What SpeedX Does", body: `<p>SpeedX is a video speed controller that works on any website with HTML5 video content, including YouTube, Netflix, Coursera, Udemy, Vimeo, and Facebook. All logic runs entirely within your browser.</p>` },
      { title: "Zero Data Collection", body: `<p>SpeedX does not collect, store, transmit, or share any user data.</p><ul><li>No browsing or watch history is tracked.</li><li>No personal identifiers, email addresses, or account information are collected.</li><li>No analytics, telemetry, or third-party tracking scripts are used.</li></ul>` },
      { title: "Local Settings Only", body: `<p>Your preferred playback speed and any other settings are stored in the browser's local storage. This data never leaves your device.</p>` },
      { title: "How It Works", body: `<ul><li>Supports speeds from 0.25× up to 20×.</li><li>Keyboard shortcuts (plus, minus, and number presets) for quick adjustments.</li><li>Floating overlay on the video showing the current speed.</li><li>Remembers your last-used speed across sessions.</li></ul>` },
      { title: "Permissions", body: `<ul><li><strong>activeTab</strong> — detect and interact with video elements on the current page.</li><li><strong>storage</strong> — persist your speed preference locally.</li><li><strong>Host permissions</strong> — limited to sites where HTML5 video is present.</li></ul>` },
      { title: "No Remote Code", body: `<p>SpeedX does not fetch or execute any code from remote servers. Its full behaviour is contained within the extension package as reviewed and published on the Chrome Web Store.</p>` },
      { title: "Contact", body: `<p>For privacy-related questions, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  scroll: {
    name: "Auto Scroll",
    tagline: "Hands-free reading at your pace.",
    icon: "https://i.imgur.com/hDXlxwB.png",
    lastUpdated: "April 27, 2026",
    version: "1.0.4",
    sections: [
      { title: "What Auto Scroll Does", body: `<p>Auto Scroll lets you scroll any website automatically at a smooth, adjustable pace. Built for long reading sessions, browsing feeds, and hands-free usage. All functionality runs inside your browser.</p>` },
      { title: "Zero Data Collection", body: `<p>Auto Scroll does not collect, store, transmit, or share any user data.</p><ul><li>No browsing history or page visit data is tracked.</li><li>No personal identifiers or account information are collected.</li><li>No analytics, telemetry, or third-party tracking is used.</li></ul>` },
      { title: "Local Settings Only", body: `<p>Your scroll speed and direction preferences are stored in the browser's local storage. Data stays on your device.</p>` },
      { title: "No External Communication", body: `<p>Auto Scroll does not connect to any external APIs, servers, or third-party services. It has no network activity beyond rendering within your browser tab.</p>` },
      { title: "Permissions", body: `<ul><li><strong>activeTab</strong> — inject the scroll controller into the current page.</li><li><strong>storage</strong> — save your scroll settings locally.</li></ul>` },
      { title: "Contact", body: `<p>For privacy-related questions, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  fonts: {
    name: "Font Override",
    tagline: "Read the web in the typeface you love.",
    icon: "https://i.imgur.com/6I4Dltr.png",
    lastUpdated: "April 27, 2026",
    version: "1.0.4",
    sections: [
      { title: "What Font Override Does", body: `<p>Font Override replaces the fonts on any website with a typeface of your choosing. Built for readability, accessibility, and personal preference. All processing happens locally.</p>` },
      { title: "Zero Data Collection", body: `<p>Font Override does not collect, store, transmit, or share any user data.</p><ul><li>No browsing history or page content is tracked.</li><li>No personal identifiers or account information are collected.</li><li>No analytics, telemetry, or third-party tracking is used.</li></ul>` },
      { title: "Local Settings Only", body: `<p>Your font preferences are stored exclusively on your device using the browser's local storage. Settings are never uploaded, synced, or shared.</p>` },
      { title: "No External Communication", body: `<p>Font Override does not connect to any external APIs or servers. If a custom font is loaded via a URL you provide, that request is made directly by your browser and is not proxied or logged.</p>` },
      { title: "Permissions", body: `<ul><li><strong>activeTab</strong> — apply the selected font to the current page.</li><li><strong>storage</strong> — remember your font preferences locally.</li></ul>` },
      { title: "Contact", body: `<p>For privacy-related questions, email <strong>${CONTACT}</strong>.</p>` }
    ]
  },

  imdb: {
    name: "IMDbPlay",
    tagline: "Match movies on IMDb. Client-side. No sign-in.",
    icon: "https://www.google.com/s2/favicons?sz=128&domain=imdb.com",
    lastUpdated: "July 19, 2026",
    version: "1.0.4",
    sections: [
      { title: "What IMDbPlay Does", body: `<p>IMDbPlay runs entirely on the client side while you browse IMDb. It helps you discover and match movies based on your on-page interactions — no sign-in, no cloud, no accounts. Everything happens inside your browser tab.</p>` },
      { title: "Zero Data Collection", body: `<p>IMDbPlay does not collect, transmit, store, or monetise any user data.</p><ul><li>No viewing history, ratings, or watchlist data are collected.</li><li>No personal identifiers, IP addresses, or account details are gathered.</li><li>No analytics, telemetry, or third-party tracking scripts are used.</li></ul>` },
      { title: "No Sign-In Required", body: `<p>The extension does not require authentication of any kind. You never provide an email, password, or IMDb credentials to use IMDbPlay.</p>` },
      { title: "Client-Side Only", body: `<p>All movie matching logic runs locally in your browser against the page content of IMDb. No data is uploaded to any external server, and the extension has no backend infrastructure.</p>` },
      { title: "Permissions", body: `<ul><li><strong>activeTab</strong> — read the current IMDb page and surface movie matches.</li><li><strong>Host permissions</strong> — strictly limited to imdb.com.</li></ul>` },
      { title: "No External Communication", body: `<p>IMDbPlay does not connect to any external APIs or third-party services. Its behaviour is fully local, transparent, and predictable.</p>` },
      { title: "Contact", body: `<p>For privacy-related questions, email <strong>${CONTACT}</strong>.</p>` }
    ]
  }
};

const hubItems = [
  { path: "youtube",   name: "YouTube Ad Blocker",  category: "Media",    icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com" },
  { path: "gemini",    name: "Gemini Remover",      category: "Creative", icon: "https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com" },
  { path: "clipboard", name: "Clipboard Eternity",  category: "Utility",  icon: "https://i.imgur.com/rdgDdfS.png" },
  { path: "discord",   name: "Discord Auto Quest",  category: "Utility",  icon: "https://i.imgur.com/SVGoiJC.png" },
  { path: "speed",     name: "SpeedX",              category: "Media",    icon: "https://i.imgur.com/xvW3dZZ.png" },
  { path: "scroll",    name: "Auto Scroll",         category: "Reading",  icon: "https://i.imgur.com/hDXlxwB.png" },
  { path: "fonts",     name: "Font Override",       category: "Reading",  icon: "https://i.imgur.com/6I4Dltr.png" },
  { path: "imdb",      name: "IMDbPlay",            category: "Media",    icon: "https://www.google.com/s2/favicons?sz=64&domain=imdb.com" }
];

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[s]));
}

function slug(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function renderHub() {
  app.innerHTML = `
    <section class="hero">
      <div class="reveal">
        <span class="eyebrow">Privacy Policy · Sarka Technologies</span>
        <h1>Tools that stay on your <em>device</em>.</h1>
      </div>
      <div class="hero-meta reveal d2">
        <p class="lede">Every extension published by Sarka Technologies is built the same way: strictly client-side, zero data collection, no accounts, no telemetry. Pick one below to read its full policy.</p>
        <div>
          <div class="stat"><span class="num">0</span><span class="label">bytes sent to us</span></div>
          <div class="stat"><span class="num">${hubItems.length}</span><span class="label">extensions published</span></div>
          <div class="stat"><span class="num">100%</span><span class="label">client-side execution</span></div>
        </div>
      </div>
    </section>

    <section class="reveal d1">
      <div class="section-title">
        <h2>Extensions</h2>
        <span class="count">/ ${String(hubItems.length).padStart(2,"0")}</span>
      </div>
      <div class="search-wrap">
        <input id="ext-search" type="search" placeholder="Search extensions…" aria-label="Search extensions" autocomplete="off" />
      </div>
      <div class="ext-list" id="ext-list">
        ${hubItems.map((item, i) => `
          <a href="/${item.path}" class="ext-item" data-name="${escapeHtml(item.name.toLowerCase())} ${escapeHtml(item.category.toLowerCase())}">
            <span class="ext-icon"><img src="${item.icon}" alt="" width="36" height="36" /></span>
            <div class="ext-body">
              <div class="title">${escapeHtml(item.name)}</div>
              <div class="meta">${String(i + 1).padStart(2,"0")} · ${escapeHtml(item.category)}</div>
            </div>
          </a>
        `).join("")}
      </div>
      <p class="empty-state" id="ext-empty" style="display:none">No extensions match that search.</p>
    </section>

    <section class="reveal d2" id="principles">
      <div class="section-title" style="margin-top:64px">
        <h2>Our privacy principles</h2>
        <span class="count">/ 03</span>
      </div>
      <div class="principles">
        <div class="principle">
          <div class="idx">01 / LOCAL</div>
          <h3>Runs entirely in your browser</h3>
          <p>Every extension is content-script only. There is no backend, no worker to phone home, no cloud sync. What happens on your machine stays on your machine.</p>
        </div>
        <div class="principle">
          <div class="idx">02 / MINIMAL</div>
          <h3>Only the permissions we need</h3>
          <p>Host access is scoped to the exact domain each tool supports. Storage is used strictly for your preferences and never leaves the device.</p>
        </div>
        <div class="principle">
          <div class="idx">03 / TRANSPARENT</div>
          <h3>No accounts, no tracking</h3>
          <p>You never sign in, never enter an email, and never carry an identifier between sessions. No analytics, no telemetry, no third-party scripts — ever.</p>
        </div>
      </div>
    </section>
  `;

  const search = document.getElementById("ext-search");
  const list = document.getElementById("ext-list");
  const empty = document.getElementById("ext-empty");
  search?.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    list.querySelectorAll(".ext-item").forEach(el => {
      const match = !q || el.dataset.name.includes(q);
      el.style.display = match ? "" : "none";
      if (match) shown++;
    });
    empty.style.display = shown ? "none" : "block";
  });
}

function renderExtension(key) {
  const ext = extensions[key];
  const sections = ext.sections.map((s, i) => ({
    ...s,
    id: `s-${i + 1}-${slug(s.title)}`,
    num: String(i + 1).padStart(2, "0")
  }));

  app.innerHTML = `
    <a href="/" class="back-link reveal">← All extensions</a>

    <header class="detail-header reveal d1">
      <span class="icon-lg"><img src="${ext.icon}" alt="${escapeHtml(ext.name)} icon" /></span>
      <div class="meta">
        <h1>${escapeHtml(ext.name)}</h1>
        <div class="subline">Privacy Policy · v${escapeHtml(ext.version)} · Updated ${escapeHtml(ext.lastUpdated)}</div>
        <div class="badge-row">
          <span class="badge accent">Zero Data</span>
          <span class="badge">Client-side</span>
          <span class="badge">No Sign-in</span>
          <span class="badge">Open Source</span>
        </div>
        <p style="color:var(--ink-soft);margin-top:16px;max-width:56ch">${escapeHtml(ext.tagline)}</p>
      </div>
    </header>

    <div class="policy reveal d2">
      <aside class="toc" aria-label="Sections">
        <span class="toc-title">Contents</span>
        ${sections.map(s => `<a href="#${s.id}" data-target="${s.id}">${s.num} · ${escapeHtml(s.title)}</a>`).join("")}
      </aside>
      <div class="policy-body">
        ${sections.map(s => `
          <article class="section" id="${s.id}">
            <h3><span class="num">${s.num}</span>${escapeHtml(s.title)}</h3>
            ${s.body}
          </article>
        `).join("")}
      </div>
    </div>
  `;

  // TOC scroll spy
  const links = app.querySelectorAll(".toc a");
  const targets = sections.map(s => document.getElementById(s.id));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.dataset.target === e.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  targets.forEach(t => t && io.observe(t));
}

if (extensions[path]) {
  document.title = `${extensions[path].name} — Privacy Policy · Sarka Technologies`;
  renderExtension(path);
} else {
  renderHub();
}
