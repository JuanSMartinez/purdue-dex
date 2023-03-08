import './style/App.css'
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';
import PokemonTeam from './components/PokemonTeam';

function App() {
  return (
    <div className="App">
      <PokemonList />
      <PokemonViewer />
      <PokemonTeam />
    </div>
  );
}

export default App;
