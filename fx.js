/* fx.js — community libraries, wired up.
   GSAP 3.13 (+ScrollTrigger, SplitText, ScrambleText) · vanilla-tilt
   · Typed.js · tsParticles · Rough Notation · canvas-confetti
   All free for commercial use. Everything here is gated on prefers-reduced-motion. */

(function () {
  var REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // script.js renders DATA into the DOM on DOMContentLoaded and then fires
  // content:ready. This file is deferred, so it executes BEFORE that handler —
  // binding early would find nothing. Wait for the event (or catch it if missed).
  var ready = function (f) {
    var done = false, go = function () { if (!done) { done = true; f(); } };
    document.addEventListener("content:ready", go);
    window.addEventListener("load", go);
  };

  ready(function () {
    if (REDUCE) { document.documentElement.classList.add("no-fx"); return; }

    /* ---------- GSAP ---------- */
    if (window.gsap) {
      gsap.registerPlugin(ScrollTrigger);
      if (window.SplitText) gsap.registerPlugin(SplitText);
      if (window.ScrambleTextPlugin) gsap.registerPlugin(ScrambleTextPlugin);


      /* headline: split to chars and fly in */
      // SplitText measures glyphs, so it has to run after webfonts land or the
      // character boxes are computed against the fallback face.
      var splitH1 = function () {
      var h1 = document.querySelector("h1");
      if (h1 && window.SplitText) {
        // text-wrap:balance treats every split character as its own item and
        // stacks them one per line. Disable it for the split, restore after.
        var prevWrap = h1.style.textWrap;
        h1.style.textWrap = "normal";
        var split = new SplitText(h1, { type: "words,chars" });
        gsap.from(split.chars, {
          yPercent: 120, opacity: 0, rotateX: -80, stagger: 0.012,
          duration: 0.8, ease: "back.out(1.7)", delay: 0.15,
          onComplete: function () { split.revert(); h1.style.textWrap = prevWrap; }
        });
      }
      };
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(splitH1);
      else splitH1();

      /* section headings scramble as they arrive */
      if (window.ScrambleTextPlugin) {
        document.querySelectorAll(".head h2").forEach(function (h) {
          var txt = h.textContent;
          ScrollTrigger.create({
            trigger: h, start: "top 88%", once: true,
            onEnter: function () {
              gsap.to(h, { duration: 0.55, scrambleText: { text: txt, chars: "upperCase", speed: 0.6, revealDelay: 0.05 } });
            }
          });
        });
      }

      /* content blocks rise in, batched */
      ScrollTrigger.batch(".entry, .run, .role, .lead, .more details, .tables table", {
        start: "top 90%",
        onEnter: function (els) {
          gsap.from(els, { y: 34, opacity: 0, duration: .7, stagger: .07, ease: "power3.out", overwrite: true });
        }
      });

      /* stat counters */
      document.querySelectorAll("[data-count]").forEach(function (n) {
        var end = +n.dataset.count, o = { v: 0 };
        ScrollTrigger.create({
          trigger: n, start: "top 90%", once: true,
          onEnter: function () {
            gsap.to(o, { v: end, duration: 1.6, ease: "power2.out",
              onUpdate: function () { n.textContent = Math.round(o.v) + (n.dataset.suffix || ""); } });
          }
        });
      });

      /* hero parallax on the console */
      gsap.to(".term", { yPercent: -8, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: .6 } });
    }

    /* ---------- vanilla-tilt: 3D cards (micku7zu) ---------- */
    if (window.VanillaTilt) {
      VanillaTilt.init(document.querySelectorAll(".lead"), {
        max: 6, speed: 700, glare: true, "max-glare": 0.18, scale: 1.01, perspective: 1200
      });
    }

    /* ---------- Typed.js: the console types its own greeting ---------- */
    if (window.Typed) {
      new Typed("#term-type", {
        strings: ["whoami", "desk", "stack", "record"],
        typeSpeed: 55, backSpeed: 28, backDelay: 1900, loop: true, showCursor: true, cursorChar: "█"
      });
    }

    /* ---------- tsParticles: the ambient field ---------- */
    if (window.tsParticles) {
      tsParticles.load({
        id: "particles",
        options: {
          fpsLimit: 45, detectRetina: true,
          background: { color: "transparent" },
          particles: {
            number: { value: 46, density: { enable: true, area: 900 } },
            color: { value: ["#3ddc84", "#ffb86b"] },
            links: { enable: true, distance: 140, color: "#3ddc84", opacity: 0.16, width: 1 },
            move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
            opacity: { value: { min: 0.15, max: 0.5 } },
            size: { value: { min: 1, max: 2.2 } }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 170, links: { opacity: 0.4 } } }
          }
        }
      });
    }

    /* ---------- Rough Notation: hand-drawn marks on key phrases ---------- */
    if (window.RoughNotation && window.gsap) {
      document.querySelectorAll("[data-annotate]").forEach(function (n) {
        var a = RoughNotation.annotate(n, {
          type: n.dataset.annotate, color: n.dataset.color || "#3ddc84",
          strokeWidth: 2, padding: 4, animationDuration: 700, iterations: 2, multiline: true
        });
        ScrollTrigger.create({ trigger: n, start: "top 85%", once: true, onEnter: function () { a.show(); } });
      });
    }

    /* ---------- easter egg: konami -> confetti ---------- */
    if (window.confetti) {
      var seq = "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a", buf = [];
      addEventListener("keydown", function (e) {
        buf.push(e.key); buf = buf.slice(-10);
        if (buf.join(",") === seq) {
          confetti({ particleCount: 160, spread: 80, origin: { y: .7 },
                     colors: ["#3ddc84", "#ffb86b", "#f2f6f3"] });
        }
      });
    }
  });
})();
