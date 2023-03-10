import '../style/PokemonTeam.css'

function PokemonTeam({ chosenTeam , onPokemonClicked }) {
    const teamMembers = chosenTeam.map((pokemonData, i) => {
        if(pokemonData === null){
            return <div></div>
        }
        return (
            <button key={pokemonData.id} className='team-member-button' onClick={() => onPokemonClicked(pokemonData)}>
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