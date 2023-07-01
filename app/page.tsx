import Image from 'next/image'
import { Metadata } from 'next'
import TypingEffect from './components/TypingEffect'
import { ToastSimple } from './components/ToastSimple'
import { Toast } from '@radix-ui/react-toast'

export const metadata: Metadata = {
  title: 'Daniel Vargas | Portfolio',
  description: 'Daniel Vargas portfolio website',
}

export default function Home() {
  return (
    <div className="full_height bg-gradient-to-b from-white via-stone-200 to-gray-400">
      <div>
        <h1>
          <span>Daniel</span>
          <span>Vargas</span>
        </h1>
      </div>
      <ToastSimple />
    </div>
  )
}
