import { useState } from "react";
import { Link } from "react-router";
import { motion} from "motion/react";
import {
  ShieldCheck, CreditCard, School, Store, ArrowRight, CheckCircle,
  MapPin, Bell, Clock, Package, LayoutDashboard, Star,
  ChevronDown, ChevronUp, Smartphone, Apple, Users,
} from "lucide-react";
import { FadeIn, useCounter, CTABanner } from "../shared";

function cn(...c: (string | false | undefined | null)[]) { return c.filter(Boolean).join(" "); }

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F9FC] pt-16">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0057D9]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00B14F]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#FFD54A]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#0057D9]/10 text-[#0057D9] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              <ShieldCheck className="w-3.5 h-3.5" /> School-Approved Platform
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
              Everything Your Child <span className="text-[#0057D9]">Needs</span> for School.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Order approved school items and receive them securely through your child's school. Verified vendors, tracked deliveries, total peace of mind.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0057D9] hover:bg-[#0046b0] px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                Start Ordering <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/vendors" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0057D9] border-2 border-[#0057D9] hover:bg-[#0057D9]/5 px-7 py-3.5 rounded-xl transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                <Store className="w-4 h-4" /> Become a Vendor
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
              {[{ icon: ShieldCheck, label: "Verified Vendors", color: "#00B14F" }, { icon: CreditCard, label: "Secure Payments", color: "#0057D9" }, { icon: School, label: "School Approved", color: "#B8860B" }].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-border">
                  <Icon className="w-4 h-4" style={{ color }} />
                  <span className="text-xs font-semibold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEdoYW5haWFuJTIwdGVlbmFnZSUyMHN0dWRlbnQlMjB1bmlmb3JtJTIwc21pbGluZ3xlbnwxfHx8fDE3ODIzMzM2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Happy youth Ghanaian SHS student in uniform" className="w-full h-[420px] lg:h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0057D9]/30 to-transparent" />
            </div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-8 top-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="w-10 h-10 bg-[#00B14F]/10 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5 text-[#00B14F]" /></div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>Order Delivered!</p>
                <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>Collected at reception</p>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -right-6 bottom-20 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-border">
              <div className="w-10 h-10 bg-[#0057D9]/10 rounded-xl flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-[#0057D9]" /></div>
              <div>
                <p className="text-xs font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>100% Secure</p>
                <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>School-verified vendors</p>
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-4 top-8 bg-[#FFD54A] rounded-2xl shadow-lg px-4 py-2.5">
              <p className="text-xs font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>500+ Vendors ✓</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { count, ref } = useCounter(target);
  return (
    <div className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-[#0057D9] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
        <span ref={ref}>{count.toLocaleString()}</span>{suffix}
      </p>
      <p className="text-sm text-[#6B7280] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-white py-16 lg:py-20 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {[{ target: 100, suffix: "+", label: "Partner Schools" }, { target: 500, suffix: "+", label: "Verified Vendors" }, { target: 20000, suffix: "+", label: "Orders Delivered" }, { target: 50000, suffix: "+", label: "Happy Parents" }].map((s) => (
            <FadeIn key={s.label}><StatCounter {...s} /></FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works preview ─────────────────────────────────────────────────────
function HowItWorksPreview() {
  const items = [
    { persona: "For Parents", icon: Users, color: "#0057D9", steps: ["Choose your child's school", "Browse & order items", "Receive at school reception"] },
    { persona: "For Vendors", icon: Store, color: "#00B14F", steps: ["Register & get verified", "List approved products", "Deliver directly to schools"] },
    { persona: "For Schools", icon: School, color: "#B8860B", steps: ["Approve trusted deliveries", "Verify student collection", "Keep students safe"] },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>How It Works</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Simple for Everyone</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>Three groups, one seamless platform — built for trust at every step.</p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {items.map(({ persona, icon: Icon, color, steps }, i) => (
            <FadeIn key={persona} delay={i * 0.1}>
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${color}15` }}>
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>{persona}</h3>
                <ol className="space-y-4">
                  {steps.map((step, idx) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5" style={{ backgroundColor: color === "#B8860B" ? "#B8860B" : color }}>{idx + 1}</span>
                      <span className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0057D9] hover:text-[#0046b0] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
            See the full process <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: School, title: "School Marketplace", desc: "Shop from a curated list of school-approved products, specific to your child's school." },
    { icon: MapPin, title: "Order Tracking", desc: "Real-time tracking from vendor warehouse all the way to school reception." },
    { icon: Bell, title: "Instant Notifications", desc: "SMS and app alerts when orders are placed, dispatched, and collected." },
    { icon: CreditCard, title: "Secure Payments", desc: "Bank-grade encryption for all transactions. Multiple payment methods supported." },
    { icon: Clock, title: "Delivery Scheduling", desc: "Schedule deliveries around school hours so nothing disrupts the school day." },
    { icon: CheckCircle, title: "Collection Verification", desc: "Students confirm collection with a digital signature, giving parents full peace of mind." },
    { icon: LayoutDashboard, title: "Vendor Dashboard", desc: "Powerful analytics, inventory management, and delivery tools for vendors." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Platform Features</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Built for Safety & Speed</h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>Every feature was designed around the unique needs of schools, parents, and vendors.</p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.05}>
              <div className="group bg-[#F8F9FC] hover:bg-white rounded-2xl p-6 border border-border hover:border-[#0057D9]/20 hover:shadow-lg transition-all duration-300">
                <div className="w-11 h-11 bg-[#0057D9]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0057D9] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0057D9] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Safety ───────────────────────────────────────────────────────────────────
function Safety() {
  const points = [
    { icon: ShieldCheck, title: "Verified Vendors Only", desc: "Every vendor undergoes background checks and school authorization before listing products." },
    { icon: School, title: "School Security Checks", desc: "Deliveries are only accepted through designated school entry points with staff oversight." },
    { icon: Bell, title: "Parent Notifications", desc: "Instant alerts when your order ships, arrives at school, and when your child collects it." },
    { icon: MapPin, title: "Live Delivery Tracking", desc: "Follow your order on the map from vendor to school in real time." },
    { icon: Package, title: "Student Collection Records", desc: "Digital logs of every collection, signed by student and verified by school staff." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <FadeIn>
              <span className="text-xs font-semibold text-[#FFD54A] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Safety First</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Your Child's Safety is <span className="text-[#FFD54A]">Non-Negotiable</span></h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-10" style={{ fontFamily: "Inter, sans-serif" }}>We built a multi-layer security system so every delivery is tracked, every vendor is trusted, and every parent is informed.</p>
            </FadeIn>
            <div className="space-y-5">
              {points.map(({ icon: Icon, title, desc }, i) => (
                <FadeIn key={title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#FFD54A]/15 rounded-xl flex items-center justify-center"><Icon className="w-5 h-5 text-[#FFD54A]" /></div>
                    <div>
                      <h4 className="font-bold text-white mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                      <p className="text-sm text-[#94A3B8] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn className="relative" delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=700&fit=crop&auto=format" alt="School security" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#00B14F] rounded-xl flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-white" /></div>
                    <div>
                      <p className="font-bold text-white text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Delivery Secured</p>
                      <p className="text-xs text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Verified at Greenwood High reception</p>
                    </div>
                    <span className="ml-auto text-[#00B14F] text-xs font-bold" style={{ fontFamily: "Inter, sans-serif" }}>LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── Mobile App ───────────────────────────────────────────────────────────────
function MobileApp() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="relative flex justify-center lg:justify-start" delay={0.1}>
            <div className="relative flex gap-4 items-end">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-48 h-96 bg-[#1A1A1A] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-[#2A2A2A] relative flex-shrink-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1A1A1A] rounded-b-2xl z-10" />
                <img src="https://images.unsplash.com/photo-1744809448493-448812255e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHaGFuYWlhbiUyMHlvdXRoJTIwaGlnaCUyMHNjaG9vbCUyMHN0dWRlbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc4MjMzMzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Happy SHS student" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-[#0057D9]/80 to-transparent">
                  <p className="text-xs font-bold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>Track Order</p>
                  <div className="mt-1 w-full h-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-[#FFD54A] rounded-full" /></div>
                  <p className="text-xs text-white/70 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>En route to school</p>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="w-48 h-80 bg-[#1A1A1A] rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-[#2A2A2A] relative flex-shrink-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1A1A1A] rounded-b-2xl z-10" />
                <img src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdGVlbmFnZSUyMHN0dWRlbnRzJTIwbGVhcm5pbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzgyMzMzMzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="SHS students learning" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-start p-4 pt-8">
                  <div className="bg-white/90 rounded-xl p-2.5">
                    <p className="text-xs font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>🎒 Order Arrived!</p>
                    <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>Ready for collection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Mobile App</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Shop, Track & Manage <span className="text-[#0057D9]">On the Go</span></h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>The FleetGroove app puts everything in your hands. Browse products, track deliveries in real-time, and receive instant alerts — all from your phone.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="space-y-3 mb-10">
                {["Real-time order tracking on map", "Push notifications for every update", "Browse by school and grade", "Secure in-app checkout"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B14F] flex-shrink-0" />
                    <span className="text-[#4B5563] text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#333] text-white px-5 py-3 rounded-xl transition-colors">
                  <Apple className="w-5 h-5" />
                  <div className="text-left"><p className="text-xs text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>Download on the</p><p className="text-sm font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>App Store</p></div>
                </button>
                <button className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#333] text-white px-5 py-3 rounded-xl transition-colors">
                  <Smartphone className="w-5 h-5" />
                  <div className="text-left"><p className="text-xs text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>Get it on</p><p className="text-sm font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>Google Play</p></div>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    { name: "Amara Osei", role: "Parent — St. Francis Primary", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&auto=format", quote: "I no longer stress about getting items to my daughter's school. I order on Sunday evening and everything is waiting for her by Monday. Absolutely brilliant!" },
    { name: "Kwame Mensah", role: "Vendor — Mensah Stationery Co.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", quote: "My sales grew 3× within two months of joining. The platform handles payments, delivery coordination, and school communication — it's a game changer for my business." },
    { name: "Mrs. Adjoa Darko", role: "Head of Administration — Greenwood High", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format", quote: "We've had zero security incidents since adopting the platform. The vendor verification process is thorough, and our staff appreciates the organized delivery windows." },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Testimonials</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Trusted by Thousands</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(({ name, role, avatar, quote }, i) => (
            <FadeIn key={name} delay={i * 0.1}>
              <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-[#FFD54A] text-[#FFD54A]" />)}</div>
                <p className="text-[#4B5563] leading-relaxed text-sm flex-1 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>"{quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{name}</p>
                    <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>{role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Partners ─────────────────────────────────────────────────────────────────
const schools = ["Greenwood High", "St. Francis Primary", "Lincoln Academy", "Sunrise College", "Heritage Boys School", "Maple Leaf Prep", "Unity International", "Riverside Girls", "Apex Secondary", "Pioneer Academy"];

function Partners() {
  return (
    <section className="py-14 bg-[#F8F9FC] border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm text-[#6B7280] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>Trusted by schools across the country</p>
      </div>
      <div className="relative">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex gap-6 w-max">
          {[...schools, ...schools].map((school, i) => (
            <div key={`${school}-${i}`} className="flex-shrink-0 bg-white border border-border rounded-2xl px-8 py-4 flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 bg-[#0057D9]/10 rounded-lg flex items-center justify-center"><School className="w-4 h-4 text-[#0057D9]" /></div>
              <span className="text-sm font-semibold text-[#1A1A1A] whitespace-nowrap" style={{ fontFamily: "Poppins, sans-serif" }}>{school}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "How do deliveries actually work?", a: "Vendors deliver directly to your child's school during a designated delivery window. School staff receive and log the package. Your child collects it at break or end of day with a digital verification." },
  { q: "How are vendors verified and approved?", a: "All vendors undergo a thorough background check, business registration verification, and product safety review. Schools also have the ability to whitelist or blacklist specific vendors." },
  { q: "Can parents track their orders in real time?", a: "Yes. Our mobile app and web platform provide live GPS tracking from the vendor's dispatch point to your child's school, plus push notifications at every stage." },
  { q: "What happens if an item is missing or damaged?", a: "We have a 24-hour dispute resolution process. All deliveries are photographically documented on arrival. Missing or damaged items are refunded or replaced within 48 hours." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>FAQ</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Common Questions</h2>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <FadeIn key={q} delay={i * 0.04}>
              <div className={cn("rounded-2xl border transition-all duration-300 overflow-hidden", open === i ? "border-[#0057D9]/30 bg-[#F0F5FF] shadow-sm" : "border-border bg-white hover:border-[#0057D9]/20")}>
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className={cn("font-semibold pr-4", open === i ? "text-[#0057D9]" : "text-[#1A1A1A]")} style={{ fontFamily: "Poppins, sans-serif" }}>{q}</span>
                  {open === i ? <ChevronUp className="w-5 h-5 text-[#0057D9] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />}
                </button>
                {open === i && <div className="px-6 pb-6"><p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{a}</p></div>}
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-8">
          <Link to="/how-it-works" className="text-sm font-semibold text-[#0057D9] hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>View all FAQs →</Link>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorksPreview />
      <Features />
      <Safety />
      <MobileApp />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTABanner title="Ready to Simplify School Shopping?" subtitle="Join 50,000+ parents and 500+ vendors on the platform that's making school shopping safe, simple, and smart." primaryLabel="Get Started" primaryTo="/contact" secondaryLabel="Become a Vendor" secondaryTo="/vendors" />
    </>
  );
}