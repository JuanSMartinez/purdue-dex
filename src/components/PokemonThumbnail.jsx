import { useState, useEffect } from "react";
import loadingIcon from '../loading.png'
import '../style/PokemonThumbnail.css'

function PokemonThumbail({infoUrl}) {
    const [pokemonData, setPokemonData] = useState(null);
    
    // Get the pokemon information
    useEffect(() => {
        fetch(infoUrl)
        .then((response) => response.json())
        .then((jsonResponse) => setPokemonData(jsonResponse))
        .catch((error) => console.log(error));
    }, []);

    return (
        <td>
            <button className="thumbnail-button" onClick={() => console.log('Clicked on pokemon thumbnail')}>
                <h3>{pokemonData ? `#${pokemonData.id}` : '?'}</h3>
                <img 
                    src={pokemonData ? pokemonData.sprites.front_default : loadingIcon} 
                    alt={`Thumbnail for ${pokemonData ? pokemonData.name: null}`} />
                    <b><p className="thumbnail-info">{pokemonData ? `${pokemonData.name}` : 'loading...'}</p></b>
            </button>
        </td>
    );
};

export default PokemonThumbail;