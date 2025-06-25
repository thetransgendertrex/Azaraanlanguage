<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Aza’raan Language Integration Guide</title>

  <!-- External Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Language%20Font%20CSS.css">

  <style>
    /* Local fallback font-face in case external CSS fails */
    @font-face {
      font-family: 'Azaraan';
      src: url('https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/main/Aza%27raan%20Planet%20Language.ttf') format('truetype');
    }

    body {
      font-family: "Times New Roman", Times, serif;
      margin: 2rem;
      background: #fafafa;
      color: #222;
      line-height: 1.6;
    }

    h1, h2, h3 {
      font-family: "Times New Roman", Times, serif;
      color: #4b2e83;
    }

    .azaraan,
    [style*="font-family: Pacifico"] {
      font-family: 'Azaraan', cursive !important;
      font-size: 2em;
      color: #70389c;
    }

    .pacifico {
      font-family: 'Pacifico', cursive;
      font-size: 1.3em;
      color: #999;
    }

    code {
      background: #eee;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: monospace;
    }

    .section {
      margin-bottom: 2rem;
    }

    .block {
      padding: 1rem;
      background: #fff;
      border-left: 4px solid #4b2e83;
      margin: 1rem 0;
    }

    a {
      color: #4b2e83;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .monospace {
      font-family: monospace;
    }

    /* Glyph Table Styles */
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1em;
    }

    th, td {
      border: 1px solid #ccc;
      padding: 12px;
      vertical-align: top;
      text-align: left;
      font-family: "Times New Roman", Times, serif;
    }

    th {
      background-color: #f0f0f0;
    }

    td.glyph {
      font-family: 'Azaraan', cursive;
      font-size: 1.3em;
      text-align: center;
    }

    p.note {
      font-style: italic;
      margin-bottom: 1em;
    }
  </style>
</head>

<body>

<noscript><p><strong>Note:</strong> The custom Aza’raan glyphs require JavaScript and the custom font to be displayed correctly.</p></noscript>

<h1>🔡 Aza'raan Overrides Pacifico in Google Docs & Drive Apps</h1>
<p><strong>By William Saville</strong> (aka <strong>#TheTransgenderTRex</strong>)</p>

<div class="section">
  <h2>💾 Font File Location</h2>
  <p>Language font file:
    <a href="https://github.com/thetransgendertrex/Azaraanlanguage/blob/main/Aza%27raan%20Planet%20Language.ttf" target="_blank">Download Aza'raan.ttf</a>
  </p>
</div>

<div class="section">
  <h2>🧩 Font Override System</h2>
  <div class="block">
    <strong>CSS:</strong><br>
    <a href="https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/Aza'raan%20Language%20Font%20CSS" target="_blank">Aza'raan Language Font CSS</a><br><br>
    <strong>JavaScript:</strong><br>
    <a href="https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/Aza'raan%20Language%20Font%20Javascript" target="_blank">Aza'raan Language Font Javascript</a><br><br>
    <strong>Chrome Extension Script:</strong><br>
    <a href="https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/override.js" target="_blank">override.js</a><br><br>
    <strong>Manifest File:</strong><br>
    <a href="https://raw.githubusercontent.com/thetransgendertrex/Azaraanlanguage/refs/heads/main/Manifest.json" target="_blank">Manifest.json</a><br><br>
    These replace all uses of "Pacifico" in Google Docs, Slides, Drawings, Forms, Sheets, and Drive Apps with Aza'raan.
  </div>
</div>

<div class="section">
      <h2>🎙️ The Voice of Aza’ra</h2>
    <p><em>Introduction by William Blake Saville, Creator of Aza’raan</em></p>
    <p>Language is never just a system of words. It is a living current—a vessel of culture, a marker of memory, and a declaration of identity. When I set out to create the language of Aza’ra, I didn’t just want something that sounded beautiful. I wanted something that meant something. Something that held space for transformation, for fluidity, for truth. Thus, Aza’raan was born—a fusion of the mystical, vowel-rich cadence of Aarak and the disciplined, ancient structure of Aramaic.</p>

    <p>Aza’raan is not designed to dominate speech—it’s built to liberate it.</p>

    <p>Where other languages often bind identity to static labels, Aza’raan affirms it as fluid and sacred. Every sentence is an act of remembering. Every name spoken is a reclamation. In this world, people introduce themselves not once, but always—because who you are should never be assumed, only honored.</p>

    <h3>🌀 A Language Forged in Survival and Unity</h3>
    <p>Aza’raan carries the legacy of two peoples:</p>
    <ul>
      <li><strong>The Aaraks</strong>, whose language flowed like song—long vowels, open syllables, natural rhythm.</li>
      <li><strong>The Aramaics</strong>, who brought glyphic clarity, symbolic meaning, and spiritual cadence.</li>
    </ul>
    <p>When Aarak fell into ruin—its sun drained by invaders, its crust shattered by flares—it was the Aramaics who helped anchor its fragments in the sky, weaving the magical Veil that held the planet together. In the wake of that cataclysm, the survivors renamed their world <strong>Aza’ra</strong>, meaning “to help.”</p>

    <h3>🔡 Sound with Soul: Phonology that Means Something</h3>
    <ul>
      <li>Capital <strong>S</strong> is a sharp /s/ as in <em>sea</em>.</li>
      <li>Lowercase <strong>s</strong> is a soft /ʃ/ as in <em>shimmer</em>.</li>
      <li>Glottal stop <code>‘</code> is sometimes silent, or becomes <code>‘Ai</code> — a shimmer of divine breath.</li>
    </ul>

    <h3>✍️ A System That Respects the Self</h3>
    <ul>
      <li><strong>Shayalu (~):</strong> lets words flow naturally.</li>
      <li><strong>Particles:</strong> <code>va</code> (emphasis), <code>ni</code> (negation).</li>
      <li><strong>Honorifics:</strong> like <code>Do-</code> for respectful roles—never before pronouns.</li>
    </ul>

    <h3>💞 Built for Inclusivity</h3>
    <p>Aza’raan refuses grammatical gender by default. Pronouns are introduced and affirmed, not assumed. The language evolves with the speaker. It holds space for your becoming.</p>

    <blockquote><strong>If you’re reading this, you’re not just learning a language. You’re stepping into a world where names are sacred, voice is power, and every sentence can carry your truth forward.</strong></blockquote>

    <p><strong>So welcome.<br>
    Speak gently.<br>
    Speak proudly.<br>
    And may Aza’raan speak to you.</strong></p>

    <h2>🌀 Aza’raan Glyph & Symbol Table</h2>
    <p class="note">Note: All characters in the <strong>Glyph</strong> column are displayed in <span class="azaraan">Aza'raan</span> (replacing Pacifico). The rest remains in standard English for clarity.</p>

    <table>
      <thead>
        <tr>
          <th>Glyph</th>
          <th>Aramaic Name</th>
          <th>Latin Equivalent</th>
          <th>Pronunciation</th>
          <th>Notes on Usage</th>
        </tr>
      </thead>
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
  <div class="section">
    <h2>🧪 Demo Area: Font Behavior Preview</h2>

    <p><strong>This section shows a side-by-side comparison of how text looks in <a href="https://fonts.google.com/specimen/Pacifico" target="_blank">Pacifico</a> vs. how it appears after being overridden with the custom Aza’raan font I created.</strong> This helps visualize the transformation within Google Docs and related apps.</p>

    <h3>🌸 Original Pacifico Example</h3>
    <p class="pacifico" style="font-family: 'Pacifico', cursive !important; font-size: 1.6em; color: #666;">
      This is what Pacifico looked like before override.
    </p>

    <h3>🔮 Aza'raan Font Preview (Overrides Pacifico)</h3>
    <p class="azaraan" style="font-family: 'Azaraan', cursive !important; font-size: 2em; color: #70389c;">
      Aza’ralo hue ni tsurayaka laha sa’lai miil'las - yani~hue baneyaka laha p’dai’ra yani.
    </p>

    <p><em>This line is written in the custom <a href="https://github.com/thetransgendertrex/Azaraanlanguage/blob/main/Aza%27raan%20Planet%20Language.ttf" target="_blank">Aza’raan font</a> I designed to fully replace Pacifico in supported Google Drive applications.</em></p>

    <p>Translated, it means: <strong>“Aza’raan is not designed to dominate speech - it’s built to liberate it.” Which is the quote from above.</strong></p> 

</body>
</html> 
