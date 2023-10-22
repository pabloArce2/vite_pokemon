import { useEffect, useState } from "react"

import typesList from "./assets/Types"
import CardS from "./components/CardS"
import Loading from "./components/Loading"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import TypeFilter from "./components/TypeFilter"

function App() {
    const [pokemons, setPokemons] = useState({})
    const [displayPokemons, setDisplayPokemons] = useState({})
    const [currentPokemonId, setCurrentPokemonId] = useState(1)
    const pokemonLimit = 151
    const [selectedTypes, setSelectedTypes] = useState(typesList)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleSidebar = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    useEffect(() => {
        async function getPokemonData() {
            try {
                if (currentPokemonId > pokemonLimit) {
                    return
                }

                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
                if (!res.ok) {
                    throw new Error("Network response was not ok")
                }
                const data = await res.json()

                setPokemons((prevPokemons) => ({
                    ...prevPokemons,
                    [currentPokemonId]: data,
                }))

                if (currentPokemonId < pokemonLimit) {
                    setCurrentPokemonId(currentPokemonId + 1)
                }
            } catch (error) {
                console.error("Error fetching Pokemon data:", error)
            }
        }

        getPokemonData()
    }, [currentPokemonId])

    useEffect(() => {
        const filteredPokemons = Object.values(pokemons).filter((pokemon) => {
            return pokemon.types.some((type: { type: { name: string } }) =>
                selectedTypes.find((selectedType) => selectedType.name === type.type.name && selectedType.selected)
            )
        })
        console.log(filteredPokemons)
        setDisplayPokemons(filteredPokemons)
    }, [pokemons, selectedTypes])

    return (
        <div className="">
            <Navbar toggleSidebar={toggleSidebar} />
            <Sidebar isDrawerOpen={isDrawerOpen} toggleSidebar={toggleSidebar}>
                <TypeFilter typesList={selectedTypes} setSelectedTypes={setSelectedTypes} />
            </Sidebar>

            <div className="mt-32">
                <div className="grid-custom gap-10 px-24 py-12 text-center">
                    {Object.values(displayPokemons).length > 0 ? (
                        Object.values(displayPokemons).map((pokemon, index) => (
                            <CardS key={`pokemon ${index}`} pokemon={pokemon} />
                        ))
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
