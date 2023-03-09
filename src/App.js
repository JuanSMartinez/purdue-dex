import './style/App.css'
import { useState } from 'react';
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';
import PokemonTeam from './components/PokemonTeam';

function App() {
  const [focusedPokemonData, setFocusedPokemonData] = useState(null);
  
  return (
    <div className="App">
      <PokemonList />
      <PokemonViewer />
      <PokemonTeam />
    </div>
  );
}

export default App;
