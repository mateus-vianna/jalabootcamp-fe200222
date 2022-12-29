import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogService'
import DogCard from '../components/DogCard'

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
        <div className='ml-5 mt-5 flex flex-col justify-center'>
            <h1 className='text-lg font-bold'>Our Dogs</h1>
            <div className='flex flex-column mt-5 bg-[#967f00af] w-96 items-center' style={ { height: '550px', overflowY: 'scroll' } }>
                { dogs.map((dog, index) => {
                    return (
                        <div key={ index } className='mt-5'>
                            <DogCard index={index} dog={dog} />
                        </div>)
                }) }
            </div>
        </div >)


}

export default ListDog