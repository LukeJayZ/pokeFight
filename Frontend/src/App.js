
/* import {Route, Routes} from 'react-router-dom'; */
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [getPokemon,setGetPokemon] = useState(null)
  const fetchData = async () => {
    try {
      const pokemonData = await fetch("https://pokefight-lrha.onrender.com")
      if (!pokemonData) throw new Error (`Request failed with the status of ${pokemonData.status}`)
      const parseData = await pokemonData.json()
      setGetPokemon(parseData)
    } catch (error) {
      console.log(error.message)
      
    }
  }
  useEffect(()=> {
    fetchData()
  },[])
console.log(getPokemon);
  return (
    <div className="App">
    {/*   <Routes>
          <Route path = "/" element={AllPokemon}/>
          <Route path = "/pokemon/:id" element= {PokemonId} />
          <Route path = "/pokemon/:id/:info" element ={PokemonInfo}/>
      </Routes> */}

    </div>
  );
}

export default App;
