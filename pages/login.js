import React from 'react'
import { useRouter } from 'next/router'

const LoginPage = () => {
    const router = useRouter()
    return (
        <div>
            <button onClick={()=> router.push("/api/auth/signin/github")}>
                Sign in with Github
            </button>
        </div> 
    )
}

export default LoginPage