"use client"
import Link from "next/link"
import ButtonRoute from "./ButtonRoute"
import ButtonIcon from "./ButtonIcon"
import DarkModeToggle from "./DarkModeToggle"
import { Menu, Code2, Mail } from 'lucide-react'
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

const NavbarMobile = ():JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-14"><Menu className="h-full aspect-square" /></Button>
        </SheetTrigger>
        <SheetContent position="right" size="xl">
          <SheetHeader>
            <SheetTitle>DANIEL VARGAS | PORTFOLIO</SheetTitle>
          </SheetHeader>
          <ul className="grid gap-4 py-4 text-center mt-8">
            <li><SheetClose asChild><ButtonRoute route="/" label="HOME" /></SheetClose></li>
            <li><SheetClose asChild><ButtonRoute route="/resume" label="RESUME" /></SheetClose></li>
          </ul>
          <div className="flex flex-col space-y-4 mt-56">
            <ul className="flex justify-between">
              <li className="w-2/5"><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" style="w-full" variant="outline"/></li>
              <li className="w-2/5"><ButtonIcon iconName="github" route="https://github.com/danielgvco" style="w-full" variant="outline"/></li>
            </ul>
            <SheetClose asChild><Button asChild><Link href="/projects"><Code2 className="h-full aspect-square"/><span className="ml-2">PROJECTS</span></Link></Button></SheetClose>
            <SheetClose asChild><Button asChild variant="outline"><Link href="/contact"><Mail className="h-full aspect-square"/><span className="ml-2">CONTACT ME</span></Link></Button></SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default NavbarMobile