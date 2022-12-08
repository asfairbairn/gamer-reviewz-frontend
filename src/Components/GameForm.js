import React from 'react';
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

function GameForm({games, setGames, API}) {

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        studio: "",
        releaseDate: "",
        review: "",
        genre: "",
        plays: 0,
    })

    const history = useHistory()

    const handleFormChange = (e) => {
        const attribute = e.target.name
        const value = e.target.value
        setFormData({...formData, [attribute]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(API, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData),})
            .then(r => r.json())
            .then(newGame => {
                setGames([...games, formData])
                history.push(`/games/${newGame.id}`)
                })

    }
    return (
        <div className="new-game-form">
            <h2>New Game Review</h2>
            <form onSubmit={handleSubmit}>
                <label for="title">Title:</label>
                <input type="text" name="title" placeholder="Game title" onChange={handleFormChange} value={formData.title}/>
                <label for="image">Image:</label>
                <input type="text" name="image" placeholder="Image address" onChange={handleFormChange} value={formData.image}/>
                <label for="studio">Developer:</label>
                <input type="text" name="studio" placeholder="Developer" onChange={handleFormChange} value={formData.studio}/>
                <label for="releaseDate">Release Date:</label>
                <input type="date" name="releaseDate" required pattern="\d{2}-\d{2}-\d{4}" onChange={handleFormChange} value={formData.releaseDate}/>
                <label for="genre">Genre:</label>
                <select name="genre" onChange={handleFormChange} value={formData.genre}>
                    <option value="" disabled selected hidden>Choose a Genre</option>
                    <option value="RPG">RPG</option>
                    <option value="MMORPG">MMORPG</option>
                    <option value="FPS">FPS</option>
                    <option value="RTS">RTS</option>
                    <option value="MOBA">MOBA</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Roguelike">Roguelike</option>
                    <option value="Social Deception Game">Social Deception</option>
                </select>
                <label for="review">Review:</label>
                <textarea id="review" type="text" name="review" placeholder="Game review" onChange={handleFormChange} value={formData.review}/>
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default GameForm