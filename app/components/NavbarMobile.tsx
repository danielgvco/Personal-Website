"use client"

import ButtonRoute from "./ButtonRoute"
import ButtonIcon from "./ButtonIcon"
import DarkModeToggle from "./DarkModeToggle"
import { Menu } from 'lucide-react'
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

export function SheetSize() {
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
                    <ul className="grid gap-4 py-4 text-center mt-6">
                        <li><SheetClose asChild><ButtonRoute route="/" label="HOME" /></SheetClose></li>
                        <li><SheetClose asChild><ButtonRoute route="/about" label="ABOUT" /></SheetClose></li>
                        <li><SheetClose asChild><ButtonRoute route="/projects" label="PROJECTS" /></SheetClose></li>
                        <li><SheetClose asChild><ButtonRoute route="/resume" label="RESUME" /></SheetClose></li>
                    </ul>
                    <div className="flex flex-col space-y-4 mt-72">
                        <ul className="flex justify-between">
                            <li className="w-1/4"><ButtonIcon iconName="linkedin" route="https://www.linkedin.com/in/danielgvco/" style="w-full" variant="outline"/></li>
                            <li className="w-1/4"><ButtonIcon iconName="github" route="https://github.com/danielgvco" style="w-full" variant="outline"/></li>
                            <li className="w-1/4"><DarkModeToggle/></li>
                        </ul>
                        <SheetClose asChild><ButtonIcon iconName="code" label="PROJECTS" route="/projects" variant="default" target="" rel="" /></SheetClose>
                        <SheetClose asChild><ButtonIcon iconName="mail" label="CONTACT ME" route="/contact" variant="outline" target="" rel="" /></SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
