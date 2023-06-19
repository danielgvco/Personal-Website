import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'

interface ButtonRouteProps {
    route?: string
    label: string
    style?: string
    variant?: null | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
    onClick?: () => void
}

const ButtonRoute: FC<ButtonRouteProps> = ({route='/', label, style, variant = null, onClick}) => {
    return (
        <Button asChild variant={variant} className={style} onClick={onClick}>
            <Link href={route}>
                {label}
            </Link>
        </Button>
    )
}

export default ButtonRoute