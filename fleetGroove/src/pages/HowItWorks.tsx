import { Link } from "react-router";
import { motion } from "motion/react";
import { ShieldCheck, Users, Store, School, MapPin, Bell, CreditCard, CheckCircle, Package, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn, CTABanner } from "../shared";
import { useState } from "react";

function cn(...c: (string | false | undefined | null)[]) { return c.filter(Boolean).join(" "); }

const personas = [
  {
    id: "parents",
    label: "For Parents",
    icon: Users,
    color: "#0057D9",
    tagline: "Order with confidence. Track every step.",
    image: "https://images.unsplash.com/photo-1729691031598-a97244ce0503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEFmcmljYW4lMjBoaWdoJTIwc2Nob29sJTIwc3R1ZGVudCUyMHVuaWZvcm0lMjBzbWlsaW5nfGVufDF8fHx8MTc4MjMzNDEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    steps: [
      { title: "Create your account", desc: "Sign up in under 2 minutes using your phone number or email. Completely free for parents." },
      { title: "Select your child's school", desc: "Search for your child's registered school. Each school has its own curated marketplace of approved items." },
      { title: "Browse approved products", desc: "Shop from a safe catalogue of school-approved stationery, uniforms, books, and supplies." },
      { title: "Place & pay securely", desc: "Choose your items, pick a delivery window, and pay securely via card, mobile money, or bank transfer." },
      { title: "Track in real time", desc: "Follow your order live on the map from the vendor's warehouse to your child's school." },
      { title: "Your child collects safely", desc: "School staff receive and log the package. Your child collects with a digital signature — you're notified instantly." },
    ],
  },
  {
    id: "vendors",
    label: "For Vendors",
    icon: Store,
    color: "#00B14F",
    tagline: "Reach thousands of families. Grow without limits.",
    image: "https://images.unsplash.com/photo-1687422808384-c896d0efd4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEFmcmljYW4lMjB3b21hbiUyMHNlbGxpbmclMjBzdXBwbGllcyUyMHN0b3JlJTIwb3duZXJ8ZW58MXx8fHwxNzgyMzMzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    steps: [
      { title: "Apply to join", desc: "Submit your business registration, ID documents, and product catalogue for review. Most approvals take 3–5 days." },
      { title: "Background check & verification", desc: "Our team conducts thorough background checks and product safety reviews before you go live." },
      { title: "School approval", desc: "Approved schools choose which vendors to whitelist for their marketplace. You'll be notified of each partnership." },
      { title: "List your products", desc: "Use your vendor dashboard to upload products, set prices, manage inventory, and set delivery capacity by school." },
      { title: "Receive & fulfill orders", desc: "Orders are automatically assigned to your delivery schedule. Pack and dispatch within your agreed window." },
      { title: "Deliver & get paid", desc: "Deliver to the school, confirm receipt with the school coordinator, and receive payment within 24 hours." },
    ],
  },
  {
    id: "schools",
    label: "For Schools",
    icon: School,
    color: "#B8860B",
    tagline: "Full control. Zero disruption. Complete security.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&auto=format",
    steps: [
      { title: "Apply for partnership", desc: "Schools apply via the platform. Our team schedules a brief onboarding call — most schools are live within a week." },
      { title: "Whitelist trusted vendors", desc: "Your admin dashboard lets you approve or reject any vendor on the platform. Full control over who supplies your families." },
      { title: "Set delivery windows", desc: "Define when deliveries can arrive (e.g., 7–8am before school), keeping your school day undisturbed." },
      { title: "Receive & log deliveries", desc: "A designated staff member receives parcels at the gate, photographs them, and logs them in the system." },
      { title: "Notify students", desc: "The platform automatically notifies students (and parents) when their package is ready for collection." },
      { title: "Verify collection", desc: "Students collect with a digital signature on a tablet or their phone. Records are permanently stored for accountability." },
    ],
  },
];

const faqs = [
  { q: "How long does delivery take?", a: "Most orders are delivered within 24–48 hours of placement, depending on the vendor's schedule and your chosen delivery window at the school." },
  { q: "Can parents from any school use FleetGroove?", a: "Yes — as long as your school is registered on the platform. You can request your school to join via the Contact page." },
  { q: "What if a vendor misses a delivery window?", a: "Vendors are rated on delivery punctuality. Missing windows results in automatic escalation to our operations team and a rescheduled delivery at no cost to the parent." },
  { q: "Are there any fees for parents?", a: "The platform is completely free for parents. Vendors pay a small platform commission, which funds operations, security checks, and support." },
  { q: "How does the school avoid delivery congestion?", a: "Schools define their own delivery windows and vendor slots. Our scheduling algorithm prevents overlap so arrivals are staggered and manageable." },
  { q: "Can schools see all orders placed by parents?", a: "Schools can see aggregate delivery data (packages expected, arrived, collected) but cannot see individual parent orders — privacy is protected." },
];

export default function HowItWorks() {
  const [activePersona, setActivePersona] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const persona = personas[activePersona];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8F9FC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057D9]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#0057D9]/10 text-[#0057D9] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Platform Guide
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 max-w-3xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
            How <span className="text-[#0057D9]">FleetGroove</span> Works
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#6B7280] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            From order placement to school collection — every step is tracked, verified, and designed for safety. Select your role below to see the full journey.
          </motion.p>
        </div>
      </section>

      {/* Persona tabs */}
      <section className="bg-white border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-4 overflow-x-auto">
            {personas.map(({ label, icon: Icon, color }, i) => (
              <button key={label} onClick={() => setActivePersona(i)} className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0", activePersona === i ? "text-white shadow-md" : "text-[#6B7280] hover:bg-[#F8F9FC]")} style={{ backgroundColor: activePersona === i ? color : undefined, fontFamily: "Inter, sans-serif" }}>
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Persona detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: `${persona.color}15`, color: persona.color, fontFamily: "Inter, sans-serif" }}>
                <persona.icon className="w-3.5 h-3.5" /> {persona.label}
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>{persona.tagline}</h2>
              <p className="text-[#6B7280] mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>Here's exactly what happens from the moment you first open FleetGroove to the moment your order is complete.</p>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src={persona.image} alt={persona.label} className="w-full h-72 object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${persona.color}50, transparent)` }} />
              </div>
            </FadeIn>
            <div className="space-y-0">
              {persona.steps.map(({ title, desc }, i) => (
                <FadeIn key={title} delay={i * 0.07}>
                  <div className="flex gap-5 pb-8 relative">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm z-10" style={{ backgroundColor: persona.color, fontFamily: "Poppins, sans-serif" }}>{i + 1}</div>
                      {i < persona.steps.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ backgroundColor: `${persona.color}30` }} />}
                    </div>
                    <div className="pt-1.5 pb-6">
                      <h4 className="font-bold text-[#1A1A1A] mb-1.5" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                      <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Platform flow diagram */}
          <FadeIn>
            <div className="bg-[#F8F9FC] rounded-3xl p-8 lg:p-12 border border-border">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-8 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>The FleetGroove Delivery Cycle</h3>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-2">
                {[
                  { icon: Users, label: "Parent Orders", color: "#0057D9" },
                  { icon: Store, label: "Vendor Packs", color: "#00B14F" },
                  { icon: MapPin, label: "GPS Tracked", color: "#7C3AED" },
                  { icon: School, label: "School Receives", color: "#B8860B" },
                  { icon: CheckCircle, label: "Child Collects", color: "#00B14F" },
                  { icon: Bell, label: "Parent Notified", color: "#0057D9" },
                ].map(({ icon: Icon, label, color }, i, arr) => (
                  <div key={label} className="flex lg:flex-col items-center gap-3 lg:gap-2 flex-shrink-0">
                    <div className="flex items-center gap-3 lg:flex-col lg:gap-2">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: `${color}15` }}>
                        <Icon className="w-6 h-6" style={{ color }} />
                      </div>
                      <p className="text-xs font-semibold text-[#1A1A1A] text-center" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
                    </div>
                    {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-[#CBD5E1] flex-shrink-0 rotate-90 lg:rotate-0" />}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Safety guarantees */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold text-[#FFD54A] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Our Guarantees</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Built on Trust at Every Layer</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: ShieldCheck, title: "Verified Vendors", desc: "Background-checked before joining. Continuously monitored." },
              { icon: CreditCard, title: "Escrow Payments", desc: "Funds held securely until delivery is confirmed by the school." },
              { icon: Package, title: "Photo Proof", desc: "Every delivery is photographed on arrival and logged digitally." },
              { icon: Clock, title: "24hr Disputes", desc: "Any issue raised is resolved within one business day — guaranteed." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-11 h-11 bg-[#FFD54A]/15 rounded-xl flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#FFD54A]" /></div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                  <p className="text-sm text-[#94A3B8] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 0.04}>
                <div className={cn("rounded-2xl border transition-all duration-300 overflow-hidden", openFaq === i ? "border-[#0057D9]/30 bg-[#F0F5FF]" : "border-border bg-white hover:border-[#0057D9]/20")}>
                  <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className={cn("font-semibold pr-4", openFaq === i ? "text-[#0057D9]" : "text-[#1A1A1A]")} style={{ fontFamily: "Poppins, sans-serif" }}>{q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-[#0057D9] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />}
                  </button>
                  {openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{a}</p></div>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Get Started?" subtitle="Join parents, vendors, and schools already using FleetGroove to make school shopping safe and simple." primaryLabel="Create Free Account" primaryTo="/contact" secondaryLabel="Become a Vendor" secondaryTo="/vendors" />
    </>
  );
}