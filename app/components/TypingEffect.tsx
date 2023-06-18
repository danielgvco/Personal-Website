"use client"

import ReactTypingEffect from 'react-typing-effect';

import { FC } from 'react';

interface TypingEffectProps {
  words?: string[]
}

const TypingEffect: FC<TypingEffectProps> = ({words=['Hello.', 'Hola.', 'Bonjour.', 'Ciao.', '你好.', 'こんにちは.', '안녕하세요.']}) => {
  return (
    <ReactTypingEffect
        text={words}
        speed={100}
        eraseSpeed={50}
        typingDelay={500}
        eraseDelay={1000}
    />
  )
}

export default TypingEffect