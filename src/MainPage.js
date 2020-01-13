import React from "react";
import ItemList from './components/ItemList';
import Search from  './components/Search';
import {useLocation} from 'react-router-dom';


const MainPage = ({items, setItems}) => {
    const searchQuery = new URLSearchParams(useLocation().search).get(
      "search_query"
    );
  
    if(searchQuery){
      const filteredItems = items.filter(item =>
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

  export default MainPage;