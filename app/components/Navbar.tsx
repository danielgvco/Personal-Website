import Image from "next/image";
import Link from "next/link";
import ButtonIcon from "./ButtonIcon";
import ButtonRoute from "./ButtonRoute";
import NavbarMobile from './NavbarMobile'
import DarkModeToggle from "./DarkModeToggle";

import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className="flex h-14 max-h-14 items-center justify-between px-4 top-0 shadow">
      <div className="animate-fade-down animate-once animate-delay-0 animate-ease-in-out">
        <Link href="/">
          <Image src='/images/logos/daniel-vargas-light.png' alt="logo-lightmode" width={250} height={40} className="dark:hidden" />
          <Image src='/images/logos/daniel-vargas-dark.png' alt="logo-darkmode" width={250} height={40} className="hidden dark:flex"/>
        </Link>
      </div>
      <ul className="hidden lg:flex items-center space-x-2">
        <li className="animate-fade-down animate-once animate-delay-[100ms] animate-ease-in-out"><ButtonRoute label="HOME" route="/" variant="ghost" /></li>
        <li className="animate-fade-down animate-once animate-delay-[300ms] animate-ease-in-out"><ButtonRoute label="PROJECTS" route="/projects" variant="ghost" /></li>
        <li className="animate-fade-down animate-once animate-delay-[400ms] animate-ease-in-out"><ButtonRoute label="RESUME" route="/resume" variant="ghost" /></li>
      </ul>
      <ul className="hidden lg:flex items-center space-x-2 max-h-11">
        <li className="animate-fade-down animate-once animate-delay-[500ms] animate-ease-in-out"><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" variant="outline" /></li>
        <li className="animate-fade-down animate-once animate-delay-[600ms] animate-ease-in-out"><ButtonIcon iconName="github" route="https://github.com/danielgvco" variant="outline" /></li>
        <li className="animate-fade-down animate-once animate-delay-[700ms] animate-ease-in-out"><DarkModeToggle /></li>
        <li className="animate-fade-down animate-once animate-delay-[800ms] animate-ease-in-out"><ButtonIcon iconName="mail" label="CONTACT ME" route="/contact" variant="default" target="" rel="" style="max-h-11" /></li>
      </ul>
      <ul className="lg:hidden flex items-center space-x-2">
        <li className="animate-fade-down animate-once animate-delay-[100ms] animate-ease-in-out"><DarkModeToggle /></li>
        <li className="animate-fade-down animate-once animate-delay-[200ms] animate-ease-in-out"><NavbarMobile /></li>
      </ul>
    </nav>
  )
}

export default Navbar