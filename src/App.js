import './style/App.css'
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';
import PokemonTeam from './components/PokemonTeam';

function App() {
  const [focusedPokemonData, setFocusedPokemonData] = useState(null);
  const [team, setTeam] = useState(Array(6).fill(null));

  const onClickedPokemon = (pokemonData) => setFocusedPokemonData(pokemonData);

  const onTeamChange = (request) => {
    var nextTeam = team.slice();
    const spotAvailable = nextTeam.some((element) => element === null);
    const atLeastOne = nextTeam.some((element) => element !== null);
    const alreadyInTeam = nextTeam.some((element) => element !== null && element.id === focusedPokemonData.id);
    if (request === 'add' && spotAvailable && !alreadyInTeam) {
      nextTeam[nextTeam.indexOf(null)] = focusedPokemonData;
      setTeam(nextTeam);
    }
    else if (request === 'remove' && atLeastOne) {
      nextTeam.forEach((data, i) => {
        if (data!== null && data.id === focusedPokemonData.id) {
          nextTeam[i] = null;
        }
      });
      setTeam(nextTeam);
    }
  };

  return (
    <div className="App">
      <PokemonList onPokemonClicked={onClickedPokemon}/>
      <PokemonViewer focusedPokemon={focusedPokemonData} teamChangeHandler={onTeamChange}/>
      <PokemonTeam />
    </div>
  );
}

export default App;
