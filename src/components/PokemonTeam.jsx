import '../style/PokemonTeam.css'
import pokeball from '../pokeball.png'

function PokemonTeam({ chosenTeam , onPokemonClicked }) {
    
    const teamMembers = chosenTeam.map((pokemonData, i) => {
        if(pokemonData === null){
            return (
                <button key={i} className='team-member-button'>
                <img 
                    src={pokeball} 
                    alt='Team member not filled' />
                </button>
            );
        }
        return (
            <button key={i} className='team-member-button' onClick={() => onPokemonClicked(pokemonData)}>
                <img 
                    src={pokemonData.sprites.front_default} 
                    alt={`Team thumbnail for ${pokemonData.name}`} />
            </button>
        );
    });

    return (
        <div className="PokemonTeam">
            {teamMembers}
        </div>
    );
}

export default PokemonTeam;