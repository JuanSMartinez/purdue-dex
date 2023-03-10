import "../style/PokemonList.css"
import PokemonThumbail from "./PokemonThumbnail";
import { useState, useEffect } from "react";

function PokemonList({ onPokemonClicked }){
    const [pageInfo, setPageInfo] = useState({
        'previous': null, 
        'next':"https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=12"
    });
    const [pokemon, setPokemon] = useState();
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    //Handle the fetch of a URL of pokemon
    const handleFetch = (fetchResponse) => {
        return fetchResponse.json();
    };

    // Handle the JSON response from the fetch URL
    const handleResponse = (jsonResponse) => {
        const groupedResponses = jsonResponse.results.reduce((accumulator, _, currentIndex, array) => {
            if (currentIndex % 4 === 0){
                accumulator.push(array.slice(currentIndex, currentIndex + 4));
            }
            return accumulator;
        }, []);
        const pokemonThumbnails = groupedResponses.map((item, i) => {
            const thumbnails = item.map((element) => {
            return <PokemonThumbail 
                    key={element.name} 
                    infoUrl={element.url} 
                    onThumbnailClick={onPokemonClicked}/>
        });
        return (
            <tr key={i}>
                {thumbnails}
            </tr>
        );
        });
        setPokemon(pokemonThumbnails);
        setPageInfo({
            'next': jsonResponse.next,
            'previous': jsonResponse.previous
        })
        setTotalPages(Math.ceil(jsonResponse.count / 12));
    };

    // Handle the error of a failed fecthed URL
    const handleError = (error) => {
        console.log(error);
    };

    //Call API to get pokemon
    const moveTo = function (page) {
        if (pageInfo[page]){
            fetch(pageInfo[page])
            .then(handleFetch)
            .then((response) => {
                handleResponse(response);
                setCurrentPage(page === 'next' ? currentPage + 1 : currentPage - 1);
            })
            .catch(handleError);
        }
    }

    useEffect(() => {
        //Loaded webpage for the first time
        moveTo('next');
    }, []);

    return (
        <div className="PokemonList">
            <table id='page-table'>
                <tbody>{pokemon}</tbody>
            </table>
            <button onClick={() => moveTo('previous')}>Previous</button>
            <button onClick={() => moveTo('next')}>Next</button>
            <span>Page {currentPage} of {totalPages}</span>
        </div>
    );
}

export default PokemonList;