import "../style/PokemonList.css"
import PokemonThumbail from "./PokemonThumbnail";
import { useState, useEffect } from "react";

function PokemonList(){
    const [offset, setOffset] = useState(0);
    const [pokemon, setPokemon] = useState();

    const displayLimit = 12;

    //Handle the fetch of a URL of pokemon
    const handleFetch = (fetchResponse) => {
        return fetchResponse.json();
    };

    // Handle the JSON response from the fetch URL
    const handleResponse = (jsonResponse) => {
        const groupedResponses = jsonResponse.results.reduce((accumulator, _, currentIndex, array) => {
            if (currentIndex % 3 === 0){
                accumulator.push(array.slice(currentIndex, currentIndex + 3));
            }
            return accumulator;
        }, []);
        const pokemonThumbnails = groupedResponses.map((item, i) => {
            const leftThumbnail = 
                <PokemonThumbail key={item[0].name} infoUrl={item[0].url} />;
            const middleThumbnail = 
                <PokemonThumbail key={item[1].name} infoUrl={item[1].url} />;
            const rightThumbnail = 
                <PokemonThumbail key={item[2].name} infoUrl={item[2].url} />;
            return (
                <tr key={i}>
                    {leftThumbnail}
                    {middleThumbnail}
                    {rightThumbnail}
                </tr>
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
            <table>
                <tbody>{pokemon}</tbody>
            </table>
            <button onClick={() => setOffset(Math.max(offset - displayLimit, 0))}>Previous</button>
            <button onClick={() => setOffset(offset + displayLimit)}>Next</button>
        </div>
    );
}

export default PokemonList;