import React from 'react';
import PokeCard from './PokeCard';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const FavList = ({favHandler,favourites}) => {
    if(!favourites){
        return (
            <div><h2>You have no favourites yet. Go to PokéList give some pokémons your heart!</h2></div>
        )
    } else {
    return (
        
    <div>
    <Container>
      <Row
        xs={2}
        md={4}
        lg={5}
        className="justify-content-between my-5 d-flex gap-3"
      >
        
        {
          favourites.map((pokemon) => (
            <PokeCard
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              pokemonName={pokemon.name}
              fav={favourites.some((item)=>item.name==pokemon.name)}
              favClick={()=>favHandler(pokemon)}
            />
          ))}
      </Row>
    </Container>
   
  </div>
    );
          }
};

export default FavList;