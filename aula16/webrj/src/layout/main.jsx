import React, { useState } from 'react'
import '../css/global.css'
import Sidebar from './sidebar/sidebar'
import changePage from '../utils/usePage'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home'
import AddDog from '../pages/addDog'
import ListDog from '../pages/listDog'
import News from '../pages/news'


function Main() {

    return (
        <div className='main-container flex'>

            <Sidebar>
                <div className='ml-1 secondary-container'>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                        <Route path='/add' element={ <AddDog /> } />
                        <Route path='/list' element={ <ListDog /> } />
                        <Route path='/news' element={ <News /> }>
                            <Route path='special' element={ <h1>Special News here</h1> } />
                        </Route>
                        <Route path='*' element={ <h1>Page Not Found</h1> } />
                        <Route path='verify:id' element={ <h1>Rota dinamica</h1> } />
                    </Routes>
                </div>
            </Sidebar>
        </div>)
}


export default Main