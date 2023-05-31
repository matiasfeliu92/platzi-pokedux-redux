import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import '../styles/PokemonList.css'
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({name}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined/>}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
