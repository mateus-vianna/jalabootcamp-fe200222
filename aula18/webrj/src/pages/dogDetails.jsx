import React, { useEffect, useState } from 'react'
import { getDogById } from '../services/dogService'
import { useParams } from 'react-router-dom'

const DogDetails = () => {

  const { id } = useParams()
  const [dog, setDog] = useState([])

  const initialize = async () => {
    try {
      const result = await getDogById(id)
      setDog(result)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    initialize()
  }, [
    id
  ])

  return (
    <div className='ml-5 mt-5'>
      <h1>Our Dogs</h1>
      <div className="flex flex-column mt-5" style={{ height: '1200', overflowY: 'scroll' }}>
                        
        <div className="max-w-2xl overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {dog.name}
            </h3>
            <p className="max-w-2xl mt-1 text-sm text-gray-500">
              ID: {dog._id}
            </p>
          </div>
                                
          <div className="border-t border-gray-200">
            <dl>
                                    
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Age
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dog.age}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Breed
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dog.breed}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Transaction
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dog.transaction}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {dog.description}
                </dd>
              </div>
              <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Picture
                </dt>
                <dd className="mt-1 max-w-[50%] sm:mt-0 sm:col-span-2">
                  <img className="rounded" src={`${dog.picture}`} alt={`${dog.name}`} />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div >
  )
}
export default DogDetails;