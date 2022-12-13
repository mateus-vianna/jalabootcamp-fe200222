import React, { useState } from 'react'
import '../css/global.css'
import Home from '../pages/home'
import Sidebar from './sidebar'

function Main() {
    //TODO create routes hook

    return (
        <div className='main-container flex'>
            <Sidebar />
            <div className='ml-1 secondary-container'>
                <Home />
            </div>
        </div>)

}


export default Main