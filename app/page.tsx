import Image from 'next/image'
import { Metadata } from 'next'
import TypingEffect from './components/TypingEffect'
import { ToastSimple } from './components/ToastSimple'
import ButtonIcon from './components/ButtonIcon'
import { Toast } from '@radix-ui/react-toast'

export const metadata: Metadata = {
  title: 'Daniel Vargas | Portfolio',
  description: 'Daniel Vargas portfolio website',
}

export default function Home() {
  return (
    <div className="full_height_no_scroll flex flex-col justify-center">
      <div className='mx-auto flex flex-col items-center'>
        <p className='font-700 text-[4rem] sm:text-[6rem] lg:text-[8rem]'>SOFTWARE</p>
        <div className='p-2 border-2 border-primary text-center text-[0.8rem] sm:text-[1rem] lg:text-[1.5rem]'><p>LET'S <TypingEffect words={['CREATE.', 'CODE.', 'BUILD.', 'DESIGN.', 'DEVELOP.']}/></p><p>HIGHLY EFFECTIVE SOLUTIONS FOR REAL WORLD PROBLEMS</p></div>
        <p className='font-700 text-[4rem] sm:text-[6rem] lg:text-[8rem]'>DEVELOPER</p>
      </div>
      <div className='mx-auto flex flex-col w-[75%] h-28 space-y-4 mt-12 lg:h-14 lg:flex-row lg:space-x-4 lg:space-y-0 lg:w-[60%] lg:mt-4'>
        <ButtonIcon iconName='code' label='PROJECTS' variant='default'/>
        <ButtonIcon iconName='mail' label='CONTACT' route='/contact' variant='outline'/>
      </div>
    </div>
  )
}
