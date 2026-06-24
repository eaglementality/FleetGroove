import { motion } from "motion/react";
import { Users, Store, School, ShieldCheck, Heart, Lightbulb, Globe, ArrowRight } from "lucide-react";
import { FadeIn, CTABanner } from "../shared";
import { Link } from "react-router";
import me from "../assets/IMG-20250224-WA0003.jpg";

const values = [
  { icon: ShieldCheck, title: "Safety Above All", desc: "Every decision we make starts with one question: does this make school deliveries safer for children?" },
  { icon: Heart, title: "Community First", desc: "We exist to serve parents, schools, and local vendors — not shareholders. Our success is measured by theirs." },
  { icon: Lightbulb, title: "Relentless Innovation", desc: "We build technology that solves real problems for real families. Simple, powerful, and always improving." },
  { icon: Globe, title: "Inclusive Access", desc: "Every school, every neighbourhood, every budget. We're building a platform that leaves no family behind." },
];

const team = [
  // { name: "Ama Boateng", role: "Co-Founder & CEO", bio: "Former education policy advisor with 10+ years scaling EdTech startups across West Africa.", avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&auto=format" },
  { name: "Jesse Yeboah", role: "Co-Founder & CEO", bio: "Software engineer with a passion for building scalable solutions that improve lives.", avatar: me },
  // { name: "Nana Kweku Asante", role: "Co-Founder & CTO", bio: "Ex-Google engineer obsessed with logistics technology and last-mile delivery infrastructure.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format" },
  // { name: "Efua Mensah", role: "Head of Partnerships", bio: "Built school network programmes at three NGOs before joining FleetGroove at inception.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&auto=format" },
  // { name: "Kofi Darko", role: "Head of Operations", bio: "Supply chain specialist who previously managed distribution for a national pharmacy network.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format" },
  // { name: "Abena Osei", role: "Head of Design", bio: "Product designer focused on inclusive, accessible experiences for diverse user groups.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format" },
  // { name: "Samuel Tetteh", role: "Head of Vendor Success", bio: "Former market researcher who built a vendor onboarding programme that is now the industry standard.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format" },
];

const milestones = [
  { year: "2022", title: "Founded", desc: "FleetGroove was born from a simple frustration — parents couldn't safely get supplies to their children at school." },
  { year: "2023", title: "First 10 Schools", desc: "We launched a pilot with 10 schools in Accra. Within 3 months, order volumes exceeded every projection." },
  { year: "2024", title: "500+ Vendors", desc: "Our vendor network crossed 500 verified suppliers and expanded to 5 cities across the country." },
  { year: "2025", title: "50,000 Parents", desc: "Half a million orders processed. Parents rated us 4.9/5 for safety and convenience." },
  { year: "2026", title: "100+ Schools", desc: "We now partner with over 100 schools and are expanding to 3 new countries this year." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1632215861513-130b66fe97f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBsZWFybmluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3ODIzMzYxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Students learning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0A1628]/85" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057D9]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFD54A]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#FFD54A]/15 text-[#FFD54A] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Our Story
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            Built for <span className="text-[#FFD54A]">Every Child's</span> Education
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            FleetGroove started with a simple belief: every child deserves to have what they need for school, delivered safely and without burdening their parents. We built the platform that makes that possible.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Our Mission</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3 mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Removing Barriers Between Parents and School Success</h2>
              <p className="text-[#6B7280] leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                We started FleetGroove after seeing parents struggle to get the right supplies to their children — especially working parents who couldn't always visit the school. The problem wasn't willingness. It was access.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                So we built a platform that takes the complexity out of school shopping. One that connects parents to trusted local vendors, routes deliveries safely through schools, and gives everyone — parents, vendors, and administrators — full visibility and peace of mind.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#0057D9] hover:bg-[#0046b0] px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Join Our Mission <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEdoYW5haWFuJTIwdGVlbmFnZSUyMHN0dWRlbnQlMjB1bmlmb3JtJTIwc21pbGluZ3xlbnwxfHx8fDE3ODIzMzM2ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Happy Ghanaian SHS student" className="rounded-2xl object-cover w-full h-48" />
                <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=300&fit=crop&auto=format" alt="School building" className="rounded-2xl object-cover w-full h-48 mt-8" />
                <img src="https://images.unsplash.com/photo-1687422808384-c896d0efd4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEFmcmljYW4lMjB3b21hbiUyMHNlbGxpbmclMjBzdXBwbGllcyUyMHN0b3JlJTIwb3duZXJ8ZW58MXx8fHwxNzgyMzMzOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Ghanaian vendor" className="rounded-2xl object-cover w-full h-48 -mt-4" />
                <img src="https://images.unsplash.com/photo-1729691031598-a97244ce0503?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMEFmcmljYW4lMjBoaWdoJTIwc2Nob29sJTIwc3R1ZGVudCUyMHVuaWZvcm0lMjBzbWlsaW5nfGVufDF8fHx8MTc4MjMzNDEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="African student with school supplies" className="rounded-2xl object-cover w-full h-48 mt-4" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#F8F9FC] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[{ icon: School, val: "100+", label: "Partner Schools", color: "#B8860B" }, { icon: Store, val: "500+", label: "Verified Vendors", color: "#00B14F" }, { icon: Users, val: "50K+", label: "Active Parents", color: "#0057D9" }, { icon: ShieldCheck, val: "0", label: "Security Incidents", color: "#00B14F" }].map(({ icon: Icon, val, label, color }) => (
              <FadeIn key={label}>
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color }} />
                <p className="text-4xl font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{val}</p>
                <p className="text-sm text-[#6B7280] font-medium" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#0057D9] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Our Values</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>What We Stand For</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="bg-[#F8F9FC] rounded-2xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 bg-[#0057D9]/10 rounded-2xl flex items-center justify-center mx-auto mb-5"><Icon className="w-7 h-7 text-[#0057D9]" /></div>
                  <h4 className="font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#FFD54A] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>Our Journey</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>From Idea to Impact</h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-7 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#0057D9]/20 lg:-translate-x-0.5" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }, i) => (
                <FadeIn key={year} delay={i * 0.08}>
                  <div className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className="flex-shrink-0 w-14 h-14 bg-[#0057D9] rounded-full flex items-center justify-center z-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
                      <span className="text-white text-xs font-bold" style={{ fontFamily: "Poppins, sans-serif" }}>{year}</span>
                    </div>
                    <div className={`lg:w-5/12 bg-white rounded-2xl p-6 border border-border shadow-sm ${i % 2 === 0 ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
                      <h4 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>{title}</h4>
                      <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-xs font-semibold text-[#00B14F] uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>The Team</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mt-3" style={{ fontFamily: "Poppins, sans-serif" }}>The People Behind FleetGroove</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map(({ name, role, bio, avatar }, i) => (
              <FadeIn key={name} delay={i * 0.07}>
                <div className="bg-[#F8F9FC] rounded-3xl p-7 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <img src={avatar} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-[#0057D9]/10" />
                  <h4 className="font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>{name}</h4>
                  <p className="text-xs text-[#0057D9] font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{role}</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Join the FleetGroove Family" subtitle="Whether you're a parent, vendor, or school — there's a place for you on the platform that's changing school shopping forever." primaryLabel="Get Started Today" primaryTo="/contact" secondaryLabel="Learn How It Works" secondaryTo="/how-it-works" />
    </>
  );
}