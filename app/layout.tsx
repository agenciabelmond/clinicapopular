import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dentistas Consultório Popular',
  description: 'Conecte-se com nossa equipe e continue seu agendamento com segurança.',
  generator: 'Belmond',
  icons: {
    icon: [
      {
        url: '/dentee.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/dentee.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/dentee.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/dentee.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
