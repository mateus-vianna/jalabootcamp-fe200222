import React, { useState } from 'react'
import '../css/global.css'
import Home from '../pages/home'

function Main() {
    //TODO create routes hook
    const [isOpen, setOpen] = useState()

    const sideBarAction = (isOpen) => {
        return isOpen ? 'open-sidebar' : 'closed-sidebar'
    }

    function openSideBar() {
        setOpen(!isOpen)
    }

    return (
        <div className='main-container flex'>
            <div onClick={ openSideBar } className={ sideBarAction(isOpen) }>
                <div className='ml-3 mr-3 flex flex-column'>
                    { isOpen && (
                        <>
                            <div className='mt-4 center-itens'>
                                <h2>Doggy shop</h2>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens mt-4'>
                                <h3>Buy a dog</h3>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens'>
                                <h3>Sell a dog</h3>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens'>
                                <h3>Breedes</h3>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens'>
                                <h3>Breeders</h3>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens'>
                                <h3>Contact</h3>
                            </div>
                            <div className='h-line' />
                            <div className='item-hover center-itens'>
                                <h3>Blog</h3>
                            </div>
                            <div className='h-line' />
                        </>) }
                </div>
            </div>
            <div className='ml-1 secondary-container'>
                <Home />
            </div>
        </div>)

}


export default Main