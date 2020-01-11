import React from 'react';

const handleSearch = () =>{

}

const Search = (state) => {
    return(
        <div>
            <input type="text" placeholder="Search for Item..."></input>
            <button onClick={handleSearch}>Search</button>
        </div>
        
    );
}

export default Search;