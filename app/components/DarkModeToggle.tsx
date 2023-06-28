"use client"

import { useEffect, useState } from 'react';
import { Button } from "./ui/button"
import { SunMedium, Moon } from 'lucide-react'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(() => {
      const theme = window.localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return true;
      }
      return false;
    });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <Button className='w-full h-full' variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
      <SunMedium className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
      <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
    </Button>
  );
};

export default DarkModeToggle;