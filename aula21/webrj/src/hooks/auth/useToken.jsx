import React from 'react'

export const useToken = () => {
    const token = localStorage.getItem('token')

    const setLocalToken = (newToken) => {
        localStorage.setItem('token', newToken)
    }

    return [token, setLocalToken]
}

