import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const esperanto = localFont({
  src: [
    {
      path: '../../public/fonts/Esperanto.ttf',
      weight: '400', //regular
      style:'normal'
    },
    {
      path: '../../public/fonts/Esperanto BoldItalic.ttf',
      weight: '700', //bold
      style:'italic'
    },
    {
      path: '../../public/fonts/Esperanto Italic.ttf',
      weight: '400', //Italic
      style:'italic'
    }
  ],
  variable: '--font-esperanto'
})

const quicksand = localFont({
  src: [
    {
      path: '../../public/fonts/Quicksand-Light.ttf',
      weight: '300' //light
    },
    {
      path: '../../public/fonts/Quicksand-Regular.ttf',
      weight: '400' //regular
    },
    {
      path: '../../public/fonts/Quicksand-Medium.ttf',
      weight: '500' //medium
    },
    {
      path: '../../public/fonts/Quicksand-SemiBold.ttf',
      weight: '600' //semibold
    },
    {
      path: '../../public/fonts/Quicksand-Bold.ttf',
      weight: '700' //bold
    }
  ],
  variable: '--font-quicksand'
})

export const metadata: Metadata = {
  title: 'Aaditya Shete',
  description: 'Aaditya Shete | Product Designer and Design advocate working towards bridging the gap between the intent and impact of a product.',
  openGraph:{
    title:'Aaditya Shete',
    description:'Aaditya Shete | Product Designer and Design advocate working towards bridging the gap between the intent and impact of a product.'
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${esperanto.variable} ${quicksand.variable} ${inter.className}`}>{children}</body>
    </html>
  )
}
