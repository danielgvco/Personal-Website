"use client"

import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import ReactTypingEffect from 'react-typing-effect';

import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav>
        <Button>
            <ReactTypingEffect 
            text={['Hello.', 'Hola.', 'Bonjour.', 'Ciao.', '你好.', 'こんにちは.', '안녕하세요.']}
            speed={100}
            eraseSpeed={50}
            typingDelay={500}
            eraseDelay={1000}
            />
        </Button>
    </nav>
  )
}

export default Navbar