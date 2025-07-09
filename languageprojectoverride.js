// ==UserScript==
// @name         Aza'raan Font Override for Pacifico Page Only
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      3.0
// @description  Replaces the Pacifico font preview on Google Fonts with Aza'raan, loading from local or GitHub fallback.
// @author       William Blake Saville
// @match        https://fonts.google.com/specimen/Pacifico
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Font configuration
  const LOCAL_FONT_PATH = './Azaraanlanguageprojectfont.ttf';
  const GITHUB_FONT_URL = 'https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Azaraanlanguageprojectfont.ttf';
  const FONT_INTERNAL_NAME = 'Azaraan';

  // Inject a style block directly (no script appending)
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: '${FONT_INTERNAL_NAME}';
      src: url('${LOCAL_FONT_PATH}') format('truetype'),
           url('${GITHUB_FONT_URL}') format('truetype');
      font-display: swap;
    }

    /* Override Pacifico demo with Azaraan font */
    * {
      font-family: '${FONT_INTERNAL_NAME}', cursive !important;
    }

    /* Ensure sample text uses Azaraan explicitly */
    .g-font-preview,
    .gws-plugins-horizon-text-block span,
    .gws-plugins-horizon-text-block div {
      font-family: '${FONT_INTERNAL_NAME}', cursive !important;
    }

    /* Remove font shadow if any */
    .g-font-preview {
      text-shadow: none !important;
      color: #000 !important;
    }
`;
document.documentElement.appendChild(style);

/**
 * Load the font and apply it to the page.
 */
function loadFont() {
  // Try loading from local path first
  const localFont = new FontFace(FONT_INTERNAL_NAME, `url(${LOCAL_FONT_PATH})`, {
    style: 'normal',
    weight: '400'
  });

  localFont.load().then(() => {
    document.fonts.add(localFont);
    document.body.style.fontFamily = `'${FONT_INTERNAL_NAME}', cursive`;
  }).catch(() => {
    // If local fails, try loading from GitHub
    const githubFont = new FontFace(FONT_INTERNAL_NAME, `url(${GITHUB_FONT_URL})`, {
      style: 'normal',
      weight: '400'
    });
    githubFont.load().then(() => {
      document.fonts.add(githubFont);
      document.body.style.fontFamily = `'${FONT_INTERNAL_NAME}', cursive`;
    }).catch(error => {
      console.error('Failed to load Aza\'raan font from both local and GitHub:', error);
    });
  });
}

// Load the font when the script runs
loadFont();

})();
