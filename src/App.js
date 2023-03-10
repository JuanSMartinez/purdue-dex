import './style/App.css'
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';
import PokemonTeam from './components/PokemonTeam';

function App() {
  const [focusedPokemonData, setFocusedPokemonData] = useState(null);

  const onClickedPokemon = (pokemonData) => setFocusedPokemonData(pokemonData);

  return (
    <div className="App">
      <PokemonList onPokemonClicked={onClickedPokemon}/>
      <PokemonViewer focusedPokemon={focusedPokemonData}/>
      <PokemonTeam />
    </div>
  );
}

export default App;
