import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedesk.css';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

function Pokedex() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='pokedex-wrapper'>
            <Search setSearchTerm={setSearchTerm} />
            {searchTerm ? <PokemonDetails pokemonName={searchTerm} /> : <PokemonList  />}
        </div>
    );
}

export default Pokedex;
