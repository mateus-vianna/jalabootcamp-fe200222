import React from 'react'

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
        </>
    )
}

export default News