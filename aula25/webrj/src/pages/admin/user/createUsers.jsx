import React, { useRef } from 'react'
import { useEffect } from 'react'
import createUser from '../../../services/userService'

const CreateUsers = () => {

    const name = useRef()
    const email = useRef()
    const type = useRef()

    const submit = (e) => {
        e.preventDefault()
        console.log('Name ', name.current.value)
        console.log('Email ', email.current.value)
        console.log('Type ', type.current.value)
        // createUser({
        //     name: name.current.value,
        //     email: email.current.value,
        //     type: type.current.value,
        //     isVerified: false
        // })
    }

    return (
        <div className='ml-5 mt-5'>
            <h1>Add new Person</h1>
            <article>
                Here you can create an user and set it's type.
                The user will still need to validate it's
                access through e-mail confirmation
            </article>
            <div className='mt-5'>
                <form className='flex flex-column' onSubmit={ submit }>
                    <input ref={ name } className='text-field' type={ 'text' } placeholder='name' />
                    <input ref={ email } className='text-field' type={ 'email' } placeholder='email' />
                    <select ref={ type } className='text-field' type={ 'select' } placeholder='user type'>
                        <option value="">--Select user type--</option>
                        <option value="admin">Admin</option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                    <button className='btn mt-5'>Create</button>
                </form>
            </div>
        </div>)
}


export default CreateUsers