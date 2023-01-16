import React from 'react'
import '../css/global.css'
import Sidebar from './sidebar/sidebar'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from '../components/privateRoute'

import Home from '../pages/home'
import AddDog from '../pages/addDog'
import ListDog from '../pages/listDog'
import News from '../pages/news'
import Signin from '../pages/signIn'
import DogDetails from '../pages/DogDetails'


function Main() {

    return (
        <div className='main-container flex'>
            <Sidebar>
                <div className='ml-1 secondary-container'>
                    <Routes>
                        <Route path='/' element={ <PrivateRoute authPath={ '/login' } outlet={ <Home /> }></PrivateRoute> } />
                        <Route path='/home' element={ <Home /> } />
                        <Route path='/add' element={ <AddDog /> } />
                        <Route path='/list' element={ <ListDog /> } />
                        <Route path='/news' element={ <News /> }>
                            <Route path='special' element={ <h1>Special News here</h1> } />
                        </Route>
                        <Route path="/login" element={ <Signin /> } />
                        <Route path='*' element={<h1>Page Not Found</h1>} />
                        <Route path='/DogDetails/:id' element={ <DogDetails /> }></Route>
                    </Routes>
                </div>
            </Sidebar>
        </div>)
}


export default Main