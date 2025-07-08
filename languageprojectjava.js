// ==UserScript==
// @name         Aza'raan Font Google Apps languageprojectjava
// @namespace    https://github.com/thetransgendertrex/Azaraanlanguage
// @version      1.5
// @description  Loads external Aza'raan languageprojectoverride.js and applies style overrides for Google Apps ONLY. ©Aza’ra™ and ©Aza'raan language™ are copyright and trademark protected by William Blake Saville AKA #TheTransgenderTRex
// @author       William Blake Saville AKA #TheTransgenderTRex (™)
// @match        https://docs.google.com/*
// @match        https://slides.google.com/*
// @match        https://sheets.google.com/*
// @match        https://forms.google.com/*
// @match        https://drive.google.com/*
// @match        https://drawings.google.com/*
// @grant        none
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function () {
  // Inject external languageprojectoverride.js logic
  const languageprojectoverrideScript = document.createElement('script');
  languageprojectoverrideScript.src = 'https://raw.githubusercontent.com/thetransgendertrex/website/refs/heads/main/languageprojectoverride.js';
  languageprojectoverrideScript.type = 'text/javascript';
  document.head.appendChild(languageprojectoverrideScript);

  // Font URLs
  const localFontURL = "./Aza'raan Planet Language.ttf";
  const remoteFontURL = "https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf";

  const css = `
  /* === Aza'raan Font Declaration with Fallback === */
  @font-face {
    font-family: 'Azaraan';
    src: url('${localFontURL}') format('truetype'),
         url('${remoteFontURL}') format('truetype');
    font-display: swap;
  }

  /* === Aza'raan Font Substitution for Pacifico === */
  .azaraan-word {
    font-family: 'Azaraan', cursive;
    color: #000000;
  }

  /* === Google Apps: Replace Pacifico with Aza'raan in Font Dropdown === */
  div[aria-label="Font"] span[style*="Pacifico"],
  div[aria-label="Font"] div[style*="Pacifico"] {
    font-family: 'Azaraan', cursive !important;
    font-size: 18px !important;
    color: #000000;
  }
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = css;
  document.head.appendChild(styleTag);
});
