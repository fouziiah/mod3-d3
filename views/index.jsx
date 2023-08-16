import React  from "react";

const testStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default function Index ({pokemon}){
    return(
        <div>
        <h1>See all the pokemons</h1>
        <ul>
        {pokemon.map((item, i) => (
            <li key={i}>
                <a href={`/pokemon/${i}`}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</a>
            </li>
        ))}
       </ul>

    </div>
    
 
    )
}