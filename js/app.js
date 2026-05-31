const app = document.getElementById("app");
const path = window.location.pathname.replace("/", "");

const extensions = {
  youtube: {
    name: "YouTube Ad Blocker 2025",
    icon: "https://www.google.com/s2/favicons?sz=128&domain=youtube.com",
    lastUpdated: "January 5, 2026",
    policy: `
      <div class="section">
        <h3>1. Commitment to Privacy</h3>
        <p>
          We believe privacy is a fundamental right. YouTube Ad Blocker 2025 is designed to operate entirely within your browser, ensuring your data never leaves your device.
        </p>
      </div>

      <div class="section">
        <h3>2. Zero Data Collection</h3>
        <p>This extension does not collect, store, transmit, or monetize any user data. Specifically:</p>
        <ul>
          <li>We do not track your browsing history or YouTube watch history.</li>
          <li>We do not collect personal identifiers, email addresses, or account information.</li>
          <li>We do not use any third-party analytics, telemetry, or tracking scripts.</li>
        </ul>
      </div>

      <div class="section">
        <h3>3. Local Processing</h3>
        <p>
          All ad-blocking logic and playback speed adjustments happen locally on your machine. Any settings you customize are stored using the browser's local storage API and are never synced to external servers.
        </p>
      </div>

      <div class="section">
        <h3>4. Required Permissions</h3>
        <ul>
          <li><strong>activeTab:</strong> Used solely to detect and manage video playback on the current YouTube page.</li>
          <li><strong>storage:</strong> Used to remember your preferred playback speed settings locally.</li>
          <li><strong>Host Permissions:</strong> Strictly limited to YouTube domains (youtube.com) to perform its core function.</li>
        </ul>
      </div>

      <div class="section">
        <h3>5. Transparency & Security</h3>
        <p>
          The extension does not fetch remote code or interact with external APIs. Its behavior is consistent, predictable, and fully transparent.
        </p>
      </div>

      <div class="section">
        <h3>6. Contact</h3>
        <p>For any privacy-related inquiries, please contact us at: <strong>sanjay@mailchat.me</strong></p>
      </div>
    `
  },

  gemini: {
    name: "Gemini Watermark Remover",
    icon: "https://www.google.com/s2/favicons?sz=128&domain=gemini.google.com",
    lastUpdated: "May 24, 2026",
    policy: `
      <div class="section">
        <h3>1. Core Principle</h3>
        <p>
          Gemini Watermark Remover is a specialized tool built with a single purpose: enhancing your creative workflow while maintaining absolute privacy.
        </p>
      </div>

      <div class="section">
        <h3>2. No External Communication</h3>
        <p>
          The extension operates in a completely isolated environment. It does not have background networking capabilities and cannot communicate with any external servers.
        </p>
      </div>

      <div class="section">
        <h3>3. Image Processing</h3>
        <p>
          Watermark removal is performed using client-side canvas operations. Your images are processed in-memory and are never uploaded, saved, or logged by the extension.
        </p>
      </div>

      <div class="section">
        <h3>4. Permissions Policy</h3>
        <ul>
          <li><strong>Access:</strong> Limited strictly to gemini.google.com.</li>
          <li><strong>Data:</strong> No access to your Google account details or personal files.</li>
        </ul>
      </div>

      <div class="section">
        <h3>5. Updates</h3>
        <p>
          Any future updates will strictly adhere to this "Zero Data" policy. We will never introduce features that compromise user privacy.
        </p>
      </div>

      <div class="section">
        <h3>6. Support</h3>
        <p>Questions? Reach out via email: <strong>sanjay@mailchat.me</strong></p>
      </div>
    `
  },

  clipboard: {
    name: "Clipboard Eternity",
    icon: "https://i.imgur.com/rdgDdfS.png",
    lastUpdated: "April 3, 2026",
    policy: `
      <div class="section">
        <h3>1. Core Functionality</h3>
        <p>
          Clipboard Eternity automatically detects and saves content that you copy (such as text, links, and code snippets) directly within your browser. This allows you to search and reuse previously copied content instantly.
        </p>
      </div>

      <div class="section">
        <h3>2. Local-Only Data Storage</h3>
        <p>
          All copied data is stored exclusively on your device using the browser's local storage system. No data is transmitted, uploaded, or synced to any external servers.
        </p>
      </div>

      <div class="section">
        <h3>3. Data Handling Transparency</h3>
        <ul>
          <li>Copied content (text or URLs) is stored locally for user convenience.</li>
          <li>URLs may be automatically categorized as "smart links" for easier access.</li>
          <li>No background data collection occurs beyond user-triggered copy actions.</li>
        </ul>
      </div>

      <div class="section">
        <h3>4. Zero External Communication</h3>
        <p>
          This extension does not connect to any external APIs, servers, or third-party services. All operations are performed entirely within the browser environment.
        </p>
      </div>

      <div class="section">
        <h3>5. Permissions Justification</h3>
        <ul>
          <li><strong>clipboardRead:</strong> Required to access copied content after user actions.</li>
          <li><strong>storage:</strong> Used to securely store clipboard history locally on your device.</li>
        </ul>
      </div>

      <div class="section">
        <h3>6. Sensitive Data Awareness</h3>
        <p>
          The extension processes all copied content equally and does not differentiate between types of data. Users should be aware that any copied content may be stored locally within their device history.
        </p>
      </div>

      <div class="section">
        <h3>7. No Tracking or Analytics</h3>
        <ul>
          <li>No user tracking mechanisms are implemented.</li>
          <li>No analytics, telemetry, or behavioral monitoring is performed.</li>
          <li>No personal identity or account data is collected.</li>
        </ul>
      </div>

      <div class="section">
        <h3>8. Security & Control</h3>
        <p>
          Users retain full control over their stored clipboard data. Data can be cleared at any time through the extension interface.
        </p>
      </div>

      <div class="section">
        <h3>9. Contact</h3>
        <p>
          For privacy-related questions, contact: <strong>sanjay@mailchat.me</strong>
        </p>
      </div>
    `
  },

  discord: {
    name: "Discord Web Auto Quest Extension",
    icon: "https://i.imgur.com/SVGoiJC.png",
    lastUpdated: "May 31, 2026",
    policy: `
      <div class="section">
        <h3>1. Introduction</h3>
        <p>
          Discord Web Auto Quest Extension automates quest completion on <strong>discord.com/quest-home</strong> while running entirely within your browser.
        </p>
      </div>

      <div class="section">
        <h3>2. Local Operation</h3>
        <p>
          The extension injects helper scripts into the active Discord tab and interacts only with Discord's own quest API endpoints. No external servers or third-party services are contacted.
        </p>
      </div>

      <div class="section">
        <h3>3. No Data Collection</h3>
        <p>
          This extension does not collect, store, transmit, or share user data. It does not use analytics, telemetry, or any remote logging.
        </p>
      </div>

      <div class="section">
        <h3>4. Permissions</h3>
        <ul>
          <li><strong>Host Permission:</strong> <code>https://discord.com/*</code> to run content scripts and access Discord quest endpoints.</li>
          <li><strong>scripting:</strong> To inject the quest automation script into the active tab.</li>
          <li><strong>activeTab:</strong> To target the current Discord tab for script injection.</li>
          <li><strong>declarativeNetRequestWithHostAccess:</strong> To modify Discord request headers for Electron desktop client emulation.</li>
        </ul>
      </div>

      <div class="section">
        <h3>5. How It Works</h3>
        <p>
          The extension adds an in-page button and status panel on the Discord quest page, and can optionally run quests sequentially or in parallel. The default mode is sequential for safer execution.
        </p>
      </div>

      <div class="section">
        <h3>6. User Responsibility</h3>
        <p>
          The extension is provided as-is. Users should keep the quest page open while automation runs and use the tool responsibly.
        </p>
      </div>

      <div class="section">
        <h3>7. Contact</h3>
        <p>
          For privacy questions or issues, use the GitHub repo or browser extension listing.
        </p>
      </div>
    `
  },

  speed: {
    name: "SpeedX",
    icon: "https://i.imgur.com/xvW3dZZ.png",
    lastUpdated: "April 27, 2026",
    policy: `
      <div class="section">
        <h3>1. What SpeedX Does</h3>
        <p>
          SpeedX is a video speed controller that works on any website with HTML5 video content, including YouTube, Netflix, Coursera, Udemy, Vimeo, and Facebook. All speed control logic runs entirely within your browser. No data ever leaves your device.
        </p>
      </div>

      <div class="section">
        <h3>2. Zero Data Collection</h3>
        <p>SpeedX does not collect, store, transmit, or share any user data. Specifically:</p>
        <ul>
          <li>No browsing history or watch history is tracked.</li>
          <li>No personal identifiers, email addresses, or account information is collected.</li>
          <li>No analytics, telemetry, or third-party tracking scripts are used.</li>
        </ul>
      </div>

      <div class="section">
        <h3>3. Local Settings Only</h3>
        <p>
          Your preferred playback speed and any other settings are stored using the browser's local storage. This data never leaves your device and is never synced to any external server.
        </p>
      </div>

      <div class="section">
        <h3>4. How It Works</h3>
        <p>SpeedX controls video playback using the browser's native HTML5 video API:</p>
        <ul>
          <li>Supports speeds from 0.25x up to 20x.</li>
          <li>Provides keyboard shortcuts (plus, minus, and number presets) for quick adjustments.</li>
          <li>Displays a floating overlay on the video showing the current speed.</li>
          <li>Remembers your last-used speed across sessions.</li>
        </ul>
      </div>

      <div class="section">
        <h3>5. Permissions</h3>
        <ul>
          <li><strong>activeTab:</strong> Required to detect and interact with video elements on the current page.</li>
          <li><strong>storage:</strong> Used to persist your speed preference locally.</li>
          <li><strong>Host Permissions:</strong> Limited to sites where HTML5 video is present. No access to unrelated pages or data.</li>
        </ul>
      </div>

      <div class="section">
        <h3>6. No Remote Code</h3>
        <p>
          SpeedX does not fetch or execute any code from remote servers. Its full behavior is contained within the extension package as reviewed and published on the Chrome Web Store.
        </p>
      </div>

      <div class="section">
        <h3>7. Contact</h3>
        <p>For privacy-related questions, contact: <strong>sanjay@mailchat.me</strong></p>
      </div>
    `
  },

  scroll: {
    name: "Auto Scroll",
    icon: "https://i.imgur.com/hDXlxwB.png",
    lastUpdated: "April 27, 2026",
    policy: `
      <div class="section">
        <h3>1. What Auto Scroll Does</h3>
        <p>
          Auto Scroll lets you scroll any website automatically at a smooth, adjustable pace. It is built for long reading sessions, browsing feeds, and hands-free usage. All functionality runs entirely inside your browser.
        </p>
      </div>

      <div class="section">
        <h3>2. Zero Data Collection</h3>
        <p>Auto Scroll does not collect, store, transmit, or share any user data. Specifically:</p>
        <ul>
          <li>No browsing history or page visit data is tracked.</li>
          <li>No personal identifiers or account information is collected.</li>
          <li>No analytics, telemetry, or third-party tracking is used.</li>
        </ul>
      </div>

      <div class="section">
        <h3>3. Local Settings Only</h3>
        <p>
          Your scroll speed and direction preferences are stored using the browser's local storage. This data stays on your device and is never transmitted anywhere.
        </p>
      </div>

      <div class="section">
        <h3>4. No External Communication</h3>
        <p>
          Auto Scroll does not connect to any external APIs, servers, or third-party services. It has no network activity beyond rendering within your browser tab.
        </p>
      </div>

      <div class="section">
        <h3>5. Permissions</h3>
        <ul>
          <li><strong>activeTab:</strong> Required to inject the scroll controller into the current page.</li>
          <li><strong>storage:</strong> Used to save your scroll settings locally.</li>
        </ul>
      </div>

      <div class="section">
        <h3>6. Contact</h3>
        <p>For privacy-related questions, contact: <strong>sanjay@mailchat.me</strong></p>
      </div>
    `
  },

  fonts: {
    name: "Font Override",
    icon: "https://i.imgur.com/6I4Dltr.png",
    lastUpdated: "April 27, 2026",
    policy: `
      <div class="section">
        <h3>1. What Font Override Does</h3>
        <p>
          Font Override lets you replace the fonts on any website with a font of your choosing. It is built for readability, accessibility, and personal preference. All processing happens locally within your browser.
        </p>
      </div>

      <div class="section">
        <h3>2. Zero Data Collection</h3>
        <p>Font Override does not collect, store, transmit, or share any user data. Specifically:</p>
        <ul>
          <li>No browsing history or page content is tracked.</li>
          <li>No personal identifiers or account information is collected.</li>
          <li>No analytics, telemetry, or third-party tracking is used.</li>
        </ul>
      </div>

      <div class="section">
        <h3>3. Local Settings Only</h3>
        <p>
          Your font preferences are stored exclusively on your device using the browser's local storage API. Settings are never uploaded, synced, or shared with any external server.
        </p>
      </div>

      <div class="section">
        <h3>4. No External Communication</h3>
        <p>
          Font Override does not connect to any external APIs or servers. If a custom font is loaded via a URL you provide, that request is made directly by your browser and is not proxied or logged by the extension.
        </p>
      </div>

      <div class="section">
        <h3>5. Permissions</h3>
        <ul>
          <li><strong>activeTab:</strong> Required to apply the selected font to the current page's content.</li>
          <li><strong>storage:</strong> Used to remember your font preferences locally.</li>
        </ul>
      </div>

      <div class="section">
        <h3>6. Contact</h3>
        <p>For privacy-related questions, contact: <strong>sanjay@mailchat.me</strong></p>
      </div>
    `
  }
};

if (!extensions[path]) {
  app.innerHTML = `
    <div class="card">
      <h2>Extension Privacy Hub</h2>
      <p style="margin-top:12px;color:var(--muted)">
        Select an extension to view its comprehensive privacy policy and data handling practices.
      </p>
      <div class="ext-list">
        <a href="/youtube" class="ext-item">
          <img src="https://www.google.com/s2/favicons?sz=64&domain=youtube.com" width="32" height="32" style="border-radius:6px">
          <span>YouTube Ad Blocker</span>
        </a>
        <a href="/gemini" class="ext-item">
          <img src="https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com" width="32" height="32" style="border-radius:6px">
          <span>Gemini Remover</span>
        </a>
        <a href="/clipboard" class="ext-item">
          <img src="https://i.imgur.com/rdgDdfS.png" width="32" height="32" style="border-radius:6px">
          <span>Clipboard Eternity</span>
        </a>
        <a href="/discord" class="ext-item">
          <img src="https://i.imgur.com/SVGoiJC.png" width="32" height="32" style="border-radius:6px">
          <span>Discord Auto Quest</span>
        </a>
        <a href="/speed" class="ext-item">
          <img src="https://i.imgur.com/xvW3dZZ.png" width="32" height="32" style="border-radius:6px">
          <span>SpeedX</span>
        </a>
        <a href="/scroll" class="ext-item">
          <img src="https://i.imgur.com/hDXlxwB.png" width="32" height="32" style="border-radius:6px">
          <span>Auto Scroll</span>
        </a>
        <a href="/fonts" class="ext-item">
          <img src="https://i.imgur.com/6I4Dltr.png" width="32" height="32" style="border-radius:6px">
          <span>Font Override</span>
        </a>
      </div>
    </div>
  `;
} else {
  const ext = extensions[path];
  app.innerHTML = `
    <div class="card">
      <div class="extension-header">
        <img src="${ext.icon}" />
        <div>
          <h2>${ext.name}</h2>
          <p style="color:var(--muted)">Protocol Version: 1.0.4 · ${ext.lastUpdated}</p>
        </div>
      </div>
      <div class="policy-content">
        ${ext.policy}
      </div>
    </div>
  `;
}
