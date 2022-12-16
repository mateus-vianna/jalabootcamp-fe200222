import React, { useEffect, useState } from 'react'

const ListDog = () => {

    const [state, setState] = useState(1)

    useEffect(() => {
        console.log('123')
    })

    useEffect(() => {
        // setState(getAllDogs())
    }, [])

    useEffect(() => {
        console.log('One time')
    }, [state])



    return (
        <div className='ml-5 mt-5'>
            <h1>Our Dogs</h1>
            <div className='flex flex-column mt-5'>
                { state }
            </div>
        </div>)


}

export default ListDog