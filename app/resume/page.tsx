import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '../components/ui/button'
import ButtonIcon from '../components/ButtonIcon'
import ButtonRoute from '../components/ButtonRoute'

export const metadata: Metadata = {
  title: 'Daniel | Resume',
  description: 'Daniel Vargas resume page',
}

export default function Resume() {
  return (
    <div className='full_height flex flex-col justify-center'>
      <div className='mx-auto w-11/12 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div className='p-4 w-full rounded-xl h-fit shadow-md lg:w-1/3 animate-fade-down animate-once animate-ease-in-out'>
          <ul className='flex flex-row justify-center lg:flex-col'>
            <li>Daniel Vargas</li>
            <li className='lg:hidden px-2'>|</li>
            <li><Link href="/">work@danielgv.co</Link></li>
            <li className='lg:hidden px-2'>|</li>
            <li>Vancouver, B.C.</li>
          </ul>
        </div>
        <div className='w-full p-4 rounded-xl shadow-md lg:w-2/3 animate-fade-down animate-once animate-delay-150 animate-ease-in-out'>
          <h2 className='mb-4'>Contact Form</h2>
        </div>
      </div>
    </div>
  )
}