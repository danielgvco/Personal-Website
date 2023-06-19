"use client"

import Image from "next/image"
import { useState } from "react"

import ButtonRoute from "./ButtonRoute"
import ButtonIcon from "./ButtonIcon"
import { Menu } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
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
          <Button className="w-14 h-12"><Menu className="h-full aspect-square"/></Button>
        </SheetTrigger>
        <SheetContent position="right" size="lg">
          <SheetHeader>
            <SheetTitle>Daniel Vargas | Portfolio</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>
          <ul>
            <li><SheetClose asChild><ButtonRoute route="/" label="HOME"/></SheetClose></li>
            <li><SheetClose asChild><ButtonRoute route="/about" label="ABOUT" /></SheetClose></li>
            <li><SheetClose asChild><ButtonRoute route="/projects" label="PROJECTS" /></SheetClose></li>
            <li><ButtonRoute route="/resume" label="RESUME" /></li>
          </ul>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
