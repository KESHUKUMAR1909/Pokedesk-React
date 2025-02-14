import axios from "axios";
const pokemonDetail = async (pokemonName , id , setPokemonDetails) => {
    try {
        let response ;
        if(pokemonName){
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }else{
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
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
export default pokemonDetail;