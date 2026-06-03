import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Full Stack Marketing 360 — Repli-k × Gens',
  description: 'Plan de marketing completo para Repli-k: Contenido IA, Performance optimizado y TikTok Shop desde cero.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${space.variable} ${inter.variable} antialiased bg-white text-[#111111]`}>
        {children}
      </body>
    </html>
  )
}
