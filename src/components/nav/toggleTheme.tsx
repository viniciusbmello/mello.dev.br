'use client'

import { BsMoonFill as Moon, BsSunFill as Sun } from 'react-icons/bs'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ToggleTheme = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() =>
                theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
        >
            <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ToggleTheme
