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
  description:'Conecte-se com nossa equipe e continue seu agendamento com segurança.',
  generator: 'Belmond',
  icons: {
    icon: [
      { url: '/dentee.png', media: '(prefers-color-scheme: light)' },
      { url: '/dentee.png', media: '(prefers-color-scheme: dark)' },
      { url: '/dentee.svg', type: 'image/svg+xml' },
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
        {/* Google Tag Manager (Instalado via Next.js Script) */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPKG78XM');
          `}
        </Script>
      </head>

      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        
        {/* Google Tag Manager (noscript) - Formatado para React */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPKG78XM"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
