import React, { useState } from 'react'
import '../css/global.css'
import Sidebar from './sidebar/sidebar'
import changePage from '../utils/usePage'

function Main() {
    const [page, setPage] = useState()

    return (
        <div className='main-container flex'>
            <Sidebar setPage={ setPage }>
                <div className='ml-1 secondary-container'>
                    { changePage(page) }
                </div>
            </Sidebar>
        </div>)
}


export default Main