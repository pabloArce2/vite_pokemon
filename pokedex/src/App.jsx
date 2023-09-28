import React from "react"
import './App.css'
import Card from "./components/Card"
import Bg_bottom from "./assets/images/bg-pattern-bottom.svg"
import Bg_top from "./assets/images/bg-pattern-top.svg"


function App() {

  //const [pokemons, setPokemons] = React.useState([])
  const [pokemon, setPokemon] = React.useState(null)
  const [url, setUrl] = React.useState("https://pokeapi.co/api/v2/pokemon/1")

  function getPokemon(){
    const randomNumber = Math.floor(Math.random() * 493)
    setUrl(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
  }

  React.useEffect(() => {
    async function getPokemonData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        setPokemon(await res.json())
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
    getPokemonData();
  }, [url]);
  

  return (
    <div className="text-center flex flex-col space-y-4 place-items-center justify-center h-screen overflow-hidden relative">
      <img src={Bg_bottom} alt="Imagen_top" className="absolute -right-52 -top-96"/>
      <img src={Bg_top} alt="Imagen_bottom" className="absolute -left-52 -bottom-96"/>
      {pokemon && <Card pokemon = {pokemon}/>}
      <button 
        onClick={getPokemon}
        className="text-2xl bg-slate-600 rounded-3xl py-3 px-20 text-white sticky"
        >Get Pokemon
      </button>
    </div>
  )
}

export default App
