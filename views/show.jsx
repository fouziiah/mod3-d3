import React  from "react";

export default function Index ({pokemon}){
    return(
        <div>
        <h1>"Gotta Catch 'Em All"</h1>
        <h2>{pokemon.name}</h2>
        <img src={`${pokemon.img}.jpg`} alt="picture of pokemon" />
        <br />
        <a href="/pokemon"><button>Pokemon List</button></a>
    </div>
    
 
    )
}