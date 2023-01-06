import React, { useState, useEffect } from "react"
import { useToken } from "./useToken"


const usePayloadToken = () => {
    const [token] = useToken()

    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1]
        return JSON.parse(atob(encodedPayload))
    }

    const [user, setUser] = useState(() => {
        if (!token) return null
        return getPayloadFromToken(token)
    })

    useEffect(() => {
        if (!token) {
            setUser(null)
        }
        else {
            setUser(getPayloadFromToken(token))
        }
    }, [token])

    return user
}

export default usePayloadToken