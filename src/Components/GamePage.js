import React from 'react';
import GameCard from './GameCard'
import SearchBar from './SearchBar'

function GamePage({games, search, handleSearch}) {
    
    const createGameCard = games.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    return (
        <main>
            <SearchBar search={search} handleSearch={handleSearch}/>
            <ul className="cards">
                {createGameCard}
            </ul>
        </main>
    )
}

export default GamePage

