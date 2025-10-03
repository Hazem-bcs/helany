import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'عيادة د. محمد حلاني للأسنان',
  description: 'عيادة أسنان احترافية تقدم أفضل خدمات طب الأسنان في دمشق',
  keywords: 'طبيب أسنان, عيادة أسنان, تبييض أسنان, تقويم أسنان, زراعة أسنان, دمشق',
  authors: [{ name: 'Dr. Mohammad Helany' }],
  openGraph: {
    title: 'عيادة د. محمد حلاني للأسنان',
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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
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


