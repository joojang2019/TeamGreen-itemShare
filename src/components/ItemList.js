import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return items.length ? (
    items.map(([id, item]) => <Item key={id} item={item} />)
  ) : (
    <div style={{ textAlign: "center" }}>No results found.</div>
  );
};

export default ItemList;
