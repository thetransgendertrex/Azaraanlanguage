// ==UserScript==
// @name         Aza'raan Font Google Apps languageprojectjava (Advanced, GitHub Fallbacks)
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      2.0
// @description  Loads external languageprojectoverride.js and languageprojectstyle.css with local & GitHub fallbacks; overrides Pacifico with Aza'raan font on Google Apps only. ©Aza’ra™ ©Aza'raan language™ by William Blake Saville AKA #TheTransgenderTRex
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  /**
   * === Configuration ===
   */

  // Local relative font filename (adjust if needed)
  const LOCAL_FONT_FILENAME = "Azaraanlanguageprojectfont.ttf";

  // GitHub raw URLs for fallback assets
  const GITHUB_BASE_URL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/";
  const GITHUB_FONT_URL = GITHUB_BASE_URL + LOCAL_FONT_FILENAME;
  const GITHUB_OVERRIDE_JS_URL = GITHUB_BASE_URL + "languageprojectoverride.js";
  const GITHUB_STYLE_CSS_URL = GITHUB_BASE_URL + "languageprojectstyle.css";

  // The font-family name used internally and displayed in Google Apps UI dropdown
  const FONT_FAMILY_NAME = "Azaraan";

  // Domains to apply override on
  const SUPPORTED_HOSTS = [
    "docs.google.com",
    "slides.google.com",
    "sheets.google.com",
    "forms.google.com",
    "drive.google.com",
    "drawings.google.com"
  ];

  /**
   * Utility: Checks if current host is supported Google Apps domain.
   */
  function isSupportedHost() {
    return SUPPORTED_HOSTS.includes(location.hostname);
  }

  /**
   * Loads an external JavaScript file, with optional fallback.
   * Returns a Promise that resolves when the script loads or rejects on error.
   * 
   * @param {string} url - The script URL to load
   * @returns {Promise<void>}
   */
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.type = "text/javascript";
      script.async = false; // maintain execution order if multiple scripts
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.head.appendChild(script);
    });
  }

  /**
   * Loads an external CSS file by injecting a <link> tag.
   * Returns a Promise that resolves on load or rejects on error.
   * 
   * @param {string} url - The CSS file URL
   * @returns {Promise<void>}
   */
  function loadCSS(url) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));
      document.head.appendChild(link);
    });
  }

  /**
   * Injects local font-face CSS with fallback to GitHub raw font URL.
   * Uses CSS @font-face rule with multiple sources (local first, fallback second).
   */
  function injectFontFace() {
    const style = document.createElement("style");
    style.type = "text/css";

    style.textContent = `
      @font-face {
        font-family: '${FONT_FAMILY_NAME}';
        src: url('./${LOCAL_FONT_FILENAME}') format('truetype'),
             url('${GITHUB_FONT_URL}') format('truetype');
        font-display: swap;
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Injects inline CSS overrides for:
   * - applying Aza'raan font substitution on .azaraan-word class,
   * - replacing Pacifico font references in Google Apps font dropdown UI.
   */
  function injectInlineCSSOverrides() {
    const css = `
      /* === Aza'raan Font Substitution === */
      .azaraan-word {
        font-family: '${FONT_FAMILY_NAME}', cursive !important;
        color: #000000 !important;
      }

      /* === Replace Pacifico font in font dropdown UI === */
      div[aria-label="Font"] span[style*="Pacifico"],
      div[aria-label="Font"] div[style*="Pacifico"] {
        font-family: '${FONT_FAMILY_NAME}', cursive !important;
        font-size: 18px !important;
        color: #000000 !important;
      }
    `;

    const styleTag = document.createElement("style");
    styleTag.textContent = css;
    document.head.appendChild(styleTag);
  }

  /**
   * Sets up a MutationObserver to watch for any DOM changes where Pacifico font
   * is dynamically added, and forcibly replace it with the Aza'raan font.
   */
  function observeDynamicFontChanges() {
    const observer = new MutationObserver(() => {
      document.querySelectorAll(`[style*="font-family:Pacifico"]`).forEach(el => {
        el.style.setProperty("font-family", `'${FONT_FAMILY_NAME}'`, "important");
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  /**
   * Attempts to load local override script first.
   * If local script fails to load (e.g. 404), falls back to GitHub hosted script.
   * Returns a Promise resolved after successful load.
   */
  function loadOverrideScriptWithFallback() {
    return loadScript("languageprojectoverride.js").catch(() => {
      console.warn("[Aza'raan] Failed to load local override script. Falling back to GitHub.");
      return loadScript(GITHUB_OVERRIDE_JS_URL);
    });
  }

  /**
   * Attempts to load external CSS style overrides from GitHub fallback.
   * Returns a Promise resolved after successful load or fallback.
   * Local CSS file loading can be added similarly if needed.
   */
  function loadExternalCSSFallback() {
    return loadCSS(GITHUB_STYLE_CSS_URL).catch(() => {
      console.warn("[Aza'raan] Failed to load external CSS override from GitHub.");
      // Could add fallback or inline CSS injection here if desired
    });
  }

  /**
   * Initialization function:
   * - Checks domain,
   * - Injects font-face,
   * - Loads override script with fallback,
   * - Loads external CSS from GitHub,
   * - Injects inline CSS overrides,
   * - Sets up mutation observer for dynamic DOM font changes.
   */
  async function init() {
    if (!isSupportedHost()) {
      console.log("[Aza'raan] Unsupported host, script not applied.");
      return;
    }

    // Inject font-face CSS with local + GitHub fallback URLs
    injectFontFace();

    try {
      // Load override JS logic, try local then fallback to GitHub
      await loadOverrideScriptWithFallback();
      console.log("[Aza'raan] Override script loaded.");
    } catch (err) {
      console.error("[Aza'raan] Failed to load override script:", err);
    }

    try {
      // Load external CSS style overrides from GitHub
      await loadExternalCSSFallback();
      console.log("[Aza'raan] External CSS override loaded.");
    } catch (err) {
      console.error("[Aza'raan] Failed to load external CSS:", err);
    }

    // Inject inline CSS overrides for font substitution & UI fixes
    injectInlineCSSOverrides();

    // Start observing DOM mutations for dynamic font changes
    observeDynamicFontChanges();
  }

  // Run initialization after DOM content loaded for safety
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

