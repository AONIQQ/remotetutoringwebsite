'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Phone, FileText, Microscope, X } from 'lucide-react'
import { ContactModal } from '@/components/ContactModal'

export default function AboutPage() {
  const [degreesModalOpen, setDegreesModalOpen] = useState(false)
  const [experienceModalOpen, setExperienceModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setDegreesModalOpen(false)
        setExperienceModalOpen(false)
      }
    }

    if (degreesModalOpen || experienceModalOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [degreesModalOpen, experienceModalOpen])

  const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
    if (!isOpen) return null
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div ref={modalRef} className="bg-[#1F1D24] p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300">
            <X className="w-6 h-6" />
          </button>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen text-white font-sans">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-[#52747d] via-[#3F545D] to-[#52747d] text-white text-center py-2 text-sm font-medium shadow-md">
        <div className="relative z-10">
          Only 20 openings available this semester! Schedule your free discovery call today!
        </div>
      </div>

      {/* Header */}
      <header className="bg-[#1F1D24] flex justify-between items-center px-4 sm:px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo/logo.png" alt="Remote Tutoring Logo" width={180} height={45} />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-[#52747D]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#52747D]">About</Link>
          <Link href="/services" className="text-white hover:text-[#52747D]">Services</Link>
          <button onClick={() => setContactModalOpen(true)} className="text-white hover:text-[#52747D]">Contact</button>
          <Link href="/book" className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300">
            Book a Call
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative min-h-screen">
        <Image
          src="/Background Graphics/Background_Static Dark Hexagon Pattern.png"
          alt="Hexagon Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-[#A3B8C2]">ABOUT REMOTE TUTORING TEAM</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/*  <div className="flex justify-center md:justify-start">
                <Image src="/guy.png" alt="Robert Palkovitz" width={700} height={400} className="rounded-lg shadow-xl" />
              </div>
              */}
     
              <div className="bg-gradient-to-br from-[#1F1D24]/80 to-[#303B42]/80 p-6 rounded-lg shadow-xl backdrop-blur-sm text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-[#A3B8C2]">Robert Palkovitz</h2>
                <p className="mb-4 text-[#E0E7EB]">
                  Remote Tutoring is a Chemistry tutoring service led by Robert Palkovitz. As an undergrad and grad student, Rob taught, tutored, or TAd every class he could fit in his schedule. Rob graduated from Johns Hopkins University in 2021 with his Master&apos;s in Chemistry and has since worked as a startup launch manager and private consultant across multiple sectors.
                </p>
                <p className="mb-6 text-[#E0E7EB]">
                  Rob founded Remote Tutoring in 2024 to pursue his love of teaching while sustaining his private sector projects.
                </p>
                <button className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Book a free discovery call
                </button>
              </div>
            </div>

            <div className="mb-12 bg-gradient-to-br from-[#1F1D24]/80 to-[#303B42]/80 p-8 rounded-lg shadow-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 text-[#A3B8C2]">ABOUT ROB</h2>
              <p className="mb-4 text-[#E0E7EB]">
                I&apos;ve always been fascinated by how things work, from the macro all the way down to the nano. In college I took every Chemistry course available, earning an American Chemical Society certified Chemistry major, double-majoring with Biochemistry & Molecular Biology, and completed all the pre-med course requirements as a side interest. I conducted over 1000 hours of independent research in synthetic mechanistic organic chemistry, most of it during the summers. On top of all that, I tutored General Chemistry and Organic Chemistry 10 hours a week, served as a teaching assistant for multiple lab courses a semester, and ran weekly supplemental instruction for Organic Chemistry.
              </p>
              <p className="mb-4 text-[#E0E7EB]">
                I attended Johns Hopkins University for graduate school and joined the Tovar lab. I scored in the 96th percentile nationally on the Organic Chemistry ACS graduate school entrance exam. My coursework included Advanced Synthetic Organic Chemistry, Advanced Mechanistic Organic Chemistry, C & O Electrochemistry, Photophysics and Photochemistry, among others. My dissertation research focused on the development of biocompatible self-assembling photocatalytic organic nanomaterials for solar fuel production. I also served as a teaching assistant for General and Organic Chemistry, became a Head TA in my second year, and volunteered for remote summer teaching during the COVID pandemic. I also taught the Chemistry with Problem Solving course, a supplemental pass/fail credit for students who earned a grade lower than a B in a prior semester of Chemistry or who had not taken Chemistry in high school.
              </p>
              <p className="text-[#E0E7EB]">
                I left JHU in the fall of 2021 with a Master&apos;s in Chemistry after the pandemic slowdown prompted the realization that a long-term career in academia didn&apos;t align with my personal goals. After graduate school, I leaned fully into private consulting work, juggling high-stakes projects and averaging 100 working hours per week across several global time zones. This was, as most things are, fun until it wasn&apos;t. I scaled back on taking new consulting jobs and found that, once I could hear myself think, I really missed teaching. That love of teaching is what drives Remote Tutoring. The core idea behind Remote Tutoring is to allow me to continue teaching far into the future without having to sacrifice my other entrepreneurial obligations and opportunities. This benefits both of us, as it firmly believes that people who teach out of joy and genuine interest do a better job. I look forward to sharing my experience, knowledge, and enthusiasm with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <button 
                  onClick={() => setDegreesModalOpen(true)} 
                  className="w-full bg-gradient-to-r from-[#303B42]/80 to-[#1F1D24]/80 text-white py-3 px-4 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-[#52747D]" />
                    Degrees and Awards
                  </span>
                  <span>+</span>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => setExperienceModalOpen(true)} 
                  className="w-full bg-gradient-to-r from-[#303B42]/80 to-[#1F1D24]/80 text-white py-3 px-4 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    <Microscope className="w-5 h-5 mr-2 text-[#52747D]" />
                    Relevant Experience
                  </span>
                  <span>+</span>
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="mb-4 text-[#E0E7EB]">
                If you&apos;re interested in working with me, awesome, let&apos;s set up a call here. If you still have questions or just want to get a better feel, you&apos;re welcome to ask me during our meeting, or you can email or text me here.
              </p>
              <Link href="/book" className="inline-block">
                <button className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Book a free discovery call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>


      {/* Modals */}
      <Modal isOpen={degreesModalOpen} onClose={() => setDegreesModalOpen(false)}>
        <div className="text-white">
          <div className="flex items-center mb-6">
            <FileText className="w-12 h-12 text-[#52747D] mr-4" />
            <h3 className="text-4xl font-bold">DEGREES AND AWARDS</h3>
          </div>
          <div className="space-y-6 text-xl">
            <p className="pb-2 border-b border-white/20">Master&apos;s in Chemistry, Johns Hopkins University</p>
            <p className="pb-2 border-b border-white/20">Bachelor&apos;s Degrees in Chemistry, Biochemistry & Molecular Biology, Franklin and Marshall College</p>
            <p className="pb-2 border-b border-white/20">The American Chemical Society Division of Organic Chemistry Award</p>
            <p>Hackman Scholarship for independent research in Synthetic Mechanistic Organic Chemistry</p>
          </div>
        </div>
      </Modal>

      <Modal isOpen={experienceModalOpen} onClose={() => setExperienceModalOpen(false)}>
        <div className="text-white">
          <div className="flex items-center mb-4">
            <Microscope className="w-8 h-8 text-[#52747D] mr-4" />
            <h3 className="text-2xl font-bold">RELEVANT EXPERIENCE</h3>
          </div>
          <div className="space-y-6">
            <div className="bg-[#303B42] p-4 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Teaching Assistant</h4>
              <p>Johns Hopkins University: Assisted in Organic Chemistry I, General Chemistry I, General Chemistry II, and served as Head TA for General Chemistry II.</p>
              <p>Taught Chemistry with Problem Solving II, a supplemental pass/fail credit teaching chemistry and math problem solving skills and techniques to students who earned a grade lower than a B in a prior semester of Chemistry or who had not taken Chemistry in high school.</p>
              <p>Franklin and Marshall College: Led labs in Organic Chemistry, Inorganic Chemistry, and Thermodynamics and Kinetics.</p>
            </div>
            <div className="bg-[#303B42] p-4 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Chemistry Tutor</h4>
              <p>Franklin and Marshall College Quantitative & Science Center:</p>
              <p>Tutored General Chemistry II, Organic Chemistry I & II. Led weekly Organic Chemistry Supplemental Instruction sessions for which I developed and distributed problems sets and individually guided students in solving them.</p>
            </div>
            <div className="bg-[#303B42] p-4 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Private Consulting and Project Management</h4>
              <p>It might seem unusual to list private consulting as relevant experience for chemistry tutoring (feel free to ask about all my irrelevant experience), but I believe it&apos;s worth highlighting for several reasons.</p>
              <p>First, many of the necessary skills overlap, and deploying those in vastly different scenarios has really reinforced them. The most obvious overlap has been my role in interfacing with developers and R&D teams in order to communicate complex, technical information to executives and marketing departments so that they understand the important pieces without needing a new degree. I&apos;ve also managed complex projects, coordinating with global teams and clients, and guided team members to achieve optimal results in high-pressure situations while preventing their burnout. Clear communication with clients and consumers has been crucial, and I&apos;ve ensured that expectations are met by providing consistent, up-to-date information without overwhelming them with useless meetings and chain emails. Importantly, I know how to manage one-on-one work closely without being overbearing or annoying, and I know how to be hands-off without disappearing. While I&apos;m specifically a subject matter expert in Chemistry, I am continually learning across various fields, both professionally and personally, and often have to swiftly absorb new information and explain it to clients or colleagues.</p>
              <p>Additionally, you probably aren&apos;t planning to spend your entire life tunnel-vision hyper focused on freshman- and sophomore-year chemistry classes, so why would you want to spend your time with a guy that is? We&apos;ve both got other stuff going on. If you want to reschedule so you can go on a date, I&apos;m not going to panic or throw a fit. I know your priorities in life are larger than a single class.</p>
              <p>Final note: While the confidentiality of my clients is a cornerstone of my consulting practice, I am happy to go into further detail or answer relevant questions during our meeting.</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  )
}