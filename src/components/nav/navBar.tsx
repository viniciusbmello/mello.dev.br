import Link from 'next/link'
import ModeToggle from './toggleTheme'
import LoginForm from './loginForm'

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between py-5">
            <div className="group">
                <Link href="/" className="text-2xl font-bold ">
                    {"Mello's Blog"}
                </Link>
                <div className="h-1 w-0 group-hover:w-full transition-all bg-primary" />
            </div>
            <div className="flex items-center gap-2">
                <ModeToggle />
                <LoginForm />
            </div>
        </nav>
    )
}

export default NavBar
