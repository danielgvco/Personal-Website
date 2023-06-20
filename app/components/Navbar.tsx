import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import ButtonRoute from "./ButtonRoute";
import { SheetSize } from './NavbarMobile'

import { FC } from 'react'

const Navbar: FC = () => {
    return (
        <nav className="flex h-14 items-center justify-between px-4 top-0 shadow">
            <div>
                <Link href="/">
                    <Image src='/logo.jpg' alt="logo" width={275} height={50} />
                </Link>
            </div>
            <ul className="hidden lg:flex items-center justify-between w-1/4">
                <li><ButtonRoute label="Home" route="/" variant="ghost" /></li>
                <li><ButtonRoute label="About" route="/about" variant="ghost" /></li>
                <li><ButtonRoute label="Projects" route="/projects" variant="ghost" /></li>
                <li><ButtonRoute label="Resume" route="/resume" variant="ghost" /></li>
            </ul>
            <ul className="hidden lg:flex items-center justify-between w-1/5 max-h-11">
                <li><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" variant="outline" /></li>
                <li><ButtonIcon iconName="github" route="https://github.com/danielgvco" variant="outline" /></li>
                <li><ButtonIcon iconName="mail" label="Contact Me" route="/contact" variant="default" target="" rel="" style="max-h-11" /></li>
            </ul>
            <div className="lg:hidden">
                <SheetSize />
            </div>
        </nav>
    )
}

export default Navbar