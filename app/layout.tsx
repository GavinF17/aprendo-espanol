import '@/app/ui/global.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import SideNav from '@/app/ui/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aprendo',
  description: 'Flashcard site for Spanish',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
