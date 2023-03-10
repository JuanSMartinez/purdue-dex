import '../style/PokemonTeam.css'
import PokemonThumbail from './PokemonThumbnail';

function PokemonTeam({ chosenTeam }) {
    const teamMembers = chosenTeam.map((pokemonData, i) => {
        if(pokemonData === null){
            return <div></div>
        }
        return (
            <button key={pokemonData.id} className='team-member-button'>
                <img 
                    src={pokemonData.sprites.front_default} 
                    alt={`Team thumbnail for ${pokemonData.name}`} />
            </button>
        );
    });

    return (
        <div className="PokemonTeam">
            <ul>
                {teamMembers}
            </ul>
        </div>
    );
}

export default PokemonTeam;