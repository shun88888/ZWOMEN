'use client'

import { useState } from 'react'
import { Menu, X, Instagram, Twitter } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-wider">
              MONOCHROME
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#collections" className="text-gray-300 hover:text-white transition-colors duration-200">
                Collections
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
              <a
                href="#collections"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}