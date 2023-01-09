import { signup } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { useToken } from "../hooks/auth/useToken"
import React, { useEffect, useState } from "react"

const SignUp = () => {

    const [, setToken] = useToken()
    const [show, setShow] = useState()
    const [eyeIcon, setEyeIcon] = useState()
    const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const navigate = useNavigate()


    const handleSignUp = async () => {
        try {
            if (!user.confirmPassword === user.password) {
                alert(`Password doesn't match`)
                return
            }
            const response = await signup(user)
            setToken(response.token)
            navigate('/verify')
        } catch (error) {
            alert('Your login failed. Better luck next time!')
        }
    }

    const handleValidation = () => !user.name && !user.email && !user.password && !user.confirmPassword


    useEffect(() => {
        setShow(!show)
    }, [eyeIcon])


    return (
        <div className="flex flex-column center-itens">
            <div className='login-div'>
                <h1>Sign Up</h1>

                <input value={ user.name } className='text-field'
                    placeholder="Name" onChange={ (e) => setUser({ ...user, name: e.target.value }) } />

                <input value={ user.email } className='text-field'
                    placeholder="Email@email.com" onChange={ (e) => setUser({ ...user, email: e.target.value }) } />

                <input value={ user.password } className='text-field'
                    type={ 'password' } placeholder="Password" onChange={ (e) => setUser({ ...user, password: e.target.value }) } />

                <input value={ user.confirmPassword } className='text-field'
                    type={ 'password' } placeholder="Confirm password"
                    onChange={ (e) => setUser({ ...user, confirmPassword: e.target.value }) } />

                <button className="btn mt-5" disabled={ handleValidation() }
                    onClick={ () => handleSignUp() }>Create Account</button>

                <button className="btn mt-5"
                    onClick={ () => navigate('/login') } >Have an account? Login instead</button>
            </div>
        </div>
    )
}

export default SignUp