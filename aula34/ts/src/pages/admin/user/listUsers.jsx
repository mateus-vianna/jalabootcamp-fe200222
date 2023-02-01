import React from 'react'
import { loadUsersThunk } from '../../../redux/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)

    useEffect(() => {
        dispatch(loadUsersThunk())
    }, [])

    useEffect(() => {
        console.log('Users in Users page', users)
    }, [users])


    return (<div className='ml-5 mt-5'>
        <h1>Registered Users</h1>
        <div className='flex flex-column mt-5 overflow-y container-500'>
            { users?.map((user, index) => {
                return (
                    <div key={ index }>
                        <p>{ index }</p>
                        <p>{ user._id }</p>
                        <p>{ user.name }</p>
                        <p>{ user.name }</p>
                    </div>)
            }) }
        </div>
    </div>)
}


export default ListUsers