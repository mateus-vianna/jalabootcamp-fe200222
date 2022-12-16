import React, { useState } from 'react'


const SidebarItem = ({ title, index, setPage }) => {

    return (
        <>
            <div className='item-hover center-itens mt-4' onClick={ () => setPage(index) }>
                <h3 className='max-width'>{ title }</h3>
            </div>
            <div className='h-line' />
        </>
    )
}

export default SidebarItem