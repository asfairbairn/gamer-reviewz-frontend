import React from 'react';
import { useHistory } from "react-router-dom"

function GameCard({game}) {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/games/${game.id}`)

    }
    return (
        <li className="card" onClick={handleClick}>
            <img src={game.image} alt={game.title} />
            <h4>{game.title}</h4>
        </li>
    )
}

export default GameCard