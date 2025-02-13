// CSS imports
// import { useState } from 'react';
import PokemonList from '../PokemonList/PokemonList';
import Search from '../Search/Search';
import './Pokedesk.css';

function Pokedex() {


    return (
        <div className='pokedex-wrapper'>
            <Search  />
            <PokemonList />
        </div>
    )
}

export default Pokedex;