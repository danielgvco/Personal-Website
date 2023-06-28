import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel | Resume',
  description: 'Daniel Vargas resume page',
}

export default function Resume() {
  return (
    <h1>Resume</h1>
  )
}