import Search  from './Components/Search/Search'
import PokemonList from './Components/PokemonList/PokemonList'
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <h1>Welcome to PokeDesk</h1>
      <Search />
      <PokemonList />
    </div>
  )
}

export default App
