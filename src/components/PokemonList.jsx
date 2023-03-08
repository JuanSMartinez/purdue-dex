import "../style/PokemonList.css"
import PokemonThumbail from "./PokemonThumbnail";
import { useState, useEffect } from "react";

function PokemonList(){
    const [offset, setOffset] = useState(0);
    const [pokemon, setPokemon] = useState();

    const displayLimit = 10;

    //Handle the fetch of a URL of pokemon
    const handleFetch = (fetchResponse) => {
        return fetchResponse.json();
    };

    // Handle the JSON response from the fetch URL
    const handleResponse = (jsonResponse) => {
        const pokemonThumbnails = jsonResponse.results.map((item) => {
            return (
                <li key={item.name}>
                    <PokemonThumbail name={item.name} infoUrl={item.url} />
                </li>
            );
            
        });
        setPokemon(pokemonThumbnails);
    };

    // Handle the error of a failed fecthed URL
    const handleError = (error) => {
        console.log(error);
    };

    //Call API to get pokemon
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${displayLimit}`;
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError);
    }, [offset]);


    return (
        <div className="PokemonList">
            <ul>{pokemon}</ul>
            <button onClick={() => setOffset(Math.max(offset - displayLimit, 0))}>Previous</button>
            <button onClick={() => setOffset(offset + displayLimit)}>Next</button>
        </div>
    );
}

export default PokemonList;