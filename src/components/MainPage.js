import React from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import ModalManager from "./Modal/ModalManager";

const MainPage = ({ items, setItems, allItems }) => {
  const searchQuery = new URLSearchParams(useLocation().search).get(
    "search_query"
  );

  if (searchQuery) {
    const filteredItems = allItems.filter(item => {
      const type = item.type.toLowerCase();
      const nameWords = item.name.toLowerCase().split(" ");
      return (
        type.startsWith(searchQuery.toLowerCase()) ||
        nameWords.filter(word => word.startsWith(searchQuery.toLowerCase()))
          .length
      );
    });
    if (JSON.stringify(items) !== JSON.stringify(filteredItems)) {
      setItems(filteredItems);
    }
  }

  return (
    <div>
      <ModalManager />
      <Search />
      <ItemList items={items} />
    </div>
  );
};

export default MainPage;
