(function () {
  'use strict';

  // Load the Aza'raan font
  const azFont = document.createElement('style');
  azFont.textContent = `
    @font-face {
      font-family: 'Azaraan';
      src: url('https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf') format('truetype');
    }
  `;
  document.head.appendChild(azFont);

  // Style override
  const style = document.createElement('style');
  style.textContent = `
    [style*="font-family:Pacifico"],
    span[style*="font-family:Pacifico"],
    .kix-lineview-content span[style*="Pacifico"],
    .texteditor-text-input[style*="font-family:Pacifico"],
    .punch-viewer-content span[style*="font-family:Pacifico"],
    .cell-input[style*="font-family:Pacifico"],
    .grid-container span[style*="font-family:Pacifico"],
    .drawing-view text[style*="font-family:Pacifico"],
    .kix-canvas-tile-content text[style*="font-family:Pacifico"],
    .quantumWizTextinputPaperinputInput[style*="font-family:Pacifico"],
    .freebirdFormviewerViewItemsItemItemTitle[style*="font-family:Pacifico"],
    .a-s-T[style*="font-family:Pacifico"],
    .a-s-fa-T[style*="font-family:Pacifico"],
    .docs-texteventtarget-font-PACIFICO,
    .docs-texteventtarget-font-Pacifico,
    [class*="font-Pacifico"],
    [class*="Font-Pacifico"],
    [class*="texteventtarget-font-Pacifico"],
    [aria-label*="Pacifico"] {
      font-family: 'Azaraan' !important;
      font-size: 2em !important;
      color: #70389c !important;
      font-style: normal !important;
      font-weight: normal !important;
      line-height: 1.2 !important;
    }
  `;
  document.head.appendChild(style);

  // Rename font in dropdown (just cosmetic)
  const observer = new MutationObserver(() => {
    document.querySelectorAll('[aria-label="Pacifico"]').forEach(el => {
      el.textContent = "Aza'raan";
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
