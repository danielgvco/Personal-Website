'use client'

import { FC, useEffect, useState } from 'react'

interface TypingEffectProps {
  words?: string[]
}

const TypingEffect: FC<TypingEffectProps> = ({words=['Hello.', 'Hola.', 'Bonjour.', 'Ciao.', '你好.', 'こんにちは.', '안녕하세요.']}) => {
  const [TypingComponent, setTypingComponent] = useState<any>(null);

  useEffect(() => {
    import('react-typing-effect').then((module) => {
      setTypingComponent(() => module.default);
    });
  }, []);

  if (!TypingComponent) {
    return null;
  }

  return (
    <TypingComponent
      text={words}
      speed={100}
      eraseSpeed={50}
      typingDelay={250}
      eraseDelay={750}
    />
  )
}

export default TypingEffect;
