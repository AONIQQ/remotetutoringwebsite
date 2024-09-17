'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'
import dynamic from 'next/dynamic'
import { Menu, X } from 'lucide-react'

const CalendlyWidget = dynamic(() => import('@/components/CalendlyWidget').then(mod => mod.CalendlyWidget), {
  ssr: false,
  loading: () => <div className="h-[600px] max-h-[80vh] flex items-center justify-center text-white">Loading calendar...</div>
})

export default function BookPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col text-white font-sans">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-[#52747d] via-[#3F545D] to-[#52747d] text-white text-center py-2 text-xs sm:text-sm font-medium shadow-md">
        <div className="relative z-10">
          Only 20 openings available this semester! Schedule your free discovery call today!
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#1F1D24] flex justify-between items-center px-4 sm:px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo/logo.png" alt="Remote Tutoring Logo" width={140} height={35} className="w-32 sm:w-44 h-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="text-white hover:text-[#52747D] text-sm lg:text-base">Home</Link>
          <Link href="/about" className="text-white hover:text-[#52747D] text-sm lg:text-base">About</Link>
          <Link href="/services" className="text-white hover:text-[#52747D] text-sm lg:text-base">Services</Link>
          <button
            onClick={() => setContactModalOpen(true)}
            className="text-white hover:text-[#52747D] text-sm lg:text-base"
          >
            Contact
          </button>
          <div className="flex items-center text-[#52747D] text-sm lg:text-base">
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F1D24] py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-[#52747D] text-sm">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#52747D] text-sm">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#52747D] text-sm">
              Services
            </Link>
            <button
              onClick={() => {
                setContactModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-[#52747D] text-sm text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow relative">
        <Image
          src="/Background Graphics/Background_Static Dark Hexagon Pattern.png"
          alt="Hexagon Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#A3B8C2]">Book a Free Discovery Call</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#E0E7EB]">Don&apos;t waste time learning from your own mistakes.</h2>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-[#E0E7EB]">
              Book a free discovery call with me to see how we can work together to save you time and energy
              while achieving your goals. There are only a limited number of spots available each semester, so
              please be proactive in reaching out to make sure you can get your spot.
            </p>
            <CalendlyWidget />
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  )
}