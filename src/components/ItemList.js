import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemList = ({ items }) => {
  return items.map(item => <Item key={item.id} item={item} />);
};

Item.propTypes = {
  items: PropTypes.array
};

export default ItemList;
