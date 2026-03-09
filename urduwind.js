/*!
 * UrduWind v1.0.0
 * Urdu Roman CSS Utility Framework
 * https://github.com/your-username/urduwind
 * MIT License
 *
 * ==============================================
 * CLASS REFERENCE (Quick Cheat Sheet)
 * ==============================================
 *
 * TYPOGRAPHY
 *   mota              → font-weight: 700 (bold)
 *   mota-[1-9]        → bold + font-size scale
 *   patla             → font-weight: 300
 *   patla-[1-9]       → light + font-size scale
 *   bara-[1-9]        → font-size only
 *   tirchi            → italic
 *   seedha-likh       → normal font style
 *   rekha             → underline
 *   kati-rekha        → line-through
 *   rekha-nahi        → no decoration
 *   bara-harf         → uppercase
 *   chota-harf        → lowercase
 *   pehla-bara        → capitalize
 *   darmiyan          → text-align: center
 *   baen              → text-align: left
 *   daen              → text-align: right
 *   do-taraf          → text-align: justify
 *   lakeer-[1-5]      → line-height scale
 *   door-door         → letter-spacing wide
 *   paas-paas         → letter-spacing tight
 *   normal-faasla     → letter-spacing normal
 *   kaat-do           → text overflow ellipsis
 *   wrap-nahi         → white-space: nowrap
 *
 * COLORS (Text)
 *   surkh             → red-500
 *   gehri-surkh       → red-700
 *   halki-surkh       → red-300
 *   neela             → blue-500
 *   gehri-neela       → blue-700
 *   halka-neela       → blue-300
 *   hara              → green-500
 *   gehri-hara        → green-700
 *   halka-hara        → green-300
 *   peela             → yellow-500
 *   gehri-peela       → yellow-700
 *   narangi           → orange-500
 *   gehri-narangi     → orange-700
 *   gulabi            → pink-500
 *   gehri-gulabi      → pink-700
 *   baingni           → purple-500
 *   gehri-baingni     → purple-700
 *   ferozi            → cyan-500
 *   gehri-ferozi      → cyan-700
 *   asmani            → sky-500
 *   kala              → black
 *   safed             → white
 *   surmai            → gray-500
 *   halka-surmai      → gray-300
 *   gehri-surmai      → gray-700
 *   rang-[hex]        → custom color (rang-FF0000)
 *
 * BACKGROUND
 *   pichay-[rang]     → background-color (all colors above)
 *   pichay-safed      → bg white
 *   pichay-kala       → bg black
 *   pichay-nahi       → bg transparent
 *   dhundla           → backdrop blur
 *   gradient-daen     → gradient left to right
 *   gradient-neeche   → gradient top to bottom
 *
 * SPACING
 *   faasla-[0-24]     → padding all sides
 *   faasla-x-[0-24]   → padding left + right
 *   faasla-y-[0-24]   → padding top + bottom
 *   upar-faasla-[N]   → padding-top
 *   neeche-faasla-[N] → padding-bottom
 *   baen-faasla-[N]   → padding-left
 *   daen-faasla-[N]   → padding-right
 *   maargin-[0-24]    → margin all
 *   maargin-auto      → margin auto
 *   maargin-x-[N]     → margin left+right
 *   maargin-y-[N]     → margin top+bottom
 *   upar-maargin-[N]  → margin-top
 *   neeche-maargin-[N]→ margin-bottom
 *   baen-maargin-[N]  → margin-left
 *   daen-maargin-[N]  → margin-right
 *
 * SIZING
 *   poora-chaurai     → width: 100%
 *   adha-chaurai      → width: 50%
 *   tihai-chaurai     → width: 33.33%
 *   chautha-chaurai   → width: 25%
 *   auto-chaurai      → width: auto
 *   chaurai-[N]       → width in rem (chaurai-10 = 10rem)
 *   poora-lumbai      → height: 100%
 *   screen-lumbai     → height: 100vh
 *   screen-chaurai    → width: 100vw
 *   auto-lumbai       → height: auto
 *   min-screen        → min-height: 100vh
 *   max-chaurai-[N]   → max-width in rem
 *   lumbai-[N]        → height in rem
 *
 * LAYOUT
 *   laamba            → display: flex
 *   jaali             → display: grid
 *   jaali-[1-12]      → grid N columns
 *   dikhao            → display: block
 *   chupa             → display: none
 *   andar             → display: inline
 *   andar-block       → display: inline-block
 *   andar-flex        → display: inline-flex
 *   seedhi-line       → flex-direction: row
 *   ulti-line         → flex-direction: row-reverse
 *   khari-line        → flex-direction: column
 *   ulti-khari        → flex-direction: column-reverse
 *   lapeto            → flex-wrap: wrap
 *   mat-lapeto        → flex-wrap: nowrap
 *   darmiyan-lao      → justify-content: center
 *   shuru-lao         → justify-content: flex-start
 *   akhir-lao         → justify-content: flex-end
 *   door-karo         → justify-content: space-between
 *   barabar-karo      → justify-content: space-around
 *   seedh-mein        → align-items: center
 *   upar-seedh        → align-items: flex-start
 *   neeche-seedh      → align-items: flex-end
 *   khicho            → align-items: stretch
 *   khala-[0-24]      → gap
 *   khala-x-[N]       → column-gap
 *   khala-y-[N]       → row-gap
 *   flex-1            → flex: 1
 *   flex-auto         → flex: auto
 *   shrink-nahi       → flex-shrink: 0
 *   badho             → flex-grow: 1
 *   barabar           → flex: 1 1 0%
 *
 * POSITION
 *   jama-hua          → position: relative
 *   pakka             → position: absolute
 *   chipka-hua        → position: fixed
 *   atak-hua          → position: sticky + top:0
 *   upar-[0-24]       → top value
 *   neeche-[0-24]     → bottom value
 *   baen-[0-24]       → left value
 *   daen-pos-[0-24]   → right value
 *   beech-mein        → top+left 50% + translate center
 *   teh-[N]           → z-index
 *
 * BORDER
 *   haddi             → border: 1px solid #d1d5db
 *   haddi-2           → border: 2px solid
 *   haddi-4           → border: 4px solid
 *   haddi-nahi        → border: none
 *   upar-haddi        → border-top only
 *   neeche-haddi      → border-bottom only
 *   baen-haddi        → border-left only
 *   daen-haddi        → border-right only
 *   haddi-rang-[X]    → border-color
 *   haddi-toda        → border-style: dashed
 *   haddi-bindi       → border-style: dotted
 *
 * BORDER RADIUS
 *   gol               → border-radius: 9999px (full pill)
 *   thora-gol         → border-radius: 0.375rem
 *   zyada-gol         → border-radius: 0.75rem
 *   bohat-gol         → border-radius: 1.5rem
 *   seedha-kona       → border-radius: 0
 *   upar-gol          → top corners rounded
 *   neeche-gol        → bottom corners rounded
 *
 * SHADOW
 *   saya              → small shadow
 *   bari-saya         → medium shadow
 *   gehri-saya        → large shadow
 *   andar-saya        → inset shadow
 *   saya-nahi         → no shadow
 *   rang-saya-[X]     → colored shadow
 *
 * EFFECTS
 *   dhundla-[1-3]     → blur filter
 *   ujala-[1-3]       → brightness
 *   rung-badlo        → saturate/hue-rotate effect
 *   palta             → transform: rotate(180deg)
 *   thora-palta       → rotate(45deg)
 *   ulta-karo         → scaleX(-1) flip horizontal
 *
 * TRANSITIONS & ANIMATION
 *   naram             → transition: all 0.3s ease
 *   tez               → transition: all 0.15s ease
 *   sust              → transition: all 0.6s ease
 *   bounce            → bounce animation
 *   ghoomna           → spin animation
 *   dhadkna           → pulse animation
 *   hilna             → shake animation
 *
 * HOVER STATES
 *   hover-[rang]      → hover text color
 *   hover-pichay-[X]  → hover background
 *   hover-bara        → hover scale up
 *   hover-chota       → hover scale down
 *   hover-saya        → hover adds shadow
 *   hover-ujala       → hover brightness up
 *
 * VISIBILITY & OVERFLOW
 *   nazar-nahi        → visibility: hidden
 *   nazar-aao         → visibility: visible
 *   chhupa-do         → overflow: hidden
 *   scroll-karo       → overflow: auto
 *   x-scroll          → overflow-x: auto
 *   y-scroll          → overflow-y: auto
 *
 * CURSOR
 *   haath             → cursor: pointer
 *   rok-do            → cursor: not-allowed
 *   likhna            → cursor: text
 *   hilao             → cursor: move
 *   cross             → cursor: crosshair
 *   intezaar          → cursor: wait
 *
 * OBJECT FIT
 *   fit-bharo         → object-fit: cover
 *   fit-samao         → object-fit: contain
 *   fit-seedha        → object-fit: fill
 *
 * LISTS
 *   list-nahi         → list-style: none
 *   list-gol          → list-style: disc
 *   list-number       → list-style: decimal
 *
 * TABLES
 *   mez-bhar          → table border-collapse
 *   mez-door          → table border-separate
 *
 * MISC
 *   chuni-nahi        → user-select: none
 *   chuno             → user-select: text
 *   pointer-nahi      → pointer-events: none
 *   pointer-haan      → pointer-events: auto
 *   resize-nahi       → resize: none
 *   resize-karo       → resize: both
 *   outline-nahi      → outline: none
 *   antialiased       → font smoothing
 */

(function () {
  "use strict";

  // ═══════════════════════════════════════════════
  // SCALE MAPS
  // ═══════════════════════════════════════════════

  const SIZE = {
    1: "0.75rem", 2: "0.875rem", 3: "1rem", 4: "1.125rem",
    5: "1.25rem", 6: "1.5rem", 7: "1.875rem", 8: "2.25rem",
    9: "3rem"
  };

  const SPACE = {
    0: "0px", 1: "0.25rem", 2: "0.5rem", 3: "0.75rem",
    4: "1rem", 5: "1.25rem", 6: "1.5rem", 7: "1.75rem",
    8: "2rem", 9: "2.25rem", 10: "2.5rem", 11: "2.75rem",
    12: "3rem", 14: "3.5rem", 16: "4rem", 18: "4.5rem",
    20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem",
    36: "9rem", 40: "10rem", 48: "12rem", 56: "14rem",
    64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem"
  };

  const LINE_HEIGHT = {
    1: "1", 2: "1.25", 3: "1.375", 4: "1.5", 5: "1.625", 6: "2"
  };

  // ═══════════════════════════════════════════════
  // COLOR MAP
  // ═══════════════════════════════════════════════

  const COLORS = {
    "surkh":          "#ef4444",
    "gehri-surkh":    "#b91c1c",
    "halki-surkh":    "#fca5a5",
    "neela":          "#3b82f6",
    "gehri-neela":    "#1d4ed8",
    "halka-neela":    "#93c5fd",
    "hara":           "#22c55e",
    "gehri-hara":     "#15803d",
    "halka-hara":     "#86efac",
    "peela":          "#eab308",
    "gehri-peela":    "#a16207",
    "halka-peela":    "#fde047",
    "narangi":        "#f97316",
    "gehri-narangi":  "#c2410c",
    "halka-narangi":  "#fdba74",
    "gulabi":         "#ec4899",
    "gehri-gulabi":   "#be185d",
    "halka-gulabi":   "#f9a8d4",
    "baingni":        "#a855f7",
    "gehri-baingni":  "#7e22ce",
    "halka-baingni":  "#d8b4fe",
    "ferozi":         "#06b6d4",
    "gehri-ferozi":   "#0e7490",
    "halka-ferozi":   "#67e8f9",
    "asmani":         "#0ea5e9",
    "gehri-asmani":   "#0369a1",
    "kala":           "#000000",
    "safed":          "#ffffff",
    "surmai":         "#6b7280",
    "halka-surmai":   "#d1d5db",
    "bohat-halka":    "#f3f4f6",
    "gehri-surmai":   "#374151",
    "bohat-gehri":    "#111827",
    "off-safed":      "#f9fafb",
    "cream":          "#fef9c3",
  };

  // ═══════════════════════════════════════════════
  // CSS RULE GENERATOR
  // ═══════════════════════════════════════════════

  function rule(cls) {
    const s = CSS.escape(cls);
    const sp = (n) => SPACE[n];

    // ── TYPOGRAPHY ──────────────────────────────

    if (/^mota(-\d+)?$/.test(cls)) {
      const n = cls.split("-")[1];
      return `.${s}{font-weight:700;${n && SIZE[n] ? `font-size:${SIZE[n]};` : ""}}`;
    }
    if (/^patla(-\d+)?$/.test(cls)) {
      const n = cls.split("-")[1];
      return `.${s}{font-weight:300;${n && SIZE[n] ? `font-size:${SIZE[n]};` : ""}}`;
    }
    if (/^bara-\d+$/.test(cls)) {
      const n = cls.split("-")[1];
      if (SIZE[n]) return `.${s}{font-size:${SIZE[n]};}`;
    }
    if (cls === "tirchi")        return `.${s}{font-style:italic;}`;
    if (cls === "seedha-likh")   return `.${s}{font-style:normal;}`;
    if (cls === "rekha")         return `.${s}{text-decoration:underline;}`;
    if (cls === "kati-rekha")    return `.${s}{text-decoration:line-through;}`;
    if (cls === "rekha-nahi")    return `.${s}{text-decoration:none;}`;
    if (cls === "bara-harf")     return `.${s}{text-transform:uppercase;}`;
    if (cls === "chota-harf")    return `.${s}{text-transform:lowercase;}`;
    if (cls === "pehla-bara")    return `.${s}{text-transform:capitalize;}`;
    if (cls === "darmiyan")      return `.${s}{text-align:center;}`;
    if (cls === "baen")          return `.${s}{text-align:left;}`;
    if (cls === "daen")          return `.${s}{text-align:right;}`;
    if (cls === "do-taraf")      return `.${s}{text-align:justify;}`;
    if (cls === "door-door")     return `.${s}{letter-spacing:0.1em;}`;
    if (cls === "paas-paas")     return `.${s}{letter-spacing:-0.05em;}`;
    if (cls === "normal-faasla") return `.${s}{letter-spacing:normal;}`;
    if (cls === "kaat-do")       return `.${s}{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`;
    if (cls === "wrap-nahi")     return `.${s}{white-space:nowrap;}`;
    if (cls === "wrap-karo")     return `.${s}{white-space:normal;}`;
    if (cls === "antialiased")   return `.${s}{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}`;
    if (/^lakeer-\d$/.test(cls)) {
      const n = cls.split("-")[1];
      if (LINE_HEIGHT[n]) return `.${s}{line-height:${LINE_HEIGHT[n]};}`;
    }
    if (cls === "wazn-100") return `.${s}{font-weight:100;}`;
    if (cls === "wazn-200") return `.${s}{font-weight:200;}`;
    if (cls === "wazn-300") return `.${s}{font-weight:300;}`;
    if (cls === "wazn-400") return `.${s}{font-weight:400;}`;
    if (cls === "wazn-500") return `.${s}{font-weight:500;}`;
    if (cls === "wazn-600") return `.${s}{font-weight:600;}`;
    if (cls === "wazn-700") return `.${s}{font-weight:700;}`;
    if (cls === "wazn-800") return `.${s}{font-weight:800;}`;
    if (cls === "wazn-900") return `.${s}{font-weight:900;}`;

    // ── TEXT COLORS ─────────────────────────────

    if (COLORS[cls]) return `.${s}{color:${COLORS[cls]};}`;

    if (/^rang-([0-9A-Fa-f]{3,6})$/.test(cls)) {
      const hex = cls.split("-")[1];
      return `.${s}{color:#${hex};}`;
    }

    // ── BACKGROUND ──────────────────────────────

    if (/^pichay-/.test(cls)) {
      const key = cls.replace(/^pichay-/, "");
      if (key === "nahi") return `.${s}{background-color:transparent;}`;
      if (COLORS[key])    return `.${s}{background-color:${COLORS[key]};}`;
      if (/^[0-9A-Fa-f]{3,6}$/.test(key)) return `.${s}{background-color:#${key};}`;
    }
    if (cls === "dhundla")         return `.${s}{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}`;
    if (cls === "gradient-daen")   return `.${s}{background-image:linear-gradient(to right, var(--uw-from,#3b82f6), var(--uw-to,#8b5cf6));}`;
    if (cls === "gradient-neeche") return `.${s}{background-image:linear-gradient(to bottom, var(--uw-from,#3b82f6), var(--uw-to,#8b5cf6));}`;

    // ── OPACITY ─────────────────────────────────

    if (/^shafafiyat-\d+$/.test(cls)) {
      const v = parseInt(cls.split("-")[1]);
      if (v >= 0 && v <= 100) return `.${s}{opacity:${v / 100};}`;
    }

    // ── PADDING ─────────────────────────────────

    if (/^faasla-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{padding:${v};}`;
    }
    if (/^faasla-x-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{padding-left:${v};padding-right:${v};}`;
    }
    if (/^faasla-y-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{padding-top:${v};padding-bottom:${v};}`;
    }
    if (/^upar-faasla-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{padding-top:${v};}`;
    }
    if (/^neeche-faasla-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{padding-bottom:${v};}`;
    }
    if (/^baen-faasla-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{padding-left:${v};}`;
    }
    if (/^daen-faasla-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{padding-right:${v};}`;
    }

    // ── MARGIN ──────────────────────────────────

    if (cls === "maargin-auto") return `.${s}{margin:auto;}`;
    if (/^maargin-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{margin:${v};}`;
    }
    if (/^maargin-x-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{margin-left:${v};margin-right:${v};}`;
    }
    if (/^maargin-y-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{margin-top:${v};margin-bottom:${v};}`;
    }
    if (/^upar-maargin-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{margin-top:${v};}`;
    }
    if (/^neeche-maargin-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{margin-bottom:${v};}`;
    }
    if (/^baen-maargin-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{margin-left:${v};}`;
    }
    if (/^daen-maargin-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{margin-right:${v};}`;
    }

    // ── SIZING ──────────────────────────────────

    if (cls === "poora-chaurai")    return `.${s}{width:100%;}`;
    if (cls === "adha-chaurai")     return `.${s}{width:50%;}`;
    if (cls === "tihai-chaurai")    return `.${s}{width:33.333%;}`;
    if (cls === "chautha-chaurai")  return `.${s}{width:25%;}`;
    if (cls === "auto-chaurai")     return `.${s}{width:auto;}`;
    if (cls === "screen-chaurai")   return `.${s}{width:100vw;}`;
    if (cls === "poora-lumbai")     return `.${s}{height:100%;}`;
    if (cls === "auto-lumbai")      return `.${s}{height:auto;}`;
    if (cls === "screen-lumbai")    return `.${s}{height:100vh;}`;
    if (cls === "min-screen")       return `.${s}{min-height:100vh;}`;
    if (/^chaurai-\d+$/.test(cls)) {
      const n = cls.split("-")[1];
      return `.${s}{width:${n * 0.25}rem;}`;
    }
    if (/^lumbai-\d+$/.test(cls)) {
      const n = cls.split("-")[1];
      return `.${s}{height:${n * 0.25}rem;}`;
    }
    if (/^max-chaurai-\d+$/.test(cls)) {
      const n = cls.split("-").pop();
      return `.${s}{max-width:${n * 0.25}rem;}`;
    }
    if (/^min-chaurai-\d+$/.test(cls)) {
      const n = cls.split("-").pop();
      return `.${s}{min-width:${n * 0.25}rem;}`;
    }

    // ── DISPLAY & LAYOUT ────────────────────────

    if (cls === "laamba")       return `.${s}{display:flex;}`;
    if (cls === "jaali")        return `.${s}{display:grid;}`;
    if (cls === "dikhao")       return `.${s}{display:block;}`;
    if (cls === "chupa")        return `.${s}{display:none;}`;
    if (cls === "andar")        return `.${s}{display:inline;}`;
    if (cls === "andar-block")  return `.${s}{display:inline-block;}`;
    if (cls === "andar-flex")   return `.${s}{display:inline-flex;}`;

    if (/^jaali-\d+$/.test(cls)) {
      const n = cls.split("-")[1];
      return `.${s}{display:grid;grid-template-columns:repeat(${n},minmax(0,1fr));}`;
    }
    if (/^cols-span-\d+$/.test(cls)) {
      const n = cls.split("-").pop();
      return `.${s}{grid-column:span ${n}/span ${n};}`;
    }

    // Flex direction
    if (cls === "seedhi-line")  return `.${s}{flex-direction:row;}`;
    if (cls === "ulti-line")    return `.${s}{flex-direction:row-reverse;}`;
    if (cls === "khari-line")   return `.${s}{flex-direction:column;}`;
    if (cls === "ulti-khari")   return `.${s}{flex-direction:column-reverse;}`;

    // Flex wrap
    if (cls === "lapeto")       return `.${s}{flex-wrap:wrap;}`;
    if (cls === "mat-lapeto")   return `.${s}{flex-wrap:nowrap;}`;
    if (cls === "ulta-lapeto")  return `.${s}{flex-wrap:wrap-reverse;}`;

    // Justify content
    if (cls === "darmiyan-lao") return `.${s}{justify-content:center;}`;
    if (cls === "shuru-lao")    return `.${s}{justify-content:flex-start;}`;
    if (cls === "akhir-lao")    return `.${s}{justify-content:flex-end;}`;
    if (cls === "door-karo")    return `.${s}{justify-content:space-between;}`;
    if (cls === "barabar-karo") return `.${s}{justify-content:space-around;}`;
    if (cls === "seedh-door")   return `.${s}{justify-content:space-evenly;}`;

    // Align items
    if (cls === "seedh-mein")   return `.${s}{align-items:center;}`;
    if (cls === "upar-seedh")   return `.${s}{align-items:flex-start;}`;
    if (cls === "neeche-seedh") return `.${s}{align-items:flex-end;}`;
    if (cls === "khicho")       return `.${s}{align-items:stretch;}`;
    if (cls === "buniyad")      return `.${s}{align-items:baseline;}`;

    // Align self
    if (cls === "apna-darmiyan") return `.${s}{align-self:center;}`;
    if (cls === "apna-upar")     return `.${s}{align-self:flex-start;}`;
    if (cls === "apna-neeche")   return `.${s}{align-self:flex-end;}`;

    // Flex sizing
    if (cls === "flex-1")       return `.${s}{flex:1 1 0%;}`;
    if (cls === "flex-auto")    return `.${s}{flex:1 1 auto;}`;
    if (cls === "shrink-nahi")  return `.${s}{flex-shrink:0;}`;
    if (cls === "badho")        return `.${s}{flex-grow:1;}`;
    if (cls === "mat-badho")    return `.${s}{flex-grow:0;}`;
    if (cls === "barabar")      return `.${s}{flex:1 1 0%;}`;

    // Gap
    if (/^khala-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{gap:${v};}`;
    }
    if (/^khala-x-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{column-gap:${v};}`;
    }
    if (/^khala-y-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[2]);
      if (v) return `.${s}{row-gap:${v};}`;
    }

    // Order
    if (/^tarteeb-\d+$/.test(cls)) {
      return `.${s}{order:${cls.split("-")[1]};}`;
    }

    // ── POSITION ────────────────────────────────

    if (cls === "jama-hua")     return `.${s}{position:relative;}`;
    if (cls === "pakka")        return `.${s}{position:absolute;}`;
    if (cls === "chipka-hua")   return `.${s}{position:fixed;}`;
    if (cls === "atak-hua")     return `.${s}{position:sticky;top:0;}`;
    if (cls === "beech-mein")   return `.${s}{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}`;
    if (cls === "beech-upar")   return `.${s}{position:absolute;top:50%;transform:translateY(-50%);}`;
    if (cls === "beech-daen")   return `.${s}{position:absolute;left:50%;transform:translateX(-50%);}`;

    if (/^upar-\d+$/.test(cls) && !cls.startsWith("upar-f") && !cls.startsWith("upar-m") && !cls.startsWith("upar-h") && !cls.startsWith("upar-s")) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{top:${v};}`;
    }
    if (/^neeche-\d+$/.test(cls) && !cls.startsWith("neeche-f") && !cls.startsWith("neeche-m") && !cls.startsWith("neeche-h") && !cls.startsWith("neeche-s")) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{bottom:${v};}`;
    }
    if (/^baen-\d+$/.test(cls)) {
      const v = sp(cls.split("-")[1]);
      if (v) return `.${s}{left:${v};}`;
    }
    if (/^daen-pos-\d+$/.test(cls)) {
      const v = sp(cls.split("-").pop());
      if (v) return `.${s}{right:${v};}`;
    }
    if (/^teh-\d+$/.test(cls)) {
      return `.${s}{z-index:${cls.split("-")[1]};}`;
    }

    // ── BORDER ──────────────────────────────────

    if (cls === "haddi")         return `.${s}{border:1px solid #d1d5db;}`;
    if (cls === "haddi-2")       return `.${s}{border:2px solid #d1d5db;}`;
    if (cls === "haddi-4")       return `.${s}{border:4px solid #d1d5db;}`;
    if (cls === "haddi-nahi")    return `.${s}{border:none;}`;
    if (cls === "upar-haddi")    return `.${s}{border-top:1px solid #d1d5db;}`;
    if (cls === "neeche-haddi")  return `.${s}{border-bottom:1px solid #d1d5db;}`;
    if (cls === "baen-haddi")    return `.${s}{border-left:1px solid #d1d5db;}`;
    if (cls === "daen-haddi")    return `.${s}{border-right:1px solid #d1d5db;}`;
    if (cls === "haddi-toda")    return `.${s}{border-style:dashed;}`;
    if (cls === "haddi-bindi")   return `.${s}{border-style:dotted;}`;

    if (/^haddi-rang-/.test(cls)) {
      const key = cls.replace("haddi-rang-", "");
      if (COLORS[key]) return `.${s}{border-color:${COLORS[key]};}`;
    }

    // Border Radius
    if (cls === "gol")           return `.${s}{border-radius:9999px;}`;
    if (cls === "thora-gol")     return `.${s}{border-radius:0.375rem;}`;
    if (cls === "zyada-gol")     return `.${s}{border-radius:0.75rem;}`;
    if (cls === "bohat-gol")     return `.${s}{border-radius:1.5rem;}`;
    if (cls === "seedha-kona")   return `.${s}{border-radius:0;}`;
    if (cls === "upar-gol")      return `.${s}{border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;}`;
    if (cls === "neeche-gol")    return `.${s}{border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}`;
    if (cls === "baen-gol")      return `.${s}{border-top-left-radius:0.5rem;border-bottom-left-radius:0.5rem;}`;
    if (cls === "daen-gol")      return `.${s}{border-top-right-radius:0.5rem;border-bottom-right-radius:0.5rem;}`;

    // ── SHADOW ──────────────────────────────────

    if (cls === "saya")          return `.${s}{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);}`;
    if (cls === "bari-saya")     return `.${s}{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);}`;
    if (cls === "gehri-saya")    return `.${s}{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);}`;
    if (cls === "bohat-gehri-saya") return `.${s}{box-shadow:0 25px 50px -12px rgba(0,0,0,.25);}`;
    if (cls === "andar-saya")    return `.${s}{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.05);}`;
    if (cls === "saya-nahi")     return `.${s}{box-shadow:none;}`;

    if (/^rang-saya-/.test(cls)) {
      const key = cls.replace("rang-saya-", "");
      if (COLORS[key]) return `.${s}{box-shadow:0 4px 14px 0 ${COLORS[key]}60;}`;
    }

    // ── OVERFLOW ────────────────────────────────

    if (cls === "chhupa-do")     return `.${s}{overflow:hidden;}`;
    if (cls === "scroll-karo")   return `.${s}{overflow:auto;}`;
    if (cls === "x-scroll")      return `.${s}{overflow-x:auto;}`;
    if (cls === "y-scroll")      return `.${s}{overflow-y:auto;}`;
    if (cls === "x-chhupa")      return `.${s}{overflow-x:hidden;}`;
    if (cls === "y-chhupa")      return `.${s}{overflow-y:hidden;}`;

    // ── VISIBILITY ──────────────────────────────

    if (cls === "nazar-nahi")    return `.${s}{visibility:hidden;}`;
    if (cls === "nazar-aao")     return `.${s}{visibility:visible;}`;

    // ── CURSOR ──────────────────────────────────

    if (cls === "haath")         return `.${s}{cursor:pointer;}`;
    if (cls === "rok-do")        return `.${s}{cursor:not-allowed;}`;
    if (cls === "likhna")        return `.${s}{cursor:text;}`;
    if (cls === "hilao")         return `.${s}{cursor:move;}`;
    if (cls === "cross")         return `.${s}{cursor:crosshair;}`;
    if (cls === "intezaar")      return `.${s}{cursor:wait;}`;

    // ── TRANSFORM ───────────────────────────────

    if (cls === "palta")         return `.${s}{transform:rotate(180deg);}`;
    if (cls === "thora-palta")   return `.${s}{transform:rotate(45deg);}`;
    if (cls === "chhota-palta")  return `.${s}{transform:rotate(90deg);}`;
    if (cls === "ulta-karo")     return `.${s}{transform:scaleX(-1);}`;
    if (cls === "upar-uthao")    return `.${s}{transform:translateY(-4px);}`;

    if (/^zoom-\d+$/.test(cls)) {
      const n = parseInt(cls.split("-")[1]);
      return `.${s}{transform:scale(${n / 100});}`;
    }

    // ── TRANSITIONS ─────────────────────────────

    if (cls === "naram")         return `.${s}{transition:all .3s ease;}`;
    if (cls === "tez")           return `.${s}{transition:all .15s ease;}`;
    if (cls === "sust")          return `.${s}{transition:all .6s ease;}`;
    if (cls === "bohat-sust")    return `.${s}{transition:all 1s ease;}`;
    if (cls === "naram-rang")    return `.${s}{transition:color .3s ease,background-color .3s ease;}`;
    if (cls === "koi-nahi")      return `.${s}{transition:none;}`;

    // ── ANIMATIONS ──────────────────────────────

    if (cls === "bounce")        return `.${s}{animation:uw-bounce 1s infinite;}`;
    if (cls === "ghoomna")       return `.${s}{animation:uw-spin 1s linear infinite;}`;
    if (cls === "dhadkna")       return `.${s}{animation:uw-pulse 2s cubic-bezier(.4,0,.6,1) infinite;}`;
    if (cls === "hilna")         return `.${s}{animation:uw-shake .5s ease;}`;
    if (cls === "fadein")        return `.${s}{animation:uw-fadein .5s ease;}`;

    // ── HOVER STATES ────────────────────────────

    if (/^hover-pichay-/.test(cls)) {
      const key = cls.replace("hover-pichay-", "");
      if (COLORS[key]) return `.${s}:hover{background-color:${COLORS[key]};}`;
    }
    if (/^hover-/.test(cls)) {
      const key = cls.replace("hover-", "");
      if (COLORS[key]) return `.${s}:hover{color:${COLORS[key]};}`;
    }
    if (cls === "hover-bara")    return `.${s}:hover{transform:scale(1.05);}`;
    if (cls === "hover-chota")   return `.${s}:hover{transform:scale(0.95);}`;
    if (cls === "hover-saya")    return `.${s}:hover{box-shadow:0 10px 25px rgba(0,0,0,0.15);}`;
    if (cls === "hover-ujala")   return `.${s}:hover{filter:brightness(1.1);}`;
    if (cls === "hover-uthao")   return `.${s}:hover{transform:translateY(-4px);}`;

    // ── FOCUS STATES ────────────────────────────

    if (cls === "focus-rekha")   return `.${s}:focus{outline:2px solid #3b82f6;outline-offset:2px;}`;
    if (cls === "focus-nahi")    return `.${s}:focus{outline:none;}`;

    // ── FILTERS ─────────────────────────────────

    if (/^dhundla-\d$/.test(cls)) {
      const map = { 1: "4px", 2: "8px", 3: "16px" };
      const n = cls.split("-")[1];
      if (map[n]) return `.${s}{filter:blur(${map[n]});}`;
    }
    if (/^ujala-\d$/.test(cls)) {
      const map = { 1: "1.1", 2: "1.25", 3: "1.5" };
      const n = cls.split("-")[1];
      if (map[n]) return `.${s}{filter:brightness(${map[n]});}`;
    }

    // ── OBJECT FIT ──────────────────────────────

    if (cls === "fit-bharo")     return `.${s}{object-fit:cover;}`;
    if (cls === "fit-samao")     return `.${s}{object-fit:contain;}`;
    if (cls === "fit-seedha")    return `.${s}{object-fit:fill;}`;

    // ── LISTS ───────────────────────────────────

    if (cls === "list-nahi")     return `.${s}{list-style:none;padding:0;margin:0;}`;
    if (cls === "list-gol")      return `.${s}{list-style:disc;padding-left:1.5rem;}`;
    if (cls === "list-number")   return `.${s}{list-style:decimal;padding-left:1.5rem;}`;

    // ── TABLES ──────────────────────────────────

    if (cls === "mez-bhar")      return `.${s}{border-collapse:collapse;}`;
    if (cls === "mez-door")      return `.${s}{border-collapse:separate;}`;

    // ── MISC ────────────────────────────────────

    if (cls === "chuni-nahi")    return `.${s}{user-select:none;}`;
    if (cls === "chuno")         return `.${s}{user-select:text;}`;
    if (cls === "pointer-nahi")  return `.${s}{pointer-events:none;}`;
    if (cls === "pointer-haan")  return `.${s}{pointer-events:auto;}`;
    if (cls === "resize-nahi")   return `.${s}{resize:none;}`;
    if (cls === "resize-karo")   return `.${s}{resize:both;}`;
    if (cls === "outline-nahi")  return `.${s}{outline:none;}`;
    if (cls === "nazar-nahi")    return `.${s}{visibility:hidden;}`;
    if (cls === "truncate")      return `.${s}{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}`;
    if (cls === "poora-screen")  return `.${s}{min-height:100vh;}`;

    // Aspect ratio
    if (cls === "square")        return `.${s}{aspect-ratio:1/1;}`;
    if (cls === "video")         return `.${s}{aspect-ratio:16/9;}`;

    // Appearance
    if (cls === "naya-nahi")     return `.${s}{appearance:none;}`;

    return null;
  }

  // ═══════════════════════════════════════════════
  // ANIMATION KEYFRAMES
  // ═══════════════════════════════════════════════

  const KEYFRAMES = `
@keyframes uw-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes uw-bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:translateY(0);animation-timing-function:cubic-bezier(0,0,.2,1)}}
@keyframes uw-pulse{0%,100%{opacity:1}50%{opacity:.5}}
@keyframes uw-shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
@keyframes uw-fadein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
`;

  // ═══════════════════════════════════════════════
  // ENGINE
  // ═══════════════════════════════════════════════

  function build() {
    const classes = new Set();
    document.querySelectorAll("[class]").forEach(el =>
      el.classList.forEach(c => classes.add(c))
    );

    const rules = [KEYFRAMES];
    let count = 0;

    classes.forEach(cls => {
      const r = rule(cls);
      if (r) { rules.push(r); count++; }
    });

    let tag = document.getElementById("urduwind");
    if (!tag) {
      tag = document.createElement("style");
      tag.id = "urduwind";
      document.head.appendChild(tag);
    }
    tag.textContent = rules.join("\n");

    console.log(
      `%cUrduWind%c v1.0 — ${count} rules ready ✓`,
      "background:#2563eb;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;",
      "color:#2563eb;font-weight:600;"
    );
  }

  // Run
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }

  // Watch for dynamic changes
  new MutationObserver(build).observe(document.documentElement, {
    subtree: true, attributes: true, attributeFilter: ["class"]
  });

  // Global API
  window.UrduWind = {
    refresh: build,
    version: "1.0.0"
  };

})();
