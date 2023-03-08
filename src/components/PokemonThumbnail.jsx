import { useState } from "react";

function PokemonThumbail({name, infoUrl}) {
    const [imgUrl, setImgUrl] = useState();
    
    // Get the image
    fetch(infoUrl)
    .then((response) => response.json())
    .then((jsonResponse) => setImgUrl(jsonResponse.sprites.front_default))
    .catch((error) => console.log(error));

    return (
        <div>
            <img src={imgUrl} alt={`Thumbnail for ${name}`} />
            <p>{name}</p>
        </div>
    );
};

export default PokemonThumbail;