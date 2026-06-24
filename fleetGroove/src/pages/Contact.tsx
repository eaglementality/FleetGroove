import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Store, School } from "lucide-react";
import { FadeIn } from "../shared";

function cn(...c: (string | false | undefined | null)[]) { return c.filter(Boolean).join(" "); }

const contactOptions = [
  { icon: Users, label: "I'm a Parent", desc: "Questions about ordering or tracking", color: "#0057D9" },
  { icon: Store, label: "I'm a Vendor", desc: "Applying or managing my account", color: "#00B14F" },
  { icon: School, label: "I'm a School", desc: "Partnership or admin enquiries", color: "#B8860B" },
];

const contactDetails = [
  { icon: Mail, label: "Email Us", value: "hello@fleetgroove.com", sub: "We reply within 4 business hours" },
  { icon: Phone, label: "Call Us", value: "+233 30 123 4567", sub: "Mon–Fri, 8am–6pm GMT" },
  { icon: MapPin, label: "Head Office", value: "14 Innovation Drive, Accra", sub: "Ghana, West Africa" },
  { icon: Clock, label: "Support Hours", value: "Mon–Sat, 7am–8pm", sub: "Emergency line 24/7 for schools" },
];

export default function Contact() {
  const [role, setRole] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", school: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F8F9FC] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0057D9]/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#0057D9]/10 text-[#0057D9] text-xs font-semibold px-3 py-1.5 rounded-full mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Get In Touch
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>
            We're Here to <span className="text-[#0057D9]">Help</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-[#6B7280] max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Whether you're a parent with a question, a vendor ready to apply, or a school exploring partnership — our team is ready to help.
          </motion.p>
        </div>
      </section>

      {/* Contact form + details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <FadeIn>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-[#F0FAF4] rounded-3xl border border-[#00B14F]/20">
                  <div className="w-20 h-20 bg-[#00B14F]/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#00B14F]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>Message Sent!</h3>
                  <p className="text-[#6B7280] max-w-xs" style={{ fontFamily: "Inter, sans-serif" }}>Thanks for reaching out. Our team will get back to you within 4 business hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", school: "", message: "" }); }} className="mt-8 text-sm font-semibold text-[#00B14F] hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>Send another message</button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Send Us a Message</h2>
                  <p className="text-[#6B7280] mb-7 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>First, tell us who you are so we can route your enquiry correctly.</p>

                  {/* Role selector */}
                  <div className="flex gap-2 mb-8 flex-wrap">
                    {contactOptions.map(({ icon: Icon, label, color }, i) => (
                      <button key={label} onClick={() => setRole(i)} className={cn("flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200", role === i ? "border-transparent text-white shadow-md" : "border-border text-[#6B7280] hover:border-[#E5E7EB] bg-white")} style={{ backgroundColor: role === i ? color : undefined, fontFamily: "Inter, sans-serif" }}>
                        <Icon className="w-4 h-4" /> {label}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Full Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-[#F8F9FC] border border-border rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all" placeholder="Ama Boateng" style={{ fontFamily: "Inter, sans-serif" }} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Email Address *</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-[#F8F9FC] border border-border rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all" placeholder="ama@example.com" style={{ fontFamily: "Inter, sans-serif" }} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Phone Number</label>
                        <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 bg-[#F8F9FC] border border-border rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all" placeholder="+233 XX XXX XXXX" style={{ fontFamily: "Inter, sans-serif" }} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>{role === 0 ? "Child's School" : role === 1 ? "Business Name" : "School Name"}</label>
                        <input value={form.school} onChange={(e) => setForm({ ...form, school: e.target.value })} className="w-full px-4 py-3 bg-[#F8F9FC] border border-border rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all" placeholder={role === 0 ? "Greenwood High School" : role === 1 ? "Mensah Stationery Co." : "St. Francis Primary"} style={{ fontFamily: "Inter, sans-serif" }} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1A1A1A] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Your Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-[#F8F9FC] border border-border rounded-xl text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0057D9] focus:ring-2 focus:ring-[#0057D9]/20 transition-all resize-none" placeholder="Tell us how we can help..." style={{ fontFamily: "Inter, sans-serif" }} />
                    </div>
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#0057D9] hover:bg-[#0046b0] py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </FadeIn>

            {/* Contact details */}
            <FadeIn delay={0.15} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>Contact Details</h2>
                <p className="text-[#6B7280] text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>Prefer to reach out directly? Here's where to find us.</p>
              </div>
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-4 bg-[#F8F9FC] rounded-2xl p-5 border border-border hover:border-[#0057D9]/20 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 bg-[#0057D9]/10 rounded-xl flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-[#0057D9]" /></div>
                    <div>
                      <p className="text-xs font-semibold text-[#6B7280] mb-0.5 uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
                      <p className="font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>{value}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick links by role */}
              <div className="bg-[#0A1628] rounded-2xl p-6">
                <h4 className="font-bold text-white mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>Quick Resources</h4>
                <div className="space-y-3">
                  {[{ label: "Parent Guide — How to Place Your First Order", color: "#0057D9" }, { label: "Vendor Application Checklist", color: "#00B14F" }, { label: "School Partnership Information Pack", color: "#FFD54A" }].map(({ label, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-sm text-[#94A3B8] hover:text-white cursor-pointer transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-[#F8F9FC] border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden shadow-lg h-72 lg:h-96">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&h=600&fit=crop&auto=format" alt="Accra, Ghana" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#0A1628]/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl px-8 py-5 shadow-xl text-center">
                  <MapPin className="w-8 h-8 text-[#0057D9] mx-auto mb-2" />
                  <p className="font-bold text-[#1A1A1A]" style={{ fontFamily: "Poppins, sans-serif" }}>14 Innovation Drive</p>
                  <p className="text-sm text-[#6B7280]" style={{ fontFamily: "Inter, sans-serif" }}>Accra, Ghana</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
