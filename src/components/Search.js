import React, { useState } from "react";

const Search = ({ setSearchTerm }) => {
  const [currTerm, setCurrTerm] = useState("");
  const changeCurrTerm = e => {
    setCurrTerm(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for Item..."
        value={currTerm}
        onChange={changeCurrTerm}
      ></input>
      <button onClick={() => setSearchTerm(currTerm)}>Search</button>
    </div>
  );
};

export default Search;
