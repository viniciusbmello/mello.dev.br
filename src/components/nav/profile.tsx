import { useUser } from '@/lib/store/user'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { MdDashboard as Dashboard } from 'react-icons/md'
import { RiLogoutBoxLine as Logout } from 'react-icons/ri'
import { createBrowserClient } from '@supabase/ssr'

const Profile = () => {
    const user = useUser((state) => state.user)
    const setUser = useUser((state) => state.setUser)

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setUser(undefined)
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Image
                    src={user?.user_metadata.avatar_url}
                    alt={user?.user_metadata.user_name}
                    width={35}
                    height={35}
                    className="rounded-full ring-2 ring-secondary"
                ></Image>
            </PopoverTrigger>
            <PopoverContent className="p-4 m-2 space-y-2">
                <div className="px-4 pb-2 text-sm">
                    <p>{user?.user_metadata.user_name}</p>
                    <p className="text-ring">{user?.user_metadata.email}</p>
                </div>
                <Link href="/dashboard" className="block">
                    <Button
                        variant="ghost"
                        className="w-full flex items-center justify-between"
                    >
                        Dashboard
                        <Dashboard className="h-5 w-5" />
                    </Button>
                </Link>
                <Button
                    variant="ghost"
                    className="w-full flex items-center justify-between"
                    onClick={handleLogout}
                >
                    Logout
                    <Logout className="h-5 w-5" />
                </Button>
            </PopoverContent>
        </Popover>
    )
}

export default Profile
