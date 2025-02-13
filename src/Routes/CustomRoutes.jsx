import { Route, Routes } from "react-router-dom";
import Pokedesk from "../Components/PokeDesk/Pokedesk"
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails"

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Pokedesk />} />
            <Route path="/Pokemon/:id" element={<PokemonDetails />} />
        </Routes>
    );
}

export default CustomRoutes;