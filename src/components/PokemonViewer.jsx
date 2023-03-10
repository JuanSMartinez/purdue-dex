import '../style/PokemonViewer.css'
import loadingIcon from '../loading.png'

function PokemonViewer({ focusedPokemon }){
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
            src={focusedPokemon ? focusedPokemon.sprites.other['official-artwork'].front_default : loadingIcon}
            alt='Selected pokemon artwork'
            />
        </div>
    );

    const pokemonInfo = (
        <div className='info'>
            <h2>
                <u>
                {focusedPokemon ? `#${focusedPokemon.id} - ${focusedPokemon.name.toUpperCase()}`: 'null'}
                </u>
            </h2>
            <div>
                <img 
                    src={focusedPokemon ? focusedPokemon.sprites.front_default : loadingIcon}
                    alt='Selected pokemon sprite'
                />
                <img 
                    src={focusedPokemon ? focusedPokemon.sprites.front_shiny : loadingIcon}
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

    return (
        <div className="PokemonViewer">
            {pokemonArt}
            {pokemonInfo}
            <div className='options'>
                <button>Add to Team</button>
                <button>Remove from Team</button>
            </div>
        </div>
    );
}

export default PokemonViewer;