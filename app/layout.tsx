import './globals.css'
import { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ScrollProgress } from '@/components/magicui/scroll-progress'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'Mo\'ock Academy',
    template: '%s | Mo\'ock Academy',
  },
  description:
    'Connect with skilled service providers across Africa for home repairs, cleaning, handyman services and more.',
  keywords: ['services', 'handyman', 'cleaning', 'repairs', 'africa', 'pwa'],
  authors: [{ name: 'Bollo Team' }],
  creator: 'Bollo Team',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Bollo',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bollo.com',
    title: 'Bollo - Connect with Skilled Service Providers',
    description: 'Connect with skilled service providers across Africa for home repairs, cleaning, handyman services and more.',
    siteName: 'Bollo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bollo - Connect with Skilled Service Providers',
    description: 'Connect with skilled service providers across Africa for home repairs, cleaning, handyman services and more.',
    creator: '@bollo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#3b82f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body className={montserrat.className}>
      <Navbar />
      {children}
      <Footer />
      <ScrollProgress />
      </body>
    </html>
  )
}
