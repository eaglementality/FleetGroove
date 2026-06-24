import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router";
import { motion, useInView } from "motion/react";
import { Menu, X, ShieldCheck, Facebook, Instagram, Linkedin, Store, ArrowRight } from "lucide-react";
import logo from "../public/FleetGroove_Tech_Company_Logo_with_Wave_Element-removebg-preview.png";

export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── FadeIn ──────────────────────────────────────────────────────────────────

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Counter Hook ─────────────────────────────────────────────────────────────

export function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return { count, ref };
}

// ─── Nav ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Schools", to: "/schools" },
  { label: "Vendors", to: "/vendors" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#0057D9] flex items-center justify-center">
              <img src={logo} alt="FleetGroove Logo" className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>
              Fleet<span className="text-[#0057D9]">Groove</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => cn("text-sm font-medium transition-colors", isActive ? "text-[#0057D9] font-semibold" : "text-[#4B5563] hover:text-[#0057D9]")} style={{ fontFamily: "Inter, sans-serif" }}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-semibold text-[#0057D9] hover:text-[#0046b0] transition-colors px-4 py-2" style={{ fontFamily: "Inter, sans-serif" }}>Sign In</button>
            <Link to="/contact" className="text-sm font-semibold text-white bg-[#0057D9] hover:bg-[#0046b0] px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>Get Started</Link>
          </div>

          <button className="lg:hidden p-2 rounded-lg text-[#1A1A1A]" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-1">
          {navLinks.map(({ label, to }) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => cn("block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors", isActive ? "bg-[#EEF2FA] text-[#0057D9] font-semibold" : "text-[#4B5563] hover:bg-[#EEF2FA] hover:text-[#0057D9]")} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <button className="w-full text-sm font-semibold text-[#0057D9] border border-[#0057D9] py-2.5 rounded-xl">Sign In</button>
            <Link to="/contact" className="w-full text-center text-sm font-semibold text-white bg-[#0057D9] py-2.5 rounded-xl block" onClick={() => setOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#0057D9] flex items-center justify-center"><img src={logo} alt="FleetGroove Logo" className="w-5 h-5 text-white" /></div>
              <span className="text-xl font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Fleet<span className="text-[#FFD54A]">Groove</span></span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Connecting parents, vendors, and schools for safe, convenient, and verified school item delivery.</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-[#0057D9] rounded-lg flex items-center justify-center transition-colors"><Icon className="w-4 h-4 text-white" /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>Company</h4>
            <ul className="space-y-2.5">
              {[{ l: "About Us", to: "/about" }, { l: "Contact", to: "/contact" }].map(({ l, to }) => (
                <li key={l}><Link to={to} className="text-sm text-[#94A3B8] hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>Platform</h4>
            <ul className="space-y-2.5">
              {[{ l: "For Schools", to: "/schools" }, { l: "For Vendors", to: "/vendors" }, { l: "How It Works", to: "/how-it-works" }].map(({ l, to }) => (
                <li key={l}><Link to={to} className="text-sm text-[#94A3B8] hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider" style={{ fontFamily: "Poppins, sans-serif" }}>Legal</h4>
            <ul className="space-y-2.5">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((l) => (
                <li key={l}><a href="#" className="text-sm text-[#94A3B8] hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{l}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]" style={{ fontFamily: "Inter, sans-serif" }}>© 2026 FleetGroove Platform. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00B14F]" />
            <span className="text-xs text-[#94A3B8]" style={{ fontFamily: "Inter, sans-serif" }}>PCI-DSS Compliant · SSL Encrypted · School Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── CTABanner ────────────────────────────────────────────────────────────────

export function CTABanner({ title, subtitle, primaryLabel, primaryTo, secondaryLabel, secondaryTo }: { title: string; subtitle: string; primaryLabel: string; primaryTo: string; secondaryLabel?: string; secondaryTo?: string }) {
  return (
    <section className="py-20 lg:py-28 bg-[#0057D9] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD54A] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={primaryTo} className="inline-flex items-center gap-2 text-sm font-semibold text-[#0057D9] bg-white hover:bg-[#F0F5FF] px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
              {primaryLabel} <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryLabel && secondaryTo && (
              <Link to={secondaryTo} className="inline-flex items-center gap-2 text-sm font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                <Store className="w-4 h-4" />{secondaryLabel}
              </Link>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}