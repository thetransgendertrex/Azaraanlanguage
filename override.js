// ==UserScript==
// @name         Aza'raan Font Universal Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.1
// @description  Replace Latin with Aza'raan font in all defined classes and override Pacifico in Google Apps (Docs, Slides, Sheets, etc.)
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

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }

    @font-face {
      font-family: 'Azaraan';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }

    /* Targeted custom Aza'raan HTML classes */
    .azaraan-word,
    .azaraan-phrase,
    .azaraan-fusion-form {
      font-family: 'AzaraanOverride' !important;
      font-style: normal !important;
      font-weight: normal !important;
      letter-spacing: normal !important;
      text-transform: none !important;
      direction: ltr !important;
      unicode-bidi: isolate !important;
      color: inherit !important;
    }

    /* Replace Pacifico globally in Google apps */
    * {
      font-family: 'Azaraan' !important;
    }

    /* Fix dropdowns in Google apps where font name shows up */
    div[aria-label="Font"] span[style*="Pacifico"],
    div[aria-label="Font"] div[style*="Pacifico"] {
      font-family: 'Azaraan' !important;
      font-size: 16px !important;
    }
  `;
  document.head.appendChild(style);

  // Watch for dynamically added content using Pacifico and override it
  const observer = new MutationObserver(() => {
    document.querySelectorAll('[style*="font-family:Pacifico"]').forEach(el => {
      el.style.fontFamily = `'Azaraan'`;
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
