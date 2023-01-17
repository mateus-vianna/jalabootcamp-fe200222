import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { loadUsersByIdThunk, editUserThunk } from '../../../redux/reducers/userReducer'


const EditUsers = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const users = useSelector((state) => state.users.users)
    const user = useMemo(() => {
        return users.filter((u) => u._id === id)[0];
    }, [id])

    const name = useRef()
    const email = useRef()
    const type = useRef()

    useEffect(() => {
        dispatch(loadUsersByIdThunk(id));
    }, [id]);

    useEffect(() => {
        if (user !== null || undefined) {
            name.current.value = user.name;
            email.current.value = user.email;
            type.current.value = user.type;
        }
    }, [user]);

    const submit = (e) => {
        e.preventDefault()
        console.log('Name ', name.current.value)
        console.log('Email ', email.current.value)
        console.log('Type ', type.current.value)

        const editUser = {
            id: id,
            name: name.current.value,
            email: email.current.value,
            type: type.current.value,
        }
        dispatch(editUserThunk(editUser))
        navigate("/admin/user/list");
    }

    return (
        <div className='ml-5 mt-5 shadow-md w-[300px]'>
            <h1>Editing User</h1>
            <article>
                Here you can update an user.
            </article>
            <div className='mt-5 flex justify-center p-8'>
                <form className='flex flex-column' onSubmit={ submit }>
                    <input ref={name} className='text-field' type={'text'} placeholder='name' />
                    <input ref={email} className='text-field' type={'email'} placeholder='email' />
                    <select ref={type} className='text-field' type={'select'} placeholder='user type'>
                        <option value="">--Select user type--</option>
                        <option value="admin">Admin</option>
                        <option value="seller">Seller</option>
                        <option value="buyer">Buyer</option>
                    </select>
                    <button className='mt-5 hover:bg-[#967f00af] w-[200px] h-[50px] shadow-md'>Update</button>
                </form>
            </div>
        </div>)
}


export default EditUsers