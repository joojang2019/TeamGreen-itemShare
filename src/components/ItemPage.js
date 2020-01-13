import React from "react";
import { useParams } from "react-router-dom";

const ItemPage = ({ items }) => {
  const { id } = useParams();
  if(items.length===0) return null;


  //need update incase we change how we assign id
  const item = items[id];

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
