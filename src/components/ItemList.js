import React from "react";
import Item from "./Item";
import SearchIcon from "@material-ui/icons/Search";

const ItemList = ({ items }) => {
  return items.length ? (
    items.map(([id, item]) => <Item key={id} item={item} />)
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        textAlign: "center",
        padding: 25
      }}
    >
      <div>
        <SearchIcon style={{ fontSize: "200", color: "coral" }}></SearchIcon>
      </div>
      <div>
        We couldn't find the item you're looking for. Please try searching a
        different item!
      </div>
    </div>
  );
};

export default ItemList;
