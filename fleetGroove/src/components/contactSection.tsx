'use client'
import { Button } from './ui/button'

function ContactSection() {
    // function handleSubmit(){

    // }
  return (
    <section
          id="contact-form"
          className="py-20 px-6 bg-gray-900 text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Book a Free Demo
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Let us show you how FleetGroove can optimize your logistics
            operations. Schedule a 1-on-1 walkthrough.
          </p>
          <form onSubmit={(e)=>{console.log(e)}} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400"
              name='fullname'
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400"
              name='email'
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400 md:col-span-2"
              name='tel'
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-md focus:ring-2 focus:ring-yellow-400 md:col-span-2"
              name='message'
              required
            ></textarea>
            <Button
              type="submit"
              className="md:col-span-2 bg-yellow-400 text-black hover:bg-yellow-300"
            >
              Schedule Demo
            </Button>
          </form>
        </section>
  )
}

export default ContactSection
