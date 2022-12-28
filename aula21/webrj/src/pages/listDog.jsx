import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogService'

const ListDog = () => {

    const [dogs, setDog] = useState([])

    const initialize = async () => {
        try {
            const result = await getAllDogs()
            setDog(result)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <div className='ml-5 mt-5'>
            <h1>Our Dogs</h1>
            <div className='flex flex-column mt-5' style={ { height: '400px', overflowY: 'scroll' } }>
                { dogs.map((dog, index) => {
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