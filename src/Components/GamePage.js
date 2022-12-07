import React from 'react';
import GameCard from './GameCard'
import SearchBar from './SearchBar'

function GamePage({games}) {
    const createGameCard = games.map((game) => {
        return <GameCard game={game} />
    })

    return (
        <main>
            <SearchBar />
            <ul className="cards">
                {createGameCard}
            </ul>
        </main>
    )
}

export default GamePage

