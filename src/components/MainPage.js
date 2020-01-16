import React from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import { ModalContextProvider } from "../contexts/ModalContext";
import ModalManager from "./Modal/ModalManager";

const MainPage = ({ items, setItems, allItems }) => {
  const searchQuery = new URLSearchParams(useLocation().search).get(
    "search_query"
  );

  if (searchQuery) {
    const filteredItems = allItems.filter(
      item =>
        item.type.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    if (JSON.stringify(items) !== JSON.stringify(filteredItems)) {
      setItems(filteredItems);
    }
  }

  return (
    <ModalContextProvider>
      <div>
        <Search />
        <ModalManager />
        <ItemList items={items} />
      </div>
    </ModalContextProvider>
  );
};

export default MainPage;
