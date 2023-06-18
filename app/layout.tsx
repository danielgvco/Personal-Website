import './globals.css'
import { Inter, Ubuntu } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const ubuntu = Ubuntu({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
