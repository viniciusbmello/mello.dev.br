'use client'

import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/components/ui/button'
import { BsGithub as GitHub } from 'react-icons/bs'
import { usePathname } from 'next/navigation'

const LoginForm = () => {
    const pathname = usePathname()

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const handleLogin = () => {
        supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: location.origin + '/auth/callback?next=' + pathname,
            },
        })
    }

    return (
        <Button variant="outline" className="gap-2" onClick={handleLogin}>
            <GitHub className="h-5 w-5" />
            <span className="">Login</span>
        </Button>
    )
}

export default LoginForm
