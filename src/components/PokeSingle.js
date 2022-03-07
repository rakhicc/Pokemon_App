
import { useParams,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from './Loader';
import { Button } from "react-bootstrap";
const PokeSingle = () => {
    const [pokemon, setPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let {pokemonName}=useParams();
    let navigate=useNavigate();
    useEffect(() => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).catch((error)=>{
              console.log(error)
          })
          .then((response) => {
              setPokemon(response.data);
          setIsLoading(false);})
      }, []);
    console.log(pokemon);
    return (
        <div>
            {isLoading && <Loader />}
          {!isLoading &&
          <div> 
              <h2>{pokemon.name}</h2>
           <img src={pokemon.sprites.other.dream_world.front_default} />
           <p>Base experience: {pokemon.base_experience}</p>
           <p>Height:{pokemon.height}0 cm</p>
           <p>Weight:{pokemon.weight} cm</p>
           <p>Types: {" "}
           <ul>
               {pokemon.types.map((item)=>(
<li key={item.type.name}>{item.type.name}</li>
               ))}</ul>
           </p>
           <p>
                                <strong>Abilities</strong>
                            </p>
                                <ul>
                                    {pokemon.abilities.map((attribute) => (
                                        <li key={attribute.ability.name}>{attribute.ability.name}</li>
                                        
                                    ))}
                                </ul>
           </div>}  
           <Button onClick={()=>navigate(-1)}>
        Back to list
      </Button>
        </div>
    );
};

export default PokeSingle;