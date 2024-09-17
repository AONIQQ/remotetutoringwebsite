'use client'

import { useEffect, useRef, useState } from 'react'

export default function CalendlyWidget() {
  const calendlyRef = useRef<HTMLDivElement>(null)
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      setIsCalendlyReady(true)
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    if (isCalendlyReady && calendlyRef.current) {
      // @ts-expect-error Calendly types are not available, but the API is used as documented
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/rob-vox/discovery-call',
        parentElement: calendlyRef.current,
        prefill: {},
        utm: {}
      })
    }
  }, [isCalendlyReady])

  return (
    <div 
      ref={calendlyRef}
      className="calendly-inline-widget"
      style={{minWidth: '320px', width: '100%', height: '600px', maxHeight: '80vh'}}
    >
      {!isCalendlyReady && (
        <div className="h-full flex items-center justify-center text-gray-600">
          Loading calendar...
        </div>
      )}
    </div>
  )
}