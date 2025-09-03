import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AppLayout from '@/components/layout/AppLayout'
import AnalyticsScripts from '@/components/AnalyticsScripts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kingsmen Consultancy - World-Class Software Solutions & Cloud Architecture',
  description: 'Transform your business with Kingsmen Consultancy. We specialize in custom software development, cloud architecture, and digital transformation solutions that drive innovation and growth.',
  keywords: 'software development, cloud architecture, digital transformation, consulting, technology solutions, AWS, Azure, custom software',
  authors: [{ name: 'Kingsmen Consultancy' }],
  creator: 'Kingsmen Consultancy',
  publisher: 'Kingsmen Consultancy',
  robots: 'index, follow',
  metadataBase: new URL('https://kingsmenconsultancy.com'),
  openGraph: {
    title: 'Kingsmen Consultancy - World-Class Software Solutions',
    description: 'Transform your business with our expert software development and cloud architecture services.',
    url: 'https://kingsmenconsultancy.com',
    siteName: 'Kingsmen Consultancy',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kingsmen Consultancy - Software Development & Cloud Architecture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsmen Consultancy - World-Class Software Solutions',
    description: 'Transform your business with our expert software development and cloud architecture services.',
    images: ['/og-image.svg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a365d',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AppLayout>
          {children}
        </AppLayout>
        <AnalyticsScripts />
      </body>
    </html>
  )
}
