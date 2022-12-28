import React, { useState, useEffect } from 'react'
import { addNewDog } from '../services/dogService'
import { useInput } from '../hooks/UI/useInput'

function AddDog() {
    const clearDogForm = { name: '', age: '', breed: '', transaction: '' }
    const [dog, setDog] = useState({ ...clearDogForm })

    function saveNewDog() {
        addNewDog(dog).then(response => {
            setDog({ ...clearDogForm })
        })
    }

    useEffect(() => {
        console.log('%c%s', 'color: #0a1718', 'Dog')
    })

    return (
        <div className='ml-5 mt-5'>
            <h1>Add a new dog</h1>
            <article>Here you can add a new dog into our system. This dog will be available for selling or adoption right after data is sent</article>
            <div className='flex flex-column mt-5'>
                <input className='text-field'
                    label="name"
                    placeholder='Name'
                    type="text"
                    value={ dog.name }
                    onChange={ (event) => setDog({ ...dog, name: event.target.value }) }
                />
                <input className='text-field'
                    label="age"
                    placeholder='Age'
                    type="text"
                    value={ dog.age }
                    onChange={ (event) => setDog({ ...dog, age: event.target.value }) }
                />
                <input className='text-field'
                    label="breed"
                    placeholder='Breed'
                    type="text"
                    value={ dog.breed }
                    onChange={ (event) => setDog({ ...dog, breed: event.target.value }) }
                />
                <select value={ dog.transaction } name='Adoption' className='text-field' onChange={ (event) => setDog({ ...dog, transaction: event.target.value }) }>
                    <option value="">--Choose an option--</option>
                    <option value='Adoption'>Adoption</option>
                    <option value='Sell'>Sell</option>
                    <option value='Both'>Both</option>
                </select>
                <button onClick={ () => saveNewDog() } className='btn mt-5'>Save</button>
            </div>
        </div>)
}

export default AddDog