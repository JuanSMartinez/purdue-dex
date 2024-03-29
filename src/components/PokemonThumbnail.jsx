import { useState, useEffect } from "react";
import loadingIcon from '../loading.png'
import '../style/PokemonThumbnail.css'

function PokemonThumbail({infoUrl, onThumbnailClick}) {
    // State of the pokemon data represented in the thumbnail
    const [pokemonData, setPokemonData] = useState(null);
    
    // Get the pokemon information when there is a change in the URL
    useEffect(() => {
        if(infoUrl) {
            fetch(infoUrl)
            .then((response) => response.json())
            .then((jsonResponse) => setPokemonData(jsonResponse))
            .catch((error) => console.log(error));
        } else {
            setPokemonData(null);
        }
    }, [infoUrl]);

    return (
        <td>
            <button className="thumbnail-button" onClick={() => onThumbnailClick(pokemonData)}>
                <img 
                    src={pokemonData ? pokemonData.sprites.front_default : loadingIcon} 
                    alt={`Thumbnail for ${pokemonData ? pokemonData.name: null}`} />
                    <b><p className="thumbnail-info">{pokemonData ? `${pokemonData.name}` : 'loading...'}</p></b>
            </button>
        </td>
    );
};

export default PokemonThumbail;