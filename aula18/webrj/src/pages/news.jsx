import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NewsDetails = ({ message }) => {

    return (<div>
        <h3>{ message }</h3>
    </div>)
}

const MainNews = () => {
    return (<div>
        <h1>Dog News</h1>
    </div>)
}

const News = () => {
    const text = 'Fake news'

    return (
        <>
            <MainNews />
            <NewsDetails message={ text } />
            <Link to='special'>Special page</Link>
            <Outlet />
        </>
    )
}

export default News