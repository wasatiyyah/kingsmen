import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
