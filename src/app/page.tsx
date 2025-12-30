"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <a href="#home">
                <Image
                  src="/logo.png"
                  alt="Ottawa Gutter Cleaning & Exterior Services"
                  width={180}
                  height={60}
                  className="h-14 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#1e3a5f] hover:text-[#0ea5e9] font-medium transition">Home</a>
              <a href="#services" className="text-[#1e3a5f] hover:text-[#0ea5e9] font-medium transition">Services</a>
              <a href="#about" className="text-[#1e3a5f] hover:text-[#0ea5e9] font-medium transition">About</a>
              <a href="#contact" className="text-[#1e3a5f] hover:text-[#0ea5e9] font-medium transition">Contact</a>
            </div>

            <div className="hidden md:block">
              <a href="tel:819-328-1394" className="bg-[#f97316] text-white px-6 py-2 rounded-full hover:bg-[#ea580c] font-semibold transition shadow-lg">
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#1e3a5f]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-[#1e3a5f] hover:text-[#0ea5e9] font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block py-2 text-[#1e3a5f] hover:text-[#0ea5e9] font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block py-2 text-[#1e3a5f] hover:text-[#0ea5e9] font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block py-2 text-[#1e3a5f] hover:text-[#0ea5e9] font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="tel:819-328-1394" className="block mt-2 bg-[#f97316] text-white px-6 py-2 rounded-full text-center hover:bg-[#ea580c] font-semibold transition">
                Call Now
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[#152a45] via-[#1e3a5f] to-[#0891b2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Gutter Services in Ottawa - TEST
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#e0f2fe] max-w-3xl mx-auto">
              Professional gutter cleaning, repair, and pressure washing services to protect your home from water damage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-[#f97316] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ea580c] transition shadow-lg">
                Get a Free Quote
              </a>
              <a href="tel:819-328-1394" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1e3a5f] transition">
                Call 819-328-1394
              </a>
            </div>
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-[#0891b2] to-white"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive exterior services to keep your home looking great and protected from the elements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gutter Cleaning */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 text-center hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0891b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Gutter Cleaning</h3>
              <p className="text-gray-600">
                Remove leaves, debris, and buildup from your gutters to ensure proper water flow and prevent damage to your home&apos;s foundation.
              </p>
            </div>

            {/* Gutter Repair */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 text-center hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0891b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Gutter Repair</h3>
              <p className="text-gray-600">
                Fix leaks, sagging gutters, and damaged sections to restore your gutter system to optimal working condition.
              </p>
            </div>

            {/* Pressure Washing */}
            <div className="bg-[#f8fafc] rounded-2xl p-8 text-center hover:shadow-xl transition border border-gray-100">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0891b2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Pressure Washing</h3>
              <p className="text-gray-600">
                Deep clean your driveway, deck, siding, and other exterior surfaces to remove dirt, mold, and stains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">Fast</div>
              <p className="text-gray-600">Same-Week Service</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">Free</div>
              <p className="text-gray-600">No-Obligation Quotes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0891b2] mb-2">Local</div>
              <p className="text-gray-600">Ottawa Owned & Operated</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                Your Trusted Ottawa Gutter Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ottawa Gutter Cleaning & Exterior Services, we understand how important it is to protect your home from water damage. Clogged or damaged gutters can lead to foundation problems, basement flooding, and costly repairs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We provide reliable, professional service to homeowners throughout the Ottawa area. Our team is fully equipped to handle all your gutter and exterior cleaning needs, ensuring your home stays protected year-round.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#0891b2] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fully insured for your peace of mind
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#0891b2] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional and courteous service
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-[#0891b2] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Competitive pricing with no hidden fees
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0891b2] rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Service Area</h3>
              <p className="text-[#e0f2fe] mb-4">
                We proudly serve homeowners throughout the Ottawa region, including:
              </p>
              <ul className="space-y-2 text-[#e0f2fe]">
                <li>• Downtown Ottawa</li>
                <li>• Kanata</li>
                <li>• Barrhaven</li>
                <li>• Orleans</li>
                <li>• Nepean</li>
                <li>• Gloucester</li>
                <li>• And surrounding areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-lg text-[#e0f2fe] max-w-2xl mx-auto">
              Ready to protect your home? Contact us today for a free, no-obligation quote.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0891b2] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:819-328-1394" className="text-[#f97316] hover:text-[#ea580c] text-xl font-bold">
                      819-328-1394
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0891b2] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:ameer.sharaf10@gmail.com" className="text-[#0ea5e9] hover:text-[#e0f2fe]">
                      ameer.sharaf10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#0891b2] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Service Area</h4>
                    <p className="text-[#e0f2fe]">Ottawa and surrounding areas</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="mt-8 bg-[#f97316] rounded-2xl p-6 text-center">
                <p className="text-lg font-semibold mb-2">Ready to get started?</p>
                <a href="tel:819-328-1394" className="text-2xl font-bold hover:underline">
                  Call 819-328-1394
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-[#1e3a5f] shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="gutter-repair">Gutter Repair</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f97316] text-white py-4 rounded-lg font-semibold hover:bg-[#ea580c] transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#152a45] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo.png"
                alt="Ottawa Gutter Cleaning & Exterior Services"
                width={200}
                height={80}
                className="h-16 w-auto mb-4 bg-white rounded-lg p-2"
              />
              <p className="text-sm">
                Professional gutter cleaning, repair, and pressure washing services in Ottawa.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-[#0ea5e9] transition">Gutter Cleaning</a></li>
                <li><a href="#services" className="hover:text-[#0ea5e9] transition">Gutter Repair</a></li>
                <li><a href="#services" className="hover:text-[#0ea5e9] transition">Pressure Washing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:819-328-1394" className="text-[#f97316] hover:text-[#ea580c] font-semibold transition">819-328-1394</a></li>
                <li><a href="mailto:ameer.sharaf10@gmail.com" className="hover:text-[#0ea5e9] transition">ameer.sharaf10@gmail.com</a></li>
                <li>Ottawa, Ontario</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Ottawa Gutter Cleaning & Exterior Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
