const app = document.getElementById("app");
const path = window.location.pathname.replace("/", "");

const extensions = {
  youtube: {
    name: "YouTube Ad Blocker 2025",
    iconDomain: "youtube.com",
    lastUpdated: "4 Jan 2026",
    policy: `
      <div class="section">
        <h3>Overview</h3>
        <p>
          YouTube Ad Blocker 2025 is a privacy-first browser extension designed to
          reduce ad interruptions by adjusting playback speed during advertisements.
        </p>
      </div>

      <div class="section">
        <h3>Data Collection</h3>
        <p>No personal or usage data is collected, stored, transmitted, or shared.</p>
        <ul>
          <li>No identifiers or account data</li>
          <li>No browsing or watch history</li>
          <li>No analytics, telemetry, or tracking</li>
        </ul>
      </div>

      <div class="section">
        <h3>Local Storage</h3>
        <p>
          Settings such as playback speed and extension state are stored locally
          using browser storage APIs and never leave your device.
        </p>
      </div>

      <div class="section">
        <h3>Permissions</h3>
        <ul>
          <li>activeTab for playback control</li>
          <li>storage for saving preferences</li>
          <li>host permissions limited to YouTube domains</li>
        </ul>
      </div>

      <div class="section">
        <h3>Contact</h3>
        <p>Email: privacy@ytadblocker2025.com</p>
      </div>
    `
  },

  gemini: {
    name: "Gemini Watermark Remover",
    iconDomain: "gemini.google.com",
    lastUpdated: "4 Jan 2026",
    policy: `
      <div class="section">
        <h3>Overview</h3>
        <p>
          Gemini Watermark Remover is a lightweight extension that removes
          AI-generated watermarks from images downloaded from Gemini.
        </p>
      </div>

      <div class="section">
        <h3>Data Handling</h3>
        <p>
          All processing happens locally inside your browser.
          No data is collected, logged, or transmitted.
        </p>
      </div>

      <div class="section">
        <h3>Permissions</h3>
        <ul>
          <li>Host access limited to gemini.google.com</li>
          <li>No background networking</li>
        </ul>
      </div>

      <div class="section">
        <h3>Security</h3>
        <p>
          The extension does not use remote code, external APIs, or third-party services.
        </p>
      </div>

      <div class="section">
        <h3>Contact</h3>
        <p>Email: sanjay@mailchat.me</p>
      </div>
    `
  }
};

if (!extensions[path]) {
  app.innerHTML = `
    <div class="card">
      <h2>Privacy Policies for Browser Extensions</h2>
      <p style="margin-top:12px;color:var(--muted)">
        Select an extension:
      </p>
      <ul style="margin-top:16px">
        <li><a href="/youtube">YouTube Ad Blocker 2025</a></li>
        <li><a href="/gemini">Gemini Watermark Remover</a></li>
      </ul>
    </div>
  `;
} else {
  const ext = extensions[path];
  app.innerHTML = `
    <div class="card">
      <div class="extension-header">
        <img src="https://www.google.com/s2/favicons?sz=128&domain=${ext.iconDomain}" />
        <div>
          <h2>${ext.name}</h2>
          <p style="color:var(--muted)">Last updated: ${ext.lastUpdated}</p>
        </div>
      </div>
      ${ext.policy}
    </div>
  `;
}
