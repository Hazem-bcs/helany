import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'عيادة د. محمد حيلاني للأسنان',
  description: 'عيادة أسنان احترافية تقدم أفضل خدمات طب الأسنان في حلب',
  keywords: 'طبيب أسنان, عيادة أسنان, تبييض أسنان, تقويم أسنان, زراعة أسنان, حلب',
  authors: [{ name: 'Dr. Mohammad Helany' }],
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'عيادة د. محمد حيلاني للأسنان',
    description: 'عيادة أسنان احترافية تقدم أفضل خدمات طب الأسنان',
    type: 'website',
    locale: 'ar_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}


