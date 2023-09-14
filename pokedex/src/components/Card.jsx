import React from "react"
import Toggle from "../assets/icons/toggle.svg"
import Shiny from "../assets/icons/shiny.svg"
import Bg_Card from "../assets/images/bg-pattern-card.svg"

export default function Card({pokemon}) {

    const[front, setFront] = React.useState(true)
    const[shiny, setShiny] = React.useState(false)

    function toggleVisibility(){
        setFront(
            prevFront => !prevFront
        )
    }

    function toggleShiny(){
        setShiny(
            prevShiny => !prevShiny
        )
    }

    function getImage(){
        const orientation = front ? "front":"back"
        const color = shiny ? "shiny":"default"
        const src = pokemon.sprites[`${orientation}_${color}`];
        return src
    }

    return (
        <div className="drop-shadow-2xl w-96 rounded-2xl border-2 border-slate-500 bg-slate-100">
            <div className="flex flex-col items-center relative">
                <img src={Bg_Card} className = "z-0 absolute rounded-t-2xl w-full" alt="background_card" />
                <img
                    src = {getImage()}
                    className="z-10 mt-6 poke_img bg-slate-100 border-slate-500 border-2 w-56 p-2 rounded-full hover:scale-105 transform transition-transform"
                    alt={`Imagen de ${pokemon.name}`}
                />
            <div className="pb-2">
                <p className="first-letter:uppercase text-lg font-semibold mt-4" >{pokemon.name}<span className="text-stone-400"> {pokemon.stats[0].base_stat} hp</span></p>
                <p className="text-stone-400 my-2">{pokemon.base_experience} exp</p>
            </div>
            <hr className="w-full"/>
            </div>

            
            <div className="grid grid-rows-1 grid-flow-col gap-2 mt-5">
                <div>
                    <p className="font-bold">{pokemon.stats[1].base_stat}</p>
                    <p className="text-sm">Ataque</p>
                </div>
                <div>
                    <p className="font-bold">{pokemon.stats[3].base_stat}</p>
                    <p className="text-sm">Ataque especial</p>
                </div>
                <div>
                    <p className="font-bold">{pokemon.stats[2].base_stat}</p>
                    <p className="text-sm">Defensa</p>
                </div>
            </div>

            <div className="grid grid-rows-1 grid-flow-col mt-5 border-b-2 pb-6">
                <div>
                    <p className="font-bold">{pokemon.stats[4].base_stat}</p>
                    <p className="text-sm">Defensa especial</p>
                </div>
                <div>
                    <p className="font-bold">{pokemon.stats[5].base_stat}</p>
                    <p className="text-sm">Velocidad</p>
                </div>
            </div>

            <div className="w-8 cursor-pointer inline-flex justify-center gap-10 my-6">
              <img 
                src={Toggle} 
                alt="icono toggle"
                className={`transform transition-transform hover:scale-105 ${front ? 'rotate-180' : ''}`}
                onClick={toggleVisibility}
              />
              <img 
                src={Shiny} 
                alt="icono shiny"
                className="transform transition-transform hover:scale-105"
                onClick={toggleShiny}
              />
            </div>
        </div>
      );
}