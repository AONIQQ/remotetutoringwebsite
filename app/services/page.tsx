'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContactModal } from '@/components/ContactModal';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

interface SectionProps {
  title: string;
  content: string[];
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
}

const ExpandableSection: React.FC<SectionProps> = ({ title, content, icon, isOpen, onToggle }) => (
  <div className="mb-6 bg-gradient-to-r from-[#303B42] via-[#52747D] to-[#303B42] rounded-lg shadow-lg overflow-hidden">
    <div 
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={onToggle}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider shadow-text">
        {title}
      </h2>
      <div className="flex items-center">
        <div className="bg-[#1F1D24] p-1 sm:p-2 rounded-full shadow-lg mr-4">
          <Image src={icon} alt="Section Icon" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
    </div>
    {isOpen && (
      <div className="p-4 text-[#E0E7EB] space-y-4">
        {content.map((paragraph, index) => (
          <div key={index} className="bg-gradient-to-r from-[#1F2937] to-[#374151] p-4 rounded-lg shadow-md">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default function ServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState<boolean[]>([]);

  const sections = [
    {
      title: 'INTRODUCTORY / GENERAL CHEMISTRY',
      content: [
        "General Chemistry seems easy until suddenly, it doesn't. I almost failed General Chemistry II. I followed along in class and understood all the concepts. The first exam completely blindsided me. I think I got a 38. The professor said the average was even lower. Looking back, the exam was fair. About half the class dropped the next day, I didn't. I had to completely rebuild the way I was approaching exams, the material, and school in general, and really struggled my way through on pure determination. 7 out of an original 60 of us took the final exam, I passed the course with a C.",
        "I've since fortified my General Chemistry 2 knowledge over the years by taking the advanced courses related to it, in addition to all the years teaching or tutoring it. But the whole while I was rebuilding that base, I was having to put extra work into those advanced classes. Falling a little behind at the beginning made everything much harder.",
        "My best advice here is to never fall behind. The best way to do that is with a tutor that will keep you several steps ahead, not just by preparing you for the class you're taking, but by connecting these foundational concepts to whatever you're learning them for, whether it's chemistry, medicine, engineering, physics, or even philosophy (I'm always surprised how often equilibrium comes up).",
        "Also, I'll give you equation sheets, show you when and how to use everything on them, and how to know what you need to memorize.",
      ],
      icon: '/Icon Graphics/Icon_3D Molecule.png',
    },
    {
      title: 'ORGANIC CHEMISTRY',
      content: [
        "'Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weights.' -Ronnie Coleman.\n\n This class is hard. For many people, this is the first time that studying and doing the problems isn't enough. Reading, comprehension, memorization, and mathematical problem solving skills are necessary, but they won't answer the questions. Don't treat this like other courses.",
        "The most common questions in this course require seeing a molecule represented in 2D on a paper, visualizing it in 3D in your head, understanding the spatial energy distribution across the molecule, performing a complex operation on it based on that energetic understanding to yield a different 3D structure in your head, and then depicting that entire process in 2D on paper. You will then have to repeat this process, sometimes several times.\n\nSeeing it in 3D in your head is the easy way.  I can help with that.  Unfortunately, mental visualization and manipulation of complex 3D objects is one of those things that not everyone can do, and you may need to find another way to approach these problems.  I can help with that too.",
        "It is absolutely possible to get an A in this class. I did, and people do every year. At that point in my life, it seemed important to me that I did it on my own. This was my priority, and I sacrificed whatever it took to achieve it. I could have saved so much time, effort, and pain if I'd had a tutor working with me as I do with my clients.",
      ],
      icon: '/Icon Graphics/Icon_Hexagons.png',
    },
    {
      title: 'ADVANCED COURSES',
      content: [
        "Must be evaluated on a case-by-case basis. I know the limits of my knowledge and I'll never misrepresent that. The more advanced these courses get, the more specific they become. If what you're looking for is primarily in my area of expertise then it's likely a great fit, if not I'll point you in the right direction.",
        "Advanced courses often require a deep understanding of fundamental concepts and the ability to apply them in complex scenarios. My approach to tutoring these courses involves not just helping you with the current material, but also strengthening your foundational knowledge to ensure you have a solid base to build upon.",
        "We'll focus on developing problem-solving strategies specific to your field, whether it's physical chemistry, biochemistry, or any other specialized area. I'll help you connect the dots between different concepts and show you how to approach complex problems systematically.",
        "Remember, at this level, understanding the why behind each concept is just as important as knowing the how. We'll dive deep into the reasoning behind theories and equations, helping you develop a intuitive understanding of the material.",
      ],
      icon: '/Icon Graphics/Icon_Microscope.png',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 2560) {
        // 24 inches and above (assuming 1920px is roughly 24 inches)
        setOpenSections(new Array(sections.length).fill(true));
      } else if (width >= 1024) {
        // Between 12 inches and 24 inches
        setOpenSections([true, ...new Array(sections.length - 1).fill(false)]);
      } else {
        // Less than 12 inches
        setOpenSections(new Array(sections.length).fill(false));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (index: number) => {
    setOpenSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden text-white font-sans flex flex-col">
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
            <Image src="/logo/logo.png" alt="Remote Tutoring Logo" width={180} height={45} className="w-32 sm:w-44 h-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="text-white hover:text-[#52747D] text-sm lg:text-base">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#52747D] text-sm lg:text-base">
            About
          </Link>
          <button
            onClick={() => setContactModalOpen(true)}
            className="text-white hover:text-[#52747D] text-sm lg:text-base"
          >
            Contact
          </button>
          <button
            onClick={() => window.location.href = '/book'}
            className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300 text-sm"
          >
          Book a Call
          </button>
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
            <button
              onClick={() => {
                setContactModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-white hover:text-[#52747D] text-sm text-left"
            >
              Contact
            </button>
            <button
              onClick={() => window.location.href = '/book'}
              className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 px-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300 text-sm"
            >
              Book a Call
            </button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {/* Services Header */}
        <div className="relative py-8 sm:py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-[#A3B8C2] relative z-10">
            SERVICES
          </h1>
        </div>

        {/* Expandable Sections */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {sections.map((section, index) => (
            <ExpandableSection
              key={index}
              {...section}
              isOpen={openSections[index]}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </div>

        {/* Core Tutoring Plan Section */}
        <div className="relative py-4 sm:py-6">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-[#A3B8C2] relative z-10">
              CORE TUTORING PLAN
            </h2>
            <div className="p-4 sm:p-6 rounded-lg text-[#E0E7EB] relative z-10 bg-gradient-to-br from-[#303B42] to-[#52747D] shadow-xl">
              <p className="text-sm sm:text-base md:text-lg text-center">
                The core plan offers one hour of tutoring per week for the duration of the semester at a rate of $100/hour. The total cost is paid upfront through Stripe, with financing options available if you&apos;d rather pay over time. I&apos;m confident in the quality of my services, which is why I guarantee my performance and yours (see below).
              </p>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="relative py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-[#A3B8C2] relative z-10">
              GUARANTEE
            </h2>
            <div className="p-4 sm:p-6 md:p-8 rounded-lg text-[#E0E7EB] relative z-10 bg-gradient-to-br from-[#303B42] to-[#52747D] shadow-xl">
              <p className="mb-4 text-sm sm:text-base md:text-lg text-center">
                I guarantee my performance, presence, and punctuality. If I&apos;m ever late, absent, or unprepared* for a
                session, I&apos;ll issue you a refund for 100% of the cost of the session, offer a free replacement session,
                and void your commitment to me so that you can terminate our arrangement for a full refund if you
                believe I&apos;m not providing the value I promised you. I can&apos;t guarantee that you&apos;ll go to every class, take
                notes, submit assignments on time, study, show up for exams, or even show up for our sessions.
                But if you do all that, I guarantee that you will not fail the class. If something unforeseen happens
                and you do, I&apos;ll issue you a full refund and I&apos;ll tutor you for free if you retake the course.
              </p>
              <p className="text-xs sm:text-sm italic text-center">
                *Guarantee subject to contract terms and conditions. Ask me about this on our call.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <div className="rounded-full overflow-hidden w-72 h-72 sm:w-96 sm:h-96 md:w-112 md:h-112 bg-[#303B42]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Videos & GIFs/Beaker Animation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <Link href="/book">
                <button className="bg-gradient-to-r from-[#52747D] to-[#3F545D] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book a free discovery call
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1F1D24] py-4 text-center">
        <Link href="https://www.aoniqq.com/websitecreation" className="text-[#52747D] hover:text-[#A3B8C2] transition-colors duration-300 underline">
          Site by Aoniqq LLC
        </Link>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          font-family: 'Signika Negative', sans-serif, Arial;
        }

        html {
          background: url('/Background Graphics/Background_Static Dark Hexagon Pattern.png') repeat;
          height: 100%;
          overflow-y: scroll;
        }

        body {
          position: relative;
          height: unset;
          overflow-x: hidden;
          overflow-y: visible;
        }

        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        @media (min-width: 2560px) {
          p {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
}