import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogService'
import { useFetch } from '../hooks/useFetch'

const ListDog = () => {

    const [dogs, setDog] = useState([])
    const { loading, data, error } = useFetch(getAllDogs, {}, true, 'dogs')

    useEffect(() => {
        setDog(data)
    }, [data])

    if (loading) return <h1>loading...</h1>
    if (error)
        return <pre>{ JSON.stringify(error) }</pre>
    return (
        <div className='ml-5 mt-5'>
            <h1>Our Dogs</h1>
            <div className='flex flex-column mt-5 container-500 overflow-y'>
                { dogs?.map((dog, index) => {
                    return (
                        <div key={ index } className='mt-5'>
                            <h3>{ index }</h3>
                            <h3>{ dog._id }</h3>
                            <h3>{ dog.name }</h3>
                            <h3>{ dog.age }</h3>
                            <h3>{ dog.breed }</h3>
                            <h3>{ dog.transaction }</h3>
                        </div>)
                }) }
            </div>
        </div >)


}

export default ListDog