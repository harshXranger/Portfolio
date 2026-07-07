import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Harsh Singh | MERN Stack Developer',
  description:
    'Harsh Singh — MERN Stack Developer & IT Student. Building responsive, scalable web applications.',
  keywords: ['MERN Stack Developer', 'React', 'Node.js', 'MongoDB', 'Portfolio', 'Harsh Singh'],
  openGraph: {
    title: 'Harsh Singh | MERN Stack Developer',
    description: 'IT Student & MERN Stack Developer building responsive web apps.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
