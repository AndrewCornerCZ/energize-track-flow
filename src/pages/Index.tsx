import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import heroImg from "@/assets/hero-bg.jpg";

// ---------- DATA ----------
const features = [
  {
    icon: "📈",
    title: "Sledování progresu",
    desc: "Vizualizuj svůj výkon v reálném čase. Grafy, metriky a denní přehledy pro maximální přehled.",
    tag: "Analytics",
  },
  {
    icon: "🎯",
    title: "Personalizované plány",
    desc: "AI tréninkové plány přizpůsobené tvému tělu, cílům a dennímu rozvrhu.",
    tag: "AI Powered",
  },
  {
    icon: "⚡",
    title: "Moderní UI & UX",
    desc: "Intuitivní rozhraní navržené pro sportovce. Rychlé, přehledné, bez zbytečností.",
    tag: "Design",
  },
];

const stats = [
  { value: "10K+", label: "Aktivních uživatelů" },
  { value: "98%", label: "Spokojenost" },
  { value: "500+", label: "Tréninků" },
  { value: "12", label: "Zemí" },
];

// ---------- COMPONENTS ----------
function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: "linear-gradient(to bottom, hsl(220 14% 6% / 0.95), transparent)" }}
    >
      <span className="befit-display text-3xl tracking-widest text-foreground">
        BE<span className="text-primary">FIT</span>
      </span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
        <a href="#features" className="hover:text-primary transition-colors">Funkce</a>
        <a href="#stats" className="hover:text-primary transition-colors">Statistiky</a>
        <a href="#wishlist" className="hover:text-primary transition-colors">Wishlist</a>
      </div>
      <a
        href="#wishlist"
        className="befit-btn-primary px-5 py-2.5 rounded-full text-sm font-bold"
      >
        Přidat se →
      </a>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Hero image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="BeFit Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] -top-40 -right-40"
        style={{ background: "hsl(var(--befit-lime) / 0.2)" }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bottom-20 -left-20"
        style={{ background: "hsl(var(--befit-lime) / 0.15)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-medium"
          style={{
            borderColor: "hsl(var(--befit-lime) / 0.4)",
            background: "hsl(var(--befit-lime) / 0.08)",
            color: "hsl(var(--befit-lime))",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Brzy dostupné — přidej se na wishlist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="befit-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide mb-6 text-foreground"
        >
          BE<span className="text-primary befit-glow-text">FIT</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-muted-foreground font-light leading-relaxed"
        >
          Moderní fitness aplikace, která spojuje{" "}
          <span className="text-foreground font-medium">design</span>,{" "}
          <span className="text-foreground font-medium">motivaci</span> a{" "}
          <span className="text-primary font-semibold">technologii</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#wishlist" className="befit-btn-primary px-8 py-4 rounded-2xl text-base font-bold inline-block">
            Přidat se na wishlist →
          </a>
          <a href="#features" className="befit-btn-outline px-8 py-4 rounded-2xl text-base inline-block">
            Zjistit více
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground text-xs"
      >
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="stats" ref={ref} className="py-16 px-6 border-y border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="befit-display text-5xl md:text-6xl text-primary befit-glow-text mb-1">
              {s.value}
            </div>
            <div className="text-muted-foreground text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Proč BeFit?
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-foreground mb-4">
            Všechno, co potřebuješ
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Jeden nástroj pro kompletní fitness journey — od tréninku po regeneraci.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="befit-card rounded-3xl p-8 group cursor-default"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-all group-hover:scale-110"
                style={{ background: "hsl(var(--befit-lime) / 0.12)" }}
              >
                {f.icon}
              </div>
              <div
                className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  background: "hsl(var(--befit-lime) / 0.1)",
                  color: "hsl(var(--befit-lime))",
                }}
              >
                {f.tag}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPreviewSection() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="befit-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[80px] pointer-events-none"
            style={{ background: "hsl(var(--befit-lime) / 0.12)" }}
          />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
                Dashboard Preview
              </span>
              <h2 className="text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Vše na jednom místě
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kompletní přehled tvého fitness progresu — kalorický deficit, kroky,
                srdeční tep, spánek a mnohem více.
              </p>
              <ul className="space-y-3">
                {["Denní tréninky & plány", "Výkonnostní grafy", "AI doporučení", "Sociální výzvy"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "hsl(var(--befit-lime) / 0.15)", color: "hsl(var(--befit-lime))" }}
                    >✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock app UI */}
            <div className="relative">
              <div
                className="rounded-2xl p-5 space-y-3"
                style={{ background: "hsl(220 14% 5%)", border: "1px solid hsl(var(--befit-card-border))" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-muted-foreground font-medium">Dnešní trénink</span>
                  <span className="text-xs px-2 py-1 rounded-full font-semibold"
                    style={{ background: "hsl(var(--befit-lime) / 0.15)", color: "hsl(var(--befit-lime))" }}
                  >Live</span>
                </div>
                {[
                  { name: "Bench Press", sets: "4×8", progress: 85 },
                  { name: "Pull-ups", sets: "3×10", progress: 60 },
                  { name: "Squat", sets: "5×5", progress: 40 },
                ].map((ex, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{ex.name}</span>
                      <span className="text-muted-foreground text-xs">{ex.sets}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${ex.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                        className="h-full rounded-full"
                        style={{ background: "hsl(var(--befit-lime))" }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-3 flex gap-3">
                  <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "hsl(var(--befit-lime) / 0.08)" }}>
                    <div className="text-xl font-bold text-primary">847</div>
                    <div className="text-xs text-muted-foreground">kcal</div>
                  </div>
                  <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "hsl(220 13% 14%)" }}>
                    <div className="text-xl font-bold text-foreground">68'</div>
                    <div className="text-xs text-muted-foreground">minut</div>
                  </div>
                  <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "hsl(220 13% 14%)" }}>
                    <div className="text-xl font-bold text-foreground">142</div>
                    <div className="text-xs text-muted-foreground">BPM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WishlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="wishlist" className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="befit-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: "inset 0 0 60px hsl(var(--befit-lime) / 0.05)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute w-80 h-80 rounded-full blur-[80px] -top-20 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{ background: "hsl(var(--befit-lime) / 0.15)" }}
          />

          <div className="relative z-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-lime"
              style={{ background: "hsl(var(--befit-lime) / 0.12)" }}
            >
              🚀
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Buď první
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Přidej se na wishlist a získej exkluzivní early access + speciální cenu při launchi.
            </p>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-8"
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Jsi na seznamu!</h3>
                <p className="text-muted-foreground">Brzy se ozůveme. Díky za zájem o BeFit!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="tvuj@email.cz"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="befit-input w-full px-5 py-4 rounded-2xl text-base"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="befit-btn-primary w-full py-4 rounded-2xl font-bold text-base"
                >
                  Přidat se na wishlist →
                </motion.button>
                <p className="text-muted-foreground text-xs mt-2">
                  Žádný spam. Jen oznámení o launchi. 🔒
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="befit-display text-2xl tracking-widest">
          BE<span className="text-primary">FIT</span>
        </span>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} BeFit. Všechna práva vyhrazena.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Podmínky</a>
          <a href="#" className="hover:text-primary transition-colors">Soukromí</a>
          <a href="#" className="hover:text-primary transition-colors">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}

// ---------- PAGE ----------
export default function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AppPreviewSection />
      <WishlistSection />
      <Footer />
    </main>
  );
}
