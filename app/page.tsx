import Image from 'next/image'
import TypingEffect from './components/TypingEffect'
import { ToastSimple } from './components/ToastSimple'
import { Toast } from '@radix-ui/react-toast'

export default function Home() {
  return (
    <div className="full_height">
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
