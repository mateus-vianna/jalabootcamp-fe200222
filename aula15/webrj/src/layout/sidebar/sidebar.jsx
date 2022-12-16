import React, { useState } from 'react'
import SidebarItem from './sidebarItem'

const Sidebar = ({ setPage, children }) => {

    const [isOpen, setOpen] = useState()
    const titles = ['Home', 'Add dog', 'Buy a Dog', 'Pet News']

    const sideBarAction = (isOpen) => {
        return isOpen ? 'open-sidebar' : 'closed-sidebar'
    }

    function openSideBar() {
        setOpen(!isOpen)
    }

    return (
        <>
            <div onMouseEnter={ openSideBar } onMouseLeave={ openSideBar } className={ sideBarAction(isOpen) }>
                <div className='ml-3 mr-3 flex flex-column'>
                    { isOpen && (
                        <>
                            <div className='mt-4 center-itens'>
                                <h2>Doggy shop</h2>
                            </div>
                            <div className='h-line' />
                            { titles.map((title, index) => {
                                return (
                                    <SidebarItem setPage={ setPage } key={ index } index={ index } title={ title } />)
                            }) }
                        </>) }
                </div>
            </div>
            { children }
        </>
    )
}

export default Sidebar