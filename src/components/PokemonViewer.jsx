import '../style/PokemonViewer.css'
import pokeballLarge from '../pokeball_large.png'

function PokemonViewer({ focusedPokemon, teamChangeHandler }){
    var types = [];
    var stats = [];
    if (focusedPokemon !== null){
        types = focusedPokemon.types.map((typeJson, i) => {
            return (
                <div key={i} type={typeJson.type.name} className='type-box'>
                    <b>{typeJson.type.name}</b>
                </div>
            );
        });
        stats = focusedPokemon.stats.map((statInfo, i) => {
            return (
                <tr key={i}>
                    <td>{statInfo.stat.name}</td>
                    <td>{statInfo.base_stat}</td>
                </tr>
            );
        });
    }

    const pokemonArt = (
        <div className='sprite'>
            <img 
            src={focusedPokemon ? focusedPokemon.sprites.other['official-artwork'].front_default : pokeballLarge}
            alt='Selected pokemon artwork'
            />
        </div>
    );


    let pokemonInfo;
    if (focusedPokemon) {
        pokemonInfo = (
            <div className='info'>
                <h4>
                    <u>
                    #{focusedPokemon.id} - {focusedPokemon.name.toUpperCase()}
                    </u>
                </h4>
                <div>
                    <img 
                        src={focusedPokemon.sprites.front_default}
                        alt='Selected pokemon sprite'
                    />
                    <img 
                        src={focusedPokemon.sprites.front_shiny}
                        alt='Selected pokemon shiny sprite'
                    />
                    <div>
                        {types}
                    </div>
                    <div>
                        <table id='stats-table'>
                            <tbody>
                                <tr>
                                    <th>Stat</th>
                                    <th>Base Value</th>
                                </tr>
                                {stats}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
    else {
        pokemonInfo = (
            <div className='info'>
                <h4>Select a pokemon for details</h4>
            </div>
        );
    }
    

    const options = (
        <div className='options'>
            <button onClick={() => teamChangeHandler('add')}>Add to Team</button>
            <button onClick={() => teamChangeHandler('remove')}>Remove from Team</button>
        </div>
    );

    return (
        <div className="PokemonViewer">
            {pokemonArt}
            {pokemonInfo}
            {options}
        </div>
    );
}

export default PokemonViewer;