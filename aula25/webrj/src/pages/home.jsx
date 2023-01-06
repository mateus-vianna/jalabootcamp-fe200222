import React from 'react'
import '../css/global.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { add, decrease } from '../redux/reducers/counterSlice'
import { addCounter, decreaseCounter } from '../redux/reducers/counterReducer'


const Home = () => {

    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('Counter', counter)
    }, [counter])



    const handleDecrease = () => {
        dispatch(decrease())
        dispatch(decreaseCounter())

    }

    const handleIncrease = () => {
        dispatch(addCounter())
        dispatch(add())
    }

    return (
        <div className='ml-5 mt-5'>
            <h1>Home</h1>
            <div className='flex flex-row'>
                <button onClick={ () => handleDecrease() }>Less</button>
                <label style={ { marginLeft: '10px' } }>{ counter }</label>
                <button style={ { marginLeft: '10px' } } onClick={ () => handleIncrease() }>Plus</button>

            </div>


        </div>
    )
}

export default Home