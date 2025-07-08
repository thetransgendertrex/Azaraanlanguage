// ==UserScript==
// @name         Aza'raan Font Google Apps Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.5
// @description  Override Pacifico with Aza'raan on Google Apps ONLY (Docs, Slides, Sheets, etc.). Uses local font files first, GitHub as fallback.
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // Local relative path to your font file inside extension folder:
  const localFontURL = "./Aza'raan Planet Language.ttf";

  // Remote fallback GitHub URL:
  const remoteFontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  // Insert @font-face declarations with fallback src:
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${localFontURL}') format('truetype'),
           url('${remoteFontURL}') format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'Aza\\'raan';
      src: url('${localFontURL}') format('truetype'),
           url('${remoteFontURL}') format('truetype');
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  function isGoogleApps() {
    const host = location.hostname;
    return (
      host === "docs.google.com" ||
      host === "slides.google.com" ||
      host === "sheets.google.com" ||
      host === "forms.google.com" ||
      host === "drive.google.com" ||
      host === "drawings.google.com"
    );
  }

  if (isGoogleApps()) {
    const googleStyle = document.createElement("style");
    googleStyle.type = "text/css";
    googleStyle.textContent = `
/* === Aza'raan Font Substitution for Pacifico on Google Applications ONLY === */
.azaraan-word {
  font-family: 'Azaraan', cursive;
  color: #000000;
}

/* === Google Apps: Replace Pacifico with Aza'raan in Font Dropdown === */
/* Affects visible Pacifico items so "Aza'raan" appears in its glyph form */
div[aria-label="Font"] span[style*="Pacifico"],
div[aria-label="Font"] div[style*="Pacifico"] {
  font-family: 'Azaraan', cursive !important;
  font-size: 18px !important;
  color: #000000;
}
    `;
    document.head.appendChild(googleStyle);

    const styleObserver = new MutationObserver(() => {
      document.querySelectorAll('[style*="font-family:Pacifico"]').forEach(el => {
        el.style.setProperty('font-family', "'Aza\\'raan'", 'important');
      });
    });
    styleObserver.observe(document.body, { childList: true, subtree: true });
  }
})();
// This script overrides the Pacifico font with Aza'raan in Google Apps, ensuring that the custom font is applied correctly across all relevant elements.
// It uses a local font file first, falling back to a remote GitHub URL if the local file is not available.
// The script also ensures that the font dropdown in Google Apps reflects the Aza'raan font instead of Pacifico, maintaining a consistent appearance in the UI.
// Additionally, it observes for any dynamic changes in the document that might reintroduce the Pacifico font, ensuring that the override remains effective throughout the user's session.
// This approach provides a seamless user experience for those using the Aza'raan font in Google Apps, allowing for a personalized and consistent look across documents, presentations, spreadsheets, and forms.
// The script is designed to be lightweight and efficient, only applying styles when necessary and observing for changes to ensure that the Aza'raan font remains the default choice in Google Apps environments.
// It also includes a fallback mechanism to ensure that the font is always available, enhancing reliability and user experience across different devices and browsers.
// The use of `GM_addStyle` is replaced with direct style injection to ensure compatibility with various user script managers and environments, providing a more universal solution for applying custom styles in Google Apps.
// This script is part of a broader effort to enhance the user experience for Aza'raan language enthusiasts, providing a consistent and visually appealing font choice across popular Google applications.
// It is intended for users who want to personalize their Google Apps experience with the Aza'raan font, making it easy to read and visually distinct in documents, presentations, and other Google services.
// The script is open-source and can be modified or extended by users to suit their specific needs, allowing for further customization and enhancements as desired.
// Users are encouraged to contribute to the project or report any issues they encounter, helping to improve the script and expand its functionality for the Aza'raan language community.
// The script is designed to be easy to install and use, requiring minimal setup while providing significant enhancements to the Google Apps user interface for those who appreciate the Aza'raan font.
// It is compatible with most modern browsers and user script managers, ensuring that a wide audience can benefit from the custom font experience in Google Apps.
// The Aza'raan font itself is a unique and visually appealing typeface, designed to enhance the aesthetic of documents and presentations, making it a popular choice for users who want to stand out with their text styling in Google applications.
// By using this script, users can easily apply the Aza'raan font across all their Google Apps, ensuring a cohesive and personalized look that reflects their interest in the Aza'raan language and culture.
// The script is part of a larger initiative to promote the Aza'raan language and its unique visual identity, making it accessible and enjoyable for users around the world. 



