    # urduwind

# UrduWind 🇵🇰

**Urdu Roman CSS Utility Framework** — Tailwind jaisa kaam, apni zaban mein.
 
Write CSS classes in Urdu Roman script and style your HTML instantly.

html
<!-- Sirf yeh ek line add karo -->
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/urduwind@main/urduwind.js"></script>

<!-- Ab yeh sab kaam karega -->
<h1 class="mota-8 surkh darmiyan">Mera Heading</h1>
<p class="bara-4 surmai lakeer-5">Normal paragraph text</p>
<button class="pichay-neela safed gol faasla-x-6 faasla-y-3 mota naram hover-pichay-gehri-neela haath">
  Click Karo
</button>
```

---

## Installation

### CDN (Recommended)
```html
<script src="https://cdn.jsdelivr.net/gh/YOUR-USERNAME/urduwind@main/urduwind.js"></script>
```

### Direct Download
Download `urduwind.js` and place it in your project folder:
```html
<script src="urduwind.js"></script>
```

---

## Quick Reference

### Typography (Likhai)
| Class | CSS |
|-------|-----|
| `mota` | font-weight: 700 |
| `mota-[1-9]` | bold + font-size scale |
| `patla` | font-weight: 300 |
| `bara-[1-9]` | font-size scale |
| `tirchi` | italic |
| `rekha` | underline |
| `kati-rekha` | line-through |
| `bara-harf` | uppercase |
| `chota-harf` | lowercase |
| `darmiyan` | text-align: center |
| `baen` | text-align: left |
| `daen` | text-align: right |
| `lakeer-[1-6]` | line-height |
| `door-door` | letter-spacing wide |

### Colors (Rang) — Text
`surkh` `gehri-surkh` `halki-surkh` `neela` `gehri-neela` `halka-neela` `hara` `gehri-hara` `peela` `narangi` `gulabi` `baingni` `ferozi` `asmani` `kala` `safed` `surmai` `halka-surmai` `gehri-surmai`

### Background (pichay-...)
```html
<div class="pichay-neela">   → blue background  </div>
<div class="pichay-surkh">   → red background   </div>
<div class="gradient-daen">  → gradient L→R     </div>
```

### Spacing
| Class | CSS |
|-------|-----|
| `faasla-[0-96]` | padding |
| `faasla-x-[N]` | padding left+right |
| `faasla-y-[N]` | padding top+bottom |
| `maargin-[0-96]` | margin |
| `maargin-auto` | margin: auto |
| `upar-faasla-[N]` | padding-top |
| `neeche-faasla-[N]` | padding-bottom |

### Layout
| Class | CSS |
|-------|-----|
| `laamba` | display: flex |
| `jaali-[1-12]` | grid N columns |
| `chupa` | display: none |
| `dikhao` | display: block |
| `seedhi-line` | flex-direction: row |
| `khari-line` | flex-direction: column |
| `darmiyan-lao` | justify-content: center |
| `door-karo` | justify-content: space-between |
| `seedh-mein` | align-items: center |
| `lapeto` | flex-wrap: wrap |
| `khala-[N]` | gap |

### Border & Radius
| Class | CSS |
|-------|-----|
| `haddi` | border: 1px solid |
| `haddi-2 / haddi-4` | border thickness |
| `haddi-toda` | dashed |
| `haddi-bindi` | dotted |
| `gol` | border-radius: 9999px (pill) |
| `thora-gol` | border-radius: 0.375rem |
| `zyada-gol` | border-radius: 0.75rem |

### Shadows (Saya)
`saya` `bari-saya` `gehri-saya` `bohat-gehri-saya` `andar-saya` `saya-nahi` `rang-saya-[rang]`

### Animations
`bounce` `ghoomna` `dhadkna` `hilna` `fadein`

### Hover
`hover-[rang]` `hover-pichay-[rang]` `hover-bara` `hover-uthao` `hover-saya`

### Transitions
`naram` (0.3s) `tez` (0.15s) `sust` (0.6s)

### Misc
`haath` (cursor pointer) `rok-do` (not-allowed) `chhupa-do` (overflow hidden) `scroll-karo` `fit-bharo` `fit-samao` `chuni-nahi` `pointer-nahi` `list-nahi`

---

## Real World Example

html
<!DOCTYPE html>
<html>
<head>
  <script src="urduwind.js"></script>
</head>
<body class="pichay-bohat-halka min-screen">

  <!-- Navbar -->
  <nav class="pichay-kala safed faasla-x-8 faasla-y-4 laamba door-karo seedh-mein">
    <span class="mota-5">Meri Site</span>
    <div class="laamba khala-6">
      <a class="safed naram hover-surmai haath">Ghar</a>
      <a class="safed naram hover-surmai haath">About</a>
      <button class="pichay-neela safed faasla-x-4 faasla-y-2 thora-gol mota naram haath">
        Login
      </button>
    </div>
  </nav>

  <!-- Hero -->
  <section class="darmiyan faasla-20">
    <h1 class="mota-9 kala neeche-maargin-4">Assalam o Alaikum</h1>
    <p class="bara-5 surmai neeche-maargin-8">Pakistan ka pehla Urdu CSS framework</p>
    <button class="pichay-neela safed faasla-x-8 faasla-y-4 zyada-gol mota-5 naram hover-bara haath gehri-saya">
      Shuru Karo →
    </button>
  </section>

  <!-- Cards Grid -->
  <section class="jaali-3 khala-6 faasla-8" style="max-width:900px;margin:0 auto;">
    <div class="pichay-safed faasla-6 thora-gol bari-saya naram hover-uthao haath">
      <h3 class="mota-5 kala neeche-maargin-2">Aasaan</h3>
      <p class="surmai">Sirf Urdu words mein classes likho</p>
    </div>
    <div class="pichay-safed faasla-6 thora-gol bari-saya naram hover-uthao haath">
      <h3 class="mota-5 kala neeche-maargin-2">Tez</h3>
      <p class="surmai">Ek JS file, koi build tool nahi</p>
    </div>
    <div class="pichay-safed faasla-6 thora-gol bari-saya naram hover-uthao haath">
      <h3 class="mota-5 kala neeche-maargin-2">Apna</h3>
      <p class="surmai">Pakistan ka apna framework</p>
    </div>
  </section>

</body>
</html>
```

---

## License

MIT — Free for everyone to use, modify and share.

---

Made with ❤️ in Pakistan 🇵🇰
