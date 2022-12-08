import React from 'react';
import {useState, useEffect} from 'react'
import Header from './Header'
import GamePage from './GamePage'
import GenrePage from './GenrePage'
import GameForm from './GameForm'
import GameDetails from './GameDetails'



function App({Route, Switch}) {

  const API = "http://localhost:3000/games"

  const [games, setGames] = useState([])

  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((games) => setGames(games))
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(search.toLowerCase())
    
  })


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <GamePage games={filteredGames} search={search} handleSearch={handleSearch}/>
        </Route>
        <Route path="/games/:id">
          <GameDetails API={API}/>
        </Route>
        <Route path="/genres">
          <GenrePage />
        </Route>
        <Route path="/gameform">
          <GameForm games={games} setGames={setGames} API={API}/>
        </Route>        
      </Switch>
    </div>
  );
}

export default App;
