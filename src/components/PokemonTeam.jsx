import '../style/PokemonTeam.css'
import pokeball from '../pokeball.png'

function PokemonTeam({ chosenTeam , onPokemonClicked }) {
    
    // Snapshots of the currently selected pokemon in the team
    const teamMembers = chosenTeam.map((pokemonData, i) => {
        if(pokemonData === null){
            return (
                <button key={i} className='pokedex-button'>
                <img 
                    src={pokeball} 
                    alt='Team member not filled' />
                </button>
            );
        }
        return (
            <button key={i} className='pokedex-button' onClick={() => onPokemonClicked(pokemonData)}>
                <img 
                    src={pokemonData.sprites.front_default} 
                    alt={`Team thumbnail for ${pokemonData.name}`} />
            </button>
        );
    });

    return (
        <div className="PokemonTeam pokedex-panel">
            <div>
                {teamMembers}
            </div>
        </div>
    );
}

export default PokemonTeam;