import './style/App.css'
import PokemonList from './components/PokemonList';
import PokemonViewer from './components/PokemonViewer';

function App() {
  return (
    <div className="App">
      <PokemonList />
      <PokemonViewer />
    </div>
  );
}

export default App;
