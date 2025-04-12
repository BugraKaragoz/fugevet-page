import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FugeVet Admin',
  description: 'FugeVet yönetici paneli',
  icons: {
    icon: '/assets/faviconlogo.png',
    shortcut: '/assets/faviconlogo.png',
    apple: '/assets/faviconlogo.png',
  },
}

export default function AdminRootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/sf-pro-display" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
} 