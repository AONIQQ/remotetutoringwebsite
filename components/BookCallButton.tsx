'use client'

import { Button } from "@/components/ui/button"


interface BookCallButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function BookCallButton({ children }: BookCallButtonProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={() => scrollToSection('book-call')}
      className="bg-[#1F1D24] text-white border-2 border-[#52747D] rounded-md text-lg font-bold flex items-center justify-center space-x-2 px-6 py-3 transition-transform duration-300 hover:scale-105 shadow-lg"
    >
      {children}
    </Button>
  );
}