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
            <img 
                src={pokemonData ? pokemonData.sprites.front_default : loadingIcon} 
                alt={`Thumbnail for ${pokemonData ? pokemonData.name: null}`} />
            <p>{pokemonData ? `#${pokemonData.id}-${pokemonData.name}` : 'loading...'}</p>
        </td>
    );
};

export default PokemonThumbail;