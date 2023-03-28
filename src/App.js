import './style/App.css'
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';
import PokemonTeam from './components/PokemonTeam';
import DatabaseManager from './components/DatabaseManager';

function App() {
  // States of the pokemon being focused in the viewer and the current selection of pokemon in a team
  const [focusedPokemonData, setFocusedPokemonData] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));

  // Anonymous function passed to the list and team components for when a pokemon is clicked
  const onClickedPokemon = (pokemonData) => setFocusedPokemonData(pokemonData);

  // Anonymous function passed to the database component to change the state of the team list with remote data
  const onReadTeamFromDatabase = (remoteTeamData) => setTeam(remoteTeamData);

  // Handle a request to add or remove a focused pokemon from the team list
  const onTeamChange = (request) => {
    var nextTeam = team.slice();
    const spotAvailable = nextTeam.some((element) => element === null);
    const atLeastOne = nextTeam.some((element) => element !== null);
    const alreadyInTeam = nextTeam.some((element) => element !== null && element.id === focusedPokemonData.id);
    if (request === 'add') {
      if (spotAvailable && !alreadyInTeam) {
        nextTeam[nextTeam.indexOf(null)] = focusedPokemonData;
        nextTeam.sort(nullsLastSort);
        setTeam(nextTeam);
      }
      else{
        alert("The pokemon is already on your team or there are no more spots in the team.")
      }
    }
    else if (request === 'remove') {
      if (!atLeastOne) {
        alert("No more Pokemon to remove in the team");
        return;
      }
      const index = nextTeam.indexOf(focusedPokemonData);
      if (index >= 0) {
        nextTeam[index] = null;
        nextTeam.sort(nullsLastSort);
        setTeam(nextTeam);
      }
      else {
        alert("The Pokemon is not in the team.")
      }
      
    }
  };

  return (
    <div className="App">
      <PokemonList onPokemonClicked={onClickedPokemon}/>
      <PokemonViewer focusedPokemon={focusedPokemonData} teamChangeHandler={onTeamChange}/>
      <PokemonTeam chosenTeam={team} onPokemonClicked={onClickedPokemon}/>
      <DatabaseManager />
    </div>
  );
}

// Sorting function that leaves all nulls at the tail of the array
function nullsLastSort(a, b) {
  if (a === b){
    return 0;
  }
  if (a === null){
    return 1;
  }
  if (b === null) {
    return -1;
  }
}

export default App;
