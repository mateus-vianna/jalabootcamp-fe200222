import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import usePayloadToken from '../hooks/auth/usePayloadToken'
import { useToken } from '../hooks/auth/useToken'
import { emailVerification } from '../services/authService'

const VerifyEmail = () => {
    const param = useParams()
    const user = usePayloadToken()
    const [token, setToken] = useToken()
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)


    const initialize = async () => {

        try {
            const response = await emailVerification(param)
            setToken(response.token)
            setIsSuccess(true)
            setIsLoading(false)
        }
        catch (e) {
            setIsSuccess(false)
            setIsLoading(false)
        }

    }

    useEffect(() => {
        initialize()
    }, [setToken, param])

    if (isLoading) return <h2>Loading...</h2>
    if (!isSuccess) return <h3>You haven't been verified yet</h3>
    return <h3>Your e-mail has been verified</h3>
}



export default VerifyEmail