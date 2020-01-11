import React from "react";
import Item from "./Item";

const ItemList = ({ items, searchTerm }) => {
  console.log(searchTerm);
  return items.map(
    item => item.type.startsWith(searchTerm) && <Item item={item} />
  );
};

export default ItemList;
