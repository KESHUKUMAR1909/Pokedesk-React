import "./PokemonDetails.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonDetail from "../../Hooks/pokemonDetail"
import NotFound from "../404Page/NotFound";

function PokemonDetails({pokemonName}) {
    const [pokemonDetails, setPokemonDetails] = useState(null); // Change [] to null
    const { id } = useParams();

    useEffect(() => {
        pokemonDetail(pokemonName , id ,setPokemonDetails);
    }, [id ,pokemonName]);

    return (
        <div>
            {pokemonDetails ? (
                <div className="pokemon-container">
                    <h1 className="pokemon-name">{pokemonDetails.name}</h1>
                    <img src={pokemonDetails.image} alt={pokemonDetails.name} />
                    <p>Height: {pokemonDetails.height}</p>
                    <p className="type-prop">Type: {pokemonDetails.type}</p>
                </div>
            ) : (
                <NotFound />
            )}
        </div>
    );
}

export default PokemonDetails;
