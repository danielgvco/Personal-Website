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
    <div className='flex flex-col my-5'>
      <div className='mx-auto w-11/12 flex flex-col space-y-4 mb-5 lg:w-3/4 lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div className='p-4 w-full rounded-xl h-fit space-y-4 shadow-md lg:w-fit lg:min-w-[15rem] animate-fade-down animate-once animate-ease-in-out'>
          <ul className='flex flex-col'>
            <div className='flex flex-row justify-center lg:flex-col'>
              <li className='text-lg'>Daniel Vargas</li>
              <li className='lg:hidden px-2'>|</li>
              <li className='text-lg'><Link href="/">work@danielgv.co</Link></li>
            </div>
            <li className='flex justify-center lg:flex-col'>Vancouver, B.C.</li>
          </ul>
          <ul className='flex flex-row justify-center space-x-2 lg:space-x-0 lg:flex-col'>
            <li className="flex lg:hidden"><ButtonIcon iconName="github" route="https://github.com/danielgvco" variant="outline" /></li>
            <li className="flex lg:hidden"><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" variant="outline" /></li>
            <li className="flex lg:hidden"><ButtonIcon iconName="mail" route="/contact" variant="outline" target="" rel="" /></li>
            <li><Button><Download className='mr-2' />Download PDF</Button></li>
          </ul>
        </div>
        <div className='w-full p-4 rounded-xl space-y-4 shadow-md animate-fade-down animate-once animate-delay-150 animate-ease-in-out'>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Skills</h2>
            <ul className='space-y-2 list-disc pl-5'>
              <li><span className='font-700'>Programming Languages:</span> Python, Java, JavaScript, TypeScript, HTML / CSS</li>
              <li><span className='font-700'>Database Management:</span> MySQL, MongoDB</li>
              <li><span className='font-700'>Tools:</span> Git, Github, Bash Terminal</li>
              <li><span className='font-700'>Concepts:</span> Version Control, Object-Oriented Programming, Data Structures, Algorithms</li>
              <li><span className='font-700'>Abilities and Skills:</span> Strong Problem Solving, Analytical Skills, Creative, Good Communication</li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Projects</h2>
            <ol className='list-decimal pl-5'>
              <li>
                <span className='font-700'>Personal Portfolio Website</span>
                <ul className='list-disc pl-5'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li>
                <span className='font-700'>Asuna - Discord Bot AI</span>
                <ul className='list-disc pl-5'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li>
                <span className='font-700'>Password Manager with Encryption</span>
                <ul className='list-disc pl-5'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ol>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Education</h2>
            <ul>
              <li>
                <span>Red Deer Polytechnic</span>
                <ul className='list-disc pl-5'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li>
                <span>Coursera</span>
                <ul className='list-disc pl-5'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Certifications</h2>
            <ul className='list-disc pl-5'>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}