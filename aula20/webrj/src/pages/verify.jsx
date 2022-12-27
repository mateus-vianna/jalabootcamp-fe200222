import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const EmailVerification = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    }, [navigate])

    return (
        <div>
            <h1>Thanks for signing up!</h1>
            <p>A verification email has been sent to you</p>
        </div>
    )
}

export default EmailVerification