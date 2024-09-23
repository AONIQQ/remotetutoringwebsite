'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ContactModal } from '@/components/ContactModal'
import { CalendlyWidget } from '@/components/CalendlyWidget'

const BookCallButton = ({ children, icon, className = '' }: { children: React.ReactNode, icon?: string, className?: string }) => (
  <Link href="/book">
    <button
      className={`bg-[#1F1D24] text-white border-2 border-[#52747D] rounded-md text-xl font-bold flex items-center justify-center space-x-2 px-8 py-4 transition-transform duration-300 hover:scale-105 shadow-lg ${className}`}
    >
      {icon && <Image src={icon} alt="Icon" width={24} height={24} className="mr-2" />}
      {children}
    </button>
  </Link>
)

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen text-white font-colfax text-base">
      {/* Top banner */}
      <Link href="/book">
        <div className="bg-gradient-to-r from-[#52747d] via-[#3F545D] to-[#52747d] text-white text-center py-2 text-sm font-medium shadow-md relative overflow-hidden cursor-pointer hover:bg-gradient-to-r hover:from-[#3F545D] hover:via-[#52747d] hover:to-[#3F545D] transition-all duration-300">
          <div className="absolute inset-0 opacity-10 bg-[url('/Background Graphics/Background_Hexagon Pattern Only.png')] bg-repeat"></div>
          <div className="relative z-10">
            Only 20 openings available this semester! Schedule your free discovery call today!
          </div>
        </div>
      </Link>

      {/* Header with background color */}
      <header className="bg-[#1F1D24] flex justify-between items-center px-4 sm:px-6 py-4 shadow-lg">
        <div className="flex items-center">
          <Image src="/logo/logo.png" alt="Remote Tutoring Logo" width={180} height={45} />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-white hover:text-[#52747D]">About</Link>
          <Link href="/services" className="text-white hover:text-[#52747D]">Services</Link>
          <button onClick={() => setContactModalOpen(true)} className="text-white hover:text-[#52747D]">Contact</button>
          <BookCallButton>Book a Call</BookCallButton>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1F1D24] py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-[#52747D]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-white hover:text-[#52747D]" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/services" className="text-white hover:text-[#52747D]" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <button onClick={() => { setContactModalOpen(true); setIsMenuOpen(false); }} className="text-white hover:text-[#52747D] text-left">Contact</button>
            <BookCallButton>Book a Call</BookCallButton>
          </nav>
        </div>
      )}

      {/* Main section with gradient */}
      <div className="bg-gradient-to-r from-[#303B42] via-[#52747D] to-[#303B42] py-16">
        <main className="px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-colfax font-weight-900">CHEMISTRY TUTORING</h1>
          <h2 className="text-xl sm:text-2xl mb-6">From someone who has taught the class, not just taken it.</h2>
          <p className="mb-8 text-base sm:text-lg">
            Start strong and never fall behind. Personal tutoring from an expert will help you get the grade you
            need to achieve your goals. Schedule a free call to discuss how.
          </p>
          <div className="flex justify-center">
            <BookCallButton icon="/Icon Graphics/Icon_Phone Call.png" className="text-2xl px-10 py-5">
              Book a free discovery call
            </BookCallButton>
          </div>
        </main>
      </div>

      {/* Don't waste time section with hexagon background and Calendly embed */}
      <div id="book-call" className="relative">
        <Image
          src="/Background Graphics/Background_Static Dark Hexagon Pattern.png"
          alt="Hexagon Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <section className="relative z-10 px-4 sm:px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Don&apos;t waste time learning from your own mistakes.</h2>
            <p className="mb-8 text-base sm:text-lg">
              Book a free discovery call with me to see how we can work together to save you time and energy
              while achieving your goals. There are only a limited number of spots available each semester, so
              please be proactive in reaching out to make sure you can get your spot.
            </p>
            <CalendlyWidget />
          </div>
        </section>
      </div>

      {/* Courses Offered Section with gradient */}
      <div className="bg-gradient-to-r from-[#303B42] via-[#52747D] to-[#303B42] py-12">
        <section className="px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">COURSES OFFERED</h2>
            <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
              Remote tutoring currently provides tutoring for college level <strong>Introductory/General Chemistry</strong> and <strong>Organic Chemistry</strong>. Tutoring for intermediate/advanced level chemistry and biochemistry courses may be available by request.
            </p>
            <Link href="/services">
              <button className="bg-[#1F1D24] text-white border-2 border-[#52747D] rounded-md text-xl font-bold flex items-center justify-center space-x-2 mx-auto px-10 py-5 transition-transform duration-300 hover:scale-105 shadow-lg">
                <span>Learn more</span>
                <Image src="/Icon Graphics/Icon_Test Tube in Stand.png" alt="Learn More" width={28} height={28} className="ml-2" />
              </button>
            </Link>
          </div>
        </section>
      </div>

      {/* Why get premium tutoring Section */}
      <div className="relative">
        <Image
          src="/Background Graphics/Background_Static Dark Hexagon Pattern.png"
          alt="Hexagon Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <section className="relative z-10 px-6 sm:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center flex items-center justify-center">
              <Image src="/Icon Graphics/Icon_Magnified Glass.png" alt="Magnifying Glass" width={48} height={48} className="mr-5" />
              Why get premium tutoring?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Teaching methods tailored to fit your unique learning style",
                  content: (
                    <>
                      The larger the class, the less likely it will be taught in a way that <strong>works best for you</strong>. Whether it&apos;s through lecture, question and answer, conversational, or grinding problem sheets, we&apos;ll go through material whichever way is <strong>optimal for you</strong>. I specialize in helping people comprehend complex ideas no matter their background or how they learn.
                    </>
                  ),
                  icon: "/Icon Graphics/Icon_Goggles.png"
                },
                {
                  title: "You're not just taking the class to pass",
                  content: (
                    <>
                      You&apos;re taking the class for a reason. Together, we connect course concepts to your <strong>intended use case</strong> and <strong>your interests</strong>, increasing short-term engagement and long-term retention. Prefer medical examples, climate examples, or nanotechnology examples? <strong>I&apos;ve got you</strong>.
                    </>
                  ),
                  icon: "/Icon Graphics/Icon_Diploma.png"
                },
                {
                  title: "Real answers, no guessing",
                  content: (
                    <>
                      Ask questions like &quot;Does this always work that way?&quot; and &quot;How would partial credit work here?&quot; and get an <strong>accurate and nuanced explanation</strong>. Probe into the mechanics behind material that is interesting or confusing, even if it goes well beyond the scope of the course. And if it goes too far, <strong>I&apos;ll be clear when I don&apos;t know something</strong> and we can discuss how we could find out the answer.
                    </>
                  ),
                  icon: "/Icon Graphics/Icon_Magnified Glass.png"
                },
                {
                  title: "Compatible with students of all levels",
                  content: (
                    <>
                      Whether you&apos;re aiming to lock in an A or just salvage a passing grade, <strong>we&apos;ll give you the tools you need to succeed</strong>. And if this class isn&apos;t a priority for you and the goal is simply to cut the workload or reduce study time, that&apos;s ok too. <strong>I&apos;ll help you achieve your specific goal</strong>. I&apos;ll never force a one-size-fits-all approach.
                    </>
                  ),
                  icon: "/Icon Graphics/Icon_Test Tube in Stand.png"
                }
              ].map((item, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="bg-gradient-to-r from-[#303B42] via-[#52747D] to-[#303B42] p-5">
                    <h3 className="font-bold text-xl flex items-center">
                      <Image src={item.icon} alt={item.title} width={30} height={30} className="mr-3" />
                      {item.title}
                    </h3>
                  </div>
                  <div className="bg-[#52747D] p-5 flex-grow">
                    <p className="text-base">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <BookCallButton icon="/Icon Graphics/Icon_Phone Call.png" className="text-2xl px-10 py-5">
                Book a free discovery call
              </BookCallButton>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  )
}