import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import befitLogo from "@/assets/befit-logo.png";
import heroImg from "@/assets/hero-social.jpg";

// ─── FADE UP HELPER ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

// ─── DATA ────────────────────────────────────────────────────────────────────
const features = [
  {
    emoji: "🗺️",
    title: "Mapa aktivit",
    desc: "Zobraz aktivity ve svém okolí na interaktivní mapě. Najdi lidi, kteří cvičí hned za rohem.",
  },
  {
    emoji: "👥",
    title: "Skupinové aktivity",
    desc: "Pořádej vlastní akce nebo se přidej k existujícím. Od ranního běhu po noční basketbal.",
  },
  {
    emoji: "🏅",
    title: "Ocenění & výzvy",
    desc: "Sbírej odznaky za splněné aktivity a sociální interakce. Gamifikace, která motivuje.",
  },
  {
    emoji: "📸",
    title: "Příspěvky & feed",
    desc: "Sdílej momenty z tréninků, komentuj a reaguj na ostatní. Komunita, která tě fandí.",
  },
  {
    emoji: "🤝",
    title: "Tréninkový partner",
    desc: "Najdi svého ideálního partnera pro sport podle aktivit, lokace a dostupnosti.",
  },
  {
    emoji: "📊",
    title: "Progres & statistiky",
    desc: "Sleduj svůj growth — aktivity, přátelé a splněné výzvy na jednom místě.",
  },
];

const stats = [
  { value: "18–24", label: "Cílová skupina" },
  { value: "6", label: "Klíčových funkcí" },
  { value: "1", label: "Komunita" },
  { value: "∞", label: "Možnosti" },
];

const missionPoints = [
  { icon: "💡", text: "Osamělost a nedostatek pohybu jsou úzce propojeny — BeFit řeší oboje najednou." },
  { icon: "❤️", text: "Pravidelná fyzická aktivita v komunitě prokazatelně snižuje míru deprese a úzkosti." },
  { icon: "🌍", text: "Chceme vybudovat generaci, která sport prožívá společně — ne sama před obrazovkou." },
];

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="flex items-center gap-3">
        <img src={befitLogo} alt="BeFit logo" className="w-10 h-10 rounded-xl shadow" />
        <span className="font-extrabold text-xl tracking-tight text-foreground">BeFit</span>
      </div>

      <div className="hidden md:flex gap-7 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-primary transition-colors">Funkce</a>
        <a href="#mission" className="hover:text-primary transition-colors">Mise</a>
        <a href="#authors" className="hover:text-primary transition-colors">Autoři</a>
        <a href="#wishlist" className="hover:text-primary transition-colors">Wishlist</a>
      </div>

      <a
        href="#wishlist"
        className="btn-brand px-5 py-2.5 rounded-full text-sm"
      >
        Přidat se →
      </a>
    </motion.nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden hero-dark">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(173,73%,10%)]" />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[130px] -top-32 -left-32"
        style={{ background: "hsl(175, 48%, 47%)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
        className="absolute w-[350px] h-[350px] rounded-full blur-[100px] bottom-0 right-0"
        style={{ background: "hsl(173, 73%, 30%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Logo */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <motion.img
            src={befitLogo}
            alt="BeFit"
            className="w-24 h-24 mt-20 rounded-3xl shadow-2xl animate-float"
            style={{ boxShadow: "0 20px 60px hsl(175 48% 47% / 0.4)" }}
          />
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2 text-sm font-semibold"
          style={{ background: "hsl(175 48% 47% / 0.18)", border: "1px solid hsl(175 48% 47% / 0.35)", color: "hsl(175, 80%, 75%)" }}>
          <span className="w-2 h-2 rounded-full bg-teal-light animate-ping-slow inline-block" />
          Maturitní projekt 2025 · Brzy k dispozici
        </motion.div>

        <motion.h1 {...fadeUp(0.18)} className="text-[clamp(3rem,9vw,6.5rem)] font-extrabold leading-none tracking-tight text-white mb-5">
          Sport je lepší<br />
          <span style={{ background: "linear-gradient(135deg, hsl(175,70%,65%), hsl(175,48%,47%))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            ve dvou.
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.28)} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(175 30% 75%)" }}>
          <strong className="text-white">BeFit</strong> je sociální síť, která spojuje lidi skrze pohyb.
          Najdi partnera na trénink, přidej se k aktivitám ve svém okolí a buď součástí komunity, která tě motivuje.
        </motion.p>

        <motion.div {...fadeUp(0.36)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#wishlist" className="btn-brand px-8 py-4 rounded-2xl text-base inline-block">
            Chci být první 🚀
          </a>
          <a href="#features" className="btn-outline-brand px-8 py-4 rounded-2xl text-base inline-block"
            style={{ borderColor: "hsl(175 48% 47% / 0.5)", color: "hsl(175, 60%, 70%)" }}>
            Zjistit více
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STATS BAR ────────────────────────────────────────────────────────────────
function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section ref={ref} className="py-14 px-6 border-b border-border bg-background">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}>
            <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-1">{s.value}</div>
            <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────
function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="features" ref={ref} className="py-28 px-6 bg-muted/40">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="tag-brand px-4 py-1.5 rounded-full inline-block mb-4">Co BeFit umí</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Jedna aplikace.<br />
            <span className="gradient-text">Nekonečné možnosti.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            BeFit kombinuje sociální síť, mapu aktivit a gamifikaci do jednoho intuitivního prostředí.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-feature rounded-3xl p-7 group">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform group-hover:scale-110"
                style={{ background: "hsl(var(--teal-mid) / 0.1)" }}>
                {f.emoji}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── MAP MOCK ─────────────────────────────────────────────────────────────────
function MapPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const pins = [
    { top: "25%", left: "30%", label: "Ranní běh", sport: "🏃", delay: 0 },
    { top: "55%", left: "60%", label: "Basketbal 3v3", sport: "🏀", delay: 0.2 },
    { top: "40%", left: "75%", label: "Jóga v parku", sport: "🧘", delay: 0.4 },
    { top: "65%", left: "25%", label: "Cyklovýlet", sport: "🚴", delay: 0.3 },
    { top: "20%", left: "65%", label: "Plavání", sport: "🏊", delay: 0.5 },
  ];

  return (
    <section ref={ref} className="py-28 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="tag-brand px-4 py-1.5 rounded-full inline-block mb-4">Mapa aktivit</span>
          <h2 className="text-4xl font-extrabold text-foreground mb-5 leading-tight">
            Sport se děje<br />hned za rohem
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Interaktivní mapa zobrazuje všechny aktivity ve tvém okolí v reálném čase. Jedním kliknutím se přidáš nebo vytvoříš vlastní událost.
          </p>
          <ul className="space-y-3">
            {["Filtruj dle sportu, vzdálenosti nebo data", "Zobraz, kdo se aktivity účastní", "Nastav soukromé i veřejné akce"].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
                  style={{ background: "hsl(var(--teal-mid) / 0.12)", color: "hsl(var(--teal-mid))" }}>✓</span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mock map */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl aspect-[4/3]"
            style={{ background: "linear-gradient(135deg, hsl(175 30% 92%), hsl(175 20% 88%))" }}>
            {/* Grid lines simulating map */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
              {[50, 100, 150, 200, 250].map(y => (
                <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="hsl(174 52% 38%)" strokeWidth="0.5" />
              ))}
              {[50, 100, 150, 200, 250, 300, 350].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="300" stroke="hsl(174 52% 38%)" strokeWidth="0.5" />
              ))}
              {/* Simulated roads */}
              <path d="M0 120 Q100 110 200 130 Q300 150 400 120" stroke="hsl(174 52% 55%)" strokeWidth="3" fill="none" opacity="0.6" />
              <path d="M0 200 Q150 190 250 210 Q320 225 400 195" stroke="hsl(174 52% 55%)" strokeWidth="3" fill="none" opacity="0.6" />
              <path d="M150 0 Q160 100 155 150 Q150 220 165 300" stroke="hsl(174 52% 55%)" strokeWidth="2.5" fill="none" opacity="0.5" />
              <path d="M280 0 Q270 80 285 160 Q295 230 280 300" stroke="hsl(174 52% 55%)" strokeWidth="2" fill="none" opacity="0.4" />
              {/* Park area */}
              <rect x="50" y="50" width="90" height="70" rx="8" fill="hsl(150 40% 70%)" opacity="0.35" />
              <rect x="230" y="160" width="70" height="55" rx="6" fill="hsl(150 40% 70%)" opacity="0.3" />
            </svg>

            {/* Pins */}
            {pins.map((pin, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0, y: -10 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + pin.delay, type: "spring", stiffness: 200 }}
                className="absolute group cursor-pointer"
                style={{ top: pin.top, left: pin.left, transform: "translate(-50%, -100%)" }}>
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "hsl(var(--teal-dark))", color: "white" }}>
                  {pin.label}
                </div>
                {/* Pin */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg border-2 border-white animate-float"
                  style={{ background: "linear-gradient(135deg, hsl(175,48%,52%), hsl(173,73%,28%))", animationDelay: `${i * 0.8}s` }}>
                  {pin.sport}
                </div>
                {/* Shadow dot */}
                <div className="w-2 h-1 rounded-full mx-auto mt-0.5 opacity-30" style={{ background: "hsl(var(--teal-dark))" }} />
              </motion.div>
            ))}

            {/* User location */}
            <div className="absolute" style={{ top: "50%", left: "48%", transform: "translate(-50%, -50%)" }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-ping-slow"
                  style={{ background: "hsl(var(--teal-mid) / 0.3)", width: "48px", height: "48px", margin: "-8px" }} />
                <div className="w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center"
                  style={{ background: "hsl(var(--teal-mid))" }}>
                  <span className="text-white text-xs font-bold">Ty</span>
                </div>
              </div>
            </div>

            {/* Map label */}
            <div className="absolute bottom-3 right-3 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: "hsl(var(--teal-dark))", color: "white" }}>
              Aktivity v okolí
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── MISSION ─────────────────────────────────────────────────────────────────
function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="mission" ref={ref} className="py-28 px-6 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}>
      {/* Orb */}
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] top-0 right-0 pointer-events-none"
        style={{ background: "hsl(175, 48%, 47%)" }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 inline-block"
            style={{ background: "hsl(175 48% 47% / 0.2)", color: "hsl(175, 70%, 70%)" }}>
            Naše mise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Boj proti osamělosti<br />
            <span style={{ color: "hsl(175, 60%, 65%)" }}>skrze sport.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "hsl(175, 20%, 70%)" }}>
            Vědecké studie ukazují, že osamělost a nedostatek pohybu se navzájem zesilují — a obojí má vážné dopady na duševní zdraví generace 18–24 let. BeFit je naší odpovědí.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {missionPoints.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="rounded-3xl p-7"
              style={{ background: "hsl(175 48% 47% / 0.1)", border: "1px solid hsl(175 48% 47% / 0.2)", backdropFilter: "blur(12px)" }}>
              <div className="text-3xl mb-4">{m.icon}</div>
              <p className="leading-relaxed text-sm" style={{ color: "hsl(175, 25%, 78%)" }}>{m.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto"
          style={{ color: "hsl(175, 40%, 65%)" }}>
          <p className="text-xl md:text-2xl italic font-medium leading-relaxed">
            "Sportem ku zdraví — tělem i duší."
          </p>
          <footer className="mt-3 text-sm" style={{ color: "hsl(175, 20%, 50%)" }}>— BeFit, 2025</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}

// ─── SOCIAL PROOF MOCK ────────────────────────────────────────────────────────
function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const posts = [
    {
      handle: "@TomasK",
      avatar: "T",
      text: `„Tak co, jdeš dneska na fotbal?" ⚽ 🔥\n„Jasně! Takový zápas si přece nemůžu nechat ujít!"\n\nNapětí ve vzduchu, stadion plný hlasů a očekávání před výkopem. Miluju ten moment, kdy rozhodčí pískne začátek a všechno ostatní přestane existovat. 🤜 ⚽`,
      tags: ["#teamspirit", "#vášeň", "#goal", "#fanoušci", "#matchday", "#fotbal"],
      date: "2/17/2026 · 11:38 AM",
      likes: 1,
      comments: 0,
    },
    {
      handle: "@EliskaM",
      avatar: "E",
      text: `Ranní jóga v parku každou středu 7:00 🧘‍♀️✨\n\nKdo se přidá? Stačí podložka a chuť začít den jinak. Posíláme dobrou energii do celého města! 🌿`,
      tags: ["#jóga", "#rannírutina", "#parkyoga", "#wellness", "#befitlife"],
      date: "2/17/2026 · 7:15 AM",
      likes: 47,
      comments: 5,
    },
    {
      handle: "@MarekP",
      avatar: "M",
      text: `3v3 basketbal dnes v 18h u hřiště Slavia 🏀\n\nChybí nám jeden hráč — kdo je volný? Úroveň: casual, nálada: soutěžní 😄 Přijď, zahraj, poznej lidi!`,
      tags: ["#basketbal", "#streetball", "#3v3", "#sport", "#befitaktivity"],
      date: "2/17/2026 · 1:00 PM",
      likes: 12,
      comments: 3,
    },
  ];

  return (
    <section ref={ref} className="py-28 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="tag-brand px-4 py-1.5 rounded-full inline-block mb-4">Komunita</span>
          <h2 className="text-4xl font-extrabold text-foreground mb-3">
            Tak bude vypadat tvůj feed
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Příspěvky, výzvy, aktivity — přehledně na jednom místě.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: "hsl(222, 20%, 10%)", border: "1px solid hsl(222, 15%, 18%)" }}>
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{ background: "var(--gradient-brand)" }}>
                  {p.avatar}
                </div>
                <span className="font-bold text-white text-sm">{p.handle}</span>
              </div>

              {/* Body */}
              <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "hsl(220, 10%, 80%)" }}>{p.text}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium" style={{ color: "hsl(var(--teal-mid))" }}>{tag}</span>
                ))}
              </div>

              {/* Footer */}
              <div style={{ color: "hsl(220, 10%, 50%)", fontSize: "0.7rem" }}>{p.date}</div>
              <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: "hsl(222, 15%, 18%)" }}>
                <div className="flex items-center gap-4 text-xs" style={{ color: "hsl(220, 10%, 55%)" }}>
                  <button className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
                    🤍 <span>{p.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 transition-colors" style={{ color: "hsl(220, 10%, 55%)" }}>
                    Comments <span className="ml-1">{p.comments}</span>
                  </button>
                </div>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-colors"
                  style={{ background: "hsl(var(--teal-mid))" }}>
                  Add Comment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AUTHORS ─────────────────────────────────────────────────────────────────
function Authors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const authors = [
    {
      name: "Ondřej Kout",
      role: "Zakladatel & Programátor",
      desc: "Stojí za technickou realizací BeFit. Navrhuje architekturu, píše kód a dává vizi konkrétní podobu.",
      emoji: "💻",
    },
    {
      name: "Vít Vohlídal",
      role: "Design & Marketing",
      desc: "Tvoří vizuální identitu BeFit. Stará se o to, aby aplikace nejen fungovala, ale aby byla i krásná a srozumitelná.",
      emoji: "🎨",
    },
  ];

  return (
    <section id="authors" ref={ref} className="py-28 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="tag-brand px-4 py-1.5 rounded-full inline-block mb-4">Tým</span>
          <h2 className="text-4xl font-extrabold text-foreground mb-3">
            Lidé za <span className="gradient-text">BeFitem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Dva studenti s jednou misí — spojovat lidi skrze pohyb.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {authors.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="card-feature rounded-3xl p-8 flex flex-col items-center text-center gap-5">
              {/* Photo placeholder */}
              <div className="w-28 h-28 rounded-full flex items-center justify-center text-4xl border-4 flex-shrink-0"
                style={{ background: "hsl(var(--teal-mid) / 0.08)", borderColor: "hsl(var(--teal-mid) / 0.2)" }}>
                {a.emoji}
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground mb-1">{a.name}</h3>
                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full inline-block mb-3"
                  style={{ background: "hsl(var(--teal-mid) / 0.1)", color: "hsl(var(--teal-mid))" }}>
                  {a.role}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WISHLIST ─────────────────────────────────────────────────────────────────
function Wishlist() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState<number | null>(null);

  const fetchCount = async () => {
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { count: c } = await supabase
        .from("wishlist")
        .select("*", { count: "exact", head: true });
      if (c !== null) setCount(c);
    } catch {}
  };

  useEffect(() => { fetchCount(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error: dbError } = await supabase
        .from("wishlist")
        .insert({ name: name.trim() || null, email: email.trim().toLowerCase() });

      if (dbError) {
        if (dbError.code === "23505") {
          setError("Tento email je již na wishlistu! 🎉");
        } else {
          setError("Něco se pokazilo, zkus to znovu.");
        }
        setLoading(false);
        return;
      }
      setSubmitted(true);
      fetchCount();
    } catch {
      setError("Něco se pokazilo, zkus to znovu.");
    }
    setLoading(false);
  };

  return (
    <section id="wishlist" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10"
          style={{ background: "hsl(var(--teal-mid))" }} />
        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10"
          style={{ background: "hsl(var(--teal-light))" }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-feature rounded-4xl p-10 md:p-14 text-center"
          style={{ boxShadow: "0 30px 80px hsl(174 52% 38% / 0.12)" }}>

          {/* Logo */}
          <img src={befitLogo} alt="BeFit" className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg animate-float" />

          <span className="tag-brand px-4 py-1.5 rounded-full inline-block mb-5">Wishlist</span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
            Buď mezi prvními
          </h2>
          <p className="text-muted-foreground text-lg mb-4 max-w-md mx-auto leading-relaxed">
            BeFit se chystá změnit způsob, jakým mladí lidé sportují. Přidej se na wishlist a dostaneš jako první přístup.
          </p>

          {count !== null && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
              style={{ background: "hsl(var(--teal-mid) / 0.08)", color: "hsl(var(--teal-dark))" }}>
              👥 Již {count} lidí čeká na BeFit
            </div>
          )}

          {submitted ? (
            <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-6">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-extrabold text-foreground mb-2">Jsi na seznamu!</h3>
              <p className="text-muted-foreground">
                Brzy se ozůveme. Díky, že věříš v BeFit!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto text-left">
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Jméno</label>
                <input
                  type="text"
                  placeholder="Tvoje jméno"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="input-brand w-full px-4 py-3.5 rounded-2xl text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                <input
                  type="email"
                  placeholder="tvuj@email.cz"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="input-brand w-full px-4 py-3.5 rounded-2xl text-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="btn-brand w-full py-4 rounded-2xl font-bold text-base mt-1 disabled:opacity-60">
                {loading ? "Přidávám..." : "Přidej mě na wishlist 🚀"}
              </motion.button>
              {error && (
                <p className="text-sm text-center font-medium" style={{ color: "hsl(0 72% 51%)" }}>{error}</p>
              )}
              <p className="text-muted-foreground text-xs text-center mt-1">
                🔒 Žádný spam. Pouze oznámení o launchi BeFit.
              </p>
            </form>
          )}
        </motion.div>

      
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={befitLogo} alt="BeFit" className="w-8 h-8 rounded-lg" />
          <span className="font-extrabold text-foreground">BeFit</span>
          <span className="text-muted-foreground text-sm">· Maturitní projekt 2025</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} BeFit. Sport spojuje lidi. ❤️
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#wishlist" className="hover:text-primary transition-colors">Wishlist</a>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <MapPreview />
      <Mission />
      <SocialProof />
      <Authors />
      <Wishlist />
      <Footer />
    </main>
  );
}
