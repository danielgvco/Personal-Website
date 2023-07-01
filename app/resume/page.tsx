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
            <li><a href='/Resume - Daniel Vargas.pdf' download><Button><Download className='mr-2' />Download PDF</Button></a></li>
          </ul>
        </div>
        <div className='w-full p-4 rounded-xl space-y-6 shadow-md animate-fade-down animate-once animate-delay-150 animate-ease-in-out'>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Skills</h2>
            <ul className='space-y-2 list-disc pl-5'>
              <li><span className='font-700'>Programming Languages:</span> Python, Java, JavaScript, TypeScript, HTML / CSS</li>
              <li><span className='font-700'>Frameworks and Libraries:</span> NextJS, React, Tailwind CSS</li>
              <li><span className='font-700'>Database Management:</span> MySQL, MongoDB</li>
              <li><span className='font-700'>Tools:</span> Git, Github, Bash Terminal</li>
              <li><span className='font-700'>Concepts:</span> Version Control, Object-Oriented Programming, Data Structures, Algorithms</li>
              <li><span className='font-700'>Abilities and Skills:</span> Strong Problem Solving, Analytical Skills, Creative, Good Communication</li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Projects</h2>
            <ol className='list-decimal pl-5 space-y-2'>
              <li>
                <span className='font-700'>Personal Portfolio Website</span>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>NextJS | TypeScript | Tailwind CSS project</li>
                  <li>Learned about version control and how important it is for an organized project</li>
                  <li>Made me learn better coding practices</li>
                </ul>
              </li>
              <li>
                <span className='font-700'>Asuna - Discord Bot AI</span>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Implemented OpenAI ChatGPT to intelligently moderate server messages.</li>
                  <li>Improved the efficiency of any discord server by automating the moderating duty.</li>
                  <li>Used the Natural Language Processing to perform server tasks 24/7.</li>
                </ul>
              </li>
              <li>
                <span className='font-700'>Password Manager with Encryption</span>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Implemented AES-256 and AES-512 to ensure the safe storage of user credentials.</li>
                  <li>Learned about Encryption methods, how to use them and ways to make secure.</li>
                  <li>Applied salt to the encryption in order to make every encryption different from each other.</li>
                </ul>
              </li>
            </ol>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Education</h2>
            <ul className='space-y-2'>
              <li>
                <div><span className='font-700'>Red Deer Polytechnic</span><span> | Software Development</span></div>
                <span className='text-sm'>January 2022 - December 2023, Vancouver B.C.</span>
                <ul className='list-disc pl-5 mt-2 space-y-2'>
                  <li>Develop Software that solves real-world problems.</li>
                  <li>Design and management of clean databases.</li>
                  <li>Implemented good coding practices in order to create projects in an efficient way.</li>
                </ul>
              </li>
              <li>
                <div><span className='font-700'>Coursera</span><span> | Meta Back-End Developer, Computer Software Engineering.</span></div>
                <span className='text-sm'>January 2023 - July 2023</span>
                <ul className='list-disc pl-5 mt-2 space-y-2'>
                  <li>Data storage and databases using MySQL, and how to craft sophisticated SQL queries.</li>
                  <li>Django web framework and how the front-end consumes data from the REST APIs.</li>
                  <li>Linux commands and Git repositories to implement version control.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-700 text-xl border-b border-gray-300'>Certifications</h2>
            <ul className='list-disc pl-5 space-y-2'>
              <li><span className='font-700'>Programming in Python</span> | Coursera, February 2023.</li>
              <li><span className='font-700'>Introduction to Back-End Development</span> | Coursera, January 2023.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}