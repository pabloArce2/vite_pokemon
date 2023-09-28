import React from "react"
import Pokedex from "../assets/images/pokedex.png"


export default function Navbar({toggleSidebar}) {
    return(
        <div className="bg-slate-200 h-32 px-10 flex drop-shadow-lg fixed top-0 left-0 w-full z-10">
            <div 
            onClick={toggleSidebar}
            className="flex place-items-center gap-2 mr-20">
                <img
                  src={Pokedex}
                  alt="Logo pokedex"
                  className="transform transition-transform hover:scale-110 hover:animate-pulse cursor-pointer"
                />
                <p className="text-3xl ">Pokedex</p>
            </div>
        </div>
    )
}