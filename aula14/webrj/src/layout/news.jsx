import React from 'react'

const NewsDetails = ({ message, alo }) => {
    console.log(alo)

    return (<div>
        <h1>{ message }</h1>
    </div>)
}

const MainNews = () => {
    return (<div>
        <h1>Outra coisa</h1>
    </div>)
}

const News = () => {
    const text = 'Fake news'

    return (
        <>
            <MainNews />
            <NewsDetails message={ text } alo={ 21 } />
        </>
    )
}

export default News