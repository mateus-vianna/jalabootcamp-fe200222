import React, { useState, useEffect } from "react"

export function useFetch(fetch, body, store, name) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()


    useEffect(() => {
        if (!fetch()) return
        fetch(body)
            .then((data) => data.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [fetch])

    useEffect(() => {
        if (store)
            localStorage.setItem(name, JSON.stringify(data))
    }, [data])

    return { loading, data, error }
}