import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daniel | About',
  description: 'Daniel Vargas about page',
}

export default function About() {
  return (
    <h1>About</h1>
  )
}