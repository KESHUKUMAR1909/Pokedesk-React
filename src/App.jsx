import './App.css'
import { Link } from 'react-router-dom'
import CustomRoutes from './Routes/CustomRoutes'

function App() {

  return (
    <div className='main-container'>
     <Link to={"/"} ><h1>Welcome to PokeDesk</h1></Link> 
      <CustomRoutes />
    </div>
  )
}

export default App
