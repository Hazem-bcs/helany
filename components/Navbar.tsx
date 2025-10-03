'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaTooth } from 'react-icons/fa'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'عن الطبيب' },
    { href: '/services', label: 'الخدمات' },
    { href: '/contact', label: 'تواصل معنا' },
    { href: '/booking', label: 'احجز موعدك', special: true },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
              <FaTooth className="text-white text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">د. محمد حلاني</span>
              <span className="text-sm text-gray-600">عيادة الأسنان</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.special
                    ? 'btn-primary'
                    : 'text-gray-700 hover:text-primary font-semibold transition-colors duration-300'
                }
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+963962625044"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
            >
              <FaPhone className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={
                  link.special
                    ? 'block text-center btn-primary my-3'
                    : 'block py-3 text-gray-700 hover:text-primary hover:bg-accent rounded-lg px-4 transition-all duration-300'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}


