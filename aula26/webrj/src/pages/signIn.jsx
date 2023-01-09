import { login } from "../services/authService"
import { useNavigate } from "react-router-dom"
import { useToken } from "../hooks/auth/useToken"
import React, { useState } from "react"

const SignIn = () => {

    const [, setToken] = useToken()
    const [user, setUser] = useState({ email: '', password: '' })
    const navigate = useNavigate()


    const handleLogin = async () => {
        try {
            const response = await login(user)
            console.log('%c%s', 'color: #5200cc', response)
            setToken(response.token)
            navigate('/')
        } catch (error) {
            alert('Your login failed. Better luck next time!')
        }

    }

    return (
        <div className="flex flex-column center-itens">
            <div className='login-div'>
                <h1>Login</h1>
                <input value={ user.email } onChange={ (e) => setUser({ ...user, email: e.target.value }) } className='text-field' placeholder="email@email.com" />
                <input value={ user.password } onChange={ (e) => setUser({ ...user, password: e.target.value }) } className='text-field' type="password" placeholder="password" />
                <button className="btn mt-5" onClick={ () => handleLogin() }>Login</button>
                <button className="btn mt-5" onClick={ () => navigate('/forgot') } >Forgot your password?</button>
                <button className="btn mt-5" onClick={ () => navigate('/signup') }>Don't have an account? Sign Up</button>
            </div>
        </div>
    )
}

export default SignIn