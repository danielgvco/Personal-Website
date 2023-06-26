import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'
import { Mail, Linkedin, Github, Code2, Menu, SunMedium, Moon } from 'lucide-react'

const iconMap = {
  'mail': Mail,
  'linkedin': Linkedin,
  'github': Github,
  'code': Code2,
  'menu': Menu,
  'sun': SunMedium,
  'moon': Moon,
}

interface ButtonIconProps {
    iconName: keyof typeof iconMap
    iconColor?: string | undefined
    route?: string
    label?: string
    style?: string
    variant?: null | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    target?: string
    rel?: string
    onClick?: () => void
}

const ButtonIcon: FC<ButtonIconProps> = ({ iconName, route = '/', style, iconColor, variant = null, label, target = '_blank', rel = 'noopener noreferrer' }) => {
  const Icon = iconMap[iconName]

  return (
    <Button asChild variant={variant} className={`h-full w-full ${style}`}>
      <Link href={route} target={target} rel={rel}>
        <Icon color={iconColor} className='h-full aspect-square' />
        {label && <span className='ml-2'>{label}</span>}
      </Link>
    </Button>
  )
}

export default ButtonIcon