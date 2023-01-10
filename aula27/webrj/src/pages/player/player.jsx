import React, { useContext } from 'react'
import { PlayersContext } from '../../index'

function Player() {
    const { players } = useContext(PlayersContext)

    return (
        <div>
            <ul>
                { players?.map((player, index) => {
                    return (<li key={ index } > { player }</li>)
                }) }
            </ul>
        </div>)
}


export default Player