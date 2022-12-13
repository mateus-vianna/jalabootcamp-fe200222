import React, { useState } from 'react'


const SidebarItem = ({ title }) => {
    return (
        <>
            <div className='item-hover center-itens mt-4'>
                <h3>{ title }</h3>
            </div>
            <div className='h-line' />
        </>
    )
}


const Sidebar = () => {

    const [isOpen, setOpen] = useState()
    const titles = ['Buy a dog', 'Sell a dog', 'Breedes', 'Breeders', 'Blog', 'Cachorro']

    const sideBarAction = (isOpen) => {
        return isOpen ? 'open-sidebar' : 'closed-sidebar'
    }

    function openSideBar() {
        setOpen(!isOpen)
    }

    return (
        <div onClick={ openSideBar } className={ sideBarAction(isOpen) }>
            <div className='ml-3 mr-3 flex flex-column'>
                { isOpen && (
                    <>
                        <div className='mt-4 center-itens'>
                            <h2>Doggy shop</h2>
                        </div>
                        <div className='h-line' />
                        { titles.map(title => {
                            return (
                                <SidebarItem title={ title } />)
                        }) }
                    </>) }
            </div>
        </div>
    )
}

export default Sidebar