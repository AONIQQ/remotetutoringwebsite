import React, { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div ref={modalRef} className="bg-[#1F1D24] p-8 rounded-lg w-full max-w-2xl text-white relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <p className="mb-6 text-base sm:text-lg">
            Please don&apos;t hesitate to reach out via email or text with any questions, comments, or concerns. If
            you&apos;d prefer to speak by phone, you are welcome to schedule an appointment. I respond to all
            messages personally and do not outsource support. As such, please be patient if I am unable to
            respond immediately.
          </p>
          <p className="text-[#8BA1AC] text-2xl mb-2">Email: Rob@remotetutoring.com</p>
          <p className="text-[#8BA1AC] text-2xl mb-6">Phone: 443-970-4499</p>
          <a href="/book" className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-3 px-6 rounded-lg w-full text-xl font-semibold inline-block text-center">
            Book A Discovery Call
          </a>
        </div>
      </div>
    </div>
  )
}