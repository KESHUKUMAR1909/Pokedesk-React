import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";
import { useEffect, useState } from "react";

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState(null);
    const [prevUrl, setPrevUrl] = useState(null);
    const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            try {
                const response = await axios.get(currentUrl);
                const results = response.data.results;
                
                setNextUrl(response.data.next);
                setPrevUrl(response.data.previous);

               
                const pokemonDetails = await Promise.all(
                    results.map(async (pokemon) => {
                        const detailsResponse = await axios.get(pokemon.url);
                        const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
                        return {
                            name: pokemon.name,
                            image: detailsResponse.data.sprites.other.dream_world.front_default || 
                                   detailsResponse.data.sprites.front_default, 
                            id:pokemonId
                        };
                    })
                );

                setPokemonList(pokemonDetails);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            } finally {
                setLoading(false); 
            }
        };
        fetchPokemon();
    }, [currentUrl]);

    return (
        <>
            <div className="pokemon-area">
                {loading ? (
                    <h2 style={{margin:"auto"}}>Loading Pokémon...</h2>
                ) : (
                    pokemonList.map((pokemon, index) => (
                        <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.url}  id={pokemon.id}/>
                    ))
                )}
            </div>
            <div className="button-area">
                <button 
                    onClick={() => prevUrl && setCurrentUrl(prevUrl)} 
                    disabled={!prevUrl || loading}
                >
                    Previous
                </button>
                <button 
                    onClick={() => nextUrl && setCurrentUrl(nextUrl)} 
                    disabled={!nextUrl || loading}
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default PokemonList;
