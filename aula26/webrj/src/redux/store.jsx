import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import userReducer from './reducers/userReducer'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

const configStore = {
    key: 'dogs',
    stateReconciler: autoMergeLevel2,
    storage,
}

const reducer = {
    counter: counterSlice,
    users: userReducer
}

const persitedReducer = persistReducer(configStore, combineReducers(reducer))


// export default configureStore({
//     reducer: { persitedReducer }
// })

export default configureStore({
    reducer: persitedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})