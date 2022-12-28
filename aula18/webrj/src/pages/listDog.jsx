import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../services/dogService'
import { Link } from 'react-router-dom'

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
        <>
        <div className='ml-5 mt-5'>
            <div className="flex flex-column mt-5" style={ { height: '1200', overflowY: 'scroll' } }>
                <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                            Our Dogs
                        </h3>
                        <p className="max-w-2xl mt-1 text-sm text-gray-500">
                            A list of all our dogs
                        </p>               
                    </div>
                        {dogs.map((dog, index) => {
                        
                        return (
                            <div key={index} className="flex border-t border-gray-200">
                                <dl>
                                    <div className="px-4 py-5 bg-white sm:grid sm:gap-4 sm:px-6">
                                        <dt className="flex text-sm font-medium text-gray-500">
                                            <div className='min-w-full'>
                                                <Link to={`/dog/${dog._id}`}>{dog.name}</Link>
                                                <p className="text-xs text-gray-400">({dog.transaction})</p>
                                            </div>
                                            <div className="flex self-center max-w-100 pl-56">
                                                <img className="max-w-[64px] rounded-full" src={`${dog.picture}`} alt={`${dog.name}`} />                                                
                                            </div>
                                        </dt>
                                    </div>
                                </dl>
                            </div>
                        )
                    })}                    
                </div>                       
            </div>
        </div>
        </>
    )


}

export default ListDog;