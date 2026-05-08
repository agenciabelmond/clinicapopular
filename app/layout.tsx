import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Dentistas Consultório Popular',
  description:
    'Conecte-se com nossa equipe e continue seu agendamento com segurança.',
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18005976353"
          strategy="afterInteractive"
        />

        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18005976353');
          `}
        </Script>
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}