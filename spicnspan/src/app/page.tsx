'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBanner, setShowBanner] = useState(true)


useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % 10)
  }, 5000)
  return () => clearInterval(interval)
}, [])




 

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  

  const navLinks = ['services', 'About Us', 'Packages', 'Gallery']

  return (
    <div className="bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">Spic N Span</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer capitalize hover:text-blue-600 dark:hover:text-blue-400 transition"
                onClick={() => scrollToSection(link)}
              >
                {link}
              </li>
            ))}
          </ul>

         

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-blue-600 dark:text-blue-400"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Nav Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-8 pb-4 space-y-3">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="cursor-pointer capitalize text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => scrollToSection(link)}
                >
                  {link}
                </li>
              ))}
             
              
            </ul>
          </div>
        )}
      </nav>
      {showBanner && (
  <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center text-center text-sm md:text-base">
    <span>
      📞 Please call or text <strong>416-389-8235</strong> to book an appointment.
    </span>
    <button
      onClick={() => setShowBanner(false)}
      className="ml-4 text-white hover:text-gray-200 text-xl font-bold"
      aria-label="Close banner"
    >
      ×
    </button>
  </div>
)}

      {/* Hero Section */}
      <section
  id="hero"
  className="h-[70vh] flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat relative z-0"
  style={{ backgroundImage: "url('/hero.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 z-0"></div>

  <div className="relative z-10 text-center text-white">
    <p className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm tracking-wider font-semibold shadow-lg">
      BOOK NOW
    </p>
    <div className="mt-4">
      <a
        href="tel:+1234567890"
        className="inline-block bg-black text-white font-medium px-5 py-2 rounded-md shadow-md text-sm hover:scale-105 transition"
      >
        Request a Quote →
      </a>
    </div>
  </div>
</section>




 {/* Services Section */}
 <section
  id="services"
  className="-mt-20 pt-24 pb-20 px-6 bg-gray-900 font-[Inter] relative z-[5]"
>
  <div className="flex flex-wrap justify-center gap-6">
    {/* Card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 w-[90%] sm:w-[280px] rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
    >
      <Image
        src="/cleaning.jpg"
        alt="Home Cleaning"
        width={800}
        height={300}
        className="w-full h-44 object-cover rounded-t-xl"
      />
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Home & APT Cleaning
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Sparkling residential and apartment cleaning services tailored to your needs.
        </p>
      </div>
    </motion.div>

    {/* Card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 w-[90%] sm:w-[280px] rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
    >
      <Image
        src="/detailing.jpg"
        alt="Auto Detailing"
        width={800}
        height={300}
        className="w-full h-44 object-cover rounded-t-xl"
      />
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Auto Interior & Exterior Detailing
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Complete vehicle detailing to bring out that showroom finish—inside and out.
        </p>
      </div>
    </motion.div>

    {/* Card 3 */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-white dark:bg-gray-800 w-[90%] sm:w-[280px] rounded-xl shadow-md hover:shadow-xl transition border border-gray-200 dark:border-gray-700"
    >
      <Image
        src="/engine.jpg"
        alt="Engine Cleaning"
        width={800}
        height={300}
        className="w-full h-44 object-cover rounded-t-xl"
      />
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Engine Cleaning
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Deep engine bay cleaning to maintain performance and aesthetics.
        </p>
      </div>
    </motion.div>
  </div>
</section>





      {/* About Section */}
      <section id="About Us" className="py-20 px-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
          About Us
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300">
        At spic N span, we are dedicated to providing exceptional auto detailing services that restore and enhance the beauty of your vehicle. With a passion for perfection and a commitment to customer satisfaction, our team of experienced professionals ensures every vehicle receives the highest level of care and attention to detail.
        </p>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-gray-300">
        Founded on the principles of quality, reliability, and transparency, we use only the finest products and advanced techniques to deliver remarkable results. Whether it's a thorough exterior wash, interior cleaning, or paint correction, we go above and beyond to ensure your car looks its absolute best.
        </p>
      </section>

      {/* Gallery Section (was Contact) */}
<section id="gallery" className="py-20 px-8 bg-white dark:bg-gray-900">
  <h2 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
    Our Work Gallery
  </h2>

  <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <img
          key={i}
          src={`/gallery/${i + 1}.jpeg`}
          alt={`Gallery ${i + 1}`}
          className="w-full flex-shrink-0 object-cover h-96"
        />
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="absolute inset-0 flex justify-between items-center px-4">
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 9 : prev - 1))}
        className="text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-70"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 9 ? 0 : prev + 1))}
        className="text-white text-3xl bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-70"
      >
        ›
      </button>
    </div>
  </div>
</section>


      {/* Footer */}
<footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 pt-16 pb-6 px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
    
    {/* Logo & Description */}
    <div>
      <h3 className="text-2xl font-bold text-blue-500 mb-4">Spic N Span</h3>
      <p className="text-sm text-gray-400">
        Premium car detailing service in Canada. We restore your car’s shine with precision and care.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        {['hero', 'services', 'about', 'contact'].map((id) => (
          <li
            key={id}
            className="hover:text-blue-400 cursor-pointer transition"
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </li>
        ))}
      </ul>
    </div>

    {/* Partners */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Partners</h4>
      <ul className="space-y-2 text-sm">
        <li>AutoCare Pro</li>
        <li>ShineHub</li>
        <li>DetailWorks</li>
        <li>Eco Wash</li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
      <div className="flex space-x-4">
  <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook"><FaFacebookF /></a>
  <a href="#" className="hover:text-blue-400 transition" aria-label="Instagram"><FaInstagram /></a>
  <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter"><FaTwitter /></a>
  <a href="#" className="hover:text-blue-400 transition" aria-label="YouTube"><FaYoutube /></a>
</div>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t border-gray-700 mt-12 pt-4 text-center text-sm text-gray-500">
    <p>© {new Date().getFullYear()} Spic N Span. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}
