import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import '../styles/PokemonList.css'
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions/index";

const PokemonCard = ({ name, image, habilities, favorite, types, id }) => {
  const dispatch = useDispatch()

  const typesString = types.map((elem) => elem.type.name).join(', ')

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
      <Meta description={habilities.map(ability => ability.ability.name).join(', ')} />
    </Card>
  );
};

export default PokemonCard;