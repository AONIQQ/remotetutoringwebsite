import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from '@/components/Footer'

const colfax = localFont({
  src: [
    {
      path: '../public/fonts/Colfax-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Colfax-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Colfax-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Colfax-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Colfax-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../public/fonts/Colfax-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Colfax-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
  ],
  variable: '--font-colfax'
});

export const metadata: Metadata = {
  title: "Remote Tutoring",
  description: "Expert chemistry tutoring for college students",
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${colfax.variable} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}