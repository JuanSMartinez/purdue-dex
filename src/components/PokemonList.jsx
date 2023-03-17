import "../style/PokemonList.css"
import PokemonThumbail from "./PokemonThumbnail";
import buttonLeft from "../button_left.png";
import buttonRight from "../button_right.png";
import { useState, useEffect } from "react";

function PokemonList({ onPokemonClicked }){
    // Limit of pokemon per page
    const pokemonPerPage = 12;

    // State of the current page displayed
    const [pageInfo, setPageInfo] = useState({
        'previous': null, 
        'next': `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pokemonPerPage}`
    });

    // State of the array of pokemon data displayed
    const [pokemon, setPokemon] = useState(Array(pokemonPerPage).fill(null));

    // States of the total pages to navigate and the current page
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    //Handle the fetch of a URL of pokemon
    const handleFetch = (fetchResponse) => {
        return fetchResponse.json();
    };

    // Handle the JSON response from the fetched URL
    const handleResponse = (jsonResponse) => {
        const updatedPokemon = pokemon.slice();
        jsonResponse.results.forEach( (element, i) => {
            updatedPokemon[i] = <PokemonThumbail key={i} infoUrl={element.url} onThumbnailClick={onPokemonClicked} />
        });
        setPokemon(updatedPokemon);
        setPageInfo({
            'next': jsonResponse.next,
            'previous': jsonResponse.previous
        })
        setTotalPages(Math.ceil(jsonResponse.count / pokemonPerPage));
    };

    // Handle the error of a failed fecthed URL
    const handleError = (error) => {
        console.log(error);
    };

    //Call API to get pokemon using a promise
    function moveTo (page) {
        if (pageInfo[page]){
            // Reset all pokemon
            const resetPokemon = pokemon.slice();
            let i;
            for(i = 0; i < pokemonPerPage; i++) {
                resetPokemon[i] = <PokemonThumbail key={i} infoUrl={null} onThumbnailClick={onPokemonClicked} />;
            }
            setPokemon(resetPokemon);
            
            fetch(pageInfo[page])
            .then(handleFetch)
            .then((response) => {
                handleResponse(response);
                setCurrentPage(page === 'next' ? currentPage + 1 : currentPage - 1);
            })
            .catch(handleError);
        }
    }

    // Trigger moving to the first page when page loads
    useEffect(() => moveTo('next'), []);

    return (
        <div className="PokemonList">
            <div className='page-container pokedex-panel'>
                <table id='page-table'>
                    <tbody>
                        <tr>
                        {pokemon.slice(0, 4)}
                        </tr>
                        <tr>
                        {pokemon.slice(4, 8)}
                        </tr>
                        <tr>
                        {pokemon.slice(8, 12)}
                        </tr>
                    </tbody>
                </table>
            </div> 
            <div className='nav-control-container pokedex-panel'>
                <button onClick={() => moveTo('previous')} className='nav-button'>
                    <img src={buttonLeft} alt="Left page button" />
                </button>
                <p className='page-info'><b>Page {currentPage} of {totalPages}</b></p>
                <button onClick={() => moveTo('next')} className='nav-button'>
                    <img src={buttonRight} alt="Right page button" />
                </button>
            </div>
        </div>
    );
}

export default PokemonList;