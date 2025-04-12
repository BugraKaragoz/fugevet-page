import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactButton from '@/components/ContactButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FugeVet Veteriner Programı',
  description: 'Veteriner klinikleri için modern yazılım',
  icons: {
    icon: '/assets/faviconlogo.png',
    shortcut: '/assets/faviconlogo.png',
    apple: '/assets/faviconlogo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <ContactButton />
        <Footer />
      </body>
    </html>
  )
} 