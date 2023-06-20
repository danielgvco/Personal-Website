"use client"

import { useEffect, useState } from 'react';
import { Button } from "./ui/button"
import { SunMedium, Moon } from 'lucide-react'

const iconMap = {
    'sun': SunMedium,
    'moon': Moon,
}

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <Button className='w-full' variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
            <SunMedium className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        </Button>
    );
};

export default DarkModeToggle;