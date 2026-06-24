import { motion } from "motion/react";
import { Store, ShieldCheck, LayoutDashboard, Bell, CreditCard, TrendingUp, Package, Users, Star, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { FadeIn, CTABanner } from "../shared";
import { Link } from "react-router";

const benefits = [
  { icon: Users, title: "Access 50,000+ Parents", desc: "Tap into an active, captive audience of parents who need your products every term — no cold outreach needed." },
  { icon: ShieldCheck, title: "Trust by Association", desc: "Being school-approved instantly builds credibility. Parents trust vendors on FleetGroove because schools do." },
  { icon: LayoutDashboard, title: "Powerful Dashboard", desc: "Manage inventory, track orders, view analytics, and handle deliveries all from one clean dashboard." },
  { icon: CreditCard, title: "Fast Payments", desc: "Payments are released within 24 hours of confirmed school delivery. No chasing invoices." },
  { icon: Bell, title: "Order Notifications", desc: "Real-time alerts for new orders, dispatch reminders, and delivery confirmations keep you on top of your business." },
  { icon: TrendingUp, title: "Growth Analytics", desc: "See your best-selling products, top schools, and peak order times to make data-driven stocking decisions." },
];

const requirements = [
  "Valid business registration certificate",
  "National ID of business owner(s)",
  "Product catalogue with pricing",
  "Proof of product safety compliance",
  "Clean criminal background check",
  "At least one school reference (optional but helpful)",
];

const pricingPlans = [
  { name: "Starter", commission: "8%", features: ["Up to 50 products", "3 school partnerships", "Standard support", "Basic analytics"], color: "#6B7280" },
  { name: "Growth", commission: "6%", features: ["Up to 200 products", "Unlimited schools", "Priority support", "Full analytics suite", "Featured listings"], color: "#0057D9", popular: true },
  { name: "Enterprise", commission: "4%", features: ["Unlimited products", "Dedicated account manager", "24/7 support", "Custom delivery SLAs", "API access"], color: "#00B14F" },
];

const testimonials = [
  { name: "Kwame Mensah", role: "Mensah Stationery Co.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format", quote: "My sales grew 3× within two months of joining. The platform handles payments, delivery coordination, and school communication — it's a game changer." },
  { name: "Abena Boateng", role: "Sunrise Uniforms Ltd.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format", quote: "I used to dread the back-to-school rush. Now I just watch the orders come in and fulfill them. FleetGroove removed all the chaos from my process." },
  { name: "Daniel Opoku", role: "Scholar Books & Supplies", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format", quote: "The school-direct delivery model means parents actually trust us. Return rates are near zero and reviews are consistently 5-star." },
];

const steps = [
  { step: "01", title: "Submit Application", desc: "Complete our online vendor application with your business details and product catalogue." },
  { step: "02", title: "Verification (3–5 days)", desc: "Our team reviews your documents, runs background checks, and inspects product safety compliance." },
  { step: "03", title: "School Matching", desc: "We introduce your catalogue to partner schools. Schools choose to whitelist your products for their marketplace." },
  { step: "04", title: "Go Live & Sell", desc: "Products are visible to parents at whitelisted schools. Start receiving orders from day one." },
];

export default function Vendors() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8F9FC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00B14F]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#00B14F]/10 text-[#00B14F] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                <Store className="w-3.5 h-3.5" /> For Vendors & Suppliers
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Sell to Schools. <span className="text-[#00B14F]">Scale Fast.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Join 500+ verified vendors reaching 50,000 parents across 100+ schools. No marketing spend. No cold calls. Just orders — delivered through a trusted platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#00B14F] hover:bg-[#009A44] px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  Apply to Join <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] border-2 border-[#E5E7EB] hover:border-[#00B14F] px-7 py-3.5 rounded-xl transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                  See How It Works
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap gap-4">
                {[{ label: "3× Average Sales Growth", color: "#00B14F" }, { label: "24hr Payment Release", color: "#0057D9" }, { label: "500+ Active Vendors", color: "#B8860B" }].map(({ label, color }) => (
                  <div key={label} className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-sm border border-border">
                    <CheckCircle className="w-4 h-4" style={{ color }} />
                    <span className="text-xs font-semibold text-[#1A1A1A]" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1687422808384-c896d0efd4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEFmcmljYW4lMjB3b21hbiUyMHNlbGxpbmclMjBzdXBwbGllcyUyMHN0b3JlJTIwb3duZXJ8ZW58MXx8fHwxNzgyMzMzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Happy Ghanaian female provision seller" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00B14F]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00B14F]/10 rounded-xl flex items-center justify-center"><TrendingUp className="w-5 h-5 text-[#00B14F]" /></div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>Revenue Up 3× in 60 Days</p>
                    <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>Average vendor growth on FleetGroove</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Vendor Benefits</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Why Top Vendors Choose FleetGroove</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="group bg-[#F8F9FC] hover:bg-white rounded-2xl p-7 border border-border hover:border-[#00B14F]/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#00B14F]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#00B14F] transition-colors"><Icon className="w-6 h-6 text-[#00B14F] group-hover:text-white transition-colors" /></div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-20 lg:py-28 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Getting Started</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>From Application to First Order</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {steps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-border hover:border-[#00B14F]/30 hover:shadow-md transition-all duration-300 flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00B14F] rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>{step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                    <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Requirements</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>What You'll Need to Apply</h2>
              <p className="text-[#6B7280] leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>Our vetting process is thorough because school families trust us. Here's what to prepare:</p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00B14F] flex-shrink-0" />
                    <span className="text-sm text-[#4B5563]" style={{ fontFamily: "Inter, sans-serif" }}>{req}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-[#00B14F] rounded-3xl p-8 text-white">
                <Clock className="w-10 h-10 text-white/60 mb-4" />
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Approval in 3–5 Days</h3>
                <p className="text-white/80 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Our team works fast. Once you submit your application, expect a response within 72 hours and full approval in under a week.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#00B14F] font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#F0FAF4] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  Start Your Application <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Simple, Commission-Based Pricing</h2>
            <p className="text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>No setup fees. No monthly subscriptions. You pay a small commission only when you sell.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map(({ name, commission, features, color, popular }) => (
              <FadeIn key={name}>
                <div className={`relative rounded-2xl p-7 border-2 transition-all duration-300 h-full flex flex-col ${popular ? "border-[#0057D9] shadow-xl bg-white" : "border-border bg-white hover:border-[#0057D9]/30 hover:shadow-md"}`}>
                  {popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0057D9] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>Most Popular</div>}
                  <div className="mb-5">
                    <h4 className="font-bold text-[#1A1A1A] text-lg mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold" style={{ color, fontFamily: "Poppins, sans-serif" }}>{commission}</span>
                      <span className="text-[#6B7280] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>per order</span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color }} />
                        <span className="text-sm text-[#4B5563]" style={{ fontFamily: "Inter, sans-serif" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full text-center text-sm font-semibold py-3 rounded-xl transition-all duration-200 block" style={{ backgroundColor: popular ? color : `${color}15`, color: popular ? "white" : color, fontFamily: "Inter, sans-serif" }}>
                    Get Started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Vendor Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Vendors Who Made the Switch</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, quote }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-[#F8F9FC] rounded-3xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-[#FFD54A] text-[#FFD54A]" />)}</div>
                  <p className="text-[#4B5563] text-sm leading-relaxed flex-1 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>"{quote}"</p>
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

      <CTABanner title="Ready to Grow Your Business?" subtitle="Apply today and start reaching thousands of school families who are already looking for your products." primaryLabel="Apply to Become a Vendor" primaryTo="/contact" />
    </>
  );
}