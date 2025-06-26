(() => {
  const FONT_NAME = "'Azaraan', cursive !important";
  const CLASS_SELECTORS = ['.azaraan-word', '.azaraan-phrase', '.azaraan-fusion-form'];

  // Inject font-face and stylesheet once
  const injectOnce = (id, tag, props) => {
    if (!document.getElementById(id)) {
      const el = document.createElement(tag);
      el.id = id;
      Object.assign(el, props);
      document.head.appendChild(el);
    }
  };

  injectOnce('azaraan-font-css', 'link', {
    rel: 'stylesheet',
    href: 'https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Language%20Font%20CSS.css'
  });

  injectOnce('azaraan-font-face', 'style', {
    textContent: `
      @font-face {
        font-family: 'Azaraan';
        src: url('https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf') format('truetype');
        font-display: swap;
      }
    `
  });

  // Observe and replace "Pacifico" font usage
  const overrideFont = () => {
    document.querySelectorAll('[style*="font-family: Pacifico"]').forEach(el => el.style.fontFamily = FONT_NAME);
    CLASS_SELECTORS.forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.fontFamily = FONT_NAME));
    document.querySelectorAll('[aria-label="Pacifico"]').forEach(el => { if (el.textContent !== "Azaraan") el.textContent = "Azaraan"; });
  };

  const observer = new MutationObserver(overrideFont);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });

  // Force global replacement with fallback CSS
  const fallbackStyle = document.createElement('style');
  fallbackStyle.textContent = `
    [style*="font-family:Pacifico"],
    [class*="font-Pacifico"],
    [aria-label*="Pacifico"],
    .docs-texteventtarget-font-Pacifico {
      font-family: 'Azaraan' !important;
      font-size: 2em !important;
      color: teal !important;
      font-style: normal !important;
      font-weight: normal !important;
      line-height: 1.2 !important;
    }

    .azaraan-word, .azaraan-phrase, .azaraan-fusion-form {
      font-family: 'Azaraan', cursive !important;
    }
  `;
  document.head.appendChild(fallbackStyle);

  // Apply Aza'raan font once on load
  CLASS_SELECTORS.forEach(sel => document.querySelectorAll(sel).forEach(el => el.style.fontFamily = FONT_NAME));

  // Apply theme colors to :root if not already applied
  const cssVars = {
    '--moonlight': '#c0f7f2',
    '--dreamlight': '#b59fff',
    '--glacial': '#d1ecf6',
    '--moss': '#7ec98d',
    '--coral': '#f2b8a0',
    '--ember': '#ffae66',
    '--obsidian': '#1e1f26',
    '--silver': '#dfeaf0',
    '--cyan': '#00f6ff',
    '--highlight': '#ffffff',
    '--glow': '#82f2f2',
    '--prism': 'linear-gradient(135deg, #b59fff, #c0f7f2, #7ec98d, #f2b8a0)'
  };
  const root = document.documentElement;
  for (const [k, v] of Object.entries(cssVars)) {
    root.style.setProperty(k, v);
  }
})();
