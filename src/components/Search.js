import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Search = () => {
  const [currTerm, setCurrTerm] = useState("");
  const history = useHistory();
  const searchTerm = `/results?search_query=${currTerm}`;

  const changeCurrTerm = e => {
    setCurrTerm(e.target.value);
  };

  // Case of enter
  const handleEnter = e => {
    if (e.keyCode === 13) history.push(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Item..."
        value={currTerm}
        onChange={changeCurrTerm}
        onKeyDown={handleEnter}
      ></input>
      <Link to={searchTerm}>
        <button>Search</button>
      </Link>
    </div>
  );
};

export default Search;
