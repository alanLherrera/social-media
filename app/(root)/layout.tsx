import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Topbar from '@/components/shared/Topbar'
import Leftbar from '@/components/shared/Leftbar'
import Rightbar from '@/components/shared/Rightbar'
import Bottombar from '@/components/shared/Bottombar'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Threads',
  description: 'a gym social media website for people looking to connect and create gym buddies :)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        
        <main className="flex flex-row">
          <Leftbar />

          <section className="main-container">

            <div className="w-full maxd-w-4xl">
            {children}
            </div>

          </section>

          <Rightbar />
        </main>

        <Bottombar />

        </body>
    </html>
  </ClerkProvider>
  )
}
