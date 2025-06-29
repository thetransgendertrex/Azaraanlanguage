
// ==UserScript==
// @name         Aza'raan Font Universal Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.4
// @description  Replace Comic Sans with Aza'raan on GitHub index.html ONLY; Replace Pacifico with Aza'raan on Google Apps ONLY. Includes dropdown override.
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @match        https://github.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const fontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  // Insert @font-face for Aza'raan (GitHub + Google)
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
    @font-face {
      font-family: 'Aza\\'raan';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // Helpers
  function isGitHubIndex() {
    if (!location.hostname.endsWith("github.com")) return false;
    const path = location.pathname.toLowerCase();
    return path.endsWith("/index.html");
  }

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

  // --- GitHub index.html: Replace Comic Sans with Aza'raan ---
  if (isGitHubIndex()) {
    function overrideComicSans() {
      document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.fontFamily && /comic sans ms/i.test(style.fontFamily)) {
          el.style.setProperty('font-family', "'Aza\\'raan'", 'important');
          el.style.setProperty('font-size', '18px', 'important');
          el.style.setProperty('font-weight', 'normal', 'important');
          el.style.setProperty('text-shadow', 'none', 'important');
          el.style.setProperty('color', '#000', 'important');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      overrideComicSans();
      new MutationObserver(overrideComicSans).observe(document.body, { childList: true, subtree: true });
    });
  }

  // --- Google Apps: Replace Pacifico with Aza'raan ---
  if (isGoogleApps()) {
    const googleStyle = document.createElement("style");
    googleStyle.type = "text/css";
    googleStyle.textContent = `
      [style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
        font-size: 18px !important;
        font-weight: normal !important;
        text-shadow: none !important;
        color: #000 !important;
      }

      div[aria-label="Font"] span[style*="Pacifico"],
      div[aria-label="Font"] div[style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
        font-size: 18px !important;
        font-weight: normal !important;
      }
    `;
    document.head.appendChild(googleStyle);

    const styleObserver = new MutationObserver(() => {
      document.querySelectorAll('[style*="font-family:Pacifico"]').forEach(el => {
        el.style.setProperty('font-family', "'Aza\\'raan'", 'important');
        el.style.setProperty('font-size', '18px', 'important');
        el.style.setProperty('font-weight', 'normal', 'important');
        el.style.setProperty('text-shadow', 'none', 'important');
        el.style.setProperty('color', '#000', 'important');
      });
    });
    styleObserver.observe(document.body, { childList: true, subtree: true });
  }

})();
