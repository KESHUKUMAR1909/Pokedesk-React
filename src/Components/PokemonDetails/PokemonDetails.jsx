import axios from "axios";
import "./PokemonDetails.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
    const [pokemonDetails, setPokemonDetails] = useState(null); // Change [] to null
    const { id } = useParams();

    useEffect(() => {
        const fetchPokemonWithId = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                console.log(response.data);
                const responseData = {
                    name: response.data.name,
                    height: response.data.height,
                    image: response.data.sprites.other.dream_world.front_default, // Fixed image path
                    type: response.data.types.map(t => t.type.name).join(","), // Get type names
                };
                setPokemonDetails(responseData);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        fetchPokemonWithId();
    }, [id]);

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
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PokemonDetails;
