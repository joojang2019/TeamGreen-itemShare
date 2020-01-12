import React from "react";
import { useParams } from "react-router-dom";

const ItemPage = ({ items }) => {
  const { id } = useParams();
  const item = items[id - 1];
  return (
    <div>
      <img alt="" src={item.img}></img>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>{item.availableTill}</p>
    </div>
  );
};

export default ItemPage;
