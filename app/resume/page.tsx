import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '../components/ui/button'
import ButtonIcon from '../components/ButtonIcon'
import ButtonRoute from '../components/ButtonRoute'
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: 'Daniel | Resume',
  description: 'Daniel Vargas resume page',
}

export default function Resume() {
  return (
    <div className='full_height flex flex-col justify-center'>
      <div className='mx-auto w-11/12 flex flex-col space-y-4 lg:w-3/4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div className='p-4 w-full rounded-xl h-fit space-y-4 shadow-md lg:w-fit lg:min-w-[15rem] animate-fade-down animate-once animate-ease-in-out'>
          <ul className='flex flex-col'>
            <div className='flex flex-row justify-center lg:flex-col'>
              <li>Daniel Vargas</li>
              <li className='lg:hidden px-2'>|</li>
              <li><Link href="/">work@danielgv.co</Link></li>
            </div>
            <li className='flex justify-center lg:flex-col'>Vancouver, B.C.</li>
          </ul>
          <ul className='flex flex-row justify-center space-x-2 lg:space-x-0 lg:flex-col'>
            <li className="flex lg:hidden"><ButtonIcon iconName="github" route="https://github.com/danielgvco" variant="outline" /></li>
            <li className="flex lg:hidden"><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" variant="outline" /></li>
            <li className="flex lg:hidden"><ButtonIcon iconName="mail" route="/contact" variant="outline" target="" rel="" /></li>
            <li><Button><Download className='mr-2'/>Download PDF</Button></li>
          </ul>
        </div>
        <div className='w-full p-4 rounded-xl shadow-md animate-fade-down animate-once animate-delay-150 animate-ease-in-out'>
          <h1 className='mb-4'>Resume</h1>
        </div>
      </div>
    </div>
  )
}