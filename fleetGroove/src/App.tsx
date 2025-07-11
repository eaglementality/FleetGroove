import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Smartphone, ClipboardList, ChevronDown } from "lucide-react";

export default function FleetGrooveLandingPage() {
  return (
    <main className="min-h-screen flex flex-col w-full">
            <div className="bg-gray-900 text-white font-sans scroll-smooth">
        {/* Top Bar */}
        <div className="bg-blue-900 text-white text-sm py-2 px-6 flex justify-between items-center">
          <div>
            <span className="mr-4">📞 +233 595545929</span>
            <span>✉️ jesseowusuyeboah99@gmail.com</span>
          </div>
          <div>
            <Button variant="link" className="text-white hover:text-yellow-400">Login</Button>
          </div>
        </div>

        {/* Header */}
        <header className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-gray-800 sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-yellow-400">FleetGroove</h1>
          <nav className="hidden md:flex space-x-6 text-gray-200">
            <a href="#solutions" className="hover:text-yellow-400">Solutions</a>
            <a href="#fleetgroove" className="hover:text-yellow-400">About</a>
            <a href="#newsletter" className="hover:text-yellow-400">Newsletter</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300">Pricing</Button>
        </header>

        {/* Hero Section */}
        <section className="relative w-full h-[90vh] overflow-hidden">
          <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/videos/fleet-background.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20 bg-black/60">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Transport & Logistics, Smarter.</h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200">
                FleetGroove delivers next-gen fleet monitoring, transport coordination, and compliance — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300">Explore FleetGroove</Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">Request Demo</Button>
              </div>
              <ul className="mt-8 space-y-2 text-gray-300 text-sm md:text-base">
                <li>✔ Real-time GPS Tracking</li>
                <li>✔ Driver Behavior Monitoring</li>
                <li>✔ Automated Route Optimization</li>
                <li>✔ Compliance & Proof of Delivery</li>
              </ul>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
            <a href="#solutions" className="animate-bounce text-white">
              <ChevronDown size={32} />
            </a>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-20 px-6 bg-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-4" />, 
              title: "Transport Management",
              desc: "Take control of your orders, planning and fleet with software that drives your business forward."
            },
            {
              icon: <Smartphone className="w-10 h-10 text-yellow-400 mx-auto mb-4" />, 
              title: "Fleet Monitoring",
              desc: "Gain real-time data from your fleet and drivers, from trip logging to in-vehicle tracking."
            },
            {
              icon: <ClipboardList className="w-10 h-10 text-yellow-400 mx-auto mb-4" />, 
              title: "Compliance",
              desc: "Stay compliant with tools like driver behavior logs, maintenance alerts and delivery proof."
            },
            {
              icon: <CheckCircle className="w-10 h-10 text-yellow-400 mx-auto mb-4" />, 
              title: "Warehouse Ops",
              desc: "Track and control warehouse operations with integrated stock movement and dispatch tools."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 p-6 text-center rounded-md shadow hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1">
              {item.icon}
              <h3 className="text-lg font-bold text-yellow-400 mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.desc}</p>
              <Button variant="ghost" className="text-yellow-400 hover:underline text-sm">Learn More →</Button>
            </div>
          ))}
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-20 px-6 bg-gray-800 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-6">
            Get updates, insights, and exclusive offers directly to your inbox. Stay ahead with FleetGroove.
          </p>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
            <input type="email" name="email" placeholder="Enter your email" required className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="hidden" name="_captcha" value="false" />
            <Button type="submit" className="bg-yellow-400 text-black hover:bg-yellow-300">Subscribe</Button>
          </form>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-20 px-6 bg-gray-900 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">Book a Free Demo</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Let us show you how FleetGroove can optimize your logistics operations. Schedule a 1-on-1 walkthrough.
          </p>
          <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input type="text" placeholder="Full Name" className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400" required />
            <input type="email" placeholder="Email Address" className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400" required />
            <input type="tel" placeholder="Phone Number" className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400 md:col-span-2" />
            <textarea rows={4} placeholder="Your Message" className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400 md:col-span-2" required></textarea>
            <Button type="submit" className="md:col-span-2 bg-yellow-400 text-black hover:bg-yellow-300">Schedule Demo</Button>
          </form>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 text-center text-sm text-gray-400 bg-gray-900 border-t border-gray-700">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">Get in Touch</h3>
          <p>Email: <a href="mailto:jesseowusuyeboah99@gmail.com" className="text-yellow-400 underline">jesseowusuyeboah99@gmail.com</a></p>
          <p>Phone: <a href="tel:+233595545929" className="text-yellow-400 underline">+233 595 545 929</a></p>
          <p className="mt-4">&copy; {new Date().getFullYear()} FleetGroove. Made in Ghana.</p>
        </footer>
      </div>
    </main>
  );
}
