import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import '../styles/PokemonList.css'
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({name, image, habilities}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarOutlined/>}
    >
      <Meta description={habilities.map(ability => ability.ability.name).join(', ')}/>
    </Card>
  );
};

export default PokemonCard;
