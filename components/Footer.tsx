'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ContactModal } from '@/components/ContactModal'

function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <>
      <footer className="relative bg-cover bg-center py-12 bg-[#1F1D24] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <Image src="/logo/logo.png" alt="Remote Tutoring Logo" width={300} height={75} className="mb-6" />
          </div>
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-4">
              <Link href="/about" className="hover:text-[#52747D]">About</Link>
              <Link href="/services" className="hover:text-[#52747D]">Services</Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="hover:text-[#52747D] bg-transparent border-none cursor-pointer"
              >
                Contact
              </button>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Remote Tutoring. All rights reserved.</p>
        <Link href="https://www.aoniqq.com/websitecreation" className="hover:text-[#A3B8C2] transition-colors duration-300 underline mt-4">
          Site by Aoniqq LLC
        </Link>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  )
}

export default Footer