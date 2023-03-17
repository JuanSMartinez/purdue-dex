import '../style/PokemonViewer.css'
import pokeballLarge from '../pokeball_large.png'
import { useEffect, useState } from 'react';

function PokemonViewer({ focusedPokemon, teamChangeHandler }){

    // States of information and artwork of a focused pokemon
    const [pokemonArt, setPokemonArt] = useState(pokeballLarge);
    const [info, setInfo] = useState(
        <div className='info'>
            <h4>Select a pokemon for details</h4>
        </div>
    );


    // Load the art and info when a change occurrs on the focused pokemon
    useEffect(() => {
        // If there is no pokemon focused, leave the default states unchanged
        if(!focusedPokemon) {
            return;
        }

        let newTypes = focusedPokemon.types.map((typeJson, i) => {
            return (
                <div key={i} type={typeJson.type.name} className='type-box'>
                    <b>{typeJson.type.name}</b>
                </div>
            );
        });

        let newStats = focusedPokemon.stats.map((statInfo, i) => {
            return (
                <tr key={i}>
                    <td>{statInfo.stat.name}</td>
                    <td>{statInfo.base_stat}</td>
                </tr>
            );
        });

        //Load and set the pokemon information using the types and stats
        let newInfo = (
            <div className='info'>
                <h4><u>#{focusedPokemon.id} - {focusedPokemon.name.toUpperCase()}</u></h4>
                <div>
                    <img src={focusedPokemon.sprites.front_default} alt="Selected pokemon sprite"/>
                    {focusedPokemon.sprites.front_shiny ?
                        <img 
                            src={focusedPokemon.sprites.front_shiny}
                            alt='Selected pokemon shiny sprite'
                        /> : <></>
                    }
                    <div>
                        {newTypes}
                    </div>
                    <div>
                        <table id='stats-table'>
                            <tbody>
                                <tr>
                                    <th>Stat</th>
                                    <th>Base Value</th>
                                </tr>
                                {newStats}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );

        // Set the info
        setInfo(newInfo);
        // Set the pokemon art
        setPokemonArt(focusedPokemon.sprites.other['official-artwork'].front_default);
    }, [focusedPokemon]);

    const pokemonArtJSX = (
        <div className='sprite'>
            <img 
            src={pokemonArt}
            alt='Selected pokemon artwork'
            width='70%'
            />
        </div>
    );
    

    return (
        <div className="PokemonViewer pokedex-panel">
            {pokemonArtJSX}
            {info}
            <div className='options'>
                <button className='pokedex-button' onClick={() => teamChangeHandler('add')}><b>Add to Team</b></button>
                <button className='pokedex-button' onClick={() => teamChangeHandler('remove')}><b>Remove from Team</b></button>
            </div>
        </div>
    );
}

export default PokemonViewer;