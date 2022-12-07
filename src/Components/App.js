import React from 'react';
import {useState, useEffect} from 'react'
import Header from './Header'
import GamePage from './GamePage'
import GenrePage from './GenrePage'
import GameForm from './GameForm'



function App({Route, Switch}) {

  const API = "http://localhost:3000/games"

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((games) => setGames(games))
  }, [])

  console.log(games)


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/genres">
          <GenrePage />
        </Route>
        <Route>
          <GameForm path="/gameform" />
        </Route>
        <Route exact path="/">
          <GamePage games={games}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;