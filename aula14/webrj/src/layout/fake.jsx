import React from 'react'

const News = ({ message, alo }) => {
    console.log(alo)

    return (<div>
        <h1>{ message }</h1>
    </div>)
}

const Outra = () => {
    return (<div>
        <h1>Outra coisa</h1>
    </div>)
}

const Fake = () => {
    const text = 'Fake news'

    return (
        <>
            <Outra />
            <News message={ text } alo={ 21 } />
        </>
    )
}

export default Fake