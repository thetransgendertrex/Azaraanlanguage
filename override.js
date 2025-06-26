// ==UserScript==
// @name         Aza'raan Font Universal Override
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.3
// @description  Replace Comic Sans with Aza'raan on GitHub index.html lore.html ONLY; Override Pacifico with Aza'raan on Google Apps ONLY (Docs, Slides, Sheets, etc.). Aza'raan fully usable font in Google apps dropdown and typing.
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

  // Insert @font-face declarations for Aza'raan font (used both in GitHub and Google Apps)
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = `
    @font-face {
      font-family: 'AzaraanOverride';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
    @font-face {
      font-family: 'Aza\\'raan';
      src: url('${fontURL}') format('truetype');
      font-display: swap;
    }
  `;
  document.head.appendChild(style);

  // Helper: Check if current page is a GitHub index.html or lore.html file page
  function isGitHubIndexOrLore() {
    if (!location.hostname.endsWith("github.com")) return false;
    // GitHub repo root or file page URL pattern includes /blob/ or /tree/ or direct repo root
    // We'll check for "index.html" or "lore.html" in URL path
    const path = location.pathname.toLowerCase();
    return path.endsWith("/index.html") || path.endsWith("/lore.html");
  }

  // Helper: Check if current domain is Google Apps
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

  // --- GitHub: Override Comic Sans ONLY on index.html or lore.html ---
  if (isGitHubIndexOrLore()) {
    function overrideComicSans() {
      const all = document.querySelectorAll('*');
      all.forEach(el => {
        const style = window.getComputedStyle(el);
        const ff = style.fontFamily;
        if (ff && /comic sans ms/i.test(ff)) {
          el.style.setProperty('font-family', "'AzaraanOverride', cursive", 'important');
        }
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      overrideComicSans();
      // Observe DOM changes for dynamic override
      const observer = new MutationObserver(() => overrideComicSans());
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }

  // --- Google Apps: Override Pacifico ONLY ---
  if (isGoogleApps()) {
    // Global CSS to replace Pacifico font-family with Aza'raan font-family in Google Apps
    const googleStyle = document.createElement("style");
    googleStyle.type = "text/css";
    googleStyle.textContent = `
      /* Override Pacifico font family with Aza'raan */
      [style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
      }

      /* Fix font dropdown appearance in Google apps font selector */
      div[aria-label="Font"] span[style*="Pacifico"],
      div[aria-label="Font"] div[style*="Pacifico"] {
        font-family: 'Aza\\'raan' !important;
        font-size: 16px !important;
      }
    `;
    document.head.appendChild(googleStyle);

    // Mutation observer to catch inline style changes with Pacifico font-family and replace with Aza'raan
    const styleObserver = new MutationObserver(() => {
      document.querySelectorAll('[style*="font-family:Pacifico"]').forEach(el => {
        el.style.setProperty('font-family', "'Aza\\'raan'", 'important');
      });
    });
    styleObserver.observe(document.body, { childList: true, subtree: true });
  }

  // No Comic Sans override on Google Apps
  // No Pacifico override on GitHub

})();
