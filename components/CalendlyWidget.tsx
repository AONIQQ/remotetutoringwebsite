'use client'

import { useEffect, useRef, useState } from 'react'

export function CalendlyWidget() {
  const calendlyRef = useRef<HTMLDivElement>(null)
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => setIsCalendlyReady(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (isCalendlyReady && calendlyRef.current && window.Calendly) {
      try {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/rob-vox/discovery-call',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        })
      } catch (error) {
        console.error('Error initializing Calendly widget:', error)
      }
    }
  }, [isCalendlyReady])

  return <div ref={calendlyRef} style={{ minWidth: '320px', height: '630px' }} />
}

// Add this to ensure TypeScript recognizes the Calendly global object
declare global {
  interface Window {
    Calendly?: import('calendly').Calendly
  }
}