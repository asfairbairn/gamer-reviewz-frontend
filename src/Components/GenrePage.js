import React from 'react';
import GameCard from './GameCard'

function GenrePage({games}) {
    const filteredRPGGames = games.filter(game => {
        return game.genre === "RPG"
    })

    const createRPGGameCards = filteredRPGGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredMMORPGGames = games.filter(game => {
        return game.genre === "MMORPG"
    })

    const createMMORPGGameCards = filteredMMORPGGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredFPSGames = games.filter(game => {
        return game.genre === "FPS"
    })

    const createFPSGameCard = filteredFPSGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredRTSGames = games.filter(game => {
        return game.genre === "RTS"
    })

    const createRTSGameCard = filteredRTSGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredMOBAGames = games.filter(game => {
        return game.genre === "MOBA"
    })

    const createMOBAGameCard = filteredMOBAGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredpuzzleGames = games.filter(game => {
        return game.genre === "Puzzle"
    })

    const createPuzzleGameCards = filteredpuzzleGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredRoguelikeGames = games.filter(game => {
        return game.genre === "Roguelike"
    })

    const createRoguelikeGameCards = filteredRoguelikeGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    const filteredSocialDeceptionGames = games.filter(game => {
        return game.genre === "Social Deception"
    })

    const createSocialDeceptionGameCards = filteredSocialDeceptionGames.map((game) => {
        return <GameCard key={game.id} game={game} />
    })

    return (
        <main className='genreContainer'>
            <h2>RPG</h2>
                <ul className="cards">
                    {createRPGGameCards}
                </ul>
            <h2>MMORPG</h2>
                <ul className="cards">
                    {createMMORPGGameCards}
                </ul>
            <h2>FPS</h2>
                <ul className="cards">
                    {createFPSGameCard}
                </ul>
            <h2>RTS</h2>
                <ul className="cards">
                    {createRTSGameCard}
                </ul>
            <h2>MOBA</h2>
                <ul className="cards">
                    {createMOBAGameCard}
                </ul>
            <h2>Puzzle</h2>
                <ul className="cards">
                    {createPuzzleGameCards}
                </ul>
            <h2>Roguelike</h2>
                <ul className="cards">
                    {createRoguelikeGameCards}
                </ul>
            <h2>Social Deception</h2>
                <ul className="cards">
                    {createSocialDeceptionGameCards}
                </ul>
        </main>
    )
}

export default GenrePage