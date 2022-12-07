import React from 'react';

function GameCard({game}) {
    return (
        <li className="card">
            <img src={game.image} alt={game.title} />
            <h4>{game.title}</h4>

        </li>
    )
}

export default GameCard