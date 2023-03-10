import '../style/PokemonViewer.css'
import loadingIcon from '../loading.png'
import { useEffect } from 'react';

function PokemonViewer({ focusedPokemon }){
    console.log(focusedPokemon)
    return (
        <div className="PokemonViewer">
            <div className='sprites'>
                <img src={focusedPokemon ? focusedPokemon.sprites.other['official-artwork'].front_default : loadingIcon}/>
                
            </div>
        </div>
    );
}

export default PokemonViewer;