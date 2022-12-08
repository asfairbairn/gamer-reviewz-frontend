import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"

function GameDetails (API) {
    const [game, setGame] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/games/${id}`)
            .then(r => r.json())
            .then(game => setGame(game))
    }, [id])

    const { title, image, studio, releaseDate, review, genre} = game


   return (
        <section className="detail">
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <h3>Developer: {studio}</h3>
            <h3>Release Date: {releaseDate}</h3>
            <h3>Genre: {genre}</h3>
            <p>{review}</p>
            <Link exact to="/">Back to Home</Link>
        </section>
   )
}

export default GameDetails