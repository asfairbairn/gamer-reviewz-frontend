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
            <p1><b>Developer:</b> {studio}</p1>
            <p1><b>Release Date:</b> {releaseDate}</p1>
            <p1><b>Genre:</b> {genre}</p1>
            <p>{review}</p>
            <Link exact to="/">Back to Home</Link>
            <Link to="/genres">Back to Genres</Link>
        </section>
   )
}

export default GameDetails