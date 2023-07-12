import { Metadata } from 'next'
import { InputReactHookForm } from '../components/InputReactHookForm'
import { Mail } from "lucide-react"
import CopyToClipboard from '../components/CopyToClipboard'

export const metadata: Metadata = {
  title: 'Daniel | Contact',
  description: 'Daniel Vargas contact page.',
}

export default function Contact() {
  return (
    <div className='full_height flex flex-col justify-center'>
      <div className='mx-auto w-3/4 flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div className='p-4 w-full rounded-xl h-fit shadow-md lg:w-1/3 animate-fade-down animate-once animate-ease-in-out'>
          <h2 className='pl-4 mb-4'>Contact Information</h2>
          <div className='flex'>
            <div className='flex p-2'><Mail className='mr-2' />work@danielgv.co</div>
            <CopyToClipboard text='work@danielgv.co'/>
          </div>
        </div>
        <div className='w-full p-4 rounded-xl shadow-md lg:w-2/3 animate-fade-down animate-once animate-delay-150 animate-ease-in-out'>
          <h2 className='mb-4'>Contact Form</h2>
          <InputReactHookForm />
        </div>
      </div>
    </div>
  )
}