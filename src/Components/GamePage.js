import React from 'react';
import GameCard from './GameCard'

function GamePage({games}) {
    const createGameCard = games.map((game) => {
        return <GameCard game={game} />
    })

    return (
        <div>
            {createGameCard}
        </div>
    )
}

export default GamePage

