// ==UserScript==
// @name         Aza'raan Font Google Apps Override (Advanced + Fallback)
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      2.2
// @description  Overrides Pacifico with the Aza'raan font on Google Apps, loading local font with fallback to GitHub-hosted font and includes fallback mechanism for robust loading.
// @author       William Blake Saville
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
   * === Configuration Section ===
   *
   * Local font filename:
   *   Azaraanlanguageprojectfont.ttf
   *
   * GitHub raw asset URLs:
   * - JS override script:
   *   https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/languageprojectoverride.js
   * - JavaScript helper:
   *   https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/languageprojectjava.js
   * - CSS style overrides:
   *   https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/languageprojectstyle.css
   * - Icon (48px):
   *   https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/icon48.png
   * - Font fallback URL:
   *   https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/Azaraanlanguageprojectfont.ttf
   */

  // Local relative font path (adjust if your environment differs)
  const LOCAL_FONT_PATH = "./Azaraanlanguageprojectfont.ttf";

  // GitHub fallback font URL (raw content URL for direct download)
  const GITHUB_FONT_URL =
    "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Azaraanlanguageprojectfont.ttf";

  // Define the CSS font-family names used internally and shown in UI dropdowns
  const FONT_INTERNAL_NAME = "AzaraanOverride";    // Internal CSS font-family reference
  const FONT_VISIBLE_NAME = "Aza'raan";            // Displayed font name in Google Apps UI (must match naming style)

  // Google Apps hostnames on which this override applies
  const SUPPORTED_HOSTS = [
    "docs.google.com",
    "slides.google.com",
    "sheets.google.com",
    "forms.google.com",
    "drive.google.com",
    "drawings.google.com"
  ];

  // The font you want to override in Google Apps (Pacifico in your case)
  const TARGET_FONT = "Pacifico";

  /**
   * === Utility Functions ===
   */

  /**
   * Checks if current page host is one of the supported Google Apps.
   * @returns {boolean}
   */
  function isSupportedHost() {
    return SUPPORTED_HOSTS.includes(location.hostname);
  }

  /**
   * Injects @font-face CSS rules using local font file with GitHub fallback URL.
   * The 'src' property uses multiple URLs to allow browser to fallback automatically.
   */
  function injectFontFaceWithFallback() {
    const style = document.createElement("style");
    style.type = "text/css";

    style.textContent = `
      /* Define font-face with local file first, then fallback to GitHub */
      @font-face {
        font-family: '${FONT_INTERNAL_NAME}';
        src: url('${LOCAL_FONT_PATH}') format('truetype'),
             url('${GITHUB_FONT_URL}') format('truetype');
        font-display: swap;
      }

      @font-face {
        font-family: '${FONT_VISIBLE_NAME.replace(/'/g, "\\'")}';
        src: url('${LOCAL_FONT_PATH}') format('truetype'),
             url('${GITHUB_FONT_URL}') format('truetype');
        font-display: swap;
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Injects CSS styles overriding Pacifico font usage in Google Apps UI,
   * and provides a custom class for explicit Aza'raan font usage.
   */
  function injectOverrideCSS() {
    const style = document.createElement("style");
    style.type = "text/css";

    style.textContent = `
      /* Custom class for manual Aza'raan font usage */
      .azaraan-word {
        font-family: '${FONT_VISIBLE_NAME}', cursive !important;
        color: #000000 !important;
      }

      /* Override Pacifico font entries in Google Apps font dropdown */
      div[aria-label="Font"] span[style*="${TARGET_FONT}"],
      div[aria-label="Font"] div[style*="${TARGET_FONT}"] {
        font-family: '${FONT_VISIBLE_NAME}', cursive !important;
        font-size: 18px !important;
        color: #000000 !important;
      }
    `;

    document.head.appendChild(style);
  }

  /**
   * Sets up a MutationObserver to detect any dynamically inserted elements
   * that use Pacifico font, replacing it with Aza'raan font immediately.
   */
  function observeDOMFontChanges() {
    const observer = new MutationObserver(() => {
      document.querySelectorAll(`[style*="font-family:${TARGET_FONT}"]`).forEach((el) => {
        el.style.setProperty("font-family", `'${FONT_VISIBLE_NAME}'`, "important");
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  /**
   * Tests if the specified font is loaded by comparing widths of
   * test text rendered in the font vs monospace fallback.
   *
   * @param {string} fontName - The font-family name to test
   * @param {function(boolean)} callback - Called with true if font loaded, false otherwise
   */
  function testFontLoad(fontName, callback) {
    const testText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const testSize = "72px";

    // Create two hidden spans with test text: one with font, one monospace fallback
    const spanWithFont = document.createElement("span");
    spanWithFont.style.position = "absolute";
    spanWithFont.style.visibility = "hidden";
    spanWithFont.style.fontFamily = `'${fontName}', monospace`;
    spanWithFont.style.fontSize = testSize;
    spanWithFont.textContent = testText;

    const spanFallback = document.createElement("span");
    spanFallback.style.position = "absolute";
    spanFallback.style.visibility = "hidden";
    spanFallback.style.fontFamily = "monospace";
    spanFallback.style.fontSize = testSize;
    spanFallback.textContent = testText;

    document.body.appendChild(spanWithFont);
    document.body.appendChild(spanFallback);

    // Measure widths; if equal, font failed to load
    const widthWithFont = spanWithFont.offsetWidth;
    const widthFallback = spanFallback.offsetWidth;

    // Clean up test elements
    document.body.removeChild(spanWithFont);
    document.body.removeChild(spanFallback);

    callback(widthWithFont !== widthFallback);
  }

  /**
   * Injects a @font-face CSS rule forcing GitHub fallback font ONLY,
   * useful if local font fails to load.
   */
  function injectFallbackOnlyFontFace() {
    const style = document.createElement("style");
    style.type = "text/css";

    style.textContent = `
/* ======================================================================== */
/* === Aza'raan Font Declaration & Usage =================================== */
/* ======================================================================== */

/* 
  @font-face declaration for the Aza'raan font.
  This specifies multiple sources for the font:
  1. Local font file (relative to the user's environment or extension).
  2. Remote fallback hosted on GitHub raw content for reliability.
  
  The font-display: swap ensures text is immediately rendered with a fallback font,
  and swapped with Aza'raan font as soon as it loads, preventing invisible text.
*/

/* === Override Pacifico font by redefining it with Azaraan font files === */
@font-face {
  font-family: 'Pacifico';  /* Override the original Pacifico name */
  src: url('./Azaraanlanguageprojectfont.ttf') format('truetype'),
       url('https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Azaraanlanguageprojectfont.ttf') format('truetype');
  font-display: swap;
}

/* === Define Azaraan font family as well for explicit use === */
@font-face {
  font-family: 'Azaraan';
  src: url('./Azaraanlanguageprojectfont.ttf') format('truetype'),
       url('https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Azaraanlanguageprojectfont.ttf') format('truetype');
  font-display: swap;
}

/* === Force all UI elements or text using Pacifico to render Azaraan instead === */
.azaraan-word,
div[aria-label="Font"] span[style*="Pacifico"],
div[aria-label="Font"] div[style*="Pacifico"],
[style*="font-family:Pacifico"] {
  font-family: 'Azaraan', cursive !important;
  color: #000000 !important;
}



/* ======================================================================== */
/* === Custom Font Usage Classes =========================================== */
/* ======================================================================== */

/* 
  .azaraan-word
  This class explicitly applies the Azaraan font to any element.
  It uses the 'cursive' fallback to maintain cursive styling if font fails to load.
  Color is set to pure black (#000000) for optimal readability on light backgrounds.
  !important declarations ensure these styles override competing rules.
*/

.azaraan-word {
  font-family: 'Azaraan', cursive !important;
  color: #000000 !important;

  /* Improve font smoothing for better rendering on different platforms */
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  /* Ensure normal font weight and style for consistent appearance */
  font-weight: normal !important;
  font-style: normal !important;

  /* Prevent user text selection to avoid accidental highlights (optional) */
  /* user-select: none !important; */
}

/* ======================================================================== */
/* === Google Apps Font Dropdown Override ================================== */
/* ======================================================================== */

/* 
  Target the Google Apps font selection dropdown elements
  that display Pacifico font, to replace their font-family with Azaraan.

  Selectors:
    - div[aria-label="Font"] locates the font picker UI container.
    - span[style*="Pacifico"] and div[style*="Pacifico"] find any direct child 
      elements styled with the Pacifico font in their inline styles.
  
  Styles applied:
    - Force font-family to Azaraan using !important.
    - Font size increased to 18px for improved legibility.
    - Font color forced to black (#000000) for consistency.
    - Additional font smoothing for crisp UI rendering.
*/

div[aria-label="Font"] span[style*="Pacifico"],
div[aria-label="Font"] div[style*="Pacifico"] {
  font-family: 'Azaraan', cursive !important;
  font-size: 18px !important;
  color: #000000 !important;

  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  /* Override any line height or spacing from Google to keep UI consistent */
  line-height: 1.2 !important;
  letter-spacing: normal !important;
}

/* ======================================================================== */
/* === Accessibility & UX Enhancements ==================================== */
/* ======================================================================== */

/* 
  For all Azaaraan font usage, ensure good contrast and disable any
  unwanted text shadows or outlines that may conflict with the font rendering.
*/

.azaraan-word,
div[aria-label="Font"] span[style*="Pacifico"],
div[aria-label="Font"] div[style*="Pacifico"] {
  text-shadow: none !important;
  text-decoration: none !important;
  outline: none !important;
}

/* ======================================================================== */
/* === Additional Optional UI Tweaks ====================================== */
/* ======================================================================== */

/* 
  If you want to highlight the presence of Azaaraan font usage (debugging or style),
  you could add subtle background or borders here (commented out by default).
*/

/*
.azaraan-word {
  background-color: rgba(0, 255, 255, 0.05) !important;
  border-bottom: 1px dotted cyan !important;
}
*/

/* ======================================================================== */
/* === End of Aza'raan Font CSS Overrides ================================== */
/* ======================================================================== */

    `;

    document.head.appendChild(style);
  }

  /**
   * === Initialization ===
   *
   * Runs only if on a supported Google Apps domain.
   * Injects font-face with fallback, CSS overrides, MutationObserver,
   * and tests font load after a delay to switch to fallback only if needed.
   */
  function init() {
    if (!isSupportedHost()) return;

    // Inject font-face rule with both local and GitHub fallback URLs
    injectFontFaceWithFallback();

    // Inject CSS to override Pacifico usage and enable custom class
    injectOverrideCSS();

    // Start observing DOM changes for any dynamic Pacifico usage
    observeDOMFontChanges();

    // Delay font load test by 2 seconds to allow browser time to load fonts
    setTimeout(() => {
      testFontLoad(FONT_VISIBLE_NAME, (loaded) => {
        if (!loaded) {
          console.warn(`[Aza'raan Font Override] Local font failed to load; applying fallback from GitHub.`);
          injectFallbackOnlyFontFace();
        } else {
          console.log(`[Aza'raan Font Override] Local font loaded successfully.`);
        }
      });
    }, 2000);
  }

  init();
})();
