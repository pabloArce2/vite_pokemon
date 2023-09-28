import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CardS from "./components/CardS";
import TypeFilter from "./components/TypeFilter";
import typesList from "./assets/types";

function App() {
  const [pokemons, setPokemons] = useState({});
  const [currentPokemonId, setCurrentPokemonId] = useState(1); 
  const pokemonLimit = 151;
  const [selectedTypes, setSelectedTypes] = useState(typesList); 


  const handleTypeCheckboxChange = (typeName) => {
    setSelectedTypes((prevSelectedTypes) => {
      return prevSelectedTypes.map((type) => {
        if (type.name === typeName) {
          return { ...type, selected: !type.selected };
        } else {
          return type;
        }
      });
    });
  };

  const onSelectAll = () => {
    setSelectedTypes((prevSelectedTypes) => {
      return prevSelectedTypes.map((type) => ({
        ...type,
        selected: true,
      }));
    });
  };

  const onDeselectAll = () => {
    setSelectedTypes((prevSelectedTypes) => {
      return prevSelectedTypes.map((type) => ({
        ...type,
        selected: false,
      }));
    });
  };
  

  
  useEffect(() => {
    async function getPokemonData() {
      try {
        if (currentPokemonId > pokemonLimit) {
          return;
        }

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();

        setPokemons((prevPokemons) => ({
          ...prevPokemons,
          [currentPokemonId]: data,
        }));

        if (currentPokemonId < pokemonLimit) {
          setCurrentPokemonId(currentPokemonId + 1);
        }
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    }

    getPokemonData();
  }, [currentPokemonId]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleSidebar = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="">
      <Navbar className="hidden md:block" toggleSidebar={toggleSidebar}/>
      <Sidebar isDrawerOpen={isDrawerOpen} toggleSidebar={toggleSidebar}>
        <TypeFilter
            typesList={selectedTypes}
            onTypeChange={handleTypeCheckboxChange}
            onSelectAll={onSelectAll}
            onDeselectAll={onDeselectAll}
          />
      </Sidebar>

      <div className="mt-32">
        <div className="grid-custom gap-10 px-24 py-12 text-center">
          {Object.values(pokemons).length > 0 ? (
            Object.values(pokemons).map((pokemon, index) => (
              <CardS key={`pokemon ${index}`} pokemon={pokemon} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;