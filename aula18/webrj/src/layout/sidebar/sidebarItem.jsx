import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SidebarItem = ({ route, index, setPage }) => {

    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(route.link)
    }

    return (
        <>
            <div className='item-hover center-itens mt-4' onClick={ () => clickHandler() }>
                <h5 className='max-width'>{ route.page }</h5>
            </div>
            <div className='h-line' />
        </>
    )
}

export default SidebarItem