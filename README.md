<!DOCTYPE html>
<html lang="en">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aza’raan Font Override</title>
</head>
<body>
<div class="section">
  <h2>📜 Aza’raan Pacifico Override Script (with Column Content Targeting)</h2>
  <p>This script overrides all uses of <code>Pacifico</code> with the Aza'raan glyph font and force-renders specific grammar-related table columns in the custom font for enhanced clarity in Docs, Sheets, and beyond.</p>

  <div class="block">
    <strong>🧩 JavaScript Override Code:</strong>
    <pre><code style="white-space: pre-wrap;">// ==UserScript==
// @name         Aza'raan Font & Table Column Enforcer
// @namespace    https://github.com/thetransgendertrex
// @version      3.0
// @description  Replaces Pacifico with Aza'raan and enforces font in key grammar/lexicon table columns
// @match        *://docs.google.com/*
// @match        *://drive.google.com/*
// @match        *://slides.google.com/*
// @match        *://docs.google.com/forms/*
// @match        *://docs.google.com/spreadsheets/*
// @grant        none
// ==/UserScript==

(function () {
  // Load external font CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/Aza\'raan%20Language%20Font%20CSS';
  document.head.appendChild(link);

  // Load Aza'raan-specific JS logic
  const azaJS = document.createElement('script');
  azaJS.src = 'https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/Aza\'raan%20Language%20Font%20Javascript';
  document.head.appendChild(azaJS);

  // Load override enhancements
  const overrideScript = document.createElement('script');
  overrideScript.src = 'https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/override.js';
  document.head.appendChild(overrideScript);

  const AZARAAN_FONT = "'Azaraan', cursive !important";
  const TARGET_HEADERS = [
    "Glyph", "Aza'raan Word", "Aza'raan", "Subj", "Obj", "Poss", "Reflexive",
    "example", "Example Root", "Example Result", "Plural Identity", "Subject",
    "Object", "Possessive", "Example(s)", "Time Format", "Aza'raan Hour", "Aza'raan Name"
  ];

  const observer = new MutationObserver(() => {
    // Swap Pacifico with Aza'raan glyph font
    document.querySelectorAll('[style*="font-family: Pacifico"]').forEach(el => {
      el.style.fontFamily = AZARAAN_FONT;
    });

    // Scan all tables for headers and apply Aza'raan font to matching columns
    document.querySelectorAll("table").forEach(table => {
      const headers = Array.from(table.querySelectorAll("thead th"));
      headers.forEach((th, index) => {
        const headerText = th.textContent.trim().toLowerCase();
        if (TARGET_HEADERS.map(h => h.toLowerCase()).includes(headerText)) {
          table.querySelectorAll("tbody tr").forEach(row => {
            const cell = row.cells[index];
            if (cell) cell.style.fontFamily = AZARAAN_FONT;
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  });
})();
</code></pre>

    <p class="note">💡 <strong>Pro Tip:</strong> Use <a href="https://www.tampermonkey.net/" target="_blank">Tampermonkey</a> or <a href="https://violentmonkey.github.io/" target="_blank">Violentmonkey</a> to run this override in your browser.</p>
  </div>

  <h3>📌 What’s New:</h3>
  <ul>
    <li>🔤 Injects <code>Azaraan</code> font via official hosted stylesheet</li>
    <li>⚙️ Applies override behavior using standalone script from repo</li>
    <li>📚 Targets table headers used in grammatical contexts like “Possessive”, “Subject”, and “Glyph”</li>
  </ul>

  <h3>🎯 Targeted Applications:</h3>
  <ul>
    <li>📝 Google Docs</li>
    <li>📊 Google Sheets</li>
    <li>📽️ Google Slides</li>
    <li>📄 Google Forms</li>
    <li>📁 Google Drive</li>
  </ul>

  <h3>✨ Why This Matters:</h3>
  <p>This script ensures all content referencing the Aza’raan language renders beautifully and accurately in its intended glyph form, especially in structured formats like tables.</p>
</div>
</body>
</html>


</head>
<body>

  <h1>Aza’raan: The Language and Lore of Aza’ra</h1>
  <p><strong>Compiled & Created by William Blake Saville AKA #TheTransgenderTRex</strong></p>

  <h2>Introduction: The Voice of Aza’ra</h2>
  <p>
    Aza’ra is a world born from tragedy and woven with magic, a disc-shaped realm suspended in the Void, rebuilt after the destruction of its parent world, Aarak. Its survival was made possible by the Veil—a shimmering arcane membrane forged by Earthborn magicians known as the Aramaics—and through the unity of two civilizations: the native Aaraks and their Earthborn allies.
  </p>
  <p>
    Out of this union came not just peace, but a language: <strong>Aza’raan</strong>. More than words, Aza’raan is the heartbeat of the world itself—a living archive of survival, transformation, and kinship. Forged from the melodic, vowel-rich speech of Aarak and the structural precision of ancient Aramaic glyphs, Aza’raan is both fluid and exacting, expressive and deliberate.
  </p>
  <p>
    It is a language that recognizes identity as sacred and evolving. In Aza’raan culture, names and pronouns are reaffirmed daily as truth in the moment, a testament to the belief that selfhood is a living concept. The glottal stop (‘Ai) invokes spiritual resonance, the Na’lu (Ձ) offers uplift and transition, and the Ra’ama (ع) anchors meaning with strength and clarity.
  </p>
  <p>
    Aza’raan is spoken not only with the tongue, but with the soul. It is etched into spellcraft, embedded in architecture, sung into rituals, and passed down through generations as a song of resilience. It ensures that every voice is valid, every truth honored, and every story spoken into existence.
  </p>
  <p>
    This compendium is more than a linguistic guide—it is a window into the soul of Aza’ra. Whether you seek to learn the words, understand the world, or simply hear the rhythm of a culture reborn, know this: in Aza’raan, all are welcome, and all may speak.
  </p>

  <h2>Contents of the Aza’raan Compendium</h2>
  <p>
    Inside this compendium, you will find the phonetic structures, cultural practices, and evolving grammar rules that shape how Aza’ra communicates. You will also uncover the legends, histories, and celestial systems that gave rise to its people, its kingdoms, and its dreams.
  </p>
  <p>
    Aza’raan is not only a tool of speech, but a framework for magic, governance, and connection. It bridges worlds—Earth and Aza’ra, past and future, silence and song.
  </p>

</body>
 <section>
  <h2>🌍 Welcome to Aza’ra</h2>

  <h3>🕰️ Historical Context: The Cataclysm and the Birth of Aza’ra</h3>
  <h4>⚡ 1351 BCE — The Cataclysm</h4>
  <p>
    Once known as <strong>Aarak</strong>, this radiant world brimmed with magic and life—until an alien race, driven by desperation, drained its sun. The resulting solar flares cracked the planet’s crust, fracturing it into drifting landmasses and collapsing civilizations.
  </p>

  <h4>🌌 Arrival of the Aramaics</h4>
  <p>
    Amidst the chaos, three nomadic magicians from Earth—known as the <strong>Aramaics</strong>—arrived through unstable portal magic. Though initially distrusted, they built a fragile alliance with Aarak’s people and exchanged arcane knowledge. In a final act of preservation, they conjured <strong>The Veil</strong>, a radiant arcane barrier using Earth’s magic, encasing Aarak’s largest surviving fragments to hold them against the cosmic Void.
  </p>

  <h4>🕊️ Birth of Aza’ra and Cultural Unification</h4>
  <p>
    The Veil's creation stabilized the broken world, but came with a cost—it continues to siphon magic from Earth, weakening the Aramaics’ homeland. The survivors, bound by shared trauma and purpose, renamed their reborn world <strong>Aza’ra</strong>, meaning “to help” in Aramaic. From the Veil’s protective shimmer rose a new world built on unity, memory, and magic.
  </p>

  <h3>✨ The Shape of Aza’ra</h3>
  <p>
    Aza’ra is a vast, disc-shaped world suspended in the cosmic Void. Beneath it narrows into a crystalline spear that anchors it to arcane ley currents, while above, fragments of broken land float as skyborne isles—ancient ruins and thriving ecosystems held aloft by the Veil’s magic.
  </p>
  <p>
    The <strong>Veil</strong> spans 13,482 km above Aza’ra and governs more than atmosphere—it regulates gravity, time, and the arcane flow. At the disc’s center lies <strong>Eryndria Harbors</strong>, the planet’s cultural and navigational heart beneath the Veil’s zenith.
  </p>

  <h3>🗺️ Continental Overview</h3>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Continent</th>
        <th>Estimated Area (million km²)</th>
        <th>Estimated Dimensions (km)</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tzaphaer</strong></td>
        <td>~230–250</td>
        <td>~28,292 × 25,261</td>
        <td>Balanced arcane currents, ancient ruins</td>
      </tr>
      <tr>
        <td><strong>Dakaroth</strong></td>
        <td>~225–240</td>
        <td>~27,281 × 23,240</td>
        <td>Mountain-locked terrain, warrior culture</td>
      </tr>
      <tr>
        <td><strong>Arzuhan</strong></td>
        <td>~250–270</td>
        <td>~34,354 × 22,229</td>
        <td>Lush landscapes, introspective traditions</td>
      </tr>
    </tbody>
  </table>
  <p>
    The continents are separated by oceanic mists and airborne rifts. Above them float remnants of Aarak, now stabilized through arcane magnetism. These islands serve as sacred sites, arcane vaults, and homes to rare skyborne life.
  </p>
<section id="locations-distances">
  <h2>🗺️ Major Locations, Cities, and Distances</h2>

  <h3>🌐 Planetary Scale Comparisons</h3>
  <table>
    <thead>
      <tr><th>Feature</th><th>Adjusted Distance / Estimate</th><th>World</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>Earth Circumference</td><td>40,075 km</td><td>Earth</td><td>Standard terrestrial measure</td></tr>
      <tr><td>Aza’ra Circumference Estimate</td><td>~85,000 km</td><td>Aza’ra</td><td>~2.1× Earth</td></tr>
      <tr><td>Earth Diameter</td><td>12,742 km</td><td>Earth</td><td></td></tr>
      <tr><td>Aza’ra Diameter Estimate</td><td>~27,000 km</td><td>Aza’ra</td><td>~2.1× Earth</td></tr>
      <tr><td>Earth Surface Area</td><td>510 million km²</td><td>Earth</td><td></td></tr>
      <tr><td>Aza’ra Surface Area Estimate</td><td>850–900 million km²</td><td>Aza’ra</td><td>~2.1× Earth</td></tr>
    </tbody>
  </table>

  <h3>🧭 Distances from Eryndria Harbor</h3>
  <table>
    <thead>
      <tr><th>Location</th><th>Distance (km)</th><th>Hemisphere</th><th>Continent</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>City of Lytheris</td><td>~210,810</td><td>Western / Northern</td><td>Tzaphaer</td><td>Inland, NW coastal influence</td></tr>
      <tr><td>The Shattered Sea</td><td>~94,195</td><td>Central / Southern</td><td>Arzuhan</td><td>SE of Eryndria, open sea</td></tr>
      <tr><td>Mt. Vraekthos</td><td>~310,384</td><td>Western / Central</td><td>Tzaphaer</td><td>Volcanic interior</td></tr>
      <tr><td>City of the Mourned Gods</td><td>~133,137</td><td>Western / Northern</td><td>Tzaphaer</td><td>Near Veilgate</td></tr>
      <tr><td>The Nyxthorn Peaks</td><td>~277,261</td><td>Western / Central</td><td>Tzaphaer</td><td>Near Mt. Vraekthos</td></tr>
      <tr><td>Vraekthos Mountains</td><td>~288,249</td><td>Western / Central</td><td>Tzaphaer</td><td>SE of Nyxthorn</td></tr>
      <tr><td>Floating Capital (Phyra)</td><td>~177,504 (+2 km elevation)</td><td>Eastern / Northern</td><td>Arzuhan</td><td>Elevated from 16,167 base</td></tr>
      <tr><td>Free City of Dakaroth</td><td>~260,463</td><td>Western / Northern</td><td>Dakaroth</td><td>Mountain-locked</td></tr>
      <tr><td>Raethelia</td><td>~161,056</td><td>Eastern / Southern</td><td>Arzuhan</td><td>Coastal</td></tr>
      <tr><td>Emberhold</td><td>~282,443</td><td>Western / Northern</td><td>Dakaroth</td><td>Near Mt. Raethelis</td></tr>
    </tbody>
  </table>

  <h3>🏙️ Inter-City Distance Table (km)</h3>
  <p>Distances between major cities across Aza’ra. Useful for regional plotting, portal travel, or trade route planning.</p>
  <table>
    <thead>
      <tr>
        <th>From \ To</th><th>Lytheris</th><th>Mourned Gods</th><th>Morrigaen</th><th>Nocturnis</th><th>Ashen Throne</th><th>Crimsonspire</th><th>Phyra</th><th>Raethelia</th><th>Dakaroth</th><th>Emberhold</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>City of Lytheris</td><td>—</td><td>87,760</td><td>167,841</td><td>232,517</td><td>244,989</td><td>264,405</td><td>320,191</td><td>307,974</td><td>278,388</td><td>289,157</td></tr>
      <tr><td>City of the Mourned Gods</td><td>87,760</td><td>—</td><td>137,125</td><td>196,942</td><td>207,667</td><td>229,411</td><td>290,063</td><td>276,108</td><td>251,796</td><td>264,002</td></tr>
      <tr><td>Pirate City Morrigaen</td><td>167,841</td><td>137,125</td><td>—</td><td>164,538</td><td>172,206</td><td>198,253</td><td>263,881</td><td>248,927</td><td>225,519</td><td>237,793</td></tr>
      <tr><td>Nocturnis</td><td>232,517</td><td>196,942</td><td>164,538</td><td>—</td><td>115,185</td><td>122,864</td><td>206,988</td><td>222,154</td><td>194,315</td><td>209,778</td></tr>
      <tr><td>Ashen Throne</td><td>244,989</td><td>207,667</td><td>172,206</td><td>115,185</td><td>—</td><td>97,633</td><td>189,519</td><td>203,701</td><td>176,844</td><td>191,206</td></tr>
      <tr><td>Crimsonspire</td><td>264,405</td><td>229,411</td><td>198,253</td><td>122,864</td><td>97,633</td><td>—</td><td>174,368</td><td>190,217</td><td>163,494</td><td>178,826</td></tr>
      <tr><td>Phyra</td><td>320,191</td><td>290,063</td><td>263,881</td><td>206,988</td><td>189,519</td><td>174,368</td><td>—</td><td>206,154</td><td>189,771</td><td>200,865</td></tr>
      <tr><td>Raethelia</td><td>307,974</td><td>276,108</td><td>248,927</td><td>222,154</td><td>203,701</td><td>190,217</td><td>206,154</td><td>—</td><td>167,644</td><td>180,483</td></tr>
      <tr><td>Free City of Dakaroth</td><td>278,388</td><td>251,796</td><td>225,519</td><td>194,315</td><td>176,844</td><td>163,494</td><td>189,771</td><td>167,644</td><td>—</td><td>21,980</td></tr>
      <tr><td>Emberhold</td><td>289,157</td><td>264,002</td><td>237,793</td><td>209,778</td><td>191,206</td><td>178,826</td><td>200,865</td><td>180,483</td><td>21,980</td><td>—</td></tr>
    </tbody>
  </table>

  <h3>🏚️ Regional Settlements (Selected Samples)</h3>
  <p>Distance from regional anchors (Nocturnis, Ashen Throne, Crimson Spire, Raethelia, Emberhold, and Phyra).</p>

  <details>
    <summary><strong>Nyxara Settlements → Nocturnis</strong></summary>
    <ul>
      <li>Flamewatch – ~13,164 km</li>
      <li>Twilightfield – ~20,843 km</li>
      <li>Moonport – ~32,910 km</li>
    </ul>
  </details>

  <details>
    <summary><strong>Vraekthos Settlements → Ashen Throne</strong></summary>
    <ul>
      <li>Emberglow – ~13,164 km</li>
      <li>Veilhollow – ~24,134 km</li>
    </ul>
  </details>

  <details>
    <summary><strong>Phalorra Settlements → Crimson Spire</strong></summary>
    <ul>
      <li>Veilwatch – ~12,067 km</li>
      <li>Crimsonpeak – ~19,746 km</li>
    </ul>
  </details>

  <details>
    <summary><strong>IronForge Settlements → Raethelia</strong></summary>
    <ul>
      <li>Stormgate – ~14,025 km</li>
      <li>Zephyrstone – ~31,875 km</li>
    </ul>
  </details>

  <details>
    <summary><strong>Vulkiris Settlements → Emberhold</strong></summary>
    <ul>
      <li>Steelwood – ~14,220 km</li>
      <li>Carbonite Spire – ~68,730 km</li>
    </ul>
  </details>

  <details>
    <summary><strong>Zephyra Settlements → Phyra</strong></summary>
    <ul>
      <li>Breezewood – ~14,025 km</li>
      <li>City of Vael’thwyn – ~26,775 km</li>
    </ul>
  </details>

  <h3>🌊 Seas, Regions & Rivers</h3>
  <table>
    <thead>
      <tr><th>Feature</th><th>Dimension</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>Gulf of Therion</td><td>~11,115 km (Width)</td><td>Horizontal Width</td></tr>
      <tr><td>IronReach Bay</td><td>~7,073 km (Width)</td><td></td></tr>
      <tr><td>Raethelia (Radius)</td><td>~24,250 km</td><td>From city center</td></tr>
      <tr><td>Vaelrim Peaks</td><td>~16,167 × 14,651 km</td><td>Length × Width</td></tr>
      <tr><td>Raethelis River</td><td>~23,240 km × 1,213 km</td><td>Length × Avg. Width</td></tr>
      <tr><td>River of Mourning</td><td>~19,198 km × 1,010 km</td><td>Length × Avg. Width</td></tr>
      <tr><td>Aetheric Expanse</td><td>~26,271 × 13,135 km</td><td>Expansive aether-affected region</td></tr>
    </tbody>
  </table>
</section>

  <h3>🔤 Linguistic Genesis: The Formation of Aza’raan</h3>
  <p>
    In their cultural fusion, the Aramaics and Aaraks crafted a new shared language: <strong>Aza’raan</strong>. It honors both peoples by merging:
  </p>
  <ul>
    <li><strong>Aarak’s phonetics:</strong> vowel-dense, flowing soundscape</li>
    <li><strong>Aramaic precision:</strong> glyphic form and syntactic depth</li>
  </ul>
  <p>
    The result is a lyrical, expressive tongue with structured grammar and elegant visual script—spoken across all of Aza’ra to unify its peoples.
  </p>

  <h3>👑 The Kingdom of Zephyra & The Three Bloodlines</h3>
  <p>
    In Arzuhan, the first kingdom—<strong>Zephyra</strong>—was formed to bring stability to Aza’ra. The Aramaics knew that protection required order, so they helped establish three intertwined noble lines:
  </p>
  <ul>
    <li><strong>Royal Bloodline</strong> — Descended from the eldest Aramaic and the last king of Aarak</li>
    <li><strong>Arbiter Bloodline</strong> — Appointed to verify and advise future rulers; stemmed from the middle magician</li>
    <li><strong>Protector Bloodline</strong> — Sworn guardians of monarchs and arbiters; traced to the youngest magician</li>
  </ul>

  <h3>🔑 The Key of Kings</h3>
  <p>
    To resolve disputes of succession, the <strong>Key of Kings</strong> was forged—an artifact infused with the blood of the eldest magician, the last king of Aarak, and the middle magician. It was shaped by <em>Kaelthar, the Eternal Forgemaster</em>, blessed by <em>Raethelis, the Radiant Arbiter</em>, and imbued with divine essence by <em>Therion, the Lightbringer</em>.
  </p>
  <p>
    Entrusted to the Arbiter bloodline, the Key alone determines the rightful sovereign during conflicts between heirs.
  </p>

  <p><strong>Aza’ra</strong> is no longer a fractured relic. It is a realm of rebirth—woven from loss, united through magic, and destined to thrive beneath the Veil’s shimmering protection.</p>
</section>
<section id="disclaimer" style="border: 1px solid #ccc; padding: 1em; margin: 1em 0; background-color: #f9f9f9;">
  <h3>Disclaimer</h3>
  <p>
    The settlement names used throughout this document are English translations of the original Aza'ra names.
    They do not represent the actual names as spoken or written in the native Aza'raan language.
  </p>
</section>
<section>
  <h2>🌋 Tzaphaer — The Scarred Land</h2>
  <p><strong>Pronunciation:</strong> Taz-af-airr (rolled “r”)</p>
  <p><strong>Position:</strong> Westernmost continent, spanning part of the central worldband</p>
  <p><strong>Primary Moon:</strong> W’iosamn (rises NW, arcs SW, orbits beneath)</p>
  <p><strong>Environment:</strong> High radiation exposure</p>
  <p>
    Tzaphaer is a realm of twilight skies, elemental volatility, and mythic echoes—a continent scarred by tragedy and steeped in mystery. Born from cataclysmic destruction in 312 CE during the aftermath of a Dark Matter and antimatter hybrid bomb, its northern lands bear deep wounds that define its stark contrasts: twilight and flame, secrets and survival.
  </p>
  <p>
    Fractured beauty marks this land where shattered timelines and unstable leylines ripple across its terrain. Arcane scars pulse with ancient energy—unpredictable, potent, and woven into the very fabric of the continent. Dense forests conceal psion-reactive zones and fractured magic fields, making the wilds both dangerous and wondrous.
  </p>
  <p>
    The skies shimmer with residual dark matter, casting eerie twilight hues that hang over volcanic fury and fae upheaval. Tzaphaer’s lands are carved by elemental volatility, where ancient divine wars have left mythic echoes that resonate through time and space.
  </p>
  <p>
    As the westernmost continent, Tzaphaer serves as a nexus for portals connecting Earth to Aza’ra, more so than any other landmass—especially through its fractured kingdoms of Phalorra, Vraekthos, and Nyxara. Despite the cataclysm’s devastation, hidden potential, ancient power, and enigmatic civilizations endure, thriving amid temporal instability and arcane resonance.
  </p>

  <h3>👑 Major Kingdoms of Tzaphaer</h3>
  <h4>🕯️ Kingdom of Nyxara — Realm of Eternal Dusk</h4>
  <p><strong>Location:</strong> Southernmost Tzaphaer, furthest from the Detonation epicenter</p>

  <h5>Atmosphere &amp; Theme</h5>
  <ul>
    <li>Twilight-shrouded lands radiated by residual corruption</li>
    <li>Themes of transformation, identity dissolution, mysticism of the unknown</li>
    <li>Realm infused with shadow magic, psionics, illusion, necromancy, and secrecy</li>
    <li>Arcane contamination has twisted wildlife and landscape</li>
  </ul>

  <p><strong>Deity:</strong> Nyxara: God of Night, Secrets, Chaos, and Transitions</p>
  <p><strong>Capital City:</strong> Nocturnis — The Eclipsed City</p>
  <ul>
    <li>A living cathedral of obsidian and glyphs</li>
    <li>Center of mystics, necromancers, illusionists, and scholars of the unseen</li>
  </ul>

  <h5>Settlements &amp; Portal Connections</h5>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr><th>Settlement</th><th>Type</th><th>Portal Connections &amp; Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>Nocturnis</td><td>Capital, Central</td><td></td></tr>
      <tr><td>Flamewatch</td><td>Small Town, Central</td><td>🌀 Sedona, Arizona — Vortex energy and sacred red rock formations</td></tr>
      <tr><td>Nightspire</td><td>Small Town, Central</td><td>🌀 Bighorn Medicine Wheel, Wyoming — High-altitude stone circle of unknown origin</td></tr>
      <tr><td>Shadowkeep</td><td>Township, Eastern</td><td></td></tr>
      <tr><td>Moonbrook</td><td>Village, Northern</td><td></td></tr>
      <tr><td>Nightport</td><td>Township, Northwest</td><td></td></tr>
      <tr><td>Twilightvale</td><td>Large Town, Northern</td><td>🌀 Chichen Itza, Mexico — Mayan pyramid and celestial observatory</td></tr>
      <tr><td>Nightfall</td><td>Village, Central</td><td></td></tr>
      <tr><td>Twilightfield</td><td>Village, Northeastern</td><td>🌀 Aztlan, Mexico (Collapsed) — Former celestial bridge location</td></tr>
      <tr><td>Gloomhaven</td><td>Village, Western</td><td></td></tr>
      <tr><td>Shadowvale</td><td>Village, Southeastern</td><td>🌀 The Black Forest, Germany — Grim magical woodland portal</td></tr>
      <tr><td>Darkcrest</td><td>Small Town, Southern</td><td>🌀 Carpathian Mountains, Romania — Vampire and fae legends</td></tr>
      <tr><td>Darkwood</td><td>Village, Southwestern</td><td></td></tr>
      <tr><td>Shadowgate</td><td>Small Town, Southeastern</td><td>🌀 Nazca Lines, Peru — Massive geoglyphs portal</td></tr>
      <tr><td>Ashenport</td><td>Small Town, Southeast</td><td></td></tr>
      <tr><td>Blightshore</td><td>Village, Eastern</td><td></td></tr>
      <tr><td>Seasong Isle</td><td>Township, Northeast</td><td></td></tr>
      <tr><td>Cindermine</td><td>Village, Central</td><td>🌀 Ajanta Caves, India — Carved sanctuaries portal</td></tr>
      <tr><td>Flamepeak</td><td>Township, Southern</td><td>🌀 Mount Fuji, Japan — Spiritual volcano and sky access portal</td></tr>
      <tr><td>Moonport</td><td>Small Town, Northern</td><td></td></tr>
    </tbody>
  </table>

  <h4>Summary</h4>
  <p>
    Nyxara is a mysterious kingdom where eternal dusk reigns, shadows twist reality, and secrets abound. It is a domain of deep arcane mysticism, inhabited by necromancers, illusionists, and seekers of forbidden knowledge. The land is heavily influenced by shadow magic and psionics, creating an environment of eerie transformation and arcane corruption.
  </p>
  <p>
    Portals connect its many settlements to legendary, mystical, and ancient sites across the world, reinforcing its role as a nexus of hidden truths and otherworldly power.
  </p>
</section>
<section>
  <h2>🔥 Kingdom of Vraekthos — Fire-Forged Dominion</h2>

  <h3>📍 Location</h3>
  <p><strong>Central Tzaphaer</strong> — midway between the detonation epicenter and the outer rim</p>

  <h4>Geographical Position</h4>
  <p><strong>South of:</strong></p>
  <ul>
    <li>Kingdom of Phalorra (constant war, former territories)</li>
    <li>The City of the Mourned Gods (East)</li>
    <li>The Pirate City of Morrigaen (West)</li>
    <li>The City of Lytheris (North-Central)</li>
  </ul>
  <p><strong>North of:</strong></p>
  <ul>
    <li>Kingdom of Nyxara</li>
  </ul>

  <h3>🌋 Atmosphere & Terrain</h3>
  <ul>
    <li>Volcanic ridges, ashen wastelands, lava-choked valleys</li>
    <li>Jagged obsidian cliffs, churning lava flows, skies perpetually veiled in ash</li>
    <li>Terrain scarred by elemental fury and apocalyptic transformation</li>
  </ul>

  <h3>🏰 Capital City</h3>
  <p><strong>Ashen Throne</strong> — A caldera fortress built within an active volcano, serving as a crucible of survival and elemental mastery. Roads have melted into magma veins; borders are marked by molten rivers.</p>

  <h3>⚒️ Culture & Themes</h3>
  <ul>
    <li>Elemental resilience, martial industry, and survivalist ethos</li>
    <li>Mastery of fire magic, metalcraft, forge-magic, and alchemical innovation</li>
    <li>Brutal efficiency and honor through endurance</li>
    <li>Ruled by King Xalvador Pyrosin, the Ember Tyrant</li>
    <li>War-guilds and volcanic fortresses dominate social and military structure</li>
  </ul>

  <h3>🏘️ Settlements & Portal Connections</h3>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Settlement</th>
        <th>Type</th>
        <th>Portal Connections & Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ashen Throne</td><td>Capital, Central</td><td>🌀 Cahokia Mounds, Illinois<br>🌀 Mount Tiamat, Mesopotamia</td></tr>
      <tr><td>Mt. Vraekthos</td><td>Volcanic Highlands, Central</td><td>🌀 Crater Lake, Oregon<br>🌀 Mount Mazama, Oregon</td></tr>
      <tr><td>Emberglow</td><td>Large Town, Eastern</td><td>🌀 Salar de Uyuni, Bolivia</td></tr>
      <tr><td>Ashenstone</td><td>Township, Southern</td><td>🌀 Petra, Jordan</td></tr>
      <tr><td>Flamecrest</td><td>Village, Southwest</td><td>🌀 Wadi Rum, Jordan</td></tr>
      <tr><td>Ashengate</td><td>Small Town, Southwest</td><td>🌀 Mount Ararat, Turkey</td></tr>
      <tr><td>Emberbay</td><td>Village, Southwest</td><td></td></tr>
      <tr><td>Blightbay</td><td>Village, Southwest</td><td>🌀 Moai Bay, Chile<br>🌀 Easter Island (Rapa Nui)</td></tr>
      <tr><td>Blightfall</td><td>Village, Northwest</td><td></td></tr>
      <tr><td>Emberwood</td><td>Village, Northern</td><td>🌀 Taklamakan Desert, China</td></tr>
      <tr><td>Flameport</td><td>Village, Northern</td><td></td></tr>
      <tr><td>Sacrifice Ridge</td><td>Village, Northern</td><td>🌀 Mount Kailash, Tibet</td></tr>
      <tr><td>Veilhollow</td><td>Large Town, Western</td><td>🌀 Tiwanaku, Bolivia</td></tr>
    </tbody>
  </table>

  <h3>🌀 Standalone Portals (Not directly tied to settlements)</h3>
  <ul>
    <li><strong>Mount Tiamat, Mesopotamia</strong> — Ancient portal linked to ruins near Ashen Throne; now inactive</li>
    <li><strong>Mount Mazama, Oregon</strong> — Dormant anchor for Mt. Vraekthos volcanic region</li>
    <li><strong>Crater Lake, Oregon</strong> — Active portal key for elemental rites in volcanic highlands</li>
  </ul>

  <h3>📖 Summary</h3>
  <p><strong>Vraekthos</strong> is a kingdom forged in fire and volcanic fury. Its people embody resilience and mastery over elemental flame, enduring a harsh landscape marked by destruction and rebirth. The capital <strong>Ashen Throne</strong> serves as both a seat of power and a forge of unyielding spirit under King Xalvador Pyrosin. The kingdom maintains vital portal links to legendary and mythic locations worldwide, grounding its elemental might and survivalist culture.</p>
</section>
<section>
  <h2>🩸 Kingdom of Phalorra — The Divided Heart</h2>

  <h3>📍 Location</h3>
  <p><strong>Northeastern Tzaphaer</strong>, closest to the Detonation zone</p>

  <h3>🏰 Capital</h3>
  <p><strong>Crimson Spire</strong></p>

  <h3>🌄 Terrain & Environment</h3>
  <p>
    Diverse zones ranging from frozen peaks to burning deserts. Despite devastation by radiation, Phalorra endures through technological adaptation, cultural resilience, and a balance of sacred ritual and underground dealings.
  </p>

  <h3>🎭 Themes & Culture</h3>
  <ul>
    <li>Technological adaptation and cultural tenacity</li>
    <li>Defense, trade dominance, and sacred traditions</li>
    <li>Life amid environmental extremes</li>
    <li>Tense semi-war with neighboring kingdom Vraekthos, marked by shifting territorial control</li>
  </ul>

  <h3>📜 Historical Emergence</h3>
  <ul>
    <li><strong>315–338 CE</strong> — Emergence of Phalorra in the aftermath of the blast zone</li>
    <li>Founded as a militant theocracy centered on a goddess of blood and sacrifice</li>
    <li>By 338 CE, evolved into a religious-military power opposed to Vraekthos</li>
  </ul>

  <h3>🏘️ Major Settlements & Leyline Connections</h3>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Settlement</th>
        <th>Type</th>
        <th>Leyline / Portal Connection</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Crimson Spire</td>
        <td>Kingdom Capital</td>
        <td>🌀 Stonehenge, England — Leyline nexus and solstice marker</td>
      </tr>
      <tr>
        <td>Veilwatch</td>
        <td>Western Village</td>
        <td>🌀 Orkney Islands, Scotland — Ancient stone circles predating Stonehenge</td>
      </tr>
      <tr>
        <td>Bloodmoor</td>
        <td>Eastern Village</td>
        <td>
          🌀 Dolmens of Antequera, Spain — Tombs aligned with celestial events<br>
          🌀 Tartessos, Spain (Collapsed) — Vanished Bronze Age city; portal once located here
        </td>
      </tr>
      <tr>
        <td>Bloodkeep</td>
        <td>Eastern Township</td>
        <td>🌀 Mount Hermon (Syria/Lebanon) — Linked to Watchers in lore</td>
      </tr>
      <tr>
        <td>Crimson Hollow</td>
        <td>Northern Village</td>
        <td>🌀 Fort Ancient, Ohio — Prehistoric effigy mound aligned with solstices</td>
      </tr>
      <tr>
        <td>Crimsonport</td>
        <td>Northern Small Town</td>
        <td></td>
      </tr>
      <tr>
        <td>Bloodgate</td>
        <td>Central Small Town</td>
        <td>
          🌀 Serpent Mound, Ohio — Prehistoric earthwork complex<br>
          🌀 Thera (Santorini, Collapsed) — Lost Minoan island; portal once located here
        </td>
      </tr>
      <tr>
        <td>Veilwood</td>
        <td>Western Small Town</td>
        <td></td>
      </tr>
      <tr>
        <td>Crimsonpeak</td>
        <td>Southern Township</td>
        <td></td>
      </tr>
      <tr>
        <td>Veilgrove Forest</td>
        <td>Wild Region</td>
        <td>🌀 Pine Barrens, New Jersey — Arcane energies hidden in haunted forest</td>
      </tr>
    </tbody>
  </table>

  <h3>🏙️ District Breakdown of Crimson Spire (Capital)</h3>
  <ul>
    <li><strong>Central:</strong> Palace, skyship docks, guild halls</li>
    <li><strong>Northern:</strong> Frozen mining zones, rune-carving enclaves</li>
    <li><strong>Eastern:</strong> Military industries, Bloodkeep command center</li>
    <li><strong>Southern:</strong> Temples, agriculture, ancestral rites</li>
    <li><strong>Western:</strong> Trade routes, espionage rings, black markets</li>
  </ul>

  <h3>⚔️ Political Context</h3>
  <p>
    Originally part of the kingdom of Vraekthos, Phalorra broke away after the Detonation. Since then, it has been locked in a semi-war with Vraekthos—territories are gained and lost in a continuous, unstable flux.
  </p>
</section>
<section>
  <h2>🏴 Independent Cities of Tzaphaer</h2>
  <p>These sovereign city-states operate outside of the kingdom system, offering neutrality, rebellion, or mystic reverence.</p>

  <article>
    <h3>🏙️ Lytheris – The Crossroads of Peace and Secrets</h3>
    <p>Lytheris, once a radiant center of arcane knowledge and diplomacy, now exists as a fractured realm of illusions, shifting timelines, and magical instability. Located in Tzaphaer, closest to the Hybrid Bomb's detonation, the city survives not through strength, but through perception, memory, and will. Refugees, scholars, and shadow-walkers gather here, drawn to its paradox of ruin and resilience.</p>

    <h4>🌀 Portals of Lytheris</h4>
    <p><strong>🌍 Active Portal (as of 492 CE):</strong> <br>
    <em>The Selenic Gate of Whispering Glass</em><br>
    <strong>Location on Earth:</strong> Lake Baikal, Siberia (Russia)</p>
    <ul>
      <li><strong>Access:</strong> Requires a mirror-forged lens, a true memory in disappearing ink, and silence.</li>
      <li><strong>Traits:</strong> Opens under moonlight at the Refraction Obelisk; connects to a place where time and memory freeze but endure. Travelers often return altered, unsure of their own timeline.</li>
      <li><strong>Status:</strong> Stable but unpredictable.</li>
    </ul>

    <p><strong>💀 Collapsed Portal:</strong><br>
    <em>The Maw of Serene Ends</em><br>
    <strong>Location on Earth:</strong> Ushuaia, Argentina</p>
    <ul>
      <li><strong>Origin:</strong> The Crescent Scar, where five timelines once overlapped.</li>
      <li><strong>Traits:</strong> Linked to the concept of endings, identity, and forgotten dreams. It collapsed during the Hybrid Bomb's detonation in 312 CE.</li>
      <li><strong>Residual Effects:</strong> Birds that speak extinct languages, time-reversing stardust, and dreams of impossible coasts.</li>
      <li><strong>Status:</strong> Destroyed but mythically remembered.</li>
    </ul>
  </article>

  <article>
    <h3>🏴 Morrigaen – The Pirate City</h3>
    <p>A storm-lashed coastal haven of arcane piracy and black-market trade on Tzaphaer, Morrigaen thrives beyond the reach of law. Governed by pirate lords and tidewitches, it is a sanctuary for exiles, mercenaries, and magic-bound smugglers.</p>

    <h4>🌀 Portal: The Maelgrim Eye</h4>
    <p><strong>🌍 Earth Anchor:</strong> Naumkeag (Salem, Massachusetts, USA)</p>
    <ul>
      <li><strong>Aza’ra Anchor:</strong> Tidecaller’s Throne</li>
      <li><strong>Type:</strong> Tidebound Gate — Hidden within a moon-aligned sea vortex</li>
      <li><strong>Access:</strong> Activated by a sailor’s blood-oath during a moonstorm</li>
      <li><strong>Description:</strong> Connects Morrigaen to the misty coast of Naumkeag. A site of prophecy, tragedy, and magical resonance.</li>
    </ul>

    <blockquote>
      <strong>🌊 The Gate’s Prophecy</strong><br>
      “From salt to sorrow, from wind to witchfire—<br>
      One day, they will burn what they fear.<br>
      But the sea remembers, and the tide always turns.<br>
      Where witches fall, sea-daughters shall rise.”
    </blockquote>
  </article>

  <article>
    <h3>🏛 City of the Mourned Gods</h3>
    <p><strong>Location:</strong> Central-Eastern Tzaphaer, within the Phalorran Wall Mountains, overlooking the River of Mourning.</p>
    <p><strong>Overview:</strong> A necropolis of divine memory and temporal distortion. The last home of forgotten gods, where time unravels and faith lingers.</p>

    <h4>⚰️ Underworld of Aza’ra</h4>
    <ul>
      <li><strong>The Veilgate:</strong> Beneath the Shrine of Anubrios, sealed by Tears of the Moon. Accessed through the Rite of Three Hours.</li>
      <li><strong>Avya ("Pain"):</strong> Cleansing realm of reckoning and purification.</li>
      <li><strong>Shlama ("Peace"):</strong> Luminous sanctuary for balanced souls.</li>
      <li><strong>Guides:</strong> Volsariis (memory streams), Veiled Couriers (psychopomps of Nyxariel)</li>
    </ul>

    <h5>🌍 Earth Portal: Mount Osore, Japan</h5>
    <p>Located on the Shimokita Peninsula, it connects to the Mourned Gods via volcanic storms and psychic resonance. Both sites reflect humanity’s deep myths about death and spiritual passage.</p>

    <blockquote>
      <strong>🕯 Poetic Invocation</strong><br>
      Beyond the breath of the last bell’s toll,<br>
      Beneath the shrine where gods no longer wake,<br>
      The soul descends through obsidian gate,<br>
      To face the light, the fire, the fate.
    </blockquote>
  </article>
</section>
<section id="arzuhan">
  <h2>🌬️ Arzuhan — Continent of Sky Kingdoms, Arcane Winds, and Floating Legacies</h2>
  <p><strong>Pronunciation:</strong> <em>Arr-zoo-hahn</em> (rolled r)<br>
     <strong>Location:</strong> Easternmost continent<br>
     <strong>Primary Moon:</strong> 🌙 <em>Arvalla</em> (rises NE, arcs over Arzuhan & SW Tzaphaer)</p>

  <p>A continent of floating cities, leyline ruptures, and skybound civilizations shaped by arcane instability. Magical landscapes, storm-forged artifacts, and semi-sentient flora dominate. Portals to Earth connect through Middle Eastern, Oceanic, and European sites.</p>

  <h3>✨ Key Features</h3>
  <ul>
    <li>Floating cities & sky-leyline anchors</li>
    <li>Aerotech innovation: windships, gliders, storm artifacts</li>
    <li>Arcane universities & sky rituals</li>
    <li>Azharyths (sky dragons) & elemental guardians</li>
    <li>Arcane fallout zones & resource scarcity solutions (skyfarming, hydroponics)</li>
  </ul>

  <h3>🌀 Major Powers</h3>
  <h4>⚒️ Kingdom of IronForge</h4>
  <p><strong>Capital:</strong> Raethelia<br>
     <strong>Government:</strong> Council of Reclaimers (Forge-Lord, Arcane Steward, Riftwarden, Veiled Hand)</p>

  <p><strong>Terrain:</strong> Southeastern mountain kingdom fueled by lightning, balancing arcane tradition and storm-infused industry.</p>

  <p><strong>Notable:</strong></p>
  <ul>
    <li>Library of Alexandria preserved beneath Raethelia via interplanar rescue (48 BCE–391 CE)</li>
    <li>Cultural innovations: elemental metallurgy, skyforges, stormwright monasteries, glider rituals</li>
    <li>Strategic: elemental weapon stockpiles, portal security, relic monitoring</li>
  </ul>

  <h3>🛡️ Earth Portals & Interplanar Sites</h3>
  <table>
    <thead>
      <tr>
        <th>Earth Location</th>
        <th>IronForge Site</th>
        <th>Status</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Pompeii, Italy</td><td>Raethelia</td><td>Severed</td><td>Buried portal post-eruption (79 AD)</td></tr>
      <tr><td>Alexandria, Egypt</td><td>Raethelia</td><td>Temporal Fold</td><td>Library rescue; active only during rare alignments</td></tr>
      <tr><td>Lake Baikal, Russia</td><td>Skyfall</td><td>Refuge</td><td>Arcane sanctuary in frozen crater-lake</td></tr>
      <tr><td>Göbeklitepe, Turkey</td><td>Skycliff</td><td>Active</td><td>Pre-divergence leyline observatory</td></tr>
      <tr><td>Ziggurat of Ur, Iraq</td><td>Stormhammer</td><td>Active</td><td>Temple-fortress guarding portal & relics</td></tr>
      <tr><td>Dazhonglong Caverns, CN</td><td>Raethemar</td><td>Collapsed</td><td>Sacred dragon tunnels, now unstable</td></tr>
      <tr><td>Waipoua Forest, NZ</td><td>Hammerwood</td><td>Active</td><td>Living ironwood grove, enchanted crafting</td></tr>
      <tr><td>Nan Madol, Micronesia</td><td>Skyport</td><td>Active</td><td>Reef-city anchoring elemental trade fleets</td></tr>
      <tr><td>Uluru, Australia</td><td>Skyforge</td><td>Active</td><td>Arcane academy linked to Dreamtime & aether studies</td></tr>
      <tr><td>Ubar, Arabia</td><td>Zephyrelis</td><td>Severed</td><td>Lost to cursed sandstorm ley backlash</td></tr>
      <tr><td>City of Brass (Lore)</td><td>Cogspire</td><td>Severed</td><td>Sealed jinn-ruled time pocket</td></tr>
      <tr><td>Mount Paektu, Korea/CN</td><td>Cloudrest</td><td>Destroyed</td><td>Shrine-city lost in 946 AD eruption</td></tr>
    </tbody>
  </table>

  <h3>🧭 IronForge Settlements by Region</h3>
  <ul>
    <li><strong>Southern:</strong> Raethelia (capital), Windhaven, Skyfall, Skycliff, Stormhammer, Raethemar</li>
    <li><strong>Central:</strong> Skyport (main skyship dock)</li>
    <li><strong>Western / Central-Western:</strong> Stormgate, Hammerwood</li>
    <li><strong>Eastern:</strong> Stormwatch, Skyforge, Zephyrelis, Cogspire</li>
    <li><strong>Northern / Northeastern:</strong> Cloudrest, Cloudhaven, Zephyrstone</li>
  </ul>

  <h3>⚙️ IronForge Ethos</h3>
  <blockquote>
    “IronForge endures, not because it resists change—but because it tempers it.”
  </blockquote>
  <p>This arcane-industrial kingdom preserves lost Earth knowledge, tempers chaos with invention, and channels the storm as both weapon and wisdom.</p>
</section>
<section id="kingdom-of-zephyra">
  <h2>🌪️ Kingdom of Zephyra</h2>
  <p><em>Where wind carries wisdom and skies touch other worlds.</em></p>

  <p>Zephyra is a luminous, skyborne kingdom of floating aeries, interplanar bridges, and arcane innovation. Known for its philosophical scholars, stormcallers, and majestic sky-dragons (Azharyths), it thrives on magical industries, enchanted forges, and skyship trade. Cities float on leyline energy or nest under radiant domes, connected by portals to Earth and beyond.</p>

  <h3>🏛 Capital: Phyra (Central Region)</h3>
  <ul>
    <li>Suspended 2 km above Selkhanis River and Valerim Peaks</li>
    <li>Known as the Floating Crown, a vast levitating landmass (43,128 sq km)</li>
    <li>Buildings grow and breathe with bioluminescent alloys, woven stoneglass, and living wood</li>
    <li>Powered by lunar panels and elemental wind turbines shaped like glyphs</li>
    <li>Features skyrails, steam-trams, skyships, and prismatic public walkways</li>
    <li>Trade hub: Silver Bazaar; portal hub: Phoenix Flight Station</li>
    <li>Cultural life: music, festivals, arcane research, and skycraft</li>
  </ul>

  <h3>⚜️ Government & Factions</h3>
  <ul>
    <li>Monarch: Skyborne Sovereign Kainathis Vaelora</li>
    <li>Council of Winds: 12 representatives from cities, guilds, elemental orders</li>
    <li>Aetherian Tribunal: Oversees arcane law</li>
    <li>Political factions: Skyward Concord, Free Zephyrian Assembly, Windforged Syndicate, Children of the Everstorm, Nightveil Covenant</li>
  </ul>

  <h3>🏙️ Major Zephyra Settlements & Regions</h3>
  <table>
    <thead>
      <tr>
        <th>Region</th>
        <th>Settlements & Portals</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Northwestern</td><td>Breezewood, Galecrest</td></tr>
      <tr><td>Northern</td><td>Aetherfield, Cloudspire (Portal: Rocamadour, France)</td></tr>
      <tr><td>Central North</td><td>Breezefield, Stormvale (Portal: Montségur, France)</td></tr>
      <tr><td>Central</td><td>Windspire</td></tr>
      <tr><td>Central West</td><td>Breezeport</td></tr>
      <tr><td>Central East</td><td>Windgate</td></tr>
      <tr><td>Eastern</td><td>Skykeep (Portal: Machu Picchu, Peru)</td></tr>
      <tr><td>Southeastern</td><td>Vael’thwyn (Interplanar capital, Earth portal city)</td></tr>
      <tr><td>Northern</td><td>Eryndriavale</td></tr>
    </tbody>
  </table>

  <p><strong>Large towns:</strong> Stormvale, Stormgate</p>
  <p><strong>Townships:</strong> Windspire, Skykeep</p>
  <p><strong>Cities:</strong> Phyra (capital), Vael’thwyn</p>

  <h3>🌐 Earth Portal Connections to Zephyra</h3>
  <table>
    <thead>
      <tr>
        <th>Zephyra Site</th>
        <th>Earth Location</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Cloudspire</td><td>Rocamadour, France</td></tr>
      <tr><td>Stormvale</td><td>Montségur, France</td></tr>
      <tr><td>Skykeep</td><td>Machu Picchu, Peru</td></tr>
      <tr><td>Vael’thwyn</td><td>Riftgate Complex, Zephyra</td></tr>
      <tr><td>Thalmyr Willowdeep</td><td>Newgrange, Ireland</td></tr>
      <tr><td>Crookbend Thicket</td><td>Derinkuyu, Turkey</td></tr>
      <tr><td>Wyrmroot Vale</td><td>Valley of Flowers, India</td></tr>
      <tr><td>Akage Forest</td><td>Saugus, Massachusetts</td></tr>
      <tr><td>Eryndrel Heights</td><td>Mount Desert Island, Maine</td></tr>
      <tr><td>Saithis Straits</td><td>Great Salt Lake, Utah</td></tr>
      <tr><td>Dellshade Enclave</td><td>Chaco Canyon, New Mexico</td></tr>
      <tr><td>Valerim Peaks</td><td>Banff, Alberta, Canada</td></tr>
      <tr><td>Spireleaf Wilds</td><td>Palenque, Mexico</td></tr>
      <tr><td>Puzzlefen Grove</td><td>Pantanal, Brazil</td></tr>
      <tr><td>Valerim Rainforest</td><td>Amazon Rainforest, Brazil</td></tr>
    </tbody>
  </table>

  <h3>🌊 Independent Arcane Metropolis: City of Eryndria</h3>
  <p>A bi-leveled city resting above and below the waters of Eryndria Harbors and River. Featuring glass towers and coral-like domes, Eryndria is arcane-affiliated and formerly connected by portals to Glastonbury Tor (England → Avalon myth). It remains independent from Zephyra’s governance.</p>
</section>
<section id="dakaroth">
  <h2>⚒️ Dakaroth</h2>
  <p><strong>Land of Stone, Steel, and Forgotten Fire</strong><br>
  Pronunciation: Dak-ah-rroth (rolled “r”)<br>
  Position: Northernmost continent of Aza’ra<br>
  Primary Moon: 🌙 Duvaen — rises first over Dakaroth, bathing mountains in crimson glow.</p>

  <p>Once the seat of the Iron Dominion’s brutal reign, Dakaroth is a continent forged in war, revolution, and invention. Towering glaciers overshadow arcano-industrial cities while ancient fire gods stir below. The fallen Dominion’s ruins power the Kingdom of Vulkiris’s smog-choked forges and gear-driven cities. Amid tectonic unrest, arcane radiation, and The Veil’s pulse, Dakaroth remains a land of fireborn resilience, mechanical ingenuity, and divine embers.</p>

  <h3>🔥 Capital City: Emberhold (Kingdom of Vulkiris)</h3>
  <ul>
    <li>Formerly IronHeart, built in Mount Raethelis’s caldera</li>
    <li>Skyline of spiraling skybridges, cog-elevators, molten canals</li>
    <li>Home to steamsmith guilds, alchemist sects, and divine relic black markets</li>
    <li><strong>Portal:</strong> Mount Penglai, China → Emberhold (Severed)</li>
  </ul>

  <h3>⚙️ Regional Settlements</h3>

  <h4>Southern Region (Lumber, minerals, defense)</h4>
  <ul>
    <li>Steelwood: Steam-powered lumber town</li>
    <li><strong>Portal:</strong> Angkor Wat, Cambodia → Mt. Raethelis (subterranean tunnel)</li>
    <li>Ironfist: Fortress-town with repurposed Dominion cannons</li>
    <li>Steelhaven: Industrial village</li>
    <li>Gearstone: Mineral refinery</li>
    <li>Geardeep: Semi-submerged gear-city</li>
    <li><strong>Portal:</strong> Lake Okeechobee, Florida → Geardeep</li>
  </ul>

  <h4>Western Region (Trade, cogcraft, volcanic extraction)</h4>
  <ul>
    <li>Gearford: Harbor with technomancer guilds</li>
    <li><strong>Portal:</strong> Isle Royale, Michigan → Gearford</li>
    <li>Ironhold: Magnetic ore mining cliffs</li>
    <li>Gearhaven: Cogcraft guild capital</li>
    <li>Forgepeak: Forges above lava veins</li>
  </ul>

  <h4>Central Region (Dominion ruins, transport)</h4>
  <ul>
    <li>Ironclad: Fortified city with arcano-defense bastions</li>
    <li>Steelport: Trade and skytrain nexus</li>
    <li>Steelcrest: Armorers’ guild</li>
    <li><strong>Portal:</strong> Lihue, Hawaii → Steelcrest</li>
    <li>CarboniteSpire: Glacial crystalline city</li>
    <li><strong>Portal:</strong> Himalayas → CarboniteSpire</li>
  </ul>

  <h4>Northern Region (Weapon forges, divine metallurgy)</h4>
  <ul>
    <li>Anvilton: Blacksmith village on divine metals</li>
    <li>Forgewood: Forest-forge settlement</li>
    <li>Hammerkeep: Forge atop fire god corpse</li>
    <li><strong>Portal:</strong> Giant’s Causeway, Northern Ireland → Hammerkeep</li>
    <li>Emberfield: Mineral outpost</li>
    <li>Anvilcrest: Monastic forge-town</li>
    <li><strong>Portal:</strong> Skellig Michael, Ireland → Anvilcrest</li>
  </ul>

  <h4>Northeastern Region (Alchemy, rustland tech)</h4>
  <ul>
    <li>Steamvale: Last steam turbine city</li>
    <li>Bronzewood: Enchanted bronze trade</li>
    <li>Muckmarsh: Rogue alchemists’ swamp</li>
    <li>Emberstone: Fireproof alloy smithy</li>
    <li>Rustbrook: Haunted scrap city</li>
  </ul>

  <h4>Eastern Region (Inventors, rare ores)</h4>
  <ul>
    <li>Forgegate: Inventor capital</li>
    <li><strong>Portal:</strong> Lake Bled, Slovenia → Forgegate</li>
    <li>Rhodium Hill: Rare ore village</li>
    <li>Hammerfall: Classified arcano-machinery underground</li>
  </ul>

  <h3>🌀 Non-Settlement Portal Sites</h3>
  <ul>
    <li>Kaelthar Straits — Trøllkonufingur, Faroe Islands</li>
    <li>Raethelis Lake — Lake Titicaca, Bolivia/Peru</li>
    <li>Therion Grove — Mount Roraima, Venezuela</li>
    <li>Aetheron Expanse — Tayos Cave, Ecuador</li>
    <li>Kaelthar Wood (Collapsed) — Cueva de los Tayos Lower Chamber</li>
    <li>Mount Aetheron (Severed) — Serpent’s Spire, Mongolia</li>
  </ul>

  <h4>Submerged Severed Sites</h4>
  <ul>
    <li>Helike, Greece (near Kaelthar Wood)</li>
    <li>Cantre’r Gwaelod, Wales (Aetheric Expanse)</li>
  </ul>

  <h3>🏙️ Free City of Dakaroth</h3>
  <p><strong>Population:</strong> 4.74 million</p>
  <p>Independent coastal metropolis, never conquered by Iron Dominion. Center of justice, moon magic, military strategy, and post-apocalyptic resilience. Diverse population including Memoraths, Dril’thars, aerial Poyehnis, psionic Aza’raans, Dragonborn, Dreamborn.</p>

  <h4>Key Locations</h4>
  <ul>
    <li>Radiant Bastion: Fortress-temple of Raethelis</li>
    <li>Emberhall Archives: Battle records & arcane rulings</li>
    <li>Golden Market: Magical goods hub</li>
    <li>Solaris Alchemy: Sun-magic elixirs</li>
    <li>Dakaroth Skyport & Grand Station: Phoenix Flight & Iron Golem trade routes</li>
  </ul>

  <h3>🌌 Portal to Earth</h3>
  <p><strong>Aza’ra Location:</strong> Emberhall Archives, Chamber of Forgotten Verdicts<br>
  <strong>Earth Anchor Point:</strong> The House on the Rock, Spring Green, Wisconsin, USA<br>
  Portal veiled within museum’s illusions; used mainly by scholars and agents of Selkhanis for fate-thread recovery and law enforcement.</p>

  <h3>🌄 Geography & Mystical Traits</h3>
  <ul>
    <li>Glacial mountains and magma rifts</li>
    <li>Elemental maelstroms over tectonic faultlines</li>
    <li>Subterranean fire god remnants and Dominion secrets</li>
    <li>Volcanic rebirth zones glowing with radiant energy</li>
    <li>Aether-warped ruins with spiraling time distortions</li>
  </ul>
</section>
<section id="emberhold-and-moonpunk">
  <h2>🔥 Emberhold: City of Fire and Invention</h2>
  <p>
    Once known as Ironheart, Emberhold is a symbol of Vulkiris’s rebirth—an arcano-industrial marvel built within a volcanic caldera. Magma flows beneath reinforced glass streets as towering foundries craft lightning-infused weaponry. Its skyline rises with brass skybridges and hissing steamworks, embodying innovation born from destruction.
  </p>
  <p>
    Society here is a fusion of old-world militarism and merit-based progress, ruled by a council within the obsidian Emberkeep. Inventors, alchemists, and relic dealers thrive, while shadowy forces like the Order of the Hidden Veil manipulate events from below. Emberhold is not just a city—it is a crucible where ambition fuels invention and danger.
  </p>

  <h2>⚙️ The Legacy of the Iron Dominion</h2>
  <p>
    The Iron Dominion was more than a regime—it was an ideology that demanded the union of magic and machinery to reshape reality itself. Its capital, Ironheart, was a beacon of technological worship, built on doctrines honoring divine creators like Kaelthar and Aetheron. The Dominion sought perfection through control, absorbing lesser kingdoms and spreading its vision of industrial unity.
  </p>
  <p>
    Their ambition led to their downfall. In a catastrophic attempt to dominate the continent of Tzaphaer, the Dominion deployed a hybrid antimatter/dark matter bomb. The explosion shattered the continent, unleashing storms of radiation and chaos. The resulting devastation marked the end of the Dominion and reshaped global balance. While their cities fell, their technologies—like the fearsome Thundercoil—live on, both as marvels and warnings.
  </p>
  <p>
    Remnants of the Dominion’s elite now hide or operate within new factions, and the Order of the Hidden Veil continues to pull strings in secret. Though fallen, the Dominion’s legacy—its machinery, alchemy, and warped ideology—still influences Aza'ra.
  </p>

  <h2>🌍 The Changing World of Aza’ra</h2>
  <p>
    After the Dominion’s fall, much of Aza’ra adapted to life under arcane and environmental duress. Radiation storms and magical entropy plague the land, prompting most of Aza’ra’s population to live within protective domes. Skyships and magi-trains are the norm for long-distance travel, while settlements blend steampunk infrastructure with evolving aesthetics.
  </p>

  <h2>🌙 Moonpunk: Aza’ra’s Living Future</h2>
  <p>
    Moonpunk is not just a style—it is a cultural response to catastrophe, a philosophy rooted in resonance, memory, and regenerative magic. It emerged from the ashes of ruined lands like Tzaphaer and now thrives across domed cities and wild settlements alike.
  </p>

  <h3>🌱 Verdant Domes</h3>
  <p>
    Protective sanctuaries made from biotecture, dreamlight-infused walls, and umbral pylons. These structures shield against radiation and reality tears, while being maintained by arbormancers and harmonic engineers.
  </p>

  <h3>🌲 Leyline & Forest Settlements</h3>
  <p>
    Outside the domes, communities live in symbiosis with nature. Tree-hung homes, bioluminescent terraces, and song-responsive architecture echo with ancestral presence and elemental magic.
  </p>

  <h3>🏘️ Regional Moonpunk Identity</h3>
  <ul>
    <li><strong>Tzaphaer:</strong> Spirit gardens and myth-tech in domes</li>
    <li><strong>Free City of Dakaroth:</strong> Glacial sanctuaries with reflective tech</li>
    <li><strong>Vulkiris:</strong> Magma-glass domes and repurposed Dominion tech</li>
    <li><strong>Eryndria:</strong> Coral sanctuaries glowing with ocean memory</li>
    <li><strong>Zephyra:</strong> Crystalline sky terraces infused with dreamlight</li>
    <li><strong>IronForge:</strong> Ley-forges and moss-bound workshops</li>
  </ul>

  <h3>✨ Magic, Memory & Myth-Tech</h3>
  <p>
    Moonpunk magic is woven through ritual and resonance. Thought-spirits drift in lanterns, crystal runes serve as emotional processors, and dome harmonics maintain balance. Disruption of these systems can invite chaos or ancestral wrath.
  </p>

  <h3>🌬️ Technology & Transport</h3>
  <p>
    Lunar panels, herbal trams, leyline lifts, and emotional song-gates power these societies. Tools are treated as sacred companions, and transport methods are infused with ritual, not industry.
  </p>

  <h3>🌎 Moonpunk Philosophy</h3>
  <ul>
    <li><strong>Symbiosis:</strong> Technology, magic, and nature co-exist.</li>
    <li><strong>Time:</strong> Nonlinear, spiral, memory-driven.</li>
    <li><strong>Progress:</strong> Measured in beauty, balance, and belonging.</li>
    <li><strong>Access:</strong> Granted through resonance, not domination.</li>
  </ul>

  <h2>🌀 Final Essence</h2>
  <p>
    Moonpunk is the healing soul of Aza’ra—a culture of remembrance, ritual, and radiant resistance. In domes of silver light and forests of whispering trees, it offers a future not of conquest, but of communion.
  </p>
  <blockquote>
    <em>"Where others burn, we bloom. Where they conquer, we commune. Where they extract, we remember."</em>
  </blockquote>
</section>

  <h2>✍️ Core Features of the Aza’raan Language</h2>
  <h3>🌐 ORTHOGRAPHY</h3>
  <ul>
    <li>Script: Custom glyphs adapted from Aramaic forms</li>
    <li>Direction: Left to right, top to bottom</li>
    <li>Capitalization: Proper nouns, pronouns, sentence starts</li>
  </ul>

  <h3>🔉 PHONOLOGY</h3>
  <ul>
    <li>Consonants: b, d, f, g, h, j, k, l, m, n, p, r, s, t</li>
    <li>Vowels: a, e, i, o, u, y (with long forms: aa, ee, ii, oo, uu)</li>
    <li>Glottal Stop: <code>'Ai</code> — sacred, rhythm-based sound</li>
  </ul>

  <p><strong>Example:</strong> Traditional → <code>Aza’ra</code> (ʿAyn silent); Evolved → <code>W’iosamn</code> (vocalized ‘Ai)</p>

  <h3>🔡 ALPHABET EXAMPLES</h3>
  <table>
    <thead>
      <tr><th>Glyph</th><th>Name</th><th>Latin Key</th><th>Sound</th><th>Notes</th></tr>
    </thead>
    <tbody>
      <tr><td>A</td><td>Ālaph</td><td>A, E</td><td>/a/, /e/</td><td>Root vowel; anchors pronunciation</td></tr>
      <tr><td>H</td><td>Haḥan</td><td>H</td><td>/h/, /ħ/</td><td>Emphatic stress sound</td></tr>
      <tr><td>O</td><td>Urim</td><td>O</td><td>/o/, /uː/</td><td>Resonance and depth</td></tr>
      <tr><td>R</td><td>Rēs</td><td>R</td><td>Trilled /r/</td><td>Dialect-sensitive</td></tr>
      <tr><td>‘</td><td>ʿAyn</td><td>’</td><td>‘Ai or silent</td><td>Spiritual cadence and heritage</td></tr>
      <tr><td>^</td><td>Na’lu</td><td>—</td><td>Emphasis</td><td>Stresses next syllable</td></tr>
      <tr><td>`</td><td>Ra’ama</td><td>—</td><td>Emphasis</td><td>Stresses previous syllable</td></tr>
    </tbody>
  </table>

  <h2>🧠 Grammar & Syntax</h2>
  <h3>🧾 Sentence Structure</h3>
  <p>Subject–Verb–Object (SVO). Fusion markers like <code>~</code> connect pronouns and verbs: <code>Anoki~hue</code> = “I am”.</p>

  <h3>🧬 Morphology</h3>
  <ul>
    <li>Agglutinative: ideas formed via suffix chains</li>
    <li>No grammatical gender—identity shown through pronouns</li>
    <li>Emphasis on rhythm and fluidity</li>
  </ul>

  <h2>📖 Language as Identity</h2>
  <p>Aza’raan is not only spoken—it is experienced. It reaffirms the self with every utterance. The glottal <code>'Ai</code> is sacred. Accent markers shape tone and oral nuance. No identity is assumed—each is invited, affirmed, and spoken into being.</p>

  <h2>🧬 Conclusion: Aza’ra’s Legacy</h2>
  <ul>
    <li>A sacred artifact of magic, grief, and resilience</li>
    <li>A bridge across shattered cultures and time</li>
    <li>A living language for truth, identity, and soul</li>
  </ul>
  <p>In Aza’raan, every syllable binds skyborne ruins and grounded peoples—not just by word, but by spirit.</p>

</body>
 <tbody>
        <tr><td class="glyph">A</td><td>Ālaph</td><td>A, a, E, e</td><td>"A" as in "father" or "E" as in "echo"</td><td>Root vowel, stabilizes pronunciation in derived words</td></tr>
        <tr><td class="glyph">B</td><td>Bēth</td><td>B, b</td><td>"B" as in "book"; softens to "V" in fluid speech</td><td>Can merge into "V" mid-sentence for flow</td></tr>
        <tr><td class="glyph">C</td><td>Kāph</td><td>C, c, K, k, X, x</td><td>"K" as in "king"; shifts to "Kh" when unstressed</td><td>Central to stress-based mutations</td></tr>
        <tr><td class="glyph">D</td><td>Dālath</td><td>D, d</td><td>"D" as in "day"; shifts to "TH" (as in "that") when softened</td><td>Critical in archaic verb conjugations</td></tr>
        <tr><td class="glyph">F</td><td>Pē</td><td>F, f, P, p</td><td>"P" as in "pen"; shifts to "F" when medial or final</td><td>Forms contrast in compound words</td></tr>
        <tr><td class="glyph">G</td><td>Gāmal</td><td>G, g</td><td>"G" as in "go"; softens to "Gh" in casual speech</td><td>Common in fluid speech transformations</td></tr>
        <tr><td class="glyph">H</td><td>Hē / Ḥēth → <em>Haḥan</em></td><td>H, h</td><td>"H" as in "house"; deeper articulation as "Ḥ" when stressed</td><td>Marks emphatic stress in poetic forms</td></tr>
        <tr><td class="glyph">I</td><td>Yodh</td><td>I, i, J, j, Y, y</td><td>"Y" as in "yes"; can take on "I" when used as a vowel</td><td>Transitional vowel in diphthongs</td></tr>
        <tr><td class="glyph">L</td><td>Lāmadh</td><td>L, l</td><td>"L" as in "love"</td><td>Softens before rounded vowels</td></tr>
        <tr><td class="glyph">M</td><td>Mim</td><td>M, m</td><td>"M" as in "moon"</td><td>Stable across dialects</td></tr>
        <tr><td class="glyph">N</td><td>Nun</td><td>N, n</td><td>"N" as in "night"</td><td>Nasalized in specific poetic structures</td></tr>
        <tr><td class="glyph">O</td><td>Urim</td><td>O, o</td><td>"O" as in "octopus"; also “oo”</td><td>Expresses weight/depth in speech</td></tr>
        <tr><td class="glyph">Q</td><td>Qoph</td><td>Q, q</td><td>"Q" as in Arabic <em>qāl</em></td><td>Heavy articulation in formal speech</td></tr>
        <tr><td class="glyph">R</td><td>Rēs</td><td>R, r</td><td>"R" as in "rain"</td><td>Variation marks dialectal shifts</td></tr>
        <tr><td class="glyph">S</td><td>Sin / Semkath / Ṣādhē → <em>Saṣek</em></td><td>S, s</td><td><strong>S</strong> = sharp “S” as in <em>sea</em>; <strong>s</strong> = “sh” as in <em>shimmer</em></td><td>Each form has distinct phonemic and cultural uses</td></tr>
        <tr><td class="glyph">T</td><td>Taw / Ṭēth → <em>Taṭan</em></td><td>T, t</td><td>"T" as in "top"; emphatic "Ṭ" as in Arabic <em>ṭar</em></td><td>Strengthens consonantal emphasis</td></tr>
        <tr><td class="glyph">W</td><td>Waw</td><td>U, u, W, w</td><td>"U" as in "blue"; "W" as in "wind"</td><td>Transitional glide in compounds</td></tr>
        <tr><td class="glyph">V</td><td>Ṭhāmar</td><td>V, v</td><td>"V" as in "vine"</td><td>Newer glyph tied to immigrant dialects</td></tr>
        <tr><td class="glyph">Z</td><td>Zayn</td><td>Z, z</td><td>"Z" as in "zebra"</td><td>Maintains stability across dialects</td></tr>
        <tr><td class="glyph">‘</td><td>ʿAyn</td><td>', ʕ</td><td>Glottalized “Ai” or silent</td><td>Used lyrically or spiritually in Aza’raan</td></tr>
        <tr><td class="glyph">^</td><td>Na’lu</td><td>Stress next syllable</td><td>NAH-ai-loo</td><td>“Lift the sound forward”</td></tr>
        <tr><td class="glyph"></td><td>Ra’ama</td><td>Emphasize previous syllable</td><td>RAH-ah-mah</td><td>“Ground the voice”</td></tr>
        <tr><td class="glyph">~</td><td>Shayalu</td><td>Fusion / Prolongation</td><td>SHAH-yah-loo</td><td>“Braid together”</td></tr>
      </tbody>
    </table>
  </div> 
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Capitalization & Core Pronouns in Aza’raan</title>
  
</head>
<body>

  <h1>4. Capitalization & Core Pronouns in Aza’raan</h1>

  <h2>🅰️ Capitalization Rules</h2>
  <p>Only proper nouns, pronouns, and the first word of a sentence are capitalized. This minimal capitalization emphasizes meaning and identity over grammar structure.</p>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>✅ <code>Zephyra</code>, <code>Raethelis</code>, <code>Anoki</code></li>
    <li>❌ Common nouns like <code>zilomaya</code> (river) or <code>toklela</code> (speaker) are not capitalized unless starting a sentence.</li>
  </ul>

  <h2>🙋‍♀️ Standard Pronouns & Their Usage</h2>
  <table>
    <thead>
      <tr>
        <th>English</th>
        <th>Aza’raan</th>
        <th>Pronunciation</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>I / Me</td><td>Anoki</td><td>AH-noh-kee</td><td>Singular, gender-neutral first-person pronoun.</td></tr>
      <tr><td>My</td><td>Anokila</td><td>AH-noh-kee-lah</td><td>Possessive form of Anoki.</td></tr>
      <tr><td>Myself</td><td>Anokilanami</td><td>AH-noh-kee-lah-NAH-mee</td><td>Reflexive form, emphasizing introspection or inner truth.</td></tr>
      <tr><td>We / Us</td><td>Ruk’</td><td>Rook-ai</td><td>Plural form, derived from Aramaic <em>Rukha</em> (spirit).</td></tr>
      <tr><td>You (singular)</td><td>Etan</td><td>EH-tahn</td><td>Respectful second-person singular pronoun.</td></tr>
      <tr><td>You (plural)</td><td>Etanan</td><td>EH-tan-ahn</td><td>Plural form of Etan.</td></tr>
      <tr><td>They (singular)</td><td>Samir</td><td>sah-MEER / shah-MEER</td><td>Used neutrally before gender is known.</td></tr>
      <tr><td>They (plural)</td><td>Samiran</td><td>sah-MEE-rahn</td><td>Pluralized form of Samir.</td></tr>
      <tr><td>It / Its</td><td>Yani</td><td>YAH-nee</td><td>Refers to objects or essence (from root y-n: being/state).</td></tr>
      <tr><td>Themself</td><td>Samirnami</td><td>sah-MEER-NAH-mee</td><td>Reflexive form for unknown or neutral individuals.</td></tr>
      <tr><td>Self / Essence</td><td>Nami</td><td>NAH-mee</td><td>May be used independently for one’s soul or identity. Highly spiritual or introspective.</td></tr>
    </tbody>
  </table>

  <h2>🔁 Reflexive Pronouns: "Nami" Usage</h2>
  <p><code>"Nami"</code> attaches to objective pronouns to form reflexive phrases:</p>
  <ul>
    <li><code>Ranthnami</code> = “himself” (for a demi-male)</li>
    <li><code>Makthnami</code> = “themself” (nonbinary)</li>
  </ul>
  <p>May also stand alone in poetic, ritual, or sacred expressions:<br>
  <em>“Nami walks with truth.”</em></p>
  <p class="note">Etymology: <code>Nami</code> comes from old Aarak, where it meant “soul” or “core essence.”</p>

  <h2>🙋‍♂️ PRONOUN SYSTEM</h2>
  <p>The Aza’raan system is inclusive and gender-flexible.</p>
  <h3>⚧️ Gender Identities & Pronoun Forms</h3>
  <p>All gendered pronouns follow this structure:</p>
  <ul>
    <li><strong>Subjective → Objective → Possessive</strong></li>
    <li>Reflexivity is formed by attaching <code>nami</code> to the objective form (e.g., <code>Ran → Ranth → Ranthnami</code>).</li>
  </ul>
  <p>These pronouns are used once an individual introduces themselves, replacing any use of <code>Samir</code>. Once known, they are used consistently regardless of social context.</p>

  <h3>🧾 Example Sentences Using Gendered Pronouns</h3>
  <ul>
    <li><strong>“Ran rakhemaeri Ranthnami.”</strong><br>
    → The demi-male loved himself.</li>
    <li><strong>“Lam hue Alt.”</strong><br>
    → She is hers.</li>
    <li><strong>“Tas niqama laha zilomaya.”</strong><br>
    → The trans woman doesn’t rise for the river.</li>
  </ul>
<head>
  <meta charset="UTF-8">
  <title>Aza’raan Gender Identities & Pronouns</title>
 
</head>
<body>
</body>
  <h1>⚧️ GENDER IDENTITIES & PRONOUNS</h1>

  <table>
    <thead>
      <tr>
        <th>Gender Identity</th>
        <th>Aza’raan Word</th>
        <th>Pronunciation (Identity)</th>
        <th>Subj</th>
        <th>Obj</th>
        <th>Poss</th>
        <th>Pronunciation (Subj/Obj/Poss)</th>
        <th>Reflexive</th>
        <th>Reflexive Pronunciation</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Cis Male</td><td>Razah</td><td>Rah-zah (rolled R)</td><td>Raz</td><td>Racht</td><td>Razad</td><td>Rahz / Rahcht / Rah-zahd</td><td>Rachtnami</td><td>Rahcht-NAH-mee</td></tr>
      <tr><td>Cis Female</td><td>Ala</td><td>Ah-lah</td><td>Al</td><td>Alt</td><td>Alad</td><td>Ahl / Ahl-t / Ah-lad</td><td>Altnami</td><td>Ahl-t-NAH-mee</td></tr>
      <tr><td>Demi-Male</td><td>Ranam</td><td>Rah-nahm (rolled R)</td><td>Ran</td><td>Ranth</td><td>Ranod</td><td>Rahn / Rahn-th / Rah-nod</td><td>Ranthnami</td><td>Rahn-th-NAH-mee</td></tr>
      <tr><td>Demi-Female</td><td>Lanam</td><td>Lah-nahm</td><td>Lam</td><td>Lamth</td><td>Lamod</td><td>Lahm / Lahmth / Lah-mod</td><td>Lamthnami</td><td>Lahm-th-NAH-mee</td></tr>
      <tr><td>Nonbinary</td><td>Maska</td><td>Mah-skah</td><td>Mak</td><td>Makth</td><td>Makad</td><td>Mahk / Mahk-th / Mah-kahd</td><td>Makthnami</td><td>Mahk-th-NAH-mee</td></tr>
      <tr><td>Trans Male</td><td>Dabala</td><td>Dah-bah-la</td><td>Dab</td><td>Dabth</td><td>Dabad</td><td>Dahb / Dahb-th / Dah-bahd</td><td>Dabthnami</td><td>Dahb-th-NAH-mee</td></tr>
      <tr><td>Trans Female</td><td>Tasen</td><td>Tah-sen</td><td>Tas</td><td>Tasth</td><td>Tasad</td><td>Tahs / Tahs-th / Tah-sahd</td><td>Tasthnami</td><td>Tahs-th-NAH-mee</td></tr>
      <tr><td>Genderfluid</td><td>Pesma</td><td>Pes-mah</td><td>Pem</td><td>Pemth</td><td>Pemad</td><td>Pehm / Pehm-th / Peh-mad</td><td>Pemthnami</td><td>Pehm-th-NAH-mee</td></tr>
      <tr><td>Bigender</td><td>Lapsa</td><td>Lahp-sah</td><td>Las</td><td>Last</td><td>Lasad</td><td>Lahs / Lahst / Lah-sahd</td><td>Lastnami</td><td>Lahst-NAH-mee</td></tr>
      <tr><td>Gender-Flexible</td><td>Pasla</td><td>Pah-slah</td><td>Pas</td><td>Pasth</td><td>Pasad</td><td>Pahs / Pahs-th / Pah-sahd</td><td>Pasthnami</td><td>Pahs-th-NAH-mee</td></tr>
      <tr><td>Genderless</td><td>Akna</td><td>Ahk-nah</td><td>Ak</td><td>Akth</td><td>Akad</td><td>Ahk / Ahk-th / Ah-kahd</td><td>Akthnami</td><td>Ahk-th-NAH-mee</td></tr>
    </tbody>
  </table>

  <h2>⚪ Aza’raan Pronoun System: Easy Breakdown</h2>
  <ul>
    <li>All gendered pronouns follow the same structure as English <em>he / him / his</em>, regardless of gender identity.</li>
    <li>Each identity has three forms:
      <ul>
        <li><strong>Subjective:</strong> subject of a sentence</li>
        <li><strong>Objective:</strong> object of a sentence</li>
        <li><strong>Possessive:</strong> shows ownership</li>
      </ul>
    </li>
    <li>Example (cis female): <code>Al / Alt / Alad</code> (used like he/him/his)</li>
    <li>All pronouns in Aza’raan are capitalized as a sign of respect for gender identity.</li>
    <li>Example: <em>Clarahmizah is doing well. Al is at the top of Alad career and Alad family love Alt.</em></li>
    <li>Reflexive pronouns are formed by adding <code>nami</code> to the objective form:
      <ul>
        <li><code>Racht + nami</code> → <code>Rachtnami</code> (himself)</li>
        <li><code>Alt + nami</code> → <code>Altnami</code> (herself)</li>
        <li><code>Ranth + nami</code> → <code>Ranthnami</code> (demi-male)</li>
        <li><code>Lamth + nami</code> → <code>Lamthnami</code> (demi-female)</li>
        <li><code>Makth + nami</code> → <code>Makthnami</code> (nonbinary)</li>
        <li><code>Dabth + nami</code> → <code>Dabthnami</code> (trans-male)</li>
        <li><code>Tasth + nami</code> → <code>Tasthnami</code> (trans-female)</li>
        <li><code>Pemth + nami</code> → <code>Pemthnami</code> (genderfluid)</li>
        <li><code>Last + nami</code> → <code>Lastnami</code> (bigender)</li>
        <li><code>Pasth + nami</code> → <code>Pasthnami</code> (gender-flexible)</li>
        <li><code>Akth + nami</code> → <code>Akthnami</code> (genderless)</li>
      </ul>
    </li>
    <li>Use <strong>Samir</strong> as a placeholder if pronouns are not yet introduced. Once a pronoun is known, use it exclusively.</li>
    <li>Pronouns do not change based on grammatical gender—they are fixed to identity.</li>
    <li>First- and second-person pronouns are standard and neutral:
      <ul>
        <li><code>Anoki</code> = I / me, <code>Anokila</code> = my</li>
        <li><code>Etan</code> = you (singular), <code>Etanan</code> = you (plural)</li>
      </ul>
    </li>
    <li>Plural forms:
      <ul>
        <li><code>Anokiri</code> = we/us</li>
        <li><code>Samiran</code> = they (plural)</li>
        <li>Reflexive: <code>Makri + nami</code> = <code>Makrinami</code></li>
      </ul>
    </li>
    <li><code>Nami</code> may also be used as a standalone term for soul or identity in ritual/spiritual speech.</li>
    <li>Example: <em>Nami walks with peace.</em></li>
  </ul>

  <h2>🔁 Reflexive & Plural Forms + “Nami” in Depth</h2>
  <h3>Reflexive Pronouns: The Role of “Nami”</h3>
  <p><code>Nami</code> (pronounced Nah-mee) expresses reflexivity, spiritual essence, and core identity. It attaches to objective forms just like English “himself” or “themself.”</p>

  <table>
    <thead>
      <tr>
        <th>Gendered Objective</th>
        <th>Reflexive Form</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ranth (Demi-Male)</td><td>Ranthnami</td></tr>
      <tr><td>Lamth (Demi-Female)</td><td>Lamthnami</td></tr>
      <tr><td>Makth (Nonbinary)</td><td>Makthnami</td></tr>
      <tr><td>Racht (Cis Male)</td><td>Rachtnami</td></tr>
      <tr><td>Alt (Cis Female)</td><td>Altnami</td></tr>
    </tbody>
  </table>

  <p><strong>Example:</strong><br>
  “They healed <code>nami</code>.” → “They healed themself.”</p>
  <p><code>Nami</code> is often used in sacred, poetic, or affirming speech to refer to one’s core being.</p>

</body>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aza’raan Gendered Kinship Table</title>
  
</head>
<body>

  <h1>🧬 Aza’raan Gendered Kinship Table</h1>

  <table>
    <thead>
      <tr>
        <th>Gender Identity</th>
        <th>Root</th>
        <th>Parent<br>(Formal / Possessive)</th>
        <th>Sibling<br>(Formal / Possessive)</th>
        <th>Aunt/Uncle<br>(Formal / Possessive)</th>
        <th>Grandparent<br>(Formal / Possessive)</th>
        <th>Niece/Nephew<br>(Formal / Possessive)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Cis Male</td><td>Raz</td><td>Razan / Raz’si</td><td>Razmir / Raz’ven</td><td>Razarel / Raz’dan</td><td>Razira / Raz’mar</td><td>Razel / Raz’lai</td></tr>
      <tr><td>Cis Female</td><td>Al</td><td>Alan / Al’si</td><td>Almir / Al’ven</td><td>Alarel / Al’dan</td><td>Alira / Al’mar</td><td>Alel / Al’lai</td></tr>
      <tr><td>Demi-Male</td><td>Ran</td><td>Ranan / Ran’si</td><td>Ranmir / Ran’ven</td><td>Ranarel / Ran’dan</td><td>Ranira / Ran’mar</td><td>Ranel / Ran’lai</td></tr>
      <tr><td>Demi-Female</td><td>Lam</td><td>Lanan / Lam’si</td><td>Lamir / Lam’ven</td><td>Lamarel / Lam’dan</td><td>Lamira / Lam’mar</td><td>Lamel / Lam’lai</td></tr>
      <tr><td>Nonbinary</td><td>Mak</td><td>Makan / Mak’si</td><td>Makmir / Mak’ven</td><td>Makarel / Mak’dan</td><td>Makira / Mak’mar</td><td>Makel / Mak’lai</td></tr>
      <tr><td>Trans Male</td><td>Dab</td><td>Daban / Dab’si</td><td>Dabmir / Dab’ven</td><td>Dabarel / Dab’dan</td><td>Dabira / Dab’mar</td><td>Dabel / Dab’lai</td></tr>
      <tr><td>Trans Female</td><td>Tas</td><td>Tasan / Tas’si</td><td>Tasmir / Tas’ven</td><td>Tasarel / Tas’dan</td><td>Tasira / Tas’mar</td><td>Tasel / Tas’lai</td></tr>
      <tr><td>Genderfluid</td><td>Pem</td><td>Peman / Pem’si</td><td>Pemmir / Pem’ven</td><td>Pemarel / Pem’dan</td><td>Pemira / Pem’mar</td><td>Pemel / Pem’lai</td></tr>
      <tr><td>Bigender</td><td>Las</td><td>Lasan / Las’si</td><td>Lasmir / Las’ven</td><td>Lasarel / Las’dan</td><td>Lasira / Las’mar</td><td>Lasel / Las’lai</td></tr>
      <tr><td>Gender-Flexible</td><td>Pas</td><td>Pasan / Pas’si</td><td>Pasmir / Pas’ven</td><td>Pasarel / Pas’dan</td><td>Pasira / Pas’mar</td><td>Pasel / Pas’lai</td></tr>
      <tr><td>Genderless</td><td>Ak</td><td>Akan / Ak’si</td><td>Akmir / Ak’ven</td><td>Akarel / Ak’dan</td><td>Akira / Ak’mar</td><td>Akel / Ak’lai</td></tr>
      <tr><td>Unknown / Neutral</td><td>Samir</td><td>Samiranan / Samir’si</td><td>Samirmir / Samir’ven</td><td>Samirarel / Samir’dan</td><td>Samirira / Samir’mar</td><td>Samirel / Samir’lai</td></tr>
      <tr><td>Plural / Group</td><td>Ruk’</td><td>Ruk’an / Ruk’si</td><td>Ruk’mir / Ruk’ven</td><td>Ruk’arel / Ruk’dan</td><td>Ruk’ira / Ruk’mar</td><td>Ruk’el / Ruk’lai</td></tr>
    </tbody>
  </table>

  <h2>🧬 Aza'raan Kinship Naming Guide</h2>
  <p>A unified system of familial terminology by identity, grammar, and narrative use.</p>

  <h3>🔤 Construction Rules</h3>
  <p>Kinship terms in Aza'raan are constructed using a gender/identity root (e.g., <code>Raz</code>, <code>Al</code>, <code>Mak</code>) plus either:</p>

  <h3>🗣️ Relational Suffix (Spoken/Conversational Form)</h3>
  <p>Used in informal speech, possessives, or direct reference.</p>

  <table>
    <thead>
      <tr>
        <th>Kin Role</th>
        <th>Suffix</th>
        <th>Meaning</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Parent</td><td>’si</td><td>origin / source</td><td>Raz’si</td></tr>
      <tr><td>Sibling</td><td>’ven</td><td>equal branch</td><td>Tas’ven</td></tr>
      <tr><td>Aunt/Uncle</td><td>’dan</td><td>next-generation elder</td><td>Dab’dan</td></tr>
      <tr><td>Grandparent</td><td>’mar</td><td>ancestral root</td><td>Mak’mar</td></tr>
      <tr><td>Niece/Nephew</td><td>’lai</td><td>descendant leaf</td><td>Lam’lai</td></tr>
    </tbody>
  </table>

  <h3>📜 Formal Compound Form (Names, Records, Ceremonies)</h3>
  <p>Used in official documents, narration, storytelling, or reverent tone.</p>

  <table>
    <thead>
      <tr>
        <th>Kin Role</th>
        <th>Suffix</th>
        <th>Meaning</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Parent</td><td>an</td><td>Source of the root</td><td>Razan</td></tr>
      <tr><td>Sibling</td><td>mir</td><td>Mirror / counterpart</td><td>Almir</td></tr>
      <tr><td>Aunt/Uncle</td><td>arel</td><td>Branch elder</td><td>Tasarel</td></tr>
      <tr><td>Grandparent</td><td>ira</td><td>Root elder / foundation</td><td>Makira</td></tr>
      <tr><td>Niece/Nephew</td><td>el</td><td>Leaf / newer shoot</td><td>Aleel</td></tr>
    </tbody>
  </table>

</body>

</head>
<body>

  <h2><span class="emoji">🔁</span> Plural &amp; Collective Forms</h2>
  <p><strong>Ruk’</strong> — familial collective (“we/us/our kin”)</p>
  <ul>
    <li><strong>Ruk’el</strong> = our nieces/nephews</li>
    <li><strong>Ruk’an</strong> = our parents</li>
  </ul>
  <p><strong>Samiran</strong> — plural for ungendered or unknown others</p>
  <ul>
    <li><strong>Samiranan</strong> = ungendered parents</li>
    <li><strong>Samirel</strong> = unknown/neutral nieces/nephews</li>
  </ul>

  <h2><span class="emoji">🌀</span> Spiritual &amp; Reflexive Use</h2>
  <p>Kin terms may take <em>nami</em> to express inner or spiritual relation:</p>
  <ul>
    <li><strong>Razanami</strong> = his own father (spiritually or introspectively)</li>
    <li><strong>Makiranami</strong> = their own grandparent (in ritual or memory)</li>
  </ul>

  <h2><span class="emoji">📘</span> Example Sentences</h2>
  <table>
    <caption>Sentence &amp; Meaning</caption>
    <thead>
      <tr>
        <th>Sentence</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Raz’si raised Anoki well.</td><td>His father raised him well.</td></tr>
      <tr><td>Mak’mar is wise beyond words.</td><td>Their grandparent is full of wisdom.</td></tr>
      <tr><td>Lam’lai loves to draw.</td><td>Her niece loves to draw.</td></tr>
      <tr><td>Tas’ven and Anoki built this home together.</td><td>Her sibling and he built this home.</td></tr>
      <tr><td>I learned storytelling from Dab’dan.</td><td>My uncle taught me.</td></tr>
      <tr><td>Razira guided Raz to the sacred grove.</td><td>His grandfather led him there.</td></tr>
      <tr><td>Alarel and Alira told stories to Alel.</td><td>Her aunt and grandmother told stories.</td></tr>
      <tr><td>Samiranan blessed Ruk’el during the naming ritual.</td><td>Ungendered parents blessed our kin.</td></tr>
      <tr><td>Pemmir honored Pemira by speaking Nami’s truth.</td><td>Their sibling honored their grandparent spiritually.</td></tr>
      <tr><td>Akarel and Akmir journeyed with Akel to Akira’s resting place.</td><td>Genderless relatives traveled together.</td></tr>
    </tbody>
  </table>

  <h2><span class="emoji">💡</span> Notes:</h2>
  <ul>
    <li>Formal forms are preferred in writing, titles, rituals, or third-person narration.</li>
    <li>Relational suffix forms are ideal for spoken dialogue, quick reference, and possessive use.</li>
    <li>This structure supports inclusive and flexible storytelling across the Aza'ra MMORPG, Threads of Fate series, and tabletop systems.</li>
  </ul>

  <h2><span class="emoji">🫂</span> Plural Pronouns</h2>
  <table>
    <caption>English, Aza’raan, and Notes</caption>
    <thead>
      <tr>
        <th>English</th>
        <th>Aza’raan</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>We / Us</td><td>Anokiri</td><td>“I” + plural marker (-ri)</td></tr>
      <tr><td>Our</td><td>Anokiral</td><td>Possessive plural form</td></tr>
      <tr><td>They</td><td>Samiran</td><td>Plural form of neutral singular Samir</td></tr>
      <tr><td>Themselves</td><td>[Gendered Plural]+nami</td><td>e.g., Makrinami for nonbinary plural reflexive</td></tr>
    </tbody>
  </table>

  <h2><span class="emoji">🔄</span> Usage of “Nami” with Plural Pronouns</h2>
  <p>For groups, reflexivity applies similarly with the reflexive suffix attached to plural objective pronouns.<br />
  Example:<br />
  <strong>“Makrinami”</strong> = “They (nonbinary plural) themselves.”<br />
  If the gender is unknown or unintroduced, <strong>Samir</strong> and <strong>Samiran</strong> are used as gender-neutral singular and plural pronouns respectively.</p>

  <h2><span class="emoji">🌱</span> “Nami” — Spiritual &amp; Linguistic Roots</h2>
  <p>Etymologically from old Aarak dialect, “Nami” ties directly to concepts of “soul,” “essence,” and “core identity.”<br />
  Used to convey a deep sense of self beyond grammatical person, often invoked in spiritual or introspective language.</p>

  <h2><span class="emoji">🧩</span> Rules for Forming Plural Pronouns in Aza’raan</h2>
  <ol>
    <li>
      <strong>Plural Formation Rule: Add -ri to Base Identity</strong><br />
      To form plural versions of gendered or identity-based pronouns, append -ri to the singular root.<br />
      This applies to subject, object, and possessive forms.<br />
      For example:<br />
      Razah (Cis Male identity) → Razahri (Cis Male plural identity)<br />
      Mak → Makri (Nonbinary plural subject)<br />
      Formula: Singular Identity + -ri = Plural Identity<br />
      e.g., Ala → Alari, Ranam → Ranamri
    </li>
    <li>
      <strong>Reflexive Rule: Add -nami to Plural Object Root</strong><br />
      To form reflexive plural pronouns, attach the suffix -nami to the plural object pronoun (usually ending in -thri or -tri).<br />
      Reflexives always carry spiritual undertones (soul/self).<br />
      Formula: Plural Object Form + nami<br />
      e.g., Rachtri → Rachtrinami, Makthri → Makthrinami
    </li>
    <li>
      <strong>Possessive Plural Rule: Add -dri to Base Identity</strong><br />
      The possessive plural form ends in -dri, continuing from the base root with pluralization.<br />
      This follows the possessive suffix pattern -ad → -dri in plural.<br />
      Formula: Root + -dri<br />
      e.g., Razah → Razadri, Pesma → Pemadri
    </li>
    <li>
      <strong>Neutral / Mixed Plural Rule: Use “Samiran”</strong><br />
      For groups where gender is unknown, irrelevant, or mixed:<br />
      Use Samiran for all plural forms (subject, object, possessive).<br />
      Reflexive form: Samirnami
    </li>
    <li>
      <strong>Pronunciation Consistency</strong><br />
      Plural forms follow pronunciation of the base identity + suffix.<br />
      Emphasis often remains on the root; suffixes are pronounced smoothly:<br />
      Makthrinami = Mahk-th-NAH-mee<br />
      Altrinami = Ahl-tri-NAH-mee
    </li>
  </ol>

</body>
<head>
  <meta charset="UTF-8" />
  <title>Aza’raan Suffix Patterns & Plural Pronoun Table</title>
  
</head>
<body>

  <h2><span class="emoji">✅</span> Summary of Suffix Patterns</h2>
  <table>
    <caption>Form / Suffix / Example Root / Example Result</caption>
    <thead>
      <tr>
        <th>Form</th>
        <th>Suffix</th>
        <th>Example Root</th>
        <th>Example Result</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Plural Identity</td><td>-ri</td><td>Razah</td><td>Razahri</td></tr>
      <tr><td>Subject</td><td>-ri</td><td>Mak</td><td>Makri</td></tr>
      <tr><td>Object</td><td>-thri / -tri</td><td>Ran / Al</td><td>Ranthri / Altri</td></tr>
      <tr><td>Possessive</td><td>-dri</td><td>Lam</td><td>Lamodri</td></tr>
      <tr><td>Reflexive</td><td>-nami</td><td>Makthri</td><td>Makthrinami</td></tr>
      <tr><td>Neutral Plural</td><td>(fixed)</td><td>Samir</td><td>Samiran / Samirnami</td></tr>
    </tbody>
  </table>

  <h2><span class="emoji">🫂</span> Plural Pronoun Table – Aza’raan</h2>
  <table>
    <caption>Gender Identity and Corresponding Plural Pronouns</caption>
    <thead>
      <tr>
        <th>Gender Identity</th>
        <th>Plural Identity</th>
        <th>Subject</th>
        <th>Object</th>
        <th>Possessive</th>
        <th>Reflexive</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cis Male</td>
        <td>Razahri</td>
        <td>Razri</td>
        <td>Rachtri</td>
        <td>Razadri</td>
        <td>Rachtrinami</td>
        <td>“Razah” + -ri</td>
      </tr>
      <tr>
        <td>Cis Female</td>
        <td>Alari</td>
        <td>Alri</td>
        <td>Altri</td>
        <td>Aladri</td>
        <td>Altrinami</td>
        <td>“Ala” + -ri</td>
      </tr>
      <tr>
        <td>Demi-Male</td>
        <td>Ranamri</td>
        <td>Ranri</td>
        <td>Ranthri</td>
        <td>Ranodri</td>
        <td>Ranthrinami</td>
        <td>“Ranam” + -ri</td>
      </tr>
      <tr>
        <td>Demi-Female</td>
        <td>Lanamri</td>
        <td>Lamri</td>
        <td>Lamthri</td>
        <td>Lamodri</td>
        <td>Lamthrinami</td>
        <td>“Lanam” + -ri</td>
      </tr>
      <tr>
        <td>Nonbinary</td>
        <td>Maskari</td>
        <td>Makri</td>
        <td>Makthri</td>
        <td>Makadri</td>
        <td>Makthrinami</td>
        <td>“Maska” + -ri</td>
      </tr>
      <tr>
        <td>Trans Male</td>
        <td>Dabalari</td>
        <td>Dabri</td>
        <td>Dabthri</td>
        <td>Dabadri</td>
        <td>Dabthrinami</td>
        <td>“Dabala” + -ri</td>
      </tr>
      <tr>
        <td>Trans Female</td>
        <td>Taseni</td>
        <td>Tasri</td>
        <td>Tasthri</td>
        <td>Tasadri</td>
        <td>Tasthrinami</td>
        <td>“Tasen” + -ri</td>
      </tr>
      <tr>
        <td>Genderfluid</td>
        <td>Pesmari</td>
        <td>Pemri</td>
        <td>Pemthri</td>
        <td>Pemadri</td>
        <td>Pemthrinami</td>
        <td>“Pesma” + -ri</td>
      </tr>
      <tr>
        <td>Bigender</td>
        <td>Lapsari</td>
        <td>Lasri</td>
        <td>Lasthri</td>
        <td>Lasadri</td>
        <td>Lasthrinami</td>
        <td>“Lapsa” + -ri</td>
      </tr>
      <tr>
        <td>Gender-Flexible</td>
        <td>Paslari</td>
        <td>Pasri</td>
        <td>Pasthri</td>
        <td>Pasadri</td>
        <td>Pasthrinami</td>
        <td>“Pasla” + -ri</td>
      </tr>
      <tr>
        <td>Genderless</td>
        <td>Aknari</td>
        <td>Akri</td>
        <td>Akthri</td>
        <td>Akadri</td>
        <td>Akthrinami</td>
        <td>“Akna” + -ri</td>
      </tr>
      <tr>
        <td>Neutral (Mixed)</td>
        <td>Samiran</td>
        <td>Samiran</td>
        <td>Samiran</td>
        <td>Samiral</td>
        <td>Samirnami</td>
        <td>Used when gender is unknown or group is mixed</td>
      </tr>
    </tbody>
  </table>

</body>
<head>
  <meta charset="UTF-8" />
  <title>Aza’raan Morphosyntax & Fusion Rules</title>
 
</head>
<body>

  <h2><span class="emoji">🔄</span> Aza’raan Morphosyntax vs. English</h2>
  <table>
    <caption>Verb Forms and Pronunciations</caption>
    <thead>
      <tr>
        <th>English Form</th>
        <th>Aza’raan Word</th>
        <th>Latin Letters</th>
        <th>Pronunciation</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Verb: Present</td>
        <td>tazalna</td>
        <td>tazalna</td>
        <td>tah-ZAHL-nah</td>
        <td>Root + -na (present tense marker)</td>
      </tr>
      <tr>
        <td>Verb: Past</td>
        <td>tazalka</td>
        <td>tazalka</td>
        <td>tah-ZAHL-kah</td>
        <td>Root + -ka (past tense marker)</td>
      </tr>
      <tr>
        <td>Verb: Future</td>
        <td>tazallo</td>
        <td>tazallo</td>
        <td>tah-ZAHL-lo</td>
        <td>Root + -lo (future tense marker)</td>
      </tr>
      <tr>
        <td>Verb: Progressive</td>
        <td>tazalne</td>
        <td>tazalne</td>
        <td>tah-ZAHL-nay</td>
        <td>Root + -ne (progressive/ongoing)</td>
      </tr>
      <tr>
        <td>Verb: Am</td>
        <td>hue</td>
        <td>hue</td>
        <td>HOO-eh</td>
        <td>Can be fused with pronouns (e.g., Anoki~hue = “I am”)</td>
      </tr>
      <tr>
        <td>Verb: Have</td>
        <td>itelei</td>
        <td>itelei</td>
        <td>EE-teh-lay</td>
        <td>Can be fused with pronouns (e.g., Anoki~itelei = “I have”)</td>
      </tr>
    </tbody>
  </table>

  <h2><span class="emoji">🧑‍🤝‍🧑</span> Pronouns: Basic Forms and Possession</h2>
  <p><em>(Details on pronouns are implied here, refer to related documentation.)</em></p>

  <h2><span class="emoji">🧾</span> Discourse Rules in Aza’raan: Sentence &amp; Contextual Structure</h2>
  <p>Aza’raan uses Subject–Verb–Object (SVO) word order in both formal and informal contexts. The language is designed for clarity while honoring identity and nuance through fusion, tone, and morphology.</p>

  <h3>🌟 Register &amp; Style</h3>

  <h4>Formal Register</h4>
  <ul>
    <li>SVO structure is strictly maintained.</li>
    <li>The honorific prefix <strong>“Do-”</strong> is applied to titles or known roles to show respect.</li>
    <li>This prefix is <strong>never</strong> used directly before pronouns.</li>
  </ul>
  <p>Examples:</p>
  <ul>
    <li>✅ DoKesrah (Respected King)</li>
    <li>✅ DoRaethelis (Respected High Seer)</li>
    <li>❌ DoEtan (✘ avoid using with pronouns)</li>
  </ul>
  <p>Verbs stay unmodified except for:</p>
  <ul>
    <li>Negation with <strong>ni</strong></li>
    <li>Politeness/emphasis with <strong>va</strong></li>
  </ul>
  <p class="example">DoKesrah avada ranod. → “The respected king gives to him.”</p>
  <p class="example">Anoki va itelei rasa. → “I truly have power.”</p>

  <h4>Casual / Conversational Register</h4>
  <ul>
    <li>Still uses SVO, but more fluid.</li>
    <li>Fusion markers (~) are common for natural, faster speech:</li>
  </ul>
  <p class="example">Anoki~hue tubana. → “I am happy.”</p>
  <ul>
    <li>Particles like <strong>va</strong> and <strong>ni</strong> convey tone and emphasis.</li>
    <li>Contractions and emotional markers are acceptable.</li>
  </ul>

  <h3>❓ Question Formation</h3>
  <p>Questions always begin with “?” but otherwise follow normal SVO order.<br />
  Sentence ends with a period for clarity, not a question mark.</p>
  <p class="example">?Eyka jaboe etan minu. → “Where are you from?”</p>
  <p class="example">?V’n^sa kesrah aza’ra ranth? → “Can the king help him?”</p>

  <h3>💬 Imperative Sentences (Commands)</h3>
  <p>Typically omit the subject for efficiency, but retain SVO when needed for clarity or politeness.</p>
  <p class="example">Avada tubana! → “Create joy!”</p>
  <p class="example">Rakhema anoki! → “Love me!”</p>

  <h3>🚫 Negative Sentences</h3>
  <p>The negation particle <strong>“ni”</strong> is placed before the verb, never before the subject or object.</p>
  <p class="example">Anoki niavada minase`ka. → “I do not understand.”</p>
  <p class="example">Tas niqama laha zilomaya. → “She does not rise for the river.”</p>

  <h3>💞 Fusion &amp; Contraction Rules</h3>
  <p>Fusion (~) makes speech smoother, especially for pronouns + verbs:</p>
  <ul>
    <li>Anoki~hue → “I am”</li>
    <li>Anoki~itelei → “I have”</li>
  </ul>
  <p>Object pronouns follow the verb:</p>
  <p class="example">Anoki rakhema etan. → “I love you.”</p>

</body>
<head>
  <meta charset="UTF-8" />
  <title>Politeness, Emphasis & Respect in Aza’raan</title>
 
</head>
<body>

  <h2><span class="emoji">💠</span> Politeness, Emphasis, &amp; Respect</h2>
  <table>
    <caption>Particles and Their Use</caption>
    <thead>
      <tr>
        <th>Particle</th>
        <th>Meaning</th>
        <th>Use &amp; Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>va</td><td>emphasis / softness</td><td>Used to intensify or politely soften a statement</td></tr>
      <tr><td>ni</td><td>negation</td><td>Placed before verbs to negate them</td></tr>
      <tr><td>Do-</td><td>honorific</td><td>Prefix for titles or respected persons (e.g., DoKesrah)</td></tr>
    </tbody>
  </table>

  <h2><span class="emoji">🎭</span> Conditional &amp; Rhetorical Sentences</h2>
  <p>Rhetorical questions still use “?” at the start.<br />
  Conditional ideas are formed using standard negation and SVO order.</p>
  <p class="example">?Midam avada etan khashava. → “What do you think?”</p>
  <p class="example">Anoki ni avada itelei. → “I do not possess it.” → “I don’t have it.”</p>

  <h2><span class="emoji">🧠</span> Semantics: Identity-First Language</h2>
  <ul>
    <li>Aza'raan is built upon core identity, spiritual autonomy, and respectful clarity, with these principles embedded into its pronoun and grammar systems:</li>
    <li>No grammatical gender by default.</li>
    <li>Gender and identity are introduced via pronouns, and once known, always honored in reference.</li>
    <li>Language emphasizes being and connection over hierarchical or binary categories.</li>
  </ul>

  <h2><span class="emoji">💬</span> Pragmatics: Tone, Emotion, and Intent</h2>
  <table>
    <caption>Tools, Purpose, and Examples</caption>
    <thead>
      <tr>
        <th>Tool</th>
        <th>Purpose</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Particles</td>
        <td>Add nuance, softness, or clarity</td>
        <td>Va = emphasis/softness; Ni = negation</td>
      </tr>
      <tr>
        <td>Fusion (~)</td>
        <td>Streamline speech, create contractions</td>
        <td>Anoki~hue = “I am”; Anoki~itelei = “I have”</td>
      </tr>
      <tr>
        <td>Honorifics</td>
        <td>Show deference to titles/roles</td>
        <td>DoKesrah = “Respected King”</td>
      </tr>
    </tbody>
  </table>

  <h2><span class="emoji">🌀</span> Nami: Essence, Selfhood, and Inner Truth</h2>
  <p>“Nami” is more than just a reflexive particle—it is the verbal embodiment of the soul. It appears:</p>
  <ul>
    <li>Appended to objective pronouns:<br />
    <strong>Ranthnami</strong> = “himself” (demi-male)<br />
    <strong>Makthnami</strong> = “themself” (nonbinary)</li>
    <li>Stand-alone in sacred or poetic expression:<br />
    Nami walks with truth.<br />
    Anoki found nami in silence.</li>
  </ul>
  <p>Its presence grounds identity and respects personal sovereignty, making it essential in rituals, confessions, vows, and affirmations.</p>

  <h2><span class="emoji">🗂️</span> Key Philosophical Principles Embedded in Aza’raan</h2>
  <table>
    <caption>Principle &amp; How It Manifests in Language</caption>
    <thead>
      <tr>
        <th>Principle</th>
        <th>How It Manifests in Language</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Identity over form</td>
        <td>Pronouns are sacred; once known, they are fixed</td>
      </tr>
      <tr>
        <td>Respect as default</td>
        <td>Honorifics show reverence for known titles/roles</td>
      </tr>
      <tr>
        <td>Simplicity with depth</td>
        <td>SVO order keeps clarity; particles and fusion add emotion</td>
      </tr>
      <tr>
        <td>Soul as core</td>
        <td>“Nami” embeds essence and spiritual identity</td>
      </tr>
    </tbody>
  </table>

  <h2><span class="emoji">📚</span> Final Example Sentences to Demonstrate Integration</h2>
  <p class="example">Declarative (Formal):<br />
  DoKesrah hue razad. → “The respected king is his.”</p>
  <p class="example">Interrogative (Neutral):<br />
  ?Eyka jaboe etan minu. → “Where are you from?”</p>
  <p class="example">Reflexive (Spiritual):<br />
  Nami avada nami. → “The self creates itself.”</p>
  <p class="example">Conditional (Casual):<br />
  Anoki ni itelei rasa. → “I do not have power.”</p>
  <p class="example">Command (Respectful):<br />
  DoRaethelis avada lahari. → “Let the respected high seer grant peace.”</p>

</body>
<head>
  <meta charset="UTF-8" />
  <title>Aza’raan Suffixes &amp; Particles – Comprehensive Table</title>
  
</head>
<body>

  <h2><span class="emoji">🔣</span> Aza’raan Suffixes &amp; Particles – Comprehensive Table</h2>

  <table>
    <caption>Particle / Suffix Overview</caption>
    <thead>
      <tr>
        <th>Particle / Suffix</th>
        <th>Type</th>
        <th>Function / Meaning</th>
        <th>Example(s)</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-ri</td>
        <td>Suffix</td>
        <td>Plural marker for subject pronouns/roots</td>
        <td>Anokiri, Makri, Razri</td>
        <td>Attached to identity/base for plural subjects</td>
      </tr>
      <tr>
        <td>-thri / -tri</td>
        <td>Suffix</td>
        <td>Plural object pronoun form</td>
        <td>Rachtri, Altri, Makthri</td>
        <td>Variation depends on root vowel/consonant harmony</td>
      </tr>
      <tr>
        <td>-dri</td>
        <td>Suffix</td>
        <td>Plural possessive form</td>
        <td>Razadri, Makadri</td>
        <td>Derived from singular possessive (-ad) + plural</td>
      </tr>
      <tr>
        <td>-nami</td>
        <td>Suffix</td>
        <td>Reflexive pronoun / spiritual “self”</td>
        <td>Makthnami, Ranthnami, Nami</td>
        <td>Attaches to object pronouns or stands alone as “soul”</td>
      </tr>
      <tr>
        <td>-na</td>
        <td>Suffix</td>
        <td>Present tense marker (verbs) / poetic possessive</td>
        <td>tazalna, zilomayana</td>
        <td>Ongoing or present action</td>
      </tr>
      <tr>
        <td>-ka</td>
        <td>Suffix</td>
        <td>Past tense / locative marker</td>
        <td>tazalka, ziloka</td>
        <td>Denotes completed action or “at a place”</td>
      </tr>
      <tr>
        <td>-lo</td>
        <td>Suffix</td>
        <td>Future tense / instrumental marker</td>
        <td>tazallo, rakhemalo</td>
        <td>Indicates futurity or “with/by means of”</td>
      </tr>
      <tr>
        <td>-ne</td>
        <td>Suffix</td>
        <td>Progressive / ongoing action marker</td>
        <td>tazalne</td>
        <td>Ongoing or continuous present</td>
      </tr>
      <tr>
        <td>-la</td>
        <td>Suffix</td>
        <td>Possessive (1st, 2nd, 3rd person)</td>
        <td>Anokila, Etanla, Samirla</td>
        <td>“My,” “your,” “their”</td>
      </tr>
      <tr>
        <td>va</td>
        <td>Particle</td>
        <td>Emphasis / politeness / affirmation</td>
        <td>va minaseka, Anoki va itelei</td>
        <td>Softens or strengthens expression</td>
      </tr>
      <tr>
        <td>ni-</td>
        <td>Prefix</td>
        <td>Negation</td>
        <td>niqama, niavada</td>
        <td>Always placed before verb roots</td>
      </tr>
      <tr>
        <td>Do-</td>
        <td>Prefix</td>
        <td>Honorific for respected titles</td>
        <td>DoKesrah, DoRaethelis</td>
        <td>Never used before pronouns</td>
      </tr>
      <tr>
        <td>li</td>
        <td>Particle</td>
        <td>Adjective/adverb linker (“like,” “in the manner of”)</td>
        <td>ziloki li ono</td>
        <td>Adds descriptive quality</td>
      </tr>
      <tr>
        <td>sa-</td>
        <td>Particle</td>
        <td>Classifier for metaphorical or categorical sets</td>
        <td>sa-mokari</td>
        <td>Often used in rituals or poetic metaphor</td>
      </tr>
      <tr>
        <td>’si</td>
        <td>Suffix</td>
        <td>Informal kinship: Parent (origin)</td>
        <td>Raz’si, Al’si</td>
        <td>Used in casual speech</td>
      </tr>
      <tr>
        <td>’ven</td>
        <td>Suffix</td>
        <td>Informal kinship: Sibling</td>
        <td>Tas’ven, Mak’ven</td>
        <td>“Equal branch” kin</td>
      </tr>
      <tr>
        <td>’dan</td>
        <td>Suffix</td>
        <td>Informal kinship: Aunt/Uncle</td>
        <td>Dab’dan, Ak’dan</td>
        <td>“Next-generation elder”</td>
      </tr>
      <tr>
        <td>’mar</td>
        <td>Suffix</td>
        <td>Informal kinship: Grandparent</td>
        <td>Mak’mar, Pem’mar</td>
        <td>“Ancestral root”</td>
      </tr>
      <tr>
        <td>’lai</td>
        <td>Suffix</td>
        <td>Informal kinship: Niece/Nephew</td>
        <td>Lam’lai, Raz’lai</td>
        <td>“Descendant leaf”</td>
      </tr>
      <tr>
        <td>-an</td>
        <td>Suffix</td>
        <td>Formal kinship: Parent</td>
        <td>Razan, Alan</td>
        <td>Ceremonial/formal register</td>
      </tr>
      <tr>
        <td>-mir</td>
        <td>Suffix</td>
        <td>Formal kinship: Sibling</td>
        <td>Almir, Pemmir</td>
        <td>“Mirror / counterpart”</td>
      </tr>
      <tr>
        <td>-arel</td>
        <td>Suffix</td>
        <td>Formal kinship: Aunt/Uncle</td>
        <td>Tasarel, Akarel</td>
        <td>“Branch elder”</td>
      </tr>
      <tr>
        <td>-ira</td>
        <td>Suffix</td>
        <td>Formal kinship: Grandparent</td>
        <td>Makira, Ranira</td>
        <td>“Root elder”</td>
      </tr>
      <tr>
        <td>-el</td>
        <td>Suffix</td>
        <td>Formal kinship: Niece/Nephew</td>
        <td>Aleel, Ruk’el</td>
        <td>“Leaf / younger shoot”</td>
      </tr>
      <tr>
        <td>~ (Shayalu)</td>
        <td>Fusion Marker</td>
        <td>Natural contraction of pronoun + verb</td>
        <td>Anoki~hue, Anoki~itelei</td>
        <td>Casual/melodic phrasing</td>
      </tr>
      <tr>
        <td>?</td>
        <td>Particle</td>
        <td>Question indicator (starts sentence)</td>
        <td>?Etan tazalka zilomaya.</td>
        <td>No final punctuation — just start with ?</td>
      </tr>
    </tbody>
  </table>

  <h3><span class="emoji">🌟</span> Morphological Application Table</h3>
  <table>
    <thead>
      <tr>
        <th>Form Type</th>
        <th>Structure</th>
        <th>Example</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Present verb</td>
        <td>Root + -na</td>
        <td>tazalna</td>
        <td>goes</td>
      </tr>
      <tr>
        <td>Past verb</td>
        <td>Root + -ka</td>
        <td>tazalka</td>
        <td>went</td>
      </tr>
      <tr>
        <td>Future verb</td>
        <td>Root + -lo</td>
        <td>tazallo</td>
        <td>will go</td>
      </tr>
      <tr>
        <td>Progressive verb</td>
        <td>Root + -ne</td>
        <td>tazalne</td>
        <td>is going</td>
      </tr>
      <tr>
        <td>Plural pronoun</td>
        <td>Base + -ri</td>
        <td>Anoki → Anokiri</td>
        <td>We / Us</td>
      </tr>
      <tr>
        <td>Possessive (sing.)</td>
        <td>Base + -la or -ad</td>
        <td>Etanla, Razad</td>
        <td>Your / His</td>
      </tr>
      <tr>
        <td>Possessive (plural)</td>
        <td>Base + -dri</td>
        <td>Makadri</td>
        <td>Theirs (nonbinary group)</td>
      </tr>
      <tr>
        <td>Reflexive (sing.)</td>
        <td>Obj. form + -nami</td>
        <td>Ranthnami</td>
        <td>Himself (demi-male)</td>
      </tr>
      <tr>
        <td>Reflexive (plural)</td>
        <td>Plural object + -nami</td>
        <td>Makthrinami</td>
        <td>Themselves (nonbinary plural)</td>
      </tr>
    </tbody>
  </table>

  <h3><span class="emoji">🌀</span> Fusion &amp; Identity Markers</h3>
  <table>
    <thead>
      <tr>
        <th>Construction</th>
        <th>Fusion</th>
        <th>Example</th>
        <th>Translation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pronoun + “am”</td>
        <td>Pronoun + ~hue</td>
        <td>Anoki~hue tubana</td>
        <td>I am happy</td>
      </tr>
      <tr>
        <td>Pronoun + “have”</td>
        <td>Pronoun + ~itelei</td>
        <td>Anoki~itelei rasa</td>
        <td>I have power</td>
      </tr>
      <tr>
        <td>Verb + Object</td>
        <td>Verb + direct object</td>
        <td>Rakhema etan</td>
        <td>Love you</td>
      </tr>
      <tr>
        <td>Reflexive phrase</td>
        <td>Obj. pronoun + nami</td>
        <td>Samirnami avada Samirnami</td>
        <td>The self gives to itself</td>
      </tr>
    </tbody>
  </table>

  <h3><span class="emoji">🔁</span> Derivational Pattern Examples</h3>
  <table>
    <thead>
      <tr>
        <th>Base</th>
        <th>+ -ri</th>
        <th>+ -thri/-tri</th>
        <th>+ -dri</th>
        <th>+ -nami</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mak</td>
        <td>Makri</td>
        <td>Makthri</td>
        <td>Makadri</td>
        <td>Makthnami</td>
      </tr>
      <tr>
        <td>Al</td>
        <td>Alri</td>
        <td>Altri</td>
        <td>Aladri</td>
        <td>Altnami</td>
      </tr>
      <tr>
        <td>Ran</td>
        <td>Ranri</td>
        <td>Ranthri</td>
        <td>Ranodri</td>
        <td>Ranthnami</td>
      </tr>
      <tr>
        <td>Anoki</td>
        <td>Anokiri</td>
        <td>—</td>
        <td>—</td>
        <td>Anokilanami</td>
      </tr>
    </tbody>
  </table>

</body>
<meta charset="UTF-8" />
<title>Aza’raan Lexicon Samples</title>

</head>
<body>

<h1>📚 LEXICON SAMPLES</h1>

<table>
  <thead>
    <tr>
      <th>English Word</th>
      <th>Aza’raan Word</th>
      <th>Pronunciation</th>
      <th>Definition / Notes</th>
      <th>Part(s) Of Speech</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A</td>
      <td>A</td>
      <td><span class="pronunciation">ah</span></td>
      <td>Deep-throated ah sound</td>
      <td>Adjective</td>
    </tr>
    <tr>
      <td>All</td>
      <td>Kulahmi</td>
      <td><span class="pronunciation">Koo-lah-mee</span></td>
      <td>From kulah (whole) + plural modifier -mi</td>
      <td>Determiner, Pronoun, Adjective</td>
    </tr>
    <tr>
      <td>Am</td>
      <td>Hue</td>
      <td><span class="pronunciation">HOO-eh</span></td>
      <td>Can be fused with pronoun "I" (Anoki~hue = "I am")</td>
      <td>Verb (first person singular of "be")</td>
    </tr>
    <tr>
      <td>Anew</td>
      <td>Hadatae</td>
      <td><span class="pronunciation">khah-DAH-tay</span></td>
      <td>Derived from Hadata (new) + adverbial -ae → “in a new way”</td>
      <td>Adverb</td>
    </tr>
    <tr>
      <td>Animal</td>
      <td>Jasp’r</td>
      <td><span class="pronunciation">Jash-pai-ruh</span></td>
      <td>A living organism that feeds on organic matter, typically having specialized sense organs and nervous system and able to respond rapidly to stimuli.</td>
      <td>Noun</td>
    </tr>
    <tr>
      <td>Appreciate</td>
      <td>Yodeya</td>
      <td><span class="pronunciation">yoh-DEH-yah</span></td>
      <td>Recognize the full worth of, be grateful for (something), or understand (a situation) fully; recognize the full implications of.</td>
      <td>Verb</td>
    </tr>
    <tr>
      <td>Are</td>
      <td>Jaboe</td>
      <td><span class="pronunciation">Jah-boo-eh</span></td>
      <td>Second person singular present and first, second, third person plural present of be.</td>
      <td>Verb (present plural of "be")</td>
    </tr>
    <tr>
      <td>As</td>
      <td>Eyk</td>
      <td><span class="pronunciation">eeyk</span></td>
      <td>Used in comparisons to refer to the extent or degree of something.</td>
      <td>Conjunction, Preposition</td>
    </tr>
    <tr>
      <td>Ashes</td>
      <td>Afkura</td>
      <td><span class="pronunciation">AHF-koo-rah</span></td>
      <td>From Aramaic efer + noun modifier; used adjectivally as "ashen"</td>
      <td>Noun</td>
    </tr>
    <tr>
      <td>Back</td>
      <td>Bihanae</td>
      <td><span class="pronunciation">bih-HAH-nay</span></td>
      <td>From Aramaic ܒܗܝܢܐ (bihina), spatial direction</td>
      <td>Noun, Adverb, Adjective, Verb</td>
    </tr>
    <tr>
      <td>Bars</td>
      <td>Garzema</td>
      <td><span class="pronunciation">GAHR-zeh-mah</span></td>
      <td>Physical barriers. From gader (fence)</td>
      <td>Noun, Verb (plural of "bar", or "bars someone")</td>
    </tr>
    <tr>
      <td>Be</td>
      <td>Havara</td>
      <td><span class="pronunciation">hah-VAH-rah</span></td>
      <td>To be (Aramaic: הֲוָה)</td>
      <td>Verb (infinitive)</td>
    </tr>
    <tr>
      <td>Been</td>
      <td>Havaraka</td>
      <td><span class="pronunciation">hah-VAH-rah kah</span></td>
      <td>Past participle of “be”</td>
      <td>Verb (past participle of "be")</td>
    </tr>
    <tr>
      <td>Boast</td>
      <td>Ge’alma</td>
      <td><span class="pronunciation">GEH-ahl-mah</span></td>
      <td>The act of prideful declaration</td>
      <td>Verb, Noun</td>
    </tr>
    <tr>
      <td>Born</td>
      <td>Khayaeka</td>
      <td><span class="pronunciation">khah-YAH-eh-kah</span></td>
      <td>From Khayae (to live) + adjectival particle -ka</td>
      <td>Adjective (past participle of "bear" in passive sense)</td>
    </tr>
    <tr>
      <td>Bound</td>
      <td>Qasarya</td>
      <td><span class="pronunciation">kah-SAR-yah</span></td>
      <td>Obligation/tethering. From verb Qasara (to tie)</td>
      <td>Adjective, Verb (past tense of "bind")</td>
    </tr>
    <tr>
      <td>Break</td>
      <td>Tabara</td>
      <td><span class="pronunciation">tah-BAH-rah</span></td>
      <td>To break (Aramaic: תָּבַר)</td>
      <td>Verb, Noun</td>
    </tr>
    <tr>
      <td>Breaking</td>
      <td>Tabarane</td>
      <td><span class="pronunciation">tah-BAH-rah-nay</span></td>
      <td>Progressive form of “break”</td>
      <td>Verb (present participle), Noun (gerund)</td>
    </tr>
    <tr>
      <td>Broken</td>
      <td>Suraiya</td>
      <td><span class="pronunciation">soo-RAI-yah</span></td>
      <td>Root adjective, from Aramaic shuraya (shattered)</td>
      <td>Verb (past participle), Adjective</td>
    </tr>
    <tr>
      <td>Built</td>
      <td>Baneyaka</td>
      <td><span class="pronunciation">bah-NEH-yah kah</span></td>
      <td>Past of “build” (Aramaic: בְּנֵי)</td>
      <td>Verb (past tense and participle of "build")</td>
    </tr>
    <tr>
      <td>But</td>
      <td>Ayeki</td>
      <td><span class="pronunciation">AY-eh-kee</span></td>
      <td>“Except,” used to contrast or exclude. From Aramaic ܐܝܟ (eyk)</td>
      <td>Conjunction, Preposition (rare), Adverb</td>
    </tr>
    <tr>
      <td>Calling</td>
      <td>Qeramta</td>
      <td><span class="pronunciation">keh-RAHM-tah</span></td>
      <td>A spiritual or internal summons. From Qeraya (to call)</td>
      <td>Verb (present participle), Noun (gerund)</td>
    </tr>
    <tr>
      <td>Can</td>
      <td>V’n^sa</td>
      <td><span class="pronunciation">vain-SHAH</span></td>
      <td>Modal verb, “can” or “able to”</td>
      <td>Verb (modal), Noun (object, e.g. soda can)</td>
    </tr>
    <tr>
      <td>Climbing</td>
      <td>Salakane</td>
      <td><span class="pronunciation">sah-LAH-kah-nay</span></td>
      <td>Progressive form of “climb”</td>
      <td>Verb (present participle), Noun</td>
    </tr>
    <tr>
      <td>Come</td>
      <td>Atara</td>
      <td><span class="pronunciation">AH-tah-rah</span></td>
      <td>To come (Aramaic: אֲתָא)</td>
      <td>Verb</td>
    </tr>
    <tr>
      <td>Could</td>
      <td>V’n^saka</td>
      <td><span class="pronunciation">Vain-SHAH- kah</span></td>
      <td>Used to indicate possibility, past of can.</td>
      <td>Verb (modal)</td>
    </tr>
    <tr>
      <td>Cry</td>
      <td>Bakhaya</td>
      <td><span class="pronunciation">bah-KHAH-yah</span></td>
      <td>To cry, weep (Aramaic: בָּכָה)</td>
      <td>Verb, Noun</td>
    </tr>
    <tr>
      <td>Dark/Shadow</td>
      <td>Lomhasa</td>
      <td><span class="pronunciation">lo-mḥa-sha</span></td>
      <td>Aarak “lomu” (dark) + Aramaic “ḥešokh” (חשך) (darkness) → lo-mḥa-sha
        Describes both physical shadow and metaphorical gloom.</td>
      <td>Noun, Adjective</td>
    </tr>
  </tbody>
</table>

<h2 class="section-title">English Phrase Examples</h2>
<table>
  <thead>
    <tr>
      <th>English Phrase</th>
      <th>Aza’raan Phrase</th>
      <th>Pronunciation</th>
      <th>Literal Meaning / Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>My name is [Name], my pronouns are [Pronouns]</td>
      <td>Anokila Samana  He’ [Name], Anokila tepaari Jaboe [Pronouns]</td>
      <td><span class="pronunciation">/AH-noh-kee-lah/ /shah-man-ah/ /hee-ai/ [name], /AH-noh-kee-lah/ /teh-pah-ah-ree/ /jah-boo-ee/ [Pronouns]</span></td>
      <td>My name is [Name], my pronouns are [Pronouns]</td>
    </tr>
    <tr>
      <td>Nice to meet you</td>
      <td>Jesku laha pagasa etan</td>
      <td><span class="pronunciation">/Jesh-koo/ /LAH-hah/ /pah-GAH-shah/ /EH-tahn/</span></td>
      <td>Nice to meet you</td>
    </tr>
    <tr>
      <td>Where are you from?</td>
      <td>? Eyka jaboe etan minu.</td>
      <td><span class="pronunciation">/AY-kah/ /Jah-boo-eh/ /EH-tahn/ /MEE-noo/</span></td>
      <td>Where are you from?</td>
    </tr>
    <tr>
      <td>Thank you so much</td>
      <td>Yodeya etan hakena te`m’leo</td>
      <td><span class="pronunciation">Yoh-DEH-yah /EH-tahn/ /HAH-keh-nah/ /TEE-mai-leh-oo/</span></td>
      <td>Thank you so much</td>
    </tr>
    <tr>
      <td>I appreciate [X]</td>
      <td>Anoki yodeya [X]</td>
      <td><span class="pronunciation">/AH-noh-kee/ /yoh-DEH-yah/ [X]</span></td>
      <td>I appreciate [X]</td>
    </tr>
    <tr>
      <td>Excuse me</td>
      <td>Selika anoki</td>
      <td><span class="pronunciation">/seh-LEE-kah/ /AH-noh-kee/</span></td>
      <td>Excuse me</td>
    </tr>
    <tr>
      <td>I’m sorry</td>
      <td>Anoki~hue twa</td>
      <td><span class="pronunciation">/AH-noh-kee-HOO-eh/ /twah/</span></td>
      <td>I’m sorry</td>
    </tr>
    <tr>
      <td>What do you think?</td>
      <td>? Midam avada etan khashava.</td>
      <td><span class="pronunciation">/Mih-dahm/ /ah-VAH-dah/ /EH-tahn/ /kha-SHAH-vah/</span></td>
      <td>What do you think?</td>
    </tr>
    <tr>
      <td>I don’t understand</td>
      <td>Anoki niavada minase`ka</td>
      <td><span class="pronunciation">/AH-noh-kee/ /nee-ah-VAH-dah / /mi-na-SHE-ka/</span></td>
      <td>I don’t understand</td>
    </tr>
    </table>
  </tbody>
<section>
  <h2>🕒 Timekeeping in Aza’ra</h2>

  <h3>🌙 The Celestial Moons</h3>
  <p>
    Aza’ra has no sun. Instead, three mystical moons orbit within the Veil, dictating light, tides, and time:
  </p>
  <ul>
    <li><strong>Duvaen</strong> — Crimson moon of clarity and rebirth, rising over Dakaroth.</li>
    <li><strong>W’iosamn</strong> — Luminous force of balance and growth, peaking over Tzaphaer.</li>
    <li><strong>Arvalla</strong> — Storm-veiled moon of dreams and change, ascending over Arzuhan.</li>
  </ul>

  <h3>🕰️ The Aza’ran Day Cycle</h3>
  <p>
    Aza’ra’s day spans <strong>21 hours</strong>, divided into <strong>three 7-hour arcs</strong>, each named for its moon.
  </p>
  <ul>
    <li><strong>Ae Hours (1Ae–7Ae)</strong> — Morning: clarity, ambition, and new beginnings.</li>
    <li><strong>W’i Hours (1W’i–7W’i)</strong> — Midday: growth, creativity, and decision-making.</li>
    <li><strong>La Hours (1La–7La)</strong> — Night: dreams, introspection, and spiritual resonance.</li>
  </ul>
  <p>After 7La, the cycle renews as Duvaen rises again.</p>

  <h3>📊 Time Notation in Aza’raan Speech</h3>
  <p>
    Time is denoted using a number + moon code system. Below are examples:
  </p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Hour</th>
        <th>Time Format</th>
        <th>Pronunciation</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1st Hour</td><td>1Ae</td><td>Ih-aye</td><td>"Morning at Hour 1"</td></tr>
      <tr><td>7th Hour</td><td>7Ae</td><td>Reh-aye</td><td>"Morning at Hour 7"</td></tr>
      <tr><td>8th Hour</td><td>1W’i</td><td>Ih-Wee-ai-ee</td><td>"Midday at Hour 1"</td></tr>
      <tr><td>14th Hour</td><td>7W’i</td><td>Reh-Wee-ai-ee</td><td>"Midday at Hour 7"</td></tr>
      <tr><td>15th Hour</td><td>1La</td><td>Ih-lah</td><td>"Night at Hour 1"</td></tr>
      <tr><td>21st Hour</td><td>7La</td><td>Reh-lah</td><td>"Night at Hour 7"</td></tr>
    </tbody>
  </table>

  <h3>🌠 Cultural Associations</h3>
  <ul>
    <li><strong>Morning (Ae)</strong> — Renewal, courage, initiative</li>
    <li><strong>Midday (W’i)</strong> — Balance, clarity, productivity</li>
    <li><strong>Night (La)</strong> — Dreams, wisdom, rest</li>
  </ul>
</section>
<section id="azaraan-hours">
  <h2>🕰️ Aza’raan Hour System</h2>
  <p>
    The Aza’raan day is divided into 21 hours across three lunar cycles—Duvaen (Morning), W’iosamn (Midday), and Arvalla (Night). Each hour has a unique name, pronunciation, associated moon, and spiritual or symbolic significance. Earth time conversions are listed for reference across major time zones.
  </p>

  <table>
    <thead>
      <tr>
        <th>Aza'raan Hour</th>
        <th>UTC</th>
        <th>CA (PDT)</th>
        <th>IL (CDT)</th>
        <th>NY (EDT)</th>
        <th>UK (BST)</th>
        <th>Palestine (EEST)</th>
        <th>India (IST)</th>
        <th>Japan (JST)</th>
        <th>Pronunciation</th>
        <th>Moon</th>
        <th>Notes / Meaning</th>
        <th>Earth UTC Range</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1Ae</td><td>00:40</td><td>17:40</td><td>19:40</td><td>20:40</td><td>01:40</td><td>03:40</td><td>06:10</td><td>09:40</td>
        <td>Ih-aye</td><td>Duvaen</td><td>Morning – Renewal and sharp awareness</td><td>00:40–02:25</td>
      </tr>
      <tr>
        <td>2Ae</td><td>02:24</td><td>19:24</td><td>21:24</td><td>22:24</td><td>03:24</td><td>05:24</td><td>07:54</td><td>11:24</td>
        <td>Neh-aye</td><td>Duvaen</td><td>Duality and awakening clarity</td><td>02:25–04:10</td>
      </tr>
      <tr>
        <td>3Ae</td><td>04:08</td><td>21:08</td><td>23:08</td><td>00:08</td><td>05:08</td><td>07:08</td><td>09:38</td><td>13:08</td>
        <td>Duh-aye</td><td>Duvaen</td><td>Progress into action</td><td>04:10–05:55</td>
      </tr>
      <tr>
        <td>4Ae</td><td>05:52</td><td>22:52</td><td>00:52</td><td>01:52</td><td>06:52</td><td>08:52</td><td>11:22</td><td>14:52</td>
        <td>Meh-aye</td><td>Duvaen</td><td>Structured activity begins</td><td>05:55–07:40</td>
      </tr>
      <tr>
        <td>5Ae</td><td>07:37</td><td>00:37</td><td>02:37</td><td>03:37</td><td>08:37</td><td>10:37</td><td>13:07</td><td>16:37</td>
        <td>Goh-aye</td><td>Duvaen</td><td>Steady flow of the morning</td><td>07:40–09:25</td>
      </tr>
      <tr>
        <td>6Ae</td><td>09:21</td><td>02:21</td><td>04:21</td><td>05:21</td><td>10:21</td><td>12:21</td><td>14:51</td><td>18:21</td>
        <td>Ohm-aye</td><td>Duvaen</td><td>Cyclical rhythm emerges</td><td>09:25–11:10</td>
      </tr>
      <tr>
        <td>7Ae</td><td>11:05</td><td>04:05</td><td>06:05</td><td>07:05</td><td>12:05</td><td>14:05</td><td>16:35</td><td>20:05</td>
        <td>Reh-aye</td><td>Duvaen</td><td>Transition before midday</td><td>11:10–12:55</td>
      </tr>

      <tr>
        <td>1W’i</td><td>12:50</td><td>05:50</td><td>07:50</td><td>08:50</td><td>13:50</td><td>15:50</td><td>18:20</td><td>21:50</td>
        <td>Ih-wee-ai-ee</td><td>W’iosamn</td><td>High energy and brightness</td><td>12:55–14:40</td>
      </tr>
      <tr>
        <td>2W’i</td><td>14:34</td><td>07:34</td><td>09:34</td><td>10:34</td><td>15:34</td><td>17:34</td><td>20:04</td><td>23:34</td>
        <td>Neh-wee-ai-ee</td><td>W’iosamn</td><td>Harmonizing dual tasks</td><td>14:40–16:25</td>
      </tr>
      <tr>
        <td>3W’i</td><td>16:18</td><td>09:18</td><td>11:18</td><td>12:18</td><td>17:18</td><td>19:18</td><td>21:48</td><td>01:18</td>
        <td>Duh-wee-ai-ee</td><td>W’iosamn</td><td>Dynamic momentum peaks</td><td>16:25–18:10</td>
      </tr>
      <tr>
        <td>4W’i</td><td>18:02</td><td>11:02</td><td>13:02</td><td>14:02</td><td>19:02</td><td>21:02</td><td>23:32</td><td>03:02</td>
        <td>Meh-wee-ai-ee</td><td>W’iosamn</td><td>Stability amid intensity</td><td>18:10–19:55</td>
      </tr>
      <tr>
        <td>5W’i</td><td>19:47</td><td>12:47</td><td>14:47</td><td>15:47</td><td>20:47</td><td>22:47</td><td>01:17</td><td>04:47</td>
        <td>Goh-wee-ai-ee</td><td>W’iosamn</td><td>Balanced effort and influence</td><td>19:55–21:40</td>
      </tr>
      <tr>
        <td>6W’i</td><td>21:31</td><td>14:31</td><td>16:31</td><td>17:31</td><td>22:31</td><td>00:31</td><td>03:01</td><td>06:31</td>
        <td>Ohm-wee-ai-ee</td><td>W’iosamn</td><td>Flow and continuation</td><td>21:40–23:25</td>
      </tr>
      <tr>
        <td>7W’i</td><td>23:15</td><td>16:15</td><td>18:15</td><td>19:15</td><td>00:15</td><td>02:15</td><td>04:45</td><td>08:15</td>
        <td>Reh-wee-ai-ee</td><td>W’iosamn</td><td>Final midday phase</td><td>23:25–01:10</td>
      </tr>

      <tr>
        <td>1La</td><td>01:00</td><td>18:00</td><td>20:00</td><td>21:00</td><td>02:00</td><td>04:00</td><td>06:30</td><td>10:00</td>
        <td>Ih-lah</td><td>Arvalla</td><td>Mystery and contemplation</td><td>01:10–02:55</td>
      </tr>
      <tr>
        <td>2La</td><td>02:44</td><td>19:44</td><td>21:44</td><td>22:44</td><td>03:44</td><td>05:44</td><td>08:14</td><td>11:44</td>
        <td>Neh-lah</td><td>Arvalla</td><td>Dreams and reflection</td><td>02:55–04:40</td>
      </tr>
      <tr>
        <td>3La</td><td>04:28</td><td>21:28</td><td>23:28</td><td>00:28</td><td>05:28</td><td>07:28</td><td>09:58</td><td>13:28</td>
        <td>Duh-lah</td><td>Arvalla</td><td>Movement within hidden realms</td><td>04:40–06:25</td>
      </tr>
      <tr>
        <td>4La</td><td>06:12</td><td>23:12</td><td>01:12</td><td>02:12</td><td>07:12</td><td>09:12</td><td>11:42</td><td>15:12</td>
        <td>Meh-lah</td><td>Arvalla</td><td>Introspection and silence</td><td>06:25–08:10</td>
      </tr>
      <tr>
        <td>5La</td><td>07:57</td><td>00:57</td><td>02:57</td><td>03:57</td><td>08:57</td><td>10:57</td><td>13:27</td><td>16:57</td>
        <td>Goh-lah</td><td>Arvalla</td><td>Inner clarity and center</td><td>08:10–09:55</td>
      </tr>
      <tr>
        <td>6La</td><td>09:41</td><td>02:41</td><td>04:41</td><td>05:41</td><td>10:41</td><td>12:41</td><td>15:11</td><td>18:41</td>
        <td>Ohm-lah</td><td>Arvalla</td><td>Echoes and time loops</td><td>09:55–11:40</td>
      </tr>
      <tr>
        <td>7La</td><td>11:25</td><td>04:25</td><td>06:25</td><td>07:25</td><td>12:25</td><td>14:25</td><td>16:55</td><td>20:25</td>
        <td>Reh-lah</td><td>Arvalla</td><td>Veil between worlds thins</td><td>11:40–13:25</td>
      </tr>
    </tbody>
  </table>
</section>
</section>
  <h2>Aza’raan Days Of The Week</h2>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Day</th>
        <th>Aza'raan Word</th>
        <th>Pronunciation</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Raethan</td><td>Rae-than</td><td>Day of Judgment (Dedicated to Raethelis, the Arbiter of Law and Order)</td></tr>
      <tr><td>2</td><td>Kaeltharnis</td><td>Kayl-THAR-nish</td><td>Day of Craftsmanship and Industry (Honoring Kaelthar, The Eternal Forgemaster)</td></tr>
      <tr><td>3</td><td>Nyxarion</td><td>NICKS-ah-ree-on</td><td>Day of Time and Transition (Dedicated to Nyxariel, The Eternal Gatherer)</td></tr>
      <tr><td>4</td><td>Zephiren</td><td>ZEH-fi-ren</td><td>Day of Wind and Magic (Celebrating Zephyra, The Mistress of the Aether)</td></tr>
      <tr><td>5</td><td>Eryndralis</td><td>EH-rin-DRAH-lish</td><td>Day of Growth and Renewal (Honoring Eryndria, The Verdant Flame)</td></tr>
      <tr><td>6</td><td>Vulkiren</td><td>VUHL-kee-ren</td><td>Day of Rebellion and Transformation (Inspired by Vulkiris, The Warden of Discord)</td></tr>
    </tbody>
  </table>

  <h2>🌒 Aza’raan Calendar – 10 Sacred Months</h2>
  <p>Each month is born from the divine essence of Aza'ra’s sacred moons and patron forces. The names are not remnants—they are original fusions of celestial influence and deific guidance.</p>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Month #</th>
        <th>Aza'raan Name</th>
        <th>Pronunciation</th>
        <th>Naming Origin (Fusion Elements)</th>
        <th>Essence &amp; Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Eryphiren</td>
        <td>Eh-rif-i-ren</td>
        <td>Growth + Wind Magic (Eryndria + Zephyra)</td>
        <td>Celebrating blossoming potential, this month channels the vitality of nature with the breath of arcane transformation. Air and life dance as one.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Kaelvalla</td>
        <td>Kayl-val-la</td>
        <td>Forge + Storm (Kaelthar + Arvalla)</td>
        <td>A time for creation under pressure. Storms spark inspiration as flame shapes form—this month honors craftsmanship, innovation, and elemental change.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Morrkhanis</td>
        <td>Mor-kha-nish</td>
        <td>Ocean Depth + Fate (Morrigaen + Selkhanis)</td>
        <td>Known as the Tide of Truth, this month governs intuition, transitions, and hidden wisdom. Dreams swell with destiny as tides shift the soul’s direction.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Wiosaneth</td>
        <td>Wee-o-san-eth</td>
        <td>Balance + Strife (W’iosamn + Vulkiris)</td>
        <td>The Month of Duality. Harmony and discord hold equal sway. A time to weigh rebellion against order, with the moon casting calm light on internal conflict.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Myktheron</td>
        <td>My-kthay-ron</td>
        <td>Secrets + Cosmic Equilibrium (Myrekh + Aetheron)</td>
        <td>Dedicated to the unseen and the in-between. This month fosters introspection, spiritual alignment, and the veiled balance between opposing forces.</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Nyxarion</td>
        <td>Nicks-ah-ree-on</td>
        <td>Time + Endings (Nyxariel)</td>
        <td>The Cycle’s Shadow. Marked by reflection, closure, and renewal, this month encourages preparation for what follows the end.</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Raevulkis</td>
        <td>Rae-vuhl-kis</td>
        <td>Judgment + Rebellion (Raethelis + Vulkiris)</td>
        <td>The Month of Reckoning. Righteous fury meets divine law—change through accountability, revolution tempered by clarity.</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Zephkhaelis</td>
        <td>Zeph-kay-lish</td>
        <td>Wind + Craft (Zephyra + Kaelthar)</td>
        <td>A season of brilliant invention. Inspired by arcane winds and artisanship, this month marks magical creation and imaginative expansion.</td>
      </tr>
    </tbody>
  </table>

  <h2>Aza’raan Calendar Structure</h2>
  <table border="1" cellspacing="0" cellpadding="6">
    <tbody>
      <tr><td>Days per Month</td><td>30</td></tr>
      <tr><td>Months per Year</td><td>8</td></tr>
      <tr><td>Days per Week</td><td>6</td></tr>
      <tr><td>Hours per Day</td><td>21 (split into 3 periods)</td></tr>
      <tr><td>Work Week Structure</td><td>3-day work week per person</td></tr>
      <tr><td>Workday Length</td><td>7 hours (legal/cultural)</td></tr>
      <tr><td>Light Source Pattern</td><td>The dying sun emits a consistent dim glow, while the moons dictate the visual cycle, shifting illumination throughout the day.</td></tr>
    </tbody>
  </table>

  <p>
    <strong>Description:</strong><br>
    The Aza’raan calendar follows a structured 8-month cycle, with each month containing 30 days. Time operates on a 6-day week, ensuring balance within daily life rhythms. The 21-hour day is divided into three distinct periods, shaping cultural and occupational cycles.<br>
    The workweek system incorporates 3-day rotations, ensuring sustainability and alignment with natural cycles, reducing strain while maintaining productivity. Additionally, the diminishing sun creates a perpetual twilight, making the phases of Duvaen, W’iosamn, and Arvalla central to daily life and visual perception.
  </p>
</section>
<section>
  <h2>Numbers in Aza’ra</h2>
  <p>
    Numbers in Aza’ra are more than mere symbols; they are echoes of the cosmic forces that shape existence. Rooted in divine balance and celestial cycles, the numerical system embodies structured harmony, flowing seamlessly through language, culture, and ritual.<br>
    Each numeral carries distinct phonetic and symbolic weight, reflecting the interplay between order and change, stability and progression. Whether marking time, recording history, or shaping ritualistic invocations, numbers in Aza’raan are imbued with meaning, forming a bridge between the tangible and the metaphysical.<br>
    Below, you’ll find the structured framework of Aza’raan’s numeric system, complete with its linguistic formation, symbolic associations, and phonetic elegance.
  </p>

  <h3>Aza’raan Number System</h3>
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Number</th>
        <th>Aza'raan Word</th>
        <th>Pronunciation</th>
        <th>Aza’raan Glyph</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>0</td><td>‘Oh</td><td>Oh</td><td>0</td><td>Represents nothingness, the cyclical nature of time.</td></tr>
      <tr><td>1</td><td>Ih</td><td>Ih</td><td>1</td><td>Shortened and sharp to distinguish from vowel use in words.</td></tr>
      <tr><td>2</td><td>Neh</td><td>Neh</td><td>2</td><td>Symbolizes duality, balance, and opposition.</td></tr>
      <tr><td>3</td><td>Duh</td><td>Duh</td><td>3</td><td>Represents progression and movement.</td></tr>
      <tr><td>4</td><td>Meh</td><td>Meh</td><td>4</td><td>Emphasizes stability and structure.</td></tr>
      <tr><td>5</td><td>Goh</td><td>Goh</td><td>5</td><td>Central tone, marking the midpoint in numerical flow.</td></tr>
      <tr><td>6</td><td>Ohm</td><td>Ohm</td><td>6</td><td>Reflects continuity and circular cycles.</td></tr>
      <tr><td>7</td><td>Reh</td><td>Reh</td><td>7</td><td>Lightly rolled “R,” symbolizing forward movement.</td></tr>
      <tr><td>8</td><td>Zah</td><td>Zah</td><td>8</td><td>Sharp and distinct, representing change and power.</td></tr>
      <tr><td>9</td><td>Shah</td><td>Shah</td><td>9</td><td>Soft yet final, marking the completion of a cycle.</td></tr>
    </tbody>
  </table>

  <h3>Number Formation Rules</h3>
  <ul>
    <li><strong>Teen Numbers (11–19):</strong> Formed by adding Za to the base number (e.g., Za-neh for 12).</li>
    <li><strong>Tens (20, 30, 40, etc.):</strong> Each decade begins with a unique marker:
      <ul>
        <li>Twenty → ‘ (e.g., Ai-neh for 20).</li>
        <li>Thirty → B (e.g., Bah-duh for 30).</li>
        <li>Forty → H (e.g., ee-ee-keh for 40).</li>
        <li>Fifty → Ends with D (e.g., Goh-d for 50).</li>
        <li>Sixty → Begins with M (e.g., Meh-ohm for 60).</li>
        <li>Seventy → Begins with V (e.g., Vah-reh for 70).</li>
        <li>Eighty → Ends with F (e.g., Zah-f for 80).</li>
        <li>Ninety → Begins with P (e.g., Pee-shah for 90).</li>
      </ul>
    </li>
    <li><strong>Hundreds (100–900):</strong> Always begins with Janu Jah-new (e.g., Janu-ih for 100, Janu-duh for 300).</li>
    <li><strong>Thousands (1,000–9,000):</strong> Always ends with Chab Chah-b (e.g., Ih-chab for 1,000, Reh-chab for 7,000).</li>
    <li><strong>Millions:</strong> Always ends with Ailakur Ail-ah-kur (e.g., Neh-ailakur for 2 million).</li>
  </ul>

  <h3>General Rules for Number Formation</h3>
  <ul>
    <li><strong>Descending Order:</strong> Numbers are structured from largest value to smallest (e.g., millions → thousands → hundreds → tens → units).</li>
    <li><strong>No Extra Markers:</strong> Components are combined directly without connectors.</li>
    <li><strong>Pronunciation Harmony:</strong> Each component flows seamlessly, maintaining melodic rhythm in speech.</li>
  </ul>
</section>
<section>
  <h2>✨ Aza’raan Lexicon Showcase</h2>
  <p><em>These words exemplify the expressive depth, fusion of cultures, and spiritual cadence of the Aza’raan language.</em></p>
  
  <table>
    <thead>
      <tr>
        <th>English Word</th>
        <th class="glyph">Aza’raan Word</th>
        <th>Pronunciation</th>
        <th>Definition / Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>All</td>
        <td class="glyph">Kulahmi</td>
        <td>Koo-lah-mee</td>
        <td>From <strong>kulah</strong> (whole) + plural modifier <strong>-mi</strong></td>
      </tr>
      <tr>
        <td>Dark / Shadow</td>
        <td class="glyph">Lomhasa</td>
        <td>lo-mḥa-sha</td>
        <td>Physical and spiritual darkness; Aarak + Aramaic fusion</td>
      </tr>
      <tr>
        <td>Destiny / Fate</td>
        <td class="glyph">Loze’ka</td>
        <td>Loh-ZAI-kah</td>
        <td>Fated outcome or cosmic alignment</td>
      </tr>
      <tr>
        <td>Ignite</td>
        <td class="glyph">Sarafa</td>
        <td>sah-RAH-fah</td>
        <td>To spark, burn, or initiate; raw creative power</td>
      </tr>
      <tr>
        <td>Unbreakable</td>
        <td class="glyph">Nisuraiyaka</td>
        <td>nee-soo-RAI-yah-kah</td>
        <td><strong>ni</strong> (not) + <strong>suraiya</strong> (broken) + intensifier</td>
      </tr>
      <tr>
        <td>Dream</td>
        <td class="glyph">Hahlon</td>
        <td>HAH-lohn</td>
        <td>Vision in sleep or prophecy</td>
      </tr>
      <tr>
        <td>Fearless</td>
        <td class="glyph">Dahalae’ni</td>
        <td>dah-HAH-lay-nee</td>
        <td><strong>Dahalae</strong> (fear) + <strong>ni</strong> (not)</td>
      </tr>
      <tr>
        <td>Heart</td>
        <td class="glyph">Lebeha</td>
        <td>leh-BEH-hah</td>
        <td>Emotional/spiritual core</td>
      </tr>
      <tr>
        <td>Lightning</td>
        <td class="glyph">Barika</td>
        <td>bah-REE-kah</td>
        <td>Flash of divine or sky energy</td>
      </tr>
      <tr>
        <td>Recreate</td>
        <td class="glyph">Baneya-Tuvaya</td>
        <td>bah-NEH-yah-too-VAH-yah</td>
        <td>To build again—rebirth and renewal</td>
      </tr>
      <tr>
        <td>Whisper</td>
        <td class="glyph">Khasasa</td>
        <td>khah-SAH-sah</td>
        <td>Sacred murmur or secret knowledge</td>
      </tr>
      <tr>
        <td>Surrender</td>
        <td class="glyph">Savaqa</td>
        <td>sah-VAH-kah</td>
        <td>To release, let go, or yield</td>
      </tr>
      <tr>
        <td>Voice / Word</td>
        <td class="glyph">Dovrah</td>
        <td>DOHV-rah</td>
        <td>Uttered truth; sacred speech</td>
      </tr>
      <tr>
        <td>Understand</td>
        <td class="glyph">Minaseka</td>
        <td>mi-na-SHE-ka</td>
        <td>Deep comprehension—mental and emotional</td>
      </tr>
      <tr>
        <td>Spirit / Ghost</td>
        <td class="glyph">Ruklim</td>
        <td>ROOK-leem</td>
        <td>Disembodied soul; ancestral echo</td>
      </tr>
    </tbody>
  </table>
</section>
</body>
<!-- 
© Aza’ra™ and Aza’raan™ Language System
Created by William Blake Saville (aka #TheTransgenderTRex)

To explore Aza’raan’s lore and purpose, visit the README:
https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/README.md

For updates, full lore, and to support a low-income, autistic, bedridden trans man:
http://www.linktr.ee/thetransgendertrex
-->
</html> 
