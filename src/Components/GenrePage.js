import React from 'react';
import GameCard from './GameCard'

function GenrePage({games}) {

    const gameFilter = (genre) => {
        return games.filter(game => {
            return game.genre === genre
        })
    }

    const genres = ["RPG", "MMORPG", "FPS", "RTS", "MOBA", "Puzzle", "Roguelike", "Social Deception"]

    const gameCards = genres.map(genre => {
        return  (
        <>
            <h2>{genre}</h2>
            <ul className="cards">
                { gameFilter(genre).map(game => <GameCard key={game.id} game={game} />)}
            </ul>
        </>  
        )
    })

    return (
        <main className='genreContainer'>
            {gameCards}
        </main>
    )
}

export default GenrePage