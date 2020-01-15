import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={`/${item.id}`}>
      <div>
        <img src={item.img} alt=""></img>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{item.availableTill}</p>
      </div>
    </Link>
  );
};

Item.propTypes = {
  item: PropTypes.object
};

export default Item;
