import { motion } from "motion/react";
import { ShieldCheck, Bell, CheckCircle, Clock, LayoutDashboard, Package, Users, School, Star, ArrowRight } from "lucide-react";
import { FadeIn, CTABanner } from "../shared";
import { Link } from "react-router";

const benefits = [
  { icon: ShieldCheck, title: "Zero Security Risk", desc: "All vendors are background-checked and approved by our team before reaching your school gate. You maintain full whitelist control." },
  { icon: Clock, title: "Structured Delivery Windows", desc: "Set your own delivery schedule — before school, at break, after school. No disruption to classes whatsoever." },
  { icon: LayoutDashboard, title: "Admin Dashboard", desc: "Real-time visibility of expected deliveries, arrivals, and collections. All records are searchable and exportable." },
  { icon: Bell, title: "Automated Notifications", desc: "Parents and students are notified automatically at every stage — no manual communication needed from your staff." },
  { icon: Package, title: "Photographic Records", desc: "Every delivery is photographed on arrival and digitally logged. Dispute resolution is fast and evidence-backed." },
  { icon: Users, title: "Student Collection Logs", desc: "Digital signatures from students at collection. Full audit trail for every item that passes through your school." },
];

const testimonials = [
  { name: "Mrs. Adjoa Darko", role: "Head of Administration — Greenwood High", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format", quote: "We've had zero security incidents since adopting FleetGroove. The vendor verification process is thorough, and our staff appreciates the organized delivery windows." },
  { name: "Mr. Kofi Asante", role: "School Principal — Sunrise College", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format", quote: "The admin dashboard gives us complete visibility. Parents are happy, staff aren't overwhelmed, and our gate is no longer chaotic at drop-off time." },
  { name: "Ms. Abena Mensah", role: "Bursar — St. Francis Primary", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format", quote: "Onboarding took less than a week. The FleetGroove team handled everything and our parents noticed the difference within the first month." },
];

const onboardingSteps = [
  { step: "01", title: "Submit Application", desc: "Fill out the school registration form online. Provide your school name, address, and administrator contact." },
  { step: "02", title: "Onboarding Call", desc: "Our team schedules a 30-minute call to walk you through the platform, answer questions, and set up your account." },
  { step: "03", title: "Approve Your Vendors", desc: "Browse our verified vendor catalogue and select which suppliers you want active in your school's marketplace." },
  { step: "04", title: "Set Delivery Windows", desc: "Configure your school's delivery schedule — arrival times, gate access points, and your designated receiving staff." },
  { step: "05", title: "Go Live", desc: "Parents can immediately start browsing and ordering. You'll receive deliveries from day one — fully managed." },
];

export default function Schools() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8F9FC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8860B]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#B8860B]/10 text-[#B8860B] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                <School className="w-3.5 h-3.5" /> For School Administrators
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
                Safe Deliveries. <span className="text-[#B8860B]">Zero Disruption.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                FleetGroove gives your school complete control over which vendors access your campus, when deliveries arrive, and how students collect their items — all without burdening your staff.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#B8860B] hover:bg-[#9A6F09] px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  Register Your School <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] border-2 border-[#E5E7EB] hover:border-[#B8860B] px-7 py-3.5 rounded-xl transition-all duration-200" style={{ fontFamily: "Inter, sans-serif" }}>
                  See How It Works
                </Link>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&h=500&fit=crop&auto=format" alt="School administration" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#B8860B]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#00B14F]/10 rounded-xl flex items-center justify-center"><CheckCircle className="w-5 h-5 text-[#00B14F]" /></div>
                  <div>
                    <p className="font-bold text-[#1A1A1A] text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>100+ Partner Schools</p>
                    <p className="text-xs text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>Across the country and growing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[{ val: "100+", label: "Partner Schools" }, { val: "0", label: "Security Incidents" }, { val: "98%", label: "Staff Satisfaction" }, { val: "< 5min", label: "Avg. Delivery Handling" }].map(({ val, label }) => (
              <FadeIn key={label} className="text-center">
                <p className="text-4xl font-bold text-[#B8860B] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{val}</p>
                <p className="text-sm text-[#6B7280] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Why Schools Choose Us</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1A1A1A] mt-3 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Everything Your School Needs</h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>Designed with school administrators in mind — from gate security to parent communication.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-[#B8860B]/10 rounded-xl flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-[#B8860B]" /></div>
                  <h4 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Onboarding</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>Get Live in Under a Week</h2>
          </FadeIn>
          <div className="space-y-6">
            {onboardingSteps.map(({ step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.08}>
                <div className="flex gap-6 items-start bg-[#F8F9FC] rounded-2xl p-6 border border-border hover:border-[#B8860B]/30 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#B8860B] rounded-2xl flex items-center justify-center">
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

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <span className="text-xs font-semibold text-[#B8860B] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>From School Leaders</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>What Administrators Say</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, avatar, quote }, i) => (
              <FadeIn key={name} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
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

      <CTABanner title="Ready to Partner with FleetGroove?" subtitle="Join 100+ schools delivering a safer, smarter shopping experience to their families." primaryLabel="Register Your School" primaryTo="/contact" />
    </>
  );
}
