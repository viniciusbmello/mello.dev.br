import { Button } from '../ui/button'
import { BsGithub as GitHub } from 'react-icons/bs'

const LoginForm = () => {
    return (
        <Button variant="outline" className="gap-2">
            <GitHub className="h-5 w-5" />
            <span className="">Login</span>
        </Button>
    )
}

export default LoginForm
