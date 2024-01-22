'use client'

import Link from 'next/link'
import ModeToggle from './toggleTheme'
import LoginForm from './loginForm'
import { useUser } from '@/lib/store/user'
import Profile from './profile'

const NavBar = () => {
    const user = useUser((state) => state.user)
    console.log(user?.id)

    return (
        <nav className="flex items-center justify-between py-5">
            <div className="group">
                <Link href="/" className="text-2xl font-bold ">
                    {"Mello's Blog"}
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all bg-primary" />
            </div>
            <div className="flex items-center gap-4">
                <ModeToggle />
                {user?.id ? <Profile /> : <LoginForm />}
            </div>
        </nav>
    )
}

export default NavBar
