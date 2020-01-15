import React from "react";
import PropTypes from "prop-types";
import ItemList from "./ItemList";
import Search from "./Search";
import { useLocation } from "react-router-dom";

const MainPage = ({ items, setItems }) => {
  const searchQuery = new URLSearchParams(useLocation().search).get(
    "search_query"
  );

  if (searchQuery) {
    const filteredItems = items.filter(
      item =>
        item.type.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    if (JSON.stringify(items) !== JSON.stringify(filteredItems)) {
      setItems(filteredItems);
    }
  }

  return (
    <div>
      <Search />
      <ItemList items={items} />
    </div>
  );
};

MainPage.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func
};

export default MainPage;
