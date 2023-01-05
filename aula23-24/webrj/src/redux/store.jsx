import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import userReducer from './reducers/userReducer'
import { counter } from './reducers/counterReducer'

export default configureStore({
    reducer: {
        counter: counterSlice,
        contador: counter,
        users: userReducer
    }
})