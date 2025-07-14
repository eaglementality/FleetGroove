"use client";

import { Button } from "./ui/button";

function SubscribsionSection() {
  return (
    <section id="newsletter" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-6">
        Get updates, insights, and exclusive offers directly to your inbox. Stay
        ahead with FleetGroove.
      </p>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input type="hidden" name="_captcha" value="false" />
        <Button
          type="submit"
          className="bg-yellow-400 text-black hover:bg-yellow-300"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
}

export default SubscribsionSection;
